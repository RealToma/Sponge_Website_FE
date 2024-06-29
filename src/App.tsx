import { Route, Routes } from "react-router-dom";
import { Home, Presale } from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presale" element={<Presale />} />
    </Routes>
  );
};
