import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/checkout')({
  component: CheckoutPage,
});

function CheckoutPage() {
  return <>
    <PageHeader title="Checkout" subtitle="Secure order confirmation" />
    <main className="mx-auto max-w-3xl px-5 py-16">
      <div className="space-y-4">
        <input className="w-full border p-3 bg-background" placeholder="Full Name" />
        <input className="w-full border p-3 bg-background" placeholder="Email Address" />
        <input className="w-full border p-3 bg-background" placeholder="Phone Number" />
        <textarea className="w-full border p-3 bg-background" rows={4} placeholder="Shipping Address" />
      </div>
      <div className="mt-10 border p-6">
        <h2 className="font-display text-2xl">Payment Method</h2>
        <p className="mt-3 text-muted-foreground">Only PayPal payment is available.</p>
        <a href="https://paypal.com" className="btn-gold inline-block mt-5">Continue Payment via PayPal</a>
      </div>
    </main>
  </>;
}
