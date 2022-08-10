import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";

import styles from "./Home.modules.css";
const Form = React.lazy(() => import("./Form"));
const CarLottie = React.lazy(() => import("./CarLottie"));
const VerifiedPersonLottie = React.lazy(() => import("./VerifiedPersonLottie"));
const Home = () => {
  const [display, setDisplay] = useState(false);
  const [display2, setDisplay2] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDisplay(true);
    }, 100);
    setTimeout(() => {
      setDisplay2(true);
    }, 0);
  }, []);
  return (
    <div
      id="#67"
      style={{
        /// height: "754px",
        minHeight: "100vh",
        backgroundColor: "#cfcde7",
      }}
    >
      <div className="home_container">
        <div
          style={{
            minHeight: "500px",
            width: "100%",
            // backgroundColor: "red",
          }}
        >
          {display ? (
            <React.Suspense fallback={<div></div>}>
              <CarLottie />
            </React.Suspense>
          ) : (
            <div
              style={{
                minHeight: "500px",
                width: "100%",
                // backgroundColor: "red",
              }}
            ></div>
          )}
        </div>

        <div
          style={{
            minHeight: "500px",
            width: "100%",
            // backgroundColor: "red",
          }}
        >
          {display2 ? (
            <React.Suspense fallback={<div></div>}>
              <Form />
            </React.Suspense>
          ) : (
            <div
              style={{
                minHeight: "500px",
                width: "100%",
                // backgroundColor: "red",
              }}
            ></div>
          )}
        </div>

        <div
          style={{
            minHeight: "500px",
            width: "100%",
            // backgroundColor: "red",
          }}
        >
          {display ? (
            <React.Suspense fallback={<div></div>}>
              <VerifiedPersonLottie />
            </React.Suspense>
          ) : (
            <div
              style={{
                minHeight: "500px",
                width: "100%",
                // backgroundColor: "red",
              }}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
