// Minimal Supabase REST/auth helper for the static site build.
(function (global) {
  var URL_BASE = "https://rzwsfkmkmeqxtczxolnh.supabase.co";
  var KEY = "sb_publishable_SOHISE-WyYFN439NAprVUg_Z_U65Y1g";
  var STORE = "mk-admin-session";

  function session() {
    try { return JSON.parse(localStorage.getItem(STORE) || "null"); } catch (e) { return null; }
  }
  function token() {
    var s = session();
    if (!s || !s.access_token) return null;
    if (s.expires_at && s.expires_at * 1000 < Date.now()) return null;
    return s.access_token;
  }
  async function signIn(email, password) {
    var res = await fetch(URL_BASE + "/auth/v1/token?grant_type=password", {
      method: "POST",
      headers: { apikey: KEY, "content-type": "application/json" },
      body: JSON.stringify({ email: email, password: password })
    });
    var data = await res.json();
    if (!res.ok) throw new Error(data.error_description || data.msg || data.message || "Sign in failed");
    localStorage.setItem(STORE, JSON.stringify(data));
    return data;
  }
  function signOut() { localStorage.removeItem(STORE); }

  async function rest(path, options) {
    options = options || {};
    var headers = { apikey: KEY, "content-type": "application/json" };
    var t = token();
    if (t) headers.Authorization = "Bearer " + t;
    if (options.headers) for (var k in options.headers) headers[k] = options.headers[k];
    var res = await fetch(URL_BASE + "/rest/v1/" + path, {
      method: options.method || "GET",
      headers: headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    });
    var text = await res.text();
    var data = text ? JSON.parse(text) : null;
    if (!res.ok) throw new Error((data && (data.message || data.hint)) || "Request failed");
    return data;
  }

  global.sb = { session: session, token: token, signIn: signIn, signOut: signOut, rest: rest };
})(window);
