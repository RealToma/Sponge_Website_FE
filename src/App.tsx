import { Route, Routes } from "react-router-dom";
import { Home, Presale } from "./pages";
import { CustomCursor } from "./common";
import { useEffect } from "react";

export const App = () => {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const yOffset = 400;
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presale" element={<Presale />} />
      </Routes>
      <CustomCursor />
    </>
  );
};
