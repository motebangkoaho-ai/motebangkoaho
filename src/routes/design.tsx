import { createFileRoute } from "@tanstack/react-router";
import { PortfolioGrid } from "@/components/SiteShell";

export const Route = createFileRoute("/design")({
  head: () => ({
    meta: [
      { title: "Design — Motebang Koaho" },
      { name: "description", content: "Brand identity, print, packaging, illustration and UI/UX design by Motebang Koaho." },
      { property: "og:title", content: "Design — Motebang Koaho" },
    ],
  }),
  component: DesignPage,
});

function DesignPage() {
  return (
    <>
      <section className="dg-hero">
        <div className="dg-hero-text">
          <span className="section-label">Portfolio · Design</span>
          <h1>Posters, in <em>motion</em></h1>
          <p>
            Each composition is layered, masked, and pushed pixel by pixel.
            Below — a working file for a landscape poster series, mid-edit.
          </p>
          <div className="hero-buttons">
            <a href="https://www.behance.net/motebang-Koaho" target="_blank" rel="noreferrer" className="btn btn-primary">View on Behance</a>
            <a href="#gallery" className="btn btn-outline">Browse Gallery</a>
          </div>
        </div>

        <div className="ps-window" aria-hidden>
          <div className="ps-titlebar">
            <span className="ps-dot r" /><span className="ps-dot y" /><span className="ps-dot g" />
            <span className="ps-title">Photoshop — Landscape_Poster_v04.psd @ 66.7%</span>
          </div>
          <div className="ps-menubar">
            <span>File</span><span>Edit</span><span>Image</span><span>Layer</span>
            <span>Select</span><span>Filter</span><span>View</span>
          </div>
          <div className="ps-body">
            <div className="ps-tools">
              <div className="ps-tool active" title="Move">↖</div>
              <div className="ps-tool" title="Marquee">▢</div>
              <div className="ps-tool" title="Lasso">⌒</div>
              <div className="ps-tool" title="Brush">✦</div>
              <div className="ps-tool" title="Eraser">⌫</div>
              <div className="ps-tool" title="Type">T</div>
              <div className="ps-tool" title="Gradient">▥</div>
              <div className="ps-tool" title="Hand">✋</div>
            </div>
            <div className="ps-canvas-wrap">
              <div className="ps-canvas">
                <div className="ps-poster-text">HORIZON<br/><em>Vol. 04</em></div>
                <div className="ps-marquee" />
                <div className="ps-poster-sub">A LANDSCAPE STUDY · 2024</div>
              </div>
            </div>
            <div className="ps-panels">
              <div>
                <div className="ps-panel-title">Layers</div>
                <div className="ps-layer"><span className="ps-layer-thumb d" /><span>Type — Title</span></div>
                <div className="ps-layer active"><span className="ps-layer-thumb c" /><span>Sun — Glow</span></div>
                <div className="ps-layer"><span className="ps-layer-thumb b" /><span>Mountains</span></div>
                <div className="ps-layer"><span className="ps-layer-thumb" /><span>Sky Gradient</span></div>
              </div>
              <div>
                <div className="ps-panel-title">History</div>
                <div className="ps-history-item">Open</div>
                <div className="ps-history-item">Gradient Tool</div>
                <div className="ps-history-item">Layer Mask</div>
                <div className="ps-history-item active">Color Balance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" style={{ paddingTop: "3rem", background: "var(--bg)" }}>
        <PortfolioGrid
          items={[
            { title: "Brand Identity", tag: "Logos & guidelines", kind: "design" },
            { title: "Print Design", tag: "Posters & brochures", kind: "design" },
            { title: "Social Media", tag: "Digital graphics", kind: "design" },
            { title: "Packaging Design", tag: "Product & labels", kind: "design" },
            { title: "Illustration", tag: "Digital art", kind: "design" },
            { title: "UI/UX Design", tag: "Web & app", kind: "design" },
          ]}
        />
      </section>

      <div className="behance-strip">
        <div className="inner">
          <p>Full design portfolio<br/>on <em>Behance</em></p>
          <a className="behance-link" href="https://www.behance.net/motebang-Koaho" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/></svg>
            View on Behance
          </a>
        </div>
      </div>
    </>
  );
}
