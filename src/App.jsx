import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyRecipe from "./Pages/MyRecipe";

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col transition-all duration-300">
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myrecipe" element={<MyRecipe />} />
        </Routes>
      </div>
    </div>
  )
}


export default App;
