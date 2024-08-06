import About from "../About/About.js";
import Projects from "../Projects/Projects.js";
import Welcome from "../Welcome/Welcome.js";
import {Spotify} from "react-spotify-embed"

import "./home.css"

function Home() {
    return <div className="home">
        <div className="home-sub">
            <div className="home-welcome-spotify">
                <div className="home-welcome">
                    <Welcome />
                </div>
                <Spotify className="home-spotify" link="https://open.spotify.com/album/1uyf3l2d4XYwiEqAb7t7fX" />
            </div>
            <div className="home-about-projects">
                <div className="home-about">
                    <About />
                </div>
                <div className="home-project">
                    <Projects />
                </div>
            </div>
        </div>
    </div>
}

export default Home;