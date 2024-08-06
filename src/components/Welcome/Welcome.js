import "./welcome.css"
import { FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiDevpost } from "react-icons/si";

function Welcome() {

    function handleNav(link) {
        window.open(link, '_blank');
    }

    return <div className="welcome">
        <div className="welcome-left">
            <div className="welcome-left-top">
                welcome
            </div>
            <div className="welcome-left-middle">
            Hi, I'm <b style={{color:"white"}}>Pramit Bhatia</b>. I love designing and building robust systems that solve complex problems with elegance. I'm always eager to explore new technologies and enhance existing solutions to make a real difference.
            <br /><br />Feel free to reach out if you have any projects in mind, or just to connect 😊
            </div>
            <div className="welcome-left-bottom">
                <div onClick={() => {handleNav("https://www.linkedin.com/in/pramit-bhatia-220680b2/")}} className="welcome-left-bottom-card">
                    <FaLinkedin />
                </div>
                <div onClick={() => {handleNav("https://github.com/pramitbhatia25/")}} className="welcome-left-bottom-card">
                    <FaGithub />
                </div>
                <div onClick={() => {handleNav("https://devfolio.co/@pramit25")}} className="welcome-left-bottom-card">
                    <SiDevpost />
                </div>
                <div className="welcome-left-bottom-card">
                <a href="Resume - FullTime.pdf" download="Pramit_Bhatia_Resume.pdf" className='social'><FaFilePdf /> </a>
                </div>
            </div>
        </div>
        <div className="welcome-right">
            <div className="welcome-right-img">

            </div>
            <div className="welcome-right-details">
                pramitbhatia25@gmail.com
                <br />
                Atlanta, GA
            </div>
        </div>
    </div>
}

export default Welcome;