import { Route, Routes, useLocation } from "react-router-dom";
import { CustomCursor } from "./common";
import { useEffect, useState } from "react";
import { Loader } from "./common/Loader/Loader";
import { Home, Presale } from "./pages";
import styled from "styled-components";
import { Box } from "@mui/material";

export const App = () => {
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {/* {loading ? <Loader /> : null} */}
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/presale" element={<Presale />} />
        </Routes>
        <VideoBackLoop>
          <video autoPlay loop muted>
            <source
              src={"./video/gone-fishing-underwater-loop.mp4"}
              type="video/mp4"
            />
          </video>
        </VideoBackLoop>
      </Layout>

      <CustomCursor />
    </>
  );
};

const Layout = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const VideoBackLoop = styled(Box)`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100vh;
  opacity: 0.5;
  /* filter: brightness(1); */

  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  z-index: 100;
`;
