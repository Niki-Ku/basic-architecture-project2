const API_Key = process.env.REACT_APP_TMDB_API_KEY;
const Base_Url = process.env.REACT_APP_TMDB_BASE_URL;

export const fetchUpcomingMovies = (page: number) => {
	return {
		method: "GET",
		url: `${Base_Url}movie/upcoming`,
		params: { language: "en-US", page: page.toString() },
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${API_Key}`,
		},
	};
};
