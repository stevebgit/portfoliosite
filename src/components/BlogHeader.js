import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.png'
import { Link } from 'gatsby'

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header className="header">
                
                </header>
                <div className="menu">
                    <ul>
                        <li><a href="/" className="item">Home</a>     </li>
                        <li><a href="/blog" className="item">Blog</a>     </li>
                        <li><Link to="/#contact-form" className="item">Contact</Link></li>
                        
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Header
