import React, { Component } from 'react';
import './navBarFooter.sass';

class NavBarFooter extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<footer>
				<div class="container">
					<div class="row">
						<div class="col-lg-5 offset-lg-4">
							<ul class="footer">
								<li class="footer__item">
									<a href="#">
										<img src="logo/Logo_black.svg" alt="logo"/>
									</a>
								</li>
								<li class="footer__item">
									<a href="#">Our coffee</a>
								</li>
								<li class="footer__item">
									<a href="#">For your pleasure</a>
								</li>
							</ul>
						</div>
					</div>
					<img class="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
				</div>
			</footer>
		);
	}
}

export default NavBarFooter;
