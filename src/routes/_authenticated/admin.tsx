import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/_authenticated/admin")({
  component: AdminPage,
});

type Booking = {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  website: string | null;
  service: string;
  preferred_date: string | null;
  timeline: string | null;
  location: string | null;
  budget: string | null;
  deliverables: string | null;
  usage: string | null;
  experience: string | null;
  referral: string | null;
  message: string;
  goals: string | null;
  reference_links: string | null;
  status: string;
};

function AdminPage() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<Booking[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data, error: err }) => {
        if (!active) return;
        if (err) setError(err.message);
        else setRows((data ?? []) as Booking[]);
      });
    return () => {
      active = false;
    };
  }, []);

  async function setStatus(id: string, status: string) {
    const { error: err } = await supabase.from("bookings").update({ status }).eq("id", id);
    if (err) return setError(err.message);
    setRows((r) => (r ? r.map((b) => (b.id === id ? { ...b, status } : b)) : r));
  }

  async function remove(id: string) {
    const { error: err } = await supabase.from("bookings").delete().eq("id", id);
    if (err) return setError(err.message);
    setRows((r) => (r ? r.filter((b) => b.id !== id) : r));
  }

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  return (
    <div className="booking-wrap">
      <div className="booking-header">
        <span className="section-label">Dashboard</span>
        <h1 className="section-title">Booking <em>Requests</em></h1>
        <p className="section-sub">
          {rows ? `${rows.length} request${rows.length === 1 ? "" : "s"}` : "Loading…"}
        </p>
        <button type="button" className="link-btn" onClick={signOut}>Sign out</button>
      </div>

      {error && <p className="form-error">{error}</p>}

      <div className="admin-list">
        {rows?.map((b) => (
          <article key={b.id} className={`admin-card${b.status === "new" ? " is-new" : ""}`}>
            <header onClick={() => setOpenId(openId === b.id ? null : b.id)}>
              <div>
                <h2>{b.first_name} {b.last_name}</h2>
                <p>{b.service} · {new Date(b.created_at).toLocaleDateString()}</p>
              </div>
              <span className="admin-status">{b.status}</span>
            </header>
            {openId === b.id && (
              <div className="admin-body">
                <dl>
                  <dt>Email</dt><dd><a href={`mailto:${b.email}`}>{b.email}</a></dd>
                  <dt>Phone</dt><dd>{b.phone || "—"}</dd>
                  <dt>Company</dt><dd>{b.company || "—"}</dd>
                  <dt>Website</dt><dd>{b.website || "—"}</dd>
                  <dt>Preferred date</dt><dd>{b.preferred_date || "Flexible"}</dd>
                  <dt>Timeline</dt><dd>{b.timeline || "—"}</dd>
                  <dt>Location</dt><dd>{b.location || "—"}</dd>
                  <dt>Budget</dt><dd>{b.budget || "—"}</dd>
                  <dt>Deliverables</dt><dd>{b.deliverables || "—"}</dd>
                  <dt>Usage</dt><dd>{b.usage || "—"}</dd>
                  <dt>Experience</dt><dd>{b.experience || "—"}</dd>
                  <dt>Referral</dt><dd>{b.referral || "—"}</dd>
                  <dt>Details</dt><dd>{b.message}</dd>
                  <dt>Goals</dt><dd>{b.goals || "—"}</dd>
                  <dt>References</dt><dd>{b.reference_links || "—"}</dd>
                </dl>
                <div className="admin-actions">
                  <button type="button" onClick={() => setStatus(b.id, "contacted")}>Mark contacted</button>
                  <button type="button" onClick={() => setStatus(b.id, "booked")}>Mark booked</button>
                  <button type="button" onClick={() => remove(b.id)}>Delete</button>
                </div>
              </div>
            )}
          </article>
        ))}
        {rows && rows.length === 0 && <p className="section-sub">No booking requests yet.</p>}
      </div>
    </div>
  );
}
