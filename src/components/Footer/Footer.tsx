import { Link } from "react-router-dom";
import { footerLinks } from "../../config/routeConfig";


const Footer = () => {
  return (
    <footer className="w-full bg-darkGray py-3">
      <div className="w-[90%] mx-auto">
        <p className="font-light text-normal text-gray mb-7">Questions? Contact us</p>
        <ul className="">
          {footerLinks.map((link) => {
            return (
              <li key={link.text} className="inline-block w-3/12 min-w-[100px] mb-4 pr-[22px] text-[13px] text-[rgb(var(--color-gray))] ">
                <Link 
                  key={`link-${link.text}`} 
                  to={link.url}
                  className="hover:underline"
                >{link.text}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
