export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const mainNavItems: NavItem[] = [
  { label: "WORK", href: "/projects", description: "Selected AI/ML Projects" },
  { label: "EXPERIENCE", href: "/experience", description: "Career & Education Timeline" },
  { label: "ABOUT", href: "/about", description: "Background & Technical Focus" },
  { label: "CONTACT", href: "/contact", description: "Direct Channels" },
];

export const footerLinks: NavItem[] = [
  { label: "Overview", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
