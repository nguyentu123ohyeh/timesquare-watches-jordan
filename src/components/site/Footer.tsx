import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="font-display text-xl tracking-[0.2em]">TIMES SQUARE</div>
          <div className="mt-1 text-[0.55rem] tracking-[0.42em] text-gold">
            IMPORT &amp; EXPORT
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            TIME SQUARE FOR IMPORT &amp; EXPORT COMPANY
            <br />
            Amman, Jordan · Established 2017
            <br />
            Import &amp; Export | Watches Trading
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="h-4 w-4" strokeWidth={1.3} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow">Navigate</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Collection" },
              { to: "/cart", label: "Shopping Cart" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow">Head Office</h4>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.3} />
              Amman, Jordan
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.3} />
              <a href="mailto:info@timesquare-import.com" className="hover:text-gold">
                info@timesquare-import.com
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.3} />
              +962 XX XXX XXXX
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow">Newsletter</h4>
          <p className="mt-5 text-sm text-muted-foreground">
            New arrivals and trade updates, straight to your inbox.
          </p>
          <form
            className="mt-4 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
              setEmail("");
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-gold"
            />
            <button type="submit" className="btn-gold">
              Subscribe
            </button>
            {done && (
              <span className="text-xs text-gold">Thank you for subscribing.</span>
            )}
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} TIME SQUARE FOR IMPORT &amp; EXPORT COMPANY.
            Reg. No. 49747 · National No. 200164915
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <span className="text-border">|</span>
            <Link to="/cookie-policy" className="hover:text-gold">
              Cookie Policy
            </Link>
            <span className="text-border">|</span>
            <Link to="/terms" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
