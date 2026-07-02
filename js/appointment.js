/* 
   AuraCare Hospital & Research Centre - Appointment Script
   MANTRA 2026 Summer School Assignment
*/

document.addEventListener('DOMContentLoaded', () => {
  initAppointmentForm();
  initFaqAccordion();
});

/**
 * Appointment booking form validation and modal confirmation
 */
function initAppointmentForm() {
  const form = document.getElementById('appointmentForm');
  const modal = document.getElementById('successModal');
  const closeModalBtn = document.getElementById('closeModal');
  
  if (!form) return;

  const fields = {
    name: {
      input: document.getElementById('fullName'),
      validate: (val) => val.trim().length >= 3,
      errorMsg: 'Name must be at least 3 characters long.'
    },
    email: {
      input: document.getElementById('email'),
      validate: (val) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(val.trim());
      },
      errorMsg: 'Please enter a valid email address.'
    },
    phone: {
      input: document.getElementById('phone'),
      validate: (val) => {
        const regex = /^\d{10}$/; // Simple 10 digit validation
        return regex.test(val.trim().replace(/[-\s()]/g, ''));
      },
      errorMsg: 'Please enter a valid 10-digit phone number.'
    },
    department: {
      input: document.getElementById('department'),
      validate: (val) => val !== '' && val !== null,
      errorMsg: 'Please select a medical department.'
    },
    date: {
      input: document.getElementById('appointmentDate'),
      validate: (val) => {
        if (!val) return false;
        const selectedDate = new Date(val);
        const today = new Date();
        // Clear times to compare dates only
        today.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);
        return selectedDate >= today;
      },
      errorMsg: 'Appointment date cannot be in the past.'
    }
  };

  // Add validation on blur/input
  Object.keys(fields).forEach(key => {
    const field = fields[key];
    if (!field.input) return;

    // Remove error class on input
    field.input.addEventListener('input', () => {
      clearError(field.input);
    });

    // Validate on blur (when leaving input)
    field.input.addEventListener('blur', () => {
      validateField(field);
    });
  });

  // Handle Form Submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isFormValid = true;

    // Validate all fields
    Object.keys(fields).forEach(key => {
      const field = fields[key];
      const isValid = validateField(field);
      if (!isValid) {
        isFormValid = false;
      }
    });

    if (isFormValid) {
      showSuccessModal();
      form.reset();
      
      // Clear success visual states
      Object.keys(fields).forEach(key => {
        const field = fields[key];
        if (field.input) {
          const group = field.input.closest('.form-group');
          if (group) group.classList.remove('success');
        }
      });
    }
  });

  // Validation functions
  function validateField(field) {
    if (!field.input) return true;
    
    const value = field.input.value;
    const isValid = field.validate(value);
    
    const group = field.input.closest('.form-group');
    if (!group) return isValid;

    if (isValid) {
      group.classList.remove('error');
      group.classList.add('success');
    } else {
      group.classList.remove('success');
      group.classList.add('error');
      
      let errorSpan = group.querySelector('.error-msg');
      if (!errorSpan) {
        errorSpan = document.createElement('span');
        errorSpan.className = 'error-msg';
        group.appendChild(errorSpan);
      }
      errorSpan.textContent = field.errorMsg;
    }

    return isValid;
  }

  function clearError(input) {
    const group = input.closest('.form-group');
    if (group) {
      group.classList.remove('error');
    }
  }

  // Modal actions
  function showSuccessModal() {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideSuccessModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', hideSuccessModal);
  }

  // Close modal when clicking on background
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        hideSuccessModal();
      }
    });
  }
}

/**
 * FAQ Collapsible Accordions (FAQ section on Contact page)
 */
function initFaqAccordion() {
  const faqHeaders = document.querySelectorAll('.faq-header');
  
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.faq-item');
      if (!item) return;

      const isActive = item.classList.contains('active');
      
      // Close all open FAQs
      document.querySelectorAll('.faq-item').forEach(faqItem => {
        faqItem.classList.remove('active');
      });

      // Toggle current FAQ
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}
