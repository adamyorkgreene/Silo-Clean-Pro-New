import { useEffect } from 'react';

function upsert(selector, createTag, setAttrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = createTag();
    document.head.appendChild(el);
  }
  setAttrs(el);
  return el;
}

export function useSEO({ title, description, canonical, og = {}, twitter = {}, jsonLd }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      upsert('meta[property="og:title"]', () => document.createElement('meta'), (el) => {
        el.setAttribute('property', 'og:title');
        el.setAttribute('content', title);
      });
      upsert('meta[name="twitter:title"]', () => document.createElement('meta'), (el) => {
        el.setAttribute('name', 'twitter:title');
        el.setAttribute('content', title);
      });
    }

    if (description) {
      upsert('meta[name="description"]', () => document.createElement('meta'), (el) => {
        el.setAttribute('name', 'description');
        el.setAttribute('content', description);
      });
      upsert('meta[property="og:description"]', () => document.createElement('meta'), (el) => {
        el.setAttribute('property', 'og:description');
        el.setAttribute('content', description);
      });
      upsert('meta[name="twitter:description"]', () => document.createElement('meta'), (el) => {
        el.setAttribute('name', 'twitter:description');
        el.setAttribute('content', description);
      });
    }

    if (canonical) {
      upsert('link[rel="canonical"]', () => {
        const l = document.createElement('link');
        l.setAttribute('rel', 'canonical');
        return l;
      }, (el) => {
        el.setAttribute('href', canonical);
      });
      upsert('meta[property="og:url"]', () => document.createElement('meta'), (el) => {
        el.setAttribute('property', 'og:url');
        el.setAttribute('content', canonical);
      });
    }

    if (og.image) {
      upsert('meta[property="og:image"]', () => document.createElement('meta'), (el) => {
        el.setAttribute('property', 'og:image');
        el.setAttribute('content', og.image);
      });
    }
    if (og.type) {
      upsert('meta[property="og:type"]', () => document.createElement('meta'), (el) => {
        el.setAttribute('property', 'og:type');
        el.setAttribute('content', og.type);
      });
    }

    if (twitter.card) {
      upsert('meta[name="twitter:card"]', () => document.createElement('meta'), (el) => {
        el.setAttribute('name', 'twitter:card');
        el.setAttribute('content', twitter.card);
      });
    }
    if (twitter.image) {
      upsert('meta[name="twitter:image"]', () => document.createElement('meta'), (el) => {
        el.setAttribute('name', 'twitter:image');
        el.setAttribute('content', twitter.image);
      });
    }

    // JSON-LD
    if (jsonLd) {
      const id = 'ld-json-primary';
      let script = document.head.querySelector(`#${id}`);
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, og.image, og.type, twitter.card, twitter.image, jsonLd]);
}

