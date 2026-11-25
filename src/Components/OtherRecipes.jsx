import { ArrowRight, Clock, Users } from "lucide-react";
import First from "../assets/First.png";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { setError, setLoading, setResults } from "../Redux/features/searchSlice";
import { fetchRecipes } from "../API/MediaApi";
import { Link } from "react-router-dom";


const OtherRecipes = () => {
    const dispatch = useDispatch();
    const searchState = useSelector((store) => store.search);
    const { query, results, loading, error } = searchState || {};

    const getData = useCallback(async () => {
        if (!query) return;

        try {
            dispatch(setLoading());
            const response = await fetchRecipes(query);
            console.log(`Recipe search results for "${query}":`, response);
            dispatch(setResults(response || []));
        } catch (err) {
            dispatch(setError(err instanceof Error ? err.message : "Unable to load recipes."));
        }
    }, [query, dispatch]);

    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div className="pt-8">
            <p className="text-[#273C2D] text-3xl font-['Times_New_Roman',Times,serif]">Everyday delicious</p>
            <div className="flex justify-between py-2">
                <p className="text-[#7D8174] text-sm font-semibold">Big flavor. Little effort. Recipes you'll come back to.</p>
                <button className="flex gap-1 items-center hover:text-[#CC5641] hover:scale-105 transition-all duration-300">
                    View all recipes<ArrowRight size={20} strokeWidth={1.75} />
                </button>
            </div>
            {loading && <p className="text-[#7D8174] text-sm py-4">Loading recipes...</p>}
            {error && <p className="text-red-500 py-4">{error}</p>}

            <div className="grid grid-cols-4 gap-6 min-h-[45vh] py-5">
                {!loading && !error && query && results?.length === 0 && (
                    <p className="col-span-4 text-center text-[#7D8174] py-8">No recipes found for "{query}".</p>
                )}
                {!loading && !error && results?.map((recipe) => (
                    <Link
                        to={`/recipe/${recipe.id}`}
                        key={recipe.id}
                        className="overflow-hidden rounded-3xl cursor-pointer hover:scale-101 transition-all duration-300 block bg-white"
                    >
                        <img
                            src={recipe.image || First}
                            alt={recipe.title || "recipe image"}
                            className="h-1/2 w-full object-cover"
                        />
                        <div className="flex flex-col justify-between px-5 py-2">
                            <div>
                                <p className="text-[#C7442E] text-xs font-bold uppercase">RECIPE</p>
                                <p className="font-['Times_New_Roman',Times,serif] text-2xl py-2 line-clamp-2 text-black">
                                    {recipe.title}
                                </p>
                            </div>
                            <div className="text-[#7A7E71]">
                                <p className="text-xs font-semibold pt-6">By FoodRecipe Kitchen</p>
                                <div className="flex gap-2 text-xs py-3">
                                    <span className="flex gap-1 items-center">
                                        <Clock size={16} strokeWidth={2.2} className="text-[#42674A]" />
                                        {recipe.readyInMinutes || "N/A"} min
                                    </span>
                                    <span className="flex gap-1 items-center">
                                        <Users size={16} strokeWidth={2.2} className="text-[#42674A]" />
                                        {recipe.servings || "N/A"} servings
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    );
};

export default OtherRecipes;
