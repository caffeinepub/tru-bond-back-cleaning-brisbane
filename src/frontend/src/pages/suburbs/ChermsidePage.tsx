import { Home, Leaf, Shield } from "lucide-react";
import SuburbPage from "../SuburbPage";
import type { SuburbConfig } from "../SuburbPage";

const suburb: SuburbConfig = {
  name: "Chermside",
  slug: "chermside",
  title:
    "Bond Cleaning Chermside | Tru Bond Cleaning Brisbane | 100% Bond Back",
  description:
    "Expert bond cleaning in Chermside, North Brisbane. Tru Bond Cleaning handles family homes, units, and new apartments. 100% bond back guarantee. Call 0488 841 883.",
  keywords:
    "bond cleaning Chermside, end of lease cleaning Chermside, bond back cleaning North Brisbane, vacate cleaning Chermside Brisbane",
  canonical: "https://trubondcleaningbrisbane.com/suburbs/chermside",
  heroHeading: "Bond Cleaning in Chermside",
  heroSubtext:
    "From family homes to new North Brisbane apartments, Tru Bond Cleaning covers Chermside. We get you your full bond back — guaranteed.",
  content: [
    {
      heading: "What Is Bond Cleaning in Chermside?",
      body: "Bond cleaning is the big, thorough clean you do when you move out of your rental. In Chermside, there is a big mix of housing — family homes with backyards, modern apartments near Westfield Chermside, and townhouses along busy roads. When you move out, your property manager checks the entire property against the Entry Condition Report. If anything is not clean, they can use your bond to pay for the cleaning. Bond cleaning by a professional team makes sure every surface, every room, and every appliance is spotless.",
    },
    {
      heading: "Why Chermside Tenants Choose Tru Bond Cleaning",
      body: "Chermside is one of North Brisbane's most popular suburbs. It has great schools, the Westfield shopping centre, and easy access to the city. Because it is so popular, lots of people are always moving in and out. Property managers in Chermside use detailed checklists and they notice if anything is not cleaned properly. Our team cleans Chermside rentals regularly. We know the family homes in the quiet streets and the modern units close to Gympie Road. We follow the REIQ checklist so nothing gets missed.",
    },
    {
      heading: "What We Do for Your Chermside Rental",
      body: "We clean every part of your Chermside rental from top to bottom. We tackle the kitchen first — oven, stovetop, rangehood, microwave, and all cupboards inside and out. Then we move to the bathrooms — scrubbing tiles, cleaning grout, removing soap scum from shower screens, and making the toilet shine. We vacuum and mop all floors, clean every window, and wipe all skirting boards, light switches, and door handles. For family homes with big yards, we also sweep paths, clean the garage, and tidy outdoor areas. We bring all our own equipment and products.",
    },
    {
      heading: "Book Your Chermside Bond Clean",
      body: "Moving day is already stressful enough without worrying about cleaning. Let Tru Bond Cleaning handle your Chermside bond clean. We give you a free, fixed price quote with no hidden fees. Call 0488 841 883 or WhatsApp us today. We book quickly and offer weekend and early morning slots. Your bond is safe with us.",
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: "100% Bond Back Guarantee",
      desc: "We stand behind every clean. If anything is missed, we return and fix it for free within 72 hours.",
    },
    {
      icon: Home,
      title: "Family Home Experts",
      desc: "We know Chermside's family homes and new apartments. We clean outdoor areas, garages, and large kitchens that smaller companies skip.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Products",
      desc: "We use cleaning products that are safe for kids and pets but tough on grime and mould.",
    },
  ],
  checklist: [
    "Kitchen deep clean — oven, stovetop, rangehood, microwave, cupboards",
    "All bathrooms — tiles, grout, shower screens, toilets, vanity, mirrors",
    "All rooms — vacuumed, mopped, surfaces dusted and wiped",
    "Windows inside, tracks, and fly screens cleaned",
    "Skirting boards, light switches, and door handles wiped",
    "Laundry area — tub, taps, lint filter, cupboards",
    "Garage floor swept and wiped down",
    "Outdoor paths and patio swept",
    "Carpet vacuum and steam clean (if required)",
    "All rubbish removed from the property",
  ],
};

export default function ChermsidePage() {
  return <SuburbPage suburb={suburb} />;
}
