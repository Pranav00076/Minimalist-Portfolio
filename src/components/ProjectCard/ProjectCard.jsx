import "./ProjectCard.css"

function ProjectCard({title, status, imgUrl, repo, deploy}){

    return (
        <div className="p-outer">
            <div className="p-inner">
                <img id="p-img" src={imgUrl} alt="" />
            </div>
            <div className="details">
                <div className="title">
                    <p>{title}</p>
                    <h4>{status}</h4>
                </div>
                <div className="icons">
                    <a href={repo}> <img src="https://img.icons8.com/?size=100&id=ABiusU6inXmU&format=png&color=737373" alt="" height={"50px"} /> </a>
                    <a href={deploy}>  <img src="https://img.icons8.com/?size=100&id=11027&format=png&color=737373" alt="" height={"50px"}/> </a>
                </div>
            </div>

        </div>
    )

}

export default ProjectCard;