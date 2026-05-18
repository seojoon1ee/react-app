interface ProjectProps {
  name: string;
  date?: string;
  skills?: string;
  image?: string;
  video?: string;
  width?: string;
  link?: string;
}

function Project({ name, date, skills, image, video, width, link }: ProjectProps) {
    return (
        <div id="projects">
            <div style={{display: "flex", gap: "20px", alignItems: "end"}}>
                {date && <p>{date}</p>}
                <p style={{fontSize: "14px"}}>{skills}</p>
            </div>
            <h3>{name}</h3>
            {image && <img src={image} className="projectImage"></img>}
            {video && 
            <video 
                autoPlay 
                loop 
                muted 
                className="projectVideo"
                style={{ '--desktop-max': width ? width : "50vw" } as React.CSSProperties}
            >
                <source src={video} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>}
            <div id="bar">
                {link && <a href={link}><button><img src="/github-logo.png" className="logo"></img></button></a> }
            </div>
        </div>
    );
}

export default Project