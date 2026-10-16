import { useState } from "react"
import { setQuery } from '../Redux/features/searchSlice'
import { useDispatch, useSelector } from "react-redux";

const SearchRecipe = () => {
    const { query } = useSelector((store) => store.search)
    const [recipe, setRecipe] = useState(query || '');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        if (recipe.trim()) {
            dispatch(setQuery(recipe.trim()))
        }
    }

    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
                <p className="text-6xl font-['Times_New_Roman',Times,serif]">What sounds good today?</p>
                <p className="text-[#7D8173]">Find your next favorite recipe, from quick bites to slow Sundays.</p>
            </div>
            <form
                onSubmit={submitHandler}
                className="w-full max-w-lg px-1 py-1 flex items-center bg-[#FFFDF8] border border-[#E4E2D7] rounded-full transition-colors duration-200 shadow-sm focus-within:border-[#4A6D51] focus-within:shadow-[#E8EDDF]">
                <input
                    type="text"
                    value={recipe}
                    onChange={(e) => setRecipe(e.target.value)}
                    className="w-full px-5 bg-transparent text-black placeholder:text-[#787C6F] outline-none"
                    placeholder="Try 'pasta', 'avocado' or 'chicken'"
                />
                <button
                    type="submit"
                    className="bg-[#C6442E] text-white px-6 py-4 rounded-full hover:bg-[#b03622] cursor-pointer outline-none flex items-center justify-center font-medium transition-colors"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchRecipe