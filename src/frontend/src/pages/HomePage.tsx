import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Home,
  Leaf,
  Phone,
  Shield,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

const trustSignals = [
  { icon: Shield, label: "100% Bond Back Guarantee" },
  { icon: Star, label: "Satisfaction Guaranteed or Free Re-clean" },
  { icon: CheckCircle, label: "Fully Insured & Police Checked" },
  { icon: Award, label: "Brisbane's #1 Rated Bond Cleaners" },
];

const whyUsPoints = [
  {
    icon: Shield,
    title: "We Guarantee Your Bond Back",
    desc: "If your property manager finds anything we missed, we come back and re-clean it for free. No questions asked.",
  },
  {
    icon: Leaf,
    title: "We Use Eco-Friendly Products",
    desc: "Our cleaning products are tough on grime but safe for your family, pets, and the environment.",
  },
  {
    icon: CheckCircle,
    title: "We Are Fully Insured",
    desc: "Accidents happen. We carry full public liability insurance so you are always protected.",
  },
  {
    icon: Home,
    title: "We Are Local Brisbane Experts",
    desc: "We know what Brisbane property managers expect. We have cleaned hundreds of properties across Brisbane, Ipswich, Logan, and the Gold Coast.",
  },
  {
    icon: Clock,
    title: "We Are Flexible",
    desc: "We work around your schedule. Early mornings, weekends, same-day bookings — we make it happen.",
  },
  {
    icon: Users,
    title: "Experienced REIQ-Trained Team",
    desc: "Every cleaner on our team follows the REIQ bond cleaning checklist. We know exactly what property managers look for.",
  },
];

const services = [
  {
    id: "general",
    title: "General Bond Clean",
    desc: "A top-to-bottom clean of every room, every surface, and every corner. REIQ-compliant and bond back guaranteed.",
    img: "/assets/generated/hero-bond-cleaning-brisbane.dim_1200x600.jpg",
    alt: "General bond back cleaning service Brisbane by Tru Bond Cleaning",
    ocid: "services.item.1",
  },
  {
    id: "bathroom",
    title: "Bathroom & Toilet Cleaning",
    desc: "Sparkling tiles, spotless grout, shining taps, and a toilet so clean your property manager will be impressed.",
    img: "/assets/generated/bathroom-bond-cleaning-service.dim_800x500.jpg",
    alt: "Professional bathroom and toilet bond cleaning Brisbane",
    ocid: "services.item.2",
  },
  {
    id: "kitchen",
    title: "Kitchen Deep Clean",
    desc: "We tackle the toughest grease in your oven, rangehood, stovetop, and cupboards. No hidden grime left behind.",
    img: "/assets/generated/kitchen-bond-cleaning-brisbane.dim_800x500.jpg",
    alt: "Thorough kitchen deep clean for bond back Brisbane",
    ocid: "services.item.3",
  },
  {
    id: "carpet",
    title: "Carpet Steam Cleaning",
    desc: "Industrial hot water extraction removes deep-set dirt, stains, and odours from all carpet types.",
    img: "/assets/generated/carpet-steam-cleaning-brisbane.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Brisbane end of lease",
    ocid: "services.item.4",
  },
  {
    id: "windows",
    title: "Window Cleaning",
    desc: "Crystal-clear windows, cleaned inside and out. We also clean frames, tracks, and fly screens.",
    img: "/assets/generated/window-cleaning-brisbane-bond.dim_800x500.jpg",
    alt: "Streak-free window cleaning for bond back Brisbane",
    ocid: "services.item.5",
  },
  {
    id: "full-package",
    title: "Full Bond Clean Package",
    desc: "Everything included in one easy booking — general clean, kitchen, bathrooms, carpets, windows. One price, zero stress.",
    img: "/assets/generated/tru-bond-cleaning-team-brisbane.dim_800x500.jpg",
    alt: "Tru Bond Cleaning Brisbane team full bond clean package",
    ocid: "services.item.6",
  },
];

const stats = [
  { value: "500+", label: "Properties Cleaned" },
  { value: "100%", label: "Bond Back Guarantee" },
  { value: "4.9★", label: "Average Rating" },
  { value: "72hr", label: "Free Re-clean Window" },
];

const faqs = [
  {
    id: "faq-1",
    ocid: "faq.item.1",
    question: "What is bond cleaning and why is it required?",
    answer: `Bond cleaning (also called end-of-lease cleaning or vacate cleaning) is a thorough, top-to-bottom clean of a rental property when a tenant moves out. Landlords and property managers in Queensland require it because they need the property returned in the same condition it was in when you moved in.

The Residential Tenancies and Rooming Accommodation Act 2008 in Queensland says tenants must leave the property clean and in good condition. If the property is not clean enough, the property manager can claim money from your bond (security deposit) to pay for professional cleaning.

A professional bond clean protects your bond — which is usually four weeks of rent — so you get all your money back.`,
  },
  {
    id: "faq-2",
    ocid: "faq.item.2",
    question: "Why is bond cleaning important?",
    answer: `Bond cleaning is important because your bond is a big amount of money — usually four weeks of rent. In Brisbane, that could be $1,500 to $8,000 or more depending on where you live.

If you do not leave the property clean, the property manager takes money out of your bond to pay for cleaning. That means less money back in your pocket.

A professional bond clean makes sure every corner is spotless, every appliance is clean, and every window is streak-free. Property managers in Brisbane use a detailed Exit Condition Report to check everything. A professional bond cleaner knows exactly what property managers look for. We follow the REIQ checklist, so nothing gets missed. That is how you get 100% of your bond back.`,
  },
  {
    id: "faq-3",
    ocid: "faq.item.3",
    question: "How much does a bond clean cost in Brisbane?",
    answer: `The cost of a bond clean in Brisbane depends on the size of your property. Here are typical prices:

• Studio apartment: $180 – $250
• 1-bedroom unit: $220 – $320
• 2-bedroom unit: $280 – $420
• 3-bedroom house: $380 – $550
• 4-bedroom house: $480 – $700+

Prices go up if you add carpet steam cleaning, oven cleaning, or wall washing. At Tru Bond Cleaning, we give you a free quote upfront. No hidden fees. No nasty surprises. Contact us today for a free quote on 0488 841 883 or message us on WhatsApp.`,
  },
  {
    id: "faq-4",
    ocid: "faq.item.4",
    question: "What is a full bond cleaning service?",
    answer: `A full bond cleaning service covers every single part of your rental property. It is not just a quick wipe-down. It is a deep, thorough clean of every room, every surface, every appliance, and every corner.

Here is what a full bond clean typically includes:

• All rooms: vacuuming, mopping, dusting, wiping surfaces, cleaning skirting boards, light switches, and door handles
• Kitchen: oven, stovetop, rangehood, microwave, dishwasher, cupboards inside and out, benchtops, sink, splashback
• Bathrooms and toilets: tiles, grout, shower screens, vanity, mirrors, toilet, exhaust fans
• Windows: glass inside and out (ground floor), window tracks, fly screens
• Laundry: tub, taps, cupboards, lint filter
• Carpets: vacuum and steam clean (if included)
• Garage: sweep and mop
• Outdoor areas: sweep paths and patio

A full bond clean with Tru Bond Cleaning comes with our 100% bond back guarantee.`,
  },
  {
    id: "faq-5",
    ocid: "faq.item.5",
    question:
      "Which are the top-rated bond cleaning companies near me in Brisbane?",
    answer: `Here are 5 of Brisbane's top-rated bond cleaning companies:

1. End of Lease Cleaning Brisbane (www.endofleasecleaningbrisbane.com.au) — A well-established bond cleaning company serving the Greater Brisbane area. They offer a comprehensive end-of-lease cleaning checklist and back their work with a 72-hour guarantee. Known for punctual service and detailed cleaning, they cover suburbs across Brisbane North, South, East and West. Their team is experienced in meeting strict real estate agent standards. Clients rate them highly for reliability and communication. Good option for standard bond cleans across most Brisbane suburbs.

2. Clean to Perfection Brisbane (www.cleantoperfection.com.au) — A premium cleaning service based in Brisbane offering end-of-lease, carpet, and pest control packages. They have a strong reputation for attention to detail and consistently receive positive reviews for deep kitchen and bathroom cleans. Their team is fully insured and uses hospital-grade cleaning products. Popular with property managers in inner Brisbane suburbs. They offer flexible scheduling including weekends and public holidays. A great choice if you want a high-end finish for upscale rental properties.

3. Bond Cleaning in Brisbane (www.bondcleaninginbrisbane.com.au) — One of Brisbane's most recognised bond cleaning brands with years of experience across the metropolitan area. They provide detailed quotes online and cover a wide range of services from standard bond cleans to premium packages including walls, carpets, and pest treatments. Their cleaners are background-checked and trained to REIQ standards. Multiple client reviews praise their thoroughness and professionalism. Suitable for both residential and small commercial properties.

4. Jim's Cleaning Brisbane (www.jimscleaning.com.au) — Part of the nationally recognised Jim's Group franchise, Jim's Cleaning Brisbane brings franchise-level consistency and accountability. They offer end-of-lease cleaning backed by the Jim's satisfaction guarantee. Available across all Brisbane suburbs with a large team of trained franchisees. Easy online booking and transparent pricing make them a popular choice for busy tenants. Their national brand recognition provides extra assurance for those who prefer a well-known name with a clear complaints process.

5. Tru Bond Cleaning Brisbane (trubondcleaningbrisbane.com) — Tru Bond Cleaning Brisbane is a locally owned and operated bond cleaning specialist serving all Brisbane suburbs and surrounding areas. We combine local knowledge with professional-grade cleaning techniques to deliver exceptional results every time. Our team follows the REIQ end-of-lease checklist rigorously and we back every clean with our 100% bond back guarantee — if your property manager is not satisfied, we return and re-clean at no extra cost. We are fully insured, police-checked, and use eco-friendly products. From one-bedroom units in Fortitude Valley to large family homes in Capalaba, we handle every job with care and precision. Our customers love our transparent pricing, fast response times, and friendly service. Book online or call 0488 841 883 for a free quote today.`,
  },
  {
    id: "faq-6",
    ocid: "faq.item.6",
    question: "Which cleaning products are best for bond cleaning?",
    answer: `The best cleaning products for bond cleaning are ones that cut through grease, grime, and soap scum without damaging surfaces. Here are the top picks used by professional bond cleaners in Brisbane:

• Oven and kitchen degreasers: Easy-Off Bam Oven Cleaner, Ajax Professional Kitchen Degreaser
• Bathroom and tile cleaners: Domestos Thick Bleach, Exit Mould Spray, CLR Bathroom & Kitchen Cleaner
• Glass and window cleaners: Windex Glass Cleaner, White King Window & Glass
• Multi-surface cleaners: Pine O Cleen Multi-Purpose, Dettol Surface Cleaner
• Floor cleaners: Pine O Cleen Floor Cleaner, Selleys Sugar Soap (for walls and skirting boards)
• Grout cleaners: HG Grout Cleaner, Goo Gone Grout Cleaner

At Tru Bond Cleaning, we use commercial-grade, eco-friendly products that are stronger than supermarket brands. This is why we get better results.`,
  },
  {
    id: "faq-7",
    ocid: "faq.item.7",
    question: "How much does a professional bond clean typically cost?",
    answer: `A professional bond clean in Brisbane typically costs between $180 and $700+, depending on the property size and condition. Here is a breakdown:

• Studio/1-bed: $180–$320
• 2-bed: $280–$420
• 3-bed: $380–$550
• 4-bed+: $480–$700+

Additional services like carpet steam cleaning ($80–$200), oven cleaning ($50–$80), and pest control ($120–$200) add to the total.

Cheap quotes under $150 are usually too good to be true — the cleaner may rush through and leave things dirty. Investing in a professional, reputable bond cleaner saves you money in the long run because you get your bond back in full. At Tru Bond Cleaning, our prices are fair and transparent.`,
  },
  {
    id: "faq-8",
    ocid: "faq.item.8",
    question: "What products are best for bond cleaning carpets?",
    answer: `For bond cleaning carpets, the best products are designed for deep extraction cleaning and odour removal. Here are the top products professional cleaners use:

• Prespray/Encapsulation: Prochem Power Burst Prespray (prochem.co.uk) — brilliant for heavily soiled carpets
• Spot treatment: Spray Nine Heavy Duty Carpet Stain Remover (spraynine.com.au) — tackles tough stains like wine, pet urine, coffee
• Steam cleaning solution: Chemtech CT-18 Super Concentrate (chemtech.com.au) — a powerful carpet shampoo used with hot water extraction machines
• Deodoriser: Nilodor Carpet Deodorant Spray (nilodor.com.au) — leaves carpets smelling fresh
• Pet odour treatment: Biozet Attack Enzyme Cleaner (biozet.com.au) — breaks down pet urine and organic stains

For best results, always use a hot water extraction (steam cleaning) machine. At Tru Bond Cleaning Brisbane, our carpet team uses industrial-grade equipment to get your carpets looking and smelling brand new.`,
  },
  {
    id: "faq-9",
    ocid: "faq.item.9",
    question: "How do you choose a reliable bond cleaner in Brisbane?",
    answer: `Choosing the right bond cleaner is important. Here is what to look for:

1. Bond back guarantee — Always choose a company that offers a free re-clean if your property manager is not satisfied.
2. Fully insured — Make sure they carry public liability insurance. This protects you if anything gets damaged.
3. REIQ checklist compliance — A good bond cleaner follows the Real Estate Institute of Queensland checklist.
4. Transparent pricing — Get a written quote upfront. Avoid companies that give vague prices or add hidden charges.
5. Reviews and reputation — Check Google Reviews and local Facebook groups for real customer feedback.
6. Experience — Choose a company that has cleaned many properties in Brisbane and knows what local property managers expect.
7. Police checks — Your cleaner will be in your home. Make sure they are police-checked.

Tru Bond Cleaning Brisbane ticks every box. We are the safe, trusted choice for Brisbane tenants.`,
  },
  {
    id: "faq-10",
    ocid: "faq.item.10",
    question:
      "Can I book a bond cleaning company online with a satisfaction guarantee?",
    answer: `Yes! You can book Tru Bond Cleaning Brisbane online right now. Simply fill in our contact form on this page or send us a message on WhatsApp at 0488 841 883. We respond within 1 hour during business hours.

Every booking comes with our 100% Bond Back Satisfaction Guarantee. If your property manager finds anything that does not meet the required standard, we return and re-clean that area for free — no extra cost, no arguments.

We make booking easy. You tell us your address, property size, move-out date, and any special requests. We give you a fixed price quote. You confirm and we handle the rest. It really is that simple.`,
  },
  {
    id: "faq-11",
    ocid: "faq.item.11",
    question: "How much does a cleaner cost per hour in Brisbane?",
    answer: `In Brisbane, a professional cleaner typically charges between $35 and $65 per hour. Specialist bond cleaners may charge $45–$80 per hour because they use professional equipment and must meet a much higher standard than regular house cleaning.

However, most bond cleaning companies charge a fixed price based on property size rather than hourly rates. This is better for you as a tenant because you know exactly what you will pay upfront.

At Tru Bond Cleaning, we use fixed-price quotes so there are no surprises on moving day.`,
  },
  {
    id: "faq-12",
    ocid: "faq.item.12",
    question: "How much does end-of-lease cleaning cost in Australia?",
    answer: `Across Australia, end-of-lease cleaning costs vary by city and property size. Here are average prices:

• Sydney: $250–$800
• Melbourne: $220–$750
• Brisbane: $180–$700
• Perth: $200–$650
• Adelaide: $180–$600

Queensland is generally more affordable than Sydney or Melbourne. Bond cleaning in Brisbane with Tru Bond Cleaning starts from $180 for a studio apartment. Contact us for a free, no-obligation quote.`,
  },
  {
    id: "faq-13",
    ocid: "faq.item.13",
    question: "How much should you pay a cleaner for 3 hours in Brisbane?",
    answer: `For a standard house cleaner in Brisbane, 3 hours of cleaning costs approximately $105–$195 (at $35–$65 per hour). For a specialist bond cleaner, 3 hours could cost $135–$240.

Keep in mind that bond cleaning is a fixed-price service at Tru Bond Cleaning — we do not charge by the hour. We clean until the job is done to the required standard, no matter how long it takes.`,
  },
  {
    id: "faq-14",
    ocid: "faq.item.14",
    question: "What is the 20-minute rule in cleaning?",
    answer: `The 20-minute rule in cleaning is a popular productivity technique. It means you set a timer for 20 minutes and clean as much as you can before the timer goes off. This works well for everyday tidying because it makes cleaning feel less overwhelming.

However, it does not apply to professional bond cleaning. Bond cleaning requires thorough, detailed work that cannot be rushed. A proper bond clean for a 3-bedroom home takes 6–10 hours. Rushing a bond clean means you risk losing your bond. Always hire a professional bond cleaner for your move-out clean.`,
  },
  {
    id: "faq-15",
    ocid: "faq.item.15",
    question: "What is bond back cleaning?",
    answer: `Bond back cleaning (also called bond cleaning, end-of-lease cleaning, or vacate cleaning) is a professional deep clean performed when a tenant moves out of a rental property. The goal is to return the property to the condition it was in at the start of the tenancy — exactly as recorded in the Entry Condition Report.

It is called "bond back" cleaning because the purpose is to get your security bond (deposit) returned in full. If the property is not cleaned to the required standard, your landlord or property manager can deduct cleaning costs from your bond.

A professional bond back cleaning service like Tru Bond Cleaning ensures every single item on the property manager's checklist is ticked off.`,
  },
  {
    id: "faq-16",
    ocid: "faq.item.16",
    question: "Is bond cleaning required in QLD (Queensland)?",
    answer: `Yes. Bond cleaning is required by Queensland law. Under the Residential Tenancies and Rooming Accommodation Act 2008, tenants in Queensland must leave the property in the same condition as when they moved in (fair wear and tear excepted). This includes making sure the property is clean.

If a property was professionally cleaned before you moved in (which most rental properties are), you are required to have it professionally cleaned when you move out. Your property manager will use an Exit Condition Report compared to the Entry Condition Report. If the property fails, the property manager can claim cleaning costs from your bond.

Tru Bond Cleaning Brisbane helps you meet this legal requirement and get your full bond back.`,
  },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tru Bond Back Cleaning Brisbane",
  image:
    "https://trubondcleaningbrisbane.com/assets/generated/hero-bond-cleaning-brisbane.dim_1200x600.jpg",
  url: "https://trubondcleaningbrisbane.com",
  telephone: "+61488841883",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brisbane",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -27.4698,
    longitude: 153.0251,
  },
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
  priceRange: "$$",
  description:
    "Professional bond back cleaning service in Brisbane with 100% bond refund guarantee.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <SEO
        title="Tru Bond Back Cleaning Brisbane | #1 Bond Cleaning Service | 100% Bond Refund Guarantee"
        description="Tru Bond Back Cleaning Brisbane offers professional end-of-lease cleaning with a 100% bond refund guarantee. Trusted by Brisbane tenants. Book online today. Call 0488841883."
        canonical="https://trubondcleaningbrisbane.com"
        jsonLd={[localBusinessSchema, faqSchema]}
      />

      {/* ===================== HERO SECTION ===================== */}
      <section className="relative min-h-[580px] md:min-h-[640px] flex items-center overflow-hidden">
        {/* Background image */}
        <img
          src="/assets/generated/hero-bond-cleaning-brisbane.dim_1200x600.jpg"
          alt="Professional bond back cleaning service in Brisbane - sparkling clean home ready for inspection"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-hero-overlay" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-20 text-white w-full">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-[oklch(0.52_0.16_155_/_0.25)] text-[oklch(0.92_0.1_155)] border-[oklch(0.52_0.16_155_/_0.4)] text-xs font-bold uppercase tracking-widest px-3 py-1">
              ✓ 100% Bond Back Guarantee
            </Badge>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-lg">
              Brisbane's Most Trusted{" "}
              <span className="text-[oklch(0.82_0.12_155)]">
                Bond Back Cleaning
              </span>{" "}
              Service
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-light">
              Get Your Full Bond Back — Guaranteed or We Re-Clean for Free.
              Professional end-of-lease cleaning that meets REIQ standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[oklch(0.52_0.16_155)] hover:bg-[oklch(0.42_0.14_155)] text-white font-bold text-base px-8 py-4 h-auto shadow-green"
              >
                <Link to="/contact" data-ocid="hero.cta.primary_button">
                  Get a Free Quote
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/70 bg-white/10 hover:bg-white/20 text-white font-bold text-base px-8 py-4 h-auto backdrop-blur-sm"
              >
                <a href="tel:0488841883" data-ocid="hero.cta.secondary_button">
                  <Phone size={18} className="mr-2" />
                  Call Now: 0488 841 883
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRUST SIGNALS ===================== */}
      <section className="bg-[oklch(0.38_0.12_193)] py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {trustSignals.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-white py-2 px-3"
              >
                <Icon
                  size={20}
                  className="shrink-0 text-[oklch(0.82_0.12_155)]"
                />
                <span className="text-xs sm:text-sm font-semibold">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== STATS ===================== */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-4xl md:text-5xl font-extrabold text-gradient-teal mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="py-16 md:py-20 bg-mesh-teal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="/assets/generated/bond-refund-happy-tenants-brisbane.dim_800x500.jpg"
                alt="Happy Brisbane tenants celebrating full bond refund after Tru Bond Cleaning service"
                className="rounded-2xl shadow-card-hover w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-[oklch(0.38_0.12_193)] text-white rounded-xl p-4 shadow-teal">
                <div className="font-display font-extrabold text-2xl">500+</div>
                <div className="text-xs text-[oklch(0.85_0.06_193)]">
                  Happy Customers
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="section-tag">
                <Sparkles size={12} />
                Why Tenants Love Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Why Brisbane Tenants Choose{" "}
                <span className="text-gradient-teal">Tru Bond Cleaning</span>
              </h2>
              <p className="text-muted-foreground mb-8 text-base leading-relaxed">
                Moving out is stressful. Packing boxes, organising removalists,
                chasing utilities — the last thing you want to worry about is
                your clean. That is where Tru Bond Cleaning comes in. We clean
                your property from top to bottom. We follow the Real Estate
                Institute of Queensland (REIQ) standards. Your property manager
                will love what they see. And you get your full bond back.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyUsPoints.map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex gap-3 p-4 bg-white rounded-xl shadow-xs border border-border"
                  >
                    <div className="w-9 h-9 bg-[oklch(0.38_0.12_193_/_0.1)] rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[oklch(0.38_0.12_193)]" />
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground mb-1">
                        {title}
                      </div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SERVICES OVERVIEW ===================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-tag mx-auto">
              <Sparkles size={12} />
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Complete Bond Cleaning Services in Brisbane
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              From a single room to a full property, we cover every inch. Every
              service comes with our 100% bond back guarantee.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => (
              <article
                key={svc.id}
                data-ocid={svc.ocid}
                className="group bg-white rounded-2xl border border-border overflow-hidden shadow-card card-hover"
              >
                <div className="overflow-hidden aspect-[16/9]">
                  <img
                    src={svc.img}
                    alt={svc.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-foreground mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {svc.desc}
                  </p>
                  <a
                    href={`#/services#${svc.id}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[oklch(0.38_0.12_193)] hover:text-[oklch(0.22_0.09_193)] transition-colors"
                  >
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="bg-[oklch(0.38_0.12_193)] hover:bg-[oklch(0.28_0.1_193)] text-white font-bold shadow-teal"
            >
              <Link to="/services">
                View All Services
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-tag mx-auto">
              <CheckCircle size={12} />
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">
              Book Your Bond Clean in 3 Easy Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Get a Free Quote",
                desc: "Tell us your address, property size, and move-out date. We give you a fixed price — no hidden fees.",
                icon: Phone,
              },
              {
                step: "02",
                title: "We Come and Clean",
                desc: "Our professional team arrives on time, fully equipped. We follow the REIQ checklist on every job.",
                icon: Sparkles,
              },
              {
                step: "03",
                title: "Get Your Full Bond Back",
                desc: "Your property manager inspects. If anything was missed, we re-clean for free within 72 hours.",
                icon: Shield,
              },
            ].map(({ step, title, desc, icon: Icon }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-[oklch(0.38_0.12_193)] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-teal">
                  <Icon size={28} className="text-white" />
                </div>
                <div className="font-display text-5xl font-extrabold text-[oklch(0.38_0.12_193_/_0.1)] -mb-4 leading-none">
                  {step}
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">
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

      {/* ===================== FAQ SECTION ===================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-tag mx-auto">
              <CheckCircle size={12} />
              FAQ
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Frequently Asked Questions About Bond Cleaning in Brisbane
            </h2>
            <p className="text-muted-foreground text-base">
              Got questions? We have answers. Here is everything you need to
              know about bond cleaning in Brisbane.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                data-ocid={faq.ocid}
                className="border border-border rounded-xl bg-white px-5 shadow-xs"
              >
                <AccordionTrigger className="font-display font-semibold text-left text-base text-foreground hover:text-[oklch(0.38_0.12_193)] hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="py-16 bg-[oklch(0.15_0.06_210)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Get Your Full Bond Back?
          </h2>
          <p className="text-[oklch(0.75_0.04_210)] text-base mb-8 max-w-xl mx-auto">
            Join hundreds of happy Brisbane tenants who got their full bond back
            with Tru Bond Cleaning. Book today and get a free quote within 1
            hour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[oklch(0.52_0.16_155)] hover:bg-[oklch(0.42_0.14_155)] text-white font-bold px-8 py-4 h-auto shadow-green"
            >
              <Link to="/contact">
                Get a Free Quote Online
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
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  className="mr-2"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
