/**
 * SAAS ENGINEERING TECHNICAL SERVICES LTD
 * Dynamic CMS Synchronization Engine
 * Automatically reflects customizations made in the Admin Portal across the public website
 */

(function () {
  'use strict';

  const CMS_KEY = 'saas_cms_data';

  function applyCmsData() {
    let cmsData = null;
    try {
      const stored = localStorage.getItem(CMS_KEY);
      if (stored) {
        cmsData = JSON.parse(stored);
      }
    } catch (e) {
      console.warn('SAAS CMS: Failed to load local CMS data', e);
      return;
    }

    if (!cmsData) return;

    // 1. Contact Information
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
          topInfoItems[1].appendChild(document.createTextNode(' ' + c.email));
        }
        if (c.phonePrimary) {
          const svg = topInfoItems[2].querySelector('svg');
          topInfoItems[2].innerHTML = '';
          if (svg) topInfoItems[2].appendChild(svg);
          topInfoItems[2].appendChild(document.createTextNode(' ' + c.phonePrimary));
        }
      }

      // Contact Section Detail Blocks
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
        const waCardBtn = document.querySelector('.whatsapp-card a.btn');
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

    // 2. Hero Section
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
        if (stats[idx]) {
          const numEl = item.querySelector('.stat-number');
          if (numEl) numEl.textContent = stats[idx];
        }
      });
    }

    // 3. Core Divisions
    if (Array.isArray(cmsData.divisions) && cmsData.divisions.length > 0) {
      cmsData.divisions.forEach(div => {
        const cardId = div.id.startsWith('div-') ? div.id : 'div-' + div.id.replace(/^div_/, '').replace(/_/g, '-');
        const card = document.getElementById(cardId) || document.querySelector(`[id*="${div.id}"]`);
        
        if (card) {
          const h3 = card.querySelector('.division-body h3');
          if (h3 && div.title) h3.textContent = div.title;

          const p = card.querySelector('.division-body > p');
          if (p && div.desc) p.textContent = div.desc;

          const list = card.querySelector('.division-list');
          if (list && Array.isArray(div.bullets) && div.bullets.length > 0) {
            list.innerHTML = div.bullets.map(bullet => `
              <li>
                <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                ${bullet}
              </li>
            `).join('');
          }
        }

        // Update Division Selection Modal Cards
        const modalOption = document.querySelector(`.division-option-card[data-division-id="${div.id}"]`);
        if (modalOption) {
          const optH4 = modalOption.querySelector('h4');
          if (optH4 && div.title) optH4.textContent = div.title;

          const optP = modalOption.querySelector('p');
          if (optP && div.desc) optP.textContent = div.desc;

          if (div.title) {
            modalOption.setAttribute('data-division-name', div.title);
            modalOption.setAttribute('data-division-short', div.title);
          }
        }
      });
    }

    // 4. Project Gallery Synchronization
    if (Array.isArray(cmsData.gallery) && cmsData.gallery.length > 0) {
      const publicGalleryGrid = document.getElementById('galleryGrid');
      if (publicGalleryGrid) {
        publicGalleryGrid.innerHTML = cmsData.gallery.map(item => `
          <div class="gallery-item" data-category="${item.category || 'all'}">
            <img src="${item.img}" alt="${item.title || 'Project photo'}">
            <div class="gallery-overlay">
              <div class="gallery-zoom-icon"><svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
              <h4>${item.title || ''}</h4>
              <span>${item.subtitle || ''}</span>
            </div>
          </div>
        `).join('');
      }
    }
  }

  // Initial Sync on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyCmsData);
  } else {
    applyCmsData();
  }

  // Live Cross-Tab Synchronizer: When admin publishes changes in another tab, update immediately
  window.addEventListener('storage', (e) => {
    if (e.key === CMS_KEY) {
      applyCmsData();
    }
  });
})();
