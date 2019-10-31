import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'

class Header extends React.Component {
    render() {
        return (
			<div>
				<header id="header">
					
					<div className="inner">
						<a href="/" className="image avatar"><img src={avatar} alt="" /></a>
						< h1 > < strong > My name is Steve B and would love to help you with your Software Development project </strong >.</h1>
					</div>
					<Footer />
				</header>
			</div>
        )
    }
}

export default Header
