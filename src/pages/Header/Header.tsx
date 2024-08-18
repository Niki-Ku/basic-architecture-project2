import { Link, useLocation } from "react-router-dom";
import NetflixLogo from '../../assets/images/netflix-logo.png';

function Header() {
  const location = useLocation();

  const activeClass = ( path:string ) => {
    return location.pathname === path
    ? "text-lg font-semibold text-white text-orange-500"
    : "text-lg font-semibold text-white hover:text-orange-500"
  }

  return (
    <header className="bg-transparent p-6 flex justify-between fixed top-0 left-0 w-full">
      
      <div className="">
        <Link to="/">
          <img src={NetflixLogo} alt="Netflix Logo" />
        </Link>
      </div>
      <div>
        <span></span>
      </div>
      <nav>
        <ul className="flex justify-center space-x-6">
          <li className="transform hover:scale-110 transition duration-200">
            <Link className={activeClass('/')} to="/">Home</Link>
          </li>
          <li className="transform hover:scale-110 transition duration-200">
            <Link className={activeClass('/search')} to="/search">Search</Link>
          </li>
          <li className="transform hover:scale-110 transition duration-200">
            <Link className={activeClass('/login')} to="/login">login</Link>
          </li>
          <li className="transform hover:scale-110 transition duration-200">
            <Link className={activeClass('/user')} to="/user">User</Link>
          </li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
