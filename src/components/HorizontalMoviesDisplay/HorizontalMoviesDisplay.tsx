import { Film, IGenre } from "../../pages/HomePage/HomePage";
import HorizontalScroller from "../HorizontalScroller/HorizontalScroller";

interface IHorizontalMD {
  movies: Film[] | undefined;
  genres: IGenre[] | undefined;
  link: string;
  onBookmarkClick: () => void;
  heading: string;
  loading: boolean | undefined;
  error: boolean | undefined;
}

const HorizontalMoviesDisplay:React.FC<IHorizontalMD> = ({ movies, genres, link, onBookmarkClick, heading, loading, error }) => {

  if (error) return <div>Error fetching data...</div>
  if (loading) return <div>Loading...</div>

  return (
    <div className="first:mt-4">
      {
        movies && genres && movies?.length > 0 && 
          <HorizontalScroller link={link} heading={heading} films={movies} genres={genres} onBookmarkClick={onBookmarkClick} />
      }
    </div>
  )
};

export default HorizontalMoviesDisplay;
