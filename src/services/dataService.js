const LOCATIONS_URL = 'https://rickandmortyapi.com/api/location/'
const EPISODE_URL = 'https://rickandmortyapi.com/api/episode/';

class DataService {
	async getResource(url) {
		const responce = await fetch(url)
		if (!responce.ok) {
			throw new Error(`Could ont fetch ${url}, recived ${responce.status}`)
		}
		const data = await responce.json();
		return data;
	}
	getCharacters(page) {
		return this.getResource(page)
	}
	getLocationById(id) {
		const getLocationByIdUrl = LOCATIONS_URL.concat(id);
		return this.getResource(getLocationByIdUrl)
	}
	getEpisodeById(id) {
		const getEpisodeById = EPISODE_URL.concat(id);
		return this.getResource(getEpisodeById)
	}
}

export default DataService;