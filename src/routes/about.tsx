import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/motebang-portrait.png.asset.json";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Motebang Koaho" },
      { name: "description", content: "About Motebang Koaho — photographer and designer with a love for visual storytelling." },
    ],
  }),
  component: AboutPage,
});

const skills = [
  "Portrait Photography","Event Photography","Product Photography",
  "Brand Design","Graphic Design","Photo Editing","Adobe Suite","Visual Storytelling",
];

function AboutPage() {
  return (
    <div className="about-wrap">
      <div className="about-img-block">
        <div className="about-img-frame">
          <img
            src={portrait.url}
            alt="Motebang Koaho portrait"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
        </div>
        <div className="about-img-accent" />
      </div>
      <div className="about-text">
        <span className="section-label">About</span>
        <h2>Motebang<br/><em>Koaho</em></h2>
        <p className="about-role">Photographer &amp; Designer</p>
        <p>I'm a passionate photographer and designer with a keen eye for detail and a love for creative storytelling. I bring ideas to life through my lens and designs.</p>
        <p>My work spans portrait photography, event coverage, brand identity design, and digital graphics. I believe in creating authentic visual experiences that connect with people on an emotional level.</p>
        <p>Whether you need stunning photographs for your special day or a complete brand identity for your business, I'm here to turn your vision into reality.</p>
        <div className="skills">
          {skills.map((s) => <span key={s} className="skill-tag">{s}</span>)}
        </div>
      </div>
    </div>
  );
}
