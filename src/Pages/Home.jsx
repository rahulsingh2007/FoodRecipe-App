import SearchRecipe from "../Components/SearchRecipe"
import FilterRecipe from "../Components/FilterRecipe"
import FeaturedRecipe from "../Components/FeaturedRecipe"
import OtherRecipes from "../Components/OtherRecipes"
import Footer from "../Footer"
import Navbar from "../Navbar"


const Home = () => {
    return (
        <div className="min-h-screen bg-[#FAF7F0] flex flex-col justify-between">
            <Navbar />
            <div className="flex flex-col gap-6 flex-1 py-8 px-15">
                <p className="text-[#C7442E] text-xs font-bold py-3 ">
                    A LITTLE INSPIRATION. A LOT OF FLAVOUR
                </p>
                <SearchRecipe />
                <FilterRecipe />
                <FeaturedRecipe />
                <OtherRecipes />
            </div>
            <Footer />
        </div>
    )
}


export default Home;
