import React from "react";
import { useState } from "react";
import ShinyText from "../ShinyText/ShinyText";
import InfiniteSliding from "../InfiniteSliding/InfiniteSliding";
import LetterGlitch from "../LetterGlitch/LetterGlitch";
import WhatIDo from "../Accordian/WhatIDo";
import "./Home.css";

function Home() {

  return (
    <div className="outerhome">
      <section id="home">
        <div className="hero">
          <div className="left">
            <h4>Hi, I'm Pranav Thawait</h4>
            <h2>Software Developer</h2>
            <div id="links">
              <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=737373" />
              <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=737373" />
              <img src="https://img.icons8.com/?size=100&id=Y2GfpkgYNp42&format=png&color=737373" />
            </div>
          </div>
          <div className="right">
            Transforming ideas into interactive and seamless digital experiences
            with cutting-edge{" "}
            {
              <ShinyText
                text="frontend"
                speed={2}
                delay={0}
                color="#6ad6faff"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            }{" "}
            development.
          </div>
        </div>
      </section>
      <InfiniteSliding />
      <div id="content">
            <WhatIDo />
            <div className="glitch">
                <LetterGlitch />
            </div>
      </div>
    </div>
  );
}

export default Home;
