import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const KEY = "ts-cookie-consent";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setShow(true);
  }, []);

  if (!show) return null;

  const decide = (value: string) => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/40 bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          We use cookies to improve browsing, remember your cart and analyse traffic.
          Read our{" "}
          <Link to="/cookie-policy" className="text-gold underline-offset-4 hover:underline">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button className="btn-outline-gold" onClick={() => decide("essential")}>
            Essential only
          </button>
          <button className="btn-gold" onClick={() => decide("all")}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
