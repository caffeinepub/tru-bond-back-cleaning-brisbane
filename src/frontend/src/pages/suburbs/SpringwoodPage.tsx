import { Home, Shield, Users } from "lucide-react";
import SuburbPage from "../SuburbPage";
import type { SuburbConfig } from "../SuburbPage";

const suburb: SuburbConfig = {
  name: "Springwood",
  slug: "springwood",
  title:
    "Bond Cleaning Springwood Brisbane | Tru Bond Cleaning | 100% Bond Back",
  description:
    "Bond cleaning in Springwood, South Brisbane. Tru Bond Cleaning handles family homes and units with a 100% bond back guarantee. Call 0488 841 883 for a free quote.",
  keywords:
    "bond cleaning Springwood, end of lease cleaning Springwood Brisbane, bond back cleaning Springwood, vacate cleaning Springwood Logan",
  canonical: "https://trubondcleaningbrisbane.com/suburbs/springwood",
  heroHeading: "Bond Cleaning in Springwood",
  heroSubtext:
    "Moving out of your Springwood home or unit? Tru Bond Cleaning gives your property a top-to-bottom clean so you get your full bond back.",
  content: [
    {
      heading: "What Is Bond Cleaning in Springwood?",
      body: "Bond cleaning is the thorough, professional clean you do when you move out of your rental. Springwood is a popular suburb in southern Brisbane with a mix of family homes, townhouses, and units. It sits between Brisbane's CBD and the Gold Coast, making it very popular with families and young professionals. When you move out, your property manager uses the Exit Condition Report to check every room. If the property is not clean, they deduct the cleaning cost from your security bond. A professional bond clean with Tru Bond Cleaning keeps your bond money safe.",
    },
    {
      heading: "Why Springwood Families and Renters Choose Tru Bond Cleaning",
      body: "Springwood has grown a lot over the past few years. New units and townhouses have popped up near Springwood Shopping Centre and along Browns Plains Road. Many families and couples rent here because of the affordable prices and good schools. When they move out, they need a bond clean that meets the standards of local real estate agents. Our team cleans Springwood properties regularly. We know the multi-storey townhouses, the older brick homes, and the modern apartment complexes. We follow the REIQ checklist on every job.",
    },
    {
      heading: "What We Do for Your Springwood Property",
      body: "Tru Bond Cleaning covers every area of your Springwood rental. We deep-clean the kitchen — oven, stovetop, rangehood, microwave, and all cupboards. We scrub the bathroom — tiles, grout, shower screens, toilet, vanity, and exhaust fan. We vacuum and mop every floor, clean all windows from inside, wipe every skirting board, and clean all light switches and door handles. For homes with multiple levels, we clean all stairs and railings too. We also tidy the laundry, sweep the garage, and clean the outdoor entertaining area.",
    },
    {
      heading: "Book Your Springwood Bond Clean Today",
      body: "Tru Bond Cleaning makes moving out of Springwood easy. Call 0488 841 883 or WhatsApp us for a free, fixed-price quote. We work weekends and can fit around your moving schedule. Our 100% bond back guarantee means we stand behind every clean we do. If your property manager is not satisfied, we come back and re-clean for free. Book today.",
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: "100% Bond Back Guarantee",
      desc: "We fix any missed spots for free. Your Springwood bond is safe with us.",
    },
    {
      icon: Home,
      title: "Family Home and Townhouse Specialists",
      desc: "We clean multi-level Springwood homes, townhouses, and modern units with equal thoroughness.",
    },
    {
      icon: Users,
      title: "Trusted by Local Families",
      desc: "Springwood families trust us for honest pricing, professional results, and hassle-free booking.",
    },
  ],
  checklist: [
    "Kitchen — oven, stovetop, rangehood, microwave, dishwasher, cupboards",
    "Bathrooms — tiles, grout, shower screens, toilet, vanity, mirror, exhaust fan",
    "All rooms — vacuumed, mopped, all surfaces and skirting boards wiped",
    "Stairs and railings cleaned (for multi-level homes)",
    "Windows — inside glass, frames, tracks, and fly screens",
    "Skirting boards, light switches, door handles, and power points",
    "Laundry — tub, taps, lint filter, and cupboards",
    "Garage — swept, mopped, cobwebs removed",
    "Outdoor areas — swept and cleaned",
    "Carpet vacuum and steam clean (if required)",
  ],
};

export default function SpringwoodPage() {
  return <SuburbPage suburb={suburb} />;
}
