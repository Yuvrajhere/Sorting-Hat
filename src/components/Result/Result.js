import React from "react";
import {Link} from "react-router-dom";
import "./Result.css";

import githubLogo from "../../assets/github.png";
import instagramLogo from "../../assets/instagram.png";
import twitterLogo from "../../assets/twitter.png";
import linkedinLogo from "../../assets/linkedin.png";

const Result = props => {
    return (
      <div className = "Result">
        <div className = "showcase">
          <div className = "showcase-part-1">
            <h1>Your house is <i>{props.houseInfo.name}.</i></h1>
            <img src = {props.houseInfo.img} alt = {props.houseInfo.name}/>
          </div>
          <div className = "showcase-part-2">
            <p>{props.houseInfo.desc}</p>
            <Link to="/sorting-hat"><button>Home page</button></Link>
          </div>
        </div>

        <div className = "sec-showcase">
          <div className = "sec-showcase-info">
            <h1>Famouse people from the house</h1>
            <div className = "house-members">
              <div className = "member">
                <img src={props.houseInfo.houseMembers[0].img} alt = {props.houseInfo.houseMembers[0].name}/>
                <p>{props.houseInfo.houseMembers[0].name}</p>
              </div>
              <div className = "member">
                <img src={props.houseInfo.houseMembers[1].img} alt = {props.houseInfo.houseMembers[1].name}/>
                <p>{props.houseInfo.houseMembers[1].name}</p>
              </div>
              <div className = "member">
                <img src={props.houseInfo.houseMembers[2].img} alt = {props.houseInfo.houseMembers[2].name}/>
                <p>{props.houseInfo.houseMembers[2].name}</p>
              </div>
            </div>
          </div>
          <footer>
            <div className = "footer-foreground">
              <div className ="footer-content-1">
                <div home-footer-content-1-left>
                  <h3>Sorting Hat</h3>
                  <p>Thank you for visiting the page. Code availabe at <a href="https://github.com/Yuvrajhere/sorting-hat">github</a></p>
                  <p>You can send feedback or contact me on <a href="mailto:yuvrajisbest13@gmail.com">this email!</a></p>
                </div>
                <a href="/sorting-hat"><img className = "footer-content-1-right" src="https://icons-for-free.com/iconfiles/png/512/hat+horror+magic+scary+witch+icon-1320183478533990834.png" alt = "Sorting hat"/></a>
              </div>
              <div className ="footer-content-2">
                <div className = "footer-content-2-left">
                  <h3>About me</h3>
                  <p>I am Yuvraj Singh Chouhan, a computer science student from Bangalore, Karnataka, India.<span role="img" aria-label="happy face">😀</span></p>
                </div>
                <div className = "footer-content-2-right">
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

export default Result;