import { Link } from "react-router-dom";
import Banner from '../../assets/images/movie-trendy-banner-vector.jpg'
import PromotionalBanner from "../../components/PromotionalBanner/PromotionalBanner";
// import CookieConsentBanner from "../../components/CookieConsentBanner/CookieConsentBanner";

const HomePage = () => {

  return(
    <div className="min-h-[100svh]">
      <h1>
        Home page
      </h1>
      <div>
        <span>Done pages:</span>
        <br />
        <Link to='/faq' className="underline">FAQ page</Link>
        <br />
        <Link to="/privacy" className="underline">Privacy page</Link>
        <br />
        <Link to="/termsofuse" className="underline">Terms of Use</Link>
        <br />
        <br />
        <span>In process:</span>
      </div>
    </div>
  )
};

export default HomePage;
