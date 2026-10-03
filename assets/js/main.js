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
        if (item === dropdownTrigger) {
          e.preventDefault();
          closeMobileMenu();
          const navDivModal = document.getElementById('navDivisionsModal');
          if (navDivModal) {
            navDivModal.classList.add('active');
            document.body.style.overflow = 'hidden';
          }
          return;
        }
        closeMobileMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (navMenu.classList.contains('open')) {
          closeMobileMenu();
        }
        const navDivModal = document.getElementById('navDivisionsModal');
        if (navDivModal && navDivModal.classList.contains('active')) {
          navDivModal.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1140 && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // =========================================================================
  // Core Operational Divisions Modular Modal Navigation Handlers
  // =========================================================================
  const navDivModal = document.getElementById('navDivisionsModal');
  const closeNavDivisionsModal = document.getElementById('closeNavDivisionsModal');
  const cancelNavDivisionsModal = document.getElementById('cancelNavDivisionsModal');
  const viewAllActivitiesBtn = document.getElementById('viewAllActivitiesBtn');

  const closeNavModal = () => {
    if (navDivModal) navDivModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (dropdownTrigger) {
    dropdownTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      if (navDivModal) {
        navDivModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  if (closeNavDivisionsModal) closeNavDivisionsModal.addEventListener('click', closeNavModal);
  if (cancelNavDivisionsModal) cancelNavDivisionsModal.addEventListener('click', closeNavModal);
  if (viewAllActivitiesBtn) viewAllActivitiesBtn.addEventListener('click', closeNavModal);
  if (navDivModal) {
    navDivModal.addEventListener('click', (e) => {
      if (e.target === navDivModal) closeNavModal();
    });
  }

  // Delegated handler for modal grid cards
  const navDivModalGrid = document.getElementById('navDivisionsModalGrid');
  if (navDivModalGrid) {
    navDivModalGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.nav-division-card');
      if (card) {
        const targetId = card.getAttribute('data-target-id');
        closeNavModal();
        if (targetId) {
          const targetEl = document.getElementById(targetId);
          if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });

    navDivModalGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.nav-division-card');
        if (card) {
          e.preventDefault();
          const targetId = card.getAttribute('data-target-id');
          closeNavModal();
          if (targetId) {
            const targetEl = document.getElementById(targetId);
            if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
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

  // Gallery Category Filtering (Delegated to support dynamically updated CMS filter pills)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.gallery-filters .filter-btn');
    if (!btn) return;

    const filterContainer = btn.closest('.gallery-filters');
    if (filterContainer) {
      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    }
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter') || 'all';
    const items = document.querySelectorAll('.gallery-grid .gallery-item, #galleryGrid .gallery-item');

    items.forEach(item => {
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

  // Lightbox Modal
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalClose = document.getElementById('modalClose');

  if (modal && modalImg && modalClose) {
    document.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;

      const img = item.querySelector('img');
      const title = item.querySelector('h4')?.textContent || '';
      const category = item.querySelector('span')?.textContent || '';

      if (img) {
        modalImg.src = img.src;
        modalImg.alt = img.alt || '';
        modalCaption.textContent = `${title} — ${category}`;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
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

  // Service Division Modular Modal Controller
  const divisionModal = document.getElementById('divisionModal');
  const divisionTrigger = document.getElementById('divisionModalTrigger');
  const closeDivisionBtn = document.getElementById('closeDivisionModal');
  const cancelDivisionBtn = document.getElementById('cancelDivisionModal');
  const confirmDivisionBtn = document.getElementById('confirmDivisionModal');
  const divisionCards = document.querySelectorAll('.division-option-card');
  const hiddenDivisionInput = document.getElementById('serviceDivision');
  const selectedDivisionText = document.getElementById('selectedDivisionText');
  const selectedDivisionSub = document.getElementById('selectedDivisionSub');
  const pickerBadge = document.getElementById('pickerBadge');
  
  let tempSelectedCard = null;

  const openDivisionModal = () => {
    if (!divisionModal) return;
    divisionModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (divisionTrigger) divisionTrigger.setAttribute('aria-expanded', 'true');
  };

  const closeDivisionModal = () => {
    if (!divisionModal) return;
    divisionModal.classList.remove('active');
    document.body.style.overflow = '';
    if (divisionTrigger) divisionTrigger.setAttribute('aria-expanded', 'false');
  };

  const applyDivisionSelection = (card) => {
    if (!card) return;
    divisionCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    tempSelectedCard = card;

    const divisionId = card.getAttribute('data-division-id');
    const divisionShort = card.getAttribute('data-division-short');

    if (hiddenDivisionInput) hiddenDivisionInput.value = divisionId;
    if (selectedDivisionText) {
      selectedDivisionText.textContent = divisionShort;
      selectedDivisionText.classList.remove('placeholder');
    }
    if (selectedDivisionSub) {
      selectedDivisionSub.textContent = 'Selected division for technical quote';
    }
    if (pickerBadge) {
      pickerBadge.textContent = 'Change';
      pickerBadge.style.backgroundColor = 'var(--accent)';
    }
    if (divisionTrigger) {
      divisionTrigger.classList.remove('is-invalid');
    }
  };

  if (divisionTrigger && divisionModal) {
    divisionTrigger.addEventListener('click', openDivisionModal);
    divisionTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDivisionModal();
      }
    });

    if (closeDivisionBtn) closeDivisionBtn.addEventListener('click', closeDivisionModal);
    if (cancelDivisionBtn) cancelDivisionBtn.addEventListener('click', closeDivisionModal);

    divisionModal.addEventListener('click', (e) => {
      if (e.target === divisionModal) closeDivisionModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && divisionModal.classList.contains('active')) {
        closeDivisionModal();
      }
    });

    // Delegated click and keydown for all division cards (static and dynamic)
    divisionModal.addEventListener('click', (e) => {
      const card = e.target.closest('.division-option-card');
      if (card) {
        applyDivisionSelection(card);
        setTimeout(closeDivisionModal, 220);
      }
    });

    divisionModal.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.division-option-card');
        if (card) {
          e.preventDefault();
          applyDivisionSelection(card);
          closeDivisionModal();
        }
      }
    });

    if (confirmDivisionBtn) {
      confirmDivisionBtn.addEventListener('click', () => {
        if (!tempSelectedCard && divisionCards.length > 0) {
          applyDivisionSelection(divisionCards[0]);
        }
        closeDivisionModal();
      });
    }
  }

  // Delegated handler for "Inquire About This Service" links on division cards
  document.addEventListener('click', (e) => {
    const inquireLink = e.target.closest('article.division-card a[href="#contact"]');
    if (inquireLink) {
      const article = inquireLink.closest('article.division-card');
      if (article && article.id) {
        const invMap = {
          'div-welding': 'welding_fabrication',
          'div-pipeline': 'pipeline_offshore',
          'div-dredging': 'dredging_valves',
          'div-logistics': 'logistics_heavy_equipment',
          'div-manpower': 'manpower_instrumentation',
          'div-procurement': 'general_contracts_procurement'
        };
        const divId = invMap[article.id] || article.id.replace(/^div-/, '');
        const matchingCard = document.querySelector(`.division-option-card[data-division-id="${divId}"]`);
        if (matchingCard && typeof applyDivisionSelection === 'function') {
          applyDivisionSelection(matchingCard);
        }
      }
    }
  });

  // Quote / Inquiry Form Submission Handling
  const quoteForm = document.getElementById('quoteForm');
  const formToast = document.getElementById('formToast');

  if (quoteForm && formToast) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Anti-Bot Honeypot Guard: If trap input is filled, silently discard without hitting Supabase
      const botTrap = document.getElementById('botHoneyCheck');
      if (botTrap && botTrap.value) {
        quoteForm.reset();
        formToast.style.display = 'flex';
        setTimeout(() => { formToast.style.display = 'none'; }, 5000);
        return;
      }

      // Check if division is selected
      if (!hiddenDivisionInput || !hiddenDivisionInput.value) {
        if (divisionTrigger) {
          divisionTrigger.classList.add('is-invalid');
          divisionTrigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        openDivisionModal();
        return;
      }

      // Supabase Free Tier Rate Limit Guard: 20-second client submission cooldown
      const LAST_SUBMIT_KEY = 'saas_last_inquiry_ts';
      const lastSubmit = Number(sessionStorage.getItem(LAST_SUBMIT_KEY) || 0);
      const now = Date.now();
      if (now - lastSubmit < 20000) {
        const waitSec = Math.ceil((20000 - (now - lastSubmit)) / 1000);
        if (typeof window.customAlert === 'function') {
          window.customAlert(`Please wait ${waitSec} seconds before submitting another inquiry. This prevents duplicate entries.`, 'Submission Cooldown', 'warning');
        } else {
          alert(`Please wait ${waitSec} seconds before submitting another inquiry.`);
        }
        return;
      }
      
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="btn-spinner" viewBox="0 0 24 24" width="18" height="18" fill="none">
          <circle cx="12" cy="12" r="10" stroke="rgba(255, 255, 255, 0.28)" stroke-width="2.8" fill="none"></circle>
          <path d="M12 2a10 10 0 0 1 10 10" stroke="#ffffff" stroke-width="2.8" stroke-linecap="round" fill="none"></path>
        </svg>
        <span style="margin-left: 0.45rem;">Processing Request...</span>
      `;

      // Capture inquiry details with strict character size caps to protect Supabase database storage
      const divisionName = selectedDivisionText ? selectedDivisionText.textContent : (hiddenDivisionInput ? hiddenDivisionInput.value : 'General Engineering');

      const newInquiry = {
        id: 'inq-' + Date.now(),
        name: (document.getElementById('fullName')?.value || '').trim().slice(0, 100) || 'Anonymous',
        organization: (document.getElementById('companyName')?.value || '').trim().slice(0, 150) || 'Individual',
        email: (document.getElementById('emailAddress')?.value || '').trim().slice(0, 120),
        phone: (document.getElementById('phoneNumber')?.value || '').trim().slice(0, 40),
        division: String(divisionName).slice(0, 120),
        scope: (document.getElementById('projectScope')?.value || '').trim().slice(0, 2000),
        status: 'new'
      };

      // Record timestamp to enforce cooldown
      sessionStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));

      // 1. Save to Supabase — visible across all devices in Admin Panel instantly
      saasDB.insertInquiry(newInquiry).catch(err => {
        console.error('Could not save inquiry to Supabase:', err);
      });

      // 2. Dispatch automated email notification to the company mailbox
      try {
        const companyEmail = (window.__saasCmsData?.contact?.email || 'contact@saas-engineering-technical-services.com').trim();
        const emailPayload = {
          _subject: `New Technical Quote Inquiry: ${newInquiry.name} (${newInquiry.division})`,
          _replyto: newInquiry.email,
          _template: 'table',
          _captcha: 'false',
          'Inquiry Reference': newInquiry.id,
          'Client Name': newInquiry.name,
          'Company / Organization': newInquiry.organization || 'Individual',
          'Email Address': newInquiry.email,
          'Phone Number': newInquiry.phone || 'Not provided',
          'Service Division': newInquiry.division,
          'Project Scope & Specifications': newInquiry.scope || 'No details provided',
          'Submitted Date': new Date().toLocaleString()
        };

        fetch(`https://formsubmit.co/ajax/${encodeURIComponent(companyEmail)}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(emailPayload)
        }).catch(err => {
          console.warn('Email dispatch background notification notice:', err);
        });
      } catch (err) {
        console.warn('Email dispatch error:', err);
      }

      // Reset form and show success
      setTimeout(() => {
        quoteForm.reset();
        if (hiddenDivisionInput) hiddenDivisionInput.value = '';
        if (selectedDivisionText) {
          selectedDivisionText.textContent = 'Select an operational division...';
          selectedDivisionText.classList.add('placeholder');
        }
        if (selectedDivisionSub) {
          selectedDivisionSub.textContent = 'Click to open division selection modal';
        }
        if (pickerBadge) {
          pickerBadge.textContent = 'Choose Division';
          pickerBadge.style.backgroundColor = 'var(--primary)';
        }
        divisionCards.forEach(c => c.classList.remove('selected'));
        tempSelectedCard = null;

        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        formToast.style.display = 'flex';
        
        setTimeout(() => {
          formToast.style.display = 'none';
        }, 8000);
      }, 1200);
    });
  }

  // =========================================================================
  // Universal Modular Custom Dialog Modal (Replaces native browser alert)
  // =========================================================================
  const dialogModal = document.getElementById('customDialogModal');
  const dialogTitle = document.getElementById('dialogModalTitle');
  const dialogSub = document.getElementById('dialogModalSub');
  const dialogMessage = document.getElementById('dialogModalMessage');
  const dialogIconWrapper = document.getElementById('dialogIconWrapper');
  const dialogConfirmBtn = document.getElementById('dialogConfirmBtn');
  const dialogCancelBtn = document.getElementById('dialogCancelBtn');
  const closeDialogBtn = document.getElementById('closeDialogModalBtn');

  let activeDialogResolver = null;

  const dialogIcons = {
    info: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>',
    warning: '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',
    danger: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>'
  };

  const showCustomDialog = ({
    title = 'Notification',
    subtitle = 'System Notice',
    message = '',
    type = 'info',
    confirmText = 'OK',
    cancelText = null,
    isDanger = false
  }) => {
    return new Promise((resolve) => {
      activeDialogResolver = resolve;

      if (dialogTitle) dialogTitle.textContent = title;
      if (dialogSub) dialogSub.textContent = subtitle;
      if (dialogMessage) dialogMessage.textContent = message;

      if (dialogIconWrapper) {
        dialogIconWrapper.className = `dialog-icon-wrapper ${type}`;
        dialogIconWrapper.innerHTML = dialogIcons[type] || dialogIcons.info;
      }

      if (dialogConfirmBtn) {
        dialogConfirmBtn.textContent = confirmText;
        dialogConfirmBtn.className = isDanger ? 'btn btn-danger btn-sm' : 'btn btn-accent btn-sm';
      }

      if (dialogCancelBtn) {
        if (cancelText) {
          dialogCancelBtn.style.display = 'inline-block';
          dialogCancelBtn.textContent = cancelText;
        } else {
          dialogCancelBtn.style.display = 'none';
        }
      }

      if (dialogModal) {
        dialogModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
          if (dialogConfirmBtn) dialogConfirmBtn.focus();
        }, 50);
      }
    });
  };

  const closeCustomDialog = (result = false) => {
    if (dialogModal) {
      dialogModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (activeDialogResolver) {
      const res = activeDialogResolver;
      activeDialogResolver = null;
      res(result);
    }
  };

  if (dialogConfirmBtn) {
    dialogConfirmBtn.addEventListener('click', () => closeCustomDialog(true));
  }
  if (dialogCancelBtn) {
    dialogCancelBtn.addEventListener('click', () => closeCustomDialog(false));
  }
  if (closeDialogBtn) {
    closeDialogBtn.addEventListener('click', () => closeCustomDialog(false));
  }
  if (dialogModal) {
    dialogModal.addEventListener('click', (e) => {
      if (e.target === dialogModal) closeCustomDialog(false);
    });
  }
  document.addEventListener('keydown', (e) => {
    if (dialogModal && dialogModal.classList.contains('active')) {
      if (e.key === 'Escape') {
        closeCustomDialog(false);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        closeCustomDialog(true);
      }
    }
  });

  window.customAlert = (message, title = 'Notification', type = 'info') => {
    return showCustomDialog({
      title: title,
      subtitle: 'System Notice',
      message: message,
      type: type,
      confirmText: 'OK',
      cancelText: null
    });
  };

  window.customConfirm = (message, options = {}) => {
    return showCustomDialog({
      title: options.title || 'Please Confirm',
      subtitle: options.subtitle || 'Confirmation Required',
      message: message,
      type: options.isDanger ? 'danger' : (options.type || 'warning'),
      confirmText: options.confirmText || 'Confirm',
      cancelText: options.cancelText || 'Cancel',
      isDanger: options.isDanger || false
    });
  };

  // Override native alert globally
  window.alert = (msg) => {
    window.customAlert(String(msg), 'System Notification', 'warning');
  };
});
