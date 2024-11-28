const API_Key = process.env.REACT_APP_TMDB_API_KEY;
const Base_Url = process.env.REACT_APP_TMDB_BASE_URL;

export const fetchUpcomingMovies = (page: number, lang: string) => {
	return {
		method: "GET",
		url: `${Base_Url}movie/upcoming`,
		params: { language: lang, page: page.toString() },
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${API_Key}`,
		},
	};
};

export const fetchGenres = (lang:string) => {
	return {
		method: "GET",
		url: `${Base_Url}/genre/movie/list`,
		params: { language: lang},
		// params: { language: "en-US"},
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${API_Key}`,
		},
	};
};
