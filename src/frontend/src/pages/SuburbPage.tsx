import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, type LucideIcon, Phone } from "lucide-react";

export interface SuburbBenefit {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface SuburbContentBlock {
  heading: string;
  body: string;
}

export interface SuburbConfig {
  name: string;
  slug: string;
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  heroHeading: string;
  heroSubtext: string;
  content: SuburbContentBlock[];
  benefits: SuburbBenefit[];
  checklist: string[];
}

interface SuburbPageProps {
  suburb: SuburbConfig;
}

const localBusinessSchema = (suburb: SuburbConfig) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Cleaning Brisbane",
  url: suburb.canonical,
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: suburb.name,
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  description: suburb.description,
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "06:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
});

export default function SuburbPage({ suburb }: SuburbPageProps) {
  return (
    <>
      <SEO
        title={suburb.title}
        description={suburb.description}
        keywords={suburb.keywords}
        canonical={suburb.canonical}
        ogImage="/assets/generated/hero-bond-cleaning-brisbane.dim_1200x600.jpg"
        ogType="website"
        jsonLd={[localBusinessSchema(suburb)]}
      />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[420px] md:min-h-[480px] flex items-center overflow-hidden">
        <img
          src="/assets/generated/hero-bond-cleaning-brisbane.dim_1200x600.jpg"
          alt={`Professional bond cleaning in ${suburb.name} Brisbane by Tru Bond Cleaning`}
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-14 text-white w-full">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/70">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors"
                  data-ocid="suburb.breadcrumb.link"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90 font-medium">{suburb.name}</li>
            </ol>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
            {suburb.heroHeading}
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-xl leading-relaxed">
            {suburb.heroSubtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[oklch(0.52_0.16_155)] hover:bg-[oklch(0.42_0.14_155)] text-white font-bold px-8 py-4 h-auto shadow-lg"
            >
              <Link to="/contact" data-ocid="suburb.hero.primary_button">
                Get a Free Quote
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/70 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 h-auto backdrop-blur-sm"
            >
              <a href="tel:0488841883" data-ocid="suburb.hero.secondary_button">
                <Phone size={18} className="mr-2" />
                Call 0488 841 883
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-[oklch(0.38_0.12_193)] py-3">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white text-sm font-semibold">
            {[
              "✓ 100% Bond Back Guarantee",
              "✓ Free Re-clean within 72 hrs",
              "✓ Fully Insured",
              "✓ REIQ Checklist",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT SECTION ===== */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="space-y-8">
            {suburb.content.map((block) => (
              <article key={block.heading}>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {block.heading}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {block.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-14 bg-[oklch(0.92_0.04_210)]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-tag mx-auto">
              <CheckCircle size={12} />
              Why Choose Us
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
              Why Choose Tru Bond Cleaning in {suburb.name}?
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {suburb.benefits.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-[oklch(0.88_0.02_210)] text-center card-hover"
              >
                <div className="w-12 h-12 bg-[oklch(0.38_0.12_193_/_0.1)] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-[oklch(0.38_0.12_193)]" />
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CHECKLIST SECTION ===== */}
      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-tag mx-auto">
              <CheckCircle size={12} />
              What's Included
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground">
              Our Bond Clean Checklist for {suburb.name}
            </h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-xl mx-auto">
              Every job follows the REIQ end-of-lease checklist. Here is what we
              cover.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {suburb.checklist.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-3 rounded-xl bg-[oklch(0.98_0.005_200)] border border-[oklch(0.88_0.02_210)]"
              >
                <CheckCircle
                  size={18}
                  className="text-[oklch(0.52_0.16_155)] shrink-0 mt-0.5"
                />
                <span className="text-sm text-foreground leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="py-14 bg-[oklch(0.15_0.06_210)]">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4">
            Ready for a Spotless Clean in {suburb.name}?
          </h2>
          <p className="text-[oklch(0.75_0.04_210)] text-base mb-8 max-w-xl mx-auto">
            Book your bond clean today and get your full bond back. We respond
            within 1 hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[oklch(0.52_0.16_155)] hover:bg-[oklch(0.42_0.14_155)] text-white font-bold px-8 py-4 h-auto"
            >
              <Link to="/contact" data-ocid="suburb.cta.primary_button">
                Get a Free Quote
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 h-auto"
            >
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="suburb.cta.secondary_button"
              >
                WhatsApp Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
