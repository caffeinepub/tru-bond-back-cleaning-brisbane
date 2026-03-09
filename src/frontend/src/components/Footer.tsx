import { Link } from "@tanstack/react-router";
import { CheckCircle, Clock, MapPin, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();

const serviceLinks = [
  { label: "General Bond Clean", href: "/services#general" },
  { label: "Kitchen Deep Clean", href: "/services#kitchen" },
  { label: "Bathroom Cleaning", href: "/services#bathroom" },
  { label: "Carpet Steam Cleaning", href: "/services#carpet" },
  { label: "Window Cleaning", href: "/services#windows" },
  { label: "Full Bond Clean Package", href: "/services#full-package" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact & Quote", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.15_0.04_220)] text-[oklch(0.85_0.02_210)]">
      {/* CTA Banner */}
      <div className="bg-[oklch(0.38_0.12_193)] py-10 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Ready to Get Your Full Bond Back?
          </h2>
          <p className="text-[oklch(0.85_0.04_193)] mb-6 text-base">
            Brisbane's most trusted bond cleaning service — guaranteed results
            or we re-clean for free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0488841883"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[oklch(0.28_0.1_193)] font-bold rounded-lg hover:bg-[oklch(0.95_0.02_210)] transition-colors"
            >
              <Phone size={18} />
              Call 0488 841 883
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[oklch(0.52_0.16_155)] text-white font-bold rounded-lg hover:bg-[oklch(0.42_0.14_155)] transition-colors"
            >
              Get a Free Quote Online
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img
              src="/assets/generated/tru-bond-logo-transparent.dim_400x120.png"
              alt="Tru Bond Back Cleaning Brisbane Logo"
              className="h-12 w-auto brightness-0 invert opacity-90"
            />
            <p className="text-sm text-[oklch(0.68_0.02_210)] leading-relaxed">
              Brisbane's locally owned and operated bond cleaning specialists.
              We guarantee your bond back or we re-clean for free.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              {[
                "100% Bond Back Guarantee",
                "Fully Insured & Police Checked",
                "Eco-Friendly Products",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-[oklch(0.75_0.06_155)]"
                >
                  <CheckCircle size={14} className="shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[oklch(0.68_0.02_210)] hover:text-[oklch(0.75_0.1_193)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-[oklch(0.68_0.02_210)] hover:text-[oklch(0.75_0.1_193)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-3">
              <a
                href="tel:0488841883"
                className="flex items-center gap-2 text-sm text-[oklch(0.68_0.02_210)] hover:text-[oklch(0.75_0.1_193)] transition-colors"
              >
                <Phone
                  size={14}
                  className="shrink-0 text-[oklch(0.65_0.1_193)]"
                />
                0488 841 883
              </a>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[oklch(0.68_0.02_210)] hover:text-[oklch(0.75_0.1_193)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="14"
                  height="14"
                  className="shrink-0 text-[#25D366]"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp 0488 841 883
              </a>
              <div className="flex items-start gap-2 text-sm text-[oklch(0.68_0.02_210)]">
                <MapPin
                  size={14}
                  className="shrink-0 mt-0.5 text-[oklch(0.65_0.1_193)]"
                />
                <span>All Brisbane Suburbs &amp; Surrounds</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-[oklch(0.68_0.02_210)]">
                <Clock
                  size={14}
                  className="shrink-0 mt-0.5 text-[oklch(0.65_0.1_193)]"
                />
                <div>
                  <div>Mon–Sat: 6am–8pm</div>
                  <div>Sunday: 8am–5pm</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[oklch(0.25_0.04_210)] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[oklch(0.52_0.02_210)]">
          <p>
            &copy; {currentYear} Tru Bond Back Cleaning Brisbane. All rights
            reserved.
          </p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[oklch(0.68_0.06_193)] transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
