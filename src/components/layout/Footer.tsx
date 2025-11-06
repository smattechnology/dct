"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME, FOOTER_SECTIONS, SOCIAL_LINKS } from "@/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/40 border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-10 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/img/logo@1x.png"
                alt={APP_NAME.SHORT}
                width={40}
                height={40}
                className="rounded-md"
              />
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {APP_NAME.FULL}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {APP_NAME.TAGLINE}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              We provide smart and innovative digital solutions that help
              businesses grow, automate processes, and succeed in the modern
              digital world.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-9 h-9 text-muted-foreground hover:text-sky-600 hover:bg-sky-100/30 transition-colors"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    aria-label={social.name}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-lg" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-sky-600 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          © {currentYear} {APP_NAME.FULL}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
