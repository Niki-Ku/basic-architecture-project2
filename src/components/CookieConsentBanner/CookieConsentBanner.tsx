import Button from "../Button/Button";

const CookieConsentBanner = () => {
  return (
    <div className="bg-white text-black-default p-2">
      <h3 className="text-xl font-bold">We Value Your Privacy</h3>
      <p>
        We use cookies to personalize your experience, analyze site traffic, and serve targeted advertisements. By continuing to use this website, you consent to our use of cookies. You can manage your preferences or view our cookie policy at any time.
      </p>
      <div>
        <Button label="Accept"></Button>
        <Button label="Decline" variant="secondary"></Button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
