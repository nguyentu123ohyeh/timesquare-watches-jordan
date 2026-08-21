import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/lib/cart";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Collection" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-display text-2xl tracking-[0.2em] text-foreground">
            TIMES SQUARE
          </span>
          <span className="mt-1 text-[0.55rem] tracking-[0.42em] text-gold">
            IMPORT &amp; EXPORT
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.72rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/cart"
            aria-label="Shopping cart"
            className="relative p-2 text-foreground transition-colors hover:text-gold"
          >
            <ShoppingBag className="h-5 w-5" strokeWidth={1.3} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[0.6rem] font-medium text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          <button
            className="p-2 text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.3} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.3} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface px-5 py-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-[0.75rem] uppercase tracking-[0.22em] text-muted-foreground"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
