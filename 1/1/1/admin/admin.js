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
      stat1: "6",
      stat2: "100%",
      stat3: "24/7",
      stat4: "PHC"
    },
    divisions: [
      {
        id: "welding_fabrication",
        badge: "Division 01",
        title: "Welding & Fabrication, Industrial Services & Training",
        desc: "Our workshop and field teams carry out precision structural steel fabrication, specialized pipe spool manufacturing, and industrial machining. We feature advanced machinery including Pinacho CNC lathes, PEGAS bandsaws, and automated oxy-fuel track torch cutters, accompanied by comprehensive NDT testing and vocational training programs for certified pipefitters.",
        img: "assets/images/1_Welding_Fabrication_Industrial_Services_Training/automated_track_torch_plate_cutting_machine.jpeg",
        bullets: [
          "Structural Steel & Pipe Spool Fabrication",
          "Automated Plate & Saddle Flame Cutting",
          "Precision Lathe Machining & Milling",
          "Hydrostatic Testing & NDT Inspection",
          "Technical Welding & Pipefitting Training",
          "Plant Mechanical Maintenance & Repairs"
        ]
      },
      {
        id: "pipeline_offshore",
        badge: "Division 02",
        title: "Oil & Gas Services, Surface Pipeline Activities & Offshore Support",
        desc: "We execute surface and cross-country pipeline construction, including route clearing, trenching, pipe stringing, field alignment, and certified orbital/stick welding. Our oilfield services extend to specialized pipe saddle profiling, energy equipment supplies, and maintenance support for deepwater and offshore production platforms.",
        img: "assets/images/2_Oil_and_Gas_Surface_Pipeline_Offshore_Services/surface_pipeline_construction_laying.jpg",
        bullets: [
          "Surface Pipeline Construction & Laying",
          "Field Pipe Welding & Tie-ins",
          "Motorized Pipe Profile Cutting & Beveling",
          "Offshore Platform Facilities Support",
          "River & Road Pipeline Crossings",
          "Upstream Oilfield Equipment Supply"
        ]
      },
      {
        id: "dredging_valves",
        badge: "Division 03",
        title: "Dredging Services & Technical Parts (Valves, Impellers, Dredging Pumps)",
        desc: "Supplying heavy-duty marine dredging equipment and critical flow control components. We manufacture and supply heavy cast impellers, machined volute pump casings, complete diesel engine-driven dredge pump skids, and an extensive inventory of industrial valves (gate, ball, check, and butterfly valves) tested on automated calibration benches.",
        img: "assets/images/3_Dredging_Services_and_Technical_Parts/diesel_engine_dredge_pump_skid_assembly.jpeg",
        bullets: [
          "Diesel Engine Slurry Dredge Pump Skids",
          "Heavy Cast Iron Dredge Impellers",
          "Machined Volute Pump Casings",
          "DN200 (8-inch) Slurry Pump Assemblies",
          "Industrial Valve Supply (All Sizes & Classes)",
          "METRUS Pressure Testing & Valve Overhaul"
        ]
      },
      {
        id: "logistics_heavy_equipment",
        badge: "Division 04",
        title: "Logistics, Haulage, Heavy Equipment Leasing & Caterpillar Parts",
        desc: "Our heavy equipment division provides equipment rental, site logistics, and specialized transport across rugged project terrains. From Caterpillar sideboom pipelayers and hydraulic excavators to Goldhofer multi-axle heavy transport trailers, we facilitate seamless material handling, machinery leasing, and authentic Caterpillar replacement parts supply.",
        img: "assets/images/4_Logistics_Haulage_and_Heavy_Equipment/caterpillar_sideboom_pipelayer_heavy_equipment.jpeg",
        bullets: [
          "Caterpillar Sideboom Pipelayer Hire",
          "Heavy Hydraulic Excavator Leasing",
          "Multi-Axle Heavy Haulage Transport",
          "Mobile Crane Lifting Operations",
          "Genuine Caterpillar Spares Supply",
          "Industrial Plant Rigging & Heavy Towing"
        ]
      },
      {
        id: "manpower_instrumentation",
        badge: "Division 05",
        title: "Manpower Supply, Instrumentation & Control Engineering",
        desc: "Delivering qualified technical staffing and advanced industrial control engineering. We provide certified professionals (coded welders, NDT technicians, electrical engineers) alongside instrumentation design, pressure/temperature transmitter calibration, pneumatic actuator integration, and SCADA automation support.",
        img: "assets/images/6_Manpower_Supply_Instrumentation_and_Control/instrumentation_calibration_test_bench.jpeg",
        bullets: [
          "Certified Technical Manpower Staffing",
          "Instrumentation & Control Engineering",
          "Pressure & Flow Transmitter Calibration",
          "Control Valve Actuator Integration",
          "SCADA & Control Room Operations",
          "Facility Electrical & Control Maintenance"
        ]
      },
      {
        id: "general_contracts_procurement",
        badge: "Division 06",
        title: "General Contracts, Procurement & Industrial Safety Gadgets (PPE)",
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
      }
    ],
    gallery: [
      {
        title: "Pinacho CNC Lathe",
        category: "fabrication",
        subtitle: "Precision Machining",
        img: "../../../../assets/images/1_Welding_Fabrication_Industrial_Services_Training/pinacho_cnc_lathe_machining_equipment.jpeg"
      },
      {
        title: "Slurry Pump Impellers",
        category: "dredging",
        subtitle: "Dredging Components",
        img: "../../../../assets/images/3_Dredging_Services_and_Technical_Parts/dredge_slurry_pump_cast_impellers.jpeg"
      },
      {
        title: "Pipe Profile Bevel Cutter",
        category: "pipeline",
        subtitle: "Pipeline Tooling",
        img: "../../../../assets/images/2_Oil_and_Gas_Surface_Pipeline_Offshore_Services/pipe_profile_cutter_beveling_tool.jpeg"
      },
      {
        title: "Pressure Testing Rig",
        category: "fabrication",
        subtitle: "Inspection & Calibration",
        img: "../../../../assets/images/1_Welding_Fabrication_Industrial_Services_Training/valve_pressure_testing_inspection_rig.jpeg"
      },
      {
        title: "Caterpillar Pipelayer",
        category: "equipment",
        subtitle: "Heavy Equipment Fleet",
        img: "../../../../assets/images/4_Logistics_Haulage_and_Heavy_Equipment/caterpillar_sideboom_pipelayer_heavy_equipment.jpeg"
      },
      {
        title: "Volute Pump Casings",
        category: "dredging",
        subtitle: "Dredging Castings",
        img: "../../../../assets/images/3_Dredging_Services_and_Technical_Parts/dredge_pump_volute_casings_machined.jpeg"
      },
      {
        title: "Pipeline Field Welding",
        category: "pipeline",
        subtitle: "Certified Welder Crew",
        img: "../../../../assets/images/2_Oil_and_Gas_Surface_Pipeline_Offshore_Services/surface_pipeline_field_welding_operation.jpeg"
      },
      {
        title: "Pipefitting Training Rig",
        category: "fabrication",
        subtitle: "Technical Training Services",
        img: "../../../../assets/images/1_Welding_Fabrication_Industrial_Services_Training/welding_and_pipefitting_training_board.jpeg"
      },
      {
        title: "Industrial Safety Helmets",
        category: "instrumentation",
        subtitle: "PPE & Procurement",
        img: "../../../../assets/images/7_General_Contracts_Procurement_and_Safety_Gadgets/safety_helmet_hard_hat_ppe.jpg"
      }
    ]
  };

  // Authentic division image assets
  const divisionImages = {
    'welding_fabrication': 'assets/images/1_Welding_Fabrication_Industrial_Services_Training/automated_track_torch_plate_cutting_machine.jpeg',
    'pipeline_offshore': 'assets/images/2_Oil_and_Gas_Surface_Pipeline_Offshore_Services/surface_pipeline_construction_laying.jpg',
    'dredging_valves': 'assets/images/3_Dredging_Services_and_Technical_Parts/diesel_engine_dredge_pump_skid_assembly.jpeg',
    'logistics_heavy_equipment': 'assets/images/4_Logistics_Haulage_and_Heavy_Equipment/caterpillar_sideboom_pipelayer_heavy_equipment.jpeg',
    'manpower_instrumentation': 'assets/images/6_Manpower_Supply_Instrumentation_and_Control/instrumentation_calibration_test_bench.jpeg',
    'general_contracts_procurement': 'assets/images/7_General_Contracts_Procurement_and_Safety_Gadgets/safety_helmet_hard_hat_ppe.jpg'
  };
  const fallbackDivisionImg = 'assets/images/1_Welding_Fabrication_Industrial_Services_Training/industrial_fabrication_machine_shop_facility.jpeg';

  const getDivisionImgSrc = (div) => {
    if (!div) return '../../../../' + fallbackDivisionImg;
    const raw = div.img || divisionImages[div.id] || fallbackDivisionImg;
    return (raw.startsWith('data:') || raw.startsWith('http')) ? raw : '../../../../' + raw.replace(/^(\.\.\/)+/, '');
  };

  // Inquiries collection (starts 100% empty until real clients submit consultation forms)
  const defaultInquiries = [];

  // Helper Functions for Data
  const getCmsData = () => {
    try {
      const data = localStorage.getItem(CMS_KEY);
      if (!data) return defaultCmsData;
      const parsed = JSON.parse(data);

      let needsSave = false;

      // Purge ghost gallery items
      if (Array.isArray(parsed.gallery)) {
        const cleaned = parsed.gallery.filter(item => 
          !item.title.toLowerCase().includes('high-pressure testing plant') &&
          !item.title.toLowerCase().includes('high-pressure manifold') &&
          !(item.img && item.img.includes('pressure_testing_assembly_plant'))
        );
        if (cleaned.length !== parsed.gallery.length) {
          parsed.gallery = cleaned.length > 0 ? cleaned : defaultCmsData.gallery;
          needsSave = true;
        }
      }

      // Automatically replace outdated mock hero stats with exact user side values
      if (parsed.hero && (parsed.hero.stat1 === '15+ Years' || parsed.hero.stat3 === '100% Safety')) {
        parsed.hero.stat1 = defaultCmsData.hero.stat1;
        parsed.hero.stat2 = defaultCmsData.hero.stat2;
        parsed.hero.stat3 = defaultCmsData.hero.stat3;
        parsed.hero.stat4 = defaultCmsData.hero.stat4;
        needsSave = true;
      }

      // Automatically update division bullets if old truncated versions exist
      if (Array.isArray(parsed.divisions) && parsed.divisions.length === 6 && parsed.divisions[0].bullets && parsed.divisions[0].bullets.length === 4) {
        parsed.divisions = defaultCmsData.divisions;
        needsSave = true;
      }

      // Ensure every division has an authentic img path
      if (Array.isArray(parsed.divisions)) {
        parsed.divisions.forEach(d => {
          if (!d.img) {
            d.img = divisionImages[d.id] || fallbackDivisionImg;
            needsSave = true;
          }
        });
      }

      // Auto-sync Specialized Divisions stat count with active divisions count
      if (parsed.hero && Array.isArray(parsed.divisions)) {
        if (/^\d+$/.test(parsed.hero.stat1) && parseInt(parsed.hero.stat1, 10) !== parsed.divisions.length) {
          parsed.hero.stat1 = String(parsed.divisions.length);
          needsSave = true;
        }
      }

      if (needsSave) {
        localStorage.setItem(CMS_KEY, JSON.stringify(parsed));
      }

      return parsed;
    } catch (e) {
      return defaultCmsData;
    }
  };

  // Real-Time Inter-Tab Broadcast Channel & Timestamp Signaler
  const TIMESTAMP_KEY = 'saas_cms_timestamp';
  const CHANNEL_NAME = 'saas_cms_channel';
  const cmsBroadcast = typeof window.BroadcastChannel !== 'undefined' ? new BroadcastChannel(CHANNEL_NAME) : null;

  const saveCmsData = (data) => {
    localStorage.setItem(CMS_KEY, JSON.stringify(data));
    localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
    if (cmsBroadcast) {
      try {
        cmsBroadcast.postMessage({ type: 'CMS_UPDATED', data: data });
      } catch (err) {
        console.warn('BroadcastChannel error:', err);
      }
    }
    showToast("Changes published live to public website.");
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
  // Modular Custom Dialog Modal (Replaces native browser alert & confirm)
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

  // Override window.alert across admin portal
  window.alert = (msg) => {
    window.customAlert(String(msg), 'System Notification', 'warning');
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

  window.deleteInquiry = async (id) => {
    const confirmed = await window.customConfirm("Are you sure you want to delete this client inquiry? This action cannot be undone.", {
      title: "Delete Client Inquiry",
      confirmText: "Delete Inquiry",
      isDanger: true
    });
    if (confirmed) {
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
        window.customAlert("There are currently no client inquiries in the database to export.", "Export Inquiries", "info");
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
    clearInquiriesBtn.addEventListener('click', async () => {
      const confirmed = await window.customConfirm("Are you sure you want to permanently clear all inquiries? This action cannot be undone.", {
        title: "Clear All Inquiries",
        confirmText: "Clear All",
        isDanger: true
      });
      if (confirmed) {
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

    if (typeof renderGalleryDivisionPicker === 'function') {
      renderGalleryDivisionPicker();
    }

    if (!divisionsContainer) return;

    divisionsContainer.innerHTML = divisions.map((div, idx) => {
      const displayImg = getDivisionImgSrc(div);
      return `
        <div class="division-admin-item">
          <div class="division-admin-header">
            <div class="division-admin-header-main">
              <img src="${displayImg}" alt="${escapeHtml(div.title)}" class="division-admin-thumb" onerror="this.src='../../../../logo/logo.png'">
              <div>
                <span class="division-badge-tag">${escapeHtml(div.badge)}</span>
                <strong style="margin-left: 0.5rem; font-size: 1.05rem; color: var(--dark);">${escapeHtml(div.title)}</strong>
              </div>
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
      `;
    }).join('');
  };

  // Division Photo / Cover Image DOM controls
  const divisionFileInput = document.getElementById('divisionFileInput');
  const divisionDropzone = document.getElementById('divisionDropzone');
  const divisionPreviewCard = document.getElementById('divisionPreviewCard');
  const divisionPreviewImg = document.getElementById('divisionPreviewImg');
  const divisionPreviewFilename = document.getElementById('divisionPreviewFilename');
  const changeDivisionPhotoBtn = document.getElementById('changeDivisionPhotoBtn');
  const editDivisionImg = document.getElementById('editDivisionImg');
  const toggleDivisionUrlBtn = document.getElementById('toggleDivisionUrlBtn');
  const divisionUrlInputContainer = document.getElementById('divisionUrlInputContainer');
  const divisionManualUrlInput = document.getElementById('divisionManualUrlInput');

  const setDivisionPreview = (src, filename = 'division_cover.jpg') => {
    if (!editDivisionImg) return;
    editDivisionImg.value = src;
    if (divisionPreviewImg) {
      divisionPreviewImg.src = (src.startsWith('data:') || src.startsWith('http')) ? src : '../../../../' + src.replace(/^(\.\.\/)+/, '');
    }
    if (divisionPreviewFilename) {
      divisionPreviewFilename.textContent = filename;
    }
    if (divisionPreviewCard) divisionPreviewCard.classList.add('show');
    if (divisionDropzone) divisionDropzone.style.display = 'none';
  };

  const resetDivisionUpload = () => {
    if (divisionFileInput) divisionFileInput.value = '';
    if (divisionPreviewCard) divisionPreviewCard.classList.remove('show');
    if (divisionDropzone) divisionDropzone.style.display = 'flex';
    if (divisionUrlInputContainer) divisionUrlInputContainer.style.display = 'none';
    if (divisionManualUrlInput) divisionManualUrlInput.value = '';
    if (toggleDivisionUrlBtn) toggleDivisionUrlBtn.textContent = 'Or paste image URL instead';
  };

  const processDivisionImage = (file) => {
    if (!file || !file.type.startsWith('image/')) {
      window.customAlert("Please select a valid image file format (PNG, JPG, JPEG, or WEBP).", "Invalid File Format", "warning");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxWidth = 1200;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);
        setDivisionPreview(compressedDataUrl, file.name);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  if (divisionDropzone) {
    divisionDropzone.addEventListener('click', () => {
      if (divisionFileInput) divisionFileInput.click();
    });

    divisionDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      divisionDropzone.classList.add('dragover');
    });

    divisionDropzone.addEventListener('dragleave', () => {
      divisionDropzone.classList.remove('dragover');
    });

    divisionDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      divisionDropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        processDivisionImage(e.dataTransfer.files[0]);
      }
    });
  }

  if (divisionFileInput) {
    divisionFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files[0]) {
        processDivisionImage(e.target.files[0]);
      }
    });
  }

  if (changeDivisionPhotoBtn) {
    changeDivisionPhotoBtn.addEventListener('click', () => {
      if (divisionFileInput) divisionFileInput.click();
    });
  }

  if (toggleDivisionUrlBtn && divisionUrlInputContainer) {
    toggleDivisionUrlBtn.addEventListener('click', () => {
      const isHidden = divisionUrlInputContainer.style.display === 'none';
      divisionUrlInputContainer.style.display = isHidden ? 'block' : 'none';
      toggleDivisionUrlBtn.textContent = isHidden ? 'Hide image URL input' : 'Or paste image URL instead';
      if (isHidden && divisionManualUrlInput) divisionManualUrlInput.focus();
    });
  }

  if (divisionManualUrlInput) {
    divisionManualUrlInput.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      if (url) {
        setDivisionPreview(url, 'custom_url_image.jpg');
      }
    });
  }

  const openDivisionModal = (index = -1) => {
    const cms = getCmsData();
    const divisions = cms.divisions || defaultCmsData.divisions;
    const title = document.getElementById('divisionModalTitle');
    const indexInput = document.getElementById('editDivisionIndex');
    const badgeInput = document.getElementById('editDivisionBadge');
    const titleInput = document.getElementById('editDivisionTitle');
    const descInput = document.getElementById('editDivisionDesc');
    const bulletsInput = document.getElementById('editDivisionBullets');

    resetDivisionUpload();

    if (index >= 0 && divisions[index]) {
      const d = divisions[index];
      title.textContent = `Edit Division: ${d.badge}`;
      indexInput.value = index;
      badgeInput.value = d.badge;
      titleInput.value = d.title;
      descInput.value = d.desc;
      bulletsInput.value = (d.bullets || []).join('\n');
      const imgPath = d.img || divisionImages[d.id] || fallbackDivisionImg;
      setDivisionPreview(imgPath, `${d.badge || 'division'}_photo.jpg`);
    } else {
      const nextNum = divisions.length + 1;
      title.textContent = "Add New Operational Division";
      indexInput.value = -1;
      badgeInput.value = `Division 0${nextNum}`;
      titleInput.value = "";
      descInput.value = "";
      bulletsInput.value = "";
      setDivisionPreview(fallbackDivisionImg, 'default_division.jpg');
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
  window.deleteDivision = async (idx) => {
    const cms = getCmsData();
    if (!Array.isArray(cms.divisions)) cms.divisions = [...defaultCmsData.divisions];
    const div = cms.divisions[idx];
    const divTitle = div ? div.title : 'this division';
    const confirmed = await window.customConfirm(`Are you sure you want to delete "${divTitle}"? It will be removed immediately from the public website.`, {
      title: "Delete Technical Division",
      confirmText: "Delete Division",
      isDanger: true
    });
    if (confirmed) {
      cms.divisions.splice(idx, 1);
      // Auto sync hero stat1 with divisions count
      if (!cms.hero) cms.hero = { ...defaultCmsData.hero };
      cms.hero.stat1 = String(cms.divisions.length);
      saveCmsData(cms);
      renderDivisions();
      if (typeof renderGalleryDivisionPicker === 'function') renderGalleryDivisionPicker();
      showToast("Division deleted successfully.");
    }
  };

  if (divisionForm) {
    divisionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const cms = getCmsData();
      const index = parseInt(document.getElementById('editDivisionIndex').value, 10);
      const bulletsText = document.getElementById('editDivisionBullets').value;
      const bullets = bulletsText.split('\n').map(s => s.trim()).filter(Boolean);
      const chosenImg = document.getElementById('editDivisionImg')?.value.trim() || fallbackDivisionImg;

      const divData = {
        id: (index >= 0 && cms.divisions && cms.divisions[index]) ? cms.divisions[index].id : `division_${Date.now()}`,
        badge: document.getElementById('editDivisionBadge').value.trim(),
        title: document.getElementById('editDivisionTitle').value.trim(),
        desc: document.getElementById('editDivisionDesc').value.trim(),
        bullets: bullets,
        img: chosenImg
      };

      if (!Array.isArray(cms.divisions)) cms.divisions = [...defaultCmsData.divisions];

      if (index >= 0 && index < cms.divisions.length) {
        cms.divisions[index] = divData;
      } else {
        cms.divisions.push(divData);
      }

      // Automatically keep hero stat1 in sync with active divisions count
      if (!cms.hero) cms.hero = { ...defaultCmsData.hero };
      cms.hero.stat1 = String(cms.divisions.length);

      saveCmsData(cms);
      renderDivisions();
      if (typeof renderGalleryDivisionPicker === 'function') renderGalleryDivisionPicker();
      closeDivisionModal();
      showToast("Division saved and synchronized successfully.");
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

    if (gallery.length === 0) {
      galleryGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--gray-500);">
          No project gallery items found. Click &quot;Add Project Photo&quot; to upload one.
        </div>
      `;
      return;
    }

    galleryGrid.innerHTML = gallery.map((item, idx) => `
      <div class="gallery-admin-card">
        <img src="${item.img}" alt="${escapeHtml(item.title)}" class="gallery-admin-img" onerror="this.src='../../../../logo/logo.png'; this.style.padding='2rem';">
        <div class="gallery-admin-body">
          <h4>${escapeHtml(item.title)}</h4>
          <span>${escapeHtml(item.subtitle)}</span>
          <div class="gallery-admin-actions">
            <button type="button" class="btn btn-secondary btn-sm" onclick="window.editGalleryItem(${idx})">Edit</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="window.deleteGalleryItem(${idx})">Remove</button>
          </div>
        </div>
      </div>
    `).join('');
  };

  const galleryFileInput = document.getElementById('galleryFileInput');
  const galleryDropzone = document.getElementById('galleryDropzone');
  const galleryPreviewCard = document.getElementById('galleryPreviewCard');
  const galleryPreviewImg = document.getElementById('galleryPreviewImg');
  const galleryPreviewFilename = document.getElementById('galleryPreviewFilename');
  const changeGalleryPhotoBtn = document.getElementById('changeGalleryPhotoBtn');
  const galleryAddImgUrl = document.getElementById('galleryAddImgUrl');
  const toggleUrlInputBtn = document.getElementById('toggleUrlInputBtn');
  const urlInputContainer = document.getElementById('urlInputContainer');
  const galleryManualUrlInput = document.getElementById('galleryManualUrlInput');

  // Compress image to fit within localStorage smoothly
  const processAndPreviewImage = (file) => {
    if (!file || !file.type.startsWith('image/')) {
      window.customAlert("Please select a valid image file format (PNG, JPG, JPEG, or WEBP).", "Invalid File Format", "warning");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxWidth = 1200;
        const maxHeight = 1200;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxWidth;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Web-friendly optimized JPEG data URL
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

        if (galleryAddImgUrl) galleryAddImgUrl.value = dataUrl;
        if (galleryPreviewImg) galleryPreviewImg.src = dataUrl;
        if (galleryPreviewFilename) galleryPreviewFilename.textContent = file.name;
        if (galleryDropzone) galleryDropzone.style.display = 'none';
        if (galleryPreviewCard) galleryPreviewCard.classList.add('show');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const resetGalleryUploadState = () => {
    if (galleryFileInput) galleryFileInput.value = '';
    if (galleryAddImgUrl) galleryAddImgUrl.value = '';
    if (galleryPreviewImg) galleryPreviewImg.src = '';
    if (galleryPreviewCard) galleryPreviewCard.classList.remove('show');
    if (galleryDropzone) galleryDropzone.style.display = 'flex';
    if (urlInputContainer) urlInputContainer.style.display = 'none';
    if (galleryManualUrlInput) galleryManualUrlInput.value = '';
    if (toggleUrlInputBtn) toggleUrlInputBtn.textContent = 'Or paste image URL instead';
  };

  if (galleryDropzone && galleryFileInput) {
    galleryDropzone.addEventListener('click', () => galleryFileInput.click());
    galleryDropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        galleryFileInput.click();
      }
    });

    galleryDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      galleryDropzone.classList.add('dragover');
    });

    galleryDropzone.addEventListener('dragleave', () => {
      galleryDropzone.classList.remove('dragover');
    });

    galleryDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      galleryDropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processAndPreviewImage(e.dataTransfer.files[0]);
      }
    });
  }

  if (galleryFileInput) {
    galleryFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        processAndPreviewImage(e.target.files[0]);
      }
    });
  }

  if (changeGalleryPhotoBtn && galleryFileInput) {
    changeGalleryPhotoBtn.addEventListener('click', () => {
      galleryFileInput.click();
    });
  }

  if (toggleUrlInputBtn && urlInputContainer && galleryManualUrlInput) {
    toggleUrlInputBtn.addEventListener('click', () => {
      const isVisible = urlInputContainer.style.display === 'block';
      urlInputContainer.style.display = isVisible ? 'none' : 'block';
      toggleUrlInputBtn.textContent = isVisible ? 'Or paste image URL instead' : 'Hide image URL input';
    });

    galleryManualUrlInput.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      if (url) {
        if (galleryAddImgUrl) galleryAddImgUrl.value = url;
        if (galleryPreviewImg) galleryPreviewImg.src = url;
        if (galleryPreviewFilename) galleryPreviewFilename.textContent = url.slice(0, 30) + '...';
        if (galleryDropzone) galleryDropzone.style.display = 'none';
        if (galleryPreviewCard) galleryPreviewCard.classList.add('show');
      }
    });
  }

  // =========================================================================
  // Gallery Division Category Modular Picker Controller
  // =========================================================================
  const divisionCategoryMap = {
    'fabrication': 'welding_fabrication',
    'pipeline': 'pipeline_offshore',
    'dredging': 'dredging_valves',
    'equipment': 'logistics_heavy_equipment',
    'logistics': 'logistics_heavy_equipment',
    'instrumentation': 'manpower_instrumentation',
    'manpower': 'manpower_instrumentation',
    'procurement': 'general_contracts_procurement'
  };

  const galleryDivTrigger = document.getElementById('galleryDivisionTrigger');
  const galleryDivModal = document.getElementById('galleryDivisionSelectModal');
  const closeGalleryDivModalBtn = document.getElementById('closeGalleryDivisionSelectModalBtn');
  const cancelGalleryDivModalBtn = document.getElementById('cancelGalleryDivisionSelectModalBtn');
  const adminGalleryDivisionGrid = document.getElementById('adminGalleryDivisionGrid');

  const setGallerySelectedDivision = (div) => {
    if (!div) return;
    const hiddenCategory = document.getElementById('galleryAddCategory');
    const thumbEl = document.getElementById('gallerySelectedDivisionImg');
    const titleEl = document.getElementById('gallerySelectedDivisionTitle');
    const subEl = document.getElementById('gallerySelectedDivisionSub');

    if (hiddenCategory) hiddenCategory.value = div.id;
    if (titleEl) titleEl.textContent = div.title || 'Technical Division';
    if (subEl) subEl.textContent = `${div.badge || 'Division'} \u2022 Click to open division selection modal`;
    if (thumbEl) thumbEl.src = getDivisionImgSrc(div);
  };

  const renderGalleryDivisionPicker = (selectedId = '') => {
    const cms = getCmsData();
    const divisions = cms.divisions || defaultCmsData.divisions;
    if (!adminGalleryDivisionGrid) return;

    const currentVal = selectedId || document.getElementById('galleryAddCategory')?.value || (divisions[0] ? divisions[0].id : 'welding_fabrication');

    adminGalleryDivisionGrid.innerHTML = divisions.map(div => {
      const displayImg = getDivisionImgSrc(div);
      const isSelected = div.id === currentVal || divisionCategoryMap[currentVal] === div.id;

      return `
        <div class="admin-division-select-card ${isSelected ? 'selected' : ''}" data-division-id="${escapeHtml(div.id)}" tabindex="0" role="button">
          <div class="admin-div-card-img-wrap">
            <img src="${displayImg}" alt="${escapeHtml(div.title)}" class="admin-div-card-img" onerror="this.src='../../../../logo/logo.png'">
            <span class="admin-div-card-badge">${escapeHtml(div.badge || 'Division')}</span>
            <div class="admin-div-card-check">
              <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            </div>
          </div>
          <div class="admin-div-card-body">
            <h4>${escapeHtml(div.title)}</h4>
            <p>${escapeHtml(div.desc || '')}</p>
          </div>
        </div>
      `;
    }).join('');

    adminGalleryDivisionGrid.querySelectorAll('.admin-division-select-card').forEach(card => {
      card.addEventListener('click', () => {
        const divId = card.getAttribute('data-division-id');
        const chosen = divisions.find(d => d.id === divId) || divisions[0];
        setGallerySelectedDivision(chosen);
        closeGalleryDivisionSelectModal();
      });
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
    });
  };

  const openGalleryDivisionSelectModal = () => {
    const curVal = document.getElementById('galleryAddCategory')?.value;
    renderGalleryDivisionPicker(curVal);
    if (galleryDivModal) galleryDivModal.classList.add('active');
  };

  const closeGalleryDivisionSelectModal = () => {
    if (galleryDivModal) galleryDivModal.classList.remove('active');
  };

  if (galleryDivTrigger) {
    galleryDivTrigger.addEventListener('click', openGalleryDivisionSelectModal);
    galleryDivTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openGalleryDivisionSelectModal();
      }
    });
  }
  if (closeGalleryDivModalBtn) closeGalleryDivModalBtn.addEventListener('click', closeGalleryDivisionSelectModal);
  if (cancelGalleryDivModalBtn) cancelGalleryDivModalBtn.addEventListener('click', closeGalleryDivisionSelectModal);
  if (galleryDivModal) {
    galleryDivModal.addEventListener('click', (e) => {
      if (e.target === galleryDivModal) closeGalleryDivisionSelectModal();
    });
  }

  const openGalleryModal = () => {
    if (galleryForm) galleryForm.reset();
    resetGalleryUploadState();
    const indexInput = document.getElementById('editGalleryIndex');
    if (indexInput) indexInput.value = '-1';
    const modalTitle = document.getElementById('galleryModalTitle');
    if (modalTitle) modalTitle.textContent = 'Add Project Photo to Gallery';
    const submitBtn = document.getElementById('galleryModalSubmitBtn');
    if (submitBtn) submitBtn.textContent = 'Add to Gallery';

    // Set default division category to the first published division
    const cms = getCmsData();
    const divisions = cms.divisions || defaultCmsData.divisions;
    if (divisions.length > 0) {
      setGallerySelectedDivision(divisions[0]);
    }

    if (galleryModal) galleryModal.classList.add('active');
  };

  const closeGalleryModal = () => {
    if (galleryModal) galleryModal.classList.remove('active');
    resetGalleryUploadState();
  };

  if (openGalleryModalBtn) openGalleryModalBtn.addEventListener('click', openGalleryModal);
  if (closeGalleryModalBtn) closeGalleryModalBtn.addEventListener('click', closeGalleryModal);
  if (cancelGalleryModalBtn) cancelGalleryModalBtn.addEventListener('click', closeGalleryModal);

  window.editGalleryItem = (idx) => {
    const cms = getCmsData();
    const gallery = Array.isArray(cms.gallery) ? cms.gallery : defaultCmsData.gallery;
    const item = gallery[idx];
    if (!item) return;

    resetGalleryUploadState();

    const titleInput = document.getElementById('galleryAddTitle');
    const subtitleInput = document.getElementById('galleryAddSubtitle');
    const indexInput = document.getElementById('editGalleryIndex');
    const hiddenImg = document.getElementById('galleryAddImgUrl');
    const previewImg = document.getElementById('galleryPreviewImg');
    const previewFilename = document.getElementById('galleryPreviewFilename');
    const previewCard = document.getElementById('galleryPreviewCard');
    const dropzone = document.getElementById('galleryDropzone');
    const modalTitle = document.getElementById('galleryModalTitle');
    const submitBtn = document.getElementById('galleryModalSubmitBtn');

    if (titleInput) titleInput.value = item.title || '';
    if (subtitleInput) subtitleInput.value = item.subtitle || '';
    if (indexInput) indexInput.value = idx;

    // Match division category
    const divisions = cms.divisions || defaultCmsData.divisions;
    const catVal = item.category || (divisions[0] ? divisions[0].id : 'welding_fabrication');
    const matchedDiv = divisions.find(d => d.id === catVal || d.id === divisionCategoryMap[catVal] || (catVal && d.id.includes(catVal))) || divisions[0];
    setGallerySelectedDivision(matchedDiv);

    if (item.img) {
      if (hiddenImg) hiddenImg.value = item.img;
      if (previewImg) previewImg.src = item.img;
      if (previewFilename) {
        previewFilename.textContent = item.img.startsWith('data:') ? 'Current Image' : item.img.split('/').pop();
      }
      if (dropzone) dropzone.style.display = 'none';
      if (previewCard) previewCard.classList.add('show');
    }

    if (modalTitle) modalTitle.textContent = 'Edit Project Photo';
    if (submitBtn) submitBtn.textContent = 'Save Changes';

    if (galleryModal) galleryModal.classList.add('active');
  };

  window.deleteGalleryItem = async (idx) => {
    const cms = getCmsData();
    if (!Array.isArray(cms.gallery)) cms.gallery = [...defaultCmsData.gallery];
    const item = cms.gallery[idx];
    const itemTitle = item ? item.title : 'this photo';
    const confirmed = await window.customConfirm(`Remove "${itemTitle}" from project gallery? It will be removed immediately from the public website.`, {
      title: "Remove Photo from Gallery",
      confirmText: "Remove Photo",
      isDanger: true
    });
    if (confirmed) {
      cms.gallery.splice(idx, 1);
      saveCmsData(cms);
      renderGallery();
      showToast("Photo removed from gallery.");
    }
  };

  if (galleryForm) {
    galleryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const imgVal = document.getElementById('galleryAddImgUrl')?.value?.trim();
      if (!imgVal) {
        window.customAlert("Please upload an image from your device or provide a valid image URL before saving.", "Photo Required", "warning");
        return;
      }
      const cms = getCmsData();
      if (!Array.isArray(cms.gallery)) cms.gallery = [...defaultCmsData.gallery];

      const editIdx = parseInt(document.getElementById('editGalleryIndex')?.value, 10);
      const galleryItem = {
        title: document.getElementById('galleryAddTitle').value.trim(),
        category: document.getElementById('galleryAddCategory').value,
        subtitle: document.getElementById('galleryAddSubtitle').value.trim(),
        img: imgVal
      };

      if (!isNaN(editIdx) && editIdx >= 0 && editIdx < cms.gallery.length) {
        cms.gallery[editIdx] = galleryItem;
        showToast("Photo updated successfully.");
      } else {
        cms.gallery.unshift(galleryItem);
        showToast("Photo added to project gallery successfully.");
      }

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
    document.getElementById('settingStat1').value = h.stat1 || String(cms.divisions?.length || 6);
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
        stat1: document.getElementById('settingStat1').value.trim() || String(cms.divisions?.length || 6),
        stat2: document.getElementById('settingStat2').value.trim(),
        stat3: document.getElementById('settingStat3').value.trim(),
        stat4: document.getElementById('settingStat4').value.trim()
      };
      saveCmsData(cms);
      showToast("Hero and performance stats saved successfully.");
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
            localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
            if (cmsBroadcast) {
              try { cmsBroadcast.postMessage({ type: 'CMS_UPDATED', data: parsed.cms }); } catch(e) {}
            }
          }
          if (parsed.inquiries) {
            localStorage.setItem(INQUIRIES_KEY, JSON.stringify(parsed.inquiries));
          }
          showToast("Data backup successfully restored.");
          initDashboard();
        } catch (err) {
          window.customAlert("The selected file is not a valid SAAS Engineering backup file. Please check the JSON format and try again.", "Invalid Backup File", "danger");
        }
      };
      reader.readAsText(file);
    });
  }

  if (resetDefaultsBtn) {
    resetDefaultsBtn.addEventListener('click', async () => {
      const confirmed = await window.customConfirm("Reset all website content, contact information, divisions, and gallery back to factory defaults? Any custom edits will be reverted.", {
        title: "Reset to Factory Defaults",
        confirmText: "Reset to Defaults",
        isDanger: true
      });
      if (confirmed) {
        localStorage.removeItem(CMS_KEY);
        localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
        if (cmsBroadcast) {
          try { cmsBroadcast.postMessage({ type: 'CMS_UPDATED', data: defaultCmsData }); } catch(e) {}
        }
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
