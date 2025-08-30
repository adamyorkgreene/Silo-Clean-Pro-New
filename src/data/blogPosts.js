// Simple, manual blog post registry. Add new entries at the top.
// For manual HTML posts, place files in `public/blog/<slug>.html` and set `href` accordingly.
export const blogPosts = [
  {
    slug: "pre-harvest-silo-cleaning-2025",
    title: "Get Ahead of Harvest: Late‑Summer Silo Cleaning",
    date: "2025-08-29",
    author: "Silo Clean Pro Team",
    href: "/blog/pre-harvest-silo-cleaning-2025.html",
    image: "/blog/images/harvest_at_sunset.png",
    imageAlt: "Inside a grain silo prepared for harvest",
  },
  {
    slug: "sika-silo-sealant-launch",
    title: "Sika Launches Next‑Gen Silo Sealant",
    date: "2025-05-16",
    author: "Silo Clean Pro Team",
    href: "/blog/sika-silo-sealant-launch.html",
    image: "/blog/images/sika.jpg",
    imageAlt: "Blue glass‑fused steel tank with crane at a facility",
  },
  {
    slug: "why-professional-silo-cleaner",
    title: "Why You Need a Professional Silo Cleaner",
    date: "2025-05-20",
    author: "Silo Clean Pro Team",
    href: "/blog/why-professional-silo-cleaner.html",
    image: "/blog/images/pro-silo-cleaner.png",
    imageAlt: "Technician with safety gear working atop a silo",
  },
  {
    slug: "grain-bin-sanitation-basics",
    title: "Grain Bin Sanitation: The Basics",
    date: "2024-12-02",
    author: "Silo Clean Pro Team",
    href: "/blog/grain-bin-sanitation-basics.html",
    image: "/blog/images/silo-contents.jpg",
    imageAlt: "The removed contents of a grain bin"
  },
  {
    slug: "inspection-checkpoints",
    title: "Top 7 Silo Inspection Checkpoints",
    date: "2024-09-14",
    author: "Silo Clean Pro Team",
    href: "/blog/inspection-checkpoints.html",
  },
];

export function getSortedPosts() {
  // Newest first
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
