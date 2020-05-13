import React, { Component } from 'react';

class Wall extends Component {
	render() {
		return (
			<div className="wall">
				<div className="intro-lettering">
					<div className="name">Elaine Wang</div>
					<div className="title">frontend software engineer</div>
				</div>
				<div className="arrow-container">
					<div className="arrow-part triangle"></div>
					<div className="arrow-part triangle-shadow"></div>
					<div className="arrow-part rectangle">
						<div className="projects-label">PROJECTS</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Wall;