import { Utensils } from "lucide-react"

const FilterRecipe = () => {
    const linkStyle = ({isActive}) =>{
        return `rounded-4xl px-5 py-3 flex items-center gap-1 ${isActive ? "bg-[#42674A] border-none text-white" : "bg-white border border-[#E4E2D7]"}`
    }
    return (
        <div className="py-5 flex gap-2">
            <button className={linkStyle `bg-white`}><Utensils size={15} strokeWidth={2.1} />All Recipes</button>
            <button className={linkStyle `bg-white`}>Italian</button>
            <button className={linkStyle `bg-white`}>Asian</button>
            <button className={linkStyle `bg-white`}>Mexican</button>
            <button className={linkStyle `bg-white`}>Mediterranean</button>
            <button className={linkStyle `bg-white`}>Vegetarian</button>
            <button className={linkStyle `bg-white`}>Breakfast</button>
            <button className={linkStyle `bg-white`}>Desserts</button>
        </div>
    )
}

export default FilterRecipe