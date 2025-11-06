import {
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export const APP_NAME = {
  FULL: "DeltaCube Technology",
  SHORT: "DeltaCube",
  ACRONYM: "DCT",
  TAGLINE: "Innovating the Future",
};

export const NAV_ITEMS = [
  { label: "Home", path: "#hero" },
  { label: "About", path: "#about" },
  { label: "Services", path: "#services" },
  { label: "Portfolio", path: "#portfolio" },
  { label: "Testimonials", path: "#testimonials" },
  { label: "Contact", path: "#contact" },
];

export const FOOTER_SECTIONS = [
  {
    title: "Services",
    links: [
      { name: "Web Development", href: "#services" },
      { name: "Mobile Apps", href: "#services" },
      { name: "Cloud Services", href: "#services" },
      { name: "AI Solutions", href: "#services" },
      { name: "Cyber Security", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
];

export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/DeltaCubeTechnology",
    icon: faFacebook,
  },
  { name: "Twitter", href: "#", icon: faTwitter },
  { name: "LinkedIn", href: "#", icon: faLinkedin },
  { name: "GitHub", href: "#", icon: faGithub },
];
