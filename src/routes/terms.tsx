import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
export const Route = createFileRoute('/terms')({ component: Terms });
function Terms(){return <><PageHeader title="Terms & Conditions" subtitle="Shopping terms"/><main className="mx-auto max-w-4xl px-5 py-16 text-muted-foreground"><p>Products, prices, availability and shipping conditions may change. Customers should confirm order details before payment.</p></main></>}
