import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | TIMES SQUARE Import & Export, Amman" },
      {
        name: "description",
        content:
          "Established in Amman in 2017, TIME SQUARE FOR IMPORT & EXPORT COMPANY imports and exports quality watches and personal gift watches worldwide.",
      },
      { property: "og:title", content: "About TIMES SQUARE Import & Export" },
      {
        property: "og:description",
        content:
          "Company history, mission, vision and business activities of TIME SQUARE FOR IMPORT & EXPORT COMPANY, Jordan.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="TIME SQUARE FOR IMPORT & EXPORT COMPANY"
        description="Established in 2017 in Amman, Jordan. The company specialises in importing and exporting quality watches and personal gift watches from international suppliers."
      />

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">Company history</p>
            <h2 className="mt-4 font-display text-3xl">From Amman outward</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Founded in 2017 as a Limited Liability Company and registered in the
              Hashemite Kingdom of Jordan under registration number 49747, TIMES
              SQUARE began as a specialised importer of branded wristwatches for
              the local Jordanian retail market.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              As demand grew, the company expanded into export activity, building
              direct relationships with manufacturers and authorised distributors
              in Asia and Europe, and supplying retailers, boutiques and corporate
              clients across the region.
            </p>
          </div>
          <div className="grid gap-8">
            <div className="border border-border bg-card p-8">
              <p className="eyebrow">Mission</p>
              <p className="mt-4 font-display text-2xl leading-snug">
                To deliver authentic, well-priced timepieces to our partners with
                dependable logistics and complete transparency.
              </p>
            </div>
            <div className="border border-border bg-card p-8">
              <p className="eyebrow">Vision</p>
              <p className="mt-4 font-display text-2xl leading-snug">
                To be the leading Jordanian trading house for watches, connecting
                international manufacturers with Middle Eastern and global markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-5 py-20">
          <p className="eyebrow">Business activities</p>
          <h2 className="mt-4 font-display text-3xl">What we do</h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Import", "Sourcing and importing branded watches from international suppliers."],
              ["Export", "Exporting stock to distributors and retailers in regional and global markets."],
              ["Distribution", "Wholesale supply to boutiques, retail chains and gift retailers."],
              ["Retail", "Direct retail sales of luxury, casual, men's, women's and gift watches."],
            ].map(([t, d]) => (
              <div key={t} className="bg-card p-8">
                <h3 className="font-display text-2xl text-gold">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">Director general</p>
            <h2 className="mt-4 font-display text-3xl">
              Said Ahmad Said Qaisieh
            </h2>
            <div className="gold-rule mt-6 w-24" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              As Director General, Mr. Qaisieh oversees supplier relationships,
              trade compliance and the company's export strategy. His approach
              places long-term partnership and product authenticity ahead of
              short-term volume.
            </p>
            <Link to="/contact" className="btn-outline-gold mt-8">
              Contact the office
            </Link>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
            {[
              ["Company name", "TIME SQUARE FOR IMPORT & EXPORT COMPANY"],
              ["Brand name", "TIMES SQUARE Import & Export"],
              ["Country", "Jordan"],
              ["Head office", "Amman, Jordan"],
              ["Established", "2017"],
              ["Business type", "Limited Liability Company (LLC)"],
              ["Registration No.", "49747"],
              ["National No.", "200164915"],
              ["Registered capital", "5,000 JOD"],
              ["Industry", "Watch import, distribution and retail"],
            ].map(([k, v]) => (
              <div key={k} className="bg-card p-6">
                <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {k}
                </dt>
                <dd className="mt-2 text-sm text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
