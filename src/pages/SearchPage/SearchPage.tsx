import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "react-query";
import { getUserFromDb } from "../../helpers/firebaseUtils";
import { DbUser } from "../../types/global";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "../../components/SearchBar/SearchBar";
import useDebounce from "../../hooks/useDebounce";
import { fetchSearchResults } from "../../api/MoviesApi";
import { dataFetch } from "../../helpers/fetchUtils";

// TODO:
// get user to pass him for watchlist function to work if user is logged in   DONE
// get lang for the api     DONE
// make api request 
  // create variable to hold value of searchbar     DONE
  // use searchBar component      DONE
  // debounce searchBar       DONE
  // prefill search results
// Display results after user clicks find
// make simple flex layout
// make simple pagination for results

// additional: add placeholder as prop to searchbar

const SearchPage = () => {
  const { t, i18n } = useTranslation();
	const [lang, setLang] = useState(i18n.language);
  const { currentUser } = useAuth();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const [searchPage, setSearchPage] = useState<number>(1);
  const searchOptions = fetchSearchResults(debouncedSearchValue, lang, searchPage);

  console.log(debouncedSearchValue)

  const { data: additionalUser, isError } = useQuery<DbUser | undefined>(
    ["user", currentUser],
    () => getUserFromDb(currentUser?.uid),
    { refetchInterval: 10000 }
  );

  const { data: searchData } = useQuery(
    [`searchData-${debouncedSearchValue}`, debouncedSearchValue, searchOptions],
    () => dataFetch(searchOptions),
    // {refetchInterval: 1000}
    {
      retryDelay: 3000,
      cacheTime: 1000
    }
  )
  
  // useEffect(() => console.log(searchData, debouncedSearchValue, searchOptions, isError, lang), [debouncedSearchValue])
  useEffect(() => console.log(searchData), [debouncedSearchValue])
  // useEffect(() => console.log(searchOptions), [debouncedSearchValue])

  // useEffect(() =>  console.log(debouncedSearchValue), [debouncedSearchValue])

  useEffect(() => {
		setLang(i18n.language);
	}, [i18n.language]);

  return(
    <>
      <div>
        <div className="w-[90%] mx-auto my-4">
          <SearchBar links={[{name: 'asd', path: '/as'}]} query={searchValue} setQuery={setSearchValue} />
        </div>
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
