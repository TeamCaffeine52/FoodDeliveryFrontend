import React from "react";
import teamSiddhesh from "../assets/team/siddhesh.jpg";
import teamSakshi from "../assets/team/sakshi.jpg";
import teamSavani from "../assets/team/savani.jpg";
import teamDipalee from "../assets/team/dipalee.jpg";
import "../assets/css/About.css";

function About() {
    let message = `Talent wins games, but teamwork and intelligence win championships!!`;

    return (
		<>
			<section className="about-section-white">
				<div className="about-card">
					<div className="col-md-12 ">
						<center><h2 className="main">Food Ordering App Developed in MERN Stack</h2><br /></center>
						<p>A food ordering app developed in the MERN stack would be a full-stack web application that enables users to order food online from restaurant. The MERN stack is a popular web development stack that consists of four technologies: MongoDB, ExpressJS, ReactJS, and NodeJS.</p>
						<p>The app's functionality would typically include the following features:</p>
						<ul>
							<li>User registration and authentication</li>
							<li>Food menu</li>
							<li>Cart</li>
							<li>Checkout</li>
							<li>Admin panel</li>
						</ul>
						<p>The MERN stack consists of the following technologies:</p>
						<ul>
							<li>MongoDB</li>
							<li>ExpressJS</li>
							<li>ReactJS</li>
							<li>NodeJS</li>
						</ul>
						<p>The app architecture would typically follow the Model-View-Controller (MVC) design pattern. The model represents the data, the view represents the UI, and the controller represents the application logic.</p>
						<p>The food ordering app developed in the MERN stack would provide users with a convenient and easy-to-use way to order food online from their favorite restaurant. The app would be scalable, secure, and responsive, providing users with a seamless experience across multiple devices.</p>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h2 className="section-title">The Team</h2>
							<p className="section-subtitle">{message}</p>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="about-team-item">
								<img src={teamSiddhesh} className="about-team-img" alt="pic" />
								<h3>SIDDHESH DHINGE</h3>
								<div className="about-team-info"><p>Team Lead</p></div>
								<p>Developed detailed overview of project and managed backend part.</p>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="about-team-item">
								<img src={teamSakshi} className="about-team-img" alt="pic" />
								<h3>SAKSHI ATTARDE</h3>
								<div className="about-team-info"><p>Front-End Developer</p></div>
								<p>Developed the Front-end of the Project.</p>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="about-team-item">
								<img src={teamSavani} className="about-team-img" alt="pic" />
								<h3>SAVANI KALEKAR</h3>
								<div className="about-team-info"><p>Back-End Developer </p></div>
								<p>Savani worked on the backend of the project.</p>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="about-team-item">
								<img src={teamDipalee} className="about-team-img" alt="pic" />
								<h3>DIPALEE JETHAR</h3>
								<div className="about-team-info"><p>Front-End Developer</p></div>
								<p>Worked on Designing and Front-End of the Project</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
    )
}

export default About;