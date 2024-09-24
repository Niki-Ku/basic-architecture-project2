import { forwardRef } from "react";
import { IPrivacyPageComponents } from "../../../types/privacyInterfaces";


const YourPrivacyRights = forwardRef<HTMLDivElement, IPrivacyPageComponents>(({ id }, ref) => (
  <article id={id} ref={ref} className="text-black">
    <h3 className="text-3xl">Your Privacy Rights</h3>
    <ul>
      <li>Access, correct, update, or delete your personal information: You have a right to confirm whether we process your personal information and to access and receive a copy of the personal information we process about you. You may also correct or update out-of-date or inaccurate personal information or request that we delete personal information that we hold about you.
      To request a copy of your personal information, please visit netflix.com/account/getmyinfo. In addition, under the "Account" section of our website, you can access and update information about your account, including your contact information, payment information, and various related information about your account. You must be logged in to access the "Account" section.</li>
    </ul>
  </article>
));

export default YourPrivacyRights;