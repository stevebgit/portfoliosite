import React from 'react'
import '../assets/scss/main.scss'

import Header from './BlogHeader'
import Footer from './BlogFooter'

class Template extends React.Component {
    render() {
        const { children } = this.props

        return (
            <div className="grid-container-blogpage">
                <Header />
                {children}
                <Footer />

            </div>
        )
    }
}

export default Template
