import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="container p-3">
      <h1>Michelle Ouyang</h1>
      
      <div className="content clearfix">
      <img src={"/images/michelle.png"} alt="Michelle" height="400px" className="p-3 clearfix" />
         <p className="p-3">
            Hello! My name is Michelle. I am a Carleton Master of Arts graduate, and currently taking coding bootcamp!
            I am curious and eager to learn how to code!
         </p>
      </div>

      <h2>Contact Information</h2>
          <br />
          <li>Email Address: michelle.ouyang@outlook.com</li>
          <li>Phone: 613-252-0984</li>
          <li>
              <Link to={{pathname: "https://linkedin.com/in/michelle-ouyang-29373b137"}}
                target="blank">
                    <span >Linkedin</span>
              </Link>
          </li>
          <li>
              <Link to={{pathname: "http://github.com/mich3ll3e"}}
                target="blank">
                  <span>GitHub</span>
              </Link>
          </li>
          <li>
              <Link to={{pathname: "/images/Ouyang CV.pdf"}}
                target="blank">
                    <span>Resume</span>
                </Link>
          </li>
    </section>
  );
}

export default About;