import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Session — Motebang Koaho" },
      { name: "description", content: "Request a portrait, event, product, wedding, or design booking with Motebang Koaho. Reply within 24 hours." },
      { property: "og:title", content: "Book a Session — Motebang Koaho" },
      { property: "og:description", content: "Request a portrait, event, product, wedding, or design booking with Motebang Koaho. Reply within 24 hours." },
      { property: "og:url", content: "https://motebangkoaho.lovable.app/booking" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://motebangkoaho.lovable.app/booking" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const d = new FormData(e.currentTarget);
    const subject = `Booking Request: ${d.get("service")} — ${d.get("firstName")} ${d.get("lastName")}`;
    const body = `Name: ${d.get("firstName")} ${d.get("lastName")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone") || "Not provided"}\nService: ${d.get("service")}\nDate: ${d.get("date") || "Flexible"}\nBudget: ${d.get("budget") || "Not specified"}\n\n${d.get("message")}`;
    window.location.href = `mailto:motebangkoaho@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => setSubmitting(false), 400);
  }

  return (
    <div className="booking-wrap">
      <div className="booking-header">
        <span className="section-label">Get in Touch</span>
        <h1 className="section-title">Book a <em>Session</em></h1>
        <p className="section-sub">Fill out the form and I'll get back to you within 24 hours.</p>
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
        <div className="form-group">
          <label htmlFor="message">Project Details *</label>
          <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project, vision, and any specific requirements…" />
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
