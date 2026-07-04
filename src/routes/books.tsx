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
          <p className="section-sub">Content coming soon.</p>
        </div>
        <div className="book-3d" aria-hidden="true">
          <div className="book">
            <div className="book-cover">
              <span className="book-title">Untitled</span>
              <span className="book-author">Motebang Koaho</span>
            </div>
            <div className="book-spine" />
            <div className="book-pages" />
          </div>
        </div>
      </section>
    </div>
  );
}
