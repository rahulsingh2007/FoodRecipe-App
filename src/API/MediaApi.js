import axios from "axios";

const SPOONACULAR_KEY = import.meta.env.VITE_SPOONACULAR_KEY

export async function fetchRecipes(query) {
    const res = await axios.get('https://api.spoonacular.com/search', {
        params: { query },
        headers: { Authorization: `Client-ID ${SPOONACULAR_KEY}` }
    })
    return res.data
}