import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyRecipe from "./Pages/MyRecipe";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-[#FAF7F0] flex flex-col transition-all duration-300">
      <div className="flex-1 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myrecipe" element={<MyRecipe />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
