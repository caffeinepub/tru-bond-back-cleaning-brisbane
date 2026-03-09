import { Award, Shield, Sparkles } from "lucide-react";
import SuburbPage from "../SuburbPage";
import type { SuburbConfig } from "../SuburbPage";

const suburb: SuburbConfig = {
  name: "South Brisbane",
  slug: "south-brisbane",
  title:
    "Bond Cleaning South Brisbane | Tru Bond Cleaning Brisbane | 100% Bond Back",
  description:
    "Professional bond cleaning in South Brisbane with a 100% bond back guarantee. Tru Bond Cleaning serves South Brisbane apartments and units. Call 0488 841 883 for a free quote.",
  keywords:
    "bond cleaning South Brisbane, end of lease cleaning South Brisbane, vacate cleaning South Brisbane, bond back cleaning South Brisbane",
  canonical: "https://trubondcleaningbrisbane.com/suburbs/south-brisbane",
  heroHeading: "Bond Cleaning in South Brisbane",
  heroSubtext:
    "South Brisbane's fast-paced rental market means property managers inspect closely. Our team delivers a spotless clean so you get your full bond back.",
  content: [
    {
      heading: "What Is Bond Cleaning in South Brisbane?",
      body: "Bond cleaning means cleaning your rental property from top to bottom when you move out. In South Brisbane, the rental market moves very fast. Apartments near the CBD, South Bank, and the river change hands constantly. Property managers here use strict Exit Condition Reports and expect a very high standard of cleanliness. A bond clean is not just a regular tidy-up — it is a deep, professional clean of every room, every appliance, and every corner. If you do not meet the standard, you lose part of your bond. That is money you worked hard for.",
    },
    {
      heading: "Why South Brisbane Tenants Trust Tru Bond Cleaning",
      body: "South Brisbane has some of Brisbane's highest rents. Your bond could be $2,000, $3,000, or even more. That is a lot of money to risk on a sloppy clean. Our team cleans South Brisbane properties regularly. We know the high-rise apartments on Grey Street, the terrace houses near West End, and the units close to South Bank Parklands. We know exactly what agents at CBRE, Ray White South Brisbane, and Belle Property look for. We clean every property as if your bond depends on it — because it does.",
    },
    {
      heading: "What We Clean in Your South Brisbane Rental",
      body: "Our professional team handles every part of your South Brisbane property. We deep-clean your kitchen including the oven, rangehood, and all cupboards. We scrub your bathroom tiles, grout, shower screens, and toilet until they shine. We vacuum and mop every floor, clean every window, and wipe every skirting board and light switch. For high-rise apartments, we pay extra attention to balconies and internal blinds. We work quickly and efficiently so you do not waste your moving day waiting around.",
    },
    {
      heading: "Get a Free Quote for South Brisbane Bond Cleaning",
      body: "Tru Bond Cleaning makes booking easy. Tell us your South Brisbane address, property size, and move-out date. We give you a fixed price — no hidden fees, no nasty surprises. Call us on 0488 841 883 or send a WhatsApp message today. We offer same-day bookings and weekend availability. Get your bond back in full with Tru Bond Cleaning.",
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: "100% Bond Back Guarantee",
      desc: "We re-clean for free within 72 hours if your property manager finds anything we missed.",
    },
    {
      icon: Award,
      title: "CBD-Proximity Specialists",
      desc: "We clean South Brisbane apartments and units daily, meeting the exact standards of local real estate agents.",
    },
    {
      icon: Sparkles,
      title: "Fast Turnaround",
      desc: "We understand South Brisbane's busy rental market. We book quickly and work efficiently around your timeline.",
    },
  ],
  checklist: [
    "Full kitchen deep clean — oven, stovetop, rangehood, dishwasher, cupboards",
    "Bathroom scrub — tiles, grout, shower screen, toilet, vanity, mirror",
    "All rooms — vacuumed, mopped, all surfaces dusted",
    "Balcony — swept, wiped, glass cleaned",
    "Internal blinds — dusted and wiped",
    "Windows — inside glass, tracks, and fly screens",
    "Skirting boards, light switches, door handles cleaned",
    "Laundry — tub, taps, cupboards cleaned",
    "Carpet steam cleaning (if required)",
    "All rubbish removed",
  ],
};

export default function SouthBrisbanePage() {
  return <SuburbPage suburb={suburb} />;
}
