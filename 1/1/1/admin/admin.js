/**
 * SAAS ENGINEERING TECHNICAL SERVICES LTD
 * Admin Management Portal - JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // Storage Keys
  const AUTH_KEY = 'saas_admin_auth';
  const INQUIRIES_KEY = 'saas_inquiries';
  const CMS_KEY = 'saas_cms_data';

  // Default CMS Data
  const defaultCmsData = {
    contact: {
      address: "No 4, Salvation Avenue Off Rumuocholu, Avhua Pipeline, Eneka, Port Harcourt, Rivers State, Nigeria",
      phonePrimary: "09020379011",
      phoneAlt: "+234 902 037 9011",
      email: "contact@saasengineeringtechnicalservicesltd.com",
      hours: "Monday - Friday: 8:00 AM - 6:00 PM | Saturday: 9:00 AM - 3:00 PM",
      whatsapp: "2349020379011",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com"
    },
    hero: {
      badge: "Registered Nigerian Engineering Contractor",
      title: "Industrial Engineering, Pipeline Services & Oilfield Solutions",
      subtitle: "Delivering high-precision welding, structural metal fabrication, surface pipeline construction, dredging spare parts, and heavy equipment leasing for upstream oilfield and industrial sectors across Nigeria.",
      stat1: "15+ Years",
      stat2: "6 Divisions",
      stat3: "100% Safety",
      stat4: "24/7 Ready"
    },
    divisions: [
      {
        id: "welding_fabrication",
        badge: "Division 01",
        title: "Welding & Fabrication, Industrial Services & Training",
        desc: "Structural steel, heavy spool fabrication, CNC machining, hydrostatic testing & coded welder apprenticeship.",
        bullets: [
          "Structural Steel & Heavy Metal Fabrication",
          "ASME / API Certified Pipe Spool Welding",
          "Industrial Lathe & CNC Precision Machining",
          "Hydrostatic Pressure Testing (up to 15,000 PSI)"
        ]
      },
      {
        id: "pipeline_offshore",
        badge: "Division 02",
        title: "Oil & Gas Services, Surface Pipeline & Offshore Support",
        desc: "Surface pipeline trenching & laying, field orbital welding, saddle profiling & offshore platform maintenance.",
        bullets: [
          "Cross-Country & Flowline Pipeline Construction",
          "Saddle Fitting, Riser Clamping & Hot Tapping",
          "Offshore Deck Structural Welding & Repairs",
          "Pipeline Decommissioning & Hydro-testing"
        ]
      },
      {
        id: "dredging_valves",
        badge: "Division 03",
        title: "Dredging Services & Technical Parts (Valves, Impellers, Pumps)",
        desc: "Slurry pump assemblies (DN200), machined volute casings, cast impellers & METRUS valve overhaul.",
        bullets: [
          "Heavy Dredge Pump Assemblies & Volute Casings",
          "Cast High-Chrome Slurry Impeller Machining",
          "Industrial Gate, Ball & Check Valve Maintenance",
          "METRUS High-Pressure Test Bench Calibrations"
        ]
      },
      {
        id: "logistics_heavy_equipment",
        badge: "Division 04",
        title: "Logistics, Haulage, Heavy Equipment Leasing & Caterpillar Parts",
        desc: "Caterpillar sideboom pipelayers, excavators, heavy-haul trailers & authentic Caterpillar spare parts.",
        bullets: [
          "Caterpillar Pipelayers, Excavators & Cranes",
          "Lowbed Heavy Haulage Transport Services",
          "OEM Caterpillar Ground Engaging Tools (G.E.T.)",
          "Rapid Heavy Machinery Site Mobilization"
        ]
      },
      {
        id: "manpower_instrumentation",
        badge: "Division 05",
        title: "Manpower Supply, Instrumentation & Control Engineering",
        desc: "Certified engineers & coded welders staffing, SCADA calibration benches & pneumatic actuator servicing.",
        bullets: [
          "Certified Offshore Welders & NDT Technicians",
          "Field Electrical & Flow Transmitter Calibration",
          "Pneumatic & Hydraulic Actuator Maintenance",
          "Safety-Critical Shutdown Personnel Deployment"
        ]
      },
      {
        id: "general_contracts_procurement",
        badge: "Division 06",
        title: "General Contracts, Procurement & Industrial Safety Gadgets (PPE)",
        desc: "Industrial supply chain, safety helmets, harnesses, PPE equipment & engineering consumables.",
        bullets: [
          "EN/ANSI Certified Industrial Safety Gear (PPE)",
          "Structural Steel Flanges, Gaskets & Stud Bolts",
          "Specialty Welding Electrodes & Fluxes",
          "Turnkey Technical Procurement & Site Delivery"
        ]
      }
    ],
    gallery: [
      {
        title: "High-Pressure Testing Plant",
        category: "fabrication",
        subtitle: "Hydrostatic Facility, Port Harcourt",
        img: "../../../../assets/images/1_Welding_Fabrication_Industrial_Services_Training/pressure_testing_assembly_plant.jpeg"
      },
      {
        title: "Precision Lathe Machining",
        category: "fabrication",
        subtitle: "Mechanical Machine Shop",
        img: "../../../../assets/images/1_Welding_Fabrication_Industrial_Services_Training/pinacho_cnc_lathe_machining_equipment.jpeg"
      },
      {
        title: "Offshore Production Platform",
        category: "pipeline",
        subtitle: "Niger Delta Offshore Field",
        img: "../../../../assets/images/2_Oil_and_Gas_Surface_Pipeline_Offshore_Services/offshore_oil_and_gas_production_platform.jpeg"
      },
      {
        title: "Surface Pipeline Construction",
        category: "pipeline",
        subtitle: "Flowline Trenching Operations",
        img: "../../../../assets/images/2_Oil_and_Gas_Surface_Pipeline_Offshore_Services/surface_pipeline_construction_laying.jpg"
      },
      {
        title: "Dredge Slurry Pump Impellers",
        category: "dredging",
        subtitle: "Channel Sand Mining Site",
        img: "../../../../assets/images/3_Dredging_Services_and_Technical_Parts/dredge_slurry_pump_cast_impellers.jpeg"
      },
      {
        title: "Industrial Valve Testing Rig",
        category: "dredging",
        subtitle: "METRUS Automated Test Rig",
        img: "../../../../assets/images/1_Welding_Fabrication_Industrial_Services_Training/valve_pressure_testing_inspection_rig.jpeg"
      },
      {
        title: "Caterpillar Heavy Pipeline Equipment",
        category: "logistics",
        subtitle: "Sideboom Pipelayer Fleet",
        img: "../../../../assets/images/4_Logistics_Haulage_and_Heavy_Equipment/caterpillar_sideboom_pipelayer_heavy_equipment.jpeg"
      },
      {
        title: "Safety Helmets & PPE",
        category: "procurement",
        subtitle: "Industrial Procurement",
        img: "../../../../assets/images/7_General_Contracts_Procurement_and_Safety_Gadgets/safety_helmet_hard_hat_ppe.jpg"
      }
    ]
  };

  // Inquiries collection (starts 100% empty until real clients submit consultation forms)
  const defaultInquiries = [];

  // Helper Functions for Data
  const getCmsData = () => {
    try {
      const data = localStorage.getItem(CMS_KEY);
      return data ? JSON.parse(data) : defaultCmsData;
    } catch (e) {
      return defaultCmsData;
    }
  };

  const saveCmsData = (data) => {
    localStorage.setItem(CMS_KEY, JSON.stringify(data));
    showToast("Changes published to public website.");
  };

  const getInquiries = () => {
    try {
      const data = localStorage.getItem(INQUIRIES_KEY);
      if (!data) return [];
      const list = JSON.parse(data);
      // Remove any previously injected ready-made sample inquiries
      const cleanList = list.filter(i => i.id !== 'inq-174001' && i.id !== 'inq-174002');
      if (cleanList.length !== list.length) {
        localStorage.setItem(INQUIRIES_KEY, JSON.stringify(cleanList));
      }
      return cleanList;
    } catch (e) {
      return [];
    }
  };

  const saveInquiries = (list) => {
    localStorage.setItem(INQUIRIES_KEY, JSON.stringify(list));
    renderInquiries();
  };

  const showToast = (text) => {
    const toast = document.getElementById('adminToast');
    const toastText = document.getElementById('adminToastText');
    if (toast && toastText) {
      toastText.textContent = text;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
    }
  };

  // =========================================================================
  // Authentication Logic
  // =========================================================================
  const loginWrapper = document.getElementById('loginWrapper');
  const adminApp = document.getElementById('adminApp');
  const loginForm = document.getElementById('adminLoginForm');
  const loginAlert = document.getElementById('loginAlert');
  const logoutBtn = document.getElementById('adminLogoutBtn');

  const checkAuth = () => {
    const isAuth = sessionStorage.getItem(AUTH_KEY);
    if (isAuth === 'true') {
      if (loginWrapper) loginWrapper.style.display = 'none';
      if (adminApp) adminApp.classList.add('active');
      initDashboard();
    } else {
      if (loginWrapper) loginWrapper.style.display = 'flex';
      if (adminApp) adminApp.classList.remove('active');
    }
  };

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const usernameInput = document.getElementById('adminUsername').value.trim();
      const passwordInput = document.getElementById('adminPassword').value.trim();

      // Requested password check: admin123
      if (passwordInput === 'admin123') {
        sessionStorage.setItem(AUTH_KEY, 'true');
        if (loginAlert) loginAlert.classList.remove('show');
        checkAuth();
      } else {
        if (loginAlert) {
          loginAlert.classList.add('show');
          document.getElementById('adminPassword').focus();
        }
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem(AUTH_KEY);
      checkAuth();
    });
  }

  // =========================================================================
  // Navigation Tabs Logic
  // =========================================================================
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  const switchTab = (tabId) => {
    tabButtons.forEach(btn => {
      if (btn.getAttribute('data-tab') === tabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    tabPanes.forEach(pane => {
      if (pane.id === tabId) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  const viewAllInquiriesBtn = document.getElementById('viewAllInquiriesBtn');
  if (viewAllInquiriesBtn) {
    viewAllInquiriesBtn.addEventListener('click', () => switchTab('tab-inquiries'));
  }

  const quickAddDivisionBtn = document.getElementById('quickAddDivisionBtn');
  if (quickAddDivisionBtn) {
    quickAddDivisionBtn.addEventListener('click', () => {
      switchTab('tab-divisions');
      openDivisionModal();
    });
  }

  // =========================================================================
  // Inquiries Rendering & Management
  // =========================================================================
  const renderInquiries = (searchFilter = '') => {
    const list = getInquiries();
    const overviewTbody = document.getElementById('overviewInquiriesTableBody');
    const fullTbody = document.getElementById('fullInquiriesTableBody');
    const badgeCount = document.getElementById('inquiriesBadgeCount');
    const statTotal = document.getElementById('statTotalInquiries');

    if (badgeCount) badgeCount.textContent = list.length;
    if (statTotal) statTotal.textContent = list.length;

    const filtered = searchFilter
      ? list.filter(item => 
          item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
          item.email.toLowerCase().includes(searchFilter.toLowerCase()) ||
          item.division.toLowerCase().includes(searchFilter.toLowerCase()) ||
          item.phone.includes(searchFilter)
        )
      : list;

    const renderRow = (inq, isFull) => {
      const statusClass = inq.status || 'new';
      return `
        <tr>
          <td><strong>${escapeHtml(inq.name)}</strong></td>
          ${isFull ? `<td>${escapeHtml(inq.organization || 'Direct')} &bull; ${escapeHtml(inq.phone)}</td>` : ''}
          ${isFull ? `<td><a href="mailto:${escapeHtml(inq.email)}" style="color: var(--primary); text-decoration: underline;">${escapeHtml(inq.email)}</a></td>` : `<td><small>${escapeHtml(inq.email)}<br>${escapeHtml(inq.phone)}</small></td>`}
          <td><span style="font-size: 0.8rem; color: var(--gray-700);">${escapeHtml(inq.division)}</span></td>
          <td><small style="color: var(--gray-500);">${escapeHtml(inq.date)}</small></td>
          <td>
            <select class="form-control no-icon" onchange="window.updateInquiryStatus('${inq.id}', this.value)" style="padding: 0.25rem 0.5rem; font-size: 0.75rem; border-radius: 9999px; font-weight: 700; width: 110px;">
              <option value="new" ${inq.status === 'new' ? 'selected' : ''}>New</option>
              <option value="review" ${inq.status === 'review' ? 'selected' : ''}>In Review</option>
              <option value="quoted" ${inq.status === 'quoted' ? 'selected' : ''}>Quoted</option>
              <option value="closed" ${inq.status === 'closed' ? 'selected' : ''}>Closed</option>
            </select>
          </td>
          <td>
            <div style="display: flex; gap: 0.35rem;">
              <button type="button" class="btn btn-secondary btn-sm" onclick="window.viewInquiryDetail('${inq.id}')" title="View inquiry full technical scope">View</button>
              <button type="button" class="btn btn-danger btn-sm" onclick="window.deleteInquiry('${inq.id}')" title="Delete">Delete</button>
            </div>
          </td>
        </tr>
      `;
    };

    if (overviewTbody) {
      if (list.length === 0) {
        overviewTbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: var(--gray-400); padding: 1.5rem;">No inquiries received yet.</td></tr>';
      } else {
        overviewTbody.innerHTML = list.slice(0, 4).map(item => renderRow(item, false)).join('');
      }
    }

    if (fullTbody) {
      if (filtered.length === 0) {
        fullTbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--gray-400); padding: 2rem;">No matching inquiries found.</td></tr>';
      } else {
        fullTbody.innerHTML = filtered.map(item => renderRow(item, true)).join('');
      }
    }
  };

  // Global window functions for table action buttons
  window.updateInquiryStatus = (id, newStatus) => {
    const list = getInquiries();
    const index = list.findIndex(i => i.id === id);
    if (index !== -1) {
      list[index].status = newStatus;
      saveInquiries(list);
      showToast(`Inquiry status updated to ${newStatus.toUpperCase()}`);
    }
  };

  window.deleteInquiry = (id) => {
    if (confirm("Are you sure you want to delete this client inquiry?")) {
      let list = getInquiries();
      list = list.filter(i => i.id !== id);
      saveInquiries(list);
      showToast("Inquiry removed from database.");
    }
  };

  window.viewInquiryDetail = (id) => {
    const list = getInquiries();
    const inq = list.find(i => i.id === id);
    if (!inq) return;

    const modal = document.getElementById('inquiryDetailModal');
    const title = document.getElementById('modalInquiryClientName');
    const content = document.getElementById('inquiryModalContent');
    const callBtn = document.getElementById('modalDirectCallBtn');
    const emailBtn = document.getElementById('modalDirectEmailBtn');

    if (title) title.textContent = `${inq.name} - Technical Inquiry`;
    if (content) {
      content.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.25rem;">
          <div>
            <small style="color: var(--gray-500); font-weight: 600;">Client Name</small>
            <p style="font-weight: 700; color: var(--dark); font-size: 1.05rem;">${escapeHtml(inq.name)}</p>
          </div>
          <div>
            <small style="color: var(--gray-500); font-weight: 600;">Organization / Company</small>
            <p style="font-weight: 600; color: var(--gray-800);">${escapeHtml(inq.organization || 'Not provided')}</p>
          </div>
          <div>
            <small style="color: var(--gray-500); font-weight: 600;">Telephone</small>
            <p><a href="tel:${escapeHtml(inq.phone)}" style="color: var(--primary); font-weight: 600;">${escapeHtml(inq.phone)}</a></p>
          </div>
          <div>
            <small style="color: var(--gray-500); font-weight: 600;">Email Address</small>
            <p><a href="mailto:${escapeHtml(inq.email)}" style="color: var(--primary); font-weight: 600;">${escapeHtml(inq.email)}</a></p>
          </div>
        </div>

        <div style="background: var(--gray-50); border: 1px solid var(--gray-200); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem;">
          <small style="color: var(--gray-500); font-weight: 700; text-transform: uppercase;">Service Division of Interest</small>
          <p style="font-weight: 700; color: var(--primary); margin-top: 0.25rem;">${escapeHtml(inq.division)}</p>
        </div>

        <div>
          <small style="color: var(--gray-500); font-weight: 700; text-transform: uppercase;">Technical Specifications & Project Scope</small>
          <div style="background: var(--white); border: 1.5px solid var(--gray-200); padding: 1rem; border-radius: var(--radius-md); margin-top: 0.35rem; font-size: 0.95rem; line-height: 1.6; white-space: pre-wrap; color: var(--gray-800);">
            ${escapeHtml(inq.scope)}
          </div>
        </div>

        <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--gray-500); text-align: right;">
          Submitted: ${escapeHtml(inq.date)} &bull; Reference: #${escapeHtml(inq.id)}
        </div>
      `;
    }

    if (callBtn) {
      callBtn.onclick = () => window.location.href = `tel:${inq.phone}`;
    }
    if (emailBtn) {
      emailBtn.onclick = () => window.location.href = `mailto:${inq.email}?subject=Regarding Your Technical Inquiry with SAAS Engineering`;
    }

    if (modal) modal.classList.add('active');
  };

  const closeInquiryModal = () => {
    const modal = document.getElementById('inquiryDetailModal');
    if (modal) modal.classList.remove('active');
  };

  const closeInquiryBtn = document.getElementById('closeInquiryModalBtn');
  const closeInquiryFooterBtn = document.getElementById('closeInquiryModalFooterBtn');
  if (closeInquiryBtn) closeInquiryBtn.addEventListener('click', closeInquiryModal);
  if (closeInquiryFooterBtn) closeInquiryFooterBtn.addEventListener('click', closeInquiryModal);

  // Search input filter
  const searchInput = document.getElementById('inquirySearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderInquiries(e.target.value.trim());
    });
  }

  // Export CSV
  const exportCsvBtn = document.getElementById('exportInquiriesCsvBtn');
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', () => {
      const list = getInquiries();
      if (list.length === 0) {
        alert("No inquiries to export.");
        return;
      }
      let csv = "ID,Name,Organization,Email,Phone,Division,Date,Status,Scope\n";
      list.forEach(i => {
        csv += `"${i.id}","${cleanCsv(i.name)}","${cleanCsv(i.organization)}","${cleanCsv(i.email)}","${cleanCsv(i.phone)}","${cleanCsv(i.division)}","${cleanCsv(i.date)}","${cleanCsv(i.status)}","${cleanCsv(i.scope)}"\n`;
      });
      downloadFile(csv, `saas-inquiries-${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv');
      showToast("Inquiries CSV exported successfully.");
    });
  }

  // Clear inquiries
  const clearInquiriesBtn = document.getElementById('clearAllInquiriesBtn');
  if (clearInquiriesBtn) {
    clearInquiriesBtn.addEventListener('click', () => {
      if (confirm("Are you sure you want to clear all inquiries? This cannot be undone.")) {
        saveInquiries([]);
        showToast("All inquiries cleared.");
      }
    });
  }

  // =========================================================================
  // Contact & Social Media Settings Form
  // =========================================================================
  const contactForm = document.getElementById('contactSettingsForm');
  const loadContactSettings = () => {
    const cms = getCmsData();
    const c = cms.contact || defaultCmsData.contact;
    document.getElementById('settingAddress').value = c.address || '';
    document.getElementById('settingPhonePrimary').value = c.phonePrimary || '';
    document.getElementById('settingPhoneAlt').value = c.phoneAlt || '';
    document.getElementById('settingEmail').value = c.email || '';
    document.getElementById('settingHours').value = c.hours || '';
    document.getElementById('settingWhatsapp').value = c.whatsapp || '';
    document.getElementById('settingFacebook').value = c.facebook || '';
    document.getElementById('settingLinkedin').value = c.linkedin || '';
    document.getElementById('settingTwitter').value = c.twitter || '';
    document.getElementById('settingInstagram').value = c.instagram || '';
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cms = getCmsData();
      cms.contact = {
        address: document.getElementById('settingAddress').value.trim(),
        phonePrimary: document.getElementById('settingPhonePrimary').value.trim(),
        phoneAlt: document.getElementById('settingPhoneAlt').value.trim(),
        email: document.getElementById('settingEmail').value.trim(),
        hours: document.getElementById('settingHours').value.trim(),
        whatsapp: document.getElementById('settingWhatsapp').value.trim(),
        facebook: document.getElementById('settingFacebook').value.trim(),
        linkedin: document.getElementById('settingLinkedin').value.trim(),
        twitter: document.getElementById('settingTwitter').value.trim(),
        instagram: document.getElementById('settingInstagram').value.trim()
      };
      saveCmsData(cms);
    });
  }

  // =========================================================================
  // Core Divisions Manager
  // =========================================================================
  const divisionsContainer = document.getElementById('divisionsListContainer');
  const divisionModal = document.getElementById('divisionEditModal');
  const divisionForm = document.getElementById('divisionEditForm');
  const openDivModalBtn = document.getElementById('addNewDivisionModalBtn');
  const closeDivModalBtn = document.getElementById('closeDivisionModalBtn');
  const cancelDivModalBtn = document.getElementById('cancelDivisionEditBtn');

  const renderDivisions = () => {
    const cms = getCmsData();
    const divisions = cms.divisions || defaultCmsData.divisions;
    const countLabel = document.getElementById('divisionCountLabel');
    const statDivisions = document.getElementById('statTotalDivisions');
    if (countLabel) countLabel.textContent = divisions.length;
    if (statDivisions) statDivisions.textContent = divisions.length;

    if (!divisionsContainer) return;

    divisionsContainer.innerHTML = divisions.map((div, idx) => `
      <div class="division-admin-item">
        <div class="division-admin-header">
          <div>
            <span class="division-badge-tag">${escapeHtml(div.badge)}</span>
            <strong style="margin-left: 0.5rem; font-size: 1.05rem; color: var(--dark);">${escapeHtml(div.title)}</strong>
          </div>
          <div style="display: flex; gap: 0.5rem;">
            <button type="button" class="btn btn-secondary btn-sm" onclick="window.editDivision(${idx})">Edit</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="window.deleteDivision(${idx})">Delete</button>
          </div>
        </div>
        <p style="font-size: 0.88rem; color: var(--gray-600); margin-bottom: 0.5rem;">${escapeHtml(div.desc)}</p>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${(div.bullets || []).map(b => `<span style="background: var(--gray-100); padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; color: var(--gray-700);">&bull; ${escapeHtml(b)}</span>`).join('')}
        </div>
      </div>
    `).join('');
  };

  const openDivisionModal = (index = -1) => {
    const cms = getCmsData();
    const divisions = cms.divisions || defaultCmsData.divisions;
    const title = document.getElementById('divisionModalTitle');
    const indexInput = document.getElementById('editDivisionIndex');
    const badgeInput = document.getElementById('editDivisionBadge');
    const titleInput = document.getElementById('editDivisionTitle');
    const descInput = document.getElementById('editDivisionDesc');
    const bulletsInput = document.getElementById('editDivisionBullets');

    if (index >= 0 && divisions[index]) {
      const d = divisions[index];
      title.textContent = `Edit Division: ${d.badge}`;
      indexInput.value = index;
      badgeInput.value = d.badge;
      titleInput.value = d.title;
      descInput.value = d.desc;
      bulletsInput.value = (d.bullets || []).join('\n');
    } else {
      const nextNum = divisions.length + 1;
      title.textContent = "Add New Operational Division";
      indexInput.value = -1;
      badgeInput.value = `Division 0${nextNum}`;
      titleInput.value = "";
      descInput.value = "";
      bulletsInput.value = "";
    }

    if (divisionModal) divisionModal.classList.add('active');
  };

  const closeDivisionModal = () => {
    if (divisionModal) divisionModal.classList.remove('active');
  };

  if (openDivModalBtn) openDivModalBtn.addEventListener('click', () => openDivisionModal(-1));
  if (closeDivModalBtn) closeDivModalBtn.addEventListener('click', closeDivisionModal);
  if (cancelDivModalBtn) cancelDivModalBtn.addEventListener('click', closeDivisionModal);

  window.editDivision = (idx) => openDivisionModal(idx);
  window.deleteDivision = (idx) => {
    const cms = getCmsData();
    if (confirm(`Are you sure you want to delete ${cms.divisions[idx].title}?`)) {
      cms.divisions.splice(idx, 1);
      saveCmsData(cms);
      renderDivisions();
    }
  };

  if (divisionForm) {
    divisionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cms = getCmsData();
      const index = parseInt(document.getElementById('editDivisionIndex').value, 10);
      const bulletsText = document.getElementById('editDivisionBullets').value;
      const bullets = bulletsText.split('\n').map(s => s.trim()).filter(Boolean);

      const divData = {
        id: `division_${Date.now()}`,
        badge: document.getElementById('editDivisionBadge').value.trim(),
        title: document.getElementById('editDivisionTitle').value.trim(),
        desc: document.getElementById('editDivisionDesc').value.trim(),
        bullets: bullets
      };

      if (index >= 0) {
        divData.id = cms.divisions[index].id;
        cms.divisions[index] = divData;
      } else {
        cms.divisions.push(divData);
      }

      saveCmsData(cms);
      renderDivisions();
      closeDivisionModal();
    });
  }

  // =========================================================================
  // Facilities & Project Gallery Manager
  // =========================================================================
  const galleryGrid = document.getElementById('adminGalleryGrid');
  const galleryModal = document.getElementById('galleryAddModal');
  const galleryForm = document.getElementById('galleryAddForm');
  const openGalleryModalBtn = document.getElementById('addNewGalleryModalBtn');
  const closeGalleryModalBtn = document.getElementById('closeGalleryModalBtn');
  const cancelGalleryModalBtn = document.getElementById('cancelGalleryModalBtn');

  const renderGallery = () => {
    const cms = getCmsData();
    const gallery = cms.gallery || defaultCmsData.gallery;
    const statGallery = document.getElementById('statTotalGallery');
    if (statGallery) statGallery.textContent = gallery.length;

    if (!galleryGrid) return;

    galleryGrid.innerHTML = gallery.map((item, idx) => `
      <div class="gallery-admin-card">
        <img src="${item.img}" alt="${escapeHtml(item.title)}" class="gallery-admin-img" onerror="this.src='../../../../logo/logo.png'; this.style.padding='2rem';">
        <div class="gallery-admin-body">
          <h4>${escapeHtml(item.title)}</h4>
          <span>${escapeHtml(item.subtitle)}</span>
          <div class="gallery-admin-actions">
            <button type="button" class="btn btn-danger btn-sm" onclick="window.deleteGalleryItem(${idx})">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  };

  const openGalleryModal = () => {
    if (galleryForm) galleryForm.reset();
    if (galleryModal) galleryModal.classList.add('active');
  };

  const closeGalleryModal = () => {
    if (galleryModal) galleryModal.classList.remove('active');
  };

  if (openGalleryModalBtn) openGalleryModalBtn.addEventListener('click', openGalleryModal);
  if (closeGalleryModalBtn) closeGalleryModalBtn.addEventListener('click', closeGalleryModal);
  if (cancelGalleryModalBtn) cancelGalleryModalBtn.addEventListener('click', closeGalleryModal);

  window.deleteGalleryItem = (idx) => {
    const cms = getCmsData();
    if (confirm(`Remove "${cms.gallery[idx].title}" from project gallery?`)) {
      cms.gallery.splice(idx, 1);
      saveCmsData(cms);
      renderGallery();
    }
  };

  if (galleryForm) {
    galleryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cms = getCmsData();
      const newItem = {
        title: document.getElementById('galleryAddTitle').value.trim(),
        category: document.getElementById('galleryAddCategory').value,
        subtitle: document.getElementById('galleryAddSubtitle').value.trim(),
        img: document.getElementById('galleryAddImgUrl').value.trim()
      };
      cms.gallery.unshift(newItem);
      saveCmsData(cms);
      renderGallery();
      closeGalleryModal();
    });
  }

  // =========================================================================
  // Hero & Content Settings Form
  // =========================================================================
  const heroForm = document.getElementById('heroSettingsForm');
  const loadHeroSettings = () => {
    const cms = getCmsData();
    const h = cms.hero || defaultCmsData.hero;
    document.getElementById('settingHeroBadge').value = h.badge || '';
    document.getElementById('settingHeroTitle').value = h.title || '';
    document.getElementById('settingHeroSubtitle').value = h.subtitle || '';
    document.getElementById('settingStat1').value = h.stat1 || '';
    document.getElementById('settingStat2').value = h.stat2 || '';
    document.getElementById('settingStat3').value = h.stat3 || '';
    document.getElementById('settingStat4').value = h.stat4 || '';
  };

  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cms = getCmsData();
      cms.hero = {
        badge: document.getElementById('settingHeroBadge').value.trim(),
        title: document.getElementById('settingHeroTitle').value.trim(),
        subtitle: document.getElementById('settingHeroSubtitle').value.trim(),
        stat1: document.getElementById('settingStat1').value.trim(),
        stat2: document.getElementById('settingStat2').value.trim(),
        stat3: document.getElementById('settingStat3').value.trim(),
        stat4: document.getElementById('settingStat4').value.trim()
      };
      saveCmsData(cms);
    });
  }

  // =========================================================================
  // Backup, Import & Reset Logic
  // =========================================================================
  const exportJsonBtn = document.getElementById('exportDataJsonBtn');
  const importJsonBtn = document.getElementById('importDataJsonBtn');
  const importFileInput = document.getElementById('importFileInput');
  const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');

  if (exportJsonBtn) {
    exportJsonBtn.addEventListener('click', () => {
      const fullBackup = {
        cms: getCmsData(),
        inquiries: getInquiries(),
        exportedAt: new Date().toISOString()
      };
      downloadFile(JSON.stringify(fullBackup, null, 2), `saas-engineering-backup-${new Date().toISOString().slice(0, 10)}.json`, 'application/json');
      showToast("Complete backup downloaded.");
    });
  }

  if (importJsonBtn && importFileInput) {
    importJsonBtn.addEventListener('click', () => importFileInput.click());

    importFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          if (parsed.cms) {
            localStorage.setItem(CMS_KEY, JSON.stringify(parsed.cms));
          }
          if (parsed.inquiries) {
            localStorage.setItem(INQUIRIES_KEY, JSON.stringify(parsed.inquiries));
          }
          showToast("Data backup successfully restored.");
          initDashboard();
        } catch (err) {
          alert("Invalid backup JSON file.");
        }
      };
      reader.readAsText(file);
    });
  }

  if (resetDefaultsBtn) {
    resetDefaultsBtn.addEventListener('click', () => {
      if (confirm("Reset all website content and configurations back to factory defaults? Any custom edits will be reverted.")) {
        localStorage.removeItem(CMS_KEY);
        showToast("Reverted to factory default content.");
        initDashboard();
      }
    });
  }

  // =========================================================================
  // Dashboard Initialization
  // =========================================================================
  const initDashboard = () => {
    renderInquiries();
    loadContactSettings();
    renderDivisions();
    renderGallery();
    loadHeroSettings();
  };

  // Utilities
  const escapeHtml = (str) => {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  const cleanCsv = (str) => {
    if (!str) return '';
    return String(str).replace(/"/g, '""');
  };

  const downloadFile = (content, filename, type) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Run on startup
  checkAuth();
});
