import { forwardRef } from "react";
import { IPrivacyPageComponents } from "../../../types/privacyInterfaces";


const PrivacyStatement = forwardRef<HTMLDivElement, IPrivacyPageComponents>(( {id}, ref) => {
  return (
    <section ref={ref} id={id} className="text-black">
      <h1 className="text-3xl">Privacy Statement</h1>
      <p>
        This Privacy Statement explains how we collect, use, and disclose your personal information when you use the "Netflix service” to access “Netflix content” as those terms are defined in the Netflix Terms of Use (netflix.com/terms). It also explains what privacy rights you have and how to exercise them. Certain functionalities or apps that are part of the Netflix service may also provide you with contextual privacy information or choices, in addition to the information and choices described in this Privacy Statement. Please note that this Privacy Statement may be easier to navigate when viewed on your web browser.
      </p>
    </section>
  );
});

export default PrivacyStatement;
