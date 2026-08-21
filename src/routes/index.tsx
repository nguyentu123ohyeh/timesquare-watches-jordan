import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, PackageCheck, ShieldCheck, Truck } from "lucide-react";
import hero from "@/assets/hero-watch.jpg";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TIMES SQUARE Import & Export | Premium Watch Trading, Jordan" },
      {
        name: "description",
        content:
          "Premium watch importer, exporter and distributor based in Amman, Jordan. Browse luxury, casual and gift watches from trusted international suppliers.",
      },
      {
        property: "og:title",
        content: "TIMES SQUARE Import & Export | Premium Watch Trading",
      },
      {
        property: "og:description",
        content:
          "Importing and distributing quality watches worldwide from Amman, Jordan since 2017.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Authentic Sourcing",
    text: "Every timepiece is sourced directly from authorised international suppliers with full documentation.",
  },
  {
    icon: Globe2,
    title: "Global Trade Network",
    text: "Import and export corridors across the Gulf, Europe and Asia, coordinated from our Amman head office.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    text: "Insured air and sea freight, customs clearance and door-to-door delivery for wholesale volumes.",
  },
  {
    icon: PackageCheck,
    title: "Retail & Wholesale",
    text: "Flexible order sizes for retailers, corporate gifting programmes and individual collectors.",
  },
];

function Home() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Luxury gold chronograph wristwatch on dark stone"
          width={1920}
          height={1088}
          className="h-[78vh] min-h-[520px] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/10" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-5">
            <div className="max-w-xl fade-up">
              <p className="eyebrow">Amman, Jordan · Established 2017</p>
              <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-7xl">
                Time, traded with
                <span className="block text-gold">precision.</span>
              </h1>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                TIME SQUARE FOR IMPORT &amp; EXPORT COMPANY supplies authentic
                luxury, casual and gift timepieces to retailers and collectors
                across international markets.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link to="/products" className="btn-gold">
                  Explore the collection
                </Link>
                <Link to="/contact" className="btn-outline-gold">
                  Request a quotation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4">
          {[
            ["2017", "Year established"],
            ["40+", "Supplier partners"],
            ["12", "Export markets"],
            ["100%", "Authentic stock"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <div className="font-display text-4xl text-gold">{value}</div>
              <div className="mt-2 text-[0.62rem] uppercase tracking-[0.24em] text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">The Company</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              A Jordanian trading house built on trust
            </h2>
            <div className="gold-rule mt-6 w-24" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Registered in Amman as a Limited Liability Company in 2017, TIME
              SQUARE FOR IMPORT &amp; EXPORT COMPANY specialises in importing and
              exporting quality watches and personal gift watches from
              international suppliers.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Under the direction of Mr. Said Ahmad Said Qaisieh, the company has
              grown from a local distributor into a regional trading partner
              serving retail chains, boutiques and corporate gifting programmes.
            </p>
            <Link to="/about" className="btn-outline-gold mt-8">
              About the company
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
            {[
              ["Registration No.", "49747"],
              ["National No.", "200164915"],
              ["Business type", "LLC"],
              ["Registered capital", "5,000 JOD"],
              ["Head office", "Amman, Jordan"],
              ["Industry", "Watch trading"],
            ].map(([k, v]) => (
              <div key={k} className="bg-card p-6">
                <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="mt-2 font-display text-xl text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Featured</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Selected timepieces
              </h2>
            </div>
            <Link to="/products" className="btn-outline-gold">
              View all products
            </Link>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="text-center">
          <p className="eyebrow">Why choose us</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Trading standards you can rely on
          </h2>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card p-8">
              <Icon className="h-7 w-7 text-gold" strokeWidth={1.1} />
              <h3 className="mt-5 font-display text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-24">
          <div className="grid gap-14 md:grid-cols-2">
            <div>
              <p className="eyebrow">Global capability</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                From Amman to markets worldwide
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Our logistics desk manages the full trade cycle: supplier
                negotiation, quality inspection, export documentation, customs
                clearance and last-mile delivery.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Gulf Cooperation Council markets",
                  "European Union distribution partners",
                  "East and South-East Asian sourcing",
                  "Levant retail and wholesale network",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-sm">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                ["Sourcing", "Vetted manufacturers and authorised distributors."],
                ["Inspection", "Batch-level quality and authenticity checks."],
                ["Documentation", "Certificates of origin and invoicing."],
                ["Delivery", "Insured freight with full tracking."],
              ].map(([t, d]) => (
                <div key={t} className="border border-border bg-card p-6">
                  <h3 className="font-display text-2xl text-gold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24">
        <div className="text-center">
          <p className="eyebrow">Client trust</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Preferred by retailers across the region
          </h2>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            [
              "Consistent stock, clean paperwork and delivery dates we can plan around.",
              "Retail Group Buyer, Amman",
            ],
            [
              "Their corporate gift watch programme made our annual staff gifting effortless.",
              "HR Director, Dubai",
            ],
            [
              "A responsive export partner — quotations within hours, not days.",
              "Distribution Partner, Istanbul",
            ],
          ].map(([quote, author]) => (
            <blockquote key={author} className="border border-border bg-card p-8">
              <p className="font-display text-xl leading-relaxed">“{quote}”</p>
              <footer className="mt-6 text-[0.62rem] uppercase tracking-[0.24em] text-gold">
                {author}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="font-display text-4xl md:text-5xl">
            Ready to place your order?
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Browse the catalogue and build your cart, or contact our trade desk
            for wholesale pricing and shipping terms.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link to="/products" className="btn-gold">
              Shop the collection
            </Link>
            <Link to="/contact" className="btn-outline-gold">
              Contact trade desk
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
