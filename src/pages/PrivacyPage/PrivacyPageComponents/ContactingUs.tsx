import { forwardRef } from "react";

const ContactingUs = forwardRef<HTMLDivElement>(({}, ref) => (
  <section id="contactingUs" ref={ref} className="text-black">
    <h3>Contacting US</h3>
    <p>
      For questions about this Privacy Statement, our use of your personal information, or how to exercise your privacy rights, please contact our Data Protection Officer/Privacy Office at privacy@netflix.com. For general questions about the Netflix service, your account, or how to contact customer service, please visit help.netflix.com.
    </p>
    <p>
      Information about the specific Netflix entity (or entities) that are responsible for your personal information (known as the “data controller” in certain countries) is available at netflix.com/legal/corpinfo.
    </p>
  </section>
));

export default ContactingUs;
