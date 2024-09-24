import { forwardRef } from "react";
import { IPrivacyPageComponents } from "../../../types/privacyInterfaces";


const ComunicationAndMarketing = forwardRef<HTMLDivElement, IPrivacyPageComponents>(({ id }, ref) => (
  <article id={id} ref={ref} className="text-black">
    <h3 className="text-3xl">Communication and Marketing Preferences</h3>
    <ul>
      <li>Email and Text Messages. If you no longer want to receive certain communications from us via email or text message, please access the “Notification settings” option for the relevant profile within the “Account” section of our website. Alternatively, click the “unsubscribe” link in the email or reply STOP (or as otherwise instructed) to the text message (note: you may receive a confirmation text message in this case). Please note that you cannot unsubscribe from transactional messages from us, such as messages relating to your account transactions.</li>
    </ul>
  </article>
));

export default ComunicationAndMarketing;