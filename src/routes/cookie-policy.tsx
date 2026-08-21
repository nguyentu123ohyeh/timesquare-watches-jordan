import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
export const Route = createFileRoute('/cookie-policy')({ component: Cookie });
function Cookie(){return <><PageHeader title="Cookie Policy" subtitle="Website cookies"/><main className="mx-auto max-w-4xl px-5 py-16 text-muted-foreground"><p>This website uses cookies to improve user experience, remember preferences and analyze website performance.</p></main></>}
