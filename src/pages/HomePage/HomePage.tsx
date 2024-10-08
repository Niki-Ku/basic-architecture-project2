import { Link } from "react-router-dom";

const HomePage = () => {

  return(
    <div>
      <h1>
        Home page
      </h1>
      <div>
        <span>Done pages:</span>
        <Link to='/faq'>FAQ page</Link>
        <br />
        <span>In process:</span>
        <Link to="/privacy">Privacy page</Link>
      </div>
    </div>
  )
};

export default HomePage;
