import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
	render() {
		return (
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img
							src="data:image/png;base64,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"
							alt="avatar"
							className="avatar-img"
						/>
					</Cell>
					<div className="banner-text">
						<h1>Full Stack Web Developer</h1>
						<hr />
						<p>Python3 | Flask | Django | ReactJS | MongoDB | Deep Learning | Tensorflow | Terraforms</p>
						<div className="social-links">
							{/*Linkedin*/}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>
							{/*Github*/}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-github" aria-hidden="true" />
							</a>
							{/*Stackoverflow*/}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-stack-overflow" aria-hidden="true" />
							</a>
							{/*instagram*/}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-instagram" aria-hidden="true" />
							</a>
						</div>
					</div>
				</Grid>
			</div>
		);
	}
}

export default LandingPage;
