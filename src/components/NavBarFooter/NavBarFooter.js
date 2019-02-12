import React, { Component } from 'react';
import './navBarFooter.sass';
import { Link } from "react-router-dom";

class NavBarFooter extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<footer>
				<div className="container">
					<div className="row">
						<div className="col-lg-5 offset-lg-4">
							<ul className="footer">
								<li className="footer__item">
									<Link to="/">
										<img src="logo/Logo_black.svg" alt="logo"/>
									</Link>
								</li>
								<li className="footer__item">
									<Link to="ourCoffe">Our coffee</Link>
								</li>
								<li className="footer__item">
									<Link to="ourGoods">For your pleasure</Link>
								</li>
							</ul>
						</div>
					</div>
					<img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
				</div>
			</footer>
		);
	}
}

export default NavBarFooter;
