import { Award, Shield, Sparkles } from "lucide-react";
import SuburbPage from "../SuburbPage";
import type { SuburbConfig } from "../SuburbPage";

const suburb: SuburbConfig = {
  name: "Manly",
  slug: "manly",
  title:
    "Bond Cleaning Manly Brisbane | Tru Bond Cleaning | 100% Bond Back Guarantee",
  description:
    "Bond cleaning in Manly Brisbane — waterfront properties, beach-side units, and family homes. 100% bond back guarantee. Tru Bond Cleaning. Call 0488 841 883.",
  keywords:
    "bond cleaning Manly Brisbane, end of lease cleaning Manly, bond back cleaning Manly, vacate cleaning Manly Harbour Brisbane",
  canonical: "https://trubondcleaningbrisbane.com/suburbs/manly",
  heroHeading: "Bond Cleaning in Manly",
  heroSubtext:
    "Leaving your Manly waterfront home or beach-side unit? Tru Bond Cleaning delivers a thorough end-of-lease clean so you walk away with your full bond.",
  content: [
    {
      heading: "What Is Bond Cleaning in Manly?",
      body: "Bond cleaning is the detailed clean your rental needs when you move out. In Manly, the properties are often beautiful — waterfront homes overlooking the harbour, brick units close to Manly Harbour Village, and beach-side houses. Because Manly is a premium suburb, rental bonds are often higher. Property managers at agencies like LJ Hooker Manly and Ray White Manly Harbour expect an excellent standard of cleanliness. A professional bond clean makes sure you get every cent of that bond back.",
    },
    {
      heading: "The Manly Rental Market and Why Bond Cleaning Matters",
      body: "Manly is one of Brisbane's most desirable bayside suburbs. People pay a premium to live close to the harbour and the yacht club. That means rental bonds can be quite large. When you move out, your property manager will check every room, every appliance, and every surface. They use a detailed Exit Condition Report. If your kitchen has grease on the rangehood, your bathroom has soap scum on the tiles, or your carpets are not clean, you will lose money. Our team knows Manly rentals well. We clean here regularly and we know exactly what Manly agents expect.",
    },
    {
      heading: "What Tru Bond Cleaning Does in Your Manly Property",
      body: "We send our professional team to your Manly home with all the cleaning gear they need. We deep-clean your kitchen — oven, rangehood, stovetop, and every cupboard. We scrub your bathroom tiles, grout, and shower screens until they are spotless. We vacuum and mop all floors, clean all windows, and wipe every skirting board and door handle. For homes near the water, we pay special attention to mould in bathrooms and salt build-up on windows and doors. We clean your outdoor areas, the laundry, and the garage if you have one.",
    },
    {
      heading: "Book Your Manly Bond Clean with Tru Bond Cleaning",
      body: "Tru Bond Cleaning makes moving out of Manly stress-free. Call us on 0488 841 883 or send a WhatsApp message for a free, fixed-price quote. We book quickly and work around your schedule. Our 100% bond back guarantee means if your property manager finds anything wrong, we come back and fix it for free. Book today and protect your bond.",
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: "100% Bond Back Guarantee",
      desc: "We re-clean any missed spots for free. Your bond is safe when you book with Tru Bond Cleaning.",
    },
    {
      icon: Award,
      title: "Waterfront Property Experts",
      desc: "We handle mould, salt residue, and the high standards of premium Manly real estate agents.",
    },
    {
      icon: Sparkles,
      title: "Commercial-Grade Products",
      desc: "We use professional products that cut through coastal grime, grease, and soap scum with ease.",
    },
  ],
  checklist: [
    "Kitchen — oven, stovetop, rangehood, microwave, cupboards inside and out",
    "Bathrooms — tiles, grout, shower screens, toilet, vanity, mirror, exhaust fan",
    "Mould treatment in bathrooms and laundry",
    "All rooms — vacuumed, mopped, surfaces dusted and wiped",
    "Windows — inside glass, frames, tracks, fly screens",
    "Salt and grime removed from door frames and outdoor surfaces",
    "Skirting boards, light switches, door handles cleaned",
    "Laundry — tub, taps, lint filter, cupboards",
    "Outdoor areas swept and cleaned",
    "Carpet vacuum and steam clean (if required)",
  ],
};

export default function ManlyPage() {
  return <SuburbPage suburb={suburb} />;
}
