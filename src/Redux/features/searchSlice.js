import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: 'Search',
    initialState: {
        query: '',
        results: [],
        loading: false,
        error: null,
        page: 1
    },
    reducers: {
        setQuery(state, action) {
            state.query = action.payload;
            state.page = 1;
            state.results = [];
            state.error = null;
        },
        setResults(state, action) {
            state.results = action.payload;
            state.loading = false;
        },
        setLoading(state) {
            state.loading = true;
            state.error = null;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        },
        clearResults(state) {
            state.results = [];
        },
    }
})

export const { setQuery, setResults, setLoading, setError, clearResults } = searchSlice.actions;
export default searchSlice.reducer;