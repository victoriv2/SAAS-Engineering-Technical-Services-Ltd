/**
 * SAAS ENGINEERING TECHNICAL SERVICES LTD
 * Supabase Client — shared across public site and admin portal
 */

const SUPABASE_URL = 'https://spbbgmmtaftqvisqrvzx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwYmJnbW10YWZ0cXZpc3Fydnp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5NDUzODAsImV4cCI6MjEwNjUyMTM4MH0.DBT0idKjPeVVw3zkdls7zbG9OEXfhr5r8T6R2NDgatw';

// Lightweight Supabase REST + Realtime client (no npm needed)
const saasDB = (() => {
  const headers = {
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  };

  const rest = (path) => `${SUPABASE_URL}/rest/v1/${path}`;

  async function getCmsContent() {
    const res = await fetch(`${rest('cms_content')}?id=eq.1&select=*`, { headers });
    if (!res.ok) throw new Error(`CMS fetch failed: ${res.status}`);
    const rows = await res.json();
    return rows[0] || null;
  }

  async function saveCmsContent(data) {
    const payload = {
      contact:   data.contact   || {},
      hero:      data.hero      || {},
      about:     data.about     || {},
      divisions: data.divisions || [],
      gallery:   data.gallery   || [],
      updated_at: new Date().toISOString()
    };
    const res = await fetch(`${rest('cms_content')}?id=eq.1`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`CMS save failed: ${res.status}`);
    return await res.json();
  }

  async function getInquiries() {
    const res = await fetch(`${rest('inquiries')}?select=*&order=created_at.desc`, { headers });
    if (!res.ok) throw new Error(`Inquiries fetch failed: ${res.status}`);
    return await res.json();
  }

  async function insertInquiry(inquiry) {
    const payload = {
      id:           inquiry.id,
      name:         inquiry.name,
      organization: inquiry.organization || '',
      email:        inquiry.email,
      phone:        inquiry.phone || '',
      division:     inquiry.division || '',
      scope:        inquiry.scope || '',
      status:       inquiry.status || 'new',
      created_at:   new Date().toISOString()
    };
    const res = await fetch(rest('inquiries'), {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error(`Inquiry insert failed: ${res.status}`);
    return await res.json();
  }

  async function updateInquiryStatus(id, status) {
    const res = await fetch(`${rest('inquiries')}?id=eq.${encodeURIComponent(id)}`, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ status })
    });
    if (!res.ok) throw new Error(`Status update failed: ${res.status}`);
    return await res.json();
  }

  async function deleteInquiry(id) {
    const res = await fetch(`${rest('inquiries')}?id=eq.${encodeURIComponent(id)}`, {
      method: 'DELETE',
      headers
    });
    if (!res.ok) throw new Error(`Delete failed: ${res.status}`);
    return true;
  }

  async function verifyAdminPassword(password) {
    // Hash the input password with SHA-256 and compare to stored hash
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray  = Array.from(new Uint8Array(hashBuffer));
    const hashHex    = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    const res = await fetch(`${rest('admin_config')}?id=eq.1&select=password_hash`, { headers });
    if (!res.ok) return false;
    const rows = await res.json();
    if (!rows.length) return false;
    return rows[0].password_hash === hashHex;
  }

  // Realtime subscription using Supabase Realtime WebSocket protocol
  function subscribeToChanges(table, callback) {
    const wsUrl = `${SUPABASE_URL.replace('https://', 'wss://')}/realtime/v1/websocket?apikey=${SUPABASE_ANON_KEY}&vsn=1.0.0`;
    let ws;
    let reconnectTimer;

    function connect() {
      ws = new WebSocket(wsUrl);

      ws.onopen = () => {
        // Join the realtime channel
        ws.send(JSON.stringify({
          topic: `realtime:public:${table}`,
          event: 'phx_join',
          payload: {
            config: {
              broadcast: { self: false },
              presence: { key: '' },
              postgres_changes: [{ event: '*', schema: 'public', table }]
            }
          },
          ref: '1'
        }));
      };

      ws.onmessage = (evt) => {
        try {
          const msg = JSON.parse(evt.data);
          if (msg.event === 'postgres_changes' || msg.event === 'INSERT' ||
              msg.event === 'UPDATE' || msg.event === 'DELETE') {
            callback(msg.payload);
          }
          // Heartbeat
          if (msg.event === 'phx_reply' && msg.payload && msg.payload.status === 'ok') {
            startHeartbeat();
          }
        } catch (_) {}
      };

      ws.onclose = () => {
        clearInterval(reconnectTimer);
        reconnectTimer = setTimeout(connect, 5000);
      };

      ws.onerror = () => ws.close();
    }

    function startHeartbeat() {
      setInterval(() => {
        if (ws && ws.readyState === WebSocket.OPEN) {
          ws.send(JSON.stringify({ topic: 'phoenix', event: 'heartbeat', payload: {}, ref: null }));
        }
      }, 25000);
    }

    connect();
    return { close: () => ws && ws.close() };
  }

  return {
    getCmsContent,
    saveCmsContent,
    getInquiries,
    insertInquiry,
    updateInquiryStatus,
    deleteInquiry,
    verifyAdminPassword,
    subscribeToChanges
  };
})();
