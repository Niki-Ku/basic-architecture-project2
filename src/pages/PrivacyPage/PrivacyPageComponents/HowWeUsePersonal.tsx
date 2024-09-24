import { forwardRef } from "react";
import { IPrivacyPageComponents } from "../../../types/privacyInterfaces";


const HowWeUsePersonal = forwardRef<HTMLDivElement, IPrivacyPageComponents>(({ id }, ref) => (
  <article id={id} ref={ref} className="text-black">
    <h3 className="text-3xl">How We Use Your Personal Information</h3>
    <p>We use your personal information to provide, maintain, improve, and promote the Netflix service, and to communicate with you. This involves using the categories of personal information listed above for the following purposes:</p>
    <ul>
      <li>o provide our service including all features and functionalities, websites and apps, user interfaces, and content and software associated with the Netflix service. This includes personalized recommendations for Netflix content that we think will be of interest to you (learn more regarding recommendations for shows and movies: netflix.com/recommendations). This may also include personalizing the features and functionalities of the service (such as the way in which the recommendations are presented to you), and localizing Netflix content relevant to your geography in compliance with our content partners’ licensing terms. We use the following categories of personal information for this purpose: personal details, Netflix account/profile information, usage information, device and network information, and communications.</li>
    </ul>
  </article>
));

export default HowWeUsePersonal;