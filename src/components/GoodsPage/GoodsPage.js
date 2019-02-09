import React, { Component } from 'react';
import './goodsPage.sass';
import NavBar from '../NavBar/NavBar';
import NavBarFooter from '../NavBarFooter/NavBarFooter';

class GoodsPage extends Component {
	render() {
		return (
			<div className="GoodsPage">
				<div class="banner">
					<NavBar/>
				</div>
				<section class="shop">
					<div class="container">
						<div class="row">
							<div class="col-lg-4 offset-2">
								<img class="shop__girl" src="./img/coffee_cup.jpg" alt="coffeCup"/>
							</div>
							<div class="col-lg-4">
								<div class="title">About our goods</div>
									<img class="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
									<div class="shop__text">
										Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
										<br/><br/>
										Afraid at highly months do things on at. Situation recommend objection do intention<br/>
										so questions. <br/>
										As greatly removed calling pleased improve an. Last ask him cold feel<br/>
										met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
										is song that held help face.
									</div>
								</div>
							</div>
						<div class="line"></div>
						
						<div class="row">
							<div class="col-lg-10 offset-lg-1">
								<div class="shop__wrapper">
									<div class="shop__item">
										<img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
										<div class="shop__item-title">
											Solimo Coffee Beans 2kg
										</div>
										<div class="shop__item-country">Brazil</div>
										<div class="shop__item-price">10.73$</div>
									</div>
									<div class="shop__item">
										<img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
										<div class="shop__item-title">
											Presto Coffee Beans 1kg
										</div>
										<div class="shop__item-country">Brazil</div>
										<div class="shop__item-price">15.99$</div>
									</div>
									<div class="shop__item">
										<img src="https://hhp-blog.s3.amazonaws.com/2018/07/iStock-673468996.jpg" alt="coffee"/>
										<div class="shop__item-title">
											AROMISTICO Coffee 1kg
										</div>
										<div class="shop__item-country">Brazil</div>
										<div class="shop__item-price">6.99$</div>
									</div>
									<div class="shop__item">
										<img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
										<div class="shop__item-title">
											Solimo Coffee Beans 2kg
										</div>
										<div class="shop__item-country">Brazil</div>
										<div class="shop__item-price">10.73$</div>
									</div>
									<div class="shop__item">
										<img src="https://i0.wp.com/www.healthline.com/hlcmsresource/images/AN_images/AN275-cup-of-coffee-732x549-Thumb.jpg?w=756" 
										alt="coffee"/>
										<div class="shop__item-title">
											Solimo Coffee Beans 2kg
										</div>
										<div class="shop__item-country">Brazil</div>
										<div class="shop__item-price">10.73$</div>
									</div>
									<div class="shop__item">
										<img src="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg" alt="coffee"/>
										<div class="shop__item-title">
											Solimo Coffee Beans 2kg
										</div>
										<div class="shop__item-country">Brazil</div>
										<div class="shop__item-price">10.73$</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<NavBarFooter/>
			</div>
		);
	}
}

export default GoodsPage;