import { NavLink, useNavigate } from "react-router-dom";
import { Bookmark, Utensils } from "lucide-react";
import { useDispatch } from "react-redux";
import { clearResults, setQuery } from "./Redux/features/searchSlice";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const linkStyle = ({ isActive }) => {
        return `flex items-center gap-1 transition-all duration-200 font-semibold py-6 ${
            isActive ? 'text-[#C7442E] border-b border-b-[#C7442E]' : 'text-[#273C2D] border-none'
        }`;
    };

    const handleLogoClick = () => {
        dispatch(setQuery(''));
        dispatch(clearResults());
        navigate('/');
    };

    return (
        <div className="flex justify-between items-center px-10 bg-[#FAF7F0] border-b border-b-[#E4E2D7] outline-none">
            <div onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
                <h1 className="bg-[#C7442E] text-white p-2 rounded-full"><Utensils size={20} strokeWidth={2.1} /></h1>
                <h1 className="font-bold text-3xl text-[#273C2D]">FoodRecipe</h1>
            </div>
            <div className="flex gap-6"> {/* Wrapped NavLinks in a flex container for alignment */}
                <NavLink to="/" className={linkStyle}>
                    Discover
                </NavLink>
                <NavLink to="/myrecipe" className={linkStyle}>
                    <Bookmark size={20} />My Recipes
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
