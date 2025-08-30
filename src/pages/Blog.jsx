import Section from "../components/Section.jsx";
import { NavLink } from "react-router-dom";
import { getSortedPosts } from "../data/blogPosts.js";

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

export default function Blog() {
  const posts = getSortedPosts();

  return (
    <main className="bg-slate-50">
      <Section
        kicker="Blog"
        title="All posts"
        subtitle="Field notes, safety insights, and best practices."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                <NavLink to={`/blog/${p.slug}`} className="hover:underline">{p.title}</NavLink>
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                <span className="font-medium text-slate-700">{p.author}</span>
                <span className="mx-2">•</span>
                <time dateTime={p.date}>{formatDate(p.date)}</time>
              </p>
              <div className="mt-4">
                <NavLink to={`/blog/${p.slug}`} className="text-sm font-semibold text-green-700 hover:underline">Read post</NavLink>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
