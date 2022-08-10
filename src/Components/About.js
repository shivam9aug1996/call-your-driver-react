import React, { useLayoutEffect } from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
const About = () => {
  // window.scrollTo(0, 0);
  // window.scroll({ top: 0 });
  return (
    <div style={{ backgroundColor: "rgb(207, 205, 231)", minHeight: "100vh" }}>
      <lottie-player
        autoplay
        loop
        mode="normal"
        src="https://assets2.lottiefiles.com/packages/lf20_tZShd4.json"
        //style={{ width: "200px", height: "200px" }}
      ></lottie-player>
    </div>
  );
};

export default About;
