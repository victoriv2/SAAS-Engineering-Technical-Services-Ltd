/**
 * SAAS ENGINEERING TECHNICAL SERVICES LTD
 * Real-Time Dynamic CMS Synchronization Engine — Powered by Supabase
 * Fetches content from Supabase on load and subscribes to real-time changes.
 * Admin edits now sync across ALL devices instantly.
 */

(function () {
  'use strict';

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

  function renderAboutFacilityShowcase(rawImages) {
    const listContainer = document.getElementById('aboutImagesList');
    const mainImgEl = document.getElementById('aboutMainImg');

    let images = Array.isArray(rawImages) ? rawImages.filter(x => x && x !== 'none') : [];
    if (images.length === 0) {
      images = ['logo/logo.png'];
    }

    const normalizedImages = images.map(img => {
      if (!img || img === 'none') return 'logo/logo.png';
      return (img.startsWith('data:') || img.startsWith('http')) ? img : img.replace(/^(\.\.\/)+/, '');
    });

    if (listContainer) {
      if (normalizedImages.length > 1) {
        listContainer.classList.add('multi-photos');
      } else {
        listContainer.classList.remove('multi-photos');
      }

      listContainer.innerHTML = normalizedImages.map((src, idx) => {
        const isLogo = src.includes('logo.png');
        const numStr = String(idx + 1).padStart(2, '0');
        const tagHtml = normalizedImages.length > 1 ? `<span class="about-photo-number-tag">${numStr}</span>` : '';
        return `
          <div class="about-photo-card">
            ${tagHtml}
            <img src="${src}" alt="SAAS Engineering Facility Photo ${idx + 1}" class="about-main-img"
                 style="${isLogo ? 'object-fit: contain; padding: 3rem; background: linear-gradient(135deg, #0a192f 0%, #172a45 100%);' : ''}"
                 onerror="this.src='logo/logo.png'">
          </div>
        `;
      }).join('');
    } else if (mainImgEl) {
      mainImgEl.src = normalizedImages[0];
    }
  }

  // =========================================================================
  // Main CMS Apply Function — reads data object and patches the DOM
  // =========================================================================
  function applyCmsData(cmsData) {
    if (!cmsData) return;
    try { window.__saasCmsData = cmsData; } catch (_) {}

    // =========================================================================
    // 1. Contact Information & Social Media
    // =========================================================================
    if (cmsData.contact) {
      const c = cmsData.contact;

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
          if (p) p.innerHTML = `<a href="mailto:${c.email}">${c.email}</a>`;
        } else if (titleText.includes('hours') && c.hours) {
          const p = block.querySelector('.contact-detail p');
          if (p) p.innerHTML = c.hours.replace(/ \| /g, '<br>');
        }
      });

      if (c.whatsapp) {
        const cleanWa = c.whatsapp.replace(/\D/g, '');
        const waCardBtn = document.querySelector('.whatsapp-card a');
        if (waCardBtn) waCardBtn.href = `https://wa.me/${cleanWa}?text=Hello%20SAAS%20Engineering,%20I%20am%20inquiring%20about%20your%20services`;
      }

      const updateSocial = (container) => {
        if (!container) return;
        if (c.facebook) { const l = container.querySelector('a[aria-label="Facebook"]'); if (l) l.href = c.facebook; }
        if (c.linkedin)  { const l = container.querySelector('a[aria-label="LinkedIn"]'); if (l) l.href = c.linkedin; }
        if (c.twitter)   { const l = container.querySelector('a[aria-label="Twitter X"]'); if (l) l.href = c.twitter; }
        if (c.instagram) { const l = container.querySelector('a[aria-label="Instagram"]'); if (l) l.href = c.instagram; }
      };
      document.querySelectorAll('.top-bar-social').forEach(updateSocial);

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
      if (heroH1 && h.title) heroH1.textContent = h.title;
      const heroDesc = document.querySelector('.hero-content > p');
      if (heroDesc && h.subtitle) heroDesc.textContent = h.subtitle;
      const statItems = document.querySelectorAll('.hero-stats .stat-item');
      [h.stat1, h.stat2, h.stat3, h.stat4].forEach((val, idx) => {
        if (val !== undefined && val !== null && statItems[idx]) {
          const numEl = statItems[idx].querySelector('.stat-number');
          if (numEl) numEl.textContent = val;
        }
      });
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
    // 2b. About Section
    // =========================================================================
    if (cmsData.about) {
      const ab = cmsData.about;
      const badgeTextEl = document.getElementById('aboutBadgeText');
      if (badgeTextEl && ab.badge) {
        badgeTextEl.textContent = ab.badge;
      } else {
        const tagEl = document.getElementById('aboutSectionTag') || document.querySelector('#about .section-tag');
        if (tagEl && ab.badge) {
          const svg = tagEl.querySelector('svg');
          tagEl.innerHTML = (svg ? svg.outerHTML : '') + ` <span id="aboutBadgeText">${escapeHtml(ab.badge)}</span>`;
        }
      }
      const titleEl = document.getElementById('aboutMainTitle') || document.querySelector('#about .about-text h2');
      if (titleEl && ab.title) titleEl.textContent = ab.title;
      const p1El = document.getElementById('aboutParagraph1') || document.querySelector('#about .about-text p:first-of-type');
      if (p1El && ab.p1) p1El.innerHTML = ab.p1.includes('<strong>') ? ab.p1 : escapeHtml(ab.p1);
      const p2El = document.getElementById('aboutParagraph2') || document.querySelector('#about .about-text p:nth-of-type(2)');
      if (p2El && ab.p2) p2El.textContent = ab.p2;
      const featuresEl = document.getElementById('aboutFeaturesList') || document.querySelector('#about .about-features');
      if (featuresEl && Array.isArray(ab.bullets)) {
        featuresEl.innerHTML = ab.bullets.map(b => `
          <div class="feature-pill">
            <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            <span>${escapeHtml(b)}</span>
          </div>`).join('');
      }
      // Facility Showcase Photos (Up to 3 Photos)
      let facilityImages = [];
      if (Array.isArray(ab.images) && ab.images.length > 0) {
        facilityImages = ab.images.filter(x => x && x !== 'none');
      } else if (ab.img && ab.img !== 'none') {
        facilityImages = [ab.img];
      }
      renderAboutFacilityShowcase(facilityImages);
      const bTitleEl = document.getElementById('aboutBadgeTitle') || document.querySelector('#about .about-badge-card h4');
      if (bTitleEl && ab.badgeTitle) bTitleEl.textContent = ab.badgeTitle;
      const bDescEl = document.getElementById('aboutBadgeDesc') || document.querySelector('#about .about-badge-card p');
      if (bDescEl && ab.badgeDesc) bDescEl.textContent = ab.badgeDesc;
    }

    // =========================================================================
    // 3. Core Technical Divisions
    // =========================================================================
    if (Array.isArray(cmsData.divisions)) {
      const activeAdminIds = new Set(cmsData.divisions.map(d => d.id));
      const activeDomIds   = new Set(cmsData.divisions.map(d => divisionIdMap[d.id] || (d.id.startsWith('div-') ? d.id : 'div-' + d.id)));

      document.querySelectorAll('#activities article.division-card').forEach(card => {
        card.style.display = activeDomIds.has(card.id) ? '' : 'none';
      });

      const activitiesContainer = document.querySelector('#activities .container');
      const navMenu    = document.querySelector('.nav-dropdown-menu');
      const dropdownAll = navMenu ? navMenu.querySelector('.dropdown-all') : null;

      cmsData.divisions.forEach((div, index) => {
        const targetId = divisionIdMap[div.id] || (div.id.startsWith('div-') ? div.id : 'div-' + div.id);
        let card = document.getElementById(targetId) || document.querySelector(`[id*="${div.id}"]`);
        const hasNoImg = !div.img || div.img === 'none';
        const cardImg  = hasNoImg ? 'logo/logo.png' : div.img;
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
              <div><a href="#contact" class="btn btn-primary btn-sm">Inquire About This Service</a></div>
            </div>`;
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
          if (imgEl) {
            imgEl.src = displayCardImg;
            imgEl.style.objectFit  = hasNoImg ? 'contain' : '';
            imgEl.style.padding    = hasNoImg ? '2.5rem' : '';
            imgEl.style.background = hasNoImg ? 'linear-gradient(135deg, #0a192f 0%, #172a45 100%)' : '';
            if (div.title) imgEl.alt = div.title;
          }
          const list = card.querySelector('.division-list');
          if (list && Array.isArray(div.bullets)) {
            list.innerHTML = div.bullets.map(bullet => `
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                ${bullet}
              </li>`).join('');
          }
        }

        // Division selection modal options
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
              <span class="option-check"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></span>
            </div>
            <h4>${div.title || ''}</h4>
            <p>${div.desc || ''}</p>`;
          modalGrid.appendChild(modalOption);
          modalOption.addEventListener('click', () => {
            const hdi  = document.getElementById('serviceDivision');
            const sdt  = document.getElementById('selectedDivisionText');
            const sds  = document.getElementById('selectedDivisionSub');
            const pb   = document.getElementById('pickerBadge');
            const dt   = document.getElementById('divisionModalTrigger');
            const dm   = document.getElementById('divisionModal');
            document.querySelectorAll('.division-option-card').forEach(c => c.classList.remove('selected'));
            modalOption.classList.add('selected');
            if (hdi) hdi.value = div.id;
            if (sdt) { sdt.textContent = div.title || ''; sdt.classList.remove('placeholder'); }
            if (sds) sds.textContent = 'Selected division for technical quote';
            if (pb)  { pb.textContent = 'Change'; pb.style.backgroundColor = 'var(--accent)'; }
            if (dt)  dt.classList.remove('is-invalid');
            if (dm)  setTimeout(() => { dm.classList.remove('active'); document.body.style.overflow = ''; }, 220);
          });
        }

        if (modalOption) {
          modalOption.style.display = '';
          const optThumbImg = modalOption.querySelector('.option-thumb-img');
          if (optThumbImg) {
            optThumbImg.src = displayCardImg;
            optThumbImg.style.objectFit  = hasNoImg ? 'contain' : '';
            optThumbImg.style.padding    = hasNoImg ? '0.5rem' : '';
            optThumbImg.style.background = hasNoImg ? '#0a192f' : '';
          }
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

      // Navbar Divisions Modal Grid
      const navDivModalGrid = document.getElementById('navDivisionsModalGrid');
      const navDivCount = document.getElementById('navDivisionsCount');
      if (navDivCount) navDivCount.textContent = String(cmsData.divisions.length);
      if (navDivModalGrid) {
        navDivModalGrid.innerHTML = cmsData.divisions.map((div, index) => {
          const targetId = divisionIdMap[div.id] || (div.id.startsWith('div-') ? div.id : 'div-' + div.id);
          const hasNoImg = !div.img || div.img === 'none';
          const cardImg  = hasNoImg ? 'logo/logo.png' : div.img;
          const displayCardImg = (cardImg && (cardImg.startsWith('data:') || cardImg.startsWith('http'))) ? cardImg : (cardImg ? cardImg.replace(/^(\.\.\/)+/, '') : 'logo/logo.png');
          const badgeText = div.badge || `Division 0${index + 1}`;
          const titleText = div.title || 'Technical Division';
          return `
            <div class="nav-division-card" data-div-id="${div.id}" data-target-id="${targetId}" role="button" tabindex="0" aria-label="Explore ${escapeHtml(titleText)}">
              <div class="nav-division-thumb-wrap">
                <span class="nav-division-badge-overlay">${escapeHtml(badgeText)}</span>
                <img src="${displayCardImg}" alt="${escapeHtml(titleText)}" class="nav-division-thumb-img" onerror="this.src='logo/logo.png'" style="${hasNoImg ? 'object-fit:contain;padding:0.5rem;background:#0a192f;' : ''}">
              </div>
              <div class="nav-division-card-content">
                <h4>
                  <span>${escapeHtml(titleText)}</span>
                  <svg class="nav-division-card-arrow" viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
                </h4>
              </div>
            </div>`;
        }).join('');

        navDivModalGrid.querySelectorAll('.nav-division-card').forEach(card => {
          card.addEventListener('click', () => {
            const tId = card.getAttribute('data-target-id');
            const navDivModal = document.getElementById('navDivisionsModal');
            if (navDivModal) navDivModal.classList.remove('active');
            document.body.style.overflow = '';
            if (tId) { const el = document.getElementById(tId); if (el) el.scrollIntoView({ behavior: 'smooth' }); }
          });
        });
      }

      document.querySelectorAll('.nav-dropdown-menu .dropdown-item').forEach(item => {
        const href = item.getAttribute('href');
        if (href && href.startsWith('#')) item.style.display = activeDomIds.has(href.substring(1)) ? '' : 'none';
      });
      document.querySelectorAll('.division-option-card').forEach(option => {
        const divId = option.getAttribute('data-division-id');
        if (divId && !activeAdminIds.has(divId)) option.style.display = 'none';
      });
      const sectionDesc = document.querySelector('#activities .section-header p');
      if (sectionDesc) sectionDesc.textContent = `Delivering comprehensive engineering solutions structured across ${cmsData.divisions.length} distinct operational divisions to meet rigorous industrial specifications.`;
    }

    // =========================================================================
    // 4. Gallery Synchronization
    // =========================================================================
    if (Array.isArray(cmsData.gallery)) {
      const publicGalleryGrid = document.getElementById('galleryGrid');
      if (publicGalleryGrid) {
        if (cmsData.gallery.length === 0) {
          publicGalleryGrid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:#8892b0;">No gallery items currently published.</div>`;
        } else {
          publicGalleryGrid.innerHTML = cmsData.gallery.map(item => {
            const rawImg = item.img || '';
            const imgSrc = (rawImg.startsWith('data:') || rawImg.startsWith('http')) ? rawImg : rawImg.replace(/^(\.\.\/)+/, '');
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
              <img src="${imgSrc}" alt="${item.title || 'Project photo'}" onerror="this.src='logo/logo.png';this.style.padding='2rem';">
              <div class="gallery-overlay">
                <div class="gallery-zoom-icon"><svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
                <h4>${item.title || ''}</h4>
                <span>${item.subtitle || ''}</span>
              </div>
            </div>`;
          }).join('');

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

    // Gallery Filter Pills
    const publicGalleryFilters = document.querySelector('.gallery-filters');
    if (publicGalleryFilters && Array.isArray(cmsData.divisions)) {
      const coreDivisionInfo = {
        'welding_fabrication':           { id: 'fabrication',     name: 'Fabrication & Testing' },
        'pipeline_offshore':             { id: 'pipeline',        name: 'Pipeline & Offshore' },
        'dredging_valves':               { id: 'dredging',        name: 'Dredging & Valves' },
        'logistics_heavy_equipment':     { id: 'equipment',       name: 'Heavy Machinery' },
        'manpower_instrumentation':      { id: 'instrumentation', name: 'Control & Safety' },
        'general_contracts_procurement': { id: 'procurement',     name: 'General Contracts & Procurement' }
      };
      const allFilters = [
        { id: 'all', name: 'All Assets' },
        ...cmsData.divisions.map(d => coreDivisionInfo[d.id] || { id: d.id, name: d.title || 'Custom Division' })
      ];
      const activeBtn = publicGalleryFilters.querySelector('.filter-btn.active');
      const activeFilterId = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
      const validFilterIds = new Set(allFilters.map(f => f.id));
      const targetFilterId = validFilterIds.has(activeFilterId) ? activeFilterId : 'all';
      publicGalleryFilters.innerHTML = allFilters.map(f =>
        `<button type="button" class="filter-btn ${f.id === targetFilterId ? 'active' : ''}" data-filter="${escapeHtml(f.id)}">${escapeHtml(f.name)}</button>`
      ).join('');
      const currentGrid = document.getElementById('galleryGrid');
      if (currentGrid) {
        currentGrid.querySelectorAll('.gallery-item').forEach(el => {
          el.style.display = (!targetFilterId || targetFilterId === 'all') ? 'block' : (el.getAttribute('data-category') === targetFilterId ? 'block' : 'none');
        });
      }
    }
  }

  // =========================================================================
  // Initialise: Smart Caching with Instant Admin Invalidation & Realtime Sync
  // =========================================================================
  const CMS_CACHE_KEY = 'saas_cms_cached_data';
  const CMS_CACHE_TS_KEY = 'saas_cms_cached_ts';
  const CMS_CACHE_UPDATED_AT_KEY = 'saas_cms_cached_updated_at';
  const CACHE_TTL_MS = 5 * 60 * 1000; // 5-minute cache TTL when no updates occur

  // Fetch full fresh content from Supabase and cache it
  async function fetchAndApplyFresh() {
    try {
      const row = await saasDB.getCmsContent();
      if (row) {
        applyCmsData(row);
        try {
          localStorage.setItem(CMS_CACHE_KEY, JSON.stringify(row));
          localStorage.setItem(CMS_CACHE_TS_KEY, String(Date.now()));
          if (row.updated_at) {
            localStorage.setItem(CMS_CACHE_UPDATED_AT_KEY, row.updated_at);
          }
        } catch (_) {}
      }
    } catch (err) {
      console.warn('SAAS CMS: Could not load content from Supabase.', err);
    }
  }

  // Ultra-lightweight micro-check: queries only updated_at timestamp (~40 bytes)
  // If admin made an update, re-fetches immediately; otherwise keeps the 5-minute cache.
  async function checkForServerUpdates() {
    try {
      const cachedUpdatedAt = localStorage.getItem(CMS_CACHE_UPDATED_AT_KEY);
      const serverUpdatedAt = await saasDB.getCmsTimestamp();

      if (serverUpdatedAt && (!cachedUpdatedAt || cachedUpdatedAt !== serverUpdatedAt)) {
        // Admin updated content: fetch and apply fresh data immediately!
        await fetchAndApplyFresh();
      } else {
        // No update has occurred: refresh cache timestamp so the 5-minute window continues
        try {
          localStorage.setItem(CMS_CACHE_TS_KEY, String(Date.now()));
        } catch (_) {}
      }
    } catch (e) {
      console.warn('SAAS CMS: Update check notice:', e);
    }
  }

  async function init() {
    const isAdminPreview = (typeof sessionStorage !== 'undefined') && (sessionStorage.getItem('saas_admin_auth') === 'true');

    // 1. Instant Paint: Render local cached data immediately (0ms network delay)
    let hasLocalCache = false;
    try {
      const raw = localStorage.getItem(CMS_CACHE_KEY);
      if (raw) {
        const cached = JSON.parse(raw);
        if (cached) {
          applyCmsData(cached);
          hasLocalCache = true;
        }
      }
    } catch (_) {}

    // 2. Freshness Check:
    // If no cache exists, or admin is previewing, fetch fresh immediately.
    // If cache exists, check updated_at timestamp. If changed, updates immediately!
    if (!hasLocalCache || isAdminPreview) {
      await fetchAndApplyFresh();
    } else {
      // Check if server has newer update than what is in cache
      checkForServerUpdates();
    }

    // 3. Instant Cross-Tab Sync via BroadcastChannel & Storage Event
    try {
      if (typeof BroadcastChannel !== 'undefined') {
        const bc = new BroadcastChannel('saas_cms_sync');
        bc.onmessage = (event) => {
          if (event.data && event.data.type === 'CMS_UPDATED' && event.data.data) {
            applyCmsData(event.data.data);
            try {
              localStorage.setItem(CMS_CACHE_KEY, JSON.stringify(event.data.data));
              localStorage.setItem(CMS_CACHE_TS_KEY, String(Date.now()));
              if (event.data.data.updated_at) {
                localStorage.setItem(CMS_CACHE_UPDATED_AT_KEY, event.data.data.updated_at);
              }
            } catch (_) {}
          }
        };
      }

      window.addEventListener('storage', (e) => {
        if (e.key === CMS_CACHE_KEY && e.newValue) {
          try {
            const fresh = JSON.parse(e.newValue);
            if (fresh) applyCmsData(fresh);
          } catch (_) {}
        }
      });
    } catch (_) {}

    // 4. Background update check on tab re-focus (when user returns to site)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        const ts = Number(localStorage.getItem(CMS_CACHE_TS_KEY) || 0);
        // Only run check if at least 30s has passed since last check
        if (Date.now() - ts > 30000) {
          checkForServerUpdates();
        }
      }
    });

    // Periodic check every 2.5 minutes while page is actively open
    setInterval(() => {
      if (!document.hidden) {
        checkForServerUpdates();
      }
    }, 150000);

    // 5. Supabase Free Tier Protection: Realtime WebSocket only for active admin preview
    try {
      if (isAdminPreview) {
        saasDB.subscribeToChanges('cms_content', async () => {
          await fetchAndApplyFresh();
        });
      }
    } catch (err) {
      console.warn('SAAS CMS: Realtime preview subscription notice:', err);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
