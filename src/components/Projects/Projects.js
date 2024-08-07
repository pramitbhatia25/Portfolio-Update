import "./projects.css"
import hs from "../../hs.png";
import ks from "../../ks.png";
import kuns from "../../kuns.png"
import sign from "../../sign.png"
import revamp from "../../revamp.png"
import hegelai from "../../hegelai.png"
import yeux from "../../yeux.png"
import nasa from "../../nasa.png"
import sitescript from "../../sitescript.png"
import connectx from "../../connectx.png"
import spookybird from "../../spookybird.png"
import gamerh from "../../gamerh.png"
import lifenet from "../../lifenet.png"
import energyfi from "../../energyfi.png"
import shopApp from "../../shop.png"
import djsr from "../../djsr.png"

function Projects() {

    const projects = [
        {
            image: hs,
            background: "rgb(245, 247, 246)",
            link: "https://devfolio.co/projects/datadoctor-056d",
            line1: "HealthSync",
            line2: "Best HealthCare Hack",
            line3: "Hackalytics, GaTech"
        },
        {
            image: kuns,
            background: "black",
            link: "https://devpost.com/software/tbd-0bxgrv",
            line1: "KunstenAR",
            line2: "Best Use Of Redis",
            line3: "AI-ATL, GaTech"
        },
        {
            image: sign,
            background: "black",
            link: "https://sign-ez.vercel.app/",
            line1: "SignEZ",
            line2: "3rd Place",
            line3: "CS Demo Day, GSU"
        },
        {
            image: hegelai,
            background: "black",
            link: "https://github.com/hegelai/prompttools",
            line1: "Hegel-AI prompttools",
            line2: "2600 ✨ @ GitHub",
            line3: "Open Source Contributor"
        },
        {
            image: revamp,
            background: "white",
            link: "https://github.com/pramitbhatia25/Hack-4-Good/blob/main/Transportation%20Renovation.pdf",
            line1: "Revamp",
            line2: "2nd Place",
            line3: "SAA, GSU"
        },
        {
            image: djsr,
            background: "rgb(13, 16, 23)",
            link: "https://github.com/pramitbhatia25/DJSR-app",
            line1: "DJS Racing App",
            line2: "Mobile App",
            line3: "Flutter"
        },
        {
            image: yeux,
            background: "rgb(0, 62, 83)",
            link: "https://devpost.com/software/yeuxview",
            line1: "YeuxView",
            line2: "Eye Disease Classification",
            line3: "Hackalytics, GaTech"
        },
        {
            image: nasa,
            background: "rgb(13, 16, 23)",
            link: "https://github.com/pramitbhatia25/NASA_OpenAPI-Connector?tab=readme-ov-file",
            line1: "Stream NASA",
            line2: "Streamlit Connector",
            line3: "Streamlit Hackathon"
        },
        {
            image: connectx,
            background: "rgb(13, 16, 23)",
            link: "https://github.com/pramitbhatia25/Code-For-Good-2022",
            line1: "ConnectX",
            line2: "Web App",
            line3: "Code For Good, JPMC"
        },
        {
            image: spookybird,
            background: "rgb(13, 16, 23)",
            link: "https://github.com/pramitbhatia25/GameJam",
            line1: "Spookybird",
            line2: "1st Place",
            line3: "GameJam, GSU"
        },
        {
            image: gamerh,
            background: "black",
            link: "https://devpost.com/software/gamerh",
            line1: "GamerH",
            line2: "FitBit API Connection",
            line3: "Liquid Hacks"
        },
        {
            image: sitescript,
            background: "rgb(0, 62, 83)",
            link: "https://devpost.com/software/sitescriptstudio",
            line1: "SiteScriptStudio",
            line2: "Cusotmized Portfolios",
            line3: "MHacks 15"
        },
        {
            image: lifenet,
            background: "rgb(0, 62, 83)",
            link: "https://devpost.com/software/lifenet-kiosk",
            line1: "LifeNet Kiosk",
            line2: "Kiosk For Homeless People",
            line3: "UGA Hacks 8"
        },
        {
            image: energyfi,
            background: "rgb(13, 16, 23)",
            link: "https://github.com/pramitbhatia25/energyEfficiencyAnalysis",
            line1: "EnergyFi",
            line2: "Energy Efficiency Analysis",
            line3: "Personal Project"
        },
        {
            image: shopApp,
            background: "rgb(13, 16, 23)",
            link: "https://github.com/pramitbhatia25/shop_app",
            line1: "Shop App",
            line2: "Inventor Management",
            line3: "Flutter"
        },
    ]

    function handleNav(link) {
        window.open(link, '_blank');
    }

    return <div className="projects">
        <div className="projects-header">
            projects (15)
        </div>
        <div className="projects-list">
            {
                projects.map((project) => {
                    return <div className="projects-project">
                        <div style={{
                            backgroundColor: project.background,
                            backgroundImage: `url(${project.image})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }} className="projects-project-img"
                            onClick={() => { handleNav(project.link) }}
                        >

                        </div>
                        <div className="projects-project-title">
                            {project.line1}
                            <br />
                            {project.line2}
                            <br />
                            {project.line3}
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}

export default Projects;
