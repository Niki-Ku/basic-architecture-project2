import { forwardRef } from "react";
import { IPrivacyPageComponents } from "../../../types/privacyInterfaces";


const WhereWeCollectPersonal = forwardRef<HTMLDivElement, IPrivacyPageComponents>(({ id }, ref) => (
  <article id={id} ref={ref} className="text-black">
    <h3 className="text-3xl">Where We Collect Personal Information From</h3>
    <p>We collect your personal information from the following sources:</p>
    <ul>
      <li>Directly from you: When you register with the Netflix service, update your Netflix account or profile, correspond with us, or respond to our surveys, you may provide (and we will collect) the following categories of personal information: personal details, payment details, Netflix account/profile information, and communications.
      </li>
      <li>Automatically when you use our service: We automatically collect the following categories of personal information in connection with your use of the Netflix service: Netflix account/profile information, usage information, advertising information, device and network information, and communications.</li>
      <li>From Partners whose products and services you use: We may collect the following categories of personal information about you from third parties whose services you use to access, pay for, or interact with the Netflix service (“Partners”): personal details, payment details, usage information, and device and network information. The categories of personal information that Partners provide to us will vary depending on the nature of the Partner and your relationship with them. Our Partners may include your TV manufacturer, internet service provider, streaming media device provider, mobile phone carriers, or other companies who collect payment for the Netflix service. For example, Partners may provide us:</li>
    </ul>
  </article>
));

export default WhereWeCollectPersonal;