import { Award, Clock, Shield } from "lucide-react";
import SuburbPage from "../SuburbPage";
import type { SuburbConfig } from "../SuburbPage";

const suburb: SuburbConfig = {
  name: "Ipswich",
  slug: "ipswich",
  title:
    "Bond Cleaning Ipswich QLD | Tru Bond Cleaning Brisbane | 100% Bond Back",
  description:
    "Reliable bond cleaning in Ipswich, QLD. Tru Bond Cleaning delivers a full end-of-lease clean with a 100% bond back guarantee. Affordable, fast, and professional. Call 0488 841 883.",
  keywords:
    "bond cleaning Ipswich, end of lease cleaning Ipswich, bond back cleaning Ipswich QLD, vacate cleaning Ipswich",
  canonical: "https://trubondcleaningbrisbane.com/suburbs/ipswich",
  heroHeading: "Bond Cleaning in Ipswich",
  heroSubtext:
    "Ipswich is a growing city with a busy rental market. Tru Bond Cleaning delivers a thorough, professional bond clean at a price that makes sense.",
  content: [
    {
      heading: "What Is Bond Cleaning in Ipswich?",
      body: "Bond cleaning is the full, detailed clean you need to do when you move out of your rental property. In Ipswich, most rental properties are houses — some older Queenslanders, some newer brick homes on large blocks. Property managers at agencies like LJ Hooker Ipswich, Harcourts Ipswich, and Coronis Ipswich use the REIQ Exit Condition Report to check every room. If the property is not cleaned to the required standard, they take money from your bond. Ipswich bonds are usually four weeks of rent — that is a big amount to risk on a poor clean.",
    },
    {
      heading: "Why Ipswich Tenants Choose Tru Bond Cleaning",
      body: "Ipswich is growing fast. New housing estates, renovated heritage homes, and affordable rentals attract lots of people. That means lots of tenants moving in and out every month. Property managers in Ipswich deal with many end-of-lease inspections and they spot a poor clean instantly. Our team drives out to Ipswich regularly and we know the local rental market well. We understand what agents here look for — from the condition of oven trays to the cleanliness of skirting boards. We price fairly for Ipswich and we deliver the same high standard you'd expect in inner Brisbane.",
    },
    {
      heading: "What We Clean in Your Ipswich Rental",
      body: "Tru Bond Cleaning covers everything your Ipswich property manager expects. We deep-clean the kitchen — oven, stovetop, rangehood, microwave, and all cupboards. We scrub the bathroom — tiles, grout, shower, toilet, and vanity. We vacuum and mop every room, clean all windows from inside, wipe skirting boards and light switches, and tackle the laundry. For larger Ipswich homes with garages and outdoor areas, we sweep the garage, clean the laundry tub, and sweep paths and patios. We bring all our professional equipment and products.",
    },
    {
      heading: "Book Your Ipswich Bond Clean Today",
      body: "Call Tru Bond Cleaning on 0488 841 883 or send us a WhatsApp message for a free, fixed-price quote for your Ipswich property. We offer flexible scheduling including weekends and early morning starts. We back every clean with our 100% bond back guarantee. If your property manager finds anything wrong, we return and re-clean it for free. Book your Ipswich bond clean today.",
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: "100% Bond Back Guarantee",
      desc: "We re-clean any missed areas for free. Your Ipswich bond is safe with Tru Bond Cleaning.",
    },
    {
      icon: Award,
      title: "Fair Ipswich Pricing",
      desc: "We offer honest, competitive pricing for Ipswich homes. No hidden fees, no nasty surprises on moving day.",
    },
    {
      icon: Clock,
      title: "Fast and Flexible",
      desc: "We work around your schedule. Same-day bookings, weekends, and early mornings available in Ipswich.",
    },
  ],
  checklist: [
    "Kitchen — oven, stovetop, rangehood, microwave, cupboards inside and out",
    "Bathroom/s — tiles, grout, shower, toilet, vanity, mirror, exhaust fan",
    "All rooms — vacuumed, mopped, dusted, skirting boards wiped",
    "Windows inside, frames, tracks, and fly screens",
    "Light switches, door handles, and power points wiped",
    "Laundry — tub, taps, lint filter, and cupboards",
    "Garage floor swept, cobwebs removed",
    "Outdoor paths and patio swept",
    "Walls — scuff marks spot-cleaned",
    "Carpet vacuum and steam clean (if required)",
  ],
};

export default function IpswichPage() {
  return <SuburbPage suburb={suburb} />;
}
