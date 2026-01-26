import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

const DEFAULT_SEO = {
  title: "Airdev | The leading no-code and Bubble app development agency",
  description: "Airdev is the leader in no-code & Bubble app development. We help businesses launch software products in a fraction of the time & cost of traditional developers.",
  ogImage: "https://cdn.prod.website-files.com/62aa5d914f4516fb36155657/67d0d0f96ca8cee3b7cede0d_airdev%20ogimage.jpg",
};

export const useSEO = ({ title, description, ogImage }: SEOProps = {}) => {
  useEffect(() => {
    const finalTitle = title || DEFAULT_SEO.title;
    const finalDescription = description || DEFAULT_SEO.description;
    const finalOgImage = ogImage || DEFAULT_SEO.ogImage;

    // Set document title
    document.title = finalTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update description
    updateMetaTag("description", finalDescription);

    // Update Open Graph tags
    updateMetaTag("og:title", finalTitle, true);
    updateMetaTag("og:description", finalDescription, true);
    updateMetaTag("og:image", finalOgImage, true);
    updateMetaTag("og:type", "website", true);

    // Update Twitter tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", finalTitle);
    updateMetaTag("twitter:description", finalDescription);
    updateMetaTag("twitter:image", finalOgImage);
  }, [title, description, ogImage]);
};
