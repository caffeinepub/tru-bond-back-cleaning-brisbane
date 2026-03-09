import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  Leaf,
  MapPin,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    desc: "We stand behind every clean. If your property manager finds anything we missed, we come back and re-clean it for free within 72 hours. No arguments. No extra cost.",
  },
  {
    icon: CheckCircle,
    title: "REIQ Checklist Compliance",
    desc: "We follow the Real Estate Institute of Queensland bond cleaning checklist on every single job. This is the same checklist property managers use during exit inspections.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use commercial-grade, eco-friendly cleaning products. They are tougher than supermarket products but safe for your family, pets, and the Queensland environment.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    desc: "We carry full public liability insurance on every job. You are always protected if anything goes wrong. Peace of mind comes standard.",
  },
  {
    icon: Users,
    title: "Police Checked Team",
    desc: "Every member of our cleaning team is police-checked. You can trust us in your home with absolute confidence.",
  },
  {
    icon: Star,
    title: "Local Brisbane Experts",
    desc: "We are not a franchise. We are a local Brisbane team. We know exactly what Brisbane property managers look for, and we deliver it every time.",
  },
];

const serviceAreas = [
  "Brisbane CBD",
  "Fortitude Valley",
  "South Brisbane",
  "West End",
  "Paddington",
  "Newstead",
  "Chermside",
  "Carindale",
  "Capalaba",
  "Redland Bay",
  "Logan",
  "Ipswich",
  "North Lakes",
  "Springfield",
  "Sunnybank",
  "Mount Gravatt",
  "Indooroopilly",
  "Toowong",
  "Greenslopes",
  "Coorparoo",
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Tru Bond Cleaning Brisbane | Local Bond Cleaning Experts | REIQ Compliant"
        description="Learn about Tru Bond Cleaning Brisbane — your local bond back cleaning specialists. Fully insured, police-checked, and backed by a 100% bond refund guarantee. Serving all Brisbane suburbs."
        keywords="about Tru Bond Cleaning Brisbane, local bond cleaners Brisbane, REIQ bond cleaning Brisbane, fully insured bond cleaners Brisbane"
        canonical="https://trubondcleaningbrisbane.com/about"
        ogImage="/assets/generated/tru-bond-cleaning-team-brisbane.dim_800x500.jpg"
      />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-[oklch(0.15_0.06_210)] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="/assets/generated/tru-bond-cleaning-team-brisbane.dim_800x500.jpg"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-white text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-[oklch(0.52_0.16_155_/_0.2)] text-[oklch(0.82_0.1_155)]">
            <Sparkles size={12} />
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            About Tru Bond Cleaning Brisbane
          </h1>
          <p className="text-[oklch(0.75_0.04_210)] text-lg max-w-2xl mx-auto">
            We are a locally owned and operated bond cleaning team. We are
            passionate about helping Brisbane tenants get their full bond back.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/assets/generated/tru-bond-cleaning-team-brisbane.dim_800x500.jpg"
                alt="The Tru Bond Cleaning Brisbane team - your local bond cleaning experts"
                className="rounded-2xl shadow-card-hover w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <span className="section-tag">
                <Sparkles size={12} />
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                We Started Because Brisbane Tenants Deserved Better
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  We started Tru Bond Cleaning Brisbane because we saw how
                  stressful moving out was for Brisbane tenants. We saw people
                  lose hundreds — sometimes thousands — of dollars from their
                  bond because of cleaning issues that a professional team could
                  have sorted in a single day. We decided to do something about
                  it.
                </p>
                <p>
                  Tru Bond Cleaning Brisbane is a locally owned and operated
                  bond cleaning company. We are not a franchise. We are not a
                  big corporate outfit. We are a local Brisbane team that is
                  passionate about helping tenants get their bond back.
                </p>
                <p>
                  Every job we take on, we treat like it is our own home. We do
                  not cut corners. We do not rush jobs. We do not leave until
                  the job is done right.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-[oklch(0.38_0.12_193)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/15 text-[oklch(0.92_0.06_193)]">
            <Shield size={12} />
            Our Mission
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Clean Your Property to the Highest Standard
          </h2>
          <p className="text-[oklch(0.85_0.06_193)] text-lg leading-relaxed">
            Our mission is simple: We clean your property to the highest
            standard, so you get every dollar of your bond back. We do not cut
            corners. We do not rush jobs. We do not leave until the job is done
            right. We follow the REIQ bond cleaning checklist on every job — the
            same checklist your property manager uses. Nothing gets missed.
            Nothing gets rushed.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-mesh-teal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-tag mx-auto">
              <Sparkles size={12} />
              What Makes Us Different
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
              Our Commitment to You
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 shadow-card border border-border"
              >
                <div className="w-12 h-12 bg-[oklch(0.38_0.12_193_/_0.1)] rounded-xl flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[oklch(0.38_0.12_193)]" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
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

      {/* Why Not DIY */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-tag">
                <CheckCircle size={12} />
                The Professional Difference
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Why a Professional Bond Clean Beats DIY Every Time
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  Many tenants try to do their bond clean themselves. They spend
                  a whole weekend scrubbing, vacuuming, and mopping — and then
                  the property manager still finds things they missed. They lose
                  their bond anyway.
                </p>
                <p>
                  A professional bond clean is not just about working hard. It
                  is about knowing what to look for. Property managers in
                  Brisbane follow a detailed REIQ exit inspection checklist.
                  They check areas that most people never think to clean — grout
                  lines, exhaust fan covers, rangehood filters, window tracks,
                  the back of cupboards, the top of door frames.
                </p>
                <p>
                  Our team knows this checklist inside out. We clean everything
                  on it. That is why our customers get their bond back.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Professional equipment delivers superior results",
                  "We know exactly what property managers check",
                  "Commercial-grade products remove tough stains",
                  "Our 72-hour re-clean guarantee protects you",
                  "Fixed price — you know exactly what you pay",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <CheckCircle
                      size={16}
                      className="text-[oklch(0.52_0.16_155)] mt-0.5 shrink-0"
                    />
                    {point}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="/assets/generated/bond-refund-happy-tenants-brisbane.dim_800x500.jpg"
                alt="Happy Brisbane tenants getting their full bond refund back after professional bond cleaning"
                className="rounded-2xl shadow-card-hover w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="section-tag mx-auto">
              <MapPin size={12} />
              Where We Work
            </span>
            <h2 className="font-display text-3xl font-extrabold text-foreground">
              We Serve All Brisbane Suburbs
            </h2>
            <p className="text-muted-foreground mt-2 text-base max-w-xl mx-auto">
              From the CBD to the outer suburbs, we cover all of Greater
              Brisbane, Ipswich, Logan, and the Redlands.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-foreground/80 border border-border shadow-xs"
              >
                {area}
              </span>
            ))}
            <span className="px-4 py-2 bg-[oklch(0.38_0.12_193)] text-white rounded-full text-sm font-bold shadow-teal">
              + Many More Suburbs
            </span>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-[oklch(0.15_0.06_210)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Book With Confidence
          </h2>
          <p className="text-[oklch(0.75_0.04_210)] text-base mb-8 max-w-xl mx-auto">
            When you book with Tru Bond Cleaning Brisbane, you are booking with
            a team that stands behind its work. We have helped hundreds of
            Brisbane tenants get their full bond back. Let us help you too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[oklch(0.52_0.16_155)] hover:bg-[oklch(0.42_0.14_155)] text-white font-bold px-8 py-4 h-auto shadow-green"
            >
              <Link to="/contact">
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
              <a href="tel:0488841883">
                <Phone size={18} className="mr-2" />
                Call 0488 841 883
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
