import { useParams } from "react-router-dom";
import { fetchMovies } from "../../api/MoviesApi";
import axios from "axios";
import { useQuery } from "react-query";
import { Movie } from "../../types/global";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import useMobile from "../../hooks/useMobile";

const moviesFetch = async (options: {}) => {
	try {
		const data = await axios.request(options);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

// TODO:
// handle isError and isLoading   
// style
// make comment section       https://developer.themoviedb.org/reference/movie-reviews   https://developer.themoviedb.org/reference/movie-add-rating
// make link or implement trailer    https://developer.themoviedb.org/reference/movie-videos
// maybe make recomendations slider   https://developer.themoviedb.org/reference/movie-recommendations

// when you click on prev/forward buttons in the browser - the whole app crashes 

const MoviePage = () => {
	const movieId = useParams();
	const id = movieId.movieId;
	const { t, i18n } = useTranslation();
	const [lang, setLang] = useState(i18n.language);
	const isMobile = useMobile();

	let options: {};
	if (id) options = fetchMovies(1, lang, id); // is it okay to handle id value here like this???

	const { data, isError, isLoading } = useQuery<Movie>(
		["data", 1, lang],
		() => moviesFetch(options),
		{ refetchOnWindowFocus: false }
	);
	useEffect(() => console.log(data), [data]);

	useEffect(() => {
		setLang(i18n.language);
	}, [i18n.language]);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError || !data) {
		return <div>Error loading data or no data available</div>;
	}

	const { backdrop_path, poster_path } = data;

	return (
		<div>
			<div className="h-[130svh] bg-black-black-absolute overflow-hidden">
        <div className="h-full w-full bg-cover bg-center z-10 overflow-hidden relative"
          style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${
						isMobile ? poster_path : backdrop_path
					})`}}
        >
					<div className="absolute w-full bottom-0 left-0 mx-auto max-w-[1680px] z-10 pt-20">
						<div className="grid">
							<div className="absolute inset-0 w-full h-full backdrop-saturate-[190%] backdrop-blur-3xl mask-gradient"
								style={{backgroundColor: "rgba(40, 40, 40, .5)"}}
							></div>
							<div className="text-6xl z-10">
								some content <br />
								some content <br />
								some content <br />
							</div>
						</div>
					</div>
        </div>
        
				{/* <div className="absolute -bottom-2 w-full h-20 blur-2xl bg-black-black-absolute opacity-80">adsfasf</div> */}
			</div>
		</div>
	);
};

export default MoviePage;
