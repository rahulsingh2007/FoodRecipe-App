import { ArrowUpRight, Clock, Sparkles, Users } from "lucide-react";
import First from "../assets/First.png";

const FeaturedRecipe = () => {
    return (
        <div className="bg-[#F0EBDD] w-full h-[49vh] rounded-3xl flex justify-between overflow-hidden shadow-sm">
            <div className="px-10 py-12 flex-1 flex flex-col justify-between">
                <div>
                    <p className="text-[#CB5540] flex items-center gap-2 font-bold text-xs">
                        <Sparkles size={15} strokeWidth={3} />ON THE MENU TONIGHT
                    </p>
                    <p className="text-5xl py-5 font-['Times_New_Roman',Times,serif] text-[#273C2D] leading-10">
                        Roasted tomato & basil rigatoni
                    </p>
                    <p className="text-[#55594D] text-sm font-semibold">
                        Sweet roasted tomatoes, fresh basil and a little parmesan. Simple ingredients, something wonderful.
                    </p>
                </div>
                <div>
                    <div className="flex gap-4 items-center text-xs py-3 text-[#777B6E]">
                        <span className="flex gap-1 items-center"><Clock size={16} strokeWidth={1.75} className="text-[#42674A]" />30 min</span>
                        <span className="flex gap-1 items-center"><Users size={16} strokeWidth={1.75} className="text-[#42674A]" />4 servings</span>
                        <span>By The Modern Proper</span>
                    </div>
                    <div className="py-2 flex gap-3 items-center">
                        <button className="bg-[#C7442E] text-white flex gap-2 items-center rounded-full px-5 py-3 font-semibold cursor-pointer shadow-sm hover:-translate-y-1 transition-all duration-300">
                            Let's Cook <ArrowUpRight size={18} strokeWidth={2.9} />
                        </button>
                        <p className="text-xs font-bold text-[#4A6D51] bg-[#E8EDDF] px-3 py-1 rounded-md">
                            Weeknight favorite
                        </p>
                    </div>
                </div>
            </div>

            <div className="h-full w-[60%]">
                <img src={First} alt="image" className="h-full w-full object-cover" />
            </div>
        </div>
    );
};

export default FeaturedRecipe;
