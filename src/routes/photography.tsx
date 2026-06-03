import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/SiteShell";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography — Motebang Koaho" },
      { name: "description", content: "Portrait, event, product, street, landscape and fashion photography by Motebang Koaho." },
      { property: "og:title", content: "Photography — Motebang Koaho" },
    ],
  }),
  component: PhotographyPage,
});

function PhotographyPage() {
  return (
    <>
      {/* Editing-stage hero */}
      <section className="ph-hero">
        <div className="ph-hero-text">
          <span className="section-label">Portfolio · Photography</span>
          <h1>Frames in <em>progress</em></h1>
          <p>
            Every image passes through a quiet darkroom — color graded, masked,
            and refined until the light feels true. Below, a peek at the
            editing bench.
          </p>
          <div className="hero-buttons">
            <a href="https://www.behance.net/euphoriaheart" target="_blank" rel="noreferrer" className="btn btn-primary">View on Behance</a>
            <a href="#gallery" className="btn btn-outline">Browse Gallery</a>
          </div>
        </div>

        <div className="ph-hero-stage">
          <div className="ph-frame a">
            <span className="ph-label">// Layer 01 — Portrait.raw</span>
            <div className="ph-handles" />
            <span className="ph-handle-tr" /><span className="ph-handle-bl" />
          </div>
          <div className="ph-frame b">
            <span className="ph-label">// Layer 02 — Street.tif</span>
            <div className="ph-handles" />
            <span className="ph-handle-tr" /><span className="ph-handle-bl" />
            <div className="ph-adjust">
              <div className="ph-panel-title" style={{ color: "var(--accent)" }}>Adjust</div>
              <div className="row"><span>Exp</span><span className="bar" style={{ ["--w" as any]: "70%" }} /></div>
              <div className="row"><span>Cont</span><span className="bar" style={{ ["--w" as any]: "55%" }} /></div>
              <div className="row"><span>Sat</span><span className="bar" style={{ ["--w" as any]: "40%" }} /></div>
              <div className="row"><span>Temp</span><span className="bar" style={{ ["--w" as any]: "65%" }} /></div>
            </div>
          </div>
          <div className="ph-frame c">
            <span className="ph-label">// Layer 03 — Land.dng</span>
            <div className="ph-handles" />
            <span className="ph-handle-tr" /><span className="ph-handle-bl" />
          </div>
        </div>
      </section>

      <section id="gallery" style={{ paddingTop: "3rem", background: "var(--bg)" }}>
        <PortfolioGrid
          items={[
            { title: "Portrait Photography", tag: "Professional portraits", kind: "photo" },
            { title: "Event Photography", tag: "Weddings & corporate", kind: "photo" },
            { title: "Product Photography", tag: "E-commerce & commercial", kind: "photo" },
            { title: "Street Photography", tag: "Urban life & candid", kind: "photo" },
            { title: "Landscape Photography", tag: "Nature & scenic", kind: "photo" },
            { title: "Fashion Photography", tag: "Editorial & lookbook", kind: "photo" },
          ]}
        />
      </section>

      <div className="behance-strip">
        <div className="inner">
          <p>Full photography portfolio<br/>on <em>Behance</em></p>
          <a className="behance-link" href="https://www.behance.net/euphoriaheart" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
            View on Behance
          </a>
        </div>
      </div>
    </>
  );
}
