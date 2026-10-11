import { ArrowRight, Clock, Users } from "lucide-react"
import First from "../assets/First.png";

const OtherRecipes = () => {
    return (
        <div className="pt-8">
            <p className="text-[#273C2D] text-3xl font-['Times_New_Roman',Times,serif]">Everyday delicious</p>
            <div className="flex justify-between py-2">
                <p className="text-[#7D8174] text-sm font-semibold">Big flavor. Little effort. Recipes you'll come back to.</p>
                <button className="flex gap-1 items-center hover:text-[#CC5641] hover:scale-105 transition-all duration-300">View all recipes<ArrowRight size={20} strokeWidth={1.75} /></button>
            </div>
            <div className="grid grid-cols-4 gap-6 min-h-[45vh] py-5">
                <div className="overflow-hidden rounded-3xl cursor-pointer hover:scale-101 transition-all duration-300">
                    <div className="h-full bg-white">
                        <img src={First} alt="image" className="h-1/2 w-full object-cover" />
                        <div className="flex flex-col justify-between px-5 py-2">
                            <div>
                                <p className="text-[#C7442E] text-xs font-bold">COMFORT FOOD</p>
                                <p className="font-['Times_New_Roman',Times,serif] text-2xl py-2">Lemon & herb roast chicken</p>
                            </div>
                            <div className="text-[#7A7E71]">
                                <p className="text-xs font-semibold pt-6">By Simply Recipes</p>
                                <div className="flex gap-2 text-xs py-3">
                                    <span className="flex gap-1 items-center"><Clock size={16} strokeWidth={2.2} className="text-[#42674A]" />45 min</span>
                                    <span className="flex gap-1 items-center"><Users size={16} strokeWidth={2.2} className="text-[#42674A]" />4 servings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-3xl cursor-pointer hover:scale-101 transition-all duration-300">
                    <div className="h-full bg-white">
                        <img src={First} alt="image" className="h-1/2 w-full object-cover" />
                        <div className="flex flex-col justify-between px-5 py-2">
                            <div>
                                <p className="text-[#C7442E] text-xs font-bold">FRESH & SEASONAL</p>
                                <p className="font-['Times_New_Roman',Times,serif] text-2xl py-2">Green goddess grain bowl</p>
                            </div>
                            <div className="text-[#7A7E71]">
                                <p className="text-xs font-semibold pt-6">By Love and Lemons</p>
                                <div className="flex gap-2 text-xs py-3">
                                    <span className="flex gap-1 items-center"><Clock size={16} strokeWidth={2.2} className="text-[#42674A]" />25 min</span>
                                    <span className="flex gap-1 items-center"><Users size={16} strokeWidth={2.2} className="text-[#42674A]" />2 servings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-3xl cursor-pointer hover:scale-101 transition-all duration-300">
                    <div className="h-full bg-white">
                        <img src={First} alt="image" className="h-1/2 w-full object-cover" />
                        <div className="flex flex-col justify-between px-5 py-2">
                            <div>
                                <p className="text-[#C7442E] text-xs font-bold">ITALIAN</p>
                                <p className="font-['Times_New_Roman',Times,serif] text-2xl py-2">Creamy wild mushroom risotto</p>
                            </div>
                            <div className="text-[#7A7E71]">
                                <p className="text-xs font-semibold pt-6">By The Modern Proper</p>
                                <div className="flex gap-2 text-xs py-3">
                                    <span className="flex gap-1 items-center"><Clock size={16} strokeWidth={2.2} className="text-[#42674A]" />40 min</span>
                                    <span className="flex gap-1 items-center"><Users size={16} strokeWidth={2.2} className="text-[#42674A]" />4 servings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden rounded-3xl cursor-pointer hover:scale-101 transition-all duration-300">
                    <div className="h-full bg-white">
                        <img src={First} alt="image" className="h-1/2 w-full object-cover" />
                        <div className="flex flex-col justify-between px-5 py-2">
                            <div>
                                <p className="text-[#C7442E] text-xs font-bold">MEXICAN</p>
                                <p className="font-['Times_New_Roman',Times,serif] text-2xl py-2">Spicy sweet potato tacos</p>
                            </div>
                            <div className="text-[#7A7E71]">
                                <p className="text-xs font-semibold pt-6">By Cookie and Kate</p>
                                <div className="flex gap-2 text-xs py-3">
                                    <span className="flex gap-1 items-center"><Clock size={16} strokeWidth={2.2} className="text-[#42674A]" />30 min</span>
                                    <span className="flex gap-1 items-center"><Users size={16} strokeWidth={2.2} className="text-[#42674A]" />4 servings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OtherRecipes