import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  return <>
    <PageHeader title="Contact Us" subtitle="TIME SQUARE FOR IMPORT & EXPORT COMPANY" />
    <main className="mx-auto max-w-5xl px-5 py-16">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl">Head Office</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            TIME SQUARE FOR IMPORT & EXPORT COMPANY<br/>
            Amman, Jordan<br/>
            Established 2017
          </p>
          <p className="mt-5 text-muted-foreground">
            Email: info@timesquare-import.com<br/>
            Phone: +962 XX XXX XXXX
          </p>
        </div>
        <form className="space-y-4">
          <input className="w-full border p-3 bg-background" placeholder="Full Name" />
          <input className="w-full border p-3 bg-background" placeholder="Email" />
          <textarea className="w-full border p-3 bg-background" rows={5} placeholder="Message" />
          <button className="btn-gold">Send Message</button>
        </form>
      </div>
    </main>
  </>;
}
