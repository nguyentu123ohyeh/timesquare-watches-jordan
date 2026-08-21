import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {

  const { items } = useCart();

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact Us"
        description="TIME SQUARE FOR IMPORT & EXPORT COMPANY"
      />

      <main className="mx-auto max-w-5xl px-5 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <div className="mt-8">

<h3 className="font-semibold text-xl">
Selected Products
</h3>


{
items.length === 0 ?

<p className="mt-3 text-sm text-muted-foreground">
No selected products.
</p>

:

<ul className="mt-3 space-y-2 text-sm">

{
items.map(({product,qty})=>(
<li key={product.id}>
{product.name} ({product.model}) x {qty}
</li>
))
}

</ul>

}

</div>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              TIME SQUARE FOR IMPORT &amp; EXPORT COMPANY
              <br />
              Amman, Jordan
              <br />
              Established 2017
            </p>

            <p className="mt-5 text-muted-foreground">
              Email: info@timesquare-import.com
              <br />
              Phone: +962 XX XXX XXXX
            </p>
          </div>

          <form className="space-y-4">
            <input className="w-full border p-3 bg-background" placeholder="Full Name" />
            <input className="w-full border p-3 bg-background" placeholder="Company Name" />
            <input className="w-full border p-3 bg-background" placeholder="Email" />
            <textarea
              className="w-full border p-3 bg-background"
              rows={5}
              placeholder="Message"
            />
            <button type="button" className="btn-gold">
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
