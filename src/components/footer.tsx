import Link from "next/link";

const FOOTER_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#insights", label: "Insights" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/20">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <Link
              href="/#home"
              className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
            >
              Rainier Capital LLC
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Boutique capital feeder and deal-origination
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          © {year} Rainier Capital LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
