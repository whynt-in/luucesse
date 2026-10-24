import type { APIRoute } from "astro";

const paths = ["/", "/about/", "/services/", "/contact/"];

export const GET: APIRoute = ({ site, url }) => {
  const origin = site ?? new URL(url.origin);
  const xml = paths
    .map((path) => `  <url><loc>${new URL(path, origin).href}</loc></url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${xml}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
