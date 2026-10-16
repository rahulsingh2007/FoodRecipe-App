import axios from "axios";
const SPOONACULAR_KEY = import.meta.env.VITE_SPOONACULAR_KEY;
export async function fetchRecipes(query) {
    if (!SPOONACULAR_KEY) {
        throw new Error("Missing VITE_SPOONACULAR_KEY. Add it to a .env file in the project root.");
    }
    const res = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
        params: {
            query,
            apiKey: SPOONACULAR_KEY,
        }
    });
    const recipes = res.data?.results;
    if (!Array.isArray(recipes)) {
        throw new Error("The recipe service returned an invalid response.");
    }
    return recipes;
}
