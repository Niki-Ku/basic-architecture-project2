import { Link } from "react-router-dom";
import Banner from '../../assets/images/movie-trendy-banner-vector.jpg'
import PromotionalBanner from "../../components/PromotionalBanner/PromotionalBanner";
import { colRef } from "../..";
import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/upcoming',
    params: {language: 'en-US', page: page.toString()},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWQ0ODJlNGY4ZGM1MGYwY2JjOTliMTUyMGNlZTk0MCIsIm5iZiI6MTczMTY3OTg1NS4zNzQ4OTg0LCJzdWIiOiI2NzMzODBlN2JlZmQ0OWMwYmI2NTg2Y2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.hes-rcLEPWkGVMJM3VZmbTvlCbP0dxvrHQ3hnzzfJJA'
    }
  };
  
  const testFetch = async() => {
    const data = await axios.request(options)
    return data.data
  }
  const { data } = useQuery(['data', page], testFetch, {refetchOnWindowFocus: false});


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

        <br />
        <br />
        <Button label="previous" onClick={() => setPage((prev) => prev - 1)}></Button>
        <Button label="next" onClick={() => setPage((prev) => prev + 1)}></Button>
        <div className="flex w-full overflow-auto">
          {data?.results.map((d:any) => (
            <img key={d.title} className="w-[300px]" src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} alt="aaa" />
          ))}
        </div>
      </div>
    </div>
  )
};

export default HomePage;
