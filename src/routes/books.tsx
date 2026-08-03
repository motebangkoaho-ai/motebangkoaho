import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books — Motebang Koaho" },
      { name: "description", content: "Books by Motebang Koaho. Patterns and Stuff is available now — more titles coming soon." },
      { property: "og:title", content: "Books — Motebang Koaho" },
      { property: "og:description", content: "Books by Motebang Koaho. Patterns and Stuff is available now — more titles coming soon." },
      { property: "og:url", content: "https://motebangkoaho.lovable.app/books" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://motebangkoaho.lovable.app/books" }],
  }),
  component: BooksPage,
});

function BooksPage() {
  return (
    <div className="books-wrap">
      <section className="books-hero">
        <div className="books-hero-text">
          <span className="section-label">Books</span>
          <h1 className="books-wordmark">
            A New <em>Chapter</em>
          </h1>
          <p className="section-sub">
            A growing library of visual studies. The first title is out now, with more on the way.
          </p>
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

      <section className="books-listing">
        <article className="books-row">
          <div>
            <span className="books-eyebrow">Published</span>
            <h2 className="books-row-title">Patterns and Stuff</h2>
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
      </section>
    </div>
  );
}
