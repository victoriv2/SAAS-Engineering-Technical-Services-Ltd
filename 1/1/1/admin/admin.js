/**
 * SAAS ENGINEERING TECHNICAL SERVICES LTD
 * Admin Management Portal - JavaScript Engine
 */

function startAdminApp() {
  // Storage Keys
  const AUTH_KEY = 'saas_admin_auth';
  const INQUIRIES_KEY = 'saas_inquiries';
  const CMS_KEY = 'saas_cms_data';
  const ACTIVE_TAB_KEY = 'saas_admin_active_tab';
  const INQUIRY_SORT_KEY = 'saas_admin_inquiry_sort';
  const INQUIRY_STATUS_KEY = 'saas_admin_inquiry_status';
  const GALLERY_FILTER_KEY = 'saas_admin_gallery_filter';

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
    about: {
      badge: "About Our Company",
      title: "Committed to Engineering Precision & Operational Integrity",
      p1: "SAAS Engineering Technical Services Ltd is a multi-disciplinary engineering contractor headquartered in Port Harcourt, Rivers State. We specialize in providing comprehensive engineering, fabrication, pipeline laying, dredging component manufacturing, and industrial procurement services.",
      p2: "Built upon strict technical standards, qualified craftsmanship, and certified safety management, we support both upstream oil and gas operators and civil industrial clients with turnkey solutions that ensure efficiency, structural integrity, and longevity.",
      bullets: [
        "Certified Welders & Machinists",
        "Full NDT & Hydrostatic Testing",
        "Heavy Duty Equipment Fleet",
        "Fast Field Mobilization"
      ],
      img: "assets/images/1_Welding_Fabrication_Industrial_Services_Training/industrial_fabrication_machine_shop_facility.jpeg",
      badgeTitle: "Modern Facility",
      badgeDesc: "Fully equipped machine shop with CNC lathes, milling tools, and automated cutting rigs."
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
        img: "assets/images/1_Welding_Fabrication_Industrial_Services_Training/pinacho_cnc_lathe_machining_equipment.jpeg"
      },
      {
        title: "Slurry Pump Impellers",
        category: "dredging",
        subtitle: "Dredging Components",
        img: "assets/images/3_Dredging_Services_and_Technical_Parts/dredge_slurry_pump_cast_impellers.jpeg"
      },
      {
        title: "Pipe Profile Bevel Cutter",
        category: "pipeline",
        subtitle: "Pipeline Tooling",
        img: "assets/images/2_Oil_and_Gas_Surface_Pipeline_Offshore_Services/pipe_profile_cutter_beveling_tool.jpeg"
      },
      {
        title: "Pressure Testing Rig",
        category: "fabrication",
        subtitle: "Inspection & Calibration",
        img: "assets/images/1_Welding_Fabrication_Industrial_Services_Training/valve_pressure_testing_inspection_rig.jpeg"
      },
      {
        title: "Caterpillar Pipelayer",
        category: "equipment",
        subtitle: "Heavy Equipment Fleet",
        img: "assets/images/4_Logistics_Haulage_and_Heavy_Equipment/caterpillar_sideboom_pipelayer_heavy_equipment.jpeg"
      },
      {
        title: "Volute Pump Casings",
        category: "dredging",
        subtitle: "Dredging Castings",
        img: "assets/images/3_Dredging_Services_and_Technical_Parts/dredge_pump_volute_casings_machined.jpeg"
      },
      {
        title: "Pipeline Field Welding",
        category: "pipeline",
        subtitle: "Certified Welder Crew",
        img: "assets/images/2_Oil_and_Gas_Surface_Pipeline_Offshore_Services/surface_pipeline_field_welding_operation.jpeg"
      },
      {
        title: "Pipefitting Training Rig",
        category: "fabrication",
        subtitle: "Technical Training Services",
        img: "assets/images/1_Welding_Fabrication_Industrial_Services_Training/welding_and_pipefitting_training_board.jpeg"
      },
      {
        title: "Industrial Safety Helmets",
        category: "instrumentation",
        subtitle: "PPE & Procurement",
        img: "assets/images/7_General_Contracts_Procurement_and_Safety_Gadgets/safety_helmet_hard_hat_ppe.jpg"
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

  const toAdminAssetPath = (rawPath) => {
    if (!rawPath) return '../../../../logo/logo.png';
    if (rawPath.startsWith('data:') || rawPath.startsWith('http://') || rawPath.startsWith('https://') || rawPath.startsWith('//')) {
      return rawPath;
    }
    const cleanPath = rawPath.replace(/^(\.\.\/)+/, '').replace(/^\.\//, '').replace(/^\//, '');
    return '../../../../' + cleanPath;
  };

  const getDivisionImgSrc = (div) => {
    if (!div || !div.img || div.img === 'none') return '../../../../logo/logo.png';
    return toAdminAssetPath(div.img);
  };

  // Inquiries collection (starts 100% empty until real clients submit consultation forms)
  const defaultInquiries = [];

  // =========================================================================
  // Data Helpers Ã¢â‚¬â€ Supabase-backed (replaces localStorage)
  // =========================================================================

  // Safe getter for Supabase client
  const getDb = () => (typeof window !== 'undefined' && window.saasDB) || (typeof saasDB !== 'undefined' ? saasDB : null);

  // In-memory cache for CMS data (populated on load)
  let _cmsCache = null;

  const getCmsData = async () => {
    try {
      const db = getDb();
      const row = (db && typeof db.getCmsContent === 'function') ? await db.getCmsContent() : null;
      if (!row) return defaultCmsData;

      // Merge with defaults for any missing top-level keys
      const merged = {
        contact:   row.contact   || defaultCmsData.contact,
        hero:      row.hero      || defaultCmsData.hero,
        about:     row.about     || defaultCmsData.about,
        divisions: Array.isArray(row.divisions) && row.divisions.length ? row.divisions : defaultCmsData.divisions,
        gallery:   Array.isArray(row.gallery)   && row.gallery.length   ? row.gallery   : defaultCmsData.gallery
      };

      // Ensure Division 06 (General Contracts & Procurement) is always present
      const hasProcurement = merged.divisions.some(d => d.id === 'general_contracts_procurement');
      if (!hasProcurement) {
        const defProcurement = defaultCmsData.divisions.find(d => d.id === 'general_contracts_procurement');
        if (defProcurement) merged.divisions.push({ ...defProcurement });
      }

      // Auto-sync hero stat1 with division count
      if (merged.hero && Array.isArray(merged.divisions)) {
        if (/^\d+$/.test(String(merged.hero.stat1))) {
          merged.hero.stat1 = String(merged.divisions.length);
        }
      }

      _cmsCache = merged;
      return merged;
    } catch (e) {
      console.error('getCmsData error:', e);
      return _cmsCache || defaultCmsData;
    }
  };

  // Real-time Supabase subscription
  try {
    const dbClient = getDb();
    if (dbClient && typeof dbClient.subscribeToChanges === 'function') {
      dbClient.subscribeToChanges('cms_content', async () => {
        const isAuth = sessionStorage.getItem(AUTH_KEY);
        if (isAuth === 'true') {
          _cmsCache = null; // invalidate cache
          const activeTab = sessionStorage.getItem(ACTIVE_TAB_KEY) || 'tab-overview';
          if (activeTab === 'tab-divisions') renderDivisions();
          else if (activeTab === 'tab-gallery') renderGallery();
          else if (activeTab === 'tab-hero') loadHeroSettings();
          else if (activeTab === 'tab-about') loadAboutSettings();
          else if (activeTab === 'tab-contact') loadContactSettings();
          else initDashboard();
        }
      });

      dbClient.subscribeToChanges('inquiries', () => {
        const isAuth = sessionStorage.getItem(AUTH_KEY);
        if (isAuth === 'true') renderInquiries();
      });
    }
  } catch (subErr) {
    console.warn('Realtime subscription warning:', subErr);
  }

  const saveCmsData = async (data) => {
    try {
      const db = getDb();
      if (db && typeof db.saveCmsContent === 'function') {
        await db.saveCmsContent(data);
      }
      _cmsCache = data;
      showToast('Changes published live to public website — all devices updated.');
    } catch (err) {
      console.error('saveCmsData error:', err);
      showToast('Error saving changes. Please try again.');
    }
  };

  const getInquiries = async () => {
    try {
      const db = getDb();
      if (db && typeof db.getInquiries === 'function') {
        return await db.getInquiries();
      }
      return [];
    } catch (e) {
      console.error('getInquiries error:', e);
      return [];
    }
  };

  const saveInquiries = async (list) => {
    // Inquiries are individually managed — just re-render
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

  const checkAuth = async () => {
    const isAuth = sessionStorage.getItem(AUTH_KEY);
    const wrap = document.getElementById('loginWrapper');
    const app = document.getElementById('adminApp');

    if (isAuth === 'true') {
      if (wrap) {
        wrap.style.setProperty('display', 'none', 'important');
      }
      if (app) {
        app.classList.add('active');
        app.style.setProperty('display', 'flex', 'important');
      }
      window.scrollTo(0, 0);

      try {
        await initDashboard();
      } catch (err) {
        console.warn('Dashboard initialization non-critical warning:', err);
      }
      try {
        restoreActiveTab();
      } catch (err) {
        console.warn('Tab restore non-critical warning:', err);
      }
    } else {
      if (wrap) {
        wrap.style.setProperty('display', 'flex', 'important');
      }
      if (app) {
        app.classList.remove('active');
        app.style.setProperty('display', 'none', 'important');
      }
    }
  };

  // Password visibility toggle (Eye SVG)
  let _lastToggleTs = 0;
  window.toggleAdminPasswordVisibility = function(e) {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }
    const now = Date.now();
    if (now - _lastToggleTs < 150) {
      return false; // Prevent duplicate execution in same tick
    }
    _lastToggleTs = now;

    const passInput = document.getElementById('adminPassword');
    const toggleBtn = document.getElementById('togglePasswordVisibilityBtn');
    if (!passInput) return false;

    const isCurrentlyPassword = passInput.type === 'password';
    passInput.type = isCurrentlyPassword ? 'text' : 'password';

    if (toggleBtn) {
      const eyeOpen = toggleBtn.querySelector('.eye-open-icon');
      const eyeOff = toggleBtn.querySelector('.eye-off-icon');
      if (eyeOpen) eyeOpen.style.display = isCurrentlyPassword ? 'none' : 'block';
      if (eyeOff) eyeOff.style.display = isCurrentlyPassword ? 'block' : 'none';
      toggleBtn.setAttribute('aria-label', isCurrentlyPassword ? 'Hide password' : 'Show password');
      toggleBtn.setAttribute('title', isCurrentlyPassword ? 'Hide password' : 'Show password');
    }

    // Preserve focus and place cursor at end of input
    try {
      passInput.focus();
      const len = passInput.value ? passInput.value.length : 0;
      if (typeof passInput.setSelectionRange === 'function') {
        passInput.setSelectionRange(len, len);
      }
    } catch (err) {}
    return false;
  };

  // Dismiss error alert on typing
  const passwordInputEl = document.getElementById('adminPassword');
  if (passwordInputEl) {
    passwordInputEl.addEventListener('input', () => {
      const alertEl = document.getElementById('loginAlert');
      if (alertEl) {
        alertEl.classList.remove('show');
        alertEl.style.setProperty('display', 'none', 'important');
      }
    });
  }

  window.checkAuth = checkAuth;

  // Master Login Handler (callable directly via onclick, onsubmit, and onkeydown)
  window.handleAdminLogin = async function(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();

    const passwordEl = document.getElementById('adminPassword');
    const passwordInput = passwordEl ? passwordEl.value.trim() : '';
    const loginAlert = document.getElementById('loginAlert');
    const loginAlertText = document.getElementById('loginAlertText');
    const submitBtn = document.getElementById('adminLoginSubmitBtn');

    if (!passwordInput) {
      if (loginAlertText) loginAlertText.textContent = 'Wrong password. Please try again.';
      if (loginAlert) {
        loginAlert.classList.add('show');
        loginAlert.style.setProperty('display', 'flex', 'important');
      }
      if (passwordEl) passwordEl.focus();
      return false;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Verifying...';
    }

    try {
      let isValid = false;

      // 1. Direct master password check
      if (passwordInput === 'admin123') {
        isValid = true;
      } else {
        // 2. Check via Supabase client
        const db = getDb();
        if (db && typeof db.verifyAdminPassword === 'function') {
          isValid = await db.verifyAdminPassword(passwordInput);
        }
      }

      if (isValid) {
        sessionStorage.setItem(AUTH_KEY, 'true');
        if (loginAlert) {
          loginAlert.classList.remove('show');
          loginAlert.style.setProperty('display', 'none', 'important');
        }
        await checkAuth();
      } else {
        if (loginAlertText) loginAlertText.textContent = 'Wrong password. Please try again.';
        if (loginAlert) {
          loginAlert.classList.add('show');
          loginAlert.style.setProperty('display', 'flex', 'important');
        }
        if (passwordEl) {
          passwordEl.select();
          passwordEl.focus();
        }
      }
    } catch (err) {
      console.error('Auth error:', err);
      if (passwordInput === 'admin123') {
        sessionStorage.setItem(AUTH_KEY, 'true');
        if (loginAlert) {
          loginAlert.classList.remove('show');
          loginAlert.style.setProperty('display', 'none', 'important');
        }
        await checkAuth();
      } else {
        if (loginAlertText) loginAlertText.textContent = 'Wrong password. Please try again.';
        if (loginAlert) {
          loginAlert.classList.add('show');
          loginAlert.style.setProperty('display', 'flex', 'important');
        }
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = `Access Admin Workspace <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`;
      }
    }
    return false;
  };

  if (loginForm) {
    loginForm.addEventListener('submit', window.handleAdminLogin);
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem(AUTH_KEY);
      sessionStorage.removeItem(ACTIVE_TAB_KEY);
      try {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      } catch (e) {
        window.location.hash = '';
      }
      checkAuth();
    });
  }

  // =========================================================================
  // Navigation Tabs Logic (Persistent Across Page Refresh & URL Hash Sync)
  // =========================================================================
  const tabButtons = document.querySelectorAll('.nav-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  function resolveTabIdFromHash() {
    const rawHash = (window.location.hash || '').replace(/^#/, '').trim().toLowerCase();
    if (!rawHash) return null;
    const candidateTab = rawHash.startsWith('tab-') ? rawHash : 'tab-' + rawHash;
    const el = document.getElementById(candidateTab);
    if (el && el.classList.contains('tab-pane')) {
      return candidateTab;
    }
    const directEl = document.getElementById(rawHash);
    if (directEl && directEl.classList.contains('tab-pane')) {
      return rawHash;
    }
    return null;
  }

  function switchTab(tabId, updateUrl = true) {
    if (!tabId) return;
    const cleanId = String(tabId).trim();
    const candidateTab = cleanId.startsWith('tab-') ? cleanId : 'tab-' + cleanId;
    const targetPane = document.getElementById(candidateTab) || document.getElementById(cleanId);
    if (!targetPane || !targetPane.classList.contains('tab-pane')) return;
    const finalTabId = targetPane.id;

    let activeBtn = null;
    const allTabBtns = document.querySelectorAll('.nav-tab-btn, [data-tab]');
    allTabBtns.forEach(btn => {
      const bTab = btn.getAttribute('data-tab');
      if (bTab === finalTabId || bTab === cleanId || ('tab-' + bTab) === finalTabId) {
        btn.classList.add('active');
        activeBtn = btn;
      } else if (btn.classList.contains('nav-tab-btn')) {
        btn.classList.remove('active');
      }
    });

    const allPanes = document.querySelectorAll('.tab-pane');
    allPanes.forEach(pane => {
      if (pane.id === finalTabId) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    });

    // Invoke tab specific loaders
    if (finalTabId === 'tab-gallery') {
      renderAdminGalleryFilters();
      renderGallery();
    } else if (finalTabId === 'tab-about') {
      loadAboutSettings();
    } else if (finalTabId === 'tab-contact') {
      loadContactSettings();
    } else if (finalTabId === 'tab-hero') {
      loadHeroSettings();
    } else if (finalTabId === 'tab-divisions') {
      renderDivisions();
    } else if (finalTabId === 'tab-inquiries') {
      renderInquiries();
    }

    // Scroll active button into view on mobile horizontal sidebar
    if (activeBtn && typeof activeBtn.scrollIntoView === 'function') {
      try {
        activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      } catch (e) {}
    }

    // Persist active tab across browser reloads
    try {
      sessionStorage.setItem(ACTIVE_TAB_KEY, finalTabId);
    } catch (e) {}

    // Synchronize URL hash so direct links and browser refresh stay on this tab
    if (updateUrl) {
      const cleanHash = finalTabId.replace(/^tab-/, '');
      const targetHash = '#' + cleanHash;
      if (window.location.hash !== targetHash && window.location.hash !== '#' + finalTabId) {
        try {
          history.replaceState(null, '', targetHash);
        } catch (e) {
          try {
            window.location.hash = targetHash;
          } catch (err) {}
        }
      }
    }
  }
  window.switchTab = switchTab;

  function restoreActiveTab() {
    // 1. URL Hash has first priority (allows direct bookmarks, back/forward, refresh)
    let targetTab = resolveTabIdFromHash();

    // 2. Check storage if URL has no hash
    if (!targetTab) {
      try {
        const stored = sessionStorage.getItem(ACTIVE_TAB_KEY);
        if (stored) {
          const el = document.getElementById(stored);
          if (el && el.classList.contains('tab-pane')) {
            targetTab = stored;
          }
        }
      } catch (e) {}
    }

    // 3. Fallback to overview tab
    if (!targetTab) {
      targetTab = 'tab-overview';
    }

    switchTab(targetTab, true);
  }
  window.restoreActiveTab = restoreActiveTab;

  // Listen to browser navigation (back/forward or hash change)
  window.addEventListener('hashchange', () => {
    const isAuth = sessionStorage.getItem(AUTH_KEY);
    if (isAuth === 'true') {
      const tabFromHash = resolveTabIdFromHash();
      if (tabFromHash) {
        switchTab(tabFromHash, false);
      } else if (!window.location.hash || window.location.hash === '#') {
        switchTab('tab-overview', false);
      }
    }
  });

  // Direct tab button listeners
  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Delegated document click handler — guarantees buttons always respond even if dynamically re-rendered
  document.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('[data-tab], .nav-tab-btn');
    if (tabBtn) {
      const tabId = tabBtn.getAttribute('data-tab');
      if (tabId) {
        e.preventDefault();
        switchTab(tabId);
        return;
      }
    }

    const quickAddBtn = e.target.closest('#quickAddDivisionBtn');
    if (quickAddBtn) {
      e.preventDefault();
      switchTab('tab-divisions');
      if (typeof openDivisionModal === 'function') openDivisionModal(-1);
      return;
    }

    const viewAllInqBtn = e.target.closest('#viewAllInquiriesBtn');
    if (viewAllInqBtn) {
      e.preventDefault();
      switchTab('tab-inquiries');
      return;
    }
  });

  const adminBrand = document.querySelector('.admin-brand');
  if (adminBrand) {
    adminBrand.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab('tab-overview');
    });
  }

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
  // Inquiries Rendering, Sorting, Filtering & Status Management
  // =========================================================================
  const statusDisplayMap = {
    'new': 'New',
    'review': 'In Review',
    'quoted': 'Quoted',
    'closed': 'Closed'
  };

  const statusPriorityMap = {
    'new': 1,
    'review': 2,
    'quoted': 3,
    'closed': 4
  };

  let inquirySearchQuery = '';
  let inquirySortCriteria = 'newest';
  let inquiryStatusFilter = 'all';

  try {
    const savedSort = sessionStorage.getItem(INQUIRY_SORT_KEY);
    if (savedSort) inquirySortCriteria = savedSort;
    const savedStatus = sessionStorage.getItem(INQUIRY_STATUS_KEY);
    if (savedStatus) inquiryStatusFilter = savedStatus;
  } catch (e) {}

  const renderInquiries = async (searchFilter = null, sortBy = null, statusFilter = null) => {
    if (searchFilter !== null) inquirySearchQuery = searchFilter;
    if (sortBy !== null) {
      inquirySortCriteria = sortBy;
      try { sessionStorage.setItem(INQUIRY_SORT_KEY, sortBy); } catch (e) {}
    }
    if (statusFilter !== null) {
      inquiryStatusFilter = statusFilter;
      try { sessionStorage.setItem(INQUIRY_STATUS_KEY, statusFilter); } catch (e) {}
    }

    const sortSelectEl = document.getElementById('inquirySortSelect');
    if (sortSelectEl && sortSelectEl.value !== inquirySortCriteria) sortSelectEl.value = inquirySortCriteria;
    const statusSelectEl = document.getElementById('inquiryStatusFilterSelect');
    if (statusSelectEl && statusSelectEl.value !== inquiryStatusFilter) statusSelectEl.value = inquiryStatusFilter;

    const list = await getInquiries();
    const overviewTbody = document.getElementById('overviewInquiriesTableBody');
    const fullTbody = document.getElementById('fullInquiriesTableBody');
    const badgeCount = document.getElementById('inquiriesBadgeCount');
    const statTotal = document.getElementById('statTotalInquiries');

    if (badgeCount) badgeCount.textContent = list.length;
    if (statTotal) statTotal.textContent = list.length;

    // 1. Filter by search query
    let filtered = list;
    if (inquirySearchQuery) {
      const q = inquirySearchQuery.toLowerCase();
      filtered = filtered.filter(item => 
        (item.name || '').toLowerCase().includes(q) ||
        (item.email || '').toLowerCase().includes(q) ||
        (item.division || '').toLowerCase().includes(q) ||
        (item.organization || '').toLowerCase().includes(q) ||
        (item.phone || '').includes(q)
      );
    }

    // 2. Filter by status
    if (inquiryStatusFilter && inquiryStatusFilter !== 'all') {
      filtered = filtered.filter(item => (item.status || 'new') === inquiryStatusFilter);
    }

    // 3. Sort
    filtered = [...filtered].sort((a, b) => {
      switch (inquirySortCriteria) {
        case 'oldest':
          return (a.created_at || a.date || '').localeCompare(b.created_at || b.date || '');
        case 'name_asc':
          return (a.name || '').localeCompare(b.name || '');
        case 'name_desc':
          return (b.name || '').localeCompare(a.name || '');
        case 'status': {
          const pa = statusPriorityMap[a.status || 'new'] || 99;
          const pb = statusPriorityMap[b.status || 'new'] || 99;
          return pa - pb;
        }
        case 'division':
          return (a.division || '').localeCompare(b.division || '');
        case 'newest':
        default:
          return (b.created_at || b.date || '').localeCompare(a.created_at || a.date || '');
      }
    });

    const renderRow = (inq, isFull) => {
      const statusClass = inq.status || 'new';
      const statusLabel = statusDisplayMap[inq.status] || 'New';
      return `
        <tr>
          <td><strong>${escapeHtml(inq.name)}</strong></td>
          ${isFull ? `<td>${escapeHtml(inq.organization || 'Direct')} &bull; ${escapeHtml(inq.phone)}</td>` : ''}
          ${isFull ? `<td><a href="mailto:${escapeHtml(inq.email)}" style="color: var(--primary); text-decoration: underline;">${escapeHtml(inq.email)}</a></td>` : `<td><small>${escapeHtml(inq.email)}<br>${escapeHtml(inq.phone)}</small></td>`}
          <td><span style="font-size: 0.8rem; color: var(--gray-700);">${escapeHtml(inq.division)}</span></td>
          <td><small style="color: var(--gray-500);">${escapeHtml((inq.created_at || inq.date || '').slice(0, 16).replace('T', ' '))}</small></td>
          <td>
            <button type="button" class="status-badge-pill ${statusClass}" onclick="window.openStatusModal('${inq.id}')" title="Click to update status via modal">
              <span class="status-pill-dot"></span>
              <span>${statusLabel}</span>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
            </button>
          </td>
          <td>
            <div style="display: flex; gap: 0.35rem;">
              <button type="button" class="btn btn-secondary btn-sm" onclick="window.viewInquiryDetail('${inq.id}')" title="View inquiry full technical scope">View</button>
              <button type="button" class="btn btn-danger btn-sm" onclick="window.deleteInquiry('${inq.id}')" title="Remove inquiry" style="display: inline-flex; align-items: center; gap: 0.3rem;">
                <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                <span>Remove</span>
              </button>
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

  // Modular Status Modal Logic
  const statusModal = document.getElementById('inquiryStatusModal');
  const statusModalTitle = document.getElementById('statusModalTitle');
  const statusModalSubtitle = document.getElementById('statusModalSubtitle');
  const statusModalInquiryId = document.getElementById('statusModalInquiryId');
  const closeStatusModalBtn = document.getElementById('closeStatusModalBtn');
  const cancelStatusModalBtn = document.getElementById('cancelStatusModalBtn');
  const statusOptionCards = document.querySelectorAll('#statusOptionsGrid .status-option-card');

  const closeStatusModal = () => {
    if (statusModal) statusModal.classList.remove('active');
  };

  if (closeStatusModalBtn) closeStatusModalBtn.addEventListener('click', closeStatusModal);
  if (cancelStatusModalBtn) cancelStatusModalBtn.addEventListener('click', closeStatusModal);
  if (statusModal) {
    statusModal.addEventListener('click', (e) => {
      if (e.target === statusModal) closeStatusModal();
    });
  }

  window.openStatusModal = (id) => {
    const list = getInquiries();
    const inq = list.find(i => i.id === id);
    if (!inq) return;

    if (statusModalInquiryId) statusModalInquiryId.value = id;
    if (statusModalTitle) statusModalTitle.textContent = `Update Status: ${inq.name}`;
    if (statusModalSubtitle) statusModalSubtitle.textContent = `${inq.organization || 'Direct Client'} Ã¢â‚¬Â¢ ${inq.division}`;

    const currentStatus = inq.status || 'new';
    statusOptionCards.forEach(card => {
      const cardStatus = card.getAttribute('data-status');
      card.classList.toggle('selected', cardStatus === currentStatus);
    });

    if (statusModal) statusModal.classList.add('active');
  };

  statusOptionCards.forEach(card => {
    const selectStatus = () => {
      const selectedStatus = card.getAttribute('data-status');
      const inqId = statusModalInquiryId ? statusModalInquiryId.value : '';
      if (!inqId || !selectedStatus) return;

      statusOptionCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      window.updateInquiryStatus(inqId, selectedStatus);

      // Update detail modal badge if open
      const detailBtn = document.getElementById('detailModalStatusBtn');
      if (detailBtn) {
        detailBtn.className = `status-badge-pill ${selectedStatus}`;
        const spanText = detailBtn.querySelector('span:nth-child(2)');
        if (spanText) spanText.textContent = statusDisplayMap[selectedStatus] || selectedStatus;
      }

      setTimeout(closeStatusModal, 200);
    };

    card.addEventListener('click', selectStatus);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectStatus();
      }
    });
  });

  // Global window functions for table action buttons
  window.updateInquiryStatus = async (id, newStatus) => {
    try {
      const db = getDb();
      if (db && typeof db.updateInquiryStatus === 'function') {
        await db.updateInquiryStatus(id, newStatus);
      }
      renderInquiries();
      showToast(`Inquiry status updated to ${statusDisplayMap[newStatus] || newStatus.toUpperCase()}`);
    } catch (err) {
      console.error('updateInquiryStatus error:', err);
      showToast('Error updating status. Please try again.');
    }
  };

  window.deleteInquiry = async (id) => {
    const confirmed = await window.customConfirm("Are you sure you want to delete this client inquiry? This action cannot be undone.", {
      title: "Delete Client Inquiry",
      confirmText: "Delete Inquiry",
      isDanger: true
    });
    if (confirmed) {
      try {
        const db = getDb();
        if (db && typeof db.deleteInquiry === 'function') {
          await db.deleteInquiry(id);
        }
        renderInquiries();
        showToast("Inquiry removed from database.");
      } catch (err) {
        console.error('deleteInquiry error:', err);
        showToast('Error deleting inquiry. Please try again.');
      }
    }
  };

  window.viewInquiryDetail = async (id) => {
    const list = await getInquiries();
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

        <div style="background: var(--gray-50); border: 1px solid var(--gray-200); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <div>
            <small style="color: var(--gray-500); font-weight: 700; text-transform: uppercase;">Service Division of Interest</small>
            <p style="font-weight: 700; color: var(--primary); margin-top: 0.25rem;">${escapeHtml(inq.division)}</p>
          </div>
          <div>
            <small style="color: var(--gray-500); font-weight: 700; text-transform: uppercase; display: block; margin-bottom: 0.25rem;">Workflow Status</small>
            <button type="button" class="status-badge-pill ${inq.status || 'new'}" id="detailModalStatusBtn" onclick="window.openStatusModal('${inq.id}')" title="Click to update status via modal">
              <span class="status-pill-dot"></span>
              <span>${statusDisplayMap[inq.status] || 'New'}</span>
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
            </button>
          </div>
        </div>

        <div>
          <small style="color: var(--gray-500); font-weight: 700; text-transform: uppercase;">Technical Specifications & Project Scope</small>
          <div style="background: var(--white); border: 1.5px solid var(--gray-200); padding: 1rem; border-radius: var(--radius-md); margin-top: 0.35rem; font-size: 0.95rem; line-height: 1.6; white-space: pre-wrap; color: var(--gray-800);">
            ${escapeHtml(inq.scope)}
          </div>
        </div>

        <div style="margin-top: 1rem; font-size: 0.8rem; color: var(--gray-500); text-align: right;">
          Submitted: ${escapeHtml((inq.created_at || inq.date || '').slice(0, 16).replace('T', ' '))} &bull; Reference: #${escapeHtml(inq.id)}
        </div>
      `;
    }

    if (callBtn) {
      callBtn.onclick = () => window.location.href = `tel:${inq.phone}`;
    }
    if (emailBtn) {
      emailBtn.onclick = () => window.location.href = `mailto:${inq.email}?subject=Regarding Your Technical Inquiry with SAAS Engineering`;
    }

    const modalDelBtn = document.getElementById('modalDeleteInquiryBtn');
    if (modalDelBtn) {
      modalDelBtn.onclick = async () => {
        closeInquiryModal();
        await window.deleteInquiry(inq.id);
      };
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
      renderInquiries(e.target.value.trim(), null, null);
    });
  }

  // Sort criteria selector
  const sortSelect = document.getElementById('inquirySortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      renderInquiries(null, e.target.value, null);
    });
  }

  // Status filter selector
  const statusFilterSelect = document.getElementById('inquiryStatusFilterSelect');
  if (statusFilterSelect) {
    statusFilterSelect.addEventListener('change', (e) => {
      renderInquiries(null, null, e.target.value);
    });
  }

  // Export Excel (.xlsx)
  const exportExcelBtn = document.getElementById('exportInquiriesExcelBtn') || document.getElementById('exportInquiriesCsvBtn');
  if (exportExcelBtn) {
    exportExcelBtn.addEventListener('click', async () => {
      const list = await getInquiries();
      if (list.length === 0) {
        window.customAlert("There are currently no client inquiries in the database to export.", "Export Inquiries", "info");
        return;
      }

      const dateStr = new Date().toISOString().slice(0, 10);
      const filename = `saas-inquiries-${dateStr}`;

      if (typeof XLSX !== 'undefined') {
        const rows = list.map(i => ({
          "Inquiry ID": i.id || '',
          "Client Name": i.name || '',
          "Organization / Company": i.organization || '',
          "Email Address": i.email || '',
          "Phone Number": i.phone || '',
          "Service Division": i.division || '',
          "Submission Date": (i.created_at || i.date || '').slice(0, 16).replace('T', ' '),
          "Workflow Status": statusDisplayMap[i.status] || i.status || 'New',
          "Technical Specifications & Scope": i.scope || ''
        }));

        const ws = XLSX.utils.json_to_sheet(rows);
        ws['!cols'] = [
          { wch: 15 }, { wch: 22 }, { wch: 26 }, { wch: 26 }, { wch: 18 },
          { wch: 32 }, { wch: 16 }, { wch: 16 }, { wch: 55 }
        ];
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Inquiries");
        XLSX.writeFile(wb, `${filename}.xlsx`);
        showToast("Inquiries exported to Excel (.xlsx) successfully.");
      } else {
        let csv = "\uFEFF\"Inquiry ID\",\"Client Name\",\"Organization\",\"Email Address\",\"Phone Number\",\"Division\",\"Submission Date\",\"Status\",\"Scope\"\n";
        list.forEach(i => {
          const status = statusDisplayMap[i.status] || i.status || 'New';
          const dateVal = (i.created_at || i.date || '').slice(0, 16).replace('T', ' ');
          csv += `"${cleanCsv(i.id)}","${cleanCsv(i.name)}","${cleanCsv(i.organization)}","${cleanCsv(i.email)}","${cleanCsv(i.phone)}","${cleanCsv(i.division)}","${cleanCsv(dateVal)}","${cleanCsv(status)}","${cleanCsv(i.scope)}"\n`;
        });
        downloadFile(csv, `${filename}.csv`, 'text/csv;charset=utf-8;');
        showToast("Inquiries exported successfully.");
      }
    });
  }

  // Clear all inquiries
  const clearInquiriesBtn = document.getElementById('clearAllInquiriesBtn');
  if (clearInquiriesBtn) {
    clearInquiriesBtn.addEventListener('click', async () => {
      const confirmed = await window.customConfirm("Are you sure you want to permanently clear all inquiries? This action cannot be undone.", {
        title: "Clear All Inquiries",
        confirmText: "Clear All",
        isDanger: true
      });
      if (confirmed) {
        try {
          const list = await getInquiries();
          const db = getDb();
          if (db && typeof db.deleteInquiry === 'function') {
            await Promise.all(list.map(i => db.deleteInquiry(i.id)));
          }
          renderInquiries();
          showToast("All inquiries cleared.");
        } catch (err) {
          console.error('clearInquiries error:', err);
          showToast('Error clearing inquiries. Please try again.');
        }
      }
    });
  }

  // =========================================================================
  // Contact & Social Media Settings Form
  // =========================================================================
  const contactForm = document.getElementById('contactSettingsForm');
  const loadContactSettings = async () => {
    const cms = await getCmsData();
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
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const cms = await getCmsData();
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
      await saveCmsData(cms);
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

  const renderDivisions = async () => {
    const cms = await getCmsData();
    const divisions = cms.divisions || defaultCmsData.divisions;
    const countLabel = document.getElementById('divisionCountLabel');
    const statDivisions = document.getElementById('statTotalDivisions');
    if (countLabel) countLabel.textContent = divisions.length;
    if (statDivisions) statDivisions.textContent = divisions.length;

    if (typeof populateGalleryCategorySelect === 'function') {
      populateGalleryCategorySelect();
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
              <button type="button" class="btn btn-danger btn-sm" onclick="window.deleteDivision(${idx})" style="display: inline-flex; align-items: center; gap: 0.3rem;">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                <span>Remove</span>
              </button>
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

  const editDivisionBadgeInput = document.getElementById('editDivisionBadge');
  const editDivisionTitleInput = document.getElementById('editDivisionTitle');
  const editDivisionSubInput = document.getElementById('editDivisionSub');
  const editDivisionDescInput = document.getElementById('editDivisionDesc');
  const editDivisionBulletsInput = document.getElementById('editDivisionBullets');
  const editDivisionImgInput = document.getElementById('editDivisionImg');
  const divisionFileInput = document.getElementById('divisionFileInput');
  const divisionDropzone = document.getElementById('divisionDropzone');
  const divisionPreviewCard = document.getElementById('divisionPreviewCard');
  const divisionPreviewImg = document.getElementById('divisionPreviewImg');
  const divisionPreviewFilename = document.getElementById('divisionPreviewFilename');
  const changeDivisionPhotoBtn = document.getElementById('changeDivisionPhotoBtn');
  const removeDivisionPhotoBtn = document.getElementById('removeDivisionPhotoBtn');
  const toggleDivisionUrlBtn = document.getElementById('toggleDivisionUrlBtn');
  const divisionUrlInputContainer = document.getElementById('divisionUrlInputContainer');
  const divisionManualUrlInput = document.getElementById('divisionManualUrlInput');
  const previewDivTitle = document.getElementById('previewDivTitle');
  const previewDivSub = document.getElementById('previewDivSub');

  const processAndPreviewDivisionImage = (file) => {
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
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

        if (editDivisionImgInput) editDivisionImgInput.value = dataUrl;
        if (divisionPreviewImg) divisionPreviewImg.src = dataUrl;
        if (divisionPreviewFilename) divisionPreviewFilename.textContent = file.name;
        if (divisionDropzone) divisionDropzone.style.display = 'none';
        if (divisionPreviewCard) divisionPreviewCard.classList.add('show');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const resetDivisionUploadState = (currentImg = '') => {
    if (divisionFileInput) divisionFileInput.value = '';
    if (divisionManualUrlInput) divisionManualUrlInput.value = '';
    if (divisionUrlInputContainer) divisionUrlInputContainer.style.display = 'none';
    if (toggleDivisionUrlBtn) toggleDivisionUrlBtn.textContent = 'Or paste image URL instead';

    if (currentImg && currentImg !== 'none') {
      if (editDivisionImgInput) editDivisionImgInput.value = currentImg;
      if (divisionPreviewImg) {
        divisionPreviewImg.src = toAdminAssetPath(currentImg);
        divisionPreviewImg.onerror = function() {
          this.src = '../../../../logo/logo.png';
        };
      }
      if (divisionPreviewFilename) divisionPreviewFilename.textContent = 'Current Cover Photo';
      if (divisionDropzone) divisionDropzone.style.display = 'none';
      if (divisionPreviewCard) divisionPreviewCard.classList.add('show');
    } else {
      if (editDivisionImgInput) editDivisionImgInput.value = 'none';
      if (divisionPreviewImg) divisionPreviewImg.src = '';
      if (divisionPreviewCard) divisionPreviewCard.classList.remove('show');
      if (divisionDropzone) divisionDropzone.style.display = 'flex';
    }
  };

  if (divisionDropzone && divisionFileInput) {
    divisionDropzone.addEventListener('click', () => divisionFileInput.click());
    divisionDropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        divisionFileInput.click();
      }
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
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processAndPreviewDivisionImage(e.dataTransfer.files[0]);
      }
    });
  }

  if (divisionFileInput) {
    divisionFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        processAndPreviewDivisionImage(e.target.files[0]);
      }
    });
  }

  if (changeDivisionPhotoBtn && divisionFileInput) {
    changeDivisionPhotoBtn.addEventListener('click', () => divisionFileInput.click());
  }

  if (removeDivisionPhotoBtn) {
    removeDivisionPhotoBtn.addEventListener('click', () => {
      resetDivisionUploadState('none');
      showToast("Cover photo removed. Click 'Save Changes' to update.");
    });
  }

  if (toggleDivisionUrlBtn && divisionUrlInputContainer && divisionManualUrlInput) {
    toggleDivisionUrlBtn.addEventListener('click', () => {
      const isVisible = divisionUrlInputContainer.style.display === 'block';
      divisionUrlInputContainer.style.display = isVisible ? 'none' : 'block';
      toggleDivisionUrlBtn.textContent = isVisible ? 'Or paste image URL instead' : 'Hide image URL input';
    });

    divisionManualUrlInput.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      if (url) {
        if (editDivisionImgInput) editDivisionImgInput.value = url;
        if (divisionPreviewImg) {
          divisionPreviewImg.src = toAdminAssetPath(url);
          divisionPreviewImg.onerror = function() {
            this.src = '../../../../logo/logo.png';
          };
        }
        if (divisionPreviewFilename) divisionPreviewFilename.textContent = url.slice(0, 30) + '...';
        if (divisionDropzone) divisionDropzone.style.display = 'none';
        if (divisionPreviewCard) divisionPreviewCard.classList.add('show');
      }
    });
  }

  if (editDivisionTitleInput && previewDivTitle) {
    editDivisionTitleInput.addEventListener('input', (e) => {
      previewDivTitle.textContent = editDivisionSubInput.value.trim() || e.target.value.trim() || 'Fabrication & Testing';
    });
  }
  if (editDivisionSubInput && previewDivTitle) {
    editDivisionSubInput.addEventListener('input', (e) => {
      previewDivTitle.textContent = e.target.value.trim() || editDivisionTitleInput.value.trim() || 'Fabrication & Testing';
    });
  }
  if (editDivisionDescInput && previewDivSub) {
    editDivisionDescInput.addEventListener('input', (e) => {
      const txt = e.target.value.trim();
      previewDivSub.textContent = txt ? (txt.length > 45 ? txt.slice(0, 45) + '...' : txt) : 'Operational Scope';
    });
  }

  const openDivisionModal = async (index = -1) => {
    if (divisionModal) {
      divisionModal.classList.add('active');
      divisionModal.style.zIndex = '35000';
    }
    const cms = await getCmsData();
    const divisions = cms.divisions || defaultCmsData.divisions;
    const title = document.getElementById('divisionModalTitle');
    const indexInput = document.getElementById('editDivisionIndex');

    if (index >= 0 && divisions[index]) {
      const d = divisions[index];
      const shortCat = d.sub || (coreDivisionInfo[d.id] ? coreDivisionInfo[d.id].name : '') || d.title;
      if (title) title.textContent = `Edit Division: ${d.title}`;
      if (indexInput) indexInput.value = index;
      if (editDivisionBadgeInput) editDivisionBadgeInput.value = d.badge || `Division 0${index + 1}`;
      if (editDivisionTitleInput) editDivisionTitleInput.value = d.title || '';
      if (editDivisionSubInput) editDivisionSubInput.value = shortCat || '';
      if (editDivisionDescInput) editDivisionDescInput.value = d.desc || '';
      if (editDivisionBulletsInput) {
        editDivisionBulletsInput.value = Array.isArray(d.bullets) ? d.bullets.join('\n') : (d.bullets || '');
      }
      const currentDivImg = (d.img && d.img !== 'none') ? d.img : 'none';
      resetDivisionUploadState(currentDivImg);

      if (previewDivTitle) previewDivTitle.textContent = shortCat || d.title || 'Division Title';
      if (previewDivSub) previewDivSub.textContent = d.desc ? (d.desc.length > 45 ? d.desc.slice(0, 45) + '...' : d.desc) : 'Operational Scope';
    } else {
      if (title) title.textContent = "Add Operational Division";
      if (indexInput) indexInput.value = -1;
      const nextNum = divisions.length + 1;
      if (editDivisionBadgeInput) editDivisionBadgeInput.value = `Division ${nextNum < 10 ? '0' + nextNum : nextNum}`;
      if (editDivisionTitleInput) editDivisionTitleInput.value = "";
      if (editDivisionSubInput) editDivisionSubInput.value = "";
      if (editDivisionDescInput) editDivisionDescInput.value = "";
      if (editDivisionBulletsInput) editDivisionBulletsInput.value = "";
      resetDivisionUploadState('');

      if (previewDivTitle) previewDivTitle.textContent = "New Division";
      if (previewDivSub) previewDivSub.textContent = "Operational Scope";
    }

    if (divisionModal) {
      divisionModal.classList.add('active');
      divisionModal.style.zIndex = '35000';
      if (editDivisionTitleInput) setTimeout(() => editDivisionTitleInput.focus(), 60);
    }
  };

  const closeDivisionModal = () => {
    if (divisionModal) {
      divisionModal.classList.remove('active');
      divisionModal.style.zIndex = '';
    }
  };

  if (openDivModalBtn) openDivModalBtn.addEventListener('click', () => openDivisionModal(-1));
  if (closeDivModalBtn) closeDivModalBtn.addEventListener('click', closeDivisionModal);
  if (cancelDivModalBtn) cancelDivModalBtn.addEventListener('click', closeDivisionModal);

  window.openDivisionModal = openDivisionModal;
  window.closeDivisionModal = closeDivisionModal;
  window.editDivision = (idx) => openDivisionModal(idx);
  window.deleteDivision = async (idx) => {
    const cms = await getCmsData();
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
      if (!cms.hero) cms.hero = { ...defaultCmsData.hero };
      cms.hero.stat1 = String(cms.divisions.length);
      await saveCmsData(cms);
      renderDivisions();
      if (typeof populateGalleryCategoryModularGrid === 'function') populateGalleryCategoryModularGrid();
      if (typeof renderAdminGalleryFilters === 'function') renderAdminGalleryFilters();
      showToast("Division deleted successfully.");
    }
  };

  if (divisionForm) {
    divisionForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const cms = await getCmsData();
      const index = parseInt(document.getElementById('editDivisionIndex').value, 10);
      const titleVal = editDivisionTitleInput ? editDivisionTitleInput.value.trim() : 'Custom Division';
      const subVal = editDivisionSubInput ? editDivisionSubInput.value.trim() : titleVal;
      const descVal = editDivisionDescInput ? editDivisionDescInput.value.trim() : subVal;
      const badgeVal = (editDivisionBadgeInput && editDivisionBadgeInput.value.trim())
        ? editDivisionBadgeInput.value.trim()
        : `Division 0${cms.divisions ? cms.divisions.length + 1 : 1}`;

      const bulletsRaw = editDivisionBulletsInput ? editDivisionBulletsInput.value.trim() : '';
      const bulletsArr = bulletsRaw 
        ? bulletsRaw.split('\n').map(b => b.trim()).filter(Boolean)
        : [subVal, 'Certified Compliance', 'Technical Support'];

      const rawImgVal = editDivisionImgInput ? editDivisionImgInput.value.trim() : '';
      let imgVal = 'none';
      if (rawImgVal === 'none') {
        imgVal = 'none';
      } else if (rawImgVal) {
        imgVal = rawImgVal;
      } else {
        imgVal = (index >= 0 && cms.divisions && cms.divisions[index] && cms.divisions[index].img !== 'none')
          ? (cms.divisions[index].img || 'none')
          : 'none';
      }

      const divData = {
        id: (index >= 0 && cms.divisions && cms.divisions[index]) ? cms.divisions[index].id : `division_${Date.now()}`,
        badge: badgeVal,
        title: titleVal,
        sub: subVal,
        desc: descVal,
        bullets: bulletsArr,
        img: imgVal
      };

      if (!Array.isArray(cms.divisions)) cms.divisions = [...defaultCmsData.divisions];

      if (index >= 0 && index < cms.divisions.length) {
        cms.divisions[index] = divData;
      } else {
        cms.divisions.push(divData);
      }

      if (!cms.hero) cms.hero = { ...defaultCmsData.hero };
      cms.hero.stat1 = String(cms.divisions.length);

      await saveCmsData(cms);
      renderDivisions();
      if (typeof populateGalleryCategoryModularGrid === 'function') populateGalleryCategoryModularGrid(divData.id);
      if (typeof renderAdminGalleryFilters === 'function') renderAdminGalleryFilters();
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

  let currentAdminGalleryFilter = 'all';
  try {
    const savedGalFilter = sessionStorage.getItem(GALLERY_FILTER_KEY);
    if (savedGalFilter) currentAdminGalleryFilter = savedGalFilter;
  } catch (e) {}

  const renderGallery = async () => {
    const cms = await getCmsData();
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

    const filtered = gallery.filter(item => {
      if (currentAdminGalleryFilter === 'all') return true;
      let cat = item.category || 'fabrication';
      if (cat === 'welding_fabrication') cat = 'fabrication';
      if (cat === 'pipeline_offshore') cat = 'pipeline';
      if (cat === 'dredging_valves') cat = 'dredging';
      if (cat === 'logistics_heavy_equipment') cat = 'equipment';
      if (cat === 'manpower_instrumentation') cat = 'instrumentation';
      if (cat === 'general_contracts_procurement') cat = 'procurement';
      return cat === currentAdminGalleryFilter;
    });

    if (filtered.length === 0) {
      galleryGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 2.5rem; color: var(--gray-500);">
          No gallery items in this category. Click &quot;Add Project Photo&quot; to upload one.
        </div>
      `;
      return;
    }

    galleryGrid.innerHTML = filtered.map(item => {
      const originalIdx = gallery.indexOf(item);
      const displayImg = toAdminAssetPath(item.img);
      return `
      <div class="gallery-admin-card" data-category="${escapeHtml(item.category || '')}">
        <img src="${displayImg}" alt="${escapeHtml(item.title)}" class="gallery-admin-img" onerror="this.src='../../../../logo/logo.png'; this.style.padding='2rem';">
        <div class="gallery-admin-body">
          <h4>${escapeHtml(item.title)}</h4>
          <span>${escapeHtml(item.subtitle)}</span>
          <div class="gallery-admin-actions">
            <button type="button" class="btn btn-secondary btn-sm" onclick="window.editGalleryItem(${originalIdx})">Edit</button>
            <button type="button" class="btn btn-danger btn-sm" onclick="window.deleteGalleryItem(${originalIdx})" style="display: inline-flex; align-items: center; gap: 0.3rem;">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    `;
    }).join('');
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
            height = maxHeight;
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

  const removeGalleryPhotoBtn = document.getElementById('removeGalleryPhotoBtn');
  if (removeGalleryPhotoBtn) {
    removeGalleryPhotoBtn.addEventListener('click', () => {
      resetGalleryUploadState();
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
        if (galleryPreviewImg) {
          galleryPreviewImg.src = toAdminAssetPath(url);
          galleryPreviewImg.onerror = function() {
            this.src = '../../../../logo/logo.png';
          };
        }
        if (galleryPreviewFilename) galleryPreviewFilename.textContent = url.slice(0, 30) + '...';
        if (galleryDropzone) galleryDropzone.style.display = 'none';
        if (galleryPreviewCard) galleryPreviewCard.classList.add('show');
      }
    });
  }

  // =========================================================================
  // Gallery Division Category Modular Picker Controller
  // =========================================================================
  const coreDivisionInfo = {
    'welding_fabrication': { id: 'fabrication', name: 'Fabrication & Testing', sub: 'Welding, CNC & Test Benches' },
    'pipeline_offshore': { id: 'pipeline', name: 'Pipeline & Offshore', sub: 'Surfacing & Platforms' },
    'dredging_valves': { id: 'dredging', name: 'Dredging & Valves', sub: 'Slurry Pumps & METRUS Testing' },
    'logistics_heavy_equipment': { id: 'equipment', name: 'Heavy Machinery', sub: 'Caterpillar Fleet & Cranes' },
    'manpower_instrumentation': { id: 'instrumentation', name: 'Control & Safety', sub: 'SCADA, Calibration & PPE' },
    'general_contracts_procurement': { id: 'procurement', name: 'General Contracts & Procurement', sub: 'Supply Chain & PPE' }
  };

  window.editDivisionById = async (divId, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const cms = await getCmsData();
    const divisions = cms.divisions || defaultCmsData.divisions;
    const idx = divisions.findIndex(d => d.id === divId || (coreDivisionInfo[d.id] && coreDivisionInfo[d.id].id === divId));
    if (idx !== -1) {
      openDivisionModal(idx);
    } else {
      showToast("Division not found.");
    }
  };

  window.removeDivisionById = async (divId, event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    const cms = await getCmsData();
    if (!Array.isArray(cms.divisions)) cms.divisions = [...defaultCmsData.divisions];

    const idx = cms.divisions.findIndex(d => d.id === divId || (coreDivisionInfo[d.id] && coreDivisionInfo[d.id].id === divId));
    if (idx === -1) {
      showToast("Division not found.");
      return;
    }

    const div = cms.divisions[idx];
    const divTitle = div ? div.title : 'this division';

    const confirmed = await window.customConfirm(`Remove division "${divTitle}"? It will be removed immediately from all menus, category selectors, filter tabs, and the public website.`, {
      title: "Remove Technical Division",
      confirmText: "Remove Division",
      isDanger: true
    });

    if (confirmed) {
      cms.divisions.splice(idx, 1);
      if (!cms.hero) cms.hero = { ...defaultCmsData.hero };
      cms.hero.stat1 = String(cms.divisions.length);
      await saveCmsData(cms);
      renderDivisions();
      populateGalleryCategoryModularGrid();
      renderAdminGalleryFilters();
      renderGallery();
      showToast("Division removed successfully.");
    }
  };

  async function populateGalleryCategoryModularGrid(selectedId = 'fabrication') {
    const gridEl = document.getElementById('galleryCategoryModularGrid');
    const hiddenInput = document.getElementById('galleryAddCategory');
    if (!gridEl || !hiddenInput) return;

    const cms = await getCmsData();
    const divisions = cms.divisions || defaultCmsData.divisions;

    const allCategories = divisions.map(d => {
      if (coreDivisionInfo[d.id]) {
        return {
          id: coreDivisionInfo[d.id].id,
          rawId: d.id,
          name: coreDivisionInfo[d.id].name,
          sub: d.sub || coreDivisionInfo[d.id].sub
        };
      }
      return {
        id: d.id,
        rawId: d.id,
        name: d.title || d.sub || 'Custom Division',
        sub: d.desc || 'Operational Sector'
      };
    });

    let activeId = selectedId || (allCategories[0] ? allCategories[0].id : 'fabrication');
    if (activeId === 'welding_fabrication') activeId = 'fabrication';
    if (activeId === 'pipeline_offshore') activeId = 'pipeline';
    if (activeId === 'dredging_valves') activeId = 'dredging';
    if (activeId === 'logistics_heavy_equipment') activeId = 'equipment';
    if (activeId === 'manpower_instrumentation') activeId = 'instrumentation';
    if (activeId === 'general_contracts_procurement') activeId = 'procurement';

    const validCatIds = new Set(allCategories.map(c => c.id));
    if (!validCatIds.has(activeId) && allCategories.length > 0) {
      activeId = allCategories[0].id;
    }

    hiddenInput.value = activeId;

    if (allCategories.length === 0) {
      gridEl.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 1.5rem; color: var(--gray-500); font-size: 0.85rem;">
          No operational divisions found. Add one in the Core Divisions tab.
        </div>
      `;
      return;
    }

    gridEl.innerHTML = allCategories.map(cat => {
      const isSelected = cat.id === activeId;
      return `
        <div class="modular-cat-card ${isSelected ? 'selected' : ''}" data-cat-id="${escapeHtml(cat.id)}" role="button" tabindex="0">
          <div class="modular-cat-info">
            <span class="modular-cat-name">${escapeHtml(cat.name)}</span>
            <span class="modular-cat-sub">${escapeHtml(cat.sub)}</span>
          </div>
          <div class="modular-cat-check">
            <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
          </div>
        </div>
      `;
    }).join('');

    gridEl.querySelectorAll('.modular-cat-card').forEach(card => {
      card.addEventListener('click', () => {
        const catId = card.getAttribute('data-cat-id');
        hiddenInput.value = catId;
        gridEl.querySelectorAll('.modular-cat-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
      });
    });
  }

  const openGalleryModal = async () => {
    if (galleryForm) galleryForm.reset();
    resetGalleryUploadState();
    const indexInput = document.getElementById('editGalleryIndex');
    if (indexInput) indexInput.value = '-1';
    const modalTitle = document.getElementById('galleryModalTitle');
    if (modalTitle) modalTitle.textContent = 'Add Project Photo to Gallery';
    const submitBtn = document.getElementById('galleryModalSubmitBtn');
    if (submitBtn) submitBtn.textContent = 'Add to Gallery';

    populateGalleryCategoryModularGrid('fabrication');

    if (galleryModal) galleryModal.classList.add('active');
  };

  const closeGalleryModal = () => {
    if (galleryModal) galleryModal.classList.remove('active');
    resetGalleryUploadState();
  };

  if (openGalleryModalBtn) openGalleryModalBtn.addEventListener('click', openGalleryModal);
  if (closeGalleryModalBtn) closeGalleryModalBtn.addEventListener('click', closeGalleryModal);
  if (cancelGalleryModalBtn) cancelGalleryModalBtn.addEventListener('click', closeGalleryModal);

  window.openGalleryModal = openGalleryModal;
  window.closeGalleryModal = closeGalleryModal;


  window.editGalleryItem = async (idx) => {
    const cms = await getCmsData();
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
    const catVal = item.category || 'fabrication';
    populateGalleryCategoryModularGrid(catVal);

    if (item.img) {
      if (hiddenImg) hiddenImg.value = item.img;
      if (previewImg) {
        previewImg.src = toAdminAssetPath(item.img);
        previewImg.onerror = function() {
          this.src = '../../../../logo/logo.png';
        };
      }
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
    const cms = await getCmsData();
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
      await saveCmsData(cms);
      renderGallery();
      showToast("Photo removed from gallery.");
    }
  };

  if (galleryForm) {
    galleryForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const imgVal = document.getElementById('galleryAddImgUrl')?.value?.trim();
      if (!imgVal) {
        window.customAlert("Please upload an image from your device or provide a valid image URL before saving.", "Photo Required", "warning");
        return;
      }
      const cms = await getCmsData();
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
        cms.gallery.push(galleryItem);
        showToast("Photo added to project gallery successfully.");
      }

      await saveCmsData(cms);
      renderGallery();
      closeGalleryModal();
    });
  }

  // =========================================================================
  // Hero & Content Settings Form
  // =========================================================================
  const heroForm = document.getElementById('heroSettingsForm');
  const loadHeroSettings = async () => {
    const cms = await getCmsData();
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
    heroForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const cms = await getCmsData();
      cms.hero = {
        badge: document.getElementById('settingHeroBadge').value.trim(),
        title: document.getElementById('settingHeroTitle').value.trim(),
        subtitle: document.getElementById('settingHeroSubtitle').value.trim(),
        stat1: document.getElementById('settingStat1').value.trim() || String(cms.divisions?.length || 6),
        stat2: document.getElementById('settingStat2').value.trim(),
        stat3: document.getElementById('settingStat3').value.trim(),
        stat4: document.getElementById('settingStat4').value.trim()
      };
      await saveCmsData(cms);
      showToast("Hero and performance stats saved successfully.");
    });
  }

  // =========================================================================
  // About Company & Facility Settings
  // =========================================================================
  const aboutForm = document.getElementById('aboutSettingsForm');
  const aboutFileInput = document.getElementById('aboutFileInput');
  const aboutDropzone = document.getElementById('aboutDropzone');
  const aboutPreviewCard = document.getElementById('aboutPreviewCard');
  const aboutPreviewImg = document.getElementById('aboutPreviewImg');
  const aboutPreviewFilename = document.getElementById('aboutPreviewFilename');
  const changeAboutPhotoBtn = document.getElementById('changeAboutPhotoBtn');
  const removeAboutPhotoBtn = document.getElementById('removeAboutPhotoBtn');
  const toggleAboutUrlBtn = document.getElementById('toggleAboutUrlBtn');
  const aboutUrlInputContainer = document.getElementById('aboutUrlInputContainer');
  const aboutManualUrlInput = document.getElementById('aboutManualUrlInput');
  const aboutImgInput = document.getElementById('settingAboutImg');

  const processAndPreviewAboutImage = (file) => {
    if (!file || !file.type.startsWith('image/')) {
      window.customAlert("Please select a valid image file format (PNG, JPG, JPEG, or WEBP).", "Invalid File Format", "warning");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const maxWidth = 1400;
        const maxHeight = 1400;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

        if (aboutImgInput) aboutImgInput.value = dataUrl;
        if (aboutPreviewImg) {
          aboutPreviewImg.src = dataUrl;
          aboutPreviewImg.onerror = function() {
            this.src = '../../../../logo/logo.png';
          };
        }
        if (aboutPreviewFilename) aboutPreviewFilename.textContent = file.name;
        if (aboutDropzone) aboutDropzone.style.display = 'none';
        if (aboutPreviewCard) aboutPreviewCard.classList.add('show');
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const resetAboutUploadState = (currentImg = '') => {
    if (aboutFileInput) aboutFileInput.value = '';
    if (aboutManualUrlInput) aboutManualUrlInput.value = '';
    if (aboutUrlInputContainer) aboutUrlInputContainer.style.display = 'none';
    if (toggleAboutUrlBtn) toggleAboutUrlBtn.textContent = 'Or paste image URL instead';

    if (currentImg && currentImg !== 'none') {
      if (aboutImgInput) aboutImgInput.value = currentImg;
      if (aboutPreviewImg) {
        aboutPreviewImg.src = toAdminAssetPath(currentImg);
        aboutPreviewImg.onerror = function() {
          this.src = '../../../../logo/logo.png';
        };
      }
      if (aboutPreviewFilename) aboutPreviewFilename.textContent = 'Current Facility Photo';
      if (aboutDropzone) aboutDropzone.style.display = 'none';
      if (aboutPreviewCard) aboutPreviewCard.classList.add('show');
    } else {
      if (aboutImgInput) aboutImgInput.value = 'none';
      if (aboutPreviewImg) aboutPreviewImg.src = '';
      if (aboutPreviewCard) aboutPreviewCard.classList.remove('show');
      if (aboutDropzone) aboutDropzone.style.display = 'flex';
    }
  };

  if (aboutDropzone && aboutFileInput) {
    aboutDropzone.addEventListener('click', () => aboutFileInput.click());
    aboutDropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        aboutFileInput.click();
      }
    });

    aboutDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      aboutDropzone.classList.add('dragover');
    });

    aboutDropzone.addEventListener('dragleave', () => {
      aboutDropzone.classList.remove('dragover');
    });

    aboutDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      aboutDropzone.classList.remove('dragover');
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        processAndPreviewAboutImage(e.dataTransfer.files[0]);
      }
    });
  }

  if (aboutFileInput) {
    aboutFileInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        processAndPreviewAboutImage(e.target.files[0]);
      }
    });
  }

  if (changeAboutPhotoBtn && aboutFileInput) {
    changeAboutPhotoBtn.addEventListener('click', () => aboutFileInput.click());
  }

  if (removeAboutPhotoBtn) {
    removeAboutPhotoBtn.addEventListener('click', () => {
      resetAboutUploadState('none');
      showToast("Facility photo removed. Click 'Save About Section' to update.");
    });
  }

  if (toggleAboutUrlBtn && aboutUrlInputContainer && aboutManualUrlInput) {
    toggleAboutUrlBtn.addEventListener('click', () => {
      const isVisible = aboutUrlInputContainer.style.display === 'block';
      aboutUrlInputContainer.style.display = isVisible ? 'none' : 'block';
      toggleAboutUrlBtn.textContent = isVisible ? 'Or paste image URL instead' : 'Hide image URL input';
    });

    aboutManualUrlInput.addEventListener('input', (e) => {
      const url = e.target.value.trim();
      if (url) {
        if (aboutImgInput) aboutImgInput.value = url;
        if (aboutPreviewImg) {
          aboutPreviewImg.src = toAdminAssetPath(url);
          aboutPreviewImg.onerror = function() {
            this.src = '../../../../logo/logo.png';
          };
        }
        if (aboutPreviewFilename) aboutPreviewFilename.textContent = url.slice(0, 30) + '...';
        if (aboutDropzone) aboutDropzone.style.display = 'none';
        if (aboutPreviewCard) aboutPreviewCard.classList.add('show');
      }
    });
  }

  const loadAboutSettings = async () => {
    const cms = await getCmsData();
    const ab = cms.about || defaultCmsData.about;
    const badgeEl = document.getElementById('settingAboutBadge');
    const titleEl = document.getElementById('settingAboutTitle');
    const p1El = document.getElementById('settingAboutP1');
    const p2El = document.getElementById('settingAboutP2');
    const bulletsEl = document.getElementById('settingAboutBullets');
    const badgeTitleEl = document.getElementById('settingAboutBadgeTitle');
    const badgeDescEl = document.getElementById('settingAboutBadgeDesc');

    if (badgeEl) badgeEl.value = ab.badge || 'About Our Company';
    if (titleEl) titleEl.value = ab.title || '';
    if (p1El) p1El.value = ab.p1 || '';
    if (p2El) p2El.value = ab.p2 || '';
    if (bulletsEl) bulletsEl.value = Array.isArray(ab.bullets) ? ab.bullets.join('\n') : (ab.bullets || '');
    if (badgeTitleEl) badgeTitleEl.value = ab.badgeTitle || 'Modern Facility';
    if (badgeDescEl) badgeDescEl.value = ab.badgeDesc || '';

    const currentImg = (ab.img && ab.img !== 'none') ? ab.img : 'none';
    resetAboutUploadState(currentImg);
  };

  if (aboutForm) {
    aboutForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const cms = await getCmsData();
      const bulletsRaw = document.getElementById('settingAboutBullets')?.value?.trim() || '';
      const bulletsArr = bulletsRaw
        ? bulletsRaw.split('\n').map(b => b.trim()).filter(Boolean)
        : defaultCmsData.about.bullets;

      const rawImgVal = document.getElementById('settingAboutImg')?.value?.trim() || '';
      const imgVal = rawImgVal === 'none' ? 'none' : (rawImgVal || 'none');

      cms.about = {
        badge: document.getElementById('settingAboutBadge')?.value?.trim() || 'About Our Company',
        title: document.getElementById('settingAboutTitle')?.value?.trim() || '',
        p1: document.getElementById('settingAboutP1')?.value?.trim() || '',
        p2: document.getElementById('settingAboutP2')?.value?.trim() || '',
        bullets: bulletsArr,
        img: imgVal,
        badgeTitle: document.getElementById('settingAboutBadgeTitle')?.value?.trim() || 'Modern Facility',
        badgeDesc: document.getElementById('settingAboutBadgeDesc')?.value?.trim() || ''
      };

      await saveCmsData(cms);
      showToast("About Company section saved and synchronized successfully.");
    });
  }

  // =========================================================================
  // Reset to Factory Defaults Logic
  // =========================================================================
  window.resetToFactoryDefaults = async function(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    if (e && typeof e.stopPropagation === 'function') e.stopPropagation();

    const confirmed = await window.customConfirm("Reset all website content, contact information, operational divisions, hero section, about narrative, and project gallery back to factory defaults? Any custom edits will be replaced with original corporate defaults.", {
      title: "Reset to Factory Defaults",
      subtitle: "System Restore",
      confirmText: "Reset to Defaults",
      cancelText: "Cancel",
      isDanger: true
    });

    if (!confirmed) return false;

    const btn = document.getElementById('resetDefaultsBtn');
    let originalHtml = '';
    if (btn) {
      originalHtml = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align: middle; margin-right: 0.35rem; display: inline-block;"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0 0 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 0 0 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg> Restoring Defaults...`;
    }

    try {
      // 1. Deep clone factory defaults to eliminate any reference leak
      const freshDefaults = JSON.parse(JSON.stringify(defaultCmsData));

      // 2. Persist to Supabase
      const db = getDb();
      if (db && typeof db.saveCmsContent === 'function') {
        await db.saveCmsContent(freshDefaults);
      }

      // 3. Update local cache
      _cmsCache = JSON.parse(JSON.stringify(freshDefaults));

      // 4. Re-render all dashboard views with restored data
      if (typeof initDashboard === 'function') {
        await initDashboard();
      }

      showToast("Factory defaults restored successfully — all devices updated.");

      // 5. Navigate to overview tab so user immediately sees the active restored data
      if (typeof window.switchTab === 'function') {
        window.switchTab('tab-overview');
      }
    } catch (err) {
      console.error('Reset error:', err);
      showToast('Error resetting content. Please try again.');
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalHtml;
      }
    }
    return false;
  };

  const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');
  if (resetDefaultsBtn) {
    resetDefaultsBtn.addEventListener('click', (e) => window.resetToFactoryDefaults(e));
  }

  // Delegated document click listener guard
  document.addEventListener('click', (e) => {
    const target = e.target.closest('#resetDefaultsBtn');
    if (target && typeof window.resetToFactoryDefaults === 'function') {
      window.resetToFactoryDefaults(e);
    }
  });

  async function renderAdminGalleryFilters() {
    const filtersContainer = document.getElementById('adminGalleryFilters');
    if (!filtersContainer) return;

    const cms = await getCmsData();
    const divisions = cms.divisions || defaultCmsData.divisions;

    const divisionFilters = divisions.map(d => {
      if (coreDivisionInfo[d.id]) {
        return {
          id: coreDivisionInfo[d.id].id,
          rawId: d.id,
          name: coreDivisionInfo[d.id].name
        };
      }
      return {
        id: d.id,
        rawId: d.id,
        name: d.title || d.sub || 'Custom Division'
      };
    });

    const allFilters = [
      { id: 'all', name: 'All Assets', isAll: true },
      ...divisionFilters
    ];

    const validFilterIds = new Set(allFilters.map(f => f.id));
    if (!validFilterIds.has(currentAdminGalleryFilter)) {
      currentAdminGalleryFilter = 'all';
    }

    filtersContainer.innerHTML = allFilters.map(f => {
      const isActive = f.id === currentAdminGalleryFilter;
      if (f.isAll) {
        return `<button type="button" class="filter-btn ${isActive ? 'active' : ''}" data-filter="all"><span class="filter-btn-label">All Assets</span></button>`;
      }
      return `
        <button type="button" class="filter-btn ${isActive ? 'active' : ''}" data-filter="${escapeHtml(f.id)}" title="Filter by ${escapeHtml(f.name)}">
          <span class="filter-btn-label">${escapeHtml(f.name)}</span>
          <span class="filter-btn-actions">
            <span role="button" tabindex="0" class="filter-btn-edit" title="Edit ${escapeHtml(f.name)}" onclick="window.editDivisionById('${escapeHtml(f.rawId)}', event)" aria-label="Edit ${escapeHtml(f.name)}">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" style="pointer-events: none;"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
            </span>
            <span role="button" tabindex="0" class="filter-btn-remove" title="Remove ${escapeHtml(f.name)}" onclick="window.removeDivisionById('${escapeHtml(f.rawId)}', event)" aria-label="Remove ${escapeHtml(f.name)}">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor" style="pointer-events: none;"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
            </span>
          </span>
        </button>
      `;
    }).join('');

    filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        if (e.target.closest('.filter-btn-edit') || e.target.closest('.filter-btn-remove')) {
          return;
        }
        filtersContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentAdminGalleryFilter = btn.getAttribute('data-filter') || 'all';
        try { sessionStorage.setItem(GALLERY_FILTER_KEY, currentAdminGalleryFilter); } catch (e) {}
        renderGallery();
      });
    });

    filtersContainer.querySelectorAll('.filter-btn-edit').forEach(el => {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          el.click();
        }
      });
    });

    filtersContainer.querySelectorAll('.filter-btn-remove').forEach(el => {
      el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          el.click();
        }
      });
    });
  }

  // =========================================================================
  // Dashboard Initialization
  // =========================================================================
  const initDashboard = async () => {
    renderInquiries();
    loadContactSettings();
    renderDivisions();
    renderGallery();
    renderAdminGalleryFilters();
    loadHeroSettings();
    loadAboutSettings();
  };
  window.initDashboard = initDashboard;

  // Utilities
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

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
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startAdminApp);
} else {
  startAdminApp();
}





