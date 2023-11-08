import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import LayoutPublico from "../components/public/LayoutPublico";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPublico />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
