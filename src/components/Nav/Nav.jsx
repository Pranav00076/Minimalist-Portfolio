import { act, useState } from "react";
import "./Nav.css"

export default function Navbar() {

    const [active, setActive] = useState("home")
    const [width, setWidth] = useState("40%")

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    setActive(id)

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="nav">
          <div onClick={() => scrollToSection("home")} style={{color: active=="home" ? "white" : "#727272", transition: "linear 0.2s"}}>
            Home
          </div>

          <div onClick={() => scrollToSection("projects")} style={{color: active=="projects" ? "white" : "#727272", transition: "linear 0.2s"}}>
            Projects
          </div>

          <div onClick={() => scrollToSection("contact")} style={{color: active=="contact" ? "white" : "#727272", transition: "linear 0.2s"}}>
            Contact
          </div>
    </nav>
  );
}