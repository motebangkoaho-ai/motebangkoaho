import { createFileRoute } from "@tanstack/react-router";
import { BehanceGrid } from "@/components/SiteShell";

const DESIGN_IDS = [
  224826159, 239807389, 191120611, 170004709,
  175932217, 136472179, 247315693, 247230691,
];

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
            <span className="ps-title">Adobe Photoshop 2026  —  Landscape_Poster_v04.psd @ 66.7% (Sun — Glow, RGB/8) *</span>
          </div>
          <div className="ps-menubar">
            <span>Ps</span><span>File</span><span>Edit</span><span>Image</span><span>Layer</span>
            <span>Type</span><span>Select</span><span>Filter</span><span>3D</span><span>View</span><span>Window</span><span>Help</span>
          </div>
          <div className="ps-optionsbar">
            <span className="ps-opt-icon">↖</span>
            <label><input type="checkbox" defaultChecked readOnly /> Auto-Select:</label>
            <select defaultValue="Layer"><option>Layer</option></select>
            <label><input type="checkbox" readOnly /> Show Transform Controls</label>
            <div className="ps-opt-align">
              <span>⊢</span><span>⊣</span><span>⊤</span><span>⊥</span><span>┼</span>
            </div>
          </div>
          <div className="ps-body">
            <div className="ps-tools">
              <div className="ps-tool active" title="Move">↖</div>
              <div className="ps-tool" title="Marquee">▢</div>
              <div className="ps-tool" title="Lasso">⌒</div>
              <div className="ps-tool" title="Crop">⌗</div>
              <div className="ps-tool" title="Brush">✦</div>
              <div className="ps-tool" title="Clone">◉</div>
              <div className="ps-tool" title="Eraser">⌫</div>
              <div className="ps-tool" title="Gradient">▥</div>
              <div className="ps-tool" title="Type">T</div>
              <div className="ps-tool" title="Pen">✑</div>
              <div className="ps-tool" title="Shape">▭</div>
              <div className="ps-tool" title="Hand">✋</div>
              <div className="ps-tool" title="Zoom">⌖</div>
              <div className="ps-tool-divider" />
              <div className="ps-swatches">
                <span className="ps-sw fg" />
                <span className="ps-sw bg" />
              </div>
            </div>
            <div className="ps-canvas-wrap">
              <div className="ps-ruler ps-ruler-h">
                {Array.from({ length: 11 }).map((_, i) => <span key={i}>{i * 50}</span>)}
              </div>
              <div className="ps-ruler ps-ruler-v">
                {Array.from({ length: 8 }).map((_, i) => <span key={i}>{i * 50}</span>)}
              </div>
              <div className="ps-canvas">
                <div className="ps-poster-text">HORIZON<br/><em>Vol. 04</em></div>
                <div className="ps-marquee" />
                <div className="ps-poster-sub">A LANDSCAPE STUDY · 2026</div>
                <div className="ps-guide ps-guide-v" style={{ left: "50%" }} />
                <div className="ps-guide ps-guide-h" style={{ top: "33.33%" }} />
                <div className="ps-guide ps-guide-h" style={{ top: "66.66%" }} />
              </div>
            </div>
            <div className="ps-panels">
              <div className="ps-panel">
                <div className="ps-panel-tabs"><span className="active">Layers</span><span>Channels</span><span>Paths</span></div>
                <div className="ps-blend-row">
                  <select defaultValue="Normal"><option>Normal</option><option>Multiply</option><option>Screen</option></select>
                  <span>Opacity: <b>100%</b></span>
                </div>
                <div className="ps-layer"><span className="ps-eye">◉</span><span className="ps-layer-thumb d" /><span>Type — Title</span><span className="ps-fx">fx</span></div>
                <div className="ps-layer active"><span className="ps-eye">◉</span><span className="ps-layer-thumb c" /><span>Sun — Glow</span><span className="ps-fx">fx</span></div>
                <div className="ps-layer"><span className="ps-eye">◉</span><span className="ps-layer-thumb b" /><span>Mountains</span></div>
                <div className="ps-layer"><span className="ps-eye">◉</span><span className="ps-layer-thumb" /><span>Sky Gradient</span></div>
                <div className="ps-layer dim"><span className="ps-eye off">○</span><span className="ps-layer-thumb e" /><span>Background</span><span className="ps-lock">🔒</span></div>
                <div className="ps-panel-foot">
                  <span>fx</span><span>◐</span><span>◇</span><span>+</span><span>🗑</span>
                </div>
              </div>
              <div className="ps-panel">
                <div className="ps-panel-tabs"><span className="active">History</span></div>
                <div className="ps-history-item">Open</div>
                <div className="ps-history-item">Gradient Tool</div>
                <div className="ps-history-item">Layer Mask</div>
                <div className="ps-history-item">Levels Adjustment</div>
                <div className="ps-history-item active">Color Balance</div>
              </div>
            </div>
          </div>
          <div className="ps-statusbar">
            <span>66.67%</span>
            <span>Doc: 24.8M/68.4M</span>
            <span>► Move Tool</span>
          </div>
        </div>
      </section>

      <section id="gallery" style={{ paddingTop: "3rem", background: "var(--bg)" }}>
        <BehanceGrid ids={DESIGN_IDS} />
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
