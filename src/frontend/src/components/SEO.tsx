import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  jsonLd?: object[];
}

export default function SEO({
  title = "Tru Bond Back Cleaning Brisbane | #1 Bond Cleaning Service | 100% Bond Refund Guarantee",
  description = "Tru Bond Back Cleaning Brisbane offers professional end-of-lease cleaning with a 100% bond refund guarantee. Trusted by thousands of Brisbane tenants. Book online today. Call 0488841883.",
  keywords = "bond cleaning Brisbane, bond back cleaning Brisbane, end of lease cleaning Brisbane",
  canonical = "https://trubondcleaningbrisbane.com",
  ogImage = "/assets/generated/hero-bond-cleaning-brisbane.dim_1200x600.jpg",
  ogType = "website",
  noIndex = false,
  jsonLd = [],
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    if (noIndex) setMeta("robots", "noindex, nofollow");

    // OG
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", canonical, true);

    // Twitter
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:card", "summary_large_image");

    // Canonical
    let canonicalEl = document.querySelector(
      "link[rel='canonical']",
    ) as HTMLLinkElement;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.rel = "canonical";
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.href = canonical;
  }, [title, description, keywords, canonical, ogImage, ogType, noIndex]);

  // Inject JSON-LD structured data via useEffect to avoid dangerouslySetInnerHTML lint
  useEffect(() => {
    if (!jsonLd || jsonLd.length === 0) return;

    const scripts: HTMLScriptElement[] = [];
    for (const schema of jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      scripts.push(script);
    }

    return () => {
      for (const script of scripts) {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      }
    };
  }, [jsonLd]);

  return null;
}
