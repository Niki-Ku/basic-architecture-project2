import { forwardRef } from "react";

const PrivacyStatement = forwardRef<HTMLDivElement>(( {}, ref) => {
  return (
    <section ref={ref} className="text-black">
      <h1>Privacy Statement</h1>
      <p>
        This Privacy Statement explains how we collect, use, and disclose your personal information when you use the "Netflix service” to access “Netflix content” as those terms are defined in the Netflix Terms of Use (netflix.com/terms). It also explains what privacy rights you have and how to exercise them. Certain functionalities or apps that are part of the Netflix service may also provide you with contextual privacy information or choices, in addition to the information and choices described in this Privacy Statement. Please note that this Privacy Statement may be easier to navigate when viewed on your web browser.
      </p>
    </section>
  );
});

export default PrivacyStatement;
