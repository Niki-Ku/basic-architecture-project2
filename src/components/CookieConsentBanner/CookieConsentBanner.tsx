import Button from "../Button/Button";

interface CookieConsentBannerProps {
  onAcceptClick: () => void;
  onDeclineClick: () => void;
}

const CookieConsentBanner:React.FC<CookieConsentBannerProps> = ({ onAcceptClick, onDeclineClick }) => {
  return (
    <div className="bg-white text-black-default p-2 fixed bottom-0">
      <h3 className="text-xl font-bold">We Value Your Privacy</h3>
      <p>
        We use cookies to personalize your experience, analyze site traffic, and serve targeted advertisements. By continuing to use this website, you consent to our use of cookies. You can manage your preferences or view our cookie policy at any time.
      </p>
      <div className="mt-4">
        <span className="mr-2">
          <Button label="Accept" onClick={onAcceptClick}></Button>
        </span>
        <span>
          <Button label="Decline" variant="secondary" onClick={onDeclineClick}></Button>
        </span>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
