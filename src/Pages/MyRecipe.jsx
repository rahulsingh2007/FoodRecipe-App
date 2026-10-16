import Navbar from "../Navbar";
import Footer from "../Footer";

const MyRecipe = () => {
  return (
    <div className="min-h-screen bg-[#FAF7F0] flex flex-col justify-between">
      <Navbar />
      <div className="flex-1 px-10 py-6">
        <p className="text-2xl font-semibold text-[#273C2D]">Your favourite recipes</p>
      </div>
      <Footer /> 
    </div>
  );
};

export default MyRecipe;
