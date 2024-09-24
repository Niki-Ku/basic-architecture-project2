import { forwardRef } from "react";
import { IPrivacyPageComponents } from "../../../types/privacyInterfaces";


const AdvertisingChoices = forwardRef<HTMLDivElement, IPrivacyPageComponents>(({ id }, ref) => (
  <article id={id} ref={ref} className="text-black">
    <h3 className="text-3xl">Advertising Choices (Netflix Ad Supported Subscription Plans)</h3>
    <ul>
      <li>Behavioral Advertising Choices
        If you subscribe to an ad supported subscription plan, we can present you with Advertisements, including behavioral advertisements. If you do not want to be presented with behavioral advertisements, you can indicate your choices by changing the “Behavioral Advertising” setting located in the “Privacy and data settings” menu (for the relevant profile) of the “Account” section of our website.
        When you choose to opt out of receiving behavioral advertisements, you will still see Advertisements, but they will not be behavioral advertisements. If you opt out, we may still collect and use the information for other purposes.
        An option to opt out is not provided in a Kids profile because we do not engage in behavioral advertising on Kids profiles.
      </li>
    </ul>
  </article>
));

export default AdvertisingChoices;