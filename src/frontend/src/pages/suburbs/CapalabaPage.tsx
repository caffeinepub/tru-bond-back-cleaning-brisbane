import { Award, Home, Shield } from "lucide-react";
import SuburbPage from "../SuburbPage";
import type { SuburbConfig } from "../SuburbPage";

const suburb: SuburbConfig = {
  name: "Capalaba",
  slug: "capalaba",
  title: "Bond Cleaning Capalaba | Tru Bond Cleaning Brisbane | 100% Bond Back",
  description:
    "Professional bond cleaning in Capalaba with a 100% bond back guarantee. Tru Bond Cleaning serves Capalaba homes and units in the Redlands. Free quote — call 0488 841 883.",
  keywords:
    "bond cleaning Capalaba, end of lease cleaning Capalaba, bond back cleaning Redlands, vacate cleaning Capalaba Brisbane",
  canonical: "https://trubondcleaningbrisbane.com/suburbs/capalaba",
  heroHeading: "Bond Cleaning in Capalaba",
  heroSubtext:
    "Capalaba rental done? Let Tru Bond Cleaning handle the full bond clean so you get your deposit back in full. We know Redlands properties inside out.",
  content: [
    {
      heading: "What Is Bond Cleaning in Capalaba?",
      body: "Bond cleaning is a professional deep clean of your rental home when you move out. In Capalaba and the broader Redlands area, most rental properties are Queensland-style homes with multiple bedrooms, large kitchens, and sometimes a garage or outdoor entertaining area. Property managers at agencies like Ray White Capalaba and LJ Hooker Capalaba inspect every room carefully. They compare what they see to the Entry Condition Report. If the property is not clean, they can take money from your bond. A professional bond clean protects your money.",
    },
    {
      heading: "Why Capalaba Renters Need a Professional Cleaner",
      body: "Capalaba is a growing bayside community with a strong rental market. Many families and professionals rent here because of the good schools, the Capalaba Shopping Centre, and the easy access to the bay. Property managers in this area have high expectations for end-of-lease cleanliness. Large family homes have more rooms, bigger kitchens, and sometimes bigger grease problems in the oven. You also need outdoor areas swept and the garage cleaned. Doing all that yourself after a big move is exhausting. Tru Bond Cleaning takes that stress away.",
    },
    {
      heading: "What We Clean in Your Capalaba Rental",
      body: "Our team arrives with everything needed for a complete bond clean. We deep-clean your kitchen including the oven, rangehood, and all cupboards. We scrub both bathrooms if you have them — tiles, grout, shower screens, toilets, and vanities. We vacuum and mop all floor areas, clean every window from inside, and wipe all skirting boards, light switches, and handles. We also sweep and clean your garage, tidy the outdoor areas, and make sure every cupboard is cleaned inside and out. We use commercial-grade products that lift grease, soap scum, and mould.",
    },
    {
      heading: "Get Your Capalaba Bond Clean Sorted Today",
      body: "Do not stress about your Capalaba bond clean. Call Tru Bond Cleaning on 0488 841 883 or send us a WhatsApp message. We give you a fixed price quote upfront — no hidden fees. We work weekends and can often accommodate last-minute bookings. Our 100% bond back guarantee means you have nothing to lose. Book today.",
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: "Bond Back Guaranteed",
      desc: "We re-clean for free if your property manager flags anything. Your bond is our responsibility.",
    },
    {
      icon: Home,
      title: "Redlands Home Specialists",
      desc: "We clean large Queensland homes in Capalaba and the Redlands every week. We handle garages, outdoor areas, and multi-bathroom homes.",
    },
    {
      icon: Award,
      title: "Trusted by Local Agents",
      desc: "Local Capalaba real estate agents recognise our standard. We know exactly what they check on inspection day.",
    },
  ],
  checklist: [
    "Full kitchen deep clean — oven, stovetop, rangehood, dishwasher, cupboards",
    "All bathrooms — tiles, grout, shower screens, toilets, vanity, mirrors",
    "All bedrooms and living areas — vacuumed, mopped, dusted",
    "Windows inside, frames, tracks, and fly screens",
    "Skirting boards, light switches, door handles",
    "Laundry — tub, taps, lint filter, cupboards",
    "Garage — swept, mopped, cobwebs removed",
    "Outdoor entertaining area — swept and wiped down",
    "Carpet steam cleaning (if required)",
    "All rubbish removed from the property",
  ],
};

export default function CapalabaPage() {
  return <SuburbPage suburb={suburb} />;
}
