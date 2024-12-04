import { Link } from "react-router-dom";
import Banner from '../../assets/images/movie-trendy-banner-vector.jpg'
import PromotionalBanner from "../../components/PromotionalBanner/PromotionalBanner";
import { colRef } from "../..";
import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Button from "../../components/Button/Button";
import { fetchGenres, fetchUpcomingMovies } from "../../api/MoviesApi";
import FilmCard from "../../components/FilmCard/FilmCard";
import { useTranslation } from "react-i18next";
import HorizontalScroller from "../../components/HorizontalScroller/HorizontalScroller";

export interface Film {
  title: string;
  poster_path: string;
  genre_ids: number[];
}

export interface IGenre {
  id: string;
  name: string;
}

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language)
  const [page, setPage] = useState(1);
  const options = fetchUpcomingMovies(page, lang);
  const genresOptions = fetchGenres(lang);
  
  useEffect(() => {
    setLang(i18n.language)
  }, [i18n.language])

  const testFetch = async () => {
    try {
      const data = await axios.request(options)
      return data.data
    } catch (error) {
      console.log(error);
    }
  }

  const getGenres = async () => {
    try {
      const data = await axios.request(genresOptions)
      return data.data
    } catch (error) {
      console.log(error);
    }
  }

  const { data, isError, isLoading } = useQuery<{ results: Film[] }>(['data', page, lang], testFetch, {refetchOnWindowFocus: false});
  const { data:genersData } = useQuery<{ genres: IGenre[] }>(['genresData', lang], getGenres)

  const getDataFromDb = async () => {
    const snapshot = await getDocs(colRef);
    const data:any = []
    snapshot.forEach(doc => {
      data.push({ ...doc.data(), id: doc.id })
    })
    console.log(data)  // remove this log
  }

  useEffect(() => {
    try{
      getDataFromDb();
    } catch (err) {
      console.log(err);
    }
    console.log(data)    //remove later
    // console.log(genersData?.genres)
  }, [])

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;

  return(
    <div className="min-h-[100svh] w-full overflow-hidden">
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
        {/* <div className="w-full overflow-x-auto flex gap-2">
          {data && genersData && data?.results.length > 0 ? data.results.map((d) => (
            <FilmCard key={d.title} cardData={d} genres={genersData.genres} link="#" inWatchlist={true} onBookmarkClick={() => {}} />
          )) : 'No data available'}
        </div> */}
        {
          data && genersData && data?.results.length > 0 && 
            <HorizontalScroller films={data.results} genres={genersData.genres} onBookmarkClick={() => console.log('temporary nothing')} />
        }
      </div>
    </div>
  )
};

export default HomePage;
