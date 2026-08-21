import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: Page,
});

function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-20">

      <h1 className="font-display text-4xl">
        Privacy Policy
      </h1>


      <div className="mt-10 space-y-8 leading-relaxed">


        <section>
          <h2 className="text-xl font-semibold">
            1. Introduction
          </h2>

          <p>
            TIME SQUARE FOR IMPORT & EXPORT COMPANY respects
            customer privacy and is committed to protecting
            personal information collected through this website.
          </p>
        </section>


        <section>
          <h2 className="text-xl font-semibold">
            2. Information We Collect
          </h2>

          <p>
            We may collect information provided by customers
            including name, email address, phone number,
            shipping information and business inquiry details.
          </p>
        </section>


        <section>
          <h2 className="text-xl font-semibold">
            3. Use of Information
          </h2>

          <p>
            Customer information is used for responding to
            inquiries, preparing quotations, processing orders,
            improving customer experience and providing business
            communication.
          </p>
        </section>


        <section>
          <h2 className="text-xl font-semibold">
            4. Data Protection
          </h2>

          <p>
            We apply reasonable security measures to protect
            customer information from unauthorized access,
            disclosure or misuse.
          </p>
        </section>


        <section>
          <h2 className="text-xl font-semibold">
            5. Payment Information
          </h2>

          <p>
            This website does not store payment card information.
            Any PayPal payment process is handled through PayPal's
            external payment platform.
          </p>
        </section>


        <section>
          <h2 className="text-xl font-semibold">
            6. Contact
          </h2>

          <p>
            For questions regarding privacy, please contact
            TIME SQUARE FOR IMPORT & EXPORT COMPANY.
          </p>
        </section>


      </div>

    </main>
  );
}