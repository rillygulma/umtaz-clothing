import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Designs", href: "/designs" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Custom Tailoring",
  "Traditional Embroidery",
  "Senator Wear",
  "Agbada",
  "Kaftan",
  "Wedding Outfits",
];

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b08a3e]">
                <span className="text-xl font-bold text-[#b08a3e]">U</span>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-[0.18em]">
                  UMTAZ
                </h2>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#d4b46a]">
                  Clothing
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/60">
              Crafting traditional and contemporary clothing with attention
              to detail, quality and timeless style.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#b08a3e] hover:text-[#d4b46a]"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#b08a3e] hover:text-[#d4b46a]"
              >
                <FaSquareFacebook size={17} />
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition hover:border-[#b08a3e] hover:text-[#d4b46a]"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#d4b46a]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#d4b46a]">
              Our Services
            </h3>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-white/60"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-[#d4b46a]">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-1 shrink-0 text-[#d4b46a]"
                />
                <p className="text-sm leading-6 text-white/60">
                  Your business address will appear here
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#d4b46a]" />
                <p className="text-sm text-white/60">
                  +234 XXX XXX XXXX
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#d4b46a]" />
                <p className="text-sm text-white/60">
                  hello@umtazclothing.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col justify-between gap-3 text-xs text-white/40 sm:flex-row">
            <p>
              © {new Date().getFullYear()} UMTAZ Clothing. All rights reserved.
            </p>

            <p>
              Crafted with passion & tradition.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}