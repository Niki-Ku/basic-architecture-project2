import { forwardRef } from "react";
import { IPrivacyPageComponents } from "../../../types/privacyInterfaces";


const ContactingUs = forwardRef<HTMLDivElement, IPrivacyPageComponents>(({id}, ref) => (
  <section id={id} ref={ref} className="text-black">
    <h3 className="text-3xl">Contacting US</h3>
    <p>
      For questions about this Privacy Statement, our use of your personal information, or how to exercise your privacy rights, please contact our Data Protection Officer/Privacy Office at privacy@netflix.com. For general questions about the Netflix service, your account, or how to contact customer service, please visit help.netflix.com.
    </p>
    <p>
      Information about the specific Netflix entity (or entities) that are responsible for your personal information (known as the “data controller” in certain countries) is available at netflix.com/legal/corpinfo.
    </p>
  </section>
));

export default ContactingUs;
