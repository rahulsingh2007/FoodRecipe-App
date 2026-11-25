import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeDetails } from "../API/MediaApi";
import { Clock, Users, ArrowLeft, CheckCircle } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ViewRecipe = () => {
    const { id } = useParams(); // Extracts the recipe ID directly from the URL path
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDetails = async () => {
            try {
                setLoading(true);
                const data = await fetchRecipeDetails(id);
                setRecipe(data);
            } catch {
                setError("Could not load recipe details. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        getDetails();
    }, [id]);

    if (loading) return (
        <div className="min-h-screen bg-[#FAF7F0] flex flex-col justify-between">
            <Navbar />
            <p className="text-center text-[#7D8174] py-20 flex-1">Gathering ingredients and details...</p>
            <Footer />
        </div>
    );

    if (error || !recipe) return (
        <div className="min-h-screen bg-[#FAF7F0] flex flex-col justify-between">
            <Navbar />
            <div className="text-center py-20 flex-1">
                <p className="text-red-500 mb-4">{error || "Recipe not found."}</p>
                <button onClick={() => navigate(-1)} className="text-[#C7442E] font-semibold flex gap-2 items-center justify-center mx-auto">
                    <ArrowLeft size={18} /> Go Back
                </button>
            </div>
            <Footer />
        </div>
    );

    return (
        <div className="min-h-screen bg-[#FAF7F0] flex flex-col justify-between">
            <Navbar />
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-[#7D8174] hover:text-[#C7442E] transition-colors p-4 mb-6 font-semibold"
            >
                <ArrowLeft size={18} /> Back to Discover
            </button>
            <div className="max-w-5xl mx-auto px-10 py-8 flex-1 w-full">
                {/* Back Link */}

                {/* Hero Header Layout Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-12">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-80 object-cover rounded-3xl shadow-sm border border-[#E4E2D7]"
                    />
                    <div>
                        <span className="text-[#C7442E] text-xs font-bold uppercase tracking-wider">{recipe.sourceName}</span>
                        <h1 className="text-4xl font-['Times_New_Roman',Times,serif] text-[#273C2D] mt-2 mb-4 leading-tight">{recipe.title}</h1>

                        <div className="flex gap-6 text-[#7A7E71] mb-6">
                            <span className="flex gap-2 items-center font-medium">
                                <Clock size={18} className="text-[#42674A]" /> {recipe.readyInMinutes} mins
                            </span>
                            <span className="flex gap-2 items-center font-medium">
                                <Users size={18} className="text-[#42674A]" /> {recipe.servings} servings
                            </span>
                        </div>

                        <p className="text-[#7D8174] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: recipe.summary?.split('. ').slice(0, 3).join('. ') + '.' }} />
                    </div>
                </div>

                {/* Body Content Split Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-t border-t-[#E4E2D7] pt-10">
                    {/* Ingredients Column */}
                    <div className="lg:col-span-1">
                        <h2 className="text-2xl font-['Times_New_Roman',Times,serif] text-[#273C2D] mb-6">Ingredients</h2>
                        <ul className="flex flex-col gap-4">
                            {recipe.extendedIngredients?.map((ing, idx) => (
                                <li key={idx} className="flex gap-3 text-sm text-[#5C6054] items-start">
                                    <CheckCircle size={16} className="text-[#42674A] mt-0.5 shrink-0" />
                                    <span>{ing.original}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions Column */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-['Times_New_Roman',Times,serif] text-[#273C2D] mb-6">Instructions</h2>
                        {recipe.analyzedInstructions?.[0]?.steps ? (
                            <ol className="flex flex-col gap-6">
                                {recipe.analyzedInstructions[0].steps.map((step) => (
                                    <li key={step.number} className="flex gap-4">
                                        <span className="font-['Times_New_Roman',Times,serif] text-3xl text-[#C7442E] leading-none font-bold min-w-7 text-right">
                                            {step.number}
                                        </span>
                                        <p className="text-sm text-[#5C6054] leading-relaxed pt-1">
                                            {step.step}
                                        </p>
                                    </li>
                                ))}
                            </ol>
                        ) : (
                            <p className="text-sm text-[#7D8174] italic" dangerouslySetInnerHTML={{ __html: recipe.instructions || "No detailed instructions found." }} />
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ViewRecipe;
