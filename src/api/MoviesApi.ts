export const fetchUpcomingMovies = (page: number) => {
	return {
		method: "GET",
		url: "https://api.themoviedb.org/3/movie/upcoming",
		params: { language: "en-US", page: page.toString() },
		headers: {
			accept: "application/json",
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWQ0ODJlNGY4ZGM1MGYwY2JjOTliMTUyMGNlZTk0MCIsIm5iZiI6MTczMTY3OTg1NS4zNzQ4OTg0LCJzdWIiOiI2NzMzODBlN2JlZmQ0OWMwYmI2NTg2Y2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.hes-rcLEPWkGVMJM3VZmbTvlCbP0dxvrHQ3hnzzfJJA",
		},
	};
};
