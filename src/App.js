import React, { useEffect, useRef, useState } from 'react';
import "./app.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { BiLogoGmail } from "react-icons/bi"
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

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      const navbar = document.getElementsByClassName("navbar")[0]; // Assuming only one navbar element
      if (prevScrollpos > currentScrollPos) {
        navbar.classList.remove("scrolled-down");
      } else {
        navbar.classList.add("scrolled-down");
      }
      prevScrollpos = currentScrollPos;
    };
    
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.onscroll = null;
    };
  }, []);


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
              SWE Intern
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
              SWE | DevOps
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
            Experience💼
          </div>
          <div className='experience_content'>
            <div className='experience_card'>
              <div className='experience_card_img' style={{backgroundImage: `url(${require("./assets/images/experience_images/new1.webp")})`}}></div>
              <div className='experience_card_postion b'> Software Engineer Intern </div>
              <div className='experience_card_postion'> (May 2023 - Present) </div>
              <div className='experience_card_content'>
                <ul className='exp_ul'>
                  <li className='exp_ul_li'>Led the end-to-end development of a full-stack Web App to automate QSR Reports for 50+ clients.</li>
                  <li className='exp_ul_li'>Utilizing ReactJS + Flask and integrating AlienVault, Zoho Analytics and Microsoft Exchange APIs. </li>
                  <li className='exp_ul_li'>Optimized data monitoring, enhancing system reliability through implementing Azure Functions and effective CI/CD pipelines.</li>                
                </ul>
              </div>
            </div>
            <div className='experience_card'>
              <div className='experience_card_img' style={{backgroundImage: `url(${require("./assets/images/experience_images/new2.webp")})`}}></div>
              <div className='experience_card_postion b'> Undergraduate Researcher </div>
              <div className='experience_card_postion'> (August 2023 - Present) </div>
              <div className='experience_card_content'>
                <ul className='exp_ul'>
                  <li className='exp_ul_li'>I was honored to be chosen for the prestigious Undergraduate Assistantship Program at GSU.</li>
                  <li className='exp_ul_li'>I'm currently working on developing a Linux-based C/C++ software integrated with ADIOS2, created to optimize the management of high-resolution scientific images. This initiative streamlines data storage, retrieval, and management, significantly benefiting researchers in their work.</li>
                </ul>
              </div>
            </div>
            <div className='experience_card'>
              <div className='experience_card_img' style={{backgroundImage: `url(${require("./assets/images/experience_images/new3.png")})`}}></div>
              <div className='experience_card_postion b'> Data Science and ML Intern </div>
              <div className='experience_card_postion'> (Jan 2023 - April 2023) </div>
              <div className='experience_card_content'>
                <ul className='exp_ul'>

                  <li className='exp_ul_li'>
                  Collaborated on developing a Proof-Of-Concept for a Convolutional Neural Network (CNN) based pipeline.                  
                  </li>
                  <li className='exp_ul_li'>
                  This involved integrating data from LightCurve API, processing the data and saving to AWS S3 Bucket.
                  </li>
                  <li className='exp_ul_li'>
                  Led Scrum meets, applying Agile methodologies and facilitating Sprint Planning using Airtable.
                  </li>
                </ul>
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
          <div className='experience_content'>
            <div className='experience_card projects_card'>
              <div className='experience_card_img projects_img' style={{backgroundImage: `url(${require("./assets/images/project_images/hack.png")})`}}></div>
              <div className='experience_card_postion b'> HealthSync - Hackalytics 2024 @ Georgia Tech</div>
              <div style={{display:'flex', justifyContent:'space-between'}} className='experience_card_postion'><div>Winner - Best HealthCare Hack </div> <button className='view_btn'><a href="https://devfolio.co/projects/datadoctor-056d" style={{color: 'white', fontWeight: 'bold', margin: '0', padding: '0', textDecoration: 'none'}}>View Here</a></button></div>
              <div className='experience_card_content project_card_content'>
                <ul className='pro_ul exp_ul'>
                  <li className='exp_ul_li'>An AI powered portal for Medical Professionals to create customized Chatbots for automated Data Extraction & Analysis.</li>
                  <li className='exp_ul_li'>Utilized MERN Stack for frontend, Python/Flask for automation, MongoDB for Database & Azure for Generative AI.</li>
                </ul>
              </div>
            </div>
            <div className='experience_card projects_card'>
              <div className='experience_card_img projects_img' style={{backgroundImage: `url(${require("./assets/images/project_images/new1.png")})`}}></div>
              <div className='experience_card_postion b'> SignEZ - CS Demo Day 2023 @ GSU </div>
              <div style={{display:'flex', justifyContent:'space-between'}} className='experience_card_postion'><div>Winner - 3rd Place</div> <button className='view_btn'><a href="https://sign-ez.vercel.app/" style={{color: 'white', fontWeight: 'bold', margin: '0', padding: '0', textDecoration: 'none'}}>View Here</a></button></div>
              <div className='experience_card_content project_card_content'>
                <ul className='pro_ul exp_ul'>
                  <li className='exp_ul_li'>Engineered a Real-time Sign-Language Recognition Application with TensorflowJS using ‘handpose’ model.</li>
                  <li className='exp_ul_li'>Implemented an end-to-end CI/CD pipeline on GitLab, Docker for containerization & GCP for deployment.</li>
                </ul>
              </div>
            </div>
            <div className='experience_card projects_card'>
              <div className='experience_card_img projects_img' style={{backgroundImage: `url(${require("./assets/images/project_images/medium.png")})`}}></div>
              <div className='experience_card_postion b'> KunstenAR - AI ATL 2023 @ Georgia Tech </div>
              <div style={{display:'flex', justifyContent:'space-between'}} className='experience_card_postion'><div>Winner - Best Use Of Redis </div> <button className='view_btn'><a href="https://devpost.com/software/tbd-0bxgrv" style={{color: 'white', fontWeight: 'bold', margin: '0', padding: '0', textDecoration: 'none'}}>View Here</a></button></div>
              <div className='experience_card_content project_card_content'>
                <ul className='pro_ul exp_ul'>

                  <li className='exp_ul_li'>
                  iOS Augmented Reality app that transforms hand-drawn sketches into 3D models you can communicate with.</li>
                  <li className='exp_ul_li'>
                  Utilized Python / Flask for backend, Redis for context preservation in chats & XCode for frontend.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='experience_content'>
            <div className='experience_card projects_card'>
              <div className='experience_card_img projects_img' style={{backgroundImage: `url(${require("./assets/images/project_images/new2.png")})`}}></div>
              <div className='experience_card_postion b'> Revamp - Social Action Alliance 2022 @ GSU</div>
              <div style={{display:'flex', justifyContent:'space-between'}} className='experience_card_postion'><div>Winner - 2nd Place | Innovation & Impact Award </div> <button className='view_btn'><a href="https://github.com/pramitbhatia25/Hack-4-Good" style={{color: 'white', fontWeight: 'bold', margin: '0', padding: '0', textDecoration: 'none'}}>View Here</a></button></div>
              <div className='experience_card_content project_card_content'>
                <ul className='pro_ul exp_ul'>
                  <li className='exp_ul_li'>Redesigned MARTA’s Incident Response app and led to increase in overall rating and downloads.</li>
                  <li className='exp_ul_li'>Selected to give a special presentation to Board Members @ MARTA Headquarters. </li>
                </ul>
              </div>
            </div>
            <div className='experience_card projects_card'>
              <div className='experience_card_img projects_img' style={{backgroundImage: `url(${require("./assets/images/project_images/new5.png")})`}}></div>
              <div className='experience_card_postion b'> SpookyBird - GameJam 2023 @ Georgia State</div>
              <div style={{display:'flex', justifyContent:'space-between'}} className='experience_card_postion'><div>Winner - 1st Place </div> <button className='view_btn'><a href="https://github.com/pramitbhatia25/GameJam" style={{color: 'white', fontWeight: 'bold', margin: '0', padding: '0', textDecoration: 'none'}}>View Here</a></button></div>
              <div className='experience_card_content project_card_content'>
                <ul className='pro_ul exp_ul'>
                  <li className='exp_ul_li'>Created an interactive multiplayer game using JavaScript and Flask with persistent leaderboard.</li>
                  <li className='exp_ul_li'>Recognized & Awarded Special Prizes from Meta (Facebook) employees.</li>
                </ul>
              </div>
            </div>
            <div className='experience_card projects_card'>
              <div className='experience_card_img projects_img' style={{backgroundImage: `url(${require("./assets/images/project_images/new6.png")})`}}></div>
              <div className='experience_card_postion b'> Prompttools - Open Source Contributions 2023</div>
              <div style={{display:'flex', justifyContent:'space-between'}} className='experience_card_postion'><div>2100+ ⭐ Github </div> <button className='view_btn'><a href="https://prompttools.streamlit.app/" style={{color: 'white', fontWeight: 'bold', margin: '0', padding: '0', textDecoration: 'none'}}>View Here</a></button></div>
              <div className='experience_card_content project_card_content'>
                <ul className='pro_ul exp_ul'>

                  <li className='exp_ul_li'>
                  Contributed towards designing and testing the front-end Streamlit playground for Hegel-AI Prompttools.                  
                  </li>
                  <li className='exp_ul_li'>
                  Added export functionalities to popular databases and UI Charting to view test results.
                  </li>
                </ul>
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
          <div style={{ fontSize: "20px", color: "black" }} className=''>
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
