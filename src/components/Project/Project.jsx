import ProjectCard from "../ProjectCard/ProjectCard";
import ShinyText from "../ShinyText/ShinyText";
import PhotoTrance from "./PhotoTrance.png"
import IssTracker from "./IssTracker.png"
import Harry from "./HarryPotterSite.png"
import DoToday from "./DoToday.png"
import luffy from "./TapTapLuffy.png"
import todo from "./TodoApp.png"

import "./Project.css"

function Project(){
    return (
        <div className="outer">
            {<ShinyText
                text="My Work"
                speed={2}
                delay={0}
                color="#6ad6faff"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />}
              
            <div className="inner">
                Projects
                <div className="cards"> 
                    <div className="pairs">
                        <ProjectCard 
                    title={"PhotoTrance"} 
                    status={"Deployed"} 
                    imgUrl={PhotoTrance} 
                    repo={"https://github.com/Pranav00076/PhotoTrance"}
                    deploy={"https://pranav00076.github.io/PhotoTrance/"}
                    />

                    <ProjectCard 
                    title={"Iss Live Tracker"} 
                    status={"Deployed"} 
                    imgUrl={IssTracker} 
                    repo={"https://github.com/Pranav00076/ISS_LIve_Tracker"}
                    deploy={"https://iss-l-ive-tracker-zwhe.vercel.app/"}
                    />
                    </div>
                    
                    <div className="pairs">
                    <ProjectCard 
                    title={"Harry Potter Site"} 
                    status={"Deployed"} 
                    imgUrl={Harry} 
                    repo={"https://github.com/Pranav00076/harry_potter_site"}
                    deploy={"https://iss-l-ive-tracker-zwhe.vercel.app/"}
                    />

                    <ProjectCard 
                    title={"DoToday!"} 
                    status={"Deployed"} 
                    imgUrl={DoToday} 
                    repo={"https://github.com/Pranav00076/WTDT-APP"}
                    deploy={"https://pranav00076.github.io/WTDT-APP/"}
                    />
                    </div>

                    <div className="pairs">
                    <ProjectCard 
                    title={"Tap Tap Luffy!"} 
                    status={"Deployed"} 
                    imgUrl={luffy} 
                    repo={"https://github.com/Pranav00076/TapTapLuffy"}
                    deploy={"https://pranav00076.github.io/TapTapLuffy/"}
                    />

                    <ProjectCard 
                    title={"ToDo App"} 
                    status={"Deployed"} 
                    imgUrl={todo} 
                    repo={"https://github.com/Pranav00076/Todo-App"}
                    deploy={"https://pranav00076.github.io/Todo-App/"}
                    />
                    </div>
                </div>
            </div>

            <a href="https://github.com/Pranav00076" target="_blank" id="more-proj">
            <div className="more-proj">
                More Projects on <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=737373" height={"50px"} />
            </div>
                
            </a>
            
        </div>
    )
}

export default Project;