import React from 'react'
import comingsoon from '../assets/images/comingsoon.png'



class JobDisplay extends React.Component {
	render() {
		return (
			<div>
			{ this.renderJob()}
			</div>
		)
	}
	renderJob() {
		switch ( this.props.job ) {
			case "moo":
				return (
					<iframe width="560" height="315" src="https://www.youtube.com/embed/TaMEA8YGjfU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				)
			case "paylease":
				return (
					<iframe width="560" height="315" src="https://www.youtube.com/embed/u1nbM3wjqwg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				)
			case "bliz":
				return (
					<iframe width="560" height="315" src="https://www.youtube.com/embed/og3r9rJbAF0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				)
			case "wordpress":
				return (
					<iframe width="560" height="315" src="https://www.youtube.com/embed/q4IOG6b0X2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				)
			
			case "moc":
				return (
					<iframe width="560" height="315" src="https://www.youtube.com/embed/dS4lVSHa5Es" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				)
			case "newcars":
				return (<iframe width="560" height="315"  src={comingsoon} frameborder="0" scrolling="no"/>)
			case "clear":
				return (<iframe width="560" height="315" src={comingsoon} frameborder="0" scrolling="no" />)
			case "react":
				return (<iframe width="560" height="315" src={comingsoon} frameborder="0" scrolling="no" />)
			case "ip":
				return (<iframe width="560" height="315" src={comingsoon} frameborder="0" scrolling="no" />)
		}
	}
}

export default JobDisplay
