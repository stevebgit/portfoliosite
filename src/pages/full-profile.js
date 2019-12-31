import React, { Component } from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import '../assets/scss/full-profile.scss'
import moo from '../assets/images/thumbs/moo.svg'
import bliz from '../assets/images/thumbs/bliz.svg'
import clear from '../assets/images/thumbs/clear.svg'
import newcars from '../assets/images/thumbs/newcars.svg'
import paylease from '../assets/images/thumbs/paylease.svg'
import moc from '../assets/images/thumbs/moc.svg'
import react from '../assets/images/thumbs/react-1000x333.svg'
import ip from '../assets/images/thumbs/ip.svg'
import JobDisplay from '../components/job-display'
/*
	1.) get the grid working
	  a.) drop the css in proper place
	  b.) import it into this page
	  c.) do a) and b) for the javascript

	2.) create a flex box, vertical
		- the grid
		- the dynamic div that shows more info about the project and it scrolls
	3.) 
		create a video for mutual and add it as a video in that dynamic div
		
*/

class fullProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			job: ""
		}
	}
	
	updateJobDiv = (job) => (event) => {
		// you can access the item object and the event object
		event.preventDefault();
		this.setState({ "job": job });
	}

	render() {
		return (
			<div className="fp-container">
				<header>
					<div>
							<Helmet>
								<title>Full Profile</title>
								<meta name="description" content="Software Development history" />
								<meta name="robots" content="index, follow" />
								<script src="/profile-grid.js"></script>
							</Helmet>
					</div>
				</header>
				<div className="wrapper">
					<div className="container">
						<ul>
							<li>
								<a className="normal" href="#" style={{ "border-radius": "4px" }} onClick={this.updateJobDiv("moo")}>

									<img src={moo} />

								</a>
								<div className="info">
									<h3>Mutual of Omaha</h3>
									<p>I engaged in Javascript and PHP Development primarily - also  overhauled the Medicare Advantage home page, and added the responsive behavior as shown. </p>
								</div>
							</li>

							<li>
								<a className="normal" href="#" onClick={this.updateJobDiv("paylease")}>
									<img src={paylease} />
								</a>
								<div className="info">
									<h3>PayLease</h3>
									<p>Heavy Duty Data-Centered Job with a lot of MySQL and Raw Legacy PHP Coding ( it was a rough codebase ) </p>
								</div>
							</li>

							<li>
								<a className="normal" href="#" onClick={this.updateJobDiv("bliz")}>
									<img src={bliz} />
								</a>
								<div className="info">
									<h3>Blizzard Entertainment</h3>
									<p>PHP/Laravel-based Platform, for administering college video game 
									competition. Added features: Renewing Yearly Enrollment Qualifications, Event Coordinator tool.</p>
								</div>
							</li>

							<li>
								<a className="normal" href="#" onClick={this.updateJobDiv("moc")}>
									<img src={moc} />
								</a>
								<div className="info">
									<h3>Midnight Oil Creative</h3>
									<p>Laravel, MySQL and CSS Foundations </p>
								</div>
							</li>

							<li>
								<a className="normal" href="#" onClick={this.updateJobDiv("newcars")}>
									<img src={newcars} />
								</a>
								<div className="info">
									<h3>Newcars.com</h3>
									<p>Worked on their Internal Internet Marketing Dashboard tool allowing the marketing team to maintain their Internet Ad campaigns and track perforomance for their Ad placements</p>
								</div>
							</li>

							<li>
								<a className="normal" href="#" onClick={this.updateJobDiv("clear")}>
									<img src={clear} />
								</a>
								<div className="info">
									<h3>clear.com</h3>
									<p> Worked on a Zend Website for their Cell Tower authorization system, as well as PHP eCommerce front-facing Web App for End Users to purchase WiMax products.</p>
								</div>
							</li>

							<li>
								<a className="normal" href="#" onClick={this.updateJobDiv("react")}>
									<img style={{height: "147px"}} src={react} />
								</a>
								<div className="info">
									<h3>A React Web App</h3>
									<p> A Web app that uses React as the framework, and Twitter's API. It 
										Allows you to add automated content that provides an RSS feed, which then posts 
										items from the Feed to Twitter on a Cron Schedule.
									</p>
								</div>
							</li>
							<li>
								<a className="normal" href="#" onClick={this.updateJobDiv("ip")}>
								<img  src={ip} />
							</a>
							<div className="info">
								<h3>Idaho Power</h3>
								<p> Performed Several Wordpress-related development tasks for them, including
									creating custom plugins that steamlined content-creation for their Web Development content creation staff.
									</p>
							</div>
							</li>

						</ul>
					</div>
					<div className="position-desc">
						<JobDisplay job={this.state.job} />
					</div>
				</div>
				
			</div>
		)
	}
}

export default fullProfile