import { useAuth } from "../../context/AuthContext";
import { useQuery } from "react-query";
import { getUserFromDb } from "../../helpers/firebaseUtils";
import { DbUser, Genre, Links, Movie } from "../../types/global";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../components/SearchBar/SearchBar";
import useDebounce from "../../hooks/useDebounce";
import { fetchGenres, fetchSearchResults } from "../../api/MoviesApi";
import { dataFetch, getGenres } from "../../helpers/fetchUtils";
import FilmCard from "../../components/FilmCard/FilmCard";
// TODO:
// get user to pass him for watchlist function to work if user is logged in   DONE
// get lang for the api     DONE
// make api request DONE
  // create variable to hold value of searchbar     DONE
  // use searchBar component      DONE
  // debounce searchBar       DONE
  // prefill search results       DONE
// Display results after user clicks find     DONE
// make simple flex layout
// make simple pagination for results

// additional: add placeholder as prop to searchbar

const SearchPage = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const { currentUser } = useAuth();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue);
  const [searchPage, setSearchPage] = useState<number>(1);
  const searchOptions = fetchSearchResults(debouncedSearchValue, lang, searchPage);
  const searchLinks = useRef<Links[]>([]);
  const genresOptions = fetchGenres(lang);
  const [displayFilmCards, setDisplayFilmCards] = useState<React.ReactElement<typeof FilmCard>[]>([]);

  const { data: additionalUser } = useQuery<DbUser | undefined>(
    ["user", currentUser],
    () => getUserFromDb(currentUser?.uid),
    { refetchInterval: 10000 }
  );

  const { data: searchData } = useQuery < { results: Movie[] | undefined }>(
    [`searchData-${debouncedSearchValue}`, debouncedSearchValue, searchOptions],
    () => dataFetch(searchOptions)
  );

	const { data: genersData } = useQuery<{ genres: Genre[] }>(
		["genresData", lang],
		() => getGenres(genresOptions)
	);
  
  if (searchData?.results)
    searchLinks.current = searchData.results?.slice(0, 5).map(item => ({
        name: item.title,
        path: `../movies/${item.id}`
    }));

  const onSearchSubmit = (e: React.FormEvent) => {
    if (searchData?.results && genersData) {
      const filmCards = searchData?.results.map((movie, index) => (
        <FilmCard key={`${index}-${movie.title}`} cardData={movie} genres={genersData.genres} link={`../movies/${movie.id}`} user={additionalUser} />
      ));
      setDisplayFilmCards(filmCards);
    }
    setSearchValue('');
  }

  useEffect(() => {
		setLang(i18n.language);
	}, [i18n.language]);

  return(
    <>
      <div>
        <div className="w-[90%] mx-auto my-4">
          <SearchBar links={searchLinks.current} query={searchValue} setQuery={setSearchValue} onSubmit={onSearchSubmit} />
        </div>
      </div>

      <div className="w-[90%] mx-auto">
        {displayFilmCards}
      </div>
      {/* <div>SearchPage</div>
            
      <span>Done pages:</span>
      <br />
      <Link to='/faq' className="underline">FAQ page</Link>
      <br />
      <Link to="/privacy" className="underline">Privacy page</Link>
      <br />
      <Link to="/termsofuse" className="underline">Terms of Use</Link>
      <br />
      <Link to="https://nclone.instatus.com/" className="underline">System Status Page</Link>
      <br /> */}
    </>
  )
};

export default SearchPage;
