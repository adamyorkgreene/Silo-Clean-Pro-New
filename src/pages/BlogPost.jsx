import { useEffect, useState } from "react";
import { useParams, NavLink, useLocation } from "react-router-dom";
import Section from "../components/Section.jsx";
import { blogPosts } from "../data/blogPosts.js";
import { useSEO } from "../lib/useSEO.js";

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

export default function BlogPost() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const post = blogPosts.find((p) => p.slug === slug);
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // Optional in-bundle fallback: posts placed in src/posts as HTML partials
  const rawPosts = import.meta.glob("../posts/*.html", { as: "raw", eager: true });

  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const base = (import.meta && import.meta.env && import.meta.env.BASE_URL) ? import.meta.env.BASE_URL : "/";
        const href = post?.href || `/blog/${slug}.html`;
        const normalized = href.startsWith("/") ? href : `/${href}`;
        const path = `${base.replace(/\/$/, "")}${normalized}`;
        let htmlText = "";
        let fetched = false;
        try {
          const res = await fetch(path, { headers: { "Accept": "text/html, */*;q=0.8" } });
          if (!res.ok) throw new Error(`Failed to load post (${res.status})`);
          htmlText = await res.text();
          fetched = true;
        } catch (e) {
          // Fallback to bundled raw content if available
          const key = `../posts/${slug}.html`;
          if (rawPosts[key]) {
            htmlText = rawPosts[key];
          } else {
            throw e;
          }
        }
        // Parse and extract body, then strip redundant elements (back link, H1, meta)
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");
        const body = doc?.body;
        // Detect SPA fallback (served index.html instead of the post)
        const looksLikeAppShell = fetched && body && body.querySelector('#root');
        if (looksLikeAppShell && !rawPosts[`../posts/${slug}.html`]) {
          throw new Error("Received app shell instead of post content (check server static file config)");
        } else if (looksLikeAppShell && rawPosts[`../posts/${slug}.html`]) {
          // Use bundled fallback
          const raw = rawPosts[`../posts/${slug}.html`];
          const altDoc = parser.parseFromString(raw, "text/html");
          const altBody = altDoc?.body;
          const html = altBody?.innerHTML?.trim() || raw;
          if (active) setContent(html);
          return;
        }
        let originalHtml = body?.innerHTML?.trim() || htmlText;
        if (body) {
          // Remove any back-to-blog links
          body.querySelectorAll('a[href="/blog"], a[href$="/blog"]').forEach((el) => el.remove());
          // Remove first H1 (title)
          const h1 = body.querySelector('h1');
          if (h1) h1.remove();
          // Remove elements with class "meta" (author/date lines)
          body.querySelectorAll('.meta').forEach((el) => el.remove());
        }
        let strippedHtml = body?.innerHTML?.trim() || htmlText;
        // If stripping removed everything, fall back to original
        const textLength = strippedHtml.replace(/<[^>]+>/g, "").trim().length;
        if (textLength < 20) {
          strippedHtml = originalHtml;
        }
        if (active) setContent(strippedHtml);
      } catch (e) {
        if (active) setError(e.message || "Error loading post");
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, [slug, post?.href]);

  if (!post) {
    return (
      <main className="bg-slate-50">
        <Section title="Post not found" subtitle="The blog post you requested does not exist.">
          <NavLink to="/blog" className="text-green-700 font-semibold">Back to blog</NavLink>
        </Section>
      </main>
    );
  }

  const canonical = `https://www.silocleanpro.com${pathname || `/blog/${slug}`}`;
  useSEO({
    title: `${post.title} | Silo Clean Pro`,
    description: `${post.title} — Silo Clean Pro blog`,
    canonical,
    og: { type: "article", image: post.image || "https://www.silocleanpro.com/og-image.jpg" },
    twitter: { card: "summary_large_image", image: post.image || "https://www.silocleanpro.com/og-image.jpg" },
  });

  return (
    <main className="bg-slate-50">
      <Section
        kicker="Blog"
        title={post.title}
        subtitle={`${post.author} - ${formatDate(post.date)}`}
      >
        {post.image && (
          <figure
            className="mb-4 md:mb-2 md:float-right md:max-w-[420px] md:ml-6"
          >
            <img
              src={post.image}
              alt={post.imageAlt || post.title}
              className="w-auto max-w-full h-auto object-contain rounded-xl border mx-auto max-h-[60vh] md:max-h-[50vh] lg:max-h-[45vh]"
              loading="lazy"
            />
          </figure>
        )}

        {loading && <p className="text-slate-600">Loading post...</p>}
        {error && (
          <p className="text-red-700">{error} - The content file may be missing.</p>
        )}
        {!loading && !error && (
          <>
            <article
              className="blog-content max-w-none text-left"
              dangerouslySetInnerHTML={{ __html: content }}
            />
            {/* Clear float to contain layout after wrapped text */}
            <div className="clear-both" />
          </>
        )}
        <div className="mt-8">
          <NavLink to="/blog" className="text-green-700 font-semibold">Back to blog</NavLink>
        </div>
      </Section>
    </main>
  );
}
