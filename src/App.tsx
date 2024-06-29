import { Route, Routes } from "react-router-dom";
import { Home, Presale } from "./pages";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
  offset: 200,
});

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/presale" element={<Presale />} />
    </Routes>
  );
};
