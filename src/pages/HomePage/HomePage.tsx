import { Link } from "react-router-dom";
import Banner from '../../assets/images/movie-trendy-banner-vector.jpg'
import PromotionalBanner from "../../components/PromotionalBanner/PromotionalBanner";
import { colRef } from "../..";
import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Button from "../../components/Button/Button";
import { fetchUpcomingMovies } from "../../api/MoviesApi";

interface Film {
  title: string;
  poster_path: string;
}

const HomePage = () => {
  const [page, setPage] = useState(1);
  const options = fetchUpcomingMovies(page)
  
  const testFetch = async () => {
    try {
      const data = await axios.request(options)
      return data.data
    } catch (error) {
      console.log(error);
    }
  }
  const { data, isError, isLoading } = useQuery<{ results: Film[] }>(['data', page], testFetch, {refetchOnWindowFocus: false});


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
    console.log(data)
  }, [])

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

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
          {data && data?.results.length > 0 ? data.results.map((d) => (
            <img key={d.title} className="w-[300px]" src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} alt={`${d.title} poster`} />
          )) : 'No data available'}
        </div>
      </div>
    </div>
  )
};

export default HomePage;
