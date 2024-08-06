import "./about.css"

function About() {

    function handleNav(link) {
        window.open(link, '_blank');
    }

    return <div className="about">
        <div className="about-header">
            about me
        </div>
        <div className="about-content">
        🔭 I’m currently working at <b  className="about-click" onClick={() => {handleNav("https://cybriant.com/")}}><u>Cybriant</u></b> as a Full-Time Software Engineer, after being an intern for 1 year.
        <br />
        <br />
        🌱 I'm pursuing a Masters Degree in Computer Science from <b className="about-click" onClick={() => {handleNav("https://www.gatech.edu/")}}><u>Georgia Institute Of Technology</u></b>.
        <br />
        <br />
        ⚡ I've lived in 4 cities / been to 10+ schools / travelled to 3 countries so far. 
        <br />
        </div>
    </div>
}

export default About;