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

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

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

    // Auto-purge only legacy test 7 entries (preserve legitimate Division 07+)
    if (Array.isArray(cmsData.divisions)) {
      const origCount = cmsData.divisions.length;
      let needsSave = false;

      cmsData.divisions = cmsData.divisions.filter(d => {
        const t = (d.title || '').trim().toLowerCase();
        const id = (d.id || '').trim().toLowerCase();
        return !(t === 'test 7' || id === 'test_7' || id === 'div_test_7');
      });

      // Normalize any 'erererer' placeholder to 'test' so both admin and public view stay 100% identical
      cmsData.divisions.forEach(d => {
        if ((d.title || '').toLowerCase() === 'erererer') {
          d.title = 'test';
          needsSave = true;
        }
        if ((d.sub || '').toLowerCase() === 'erererer') {
          d.sub = 'test';
          needsSave = true;
        }
      });

      // Ensure Division 06 (General Contracts & Procurement) is present in divisions
      const hasProcurement = cmsData.divisions.some(d => d.id === 'general_contracts_procurement');
      if (!hasProcurement) {
        const manpowerIdx = cmsData.divisions.findIndex(d => d.id === 'manpower_instrumentation');
        const insertIdx = manpowerIdx !== -1 ? manpowerIdx + 1 : 5;
        cmsData.divisions.splice(insertIdx, 0, {
          id: "general_contracts_procurement",
          badge: "Division 06",
          title: "General Contracts, Procurement & Industrial Safety Gadgets (PPE)",
          sub: "General Contracts & Procurement",
          desc: "Managing end-to-end industrial supply chain operations, technical materials procurement, and general contracting services. We supply certified Personal Protective Equipment (hard hats, face shields, hearing protection, fall protection harnesses, flame-retardant coveralls), safety instrumentation, office equipment, and engineering consumables.",
          img: "assets/images/7_General_Contracts_Procurement_and_Safety_Gadgets/safety_helmet_hard_hat_ppe.jpg",
          bullets: [
            "Certified Personal Protective Equipment (PPE)",
            "Fall Protection Harnesses & Safety Gear",
            "Industrial Procurement & Supply Chain",
            "Technical Parts & Hardware Supply",
            "General Merchandise & Contracting",
            "Warehouse Logistics & Fast Delivery"
          ]
        });
        needsSave = true;
      }

      if (cmsData.divisions.length !== origCount || needsSave) {
        if (!cmsData.hero) cmsData.hero = {};
        cmsData.hero.stat1 = String(cmsData.divisions.length);
        try {
          localStorage.setItem(CMS_KEY, JSON.stringify(cmsData));
          localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
        } catch (e) {}
      }
    }

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

      // Synchronize Specialized Divisions stat counter with actual active divisions count
      if (Array.isArray(cmsData.divisions)) {
        statItems.forEach(item => {
          const label = item.querySelector('.stat-label');
          if (label && label.textContent.trim().toLowerCase().includes('specialized divisions')) {
            const numEl = item.querySelector('.stat-number');
            if (numEl) numEl.textContent = String(cmsData.divisions.length);
          }
        });
      }
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
      const navMenu = document.querySelector('.nav-dropdown-menu');
      const dropdownAll = navMenu ? navMenu.querySelector('.dropdown-all') : null;
      const fallbackOptionImg = 'assets/images/1_Welding_Fabrication_Industrial_Services_Training/industrial_fabrication_machine_shop_facility.jpeg';

      cmsData.divisions.forEach((div, index) => {
        const targetId = divisionIdMap[div.id] || (div.id.startsWith('div-') ? div.id : 'div-' + div.id);
        let card = document.getElementById(targetId) || document.querySelector(`[id*="${div.id}"]`);
        const cardImg = div.img || fallbackOptionImg;
        const displayCardImg = (cardImg.startsWith('data:') || cardImg.startsWith('http')) ? cardImg : cardImg.replace(/^(\.\.\/)+/, '');

        if (!card && activitiesContainer) {
          card = document.createElement('article');
          card.className = `division-card ${index % 2 === 1 ? 'reverse' : ''}`;
          card.id = targetId;
          card.innerHTML = `
            <div class="division-image">
              <span class="division-badge">${div.badge || `Division 0${index + 1}`}</span>
              <img src="${displayCardImg}" alt="${div.title || 'Technical Division'}">
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

          const imgEl = card.querySelector('.division-image img');
          if (imgEl && div.img) {
            imgEl.src = displayCardImg;
            if (div.title) imgEl.alt = div.title;
          }

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
          if (dropdownAll) {
            navMenu.insertBefore(navItem, dropdownAll);
          } else {
            navMenu.appendChild(navItem);
          }
        }

        if (navItem) {
          navItem.style.display = '';
          const numEl = navItem.querySelector('.dropdown-num');
          if (numEl) numEl.textContent = String(index + 1).padStart(2, '0');
          const strong = navItem.querySelector('.dropdown-info strong');
          if (strong && div.title) {
            strong.textContent = div.title.split(',')[0].trim();
          }
          const small = navItem.querySelector('.dropdown-info small');
          if (small && div.badge) {
            small.textContent = div.badge;
          }
          // Ensure it stays before the dropdown-all link
          if (dropdownAll && navItem.compareDocumentPosition(dropdownAll) === Node.DOCUMENT_POSITION_PRECEDING) {
            navMenu.insertBefore(navItem, dropdownAll);
          }
        }

        // 3d. Update Division Selection Modal Cards
        let modalOption = document.querySelector(`.division-option-card[data-division-id="${div.id}"]`);
        const modalGrid = document.querySelector('#divisionModal .division-modal-grid') || document.querySelector('#divisionModal .division-grid');

        if (!modalOption && modalGrid) {
          modalOption = document.createElement('div');
          modalOption.className = 'division-option-card';
          modalOption.setAttribute('data-division-id', div.id);
          modalOption.setAttribute('data-division-name', `${div.badge || ''}: ${div.title || ''}`);
          modalOption.setAttribute('data-division-short', div.title || '');
          modalOption.setAttribute('tabindex', '0');
          modalOption.setAttribute('role', 'button');
          modalOption.innerHTML = `
            <div class="option-thumb-wrap">
              <img src="${displayCardImg}" alt="${div.title || 'Technical Division'}" class="option-thumb-img" onerror="this.src='logo/logo.png'">
            </div>
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
          const optThumbImg = modalOption.querySelector('.option-thumb-img');
          if (optThumbImg && div.img) optThumbImg.src = displayCardImg;

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

      // 3e. Render Modular Navbar Divisions Modal Grid (#navDivisionsModalGrid)
      const navDivModalGrid = document.getElementById('navDivisionsModalGrid');
      const navDivCount = document.getElementById('navDivisionsCount');
      if (navDivCount) {
        navDivCount.textContent = String(cmsData.divisions.length);
      }

      if (navDivModalGrid) {
        navDivModalGrid.innerHTML = cmsData.divisions.map((div, index) => {
          const targetId = divisionIdMap[div.id] || (div.id.startsWith('div-') ? div.id : 'div-' + div.id);
          const cardImg = div.img || fallbackOptionImg;
          const displayCardImg = (cardImg.startsWith('data:') || cardImg.startsWith('http')) ? cardImg : cardImg.replace(/^(\.\.\/)+/, '');
          const badgeText = div.badge || `Division 0${index + 1}`;
          const titleText = div.title || 'Technical Division';
          const descText = div.desc || '';

          return `
            <div class="nav-division-card" data-div-id="${div.id}">
              <div class="nav-division-thumb-wrap">
                <span class="nav-division-badge-overlay">${badgeText}</span>
                <img src="${displayCardImg}" alt="${titleText}" class="nav-division-thumb-img" onerror="this.src='logo/logo.png'">
              </div>
              <div class="nav-division-card-content">
                <h4>${titleText}</h4>
                <p>${descText}</p>
                <div class="nav-division-card-actions">
                  <a href="#${targetId}" class="btn btn-primary btn-xs nav-modal-explore-btn">
                    <span>Explore</span>
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-7.85-1.42 1.42 5.43 5.43H5v2z"/></svg>
                  </a>
                  <a href="#contact" class="btn btn-secondary btn-xs nav-modal-inquire-btn" data-division-name="${titleText}">
                    <span>Inquire</span>
                  </a>
                </div>
              </div>
            </div>
          `;
        }).join('');

        // Attach event listeners to explore and inquire buttons
        navDivModalGrid.querySelectorAll('.nav-modal-explore-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const navDivModal = document.getElementById('navDivisionsModal');
            if (navDivModal) navDivModal.classList.remove('active');
            document.body.style.overflow = '';
          });
        });

        navDivModalGrid.querySelectorAll('.nav-modal-inquire-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const divName = btn.getAttribute('data-division-name');
            const navDivModal = document.getElementById('navDivisionsModal');
            if (navDivModal) navDivModal.classList.remove('active');
            document.body.style.overflow = '';
            const serviceDivisionInput = document.getElementById('serviceDivision');
            const selectedDivisionText = document.getElementById('selectedDivisionText');
            if (serviceDivisionInput && divName) serviceDivisionInput.value = divName;
            if (selectedDivisionText && divName) selectedDivisionText.textContent = divName;
          });
        });
      }

      // 3f. Update dropdown-all link if fallback dropdown exists
      if (dropdownAll) {
        const span = dropdownAll.querySelector('span');
        if (span) {
          span.textContent = `View All ${cmsData.divisions.length} Operational Divisions`;
        }
        if (navMenu && navMenu.lastElementChild !== dropdownAll) {
          navMenu.appendChild(dropdownAll);
        }
      }

      // 3f. Hide dropdown items not matching active divisions
      document.querySelectorAll('.nav-dropdown-menu .dropdown-item').forEach(item => {
        const href = item.getAttribute('href');
        if (href && href.startsWith('#')) {
          const cardId = href.substring(1);
          if (!activeDomIds.has(cardId)) {
            item.style.display = 'none';
          }
        }
      });

      // 3g. Hide modal options not matching active divisions
      document.querySelectorAll('.division-option-card').forEach(option => {
        const divId = option.getAttribute('data-division-id');
        if (divId && !activeAdminIds.has(divId)) {
          option.style.display = 'none';
        }
      });

      // 3h. Update section description count
      const sectionDesc = document.querySelector('#activities .section-header p');
      if (sectionDesc) {
        sectionDesc.textContent = `Delivering comprehensive engineering solutions structured across ${cmsData.divisions.length} distinct operational divisions to meet rigorous industrial specifications.`;
      }

      // 3i. Sync footer core divisions links
      const footerUl = (function() {
        const cols = document.querySelectorAll('.footer-col');
        for (let col of cols) {
          const h4 = col.querySelector('h4');
          if (h4 && h4.textContent.trim().toLowerCase().includes('core divisions')) {
            return col.querySelector('ul.footer-links');
          }
        }
        return null;
      })();

      if (footerUl) {
        const activeFooterHrefs = new Set(cmsData.divisions.map(d => '#' + (divisionIdMap[d.id] || (d.id.startsWith('div-') ? d.id : 'div-' + d.id))));
        cmsData.divisions.forEach(div => {
          const targetHref = '#' + (divisionIdMap[div.id] || (div.id.startsWith('div-') ? div.id : 'div-' + div.id));
          let existingLink = footerUl.querySelector(`a[href="${targetHref}"]`);
          const shortTitle = div.title ? div.title.split(',')[0].trim() : 'Division';
          if (!existingLink) {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${targetHref}"><svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>${shortTitle}</a>`;
            footerUl.appendChild(li);
          } else {
            const svg = existingLink.querySelector('svg');
            existingLink.innerHTML = '';
            if (svg) existingLink.appendChild(svg);
            existingLink.appendChild(document.createTextNode(shortTitle));
            if (existingLink.parentElement) existingLink.parentElement.style.display = '';
          }
        });
        footerUl.querySelectorAll('li').forEach(li => {
          const a = li.querySelector('a');
          if (a) {
            const href = a.getAttribute('href');
            if (href && href.startsWith('#div-') && !activeFooterHrefs.has(href)) {
              li.style.display = 'none';
            }
          }
        });
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

            const rawCat = item.category || 'all';
            let normCat = rawCat;
            if (normCat === 'welding_fabrication') normCat = 'fabrication';
            else if (normCat === 'pipeline_offshore') normCat = 'pipeline';
            else if (normCat === 'dredging_valves') normCat = 'dredging';
            else if (normCat === 'logistics_heavy_equipment') normCat = 'equipment';
            else if (normCat === 'general_contracts_procurement') normCat = 'procurement';
            else if (normCat === 'manpower_instrumentation') normCat = 'instrumentation';

            return `
            <div class="gallery-item" data-category="${normCat}">
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

    // =========================================================================
    // 4b. Gallery Filters Synchronization (Dynamic Division Filter Pills)
    // =========================================================================
    const publicGalleryFilters = document.querySelector('.gallery-filters');
    if (publicGalleryFilters && Array.isArray(cmsData.divisions)) {
      const coreDivisionInfo = {
        'welding_fabrication': { id: 'fabrication', name: 'Fabrication & Testing' },
        'pipeline_offshore': { id: 'pipeline', name: 'Pipeline & Offshore' },
        'dredging_valves': { id: 'dredging', name: 'Dredging & Valves' },
        'logistics_heavy_equipment': { id: 'equipment', name: 'Heavy Machinery' },
        'manpower_instrumentation': { id: 'instrumentation', name: 'Control & Safety' },
        'general_contracts_procurement': { id: 'procurement', name: 'General Contracts & Procurement' }
      };

      const allFilters = [
        { id: 'all', name: 'All Assets' },
        ...cmsData.divisions.map(d => {
          if (coreDivisionInfo[d.id]) {
            return {
              id: coreDivisionInfo[d.id].id,
              name: coreDivisionInfo[d.id].name
            };
          }
          return {
            id: d.id,
            name: d.title || d.sub || 'Custom Division'
          };
        })
      ];

      const activeBtn = publicGalleryFilters.querySelector('.filter-btn.active');
      const activeFilterId = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
      const validFilterIds = new Set(allFilters.map(f => f.id));
      const targetFilterId = validFilterIds.has(activeFilterId) ? activeFilterId : 'all';

      publicGalleryFilters.innerHTML = allFilters.map(f => `
        <button type="button" class="filter-btn ${f.id === targetFilterId ? 'active' : ''}" data-filter="${escapeHtml(f.id)}">${escapeHtml(f.name)}</button>
      `).join('');

      // Re-apply active category filter
      const currentGrid = document.getElementById('galleryGrid');
      if (currentGrid) {
        currentGrid.querySelectorAll('.gallery-item').forEach(el => {
          if (!targetFilterId || targetFilterId === 'all') {
            el.style.display = 'block';
          } else {
            el.style.display = el.getAttribute('data-category') === targetFilterId ? 'block' : 'none';
          }
        });
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


