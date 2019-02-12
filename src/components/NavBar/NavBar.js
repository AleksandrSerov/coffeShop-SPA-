import React, { Component } from 'react';
import './navBar.sass';
import { Link } from "react-router-dom";

class NavBar extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<div className="NavBar">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<header>
								<ul className="header">
									<li className="header__item">
										<Link to="/">
											<img src="logo/Logo.svg" alt="logo"/>
										</Link>
									</li>
									<li className="header__item">
										<Link to="ourCoffe">Our coffee</Link>
									</li>
									<li className="header__item">
										<Link to="ourGoods" >For your pleasure</Link>
									</li>
								</ul>
							</header>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NavBar;
