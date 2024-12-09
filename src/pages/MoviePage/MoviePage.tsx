import { useParams } from "react-router-dom";
import { fetchMovies } from "../../api/MoviesApi";
import axios from "axios";
import { useQuery } from "react-query";
import { Film } from "../HomePage/HomePage";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const moviesFetch = async (options:{}) => {
  try {
    const data = await axios.request(options)
    return data.data
  } catch (error) {
    console.log(error);
  }
}

// TODO:
// handle isError and isLoading
// style
// make comment section       https://developer.themoviedb.org/reference/movie-reviews   https://developer.themoviedb.org/reference/movie-add-rating
// make link or implement trailer    https://developer.themoviedb.org/reference/movie-videos
// maybe make recomendations slider   https://developer.themoviedb.org/reference/movie-recommendations


const MoviePage = () => {
  const movieId = useParams();
  const id = movieId.movieId
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language)
  let options: {}
  if (id) options = fetchMovies(1, lang, id);   // is it okay to handle id value here like this???

  const { data, isError, isLoading } = useQuery<Film>(['data', 1, lang], () => moviesFetch(options), {refetchOnWindowFocus: false});

  useEffect(() => console.log(data), [data])

  useEffect(() => {
    setLang(i18n.language)
  }, [i18n.language])

  return (
    <div>
      <div>Movie page {movieId.movieId}</div>
      <div>
        <h1>{data?.title}</h1>
      </div>
    </div>
  )

};

export default MoviePage;
