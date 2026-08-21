import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: Page,
});


function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-20">

      <h1 className="font-display text-4xl">
        Terms & Conditions
      </h1>


      <div className="mt-10 space-y-8 leading-relaxed">


        <section>
          <h2 className="text-xl font-semibold">
            1. General Information
          </h2>

          <p>
            These Terms & Conditions govern the use of the
            TIME SQUARE FOR IMPORT & EXPORT COMPANY website
            and services provided through this platform.
          </p>

        </section>



        <section>
          <h2 className="text-xl font-semibold">
            2. Product Information
          </h2>

          <p>
            Product descriptions, images, specifications and
            information are provided for customer reference.
            Product availability and commercial conditions may
            vary depending on order requirements.
          </p>

        </section>



        <section>
          <h2 className="text-xl font-semibold">
            3. Wholesale Orders & Quotations
          </h2>

          <p>
            As an import and export company, product pricing
            may depend on quantity, destination, shipping
            requirements and international trade conditions.
            Customers may contact our sales team for official
            quotations.
          </p>

        </section>



        <section>
          <h2 className="text-xl font-semibold">
            4. Orders and Payment
          </h2>

          <p>
            Orders are confirmed after agreement between the
            customer and the company. Payment methods and
            conditions will be provided according to each
            transaction agreement.
          </p>

        </section>



        <section>
          <h2 className="text-xl font-semibold">
            5. Shipping and Import Regulations
          </h2>

          <p>
            Shipping time, customs procedures and import
            requirements may vary depending on destination
            country regulations.
          </p>

        </section>



        <section>
          <h2 className="text-xl font-semibold">
            6. Returns and Refunds
          </h2>

          <p>
            Return and refund conditions depend on product
            condition, transaction agreement and applicable
            commercial terms.
          </p>

        </section>



        <section>
          <h2 className="text-xl font-semibold">
            7. Intellectual Property
          </h2>

          <p>
            All website content including text, images,
            branding and design elements belongs to TIME SQUARE
            FOR IMPORT & EXPORT COMPANY unless otherwise stated.
          </p>

        </section>



        <section>
          <h2 className="text-xl font-semibold">
            8. Contact Information
          </h2>

          <p>
            For questions regarding these terms, please contact
            TIME SQUARE FOR IMPORT & EXPORT COMPANY.
          </p>

        </section>


      </div>

    </main>
  );
}