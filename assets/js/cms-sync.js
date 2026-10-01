/**
 * SAAS ENGINEERING TECHNICAL SERVICES LTD
 * Real-Time Dynamic CMS Synchronization Engine
 * Automatically reflects customizations made in the Admin Portal across the public website instantaneously.
 */

(function () {
  'use strict';

  const CMS_KEY = 'saas_cms_data';
  const TIMESTAMP_KEY = 'saas_cms_timestamp';
  const CHANNEL_NAME = 'saas_cms_channel';

  // Card ID mapping between Admin IDs and public website DOM IDs
  const divisionIdMap = {
    'welding_fabrication': 'div-welding',
    'pipeline_offshore': 'div-pipeline',
    'dredging_valves': 'div-dredging',
    'logistics_heavy_equipment': 'div-logistics',
    'manpower_instrumentation': 'div-manpower',
    'general_contracts_procurement': 'div-procurement'
  };

  function applyCmsData(customData) {
    let cmsData = customData;
    if (!cmsData) {
      try {
        const stored = localStorage.getItem(CMS_KEY);
        if (stored) {
          cmsData = JSON.parse(stored);
        }
      } catch (e) {
        console.warn('SAAS CMS: Failed to read local CMS data', e);
        return;
      }
    }

    if (!cmsData) return;

    // =========================================================================
    // 1. Contact Information & Social Media
    // =========================================================================
    if (cmsData.contact) {
      const c = cmsData.contact;

      // Top Bar Information
      const topInfoItems = document.querySelectorAll('.top-bar-info .info-item');
      if (topInfoItems.length >= 3) {
        if (c.address) {
          const svg = topInfoItems[0].querySelector('svg');
          topInfoItems[0].innerHTML = '';
          if (svg) topInfoItems[0].appendChild(svg);
          topInfoItems[0].appendChild(document.createTextNode(' ' + c.address));
        }
        if (c.email) {
          const svg = topInfoItems[1].querySelector('svg');
          topInfoItems[1].innerHTML = '';
          if (svg) topInfoItems[1].appendChild(svg);
          const mailLink = document.createElement('a');
          mailLink.href = 'mailto:' + c.email;
          mailLink.style.color = 'inherit';
          mailLink.style.textDecoration = 'none';
          mailLink.textContent = c.email;
          topInfoItems[1].appendChild(document.createTextNode(' '));
          topInfoItems[1].appendChild(mailLink);
        }
        if (c.phonePrimary) {
          const svg = topInfoItems[2].querySelector('svg');
          topInfoItems[2].innerHTML = '';
          if (svg) topInfoItems[2].appendChild(svg);
          const telLink = document.createElement('a');
          telLink.href = 'tel:' + c.phonePrimary.replace(/\s+/g, '');
          telLink.style.color = 'inherit';
          telLink.style.textDecoration = 'none';
          telLink.textContent = c.phonePrimary;
          topInfoItems[2].appendChild(document.createTextNode(' '));
          topInfoItems[2].appendChild(telLink);
        }
      }

      // Contact Section Detail Blocks (#contact)
      const contactBlocks = document.querySelectorAll('#contact .contact-block');
      contactBlocks.forEach(block => {
        const titleEl = block.querySelector('h4');
        if (!titleEl) return;
        const titleText = titleEl.textContent.trim().toLowerCase();

        if (titleText.includes('headquarters') && c.address) {
          const p = block.querySelector('.contact-detail p');
          if (p) p.textContent = c.address;
        } else if (titleText.includes('telephone') && (c.phonePrimary || c.phoneAlt)) {
          const p = block.querySelector('.contact-detail p');
          if (p) {
            const pri = c.phonePrimary || '';
            const alt = c.phoneAlt || '';
            p.innerHTML = `<a href="tel:${pri.replace(/\s+/g, '')}">${pri}</a>${alt ? ` / <a href="tel:${alt.replace(/\s+/g, '')}">${alt}</a>` : ''}`;
          }
        } else if (titleText.includes('email') && c.email) {
          const p = block.querySelector('.contact-detail p');
          if (p) {
            p.innerHTML = `<a href="mailto:${c.email}">${c.email}</a>`;
          }
        } else if (titleText.includes('hours') && c.hours) {
          const p = block.querySelector('.contact-detail p');
          if (p) {
            p.innerHTML = c.hours.replace(/ \| /g, '<br>');
          }
        }
      });

      // WhatsApp Button
      if (c.whatsapp) {
        const cleanWa = c.whatsapp.replace(/\D/g, '');
        const waCardBtn = document.querySelector('.whatsapp-card a');
        if (waCardBtn) {
          waCardBtn.href = `https://wa.me/${cleanWa}?text=Hello%20SAAS%20Engineering,%20I%20am%20inquiring%20about%20your%20services`;
        }
      }

      // Social Media Links (Top Bar & Footer)
      const updateSocial = (container) => {
        if (!container) return;
        if (c.facebook) {
          const link = container.querySelector('a[aria-label="Facebook"]');
          if (link) link.href = c.facebook;
        }
        if (c.linkedin) {
          const link = container.querySelector('a[aria-label="LinkedIn"]');
          if (link) link.href = c.linkedin;
        }
        if (c.twitter) {
          const link = container.querySelector('a[aria-label="Twitter X"]');
          if (link) link.href = c.twitter;
        }
        if (c.instagram) {
          const link = container.querySelector('a[aria-label="Instagram"]');
          if (link) link.href = c.instagram;
        }
      };

      document.querySelectorAll('.top-bar-social').forEach(updateSocial);

      // Footer Headquarters Info
      const footerCols = document.querySelectorAll('.footer-col');
      footerCols.forEach(col => {
        const h4 = col.querySelector('h4');
        if (h4 && h4.textContent.trim().toLowerCase().includes('headquarters')) {
          const ps = col.querySelectorAll('p');
          if (ps.length >= 2) {
            if (c.address) ps[0].textContent = c.address;
            if (c.phonePrimary) ps[1].innerHTML = `<strong>Phone:</strong> ${c.phonePrimary}`;
          }
        }
      });
    }

    // =========================================================================
    // 2. Hero Section & Performance Stats
    // =========================================================================
    if (cmsData.hero) {
      const h = cmsData.hero;

      const heroBadge = document.querySelector('.hero-badge');
      if (heroBadge && h.badge) {
        const svg = heroBadge.querySelector('svg');
        heroBadge.innerHTML = '';
        if (svg) heroBadge.appendChild(svg);
        heroBadge.appendChild(document.createTextNode(' ' + h.badge));
      }

      const heroH1 = document.querySelector('.hero-content h1');
      if (heroH1 && h.title) {
        heroH1.textContent = h.title;
      }

      const heroDesc = document.querySelector('.hero-content > p');
      if (heroDesc && h.subtitle) {
        heroDesc.textContent = h.subtitle;
      }

      const statItems = document.querySelectorAll('.hero-stats .stat-item');
      const stats = [h.stat1, h.stat2, h.stat3, h.stat4];
      statItems.forEach((item, idx) => {
        if (stats[idx] !== undefined && stats[idx] !== null) {
          const numEl = item.querySelector('.stat-number');
          if (numEl) numEl.textContent = stats[idx];
        }
      });
    }

    // =========================================================================
    // 3. Core Technical Divisions (Real-time Add, Edit, and Removal Sync)
    // =========================================================================
    if (Array.isArray(cmsData.divisions)) {
      const activeAdminIds = new Set(cmsData.divisions.map(d => d.id));
      const activeDomIds = new Set(cmsData.divisions.map(d => divisionIdMap[d.id] || (d.id.startsWith('div-') ? d.id : 'div-' + d.id)));

      // 3a. Hide division cards that were deleted in admin
      const existingCards = document.querySelectorAll('#activities article.division-card');
      existingCards.forEach(card => {
        if (activeDomIds.has(card.id)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });

      // 3b. Update or dynamically create division cards
      const activitiesContainer = document.querySelector('#activities .container');
      cmsData.divisions.forEach((div, index) => {
        const targetId = divisionIdMap[div.id] || (div.id.startsWith('div-') ? div.id : 'div-' + div.id);
        let card = document.getElementById(targetId) || document.querySelector(`[id*="${div.id}"]`);

        if (!card && activitiesContainer) {
          card = document.createElement('article');
          card.className = `division-card ${index % 2 === 1 ? 'reverse' : ''}`;
          card.id = targetId;
          card.innerHTML = `
            <div class="division-image">
              <span class="division-badge">${div.badge || `Division 0${index + 1}`}</span>
              <img src="assets/images/1_Welding_Fabrication_Industrial_Services_Training/industrial_fabrication_machine_shop_facility.jpeg" alt="${div.title || 'Technical Division'}">
            </div>
            <div class="division-body">
              <h3>${div.title || ''}</h3>
              <p>${div.desc || ''}</p>
              <ul class="division-list"></ul>
              <div>
                <a href="#contact" class="btn btn-primary btn-sm">Inquire About This Service</a>
              </div>
            </div>
          `;
          activitiesContainer.appendChild(card);
        }

        if (card) {
          card.style.display = '';
          const badgeEl = card.querySelector('.division-badge');
          if (badgeEl && div.badge) badgeEl.textContent = div.badge;

          const h3 = card.querySelector('.division-body h3');
          if (h3 && div.title) h3.textContent = div.title;

          const p = card.querySelector('.division-body > p');
          if (p && div.desc) p.textContent = div.desc;

          const list = card.querySelector('.division-list');
          if (list && Array.isArray(div.bullets)) {
            list.innerHTML = div.bullets.map(bullet => `
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                ${bullet}
              </li>
            `).join('');
          }
        }

        // 3c. Update Navbar Dropdown Link if matching
        let navItem = document.querySelector(`.nav-dropdown-menu a[href="#${targetId}"]`);
        const navMenu = document.querySelector('.nav-dropdown-menu');
        if (!navItem && navMenu) {
          navItem = document.createElement('a');
          navItem.className = 'dropdown-item';
          navItem.href = `#${targetId}`;
          navItem.innerHTML = `
            <span class="dropdown-num">${String(index + 1).padStart(2, '0')}</span>
            <div class="dropdown-info">
              <strong>${div.title ? div.title.split(',')[0].trim() : ''}</strong>
              <small>${div.badge || ''}</small>
            </div>
          `;
          navMenu.appendChild(navItem);
        }

        if (navItem) {
          navItem.style.display = '';
          const strong = navItem.querySelector('.dropdown-info strong');
          if (strong && div.title) {
            strong.textContent = div.title.split(',')[0].trim();
          }
        }

        // 3d. Update Division Selection Modal Cards
        let modalOption = document.querySelector(`.division-option-card[data-division-id="${div.id}"]`);
        const modalGrid = document.querySelector('#divisionModal .division-grid');
        if (!modalOption && modalGrid) {
          modalOption = document.createElement('div');
          modalOption.className = 'division-option-card';
          modalOption.setAttribute('data-division-id', div.id);
          modalOption.setAttribute('data-division-name', `${div.badge || ''}: ${div.title || ''}`);
          modalOption.setAttribute('data-division-short', div.title || '');
          modalOption.setAttribute('tabindex', '0');
          modalOption.setAttribute('role', 'button');
          modalOption.innerHTML = `
            <div class="option-header">
              <span class="option-badge">${div.badge || `Division 0${index + 1}`}</span>
              <span class="option-check">
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
              </span>
            </div>
            <h4>${div.title || ''}</h4>
            <p>${div.desc || ''}</p>
          `;
          modalGrid.appendChild(modalOption);

          modalOption.addEventListener('click', () => {
            const hiddenDivisionInput = document.getElementById('serviceDivision');
            const selectedDivisionText = document.getElementById('selectedDivisionText');
            const selectedDivisionSub = document.getElementById('selectedDivisionSub');
            const pickerBadge = document.getElementById('pickerBadge');
            const divisionTrigger = document.getElementById('divisionModalTrigger');
            const divisionModal = document.getElementById('divisionModal');

            document.querySelectorAll('.division-option-card').forEach(c => c.classList.remove('selected'));
            modalOption.classList.add('selected');

            if (hiddenDivisionInput) hiddenDivisionInput.value = div.id;
            if (selectedDivisionText) {
              selectedDivisionText.textContent = div.title || '';
              selectedDivisionText.classList.remove('placeholder');
            }
            if (selectedDivisionSub) {
              selectedDivisionSub.textContent = 'Selected division for technical quote';
            }
            if (pickerBadge) {
              pickerBadge.textContent = 'Change';
              pickerBadge.style.backgroundColor = 'var(--accent)';
            }
            if (divisionTrigger) divisionTrigger.classList.remove('is-invalid');
            if (divisionModal) {
              setTimeout(() => {
                divisionModal.classList.remove('active');
                document.body.style.overflow = '';
              }, 220);
            }
          });
        }

        if (modalOption) {
          modalOption.style.display = '';
          const optBadge = modalOption.querySelector('.option-badge');
          if (optBadge && div.badge) optBadge.textContent = div.badge;

          const optH4 = modalOption.querySelector('h4');
          if (optH4 && div.title) optH4.textContent = div.title;

          const optP = modalOption.querySelector('p');
          if (optP && div.desc) optP.textContent = div.desc;

          if (div.title) {
            modalOption.setAttribute('data-division-name', `${div.badge || ''}: ${div.title}`);
            modalOption.setAttribute('data-division-short', div.title);
          }
        }
      });

      // 3e. Hide dropdown items not matching active divisions
      document.querySelectorAll('.nav-dropdown-menu .dropdown-item').forEach(item => {
        const href = item.getAttribute('href');
        if (href && href.startsWith('#')) {
          const cardId = href.substring(1);
          if (!activeDomIds.has(cardId)) {
            item.style.display = 'none';
          }
        }
      });

      // 3f. Hide modal options not matching active divisions
      document.querySelectorAll('.division-option-card').forEach(option => {
        const divId = option.getAttribute('data-division-id');
        if (divId && !activeAdminIds.has(divId)) {
          option.style.display = 'none';
        }
      });

      // 3g. Update section description count
      const sectionDesc = document.querySelector('#activities .section-header p');
      if (sectionDesc) {
        sectionDesc.textContent = `Delivering comprehensive engineering solutions structured across ${cmsData.divisions.length} distinct operational divisions to meet rigorous industrial specifications.`;
      }
    }

    // =========================================================================
    // 4. Project Gallery Synchronization (Real-time Add, Edit, and Removal Sync)
    // =========================================================================
    if (Array.isArray(cmsData.gallery)) {
      const publicGalleryGrid = document.getElementById('galleryGrid');
      if (publicGalleryGrid) {
        if (cmsData.gallery.length === 0) {
          publicGalleryGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: #8892b0;">
              No gallery items currently published.
            </div>
          `;
        } else {
          publicGalleryGrid.innerHTML = cmsData.gallery.map(item => {
            const rawImg = item.img || '';
            const imgSrc = (rawImg.startsWith('data:') || rawImg.startsWith('http')) 
              ? rawImg 
              : rawImg.replace(/^(\.\.\/)+/, '');

            return `
            <div class="gallery-item" data-category="${item.category || 'all'}">
              <img src="${imgSrc}" alt="${item.title || 'Project photo'}" onerror="this.src='logo/logo.png'; this.style.padding='2rem';">
              <div class="gallery-overlay">
                <div class="gallery-zoom-icon"><svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
                <h4>${item.title || ''}</h4>
                <span>${item.subtitle || ''}</span>
              </div>
            </div>
          `;
          }).join('');

          // Re-apply active category filter if one is selected
          const activeFilterBtn = document.querySelector('.filter-btn.active');
          const currentFilter = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'all';
          if (currentFilter && currentFilter !== 'all') {
            publicGalleryGrid.querySelectorAll('.gallery-item').forEach(el => {
              el.style.display = el.getAttribute('data-category') === currentFilter ? 'block' : 'none';
            });
          }
        }
      }
    }
  }

  // Initial Sync on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyCmsData());
  } else {
    applyCmsData();
  }

  // =========================================================================
  // Three-Tier Instant Real-Time Synchronization Listeners
  // =========================================================================

  // 1. BroadcastChannel (Instant 0ms inter-tab message passing)
  if (typeof window.BroadcastChannel !== 'undefined') {
    try {
      const channel = new BroadcastChannel(CHANNEL_NAME);
      channel.onmessage = (event) => {
        if (event.data && event.data.type === 'CMS_UPDATED') {
          applyCmsData(event.data.data);
        }
      };
    } catch (e) {
      console.warn('BroadcastChannel not supported in this context', e);
    }
  }

  // 2. Storage event listener (Cross-tab/Cross-window storage trigger)
  window.addEventListener('storage', (e) => {
    if (e.key === CMS_KEY || e.key === TIMESTAMP_KEY) {
      applyCmsData();
    }
  });

  // 3. Ultra-Fast Timestamp Polling (Ensures 100% sync even in background tabs or file:// URLs)
  let lastTimestamp = localStorage.getItem(TIMESTAMP_KEY);
  setInterval(() => {
    const current = localStorage.getItem(TIMESTAMP_KEY);
    if (current && current !== lastTimestamp) {
      lastTimestamp = current;
      applyCmsData();
    }
  }, 500);

})();
