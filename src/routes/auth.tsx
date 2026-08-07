import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin Login — Motebang Koaho" },
      { name: "description", content: "Private admin login for the Motebang Koaho bookings dashboard." },
      { property: "og:title", content: "Admin Login — Motebang Koaho" },
      { property: "og:description", content: "Private admin login for the Motebang Koaho bookings dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AuthPage,
});

const OWNER_EMAIL = "motebangkoaho@gmail.com";

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(OWNER_EMAIL);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error: err } =
      mode === "signin"
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({
            email,
            password,
            options: { emailRedirectTo: `${window.location.origin}/admin` },
          });
    setBusy(false);
    if (err) {
      setError(err.message);
      return;
    }
    const { data } = await supabase.auth.getSession();
    if (data.session) navigate({ to: "/admin" });
    else setError("Account created. Sign in to continue.");
  }

  return (
    <div className="booking-wrap" style={{ maxWidth: 460 }}>
      <div className="booking-header">
        <span className="section-label">Private</span>
        <h1 className="section-title">Admin <em>Access</em></h1>
        <p className="section-sub">Sign in to view booking requests.</p>
      </div>
      <form className="booking-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="admin-email">Email</label>
          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === "signin" ? "current-password" : "new-password"}
            minLength={8}
            required
          />
        </div>
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="submit-btn" disabled={busy}>
          {busy ? "Please wait…" : mode === "signin" ? "Sign In" : "Create Admin Account"}
        </button>
        <button
          type="button"
          className="link-btn"
          onClick={() => {
            setMode((m) => (m === "signin" ? "signup" : "signin"));
            setError(null);
          }}
        >
          {mode === "signin" ? "First time? Create your admin account" : "Already have an account? Sign in"}
        </button>
      </form>
    </div>
  );
}
