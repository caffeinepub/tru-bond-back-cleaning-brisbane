import { Clock, Shield, Sparkles } from "lucide-react";
import SuburbPage from "../SuburbPage";
import type { SuburbConfig } from "../SuburbPage";

const suburb: SuburbConfig = {
  name: "Logan Central",
  slug: "logan-central",
  title:
    "Bond Cleaning Logan Central | Tru Bond Cleaning Brisbane | 100% Bond Back",
  description:
    "Fast, professional bond cleaning in Logan Central. Tru Bond Cleaning delivers a thorough vacate clean with 100% bond back guarantee. Call 0488 841 883 for a free quote.",
  keywords:
    "bond cleaning Logan Central, end of lease cleaning Logan, bond back cleaning Logan City, vacate cleaning Logan Central Queensland",
  canonical: "https://trubondcleaningbrisbane.com/suburbs/logan-central",
  heroHeading: "Bond Cleaning in Logan Central",
  heroSubtext:
    "Logan Central has one of Brisbane's busiest rental markets. Tru Bond Cleaning keeps up with the pace — fast turnaround, thorough clean, bond back guaranteed.",
  content: [
    {
      heading: "What Is Bond Cleaning in Logan Central?",
      body: "Bond cleaning is the detailed, professional clean you do when you leave a rental property. In Logan Central, many properties are affordable houses and units that get rented frequently. Property managers from agencies like RAINE & Horne Logan, Century 21 Logan, and Elders Logan check every property carefully when tenants move out. They use the REIQ Exit Condition Report to compare the current condition to when you moved in. If the clean is not up to standard, they take the cleaning cost from your bond. A professional bond clean protects your deposit.",
    },
    {
      heading: "The Logan Central Rental Market",
      body: "Logan Central is one of the most active rental markets in South East Queensland. Properties turn over quickly here. That means property managers inspect many properties every month and they know immediately if a property has not been properly cleaned. They look for clean ovens, spotless bathrooms, fresh carpets, and streak-free windows. Our team handles bond cleans in Logan Central regularly. We move fast and work thoroughly. We know what agents here expect and we deliver it every time.",
    },
    {
      heading: "What We Clean in Your Logan Central Property",
      body: "Our professional team cleans every area of your Logan Central rental. We start with the kitchen — deep-cleaning the oven, stovetop, rangehood, dishwasher, microwave, and all cupboards inside and out. We move to the bathrooms — scrubbing tiles, grout, shower screens, toilet, and vanity until everything shines. We vacuum and mop all floors, clean every window from inside, and wipe every skirting board and light switch. We also clean the laundry and sweep the outdoor areas. We work efficiently so we do not hold up your moving day.",
    },
    {
      heading: "Book a Fast Bond Clean in Logan Central",
      body: "Logan Central tenants trust Tru Bond Cleaning for fast, reliable bond cleaning. Call 0488 841 883 or send a WhatsApp message for a free, fixed-price quote. We offer same-day and next-day bookings for Logan Central. Our 100% bond back guarantee means if your property manager finds anything wrong, we fix it for free. Do not risk your bond — book Tru Bond Cleaning today.",
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: "Bond Back Guaranteed",
      desc: "We re-clean any missed areas for free within 72 hours. Your Logan Central bond is protected.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      desc: "We understand Logan Central's fast rental market. We book quickly and clean efficiently without cutting corners.",
    },
    {
      icon: Sparkles,
      title: "Professional Grade Results",
      desc: "We use commercial cleaning products and equipment that deliver a far better result than DIY cleaning.",
    },
  ],
  checklist: [
    "Kitchen deep clean — oven, stovetop, rangehood, dishwasher, microwave, cupboards",
    "Bathrooms — tiles, grout, shower screens, toilet, vanity, mirror",
    "All rooms — vacuumed, mopped, all surfaces dusted and wiped",
    "Windows — inside glass, frames, tracks, and fly screens",
    "Skirting boards, light switches, power points, and door handles",
    "Laundry — tub, taps, lint filter, and cupboards",
    "Outdoor areas — swept and cleaned",
    "Walls — scuff marks and handprints spot-cleaned",
    "Carpet vacuum and steam clean (if required)",
    "All rubbish removed from the property",
  ],
};

export default function LoganCentralPage() {
  return <SuburbPage suburb={suburb} />;
}
