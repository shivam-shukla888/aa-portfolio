export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const mainNavItems: NavItem[] = [
  { label: "Work", href: "/projects", description: "Selected Projects" },
  { label: "Experience", href: "/experience", description: "Career & Education" },
  { label: "About", href: "/about", description: "Background & Focus" },
  { label: "Contact", href: "/contact", description: "Get in touch" },
];

export const footerLinks: NavItem[] = [
  { label: "Overview", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
