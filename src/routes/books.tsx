import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books — Motebang Koaho" },
      { name: "description", content: "Upcoming photography and design books by Motebang Koaho. A new chapter is on the way — content coming soon." },
      { property: "og:title", content: "Books — Motebang Koaho" },
      { property: "og:description", content: "Upcoming photography and design books by Motebang Koaho. A new chapter is on the way — content coming soon." },
      { property: "og:url", content: "https://motebangkoaho.lovable.app/books" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://motebangkoaho.lovable.app/books" }],
  }),
  component: BooksPage,
});

function BooksPage() {
  const marquee = ["B.O.KS", "P.R.I.N.T", "P.A.T.T.E.R.N", "S.T.U.D.Y", "C.H.A.P.T.E.R"];
  return (
    <div className="books-wrap">
      <div className="books-band">
        <span className="books-eyebrow">P.U.B.L.I.S.H.I.N.G</span>
        <h1 className="books-wordmark">
          A New <em>Chapter</em>
        </h1>
      </div>
      <div className="books-rule" />

      <div className="books-marquee" aria-hidden="true">
        <div className="books-marquee-track">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((t, i) => (
            <span key={i}>
              <i>MK</i>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="books-rule" />

      <section className="books-hero">
        <div className="books-hero-text">
          <p className="section-sub">More content coming soon.</p>
        </div>
        <div className="book-3d" aria-hidden="true">
          <div className="book">
            <div className="book-cover">
              <span className="book-title">
                Patterns
                <br />
                and Stuff
              </span>
              <span className="book-author">Motebang Koaho</span>
            </div>
            <div className="book-spine" />
            <div className="book-pages" />
          </div>
        </div>
      </section>
      <div className="books-rule" />

      <div className="books-band">
        <span className="books-eyebrow">A.V.A.I.L.A.B.L.E</span>
      </div>

      <article className="books-row">
        <div>
          <h3>Patterns and Stuff</h3>
          <p>
            By Motebang Koaho — a visual study of pattern, form, and the quiet
            structures that hold a design together.
          </p>
          <a
            href="https://www.indigo.ca/products/patterns-and-stuff"
            target="_blank"
            rel="noreferrer"
            className="books-link"
          >
            Buy on Indigo
          </a>
        </div>
        <span className="books-meta">Indigo · 2026</span>
      </article>
      <div className="books-rule" />
    </div>
  );
}

