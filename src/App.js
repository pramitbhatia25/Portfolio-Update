import React, { useRef, useState } from 'react';
import "./app.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BiLogoGmail } from "react-icons/bi"
import { ImSphere } from "react-icons/im"
import emailjs from "@emailjs/browser";

function App() {
  const formRef = useRef();

  const [selectedAMButtons, setSelectedAMButtons] = useState([]);
  const [selectedINButtons, setSelectedINButtons] = useState([]);
  const [message, setMessage] = useState('Thank You For Visiting 💖');
  const [customMessage, setCustomMessage] = useState('Null');

  const AMbuttons = [
    'Recruiter',
    'Family',
    'Friend',
    'Other'
  ];

  const INbuttons = [
    'Chat',
    'Opportunity',
    'Other'
  ];

  const handleCustomMessage = (e) => {
    setCustomMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Sending Message...');

    const selectedINValues = selectedINButtons.map(index => INbuttons[index]);
    const selectedAMValues = selectedAMButtons.map(index => AMbuttons[index]);

    emailjs.send(
      'service_m2tov4f',
      'template_4pthx16',
      {
        message: customMessage,
        interested_in: selectedINValues.join(', ').toString(),
        relationship: selectedAMValues.join(', ').toString(),
      }, 'RVo9CxTqD3INEUHwE'
    )
      .then(function (response) {
        console.log(response)
        setMessage('Thank you for your submission! Looking forward to chat soon. 🤙');
      }, function (error) {
        setMessage('Oops! Something went wrong. Please try again later.');
      });


    setMessage('Thank you for your submission! Looking forward to chat soon. 🤙');
  };

  const toggleAMSelected = (e, index) => {
    e.preventDefault()
    if (selectedAMButtons.includes(index)) {
      setSelectedAMButtons(selectedAMButtons.filter(item => item !== index));
    } else {
      setSelectedAMButtons([...selectedAMButtons, index]);
    }
  };

  const toggleINSelected = (e, index) => {
    e.preventDefault()
    if (selectedINButtons.includes(index)) {
      setSelectedINButtons(selectedINButtons.filter(item => item !== index));
    } else {
      setSelectedINButtons([...selectedINButtons, index]);
    }
  };

  const donwloadResume = () => {
    // Define the relative path to the file
    const relativePath = 'https://github.com/pramitbhatia25/Portfolio-Update/blob/4fc1d2b458c24a6cde6bee090e0e0ac1406c732d/src/assets/Resume(24).pdf'; // Update with your file's relative path

    // Create an anchor element to trigger the download
    const a = document.createElement('a');
    a.href = relativePath;
    a.download = 'downloaded_file.pdf'; // Specify the desired filename for the downloaded file

    // Trigger a click event on the anchor element
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    a.dispatchEvent(event);
  }

  return (
    <div className="App">
      <div className="navbar">
        <a href="#home" alt="" className='nav_link'>
          HOME
        </a>
        <a href="#about" alt="" className='nav_link'>
          ABOUT
        </a>
        <a href="#experience" alt="" className='nav_link'>
          EXPERIENCE
        </a>
        <a href="#portfolio" alt="" className='nav_link'>
          PORTFOLIO
        </a>
        <a href="#contact" alt="" className='nav_link'>
          CONTACT
        </a>
      </div>
      <div id="home" className='content'>
        <div className='glitch'>
          <div className='content_text'>
            hey!
            <div className='content_name'>
              I'm
            </div>
          </div>
        </div>
        <p className='glitch'>
          <span aria-hidden="true">
            <div className='content_name_bold'>
              Pramit
            </div>
          </span>
          <div className='content_name_bold'>
            Pramit
          </div>
          <span aria-hidden="true">
            <div className='content_name_bold'>
              Pramit
            </div>
          </span>
        </p>
      </div>
      <div id="about" className='about'>
        <div className='about_sentence'>
          <div className='about_small'>
            I am a
          </div>
          <div className='glitch'>
            <div className='about_large'>
              DevOps Intern
            </div>
          </div>
          <div className='about_small'>
            at Cybriant
          </div>
        </div>
        <div className='about_sentence'>
          <div className='about_small'>
            I graduate in
          </div>
          <div className='glitch'>
            <div className='about_large'>
              May 2024
            </div>
          </div>
          <div className='about_small'>
            from Georgia State University (GPA 3.96)
          </div>
        </div>
        <div className='about_sentence'>
          <div className='about_small'>
            Currently looking for
          </div>
          <div className='glitch'>
            <div className='about_large'>
              SDE | DevOps
            </div>
          </div>
          <div className='about_small'>
            Roles for 2024
          </div>
        </div>
      </div>
      <div id="experience" className='experience'>
        <div className='experience_contents'>
          <div className='experience_heading'>
            Companies I've interned at
          </div>
          <div className='experience_heading_sub'>
            (click\hover to learn more)
          </div>
          <div className='projects_content'>
            <div className='projects_content_card' style={{ backgroundImage: `url(${require("./assets/images/experience_images/new1.webp")})` }}>
              <div className='projects_content_card_overlay_banner'>
                DevOps Intern - (May 2023 - Present)
              </div>
              <div className='projects_content_card_overlay'>
                <div className='projects_content_card_overlay_text'>
                  Reduced data monitoring time by 50% with a custom tool using Azure KeyVault, Python, and Selenium.
                </div>
                <div className='projects_content_card_overlay_text'>
                  Improved efficiency by automating email processing and streamlining data export in Zoho Reports with Python and Azure services for OAuth2 token management.
                </div>
                <div className='projects_content_card_overlay_icons'>
                  <a href="https://www.linkedin.com/company/cybriant/" target="__blank__" style={{ marginRight: "20px" }}>
                    <AiFillLinkedin className="social_icon" size={30} color={'white'} style={{ marginTop: '10px' }} />
                  </a>
                  <a href="https://cybriant.com/" target="__blank__">
                    <ImSphere className="social_icon" size={30} color={'white'} style={{ marginTop: '10px' }} />
                  </a>

                </div>
              </div>
            </div>
            <div className='projects_content_card' style={{ backgroundImage: `url(${require("./assets/images/experience_images/new2.webp")})` }}>
              <div className='projects_content_card_overlay_banner'>
                Undergraduate Research Assistant - (August 2023 - Present)
              </div>
              <div className='projects_content_card_overlay'>
                <div className='projects_content_card_overlay_text'>
                  Selected for the prestigious Undergraduate Assistantship Program @ GSU.
                  <div className='projects_content_card_overlay_text'>
                    Developed a Linux-based C/C++ software integrated with ADIOS2 to establish a high-resolution scientific image database, streamlining data storage, retrieval, and management for researchers.                </div>
                </div>
                <div className='projects_content_card_overlay_icons'>
                  <a href="https://www.linkedin.com/school/georgiastateuniversity/" target="__blank__" style={{ marginRight: "20px" }}>
                    <AiFillLinkedin className="social_icon" size={30} color={'white'} style={{ marginTop: '10px' }} />
                  </a>
                  <a href="https://www.gsu.edu/" target="__blank__">
                    <ImSphere className="social_icon" size={30} color={'white'} style={{ marginTop: '10px' }} />
                  </a>

                </div>
              </div>
            </div>
            <div className='projects_content_card' style={{ backgroundImage: `url(${require("./assets/images/experience_images/new3.png")})` }}>
              <div className='projects_content_card_overlay_banner'>
                DevOps Intern - (Jan 2023 - April 2023)
              </div>
              <div className='projects_content_card_overlay'>
                <div className='projects_content_card_overlay_text'>
                  Collaborated on developing a Proof-Of-Concept for a Convolutional Neural Network (CNN) based pipeline.
                </div>
                <div className='projects_content_card_overlay_text'>
                  Led Scrum meets, applying Agile methodologies and facilitating Sprint Planning using Airtable.
                </div>
                <div className='projects_content_card_overlay_icons'>
                  <a href="https://www.linkedin.com/company/spacelab-space/" target="__blank__" style={{ marginRight: "20px" }}>
                    <AiFillLinkedin className="social_icon" size={30} color={'white'} style={{ marginTop: '10px' }} />
                  </a>
                  <a href="https://spacelab.space/" target="__blank__">
                    <ImSphere className="social_icon" size={30} color={'white'} style={{ marginTop: '10px' }} />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="portfolio" className='projects'>
        <div className='projects_contents'>
          <div className='projects_heading'>
            Projects🚀
          </div>
          <div className='experience_heading_sub'>
            (click\hover to learn more)
          </div>
          <div className='projects_content'>
            <div className='projects_content_card' style={{ backgroundImage: `url(${require("./assets/images/project_images/new1.png")})` }}>
              <div className='projects_content_card_overlay_banner'>
                CSC Showcase 2022 winner | MERN | AI | Object Detection
              </div>
              <div className='projects_content_card_overlay'>
                <div className='projects_content_card_overlay_text'>
                  Engineered a Real-time Sign-Language Recognition Application, presented at CSC Showcase event @ GSU
                </div>
                <div className='projects_content_card_overlay_text'>
                  Performed transfer learning on a SSD-Mobilnet model for detection and introduced a point-based rewards system
                </div>
                <div className='projects_content_card_overlay_icons'>
                  <a href="https://github.com/pramitbhatia25/SignEZ" target="__blank__" style={{ marginRight: "20px" }}>
                    <AiFillGithub className="social_icon" size={30} color={'white'} style={{ marginTop: '30px' }} />
                  </a>
                  <a href="https://sign-ez.vercel.app/" target="__blank__">
                    <ImSphere className="social_icon" size={30} color={'white'} style={{ marginTop: '30px' }} />
                  </a>

                </div>
              </div>
            </div>
            <div className='projects_content_card' style={{ backgroundImage: `url(${require("./assets/images/project_images/new2.png")})` }}>
              <div className='projects_content_card_overlay_banner'>
                SAA Hack4Good Winner | Creativity & Innovation Prize | 2nd place
              </div>
              <div className='projects_content_card_overlay'>
                <div className='projects_content_card_overlay_text'>
                  Redesigned MARTA’s Incident Response app and led to increase in overall rating and downloads.
                </div>
                <div className='projects_content_card_overlay_text'>
                  Selected to present at MARTA HQ | Awarded 2nd Place & Innovation Impact Award ($2250)
                </div>
                <div className='projects_content_card_overlay_icons'>
                  <a href="https://github.com/pramitbhatia25/Hack-4-Good" target="__blank__">
                    <AiFillGithub className="social_icon" size={30} color={'white'} style={{ marginTop: '30px' }} />
                  </a>
                </div>
              </div>
            </div>
            <div className='projects_content_card' style={{ backgroundImage: `url(${require("./assets/images/project_images/new3.png")})` }}>
              <div className='projects_content_card_overlay_banner'>
                Hackalytics 2022 | Streamlit | ML Classification
              </div>
              <div className='projects_content_card_overlay'>
                <div className='projects_content_card_overlay_text'>
                  Developed an eye-disease classifier via transfer learning on a resnet34 model hosted on GCP
                </div>
                <div className='projects_content_card_overlay_text'>
                  Integrated GPT-3 and Twilio for remedy generation and connecting patients to nearby optometrists
                </div>
                <div className='projects_content_card_overlay_icons'>
                  <a href="https://github.com/pramitbhatia25/yeuxview-Hacklytics-2023-" target="__blank__">
                    <AiFillGithub className="social_icon" size={30} color={'white'} style={{ marginTop: '30px' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_content'>
            <div className='projects_content_card' style={{ backgroundImage: `url(${require("./assets/images/project_images/new4.png")})` }}>
              <div className='projects_content_card_overlay_banner'>
                LiquidHacks 2023 | MERN | AI | API Integration
              </div>
              <div className='projects_content_card_overlay'>
                <div className='projects_content_card_overlay_text'>
                  Activity tracking web-app that synchronizes with FitBit API and OpenAI GPT-3 in real time                </div>
                <div className='projects_content_card_overlay_icons'>
                  <a href="https://github.com/pramitbhatia25/GamerH" target="__blank__">
                    <AiFillGithub className="social_icon" size={30} color={'white'} style={{ marginTop: '30px' }} />
                  </a>
                </div>
              </div>
            </div>
            <div className='projects_content_card' style={{ backgroundImage: `url(${require("./assets/images/project_images/new5.png")})` }}>
              <div className='projects_content_card_overlay_banner'>
                GameJam GSU 2022 Winner | Flask | JS
              </div>
              <div className='projects_content_card_overlay'>
                <div className='projects_content_card_overlay_text'>
                  Created an interactive multiplayer game using JavaScript and Flask with persistent leaderboard.
                </div>
                <div className='projects_content_card_overlay_text'>
                  Awarded 1st Place in GameJam Hackathon @ Georgia State University
                </div>
                <div className='projects_content_card_overlay_icons'>
                  <a href="https://github.com/pramitbhatia25/GameJam" target="__blank__" style={{ marginRight: "20px" }}>
                    <AiFillGithub className="social_icon" size={30} color={'white'} style={{ marginTop: '30px' }} />
                  </a>
                  <a href="https://gamejamwinner.onrender.com/" target="__blank__">
                    <ImSphere className="social_icon" size={30} color={'white'} style={{ marginTop: '30px' }} />
                  </a>

                </div>
              </div>
            </div>
            <div className='projects_content_card' style={{ backgroundImage: `url(${require("./assets/images/project_images/new6.png")})` }}>
              <div className='projects_content_card_overlay_banner'>
                Open Source Contributions 2023 | 1800+ ⭐ Github
              </div>
              <div className='projects_content_card_overlay'>
                <div className='projects_content_card_overlay_text'>
                  Contributed towards designing and testing the front-end Streamlit playground for Hegel-AI
                </div>
                <div className='projects_content_card_overlay_text'>
                  Added export functionalities to popular databases and UI Charting to view test results
                </div>
                <div className='projects_content_card_overlay_icons'>
                  <a href="https://github.com/pramitbhatia25/prompttools" target="__blank__" style={{ marginRight: "20px" }}>
                    <AiFillGithub className="social_icon" size={30} color={'white'} style={{ marginTop: '30px' }} />
                  </a>
                  <a href="https://prompttools.streamlit.app/" target="__blank__">
                    <ImSphere className="social_icon" size={30} color={'white'} style={{ marginTop: '30px' }} />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className='experience'>
        <form ref={formRef}>
          <div className='contact_contents'>
            <div className='contact_heading'>
              Let's talk🤙
            </div>
            <div className='contact_content'>
              <div className='contact_content_card'>
                <div className='contact_content_card_overlay'>
                  <div className='contact_content_card_overlay_text'>
                    I am:
                  </div>
                  <div className='contact_content_card_overlay_options'>
                    {AMbuttons.map((text, index) => (
                      <button
                        className={`contact_content_card_overlay_options_card ${selectedAMButtons.includes(index) ? 'selected' : 'not_selected'
                          }`}
                        onClick={(e) => toggleAMSelected(e, index)}
                        key={index}
                      >
                        {text}
                      </button>
                    ))}
                  </div>
                </div>
                <div className='contact_content_card_overlay'>
                  <div className='contact_content_card_overlay_text'>
                    Interested In:
                  </div>
                  <div className='contact_content_card_overlay_options'>
                    {INbuttons.map((text, index) => (
                      <button
                        className={`contact_content_card_overlay_options_card ${selectedINButtons.includes(index) ? 'selected' : 'not_selected'
                          }`}
                        onClick={(e) => toggleINSelected(e, index)}
                        key={index}
                      >
                        {text}
                      </button>
                    ))}
                  </div>
                </div>
                <div className='contact_content_card_overlay'>
                  <div className='contact_content_card_overlay_text'>
                    Way to reach back?
                  </div>
                  <div className='contact_content_card_overlay_options'>
                    <div className='contact_input'>
                      <input className="contact_input_op" type="text" placeholder='Email me @ person@gmail.com!' onChange={handleCustomMessage}></input>
                    </div>
                  </div>
                </div>
                <div className="contact_content_card_overlay_options submit_over">
                  <button className="submit" onClick={handleSubmit}>Submit</button>
                </div>
                <div className="thank-you-message">
                  {message}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='social_links'>
        <a href="https://github.com/pramitbhatia25" target="__blank__">
          <AiFillGithub className='social_icon' color={'white'} size={'25px'} />
        </a>
        <a href="mailto:pramitbhatia25@gmail.com" target="__blank__">
          <BiLogoGmail className='social_icon' color={'white'} size={'25px'} />
        </a>
        <a href="https://www.linkedin.com/in/pramit-bhatia-220680b2/" target="__blank__">
          <AiFillLinkedin className='social_icon' color={'white'} size={'25px'} />
        </a>
        <a href="Resume.pdf" download="Pramit_Bhatia_Resume.pdf" className='social_resume'>
          <div style={{ fontSize: "20px", color:"black"}} className=''>
            Resume
          </div>
        </a>
      </div>
      <div className='scroll_down'>
      </div>
    </div>
  );
}

export default App;
