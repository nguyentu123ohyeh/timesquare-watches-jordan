import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { formatPrice, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <article className="group flex flex-col border border-border bg-card transition-colors hover:border-gold/60">
      <div className="relative overflow-hidden bg-background">
        <img
          src={product.image}
          alt={`${product.name} — model ${product.model}`}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 border border-gold/50 bg-background/70 px-2 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-gold">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl">{product.name}</h3>
        <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Model {product.model}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <div className="mt-6 flex items-center justify-between gap-3">
          <span className="font-display text-2xl text-gold">
            {formatPrice(product.price)}
          </span>
          <button
            className="btn-gold !px-5 !py-2.5"
            onClick={() => {
              add(product.id);
              setAdded(true);
              setTimeout(() => setAdded(false), 1500);
            }}
          >
            {added ? (
              <>
                <Check className="h-3.5 w-3.5" /> Added
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" /> Add to cart
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}
