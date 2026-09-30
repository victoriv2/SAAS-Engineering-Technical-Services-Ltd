/**
 * SAAS ENGINEERING TECHNICAL SERVICES LTD
 * Interactive Clientside Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Drawer & Dropdown Interactions
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownTrigger = document.getElementById('dropdownTrigger');
  const divisionsDropdown = document.getElementById('divisionsDropdown');
  const allNavClickables = document.querySelectorAll('.nav-link, .dropdown-item, .dropdown-all, .nav-cta .btn');

  const closeMobileMenu = () => {
    if (navMenu) navMenu.classList.remove('open');
    if (mobileToggle) {
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
    if (navBackdrop) navBackdrop.classList.remove('active');
    if (divisionsDropdown) divisionsDropdown.classList.remove('mobile-open');
    document.body.style.overflow = '';
  };

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen);
      if (navBackdrop) navBackdrop.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    if (navBackdrop) {
      navBackdrop.addEventListener('click', closeMobileMenu);
    }

    allNavClickables.forEach(item => {
      item.addEventListener('click', (e) => {
        // In mobile view, clicking the Core Divisions trigger toggles the sub-menu accordion
        if (item === dropdownTrigger && window.innerWidth <= 1024) {
          e.preventDefault();
          if (divisionsDropdown) {
            const isSubOpen = divisionsDropdown.classList.toggle('mobile-open');
            dropdownTrigger.setAttribute('aria-expanded', isSubOpen);
          }
          return;
        }
        closeMobileMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024 && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // Header Scroll State
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // Active Link Tracking via Intersection Observer
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { rootMargin: '-25% 0px -65% 0px' });

    sections.forEach(sec => observer.observe(sec));
  }

  // Gallery Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.style.opacity = '0';
          setTimeout(() => {
            item.style.opacity = '1';
          }, 50);
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Modal
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalClose');

  if (modal && modalImg && modalClose) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h4')?.textContent || '';
        const category = item.querySelector('span')?.textContent || '';

        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalCaption.textContent = `${title} — ${category}`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      modalImg.src = '';
    };

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // Quote / Inquiry Form Submission Handling
  const quoteForm = document.getElementById('quoteForm');
  const formToast = document.getElementById('formToast');

  if (quoteForm && formToast) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
          <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff"></path>
        </svg> Processing Request...
      `;

      // Simulate quick processing
      setTimeout(() => {
        quoteForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        formToast.style.display = 'flex';
        
        setTimeout(() => {
          formToast.style.display = 'none';
        }, 8000);
      }, 1200);
    });
  }
});
