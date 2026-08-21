import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Watch Collection | TIMES SQUARE Import & Export" },
      {
        name: "description",
        content:
          "Browse our international watch catalogue for wholesale and import-export cooperation. from our Amman head office.",
      },
      { property: "og:title", content: "Watch Collection | TIMES SQUARE" },
      {
        property: "og:description",
        content:
          "International watch catalogue available for wholesale and import-export cooperation.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCategory = category === "All" || p.category === category;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.model.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <>
      <PageHeader
        eyebrow="Collection"
        title="Our Watch Catalogue"
        description="Explore our watch catalogue including G-Shock, Edifice and classic collections available for wholesale and international trading inquiries."
      />

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              strokeWidth={1.3}
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or model number"
              aria-label="Search products"
              className="w-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-gold"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["All", ...CATEGORIES].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`border px-4 py-2 text-[0.62rem] uppercase tracking-[0.2em] transition-colors ${
                  category === c
                    ? "border-gold bg-gold text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "product" : "products"}
        </p>

        {filtered.length === 0 ? (
          <p className="py-24 text-center font-display text-2xl text-muted-foreground">
            No products match your search.
          </p>
        ) : (
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
