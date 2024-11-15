import { Link } from "react-router-dom";
import Banner from '../../assets/images/movie-trendy-banner-vector.jpg'
import PromotionalBanner from "../../components/PromotionalBanner/PromotionalBanner";
import { colRef } from "../..";
import { getDocs } from "firebase/firestore"
import { useEffect } from "react";

const HomePage = () => {

  const getDataFromDb = async () => {
    const snapshot = await getDocs(colRef);
    const data:any = []
    snapshot.forEach(doc => {
      data.push({ ...doc.data(), id: doc.id })
    })
    console.log(data)
  }

  useEffect(() => {
    try{
      getDataFromDb();
    } catch (err) {
      console.log(err);
    }
  }, [])

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
        <Link to="https://nclone.instatus.com/" className="underline">System Status Page</Link>
        <br />
        <br />
        <span>In process:</span>
      </div>
    </div>
  )
};

export default HomePage;
