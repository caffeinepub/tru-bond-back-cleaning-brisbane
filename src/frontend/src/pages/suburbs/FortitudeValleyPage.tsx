import { Home, Shield, Sparkles } from "lucide-react";
import SuburbPage from "../SuburbPage";
import type { SuburbConfig } from "../SuburbPage";

const suburb: SuburbConfig = {
  name: "Fortitude Valley",
  slug: "fortitude-valley",
  title:
    "Bond Cleaning Fortitude Valley | Tru Bond Cleaning Brisbane | 100% Bond Back",
  description:
    "Need bond cleaning in Fortitude Valley? Tru Bond Cleaning delivers a thorough end-of-lease clean with a 100% bond back guarantee. Book online today — call 0488 841 883.",
  keywords:
    "bond cleaning Fortitude Valley, end of lease cleaning Fortitude Valley, vacate cleaning Fortitude Valley Brisbane, bond back cleaning Fortitude Valley",
  canonical: "https://trubondcleaningbrisbane.com/suburbs/fortitude-valley",
  heroHeading: "Bond Cleaning in Fortitude Valley",
  heroSubtext:
    "Moving out of your Fortitude Valley apartment or share house? We make your property sparkle so you get every dollar of your bond back.",
  content: [
    {
      heading: "What Is Bond Cleaning in Fortitude Valley?",
      body: "Bond cleaning is a full, detailed clean of your rental property when you move out. In Fortitude Valley, most rental properties are inner-city apartments, heritage terraces, and modern high-rise units. Property managers in this area check every surface carefully — from the oven and bathroom tiles to the tops of door frames and inside cupboards. If the property is not clean enough, they take money out of your security bond. That is why you need Tru Bond Cleaning on your side.",
    },
    {
      heading: "Why Fortitude Valley Tenants Need a Professional Bond Cleaner",
      body: "Fortitude Valley is one of Brisbane's busiest neighbourhoods. Lots of people move in and out every week. Property managers here know exactly what a clean rental looks like — they see dozens every month. They follow the REIQ Exit Condition Report closely. If your oven still has grease, your shower screens have soap scum, or your carpets are not steam cleaned, you will lose part of your bond. Our team cleans Fortitude Valley properties every single week. We know what Ray White, LJ Hooker, and other local real estate agents look for. We clean it right the first time.",
    },
    {
      heading: "What Tru Bond Cleaning Does for You in Fortitude Valley",
      body: "We show up on time with all the gear we need. We work through every room, every cupboard, and every appliance. We use professional-grade cleaning products that remove tough grease, mould, and soap scum. We clean your oven, wipe down every surface, scrub your bathroom, mop all the floors, and vacuum your carpets. We even clean inside wardrobes and behind the fridge. Once we are done, your property will look as fresh as it did when you first moved in. If your property manager finds anything we missed, we come back and re-clean it for free.",
    },
    {
      heading: "Book Your Fortitude Valley Bond Clean Today",
      body: "Do not risk losing your bond. Tru Bond Cleaning Brisbane has a team ready to clean your Fortitude Valley property. Call us on 0488 841 883 or send us a WhatsApp message for a free quote. We offer flexible booking times including early mornings and weekends. Get your bond back in full — let us handle the cleaning.",
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: "100% Bond Back Guarantee",
      desc: "If your property manager is not happy, we return and re-clean for free. No arguments, no extra cost.",
    },
    {
      icon: Home,
      title: "Inner-City Apartment Specialists",
      desc: "We clean Fortitude Valley apartments, studio units, and heritage terrace houses every week. We know what local agents expect.",
    },
    {
      icon: Sparkles,
      title: "Professional-Grade Clean",
      desc: "We use commercial cleaning products that get your oven, bathroom, and floors spotless — far better than supermarket brands.",
    },
  ],
  checklist: [
    "Kitchen — oven, stovetop, rangehood, microwave, and cupboards inside and out",
    "Bathroom — tiles, grout, shower screens, vanity, mirror, and toilet",
    "All rooms — vacuum, mop, dust all surfaces and skirting boards",
    "Windows — glass cleaned inside, tracks wiped, fly screens brushed",
    "Walls — spot-clean marks and scuffs",
    "Light switches and door handles wiped clean",
    "Laundry tub, taps, and cupboards cleaned",
    "Carpets vacuumed and steam cleaned (if required)",
    "Balcony swept and wiped down",
    "All rubbish removed from property",
  ],
};

export default function FortitudeValleyPage() {
  return <SuburbPage suburb={suburb} />;
}
