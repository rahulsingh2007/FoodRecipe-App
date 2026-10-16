import { ArrowRight, Clock, Users } from "lucide-react";
import First from "../assets/First.png";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { setError, setLoading, setResults } from "../Redux/features/searchSlice";
import { fetchRecipes } from "../API/MediaApi";

const featuredRecipes = [
    { id: "roast-chicken", title: "Lemon & herb roast chicken", category: "COMFORT FOOD", author: "Simply Recipes", readyInMinutes: 45, servings: 4 },
    { id: "grain-bowl", title: "Green goddess grain bowl", category: "FRESH & SEASONAL", author: "Love and Lemons", readyInMinutes: 25, servings: 2 },
    { id: "risotto", title: "Creamy wild mushroom risotto", category: "ITALIAN", author: "The Modern Proper", readyInMinutes: 40, servings: 4 },
    { id: "tacos", title: "Spicy sweet potato tacos", category: "MEXICAN", author: "Cookie and Kate", readyInMinutes: 30, servings: 4 },
];

const OtherRecipes = () => {
    const dispatch = useDispatch();
    const searchState = useSelector((store) => store.search);
    const { query, results, loading, error } = searchState || {};

    const getData = useCallback(async () => {
        if (!query) {
            return;
        }
        try {
            dispatch(setLoading());
            const response = await fetchRecipes(query);
            console.log(`Recipe search results for "${query}":`, response);
            dispatch(setResults(response));
        } catch (err) {
            dispatch(setError(err instanceof Error ? err.message : "Unable to load recipes."));
        }
    }, [query, dispatch]);

    useEffect(() => {
        getData();
    }, [getData]);

    const recipes = query ? results : featuredRecipes;

    return (
        <div className="pt-8">
            <p className="text-[#273C2D] text-3xl font-['Times_New_Roman',Times,serif]">Everyday delicious</p>
            <div className="flex justify-between py-2">
                <p className="text-[#7D8174] text-sm font-semibold">Big flavor. Little effort. Recipes you'll come back to.</p>
                <button className="flex gap-1 items-center hover:text-[#CC5641] hover:scale-105 transition-all duration-300">
                    View all recipes<ArrowRight size={20} strokeWidth={1.75} />
                </button>
            </div>

            {loading && <p>Loading recipes...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && query && results.length === 0 && (
                <p className="py-5 text-[#7D8174]">No recipes found for "{query}". Try another search.</p>
            )}

            <div className="grid grid-cols-4 gap-6 min-h-[45vh] py-5">
                {recipes.map((recipe) => (
                    <article key={recipe.id} className="overflow-hidden rounded-3xl bg-white">
                        <img
                            src={recipe.image || First}
                            alt={recipe.title}
                            className="h-1/2 w-full object-cover"
                        />
                        <div className="flex h-1/2 flex-col justify-between px-5 py-2">
                            <div>
                                <p className="text-[#C7442E] text-xs font-bold">
                                    {recipe.category || "RECIPE"}
                                </p>
                                <p className="font-['Times_New_Roman',Times,serif] text-2xl py-2">
                                    {recipe.title}
                                </p>
                            </div>
                            <div className="text-[#7A7E71]">
                                {recipe.author && <p className="text-xs font-semibold pt-6">By {recipe.author}</p>}
                                <div className="flex gap-2 text-xs py-3">
                                    {recipe.readyInMinutes && (
                                        <span className="flex gap-1 items-center">
                                            <Clock size={16} strokeWidth={2.2} className="text-[#42674A]" />
                                            {recipe.readyInMinutes} min
                                        </span>
                                    )}
                                    {recipe.servings && (
                                        <span className="flex gap-1 items-center">
                                            <Users size={16} strokeWidth={2.2} className="text-[#42674A]" />
                                            {recipe.servings} servings
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default OtherRecipes;
