import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Session — Motebang Koaho" },
      { name: "description", content: "Request a portrait, event, product, wedding, or design booking with Motebang Koaho. Reply within 24 hours." },
      { property: "og:title", content: "Book a Session — Motebang Koaho" },
      { property: "og:description", content: "Request a portrait, event, product, wedding, or design booking with Motebang Koaho. Reply within 24 hours." },
      { property: "og:url", content: "https://motebangkoaho.lovable.app/booking" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://motebangkoaho.lovable.app/booking" }],
  }),
  component: BookingPage,
});

function str(v: FormDataEntryValue | null, max = 2000) {
  return typeof v === "string" ? v.trim().slice(0, max) || null : null;
}

function BookingPage() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const d = new FormData(e.currentTarget);

    const payload = {
      first_name: str(d.get("firstName"), 100) ?? "",
      last_name: str(d.get("lastName"), 100) ?? "",
      email: str(d.get("email"), 255) ?? "",
      phone: str(d.get("phone"), 50),
      company: str(d.get("company"), 150),
      website: str(d.get("website"), 255),
      service: str(d.get("service"), 100) ?? "",
      preferred_date: str(d.get("date"), 20),
      timeline: str(d.get("timeline"), 100),
      location: str(d.get("location"), 200),
      budget: str(d.get("budget"), 100),
      deliverables: str(d.get("deliverables"), 200),
      usage: str(d.get("usage"), 200),
      experience: str(d.get("experience"), 100),
      referral: str(d.get("referral"), 100),
      message: str(d.get("message"), 4000) ?? "",
      goals: str(d.get("goals"), 2000),
      reference_links: str(d.get("references"), 2000),
    };

    if (!payload.first_name || !payload.last_name || !payload.email || !payload.service || !payload.message) {
      setSubmitting(false);
      setError("Please complete all required fields.");
      return;
    }

    const { error: err } = await supabase.from("bookings").insert(payload);
    setSubmitting(false);
    if (err) {
      setError("Something went wrong sending your request. Please try again or email motebangkoaho@gmail.com.");
      return;
    }
    setSent(true);
    e.currentTarget.reset();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }



  return (
    <div className="booking-wrap">
      <div className="booking-header">
        <span className="section-label">Get in Touch</span>
        <h1 className="section-title">Book a <em>Session</em></h1>
        <p className="section-sub">Fill out the form and I'll get back to you within 24 hours.</p>
        {sent && <p className="form-success">Thank you — your booking request has been received. I'll reply within 24 hours.</p>}
        {error && <p className="form-error">{error}</p>}
      </div>

      <form className="booking-form" onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input id="firstName" name="firstName" required placeholder="Your first name" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input id="lastName" name="lastName" required placeholder="Your last name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input id="email" name="email" type="email" required placeholder="your@email.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" placeholder="0659890120" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company">Company / Brand</label>
            <input id="company" name="company" placeholder="Business or brand name" />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website or Social Handle</label>
            <input id="website" name="website" placeholder="@yourbrand or yoursite.com" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="service">Service Required *</label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>Select a service…</option>
            <optgroup label="Photography">
              <option value="portrait">Portrait Photography</option>
              <option value="event">Event Photography</option>
              <option value="product">Product Photography</option>
              <option value="wedding">Wedding Photography</option>
              <option value="fashion">Fashion Photography</option>
              <option value="other-photo">Other Photography</option>
            </optgroup>
            <optgroup label="Design">
              <option value="branding">Brand Identity</option>
              <option value="print">Print Design</option>
              <option value="social">Social Media Graphics</option>
              <option value="packaging">Packaging Design</option>
              <option value="other-design">Other Design</option>
            </optgroup>
          </select>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input id="date" name="date" type="date" />
          </div>
          <div className="form-group">
            <label htmlFor="timeline">Timeline / Deadline</label>
            <select id="timeline" name="timeline" defaultValue="">
              <option value="">Select a timeline…</option>
              <option value="urgent">Urgent — within 1 week</option>
              <option value="2-4-weeks">2–4 weeks</option>
              <option value="1-3-months">1–3 months</option>
              <option value="flexible">Flexible / no fixed date</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="location">Location / Venue</label>
            <input id="location" name="location" placeholder="City, studio, or on-location" />
          </div>
          <div className="form-group">
            <label htmlFor="budget">Budget Range</label>
            <select id="budget" name="budget" defaultValue="">
              <option value="">Select budget range…</option>
              <option value="under-1000">Under R1,000</option>
              <option value="1000-3000">R1,000 – R3,000</option>
              <option value="3000-5000">R3,000 – R5,000</option>
              <option value="5000-10000">R5,000 – R10,000</option>
              <option value="over-10000">Over R10,000</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="deliverables">Deliverables Needed</label>
            <select id="deliverables" name="deliverables" defaultValue="">
              <option value="">Select deliverables…</option>
              <option value="edited-images">Edited images only</option>
              <option value="images-retouch">Images + advanced retouching</option>
              <option value="logo-identity">Logo &amp; identity system</option>
              <option value="print-ready">Print-ready artwork</option>
              <option value="social-pack">Social media content pack</option>
              <option value="full-campaign">Full campaign (shoot + design)</option>
              <option value="not-sure">Not sure yet — advise me</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="usage">Intended Usage</label>
            <select id="usage" name="usage" defaultValue="">
              <option value="">Select usage…</option>
              <option value="personal">Personal / private</option>
              <option value="social">Social media</option>
              <option value="website">Website / e-commerce</option>
              <option value="print-ads">Print &amp; advertising</option>
              <option value="commercial">Full commercial licence</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="experience">Worked With a Photographer/Designer Before?</label>
            <select id="experience" name="experience" defaultValue="">
              <option value="">Select an answer…</option>
              <option value="first-time">First time</option>
              <option value="a-few-times">A few times</option>
              <option value="regularly">Regularly / ongoing brand work</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="referral">How Did You Hear About Me?</label>
            <select id="referral" name="referral" defaultValue="">
              <option value="">Select a source…</option>
              <option value="instagram">Instagram</option>
              <option value="behance">Behance</option>
              <option value="google">Google search</option>
              <option value="referral">Referral from a friend or client</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">Project Details *</label>
          <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project, vision, and any specific requirements…" />
        </div>
        <div className="form-group">
          <label htmlFor="goals">What Does Success Look Like?</label>
          <textarea id="goals" name="goals" rows={3} placeholder="The outcome you want — launch a brand, fill a catalogue, capture a day…" />
        </div>
        <div className="form-group">
          <label htmlFor="references">References or Inspiration</label>
          <textarea id="references" name="references" rows={3} placeholder="Links, moodboards, or work of mine you'd like to build on" />
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? "Opening…" : "Send Booking Request"}
        </button>
      </form>

      <div className="contact-row">
        <div className="contact-item">
          <span className="ci-label">Phone</span>
          <p>0659890120</p>
        </div>
        <div className="contact-item">
          <span className="ci-label">Email</span>
          <p>motebangkoaho@gmail.com</p>
        </div>
        <div className="contact-item">
          <span className="ci-label">Behance</span>
          <p>behance.net/euphoriaheart</p>
        </div>
      </div>
    </div>
  );
}
