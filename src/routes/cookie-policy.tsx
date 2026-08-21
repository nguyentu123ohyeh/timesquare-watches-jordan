import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookie-policy")({
  component: Page,
});


function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-20">

      <h1 className="font-display text-4xl">
        Cookie Policy
      </h1>


      <div className="mt-10 space-y-8 leading-relaxed">


        <section>
          <h2 className="text-xl font-semibold">
            1. What Are Cookies?
          </h2>

          <p>
            Cookies are small text files stored on your device
            when you visit a website. They help websites
            remember user preferences and improve browsing
            performance.
          </p>
        </section>



        <section>
          <h2 className="text-xl font-semibold">
            2. How We Use Cookies
          </h2>

          <p>
            TIME SQUARE FOR IMPORT & EXPORT COMPANY uses cookies
            to improve website functionality, remember user
            preferences, understand website usage and provide
            a better browsing experience.
          </p>
        </section>



        <section>
          <h2 className="text-xl font-semibold">
            3. Types of Cookies We Use
          </h2>


          <p>
            <strong>Essential Cookies:</strong>
            <br />
            Required for basic website operation and navigation.
          </p>


          <p>
            <strong>Functional Cookies:</strong>
            <br />
            Help remember user settings and preferences.
          </p>


          <p>
            <strong>Analytics Cookies:</strong>
            <br />
            Help us understand visitor behaviour and improve
            website performance.
          </p>

        </section>




        <section>
          <h2 className="text-xl font-semibold">
            4. Third-Party Services
          </h2>

          <p>
            Some third-party services, such as payment providers
            or analytics tools, may use cookies according to
            their own privacy policies.
          </p>

        </section>



        <section>
          <h2 className="text-xl font-semibold">
            5. Managing Cookies
          </h2>

          <p>
            Visitors can control or disable cookies through
            their browser settings. Please note that disabling
            cookies may affect certain website functions.
          </p>

        </section>



        <section>
          <h2 className="text-xl font-semibold">
            6. Cookie Consent
          </h2>

          <p>
            By continuing to use this website, visitors agree
            to the use of cookies as described in this policy.
          </p>

        </section>


      </div>

    </main>
  );
}