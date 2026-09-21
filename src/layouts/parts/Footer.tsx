import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer
      style={{ background: 'hsl(var(--footer-bg))' }}
      className="text-primary-foreground"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="max-w-xs">
            <img
              src="/airo-assets/images/logo/horizontal/light"
              alt="Wise Recovery"
              className="block h-auto max-h-9 w-auto object-contain mb-4"
            />
            <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--white) / 0.55)' }}>
              Psychiatrist-led group programming for people living with serious mental illness and their families.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer links" className="flex flex-col gap-2.5">
            {[
              { label: 'Home', href: '/' },
              { label: 'Group Programs', href: '/programs' },
              { label: 'For Organizations', href: '/organizations' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm transition-opacity hover:opacity-100"
                style={{ color: 'hsl(var(--white) / 0.6)' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--white) / 0.4)' }}>Contact</p>
            <p className="text-sm mb-1" style={{ color: 'hsl(var(--white) / 0.7)' }}>Monica Slubicki, MD</p>
            <a
              href="mailto:monica@wiserecovery.com"
              className="text-sm hover:opacity-100 transition-opacity"
              style={{ color: 'hsl(var(--white) / 0.6)' }}
            >
              monica@wiserecovery.com
            </a>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'hsl(var(--white) / 0.12)', color: 'hsl(var(--white) / 0.35)' }}
        >
          <p>© {new Date().getFullYear()} Wise Recovery. All rights reserved.</p>
          <p>Educational content only. Not medical advice.</p>
        </div>
      </div>
    </footer>
  );
}
