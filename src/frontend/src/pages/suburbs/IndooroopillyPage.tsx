import { Award, Leaf, Shield } from "lucide-react";
import SuburbPage from "../SuburbPage";
import type { SuburbConfig } from "../SuburbPage";

const suburb: SuburbConfig = {
  name: "Indooroopilly",
  slug: "indooroopilly",
  title:
    "Bond Cleaning Indooroopilly | Tru Bond Cleaning Brisbane | 100% Bond Back",
  description:
    "Professional bond cleaning in Indooroopilly, Brisbane's leafy university suburb. 100% bond back guarantee. Tru Bond Cleaning. Call 0488 841 883 for a free quote today.",
  keywords:
    "bond cleaning Indooroopilly, end of lease cleaning Indooroopilly, bond back cleaning Indooroopilly Brisbane, vacate cleaning near UQ Brisbane",
  canonical: "https://trubondcleaningbrisbane.com/suburbs/indooroopilly",
  heroHeading: "Bond Cleaning in Indooroopilly",
  heroSubtext:
    "Indooroopilly's leafy streets and university lifestyle attract tenants who care about getting their bond back. Tru Bond Cleaning delivers every time.",
  content: [
    {
      heading: "What Is Bond Cleaning in Indooroopilly?",
      body: "Bond cleaning is a professional, top-to-bottom clean of your rental property when you move out. Indooroopilly is one of Brisbane's most desirable western suburbs — leafy streets, excellent schools, proximity to the University of Queensland, and easy access to the CBD. The rental properties here range from stylish apartments near Indooroopilly Shopping Centre to older family homes in the quiet streets near the river. Property managers in this area hold high expectations. A professional bond clean with Tru Bond Cleaning makes sure your deposit comes back in full.",
    },
    {
      heading: "Why Indooroopilly Tenants and Students Trust Us",
      body: "Lots of students and young professionals rent in Indooroopilly because of its convenient location near the University of Queensland. Share houses and units close to the shopping centre and train station are always busy. When it is time to move out, tenants need a thorough bond clean that satisfies local agents. Property managers from McGrath Indooroopilly, Place Indooroopilly, and Raine & Horne Indooroopilly know exactly what a clean property looks like. Our team works in this suburb regularly and we know the local property types and what agents inspect most carefully.",
    },
    {
      heading: "What We Clean in Your Indooroopilly Rental",
      body: "Our professional team takes care of every part of your Indooroopilly rental. We deep-clean the kitchen — oven, rangehood, stovetop, dishwasher, microwave, and all cupboards inside and out. We scrub the bathrooms — tiles, grout, shower screens, toilet bowl and seat, vanity, mirror, and exhaust fan. We vacuum and mop every floor, clean all windows from inside, wipe all skirting boards, and clean every light switch and door handle. For share houses with multiple bedrooms, we clean every room with the same thoroughness. We also clean the laundry and tidy outdoor areas.",
    },
    {
      heading: "Book Your Indooroopilly Bond Clean with Us",
      body: "Moving out of Indooroopilly? Tru Bond Cleaning is ready to help. We give you a free, fixed-price quote with no hidden fees. Call us on 0488 841 883 or send a WhatsApp message. We work weekends and evenings to fit around your busy schedule. Our 100% bond back guarantee means we re-clean for free if your property manager is not happy. Book today and protect your bond.",
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: "100% Bond Back Guarantee",
      desc: "We re-clean any missed areas for free. Your Indooroopilly bond is in safe hands.",
    },
    {
      icon: Award,
      title: "University Suburb Specialists",
      desc: "We clean share houses, studio apartments, and family homes in Indooroopilly every week. We know what local agents expect.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Cleaning",
      desc: "Our products are tough on grime but kind to Indooroopilly's leafy environment and your family.",
    },
  ],
  checklist: [
    "Kitchen — oven, stovetop, rangehood, dishwasher, microwave, cupboards inside and out",
    "All bathrooms — tiles, grout, shower screens, toilet, vanity, mirror, exhaust fan",
    "All rooms and shared areas — vacuumed, mopped, surfaces dusted",
    "Windows — inside glass, window tracks, fly screens",
    "Skirting boards, light switches, power points, and door handles",
    "Laundry — tub, taps, lint filter, and cupboards",
    "Outdoor areas — swept and tidied",
    "Walls — spot-clean marks, scuffs, and handprints",
    "Inside wardrobes and built-in robes cleaned",
    "Carpet vacuum and steam clean (if required)",
  ],
};

export default function IndooroopillyPage() {
  return <SuburbPage suburb={suburb} />;
}
