import { createFileRoute } from "@tanstack/react-router";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Shopping Cart | TIMES SQUARE Import & Export" },
      {
        name: "description",
        content:
          "Review the watches in your cart, adjust quantities and proceed to checkout with TIMES SQUARE Import & Export.",
      },
      { property: "og:title", content: "Shopping Cart | TIMES SQUARE" },
      {
        property: "og:description",
        content: "Review your selected timepieces and proceed to checkout.",
      },
      { property: "og:url", content: "/cart" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/cart" }],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, total, setQty, remove, count } = useCart();
  const shipping = total > 0 ? 25 : 0;

  return (
    <>
      <PageHeader
        eyebrow="Your selection"
        title="Shopping Cart"
        description="Adjust quantities or remove items before completing your order."
      />

      <section className="mx-auto max-w-7xl px-5 py-16">
        {items.length === 0 ? (
          <div className="border border-border bg-card px-6 py-24 text-center">
            <h2 className="font-display text-3xl">Your cart is empty</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Browse the collection and add a timepiece to get started.
            </p>
            <Link to="/products" className="btn-gold mt-8">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div className="divide-y divide-border border border-border bg-card">
              {items.map(({ product, qty }) => (
                <div
                  key={product.id}
                  className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-24 w-24 shrink-0 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-xl">{product.name}</h3>
                    <p className="mt-1 text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Model {product.model}
                    </p>
                    <p className="mt-2 text-sm text-gold">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-border">
                      <button
                        aria-label="Decrease quantity"
                        className="px-3 py-2 text-muted-foreground hover:text-gold"
                        onClick={() => setQty(product.id, qty - 1)}
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-10 text-center text-sm">{qty}</span>
                      <button
                        aria-label="Increase quantity"
                        className="px-3 py-2 text-muted-foreground hover:text-gold"
                        onClick={() => setQty(product.id, qty + 1)}
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                    <span className="w-24 text-right font-display text-xl">
                      {formatPrice(product.price * qty)}
                    </span>
                    <button
                      aria-label={`Remove ${product.name}`}
                      className="p-2 text-muted-foreground hover:text-destructive"
                      onClick={() => remove(product.id)}
                    >
                      <Trash2 className="h-4 w-4" strokeWidth={1.3} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit border border-border bg-card p-8">
              <h2 className="font-display text-2xl">Order summary</h2>
              <div className="gold-rule mt-5 w-16" />
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <dt>Items</dt>
                  <dd>{count}</dd>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <dt>Subtotal</dt>
                  <dd>{formatPrice(total)}</dd>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <dt>Estimated shipping</dt>
                  <dd>{formatPrice(shipping)}</dd>
                </div>
                <div className="flex justify-between border-t border-border pt-4 font-display text-2xl text-gold">
                  <dt>Total</dt>
                  <dd>{formatPrice(total + shipping)}</dd>
                </div>
              </dl>
              <Link to="/checkout" className="btn-gold mt-8 w-full">
                Proceed to checkout
              </Link>
              <Link to="/products" className="btn-outline-gold mt-3 w-full">
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </section>
    </>
  );
}
