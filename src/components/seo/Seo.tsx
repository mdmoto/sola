import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  SITE_URL,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildWebSiteSchema,
  geoKeywords,
} from "@/lib/geo";

const routeToSeoKey: Record<string, string> = {
  "/": "home",
  "/about": "about",
  "/services": "services",
  "/projects": "projects",
  "/pricing": "pricing",
  "/contact": "contact",
  "/careers": "careers",
};

function canonicalUrl(pathname: string) {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return `${SITE_URL}${normalized}`;
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
}

function upsertJsonLd(id: string, payload: unknown) {
  let element = document.getElementById(id) as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(payload);
}

function removeJsonLd(id: string) {
  document.getElementById(id)?.remove();
}

export default function Seo() {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const normalizedPathname = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
    const seoKey = routeToSeoKey[normalizedPathname] ?? "home";
    const title = t(`seo.pages.${seoKey}.title`);
    const description = t(`seo.pages.${seoKey}.description`);
    const url = canonicalUrl(normalizedPathname);
    const locale = i18n.language || "th";

    document.title = title;
    document.documentElement.lang = locale;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: geoKeywords.join(", "),
    });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: url });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: `${SITE_URL}/logo.png`,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: url });

    upsertJsonLd("jsonld-local-business", buildLocalBusinessSchema(description, url));
    upsertJsonLd("jsonld-website", buildWebSiteSchema(t("seo.defaultDescription")));
    upsertJsonLd("jsonld-breadcrumbs", buildBreadcrumbSchema(normalizedPathname, t(`nav.${seoKey}`)));

    if (normalizedPathname === "/services") {
      const faqs = t("services.faqs", { returnObjects: true }) as Array<{ q: string; a: string }>;
      upsertJsonLd("jsonld-faq", buildFaqSchema(faqs, url));
    } else {
      removeJsonLd("jsonld-faq");
    }
  }, [pathname, i18n.language, t]);

  return null;
}
