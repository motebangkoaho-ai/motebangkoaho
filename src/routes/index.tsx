import { createFileRoute, Link } from "@tanstack/react-router";
import { BehanceGrid } from "@/components/SiteShell";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Motebang Koaho — Photographer & Designer" },
      { name: "description", content: "Capturing light · Crafting vision. Portrait, event, and product photography paired with bold design." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Animated Hero */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-shape circle" />
        <div className="hero-shape circle inner" />
        <div className="hero-shape triangle" />
        <div className="hero-shape square" />

        <svg className="hero-shape cross" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M4 4L20 20M20 4L4 20"/>
        </svg>
        <svg className="hero-shape plus" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 4v16M4 12h16"/>
        </svg>

        <span className="hero-marker tl">+ N 25°44′12″<br/>E 28°11′05″</span>
        <span className="hero-marker tr">PORTFOLIO<br/>VOL. 04 / 2024</span>
        <span className="hero-marker bl">ISO 200 — f/2.8<br/>1/250s · 50mm</span>
        <span className="hero-marker br">ARCHIVE<br/>NO. 0142</span>

        <div className="hero-content">
          <p className="hero-eyebrow">Photographer &amp; Designer</p>
          <h1 className="hero-name">Motebang<br/><em>Koaho</em></h1>
          <p className="hero-tagline">Capturing light &nbsp;·&nbsp; Crafting vision</p>
          <div className="hero-buttons">
            <Link to="/photography" className="btn btn-primary">View Photography</Link>
            <Link to="/design" className="btn btn-outline">View Designs</Link>
          </div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* Featured */}
      <section className="featured-section">
        <div className="section-header centered">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">Featured <em>Projects</em></h2>
          <p className="section-sub" style={{ margin: "1rem auto 0" }}>A curated selection from photography and design</p>
        </div>
        <BehanceGrid ids={[248040739, 224826159, 240134999, 239807389]} />
      </section>

      {/* Behance */}
      <div className="behance-strip">
        <div className="inner">
          <p>See the full work on<br/><em>Behance</em></p>
          <div className="behance-links-group">
            <a className="behance-link" href="https://www.behance.net/euphoriaheart" target="_blank" rel="noreferrer">
              <BehanceIcon /> Euphoria Heart
            </a>
            <a className="behance-link" href="https://www.behance.net/motebang-Koaho" target="_blank" rel="noreferrer">
              <BehanceIcon /> Motebang Koaho
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function BehanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
  );
}
