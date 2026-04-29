/** Strip tags for meta descriptions (Convex fields may contain HTML). */
export function stripHtmlToPlainText(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** Canonical site origin without trailing slash (OG URLs, metadataBase). */
export function resolveSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "https://www.airdev.co";
}

/** Absolute image URL for og:image / twitter:image. */
export function absolutizeImageUrl(
  siteOrigin: string,
  imageUrl: string | undefined
): string {
  const u = imageUrl?.trim();
  if (!u) return "";
  if (/^https?:\/\//i.test(u)) return u;
  const base = siteOrigin.replace(/\/$/, "");
  return u.startsWith("/") ? `${base}${u}` : `${base}/${u}`;
}

export function caseStudyMetaDescription(study: {
  thumbnailSummary?: string;
  heroSummary?: string;
}): string {
  const fromThumb = study.thumbnailSummary?.trim()
    ? stripHtmlToPlainText(study.thumbnailSummary)
    : "";
  const fromHero = study.heroSummary?.trim()
    ? stripHtmlToPlainText(study.heroSummary)
    : "";
  return (fromThumb || fromHero).slice(0, 320);
}
