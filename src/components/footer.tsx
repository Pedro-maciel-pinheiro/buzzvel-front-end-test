import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Euro, Globe, PersonStanding } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="bg-darkblue py-10 text-gray-200"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid  gap-8 md:grid-cols-4 lg:grid-cols-6">
          <div>
            <Image
              src="/img/Column.png"
              alt="Uteach company logo"
              width={150}
              height={150}
              priority
            />
          </div>

          {/* Navigation Sections */}
          <nav aria-label="Product links">
            <h4 className="mb-4 font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm">
              {["Overview", "Wireframing", "Brainstorming", "Ideation", "BETA"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:underline focus:outline-none focus:ring focus:ring-white rounded">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Solutions links">
            <h4 className="mb-4 font-semibold text-white">Solutions</h4>
            <ul className="space-y-2 text-sm">
              {["Accessibility Beta", "Research", "Integrations", "Request Demo"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:underline focus:outline-none focus:ring focus:ring-white rounded">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources links">
            <h4 className="mb-4 font-semibold text-white">Resources</h4>
            <ul className="space-y-2 text-sm">
              {["Tutorials", "Blog", "Events", "FAQs"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:underline focus:outline-none focus:ring focus:ring-white rounded">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support links">
            <h4 className="mb-4 font-semibold text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              {["Help Center", "Contact Us", "Documentation", "Developers"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s/g, "-")}`} className="hover:underline focus:outline-none focus:ring focus:ring-white rounded">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company links">
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Press", "Browse", "Careers"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="hover:underline focus:outline-none focus:ring focus:ring-white rounded">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-6 text-sm md:flex-row">
          <p>&copy; uteach @ 2023. All rights reserved.</p>

          <ul className="flex flex-wrap items-center gap-6 text-sm" aria-label="Legal and language options">
            <li>
              <Link href="/terms" className="hover:underline focus:outline-none focus:ring focus:ring-white rounded">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:underline focus:outline-none focus:ring focus:ring-white rounded">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline focus:outline-none focus:ring focus:ring-white rounded">
                Contact
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <Globe aria-hidden="true" />
              <Link href="/language" className="hover:underline focus:outline-none focus:ring focus:ring-white rounded">
                EN
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <Euro aria-hidden="true" />
              <Link href="/currency" className="hover:underline focus:outline-none focus:ring focus:ring-white rounded">
                EUR
              </Link>
            </li>
            <li className="bg-white rounded-full text-darkblue p-1">
              <Link href="/account" aria-label="User account">
                <PersonStanding aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
