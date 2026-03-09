import { Home, Leaf, Shield } from "lucide-react";
import SuburbPage from "../SuburbPage";
import type { SuburbConfig } from "../SuburbPage";

const suburb: SuburbConfig = {
  name: "Wynnum",
  slug: "wynnum",
  title: "Bond Cleaning Wynnum Brisbane | Tru Bond Cleaning | 100% Bond Back",
  description:
    "Bond cleaning in Wynnum, Brisbane's relaxed coastal suburb. Tru Bond Cleaning offers a thorough vacate clean with 100% bond back guarantee. Call 0488 841 883 for a free quote.",
  keywords:
    "bond cleaning Wynnum, end of lease cleaning Wynnum, bond back cleaning Wynnum Brisbane, vacate cleaning Wynnum",
  canonical: "https://trubondcleaningbrisbane.com/suburbs/wynnum",
  heroHeading: "Bond Cleaning in Wynnum",
  heroSubtext:
    "Wynnum's coastal charm deserves a sparkling clean. Tru Bond Cleaning covers your entire Wynnum rental so you get your bond back in full.",
  content: [
    {
      heading: "What Is Bond Cleaning in Wynnum?",
      body: "Bond cleaning is a thorough, professional clean of your rental home when you move out. Wynnum is a relaxed coastal suburb on Brisbane's eastern bay. The properties here range from cosy Queenslanders and brick homes to modern units and townhouses close to the water. When you move out, your landlord or property manager compares the property to the Entry Condition Report. If the property is not clean, they take money from your bond to pay for cleaning. A professional bond clean with Tru Bond Cleaning protects your money.",
    },
    {
      heading: "Why Wynnum Renters Use Tru Bond Cleaning",
      body: "Living near the coast is beautiful, but it also means properties can pick up salt air, mould, and dust faster than inland homes. Bathrooms and window frames near the water are especially prone to mould and salt build-up. Property managers in Wynnum check these areas carefully. Our team knows how to tackle coastal-specific cleaning challenges. We use products that remove mould, salt residue, and grime effectively. We clean Wynnum rentals regularly and we know exactly what agents at REMAX Wynnum and other local agencies look for.",
    },
    {
      heading: "What We Clean in Your Wynnum Rental",
      body: "Our team takes care of every part of your Wynnum property. We start with the kitchen — scrubbing the oven, cleaning the stovetop and rangehood, and wiping down every cupboard inside and out. Then we deep-clean the bathrooms, removing soap scum, mould, and hard water stains from tiles, grout, and shower screens. We vacuum and mop all floors, clean every window, and wipe all skirting boards and door handles. We also clean outdoor entertaining areas, the laundry, and the garage. If you have a Queenslander with a big under-house area, we can sweep and tidy that too.",
    },
    {
      heading: "Get a Free Quote for Wynnum Bond Cleaning",
      body: "Ready to move out of Wynnum? Tru Bond Cleaning is ready to help. Call us on 0488 841 883 or send a WhatsApp message for a free fixed-price quote. We offer weekend and early morning bookings to fit around your moving schedule. Our 100% bond back guarantee means your money is protected. Book your Wynnum bond clean today.",
    },
  ],
  benefits: [
    {
      icon: Shield,
      title: "100% Bond Back Guarantee",
      desc: "We come back and re-clean for free if your property manager is not satisfied.",
    },
    {
      icon: Home,
      title: "Coastal Cleaning Specialists",
      desc: "We know how to tackle mould, salt air residue, and hard water stains common in Wynnum properties.",
    },
    {
      icon: Leaf,
      title: "Safe, Eco-Friendly Products",
      desc: "Our cleaning products are tough on grime but safe for your family and the coastal environment.",
    },
  ],
  checklist: [
    "Kitchen — oven, stovetop, rangehood, microwave, cupboards inside and out",
    "Bathrooms — tiles, grout, shower screens, toilet, vanity, mirror",
    "Mould treatment in bathrooms, laundry, and window frames",
    "All rooms — vacuum, mop, dust all surfaces and skirting boards",
    "Windows — inside glass, frames, tracks, and fly screens",
    "Hard water stain removal from taps and shower screens",
    "Laundry — tub, taps, lint filter, cupboards",
    "Outdoor entertaining area swept and cleaned",
    "Garage floor swept and cobwebs removed",
    "Carpet vacuum and steam clean (if required)",
  ],
};

export default function WynnumPage() {
  return <SuburbPage suburb={suburb} />;
}
