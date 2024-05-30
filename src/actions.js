export default class Actions {
  fetchPlanets({ commit }) {
    commit('setLoading', true);
      // arrow function to get data from api / I prefer write it with async and await syntax and try and catch
      const getPlanetsWithReptileResidents = () => {
        return new Promise((resolve, reject) => {
            // Fetch all planets
            fetch("https://swapi.dev/api/planets/")
            .then((response) => response.json())
            .then((planetsResponse) => {
                const planets = planetsResponse.results;
                    // Filter planets that have appeared in at least one movie and have residents
                const planetsWithMovieAppearances = planets.filter(planet => planet.films.length > 0 && planet.residents.length > 0);
                  // Fetch movie details for each planet
                Promise.all(planetsWithMovieAppearances.map(planet => {
                    return Promise.all(planet.films.map(movieUrl => {
                        return fetch(movieUrl)
                            .then(response => response.json())
                            .then(movieData => movieData.title);
                    })).then(movieTitles => ({
                        planet,
                        movies: movieTitles
                    }));
                })).then(finalData => resolve(finalData))
                .catch(error => reject(error));
            })
            .catch((error) => reject(error))
            });
        };
    try {
        commit('setPlanets', getPlanetsWithReptileResidents());
    } catch (error) {
        commit('setError', error);
    } finally {
        commit('setLoading', false);
    }
}
  }