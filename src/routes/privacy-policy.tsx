import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
export const Route = createFileRoute('/privacy-policy')({ component: Privacy });
function Privacy(){return <><PageHeader title="Privacy Policy" subtitle="Customer information protection"/><main className="mx-auto max-w-4xl px-5 py-16 text-muted-foreground"><p>TIME SQUARE FOR IMPORT & EXPORT COMPANY respects customer privacy. Information collected through this website is used only for order processing, customer support and business communication.</p></main></>}
