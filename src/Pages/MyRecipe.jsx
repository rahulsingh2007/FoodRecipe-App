import Navbar from "../Navbar"

const MyRecipe = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#FAF7F0] flex flex-col justify-between px-10 py-6">
        <p className="text-2xl font-semibold text-[#273C2D]">Your favourite recipes</p>
      </div>
    </div>
  )
}

export default MyRecipe