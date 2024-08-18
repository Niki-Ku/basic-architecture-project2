import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import NetflixLogo from '../../assets/images/netflix-logo.png';
import "./Header.css";

function Header() {
  const location = useLocation();

  const activeClass = ( path:string ) => {
    return location.pathname === path
    ? "text-lg font-semibold text-orange-500"
    : "text-lg font-semibold text-white hover:text-orange-500"
  };

  const links = [
    {name: 'Home', path: '/'},
    {name: 'Search', path: '/search'},
    {name: 'Login', path: '/login'},
    {name: 'User', path: '/user'},
  ];

  const [open, setOpen] = useState(false);

  return (
    // <header className="bg-transparent p-6 flex justify-between fixed top-0 left-0 w-full header">
    <header className="md:flex md:justify-between z-20 md:items-center bg-transparent text-center p-6 fixed top-0 left-0 w-full relative">
      <div className="">
        <Link to="/">
          <img src={NetflixLogo} alt="Netflix Logo" />
        </Link>
      </div>
      <div 
        className={`burger-icon ${open ? 'active' : ''}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
      </div>
      <nav>
        <ul className={`md:flex gap-5 bg-slate-900 md:bg-transparent md:z-auto absolute w-full md:static z-[-1] ease-in ${open ? '' : '-translate-y-[500px]'} md:translate-y-0`}>
          {
            links.map((link) => (
              <li className="transform p-4 md:p-0 hover:scale-110 transition duration-200">
                <Link 
                  className={activeClass(`${link.path}`)} 
                  to={link.path}
                  onClick={() => setOpen(!open)}
                >
                  {link.name}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Header;
