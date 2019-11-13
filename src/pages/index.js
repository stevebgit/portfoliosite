import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/paylease.png'
import thumb02 from '../assets/images/thumbs/moo.png'
import thumb03 from '../assets/images/thumbs/bliz.jpg'
import thumb04 from '../assets/images/thumbs/newcars.jpg'
import thumb05 from '../assets/images/thumbs/moc.jpg'
import thumb06 from '../assets/images/thumbs/clear.jpg'

import full01 from '../assets/images/fulls/paylease.png'
import full02 from '../assets/images/fulls/moo.png'
import full03 from '../assets/images/fulls/bliz.png'
import full04 from '../assets/images/fulls/newcars.png'
import full05 from '../assets/images/fulls/moc.png'
import full06 from '../assets/images/fulls/clear.png'

const DEFAULT_IMAGES = [
    { id: '1', alt: "This position involved mysql development and a large percentage of PHP", source: full01, thumbnail: thumb01, caption: 'San Diego, CA', description: 'SQL-heavy project, with a lot of legacy OO-based PHP'},
    { id: '2', alt: "Laravel and VueJS, as well as a lot of CSS Design", source: full02, thumbnail: thumb02, caption: 'Omaha, NE', description: 'Heavy on Laravel and VueJS as well as CSS Design.'},
    { id: '3', alt: "Laravel, PHP, and Front End Development", source: full03, thumbnail: thumb03, caption: 'Irvine, CA', description: 'Laravel project.'},
    { id: '4', alt: "NewCars.com - Object Oriented PHP Codebase as well as CSS and Javascript", source: full04, thumbnail: thumb04, caption: 'Santa Monica, CA', description: 'OO PHP and Html5/CSS.'},
    { id: '5', alt: "Laravel and Javascript, Ajax, jQuery and CSS Foundations - project for NBC Universal", source: full05, thumbnail: thumb05, caption: 'Burbank, CA', description: 'Created Enterprise-size CMS for NBC Universal using Laravel'},
    { id: '6', alt: "Clear.com eCommerce Project built with Zend Framework, and a major portion of Javascript", source: full06, thumbnail: thumb06, caption: 'Kirkland, CA', description: "Zend Framework, as well as consuming API's to create a front-end eCommerce U.I."}
];

class HomeIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = { _replyto: '', email: '' };

		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleEmailChange(event) {
		this.setState({ _replyto: event.target.value });
	}
	handleNameChange(event) {
		this.setState({ name: event.target.value });
	}

	handleSubmit(event) {
		//alert('A name was submitted: ' + this.state.name);
		//event.preventDefault();
	
	}

    render() {
        const siteTitle = "Serverside and Client Side Software Development"
        const siteDescription = "Gatsby Laravel or ReactJS Independent Consultant"
		
        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <link rel=”canonical” href=”https://gatsbydeveloper.com/” />

						
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
							<h2>Accepting projects for Gatsby or Laravel/React</h2>
                        </header>
                        <p>20 Years of Software Development experience, mostly Server End with SQL and OO-based PHP. <br></br> Also experienced with Javascript: ReactJS 16.x, or older technologies like jQuery</p>
                        <ul className="actions">
                            {/* <li><a href="/learn-more" className="button">Learn More</a></li> */}
							<li><Link to={'more-about-me'} className="button">Learn More</Link></li>
                            <li> Or </li>
							<li><Link to={'/blog'} className="button">Blog</Link></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        {/* <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Currently Available for Consultant Software Development work</p>
                        <div className="row">
                            <div className="8u 12u$(small)">

								{/*  FORM START ------------------------------------------------------*/}

								<form method="post" action="https://formspree.io/xvopyogg" >
                                    <div className="row uniform 50%">
										<div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" value={this.state.value} onChange={this.handleNameChange}  /></div>
										<div className="6u 12u$(xsmall)"><input type="email" name="_replyto" id="email" placeholder="Email" onChange={this.handleEmailChange}/></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                
									<ul className="actions" style={{marginTop: "20px"}}>
										<li><input type="submit" value="Send Message" /></li>
									</ul>
								</form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Omaha, NE<br />
                                        United States
                                    </li>
                                    {/* <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        ( removed for now.. getting spam callers )
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">steveb428@gmail.com</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
