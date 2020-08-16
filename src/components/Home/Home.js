import React from "react";
import {Link} from "react-router-dom";
import "./Home.css";

import githubLogo from "../../assets/github.png";
import instagramLogo from "../../assets/instagram.png";
import twitterLogo from "../../assets/twitter.png";
import linkedinLogo from "../../assets/linkedin.png";

const Home = props => {
    return (
      <div className = "Home">
        <div className = "home-showcase">
          <p className = "quote-para"><q className = "quote">It is our choices, Harry, that show us who we truly are, far more than our abilities.</q><br/>
          <span>—Albus Dumbledore</span></p>
          <Link to="/sorting-page">
            <button className = "btn initial-btn">Sorting Hat</button>
          </Link>
        </div>
        <div className = "home-info">
          <div className = "home-info-background"></div>
          <div className = "home-info-foreground">
            <div className = "home-info-part">
              <h1>Hogwarts Houses</h1>
              <p>Hogwarts School of Witchcraft and Wizardry was divided into four Houses: Gryffindor, founded by Godric Gryffindor; Hufflepuff, founded by Helga Hufflepuff; Ravenclaw, founded by Rowena Ravenclaw; and Slytherin, founded by Salazar Slytherin. Competitions breed rivalries between the Houses, the greatest of which is that between Gryffindor and Slytherin.</p>
            </div>
            
            <div className = "home-info-part">
              <h1>House Systems</h1>
              <p>Houses at Hogwarts were both the living and learning communities for its students. Each year's group of students in the same House shares the same dormitory and many classes. The houses compete throughout the school year, by earning and losing points for behaviour. The House with the most points wins the House Cup. Each House also has its own Quidditch team that competes for the Inter-House Quidditch Cup.
              </p>
            </div>

            <div className = "home-info-part">
              <h1>Sorting</h1>
              <p>In the early days of Hogwarts, the four founders handpicked students for their Houses. When the founders worried how students would be selected after their deaths, Godric Gryffindor took his hat off and each "put some brains" in it, creating the Sorting Hat to choose future students for each House. At the beginning of each school year, the magical Sorting Hat is placed on each new student's head during the Sorting ceremony.</p>
            </div>
            
            <div className = "home-info-part">
              <h1>The Sorting Ceremony</h1>
              <p>The Sorting Hat announces the House the student is to join. Before beginning the Sorting ceremony, it sings a short song about the founding of the school and the four Houses; the Sorting Hat's songs are different every year, and the Hat is said to take all year composing the next one (according to Ronald Weasley). Every so often it would sing of mortal peril at the school. The students say that it picks up tips from Dumbledore's office.</p>
            </div>
          </div>
        </div>
        <div className = "home-footer">
          <div className = "home-footer-part">
            <div className = "home-footer-part-content">
              <h1>Qualities</h1>
              <p>It is unclear if the Sorting Hat tended to place students based on qualities they valued or rather qualities they exhibited. One example of the former is Peter Pettigrew, who was sorted into Gryffindor but ultimately turned out to be quite cowardly, self-serving and corruptible. He may have been placed there because, at the time, he admired strong, brave individuals like James Potter and Sirius Black. Other examples include Vincent Crabbe and Gregory Goyle, who despite being stupid and rather lazy, were placed in Slytherin, the House of the cunning and ambitious. They flocked around Draco Malfoy, who they admired and who exhibited the traits of Slytherin. Hermione Granger, while more than clever enough for Ravenclaw, valued courage above all, and was sorted into Gryffindor, a House she said sounded "by far the best". The Sorting Hat could detect nascent qualities in a student and place them in the House that would challenge them and put their character to the test.</p>
            </div>
          </div>
          <footer>
            <div className = "home-footer-foreground">
              <div className ="home-footer-content-1">
                <div home-footer-content-1-left>
                  <h3>Sorting Hat</h3>
                  <p>Thank you for visiting the page. Code availabe at <a href="https://github.com/Yuvrajhere/sorting-hat">github</a></p>
                  <p>You can send feedback or contact me on <a href="mailto:yuvrajisbest13@gmail.com">this email!</a></p>
                </div>
                <a href="/"><img className = "home-footer-content-1-right" src="https://icons-for-free.com/iconfiles/png/512/hat+horror+magic+scary+witch+icon-1320183478533990834.png" alt = "Sorting hat"/></a>
              </div>
              <div className ="home-footer-content-2">
                <div className = "home-footer-content-2-left">
                  <h3>About me</h3>
                  <p>I am Yuvraj Singh Chouhan, a computer science student from Bangalore, Karnataka, India.<span role="img" aria-label="happy face">😀</span></p>
                </div>
                <div className = "home-footer-content-2-right">
                  <a href="https://github.com/Yuvrajhere"><img src={githubLogo} alt = "Github"/></a>
                  <a href="https://www.instagram.com/yuvraj_singh_c/"><img src={instagramLogo} alt = "Instagram"/></a>
                  <a href="https://twitter.com/YuvrajS23650613"><img src={twitterLogo} alt = "Twitter"/></a>
                  <a href="https://www.linkedin.com/in/yuvraj-singh-chouhan-008953147"><img src={linkedinLogo} alt = "LinkedIn"/></a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
}

export default Home;