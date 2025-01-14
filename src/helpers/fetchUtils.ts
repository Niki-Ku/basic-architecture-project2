import axios from "axios";

export const dataFetch = async (options: {}) => {
	try {
		const data = await axios.request(options);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};

export const getGenres = async (genresOptions: {}) => {
	try {
		const data = await axios.request(genresOptions);
		return data.data;
	} catch (error) {
		console.log(error);
	}
};