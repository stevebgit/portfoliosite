import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
			<div>
				<header id="header">
					
					<div className="inner">
						<a href="/" className="image avatar"><img src={avatar} alt="Software Consultant/Web Developer available" /></a>
						< h1 > < strong > As an experience Full Stack Developer, would love to help you with your Software Development project </strong >.</h1>
					</div>
					<Footer />
				</header>
			</div>
        )
    }
}

export default Header
