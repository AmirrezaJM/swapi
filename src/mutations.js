export default class Mutations {
    setPlanets(state, planets) {
        state.planets = planets;
    }

    setLoading(state, loading) {
        state.loading = loading;
    }

    setError(state, error) {
        state.error = error;
    }
}