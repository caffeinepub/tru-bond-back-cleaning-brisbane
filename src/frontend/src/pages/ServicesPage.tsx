import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle, Phone, Sparkles } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    id: "general",
    title: "General Bond Cleaning Brisbane — Complete End-of-Lease Clean",
    shortTitle: "General Bond Clean",
    img: "/assets/generated/hero-bond-cleaning-brisbane.dim_1200x600.jpg",
    alt: "General bond back cleaning service Brisbane by Tru Bond Cleaning",
    ocid: "services.item.1",
    includes: [
      "All rooms: vacuuming, mopping, dusting all surfaces",
      "Skirting boards, light switches, power points",
      "Door handles, door frames, ceiling fans",
      "Cobweb removal from ceilings and corners",
      "Air conditioning unit cleaning",
      "All windows cleaned from the inside",
    ],
    content: `Moving out of your Brisbane rental can be one of the most stressful times of your life. Between packing, organising movers, and switching utilities, the last thing you want is to worry about losing your bond because the property is not clean enough. That is exactly where Tru Bond Cleaning Brisbane steps in. Our general bond clean is the most comprehensive cleaning service available for tenants in Brisbane, and we back it with a 100% bond back guarantee.

Our general bond cleaning service covers every room and every surface in your rental property. We follow the Real Estate Institute of Queensland (REIQ) bond cleaning checklist to the letter. We know what Brisbane property managers and landlords look for during an exit inspection, and we make sure your property ticks every box.

In every room and living area, we vacuum all carpets and hard floors, mop all hard floors, dust and wipe all surfaces including benchtops, shelves, windowsills, and skirting boards. We clean all light switches and power points, wipe down door handles and door frames, clean ceiling fans and air conditioning units, remove cobwebs from ceilings and corners, and clean all windows from the inside.

In the kitchen, we deep clean the oven inside and out, scrub the stovetop and rangehood filters, clean the microwave inside and out, wipe down all kitchen cupboards and drawers inside and out, scrub the sink and taps, clean the dishwasher (if applicable), wipe the splashback, and sanitise all benchtops.

In the bathrooms and toilets, we scrub and sanitise the toilet bowl, seat, lid, and cistern, clean the shower screen, tiles, and grout, scrub the bathtub if present, wipe down the vanity and mirror, clean the exhaust fan, polish the taps and fixtures, and mop the floor.

We also clean the laundry, including the laundry tub, taps, cupboards, and lint filter. We sweep and mop the garage floor. We clean outdoor areas such as patios and balconies.

Every Tru Bond Clean comes with our satisfaction guarantee. If your property manager finds anything we missed, we return and re-clean it for free within 72 hours. No arguments, no extra cost, just results.

Book your general bond clean today. Call 0488 841 883 or message us on WhatsApp.`,
  },
  {
    id: "bathroom",
    title:
      "Bathroom and Toilet Bond Cleaning Brisbane — Spotless Results Every Time",
    shortTitle: "Bathroom & Toilet Cleaning",
    img: "/assets/generated/bathroom-bond-cleaning-service.dim_800x500.jpg",
    alt: "Professional bathroom and toilet bond cleaning Brisbane - Tru Bond Cleaning",
    ocid: "services.item.2",
    includes: [
      "Shower screen, tiles, and grout scrubbed spotless",
      "Toilet bowl, seat, lid, cistern, and base",
      "Vanity, mirror, and all surfaces polished",
      "Chrome taps and fixtures shined",
      "Exhaust fan and grille cleaned",
      "Floors mopped and skirting boards wiped",
    ],
    content: `The bathroom is one of the most scrutinised areas during any bond inspection in Brisbane. Property managers check every tile, every grout line, every tap fitting, and every corner. Soap scum, mould, hard water stains, and limescale build up over months and years of use — and a regular wipe-down simply will not cut it when your bond is on the line.

At Tru Bond Cleaning Brisbane, our bathroom bond cleaning service is thorough, methodical, and results-driven. We treat every bathroom like it is going on show for a real estate inspection — because it is. Our professional cleaners use commercial-grade, eco-friendly cleaning products that cut through the toughest grime without damaging tiles, chrome, or surfaces.

We start with the shower. We scrub the shower screens until they are streak-free and clear. We clean the tiles and grout lines, removing soap scum, mould, and built-up grime. We clean the showerhead, taps, and all chrome fixtures until they shine. If there is a bathtub, we scrub and sanitise it thoroughly.

For the toilet, we clean the inside of the bowl using a powerful toilet cleaner, scrubbing under the rim where bacteria and limescale hide. We clean the seat, lid, cistern, and the outside of the toilet including the base and floor behind it.

We clean the vanity inside and out, polish the mirror until it is spotless, and clean the basin and taps. We wipe down all surfaces including shelves, towel rails, and toilet roll holders. We clean the exhaust fan and grille, as these often collect dust and grime that property managers notice.

We mop the floor using a suitable cleaner for your tile type. We clean the skirting boards and ensure the door tracks are clean.

Every bathroom we clean meets or exceeds the REIQ exit inspection standard. We carry our 100% bond back guarantee on every job. If your property manager finds an issue, we fix it for free.

Do not risk your bond on a rushed bathroom clean. Let the professionals handle it. Call 0488 841 883 or book online today.`,
  },
  {
    id: "kitchen",
    title:
      "Kitchen Bond Cleaning Brisbane — Deep Clean That Gets Your Bond Back",
    shortTitle: "Kitchen Deep Clean",
    img: "/assets/generated/kitchen-bond-cleaning-brisbane.dim_800x500.jpg",
    alt: "Professional kitchen deep clean for bond back Brisbane - Tru Bond Cleaning",
    ocid: "services.item.3",
    includes: [
      "Oven interior, door glass, racks, and seals",
      "Stovetop, gas burners, and rangehood filters",
      "All cupboards and drawers inside and out",
      "Benchtops, splashback, and sink scrubbed",
      "Microwave, dishwasher, and integrated appliances",
      "Kitchen floor vacuumed and mopped",
    ],
    content: `The kitchen is the heart of every home — and it is also the hardest room to clean for a bond inspection. Grease, burnt food, oil splatters, and food residue build up on your oven, stovetop, rangehood, and splashback over time. A surface wipe is not enough. Property managers in Brisbane specifically check the oven, rangehood, and cupboards as these are the areas most often failed on exit inspections.

Tru Bond Cleaning Brisbane's kitchen deep clean service tackles every single part of your kitchen. We use professional-grade degreasers and cleaning products that are specially designed for commercial cleaning standards. The result is a kitchen that looks and smells brand new.

Our kitchen bond clean includes a full oven clean, inside and out. We remove the oven racks and soak them to dissolve baked-on grease. We apply a heavy-duty oven degreaser to the oven interior, door glass, and rubber seals. We scrub and wipe everything down until the oven is gleaming. We then clean the stovetop, removing burner grates (for gas cooktops) and scrubbing every surface. We clean the rangehood and its filters, which are often coated in greasy residue. We wipe down the exhaust fan and clean the splashback.

We clean all kitchen cupboards, drawers, and pantry shelves — inside and out. We wipe down all benchtops and surfaces. We scrub the sink, taps, and draining board. If your property has a dishwasher, we clean it inside and out, including the filter. If there is a microwave, we clean it inside and out.

We clean all appliances that are part of the property, including range hoods, dishwashers, and integrated refrigerators if present. We vacuum and mop the kitchen floor, including under cupboards and behind the fridge space.

Our kitchen deep clean is part of our full bond clean package or can be booked as a standalone service. Every kitchen clean comes with our 100% bond back guarantee.

Stop stressing about the oven. Call 0488 841 883 or book your kitchen deep clean online today.`,
  },
  {
    id: "carpet",
    title:
      "Carpet Steam Cleaning Brisbane — Get Your Carpets Fresh and Bond-Ready",
    shortTitle: "Carpet Steam Cleaning",
    img: "/assets/generated/carpet-steam-cleaning-brisbane.dim_800x500.jpg",
    alt: "Professional carpet steam cleaning Brisbane end of lease - Tru Bond Cleaning",
    ocid: "services.item.4",
    includes: [
      "Pre-inspection of all carpeted areas",
      "Pre-treatment of all stains",
      "Enzyme treatment for pet urine odours",
      "Industrial hot water extraction (steam cleaning)",
      "Professional prespray applied to all areas",
      "Deodorant treatment for fresh-smelling results",
    ],
    content: `Carpets take a beating over a tenancy. Foot traffic, spills, pet accidents, dust, and allergens build up deep in the carpet fibres. Regular vacuuming helps but it does not remove the deep-set dirt, stains, and odours that property managers look for during a bond inspection. In Queensland, if your lease started with professionally cleaned carpets, you are required to have them professionally steam cleaned when you move out.

Tru Bond Cleaning Brisbane uses industrial-grade hot water extraction (steam cleaning) equipment to deep-clean your carpets. This is the same method used by professional carpet cleaning companies and it is the most effective way to clean carpets for a bond inspection. Our machines reach deep into the carpet fibres, extracting dirt, allergens, stains, and odours that surface cleaning cannot touch.

Our carpet steam cleaning process starts with a pre-inspection of all carpeted areas. We identify any stains, high-traffic areas, or areas with pet damage. We then pre-treat all stains with a specialist carpet stain remover. For pet urine stains, we use an enzyme-based treatment that breaks down the urine at a molecular level, eliminating the stain and the odour.

We apply a professional prespray to all carpeted areas to loosen deep-set dirt and oils. We then use our hot water extraction machine to steam clean every carpet in the property. The hot water and cleaning solution is injected deep into the carpet, then immediately extracted along with the dissolved dirt, stains, and moisture. This leaves carpets clean, fresh, and significantly drier than older carpet cleaning methods.

We move furniture where required and clean underneath. After cleaning, we apply a deodorant treatment to leave carpets smelling fresh and clean.

Carpet steam cleaning is available as an add-on to our bond clean package or as a standalone service. We cover all Brisbane suburbs and our equipment handles all carpet types including wool, nylon, polyester, and Berber.

Book carpet steam cleaning with your bond clean and save. Call 0488 841 883 or enquire online today.`,
  },
  {
    id: "windows",
    title:
      "Window Cleaning Brisbane — Crystal-Clear Results for Your Bond Inspection",
    shortTitle: "Window Cleaning",
    img: "/assets/generated/window-cleaning-brisbane-bond.dim_800x500.jpg",
    alt: "Streak-free professional window cleaning for bond inspection Brisbane - Tru Bond Cleaning",
    ocid: "services.item.5",
    includes: [
      "All internal window glass cleaned streak-free",
      "External ground-floor windows cleaned",
      "Window frames, ledges, and sills wiped",
      "Window tracks and channels deep-cleaned",
      "Fly screens cleaned and dust removed",
      "All glass sliding doors and their tracks",
    ],
    content: `Dirty windows stand out immediately during a bond inspection. Fingerprints, smudges, dust, grime, and water spots on windows and glass doors are a common reason property managers fail exit inspections in Brisbane. Clean, streak-free windows make the entire property look brighter, cleaner, and better maintained. That is why our professional window cleaning service is a key part of every Tru Bond Clean.

At Tru Bond Cleaning Brisbane, we clean all accessible windows inside and out (ground floor exterior), all glass sliding doors, all window frames and tracks, and all fly screens. Window tracks are notoriously difficult to clean and often full of dead insects, dust, and grime — we clean them thoroughly using brushes and compressed air where needed.

We use a professional streak-free window cleaning solution and microfibre cloths. We do not leave drips, streaks, or smudges. Every pane of glass is cleaned to a standard that will pass any property manager inspection.

Here is exactly what our window cleaning service covers: We clean all internal window glass, removing fingerprints, smudges, dust, and water marks. We clean all external window glass on ground-floor windows and any windows accessible from ground level. We clean all window frames, ledges, and sills, removing accumulated dust, grime, and insect residue. We clean all window tracks and channels, which often accumulate significant dirt and dead insects. We clean all fly screens, removing dust and grime. We clean all glass sliding doors and their tracks — a common failure point on exit inspections.

Window cleaning is included as part of our full bond cleaning package. It can also be booked as a standalone service for properties that need a window-focused clean. We cover all Brisbane suburbs and our team is equipped for a wide range of window types and sizes.

Do not let dirty windows cost you your bond. Book Tru Bond Cleaning Brisbane today. Call 0488 841 883 or fill in our online quote form.`,
  },
  {
    id: "full-package",
    title:
      "Full Bond Clean Package Brisbane — Everything Included, Bond Back Guaranteed",
    shortTitle: "Full Bond Clean Package",
    img: "/assets/generated/tru-bond-cleaning-team-brisbane.dim_800x500.jpg",
    alt: "Tru Bond Cleaning Brisbane team - complete full bond clean package with 100% bond back guarantee",
    ocid: "services.item.6",
    includes: [
      "Complete general bond clean — all rooms and surfaces",
      "Full kitchen deep clean including oven and rangehood",
      "All bathrooms and toilets cleaned and sanitised",
      "Window and glass door cleaning inside and out",
      "Carpet steam cleaning for all carpeted rooms",
      "Laundry, garage, and outdoor area cleaning",
    ],
    content: `Our Full Bond Clean Package is our most popular service. It combines every cleaning service you need to pass your exit inspection and get your full bond back — all in one easy, fixed-price booking. You get the complete package: general bond clean, kitchen deep clean, bathroom cleaning, window cleaning, and carpet steam cleaning all in one visit. One booking. One price. One team. Zero stress.

This package is designed for tenants who want total peace of mind. When you book the Full Bond Clean Package, you do not need to organise multiple companies or worry about whether everything has been covered. Our experienced team arrives at your property with all the equipment, products, and expertise needed to clean every single area to the required standard.

The Full Bond Clean Package includes everything in our general bond clean (all rooms, all surfaces, all floors), plus our comprehensive kitchen deep clean (oven, stovetop, rangehood, cupboards, benchtops, sink), bathroom and toilet cleaning for all bathrooms in the property, window and glass door cleaning (inside and out, ground floor), window frame and track cleaning, fly screen cleaning, carpet steam cleaning using hot water extraction for all carpeted rooms, and laundry, garage, and outdoor area cleaning.

Every Full Bond Clean Package comes with our industry-leading 100% Bond Back Guarantee. If your property manager finds anything on the exit inspection that does not meet the required standard, we return and re-clean it for free — within 72 hours. We do not charge you a cent extra. This is our promise to every customer.

We are available seven days a week, including public holidays. We offer same-day and next-day bookings where possible. Our team is fully insured, police-checked, and trained to REIQ cleaning standards.

Stop juggling multiple cleaning companies. Book the Full Bond Clean Package with Tru Bond Cleaning Brisbane and let us handle everything. Call 0488 841 883 or book online today.`,
  },
];

export default function ServicesPage() {
  useEffect(() => {
    // Handle hash scrolling
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, []);

  return (
    <>
      <SEO
        title="Bond Cleaning Services Brisbane | Tru Bond Cleaning | End-of-Lease Specialists"
        description="Explore all bond cleaning services by Tru Bond Cleaning Brisbane. General bond clean, carpet cleaning, kitchen deep clean, bathroom cleaning, window cleaning and more. 100% bond back guarantee."
        keywords="bond cleaning services Brisbane, carpet steam cleaning Brisbane, kitchen deep clean Brisbane, bathroom bond cleaning Brisbane, window cleaning Brisbane, full bond clean package Brisbane"
        canonical="https://trubondcleaningbrisbane.com/services"
        ogImage="/assets/generated/tru-bond-cleaning-team-brisbane.dim_800x500.jpg"
      />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-[oklch(0.15_0.06_210)] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
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
            All Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
            Bond Cleaning Services in Brisbane
          </h1>
          <p className="text-[oklch(0.75_0.04_210)] text-lg max-w-2xl mx-auto">
            Professional end-of-lease cleaning services for every room and every
            surface. Every service comes with our 100% bond back guarantee.
          </p>
        </div>
      </section>

      {/* Services nav */}
      <nav className="sticky top-[80px] z-40 bg-white border-b border-border shadow-xs py-3 px-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-2 min-w-max">
          {services.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              className="px-4 py-2 text-xs font-semibold rounded-full text-foreground/70 hover:text-[oklch(0.38_0.12_193)] hover:bg-[oklch(0.38_0.12_193_/_0.08)] transition-colors whitespace-nowrap"
            >
              {svc.shortTitle}
            </a>
          ))}
        </div>
      </nav>

      {/* Services Detail */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {services.map((svc, idx) => (
          <article
            key={svc.id}
            id={svc.id}
            data-ocid={svc.ocid}
            className="scroll-mt-40"
          >
            <div
              className={`grid lg:grid-cols-2 gap-12 items-start ${idx % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              {/* Image */}
              <div className={idx % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                  <img
                    src={svc.img}
                    alt={svc.alt}
                    className="w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[oklch(0.38_0.12_193)] text-white text-xs font-bold rounded-full">
                      100% Bond Back Guaranteed
                    </span>
                  </div>
                </div>
                {/* What's included */}
                <div className="mt-6 bg-secondary rounded-xl p-5">
                  <h3 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle
                      size={16}
                      className="text-[oklch(0.52_0.16_155)]"
                    />
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {svc.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <CheckCircle
                          size={14}
                          className="text-[oklch(0.38_0.12_193)] mt-0.5 shrink-0"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:col-start-1" : ""}>
                <span className="section-tag">
                  <Sparkles size={12} />
                  Service {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-6 leading-tight">
                  {svc.title}
                </h2>
                <div className="prose prose-sm max-w-none text-muted-foreground space-y-4">
                  {svc.content.split("\n\n").map((para, i) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: paragraph index is stable
                    <p key={i} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    className="bg-[oklch(0.38_0.12_193)] hover:bg-[oklch(0.28_0.1_193)] text-white font-bold shadow-teal"
                  >
                    <Link to="/contact">
                      Get a Free Quote
                      <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="tel:0488841883">
                      <Phone size={16} className="mr-2" />
                      0488 841 883
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-[oklch(0.38_0.12_193)]">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-display text-3xl font-extrabold mb-3">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-[oklch(0.85_0.06_193)] mb-6">
            Our Full Bond Clean Package covers everything. Or give us a call and
            we will put together a custom quote for your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[oklch(0.28_0.1_193)] hover:bg-[oklch(0.95_0.02_210)] font-bold"
            >
              <Link to="/contact">
                Book Full Bond Clean Package
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 hover:bg-white/20 text-white font-bold"
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
