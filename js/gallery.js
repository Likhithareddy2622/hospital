/* 
   AuraCare Hospital & Research Centre - Gallery Script
   MANTRA 2026 Summer School Assignment
*/

document.addEventListener('DOMContentLoaded', () => {
  initGallery();
});

function initGallery() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  const lightbox = document.getElementById('lightbox');
  
  if (galleryItems.length === 0) return;

  let activeIndex = 0;
  // Keep track of currently visible items for lightbox navigation
  let visibleItems = [...galleryItems];

  /* --- Category Filtering --- */
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      // Filter gallery items
      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.style.display = 'block';
          item.classList.add('fade-in-item');
        } else {
          item.style.display = 'none';
          item.classList.remove('fade-in-item');
        }
      });

      // Update the visible items list for lightbox navigation
      visibleItems = galleryItems.filter(item => {
        return filterValue === 'all' || item.getAttribute('data-category') === filterValue;
      });
    });
  });

  /* --- Lightbox Functionality --- */
  const lightboxImg = lightbox.querySelector('.lightbox-img');
  const lightboxTitle = lightbox.querySelector('.lightbox-title');
  const lightboxDesc = lightbox.querySelector('.lightbox-desc');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-arrow-left');
  const nextBtn = lightbox.querySelector('.lightbox-arrow-right');

  // Open Lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      // Find index in current visible subset
      activeIndex = visibleItems.indexOf(item);
      if (activeIndex === -1) return;
      
      openLightbox();
      updateLightboxContent();
    });
  });

  function openLightbox() {
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock background scroll
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore background scroll
  }

  function updateLightboxContent() {
    if (visibleItems.length === 0 || activeIndex < 0 || activeIndex >= visibleItems.length) return;
    
    const currentItem = visibleItems[activeIndex];
    const imgElement = currentItem.querySelector('img');
    const captionTitle = currentItem.getAttribute('data-title') || imgElement.getAttribute('alt');
    const captionDesc = currentItem.getAttribute('data-description') || 'Hospital facility image';

    lightboxImg.src = imgElement.src;
    lightboxImg.alt = imgElement.alt;
    lightboxTitle.textContent = captionTitle;
    lightboxDesc.textContent = captionDesc;
  }

  // Navigation functions
  function showNext() {
    if (visibleItems.length === 0) return;
    activeIndex = (activeIndex + 1) % visibleItems.length;
    updateLightboxContent();
  }

  function showPrev() {
    if (visibleItems.length === 0) return;
    activeIndex = (activeIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightboxContent();
  }

  // Event Listeners for Lightbox
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Close lightbox on click outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
      closeLightbox();
    }
  });

  // Keyboard navigation support
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowRight') {
      showNext();
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    }
  });
}
