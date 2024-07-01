/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import "./CustomCursor.css";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: any) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", updateMousePosition);
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <img src="./cursor.png" alt="custom cursor" />
    </div>
  );
};
