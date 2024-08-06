import "./projects.css"
import hs from "../../hs.png";
import ks from "../../ks.png";
import kuns from "../../kuns.png"
import sign from "../../sign.png"
import revamp from "../../revamp.png"

function Projects() {
    
    function handleNav(link) {
        window.open(link, '_blank');
    }

    return <div className="projects">
        <div className="projects-header">
            projects
        </div>
        <div className="projects-list">
            <div className="projects-project">
                <div style={{
                    backgroundColor: "rgb(245, 247, 246)",
                    backgroundImage: `url(${hs})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }} className="projects-project-img"
                    onClick={() => {handleNav("https://devfolio.co/projects/datadoctor-056d")}}
                >

                </div>
                <div className="projects-project-title">
                    HealthSync<br />
                    Best HealthCare Hack <br /> Hackalytics, GaTech
                </div>
            </div>
            <div className="projects-project">
            <div style={{
                    backgroundColor: "black",
                    backgroundImage: `url(${kuns})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }} className="projects-project-img"
                    onClick={() => {handleNav("https://devpost.com/software/tbd-0bxgrv")}}
                >

                </div>
                <div className="projects-project-title">
                    KunstenAR<br />
                    Best Use Of Redis <br /> AI-ATL, GaTech
                </div>
            </div>
            <div className="projects-project">
            <div style={{
                    backgroundColor: "black",
                    backgroundImage: `url(${sign})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }} className="projects-project-img"
                    onClick={() => {handleNav("https://sign-ez.vercel.app/")}}
                >

            </div>
                <div className="projects-project-title">
                    SignEZ<br />
                    3rd Place <br /> CS Demo Day, GSU
                </div>
            </div>
            <div className="projects-project">
            <div style={{
                    backgroundColor: "white",
                    backgroundImage: `url(${revamp})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }} className="projects-project-img"
                    onClick={() => {handleNav("https://github.com/pramitbhatia25/Hack-4-Good/blob/main/Transportation%20Renovation.pdf")}}
                >


                </div>
                <div className="projects-project-title">
                    Revamp<br />
                    2nd Place<br /> SAA, GSU
                </div>
            </div>
        </div>
    </div>
}

export default Projects;