import React from 'react'



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
				
			case "moc":
				return (<p>moc</p>)
				break;
		}
	}
}

export default JobDisplay
