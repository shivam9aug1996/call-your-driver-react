import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollTopTop";
const About = React.lazy(() => import("./Components/About"));
const Home = React.lazy(() => import("./Components/Home"));
const Main = React.lazy(() => import("./Components/Main"));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense
                fallback={<div style={{ minHeight: "100vh" }}></div>}
              >
                <Main />
              </React.Suspense>
            }
          >
            <Route
              path="/"
              element={
                <React.Suspense
                  fallback={<div style={{ minHeight: "100vh" }}></div>}
                >
                  <Home />
                </React.Suspense>
              }
            />
            <Route
              path="about"
              element={
                <React.Suspense
                  fallback={<div style={{ minHeight: "100vh" }}></div>}
                >
                  <About />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
