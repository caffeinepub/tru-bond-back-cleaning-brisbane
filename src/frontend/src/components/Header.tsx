import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home", ocid: "nav.home.link" },
  { href: "/services", label: "Services", ocid: "nav.services.link" },
  { href: "/about", label: "About", ocid: "nav.about.link" },
  { href: "/contact", label: "Contact", ocid: "nav.contact.link" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-white/98"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[oklch(0.22_0.09_193)] text-white py-2 px-4 text-xs text-center font-medium">
        <span className="flex items-center justify-center gap-2 flex-wrap">
          <span>📞 Call us today:</span>
          <a
            href="tel:0488841883"
            className="font-bold underline underline-offset-2 hover:no-underline"
          >
            0488 841 883
          </a>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">
            Mon–Sat 6am–8pm &nbsp;|&nbsp; Sun 8am–5pm
          </span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline font-bold">
            100% Bond Back Guarantee ✓
          </span>
        </span>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/assets/generated/tru-bond-logo-transparent.dim_400x120.png"
            alt="Tru Bond Back Cleaning Brisbane Logo"
            className="h-12 w-auto"
            loading="eager"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={link.ocid}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors ${
                currentPath === link.href
                  ? "text-[oklch(0.38_0.12_193)] bg-[oklch(0.38_0.12_193_/_0.08)]"
                  : "text-foreground/80 hover:text-[oklch(0.38_0.12_193)] hover:bg-[oklch(0.38_0.12_193_/_0.06)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0488841883"
            className="flex items-center gap-2 text-sm font-semibold text-[oklch(0.38_0.12_193)] hover:text-[oklch(0.22_0.09_193)] transition-colors"
          >
            <Phone size={16} />
            0488 841 883
          </a>
          <Button
            asChild
            className="bg-[oklch(0.38_0.12_193)] hover:bg-[oklch(0.28_0.1_193)] text-white font-bold shadow-teal"
          >
            <Link to="/contact" data-ocid="nav.quote.primary_button">
              Get a Free Quote
            </Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-foreground/70 hover:bg-secondary"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-ocid={link.ocid}
              className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                currentPath === link.href
                  ? "text-[oklch(0.38_0.12_193)] bg-[oklch(0.38_0.12_193_/_0.08)]"
                  : "text-foreground/80 hover:text-[oklch(0.38_0.12_193)] hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 flex flex-col gap-2">
            <a
              href="tel:0488841883"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[oklch(0.38_0.12_193)] text-[oklch(0.38_0.12_193)] font-bold text-sm"
            >
              <Phone size={16} />
              Call 0488 841 883
            </a>
            <Button
              asChild
              className="w-full bg-[oklch(0.38_0.12_193)] hover:bg-[oklch(0.28_0.1_193)] text-white font-bold"
            >
              <Link to="/contact" data-ocid="nav.quote.primary_button">
                Get a Free Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
