import { useState } from 'react';
import { Link, useLocation } from 'react-router';

const navLinks = [
  { label: 'Group Programs', href: '/programs' },
  { label: 'For Organizations', href: '/organizations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header
      style={{ background: 'hsl(var(--header-bg))' }}
      className="sticky top-0 z-50 border-b border-foreground/8"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="shrink-0 flex items-center self-center">
          <img
            src="/airo-assets/images/logo/horizontal"
            alt="Wise Recovery"
            className="block h-auto max-h-8 md:max-h-9 w-auto max-w-full object-contain self-center"
          />
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm tracking-wide transition-colors duration-200 ${
                  isActive ? 'text-foreground' : 'text-foreground/45 hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="block w-5 h-px bg-foreground mb-1.5" />
          <span className={`block w-5 h-px bg-foreground transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <span className="block w-5 h-px bg-foreground mt-1.5" />
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          style={{ background: 'hsl(var(--header-bg))' }}
          className="md:hidden border-t border-foreground/8 px-6 py-6 flex flex-col gap-5"
        >
          <Link to="/" className="text-sm text-foreground/60 hover:text-foreground" onClick={() => setMenuOpen(false)}>Home</Link>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
