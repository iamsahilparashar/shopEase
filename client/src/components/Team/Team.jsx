import React from "react";
import classes from "./Team.module.css";
import Sanyog from "../../assets/Team/Sanyog.png";
import Saurabh from "../../assets/Team/Saurabh.png";
import Sapna from "../../assets/Team/Sapna.png";
import Announcement from "../../layout/Announcement";
import Navbar from "../../layout/Navbar";
import Navbarr from "../../layout/Navbarr";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../../layout/Footer"
const Team = () => {
  return (
    <>
      {/* <Announcement /> */}
      <Navbarr />
      <div className={classes.main}>
        <div className={classes.item}>
          <h1 className={classes.main_title}>About Me</h1>
          <h3 className="font-bold" >A keen learner, fervent about coding and innovation, relentlessly
            exploring cutting-edge technologies</h3>
        </div>
        {/* <div className={`${classes.item}  ${classes.right_section}`}>
					<h2 className={classes.secondary_title}>Who we are</h2>
					<p className={classes.description}>
						We are a team of creatively diverse, driven, innovative individuals
						working in creating a community of GrabBit that can help you grab
						your dream job.
					</p>
				</div> */}
      </div>

      <div className={classes.team_members}>
        <div
          // href="#"
          target="_blank"
          rel="noreferrer"
          className={`${classes.team} ${classes.member_2}`}
        >
          <img
            className={classes.img}
            id={classes.img_4}
            src={Saurabh}
            alt="Sahil"
          />
          {/* <span className={classes.position}>Grabby</span> */}
          <p className={classes.name} style={{ "fontSize": "20px", "marginTop": "4px" }}>Sahil Parashar</p>
          <p>FullStack Developer</p>
          <a
            id="profile-link"
            href="https://github.com/iamsahilparashar"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to GitHub Profile"
            style={{ "fontSize": "22px" }}
          >
            {" "}
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/sahil2381/"
            target="_blank"
            rel="noopener noreferrer"
            title="Link to Linkedin Profile"
            style={{ "fontSize": "22px" }}
          >
            {" "}
            <i className="fab fa-linkedin" />
          </a>
          {/* <p>
            <i className="fab fa-github" /> icon
          </p> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
