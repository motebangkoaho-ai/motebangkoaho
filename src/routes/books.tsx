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
  return (
    <div className="books-wrap">
      <section className="books-hero">
        <div className="books-hero-text">
          <span className="section-label">Books</span>
          <h1 className="section-title">A New <em>Chapter</em></h1>
          <p className="section-sub">More content coming soon.</p>
        </div>
        <div className="book-3d" aria-hidden="true">
          <div className="book">
            <div className="book-cover">
              <span className="book-title">Patterns<br/>and Stuff</span>
              <span className="book-author">Motebang Koaho</span>
            </div>
            <div className="book-spine" />
            <div className="book-pages" />
          </div>
        </div>
      </section>

      <section className="books-list" style={{ padding: "3rem 1.5rem 5rem", maxWidth: 900, margin: "0 auto" }}>
        <div className="section-header centered" style={{ marginBottom: "2.5rem" }}>
          <span className="section-label">Published</span>
          <h2 className="section-title">Available <em>Now</em></h2>
        </div>

        <article
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr)",
            gap: "1.25rem",
            padding: "2rem",
            border: "1px solid var(--border, rgba(255,255,255,0.12))",
            borderRadius: "14px",
            background: "var(--surface, rgba(255,255,255,0.03))",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.75rem", margin: "0 0 0.25rem" }}>Patterns and Stuff</h3>
            <p style={{ opacity: 0.7, margin: "0 0 1rem", fontSize: "0.95rem" }}>
              By Motebang Koaho — a visual study of pattern, form, and the quiet
              structures that hold a design together.
            </p>
            <a
              href="https://www.indigo.ca/products/patterns-and-stuff"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Buy on Indigo
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
