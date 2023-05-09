import React from "react";
import teamSiddhesh from "../assets/team/siddhesh.jpg";
import teamSakshi from "../assets/team/sakshi.jpg";
import teamSavani from "../assets/team/savani.jpg";
import teamDipalee from "../assets/team/dipalee.jpg";
import "../assets/css/About.css";

const ContactUs = () => {
	return(
		<>
			<section className="about-section-white">
				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h2 className="about-section-title">Need help?? Contact Now....</h2>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="about-team-item">
								<img src={teamSiddhesh} className="about-team-img" alt="pic" />
								<h3>SIDDHESH DHINGE</h3>
								<div className="about-team-info"><p>Team Lead</p></div>
								<ul className="about-team-icon">
									<li><a href="https://www.linkedin.com/in/siddhesh-dhinge-2057b125a/" className="linkedin">
										<i className="fa fa-linkedin"></i>
									</a></li>
									<li><a href="mailto: saddy97531@gmail.com" className="email">
										<i className="fa fa-envelope"></i>
									</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="about-team-item">
								<img src={teamSakshi} className="about-team-img" alt="pic" />
								<h3>SAKSHI ATTARDE</h3>
								<div className="about-team-info"><p>Front-End Developer</p></div>
								<ul className="about-team-icon">
									<li><a href="https://www.linkedin.com/in/sakshi-attarde-8bbbb2221/" className="linkedin">
										<i className="fa fa-linkedin"></i>
									</a></li>
									<li><a href="mailto: sakshi.attarde2112@gmail.com" className="email">
										<i className="fa fa-envelope"></i>
									</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="about-team-item">
								<img src={teamSavani} className="about-team-img" alt="pic" />
								<h3>SAVANI KALEKAR</h3>
								<div className="about-team-info"><p>Back-End Developer </p></div>
								<ul className="about-team-icon">
									<li><a href="www.linkedin.com/in/savani-kalekar" className="linkedin">
										<i className="fa fa-linkedin"></i>
									</a></li>
									<li><a href="mailto: savanikalekar@gmail.com" className="email">
										<i className="fa fa-envelope"></i>
									</a></li>
								</ul>
							</div>
						</div>
						<div className="col-sm-6 col-md-3">
							<div className="about-team-item">
								<img src={teamDipalee} className="about-team-img" alt="pic" />
								<h3>DIPALEE JETHAR</h3>
								<div className="about-team-info"><p>Front-End Developer</p></div>
								<ul className="about-team-icon">
									<li><a href="#" className="linkedin">
										<i className="fa fa-linkedin"></i>
									</a></li>
									<li><a href="mailto: dipalee9145@gmail.com" className="email">
										<i className="fa fa-envelope"></i>
									</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default ContactUs;