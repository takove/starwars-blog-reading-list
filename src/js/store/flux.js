const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			API_URL: "https://www.swapi.tech/api",
			API_URL_IMG: "https://starwars-visualguide.com/assets/img/",
			characters: undefined,
			image: undefined,
			planets: undefined,
			characterInfo: null,
			favorites: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			getCharacters: async () => {
				const store = getStore()
				try {
					const response = await fetch(store.API_URL + "/people")
					let body = await response.json()
					if (!response.ok) {
						throw new Error(`Something unexpected happened. Error: ${response.status}`)
					}
					setStore({characters: body.results})
					console.log(body.results)
				} catch (error) {
					console.log(error)
				}
				
			},
			getPlanets: async () => {
				const store = getStore()
				try {
					const response = await fetch(store.API_URL + "/planets")
					let body = await response.json()
					if (!response.ok) {
						throw new Error(`Something unexpected happened. Error: ${response.status}`)
					}
					setStore({planets: body.results})
					console.log(body.results)
				} catch (error) {
					console.log(error)
				}
			},
			getCharacterInfo: async (props) => {
				const store = getStore()
				try {
					const response = await fetch(store.API_URL + '/people/' + props)
					let body = await response.json()
					if (!response.ok) {
						throw new Error(`Something went wrong. Error: ${response.status}`)
					}
					setStore({characterInfo: body.result.properties})
					console.log(characterInfo)
					console.log(body.result.properties)
				} catch(error) {
					console.log(error)
				}
			},
			setFavorite(favoriteName, favoriteURL, favoriteID) {
				const store = getStore()
				setStore({favorites: [...store.favorites, {name: favoriteName, type: favoriteURL, favoriteID}]})
			}

		}
	};
};

export default getState;
