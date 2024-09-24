import { forwardRef } from "react";
import { IPrivacyPageComponents } from "../../../types/privacyInterfaces";


const TheCategoriesOfPersonal = forwardRef<HTMLDivElement, IPrivacyPageComponents>(({ id }, ref) => (
  <article id={id} ref={ref} className="text-black">
    <h3 className="text-3xl">The Categories of Personal Information We Collect</h3>
    <p>We collect the following categories of personal information about you:</p>
    <ul>
      <li>Personal details: When you create your Netflix account, we collect your contact information (such as your email address) and authentication information for your login (such as a password). Depending on how you subsequently set up your account and method of payment, and which features you use, we also collect one or more of the following: first and last name, phone number, postal address, and other identifiers you provide to us. If you subscribe to an ad supported subscription plan, we also collect gender and date of birth.</li>
      <li>Payment details: We collect your payment details, and other information to process your payments, including your payment history, billing address, and gift cards you have redeemed.</li>
      <li>Netflix account/profile information: We collect information that is associated with your Netflix account and/or Netflix profiles on your account (such as profile name and icon, Netflix game handle, ratings and feedback you provide for Netflix content), “My List” (watch list of titles), “continue watching” information, account/profile settings, and choices in connection with your use of the Netflix service.</li>
      <li>Usage information: We collect information about your interaction with the Netflix service (including playback events, such as play, pause, etc.), choices made when engaging with interactive titles, your Netflix game activity (such as gameplay, game use and interaction information, and progress or saved game information), Netflix viewing and gaming history, search queries on the Netflix service, and other information about your use and interaction with the Netflix service (such as app clicks, text input, time and duration of access, and camera/photo access for QR-code and similar functionality).</li>
      <li>Advertising information: If you subscribe to an ad supported subscription plan, we collect information about the ads on Netflix (“Advertisements,” as defined in the Netflix Terms of Use) that you view or interact with, device information (such as resettable device identifiers), IP addresses, and information provided by Advertising Companies (such as information about your likely interests they have collected or inferred from your visits to other websites and apps). We use this information to display Advertisements to you in the Netflix service (including behavioral advertisements in accordance with your preferences)</li>
    </ul>

  </article>
));

export default TheCategoriesOfPersonal;
