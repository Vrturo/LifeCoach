import React from 'react';
import Header from './Header.js'
import HomeVideo from './HomeVideo.js';
import '../css/App.css';
import '../css/corporate.css';
import '../css/corporate-light.css';
import '../css/jquery.fullpage.css';
import '../css/schedule.css';
import '../css/slick.css';
import '../css/woocommerce.css';

function App() {
  return (
    <div id="top" className="site">
      <Header />
      <HomeVideo />
			<div className="fightclub-main full" role="main">
				<article className="page type-page hentry">
					<div className="entry-content">
						{/* Top Bunner Light */}
						<div id="top-banner-light" className="fightclub-content-band vc">
							<div className="fightclub-container-fluid max width">
								<div className="fightclub-inner-container">
									<div className="fightclub-column vc one-third">
										<div
											className="fightclub-column-inner one holderjs"
											data-background-src="?holder.js/1200x1200?bg=#F7F8FA"
										>
											<h5>NEW CLASSES</h5>
											<h2>Maximum Crossfit</h2>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit,
												sed do eiusmod tempor incididunt ut labore et dolore magna
												aliqua. Ut ad minim.
											</p>
											<p>
												<a
													className="fightclub-btn fightclub-btn-normal fightclub-btn-regular"
													href="#"
													target="_blank"
												>
													{" "}
													View Services{" "}
												</a>
											</p>
										</div>
									</div>
									<div className="fightclub-column vc one-third">
										<div className="fightclub-column-inner two">
											<h5>NEW CLASSES</h5>
											<h2>Women’s Grappling</h2>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit,
												sed do eiusmod tempor incididunt ut labore et dolore magna
												aliqua. Ut ad minim.
											</p>
											<p>
												<a
													className="fightclub-btn fightclub-btn-normal fightclub-btn-regular"
													href="#"
													target="_blank"
												>
													View Services
												</a>
											</p>
										</div>
									</div>
									<div className="fightclub-column vc one-third">
										<div
											className="fightclub-column-inner three holderjs"
											data-background-src="?holder.js/1200x1200?bg=#F7F8FA"
										>
											<h5>NEW CLASSES</h5>
											<h2>Brazilian Jiu-Jitsu</h2>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit,
												sed do eiusmod tempor incididunt ut labore et dolore magna
												aliqua. Ut ad minim.
											</p>
											<p>
												<a
													className="fightclub-btn fightclub-btn-normal fightclub-btn-regular"
													href="#"
													target="_blank"
												>
													View Services
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* end top bunner light*/}
						{/* Our classes bgr-right */}
						<div
							id="our-classes-bgr-right"
							className="fightclub-content-band vc man"
						>
							<div className="fightclub-inner-container">
								<div className="fightclub-column vc whole">
									<div className="fightclub-column-inner">
										<div id="fightclub-dbl-band-1" className="fightclub-dbl-band">
											<div className="fightclub-dbl-left ">
												<div className="fightclub-section-inner" />
											</div>
											<div
												className="fightclub-dbl-right  bg-image holderjs"
												data-background-src="?holder.js/1200x1200?bg=#717170"
											>
												<div className="fightclub-section-inner" />
											</div>
											<div className="our-classes-content fightclub-content-band vc">
												<div className="fightclub-inner-container">
													<div
														className="fightclub-column vc one-half fade-left"
														data-fade="true"
														data-fade-animation="in-from-left"
													>
														<div className="fightclub-column-inner">
															<h5>OUR CLASSES</h5>
															<h1>Kickboxing (All Levels)</h1>
															<p>
																<span className="fightclub-icon-style fightclub-lines-on">
																	<i className="fightclub-icon  fightclub-icon-boxer5" />
																</span>
															</p>
															<p className="classes-desc">
																One of the most popular combat sports nowadays, and
																definitely one of the most effective ways to keep
																your mind and body in a perfect shape. Skilled
																trainers, professional hardware and eight different
																groups depending on your level, age and schedule
																preferences.
															</p>
															<p>
																<a
																	className="fightclub-btn fightclub-btn-normal fightclub-btn-regular"
																	href="#"
																	target="_blank"
																>
																	{" "}
																	Read More{" "}
																</a>
															</p>
														</div>
													</div>
													<div className="fightclub-column vc one-half">
														<div className="fightclub-column-inner" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* end our classes bgr-right */}
						{/* Our classes bgr-left */}
						<div
							id="our-classes-bgr-left"
							className="fightclub-content-band vc man"
						>
							<div className="fightclub-inner-container">
								<div className="fightclub-column vc whole">
									<div className="fightclub-column-inner">
										<div id="fightclub-dbl-band-2" className="fightclub-dbl-band">
											<div
												className="fightclub-dbl-left  bg-image holderjs"
												data-background-src="?holder.js/1200x1200?bg=#717170"
											>
												<div className="fightclub-section-inner" />
											</div>
											<div className="fightclub-dbl-right ">
												<div className="fightclub-section-inner" />
											</div>
											<div className="our-classes-content fightclub-content-band vc">
												<div className="fightclub-inner-container">
													<div className="fightclub-column vc one-half">
														<div className="fightclub-column-inner" />
													</div>
													<div
														className="fightclub-column vc one-half fade-right"
														data-fade="true"
														data-fade-animation="in-from-right"
													>
														<div className="fightclub-column-inner">
															<h5>Our Classes</h5>
															<h1>Maximum Crossfit</h1>
															<p>
																<span className="fightclub-icon-style fightclub-lines-on">
																	<i className="fightclub-icon  fightclub-icon-weights15" />
																</span>
															</p>
															<div className="classes-desc-head left">
																<p>Strength</p>
																<p>
																	Power exercises on a high quality equipment under
																	supervision of the best athletes
																	<br /> in a perfect shape
																</p>
															</div>
															<div className="classes-desc-head right">
																<p>Diversity</p>
																<p>
																	You will never get bored, every new training is an
																	exciting journey towards your body
																	<br />
																	in a perfect shape
																</p>
															</div>
															<hr className="fightclub-clear" />
															<p>
																<a
																	className="fightclub-btn fightclub-btn-normal fightclub-btn-regular"
																	href="#"
																	target="_blank"
																>
																	{" "}
																	Read More{" "}
																</a>
															</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* end our classes bgr-left */}
						{/* Our classes bgr-right */}
						<div
							id="our-classes-bgr-right-2"
							className="fightclub-content-band vc man"
						>
							<div className="fightclub-inner-container">
								<div className="fightclub-column vc whole">
									<div className="fightclub-column-inner">
										<div id="fightclub-dbl-band-3" className="fightclub-dbl-band">
											<div className="fightclub-dbl-left ">
												<div className="fightclub-section-inner" />
											</div>
											<div
												className="fightclub-dbl-right  bg-image holderjs"
												data-background-src="?holder.js/1200x1200?bg=#717170"
											>
												<div className="fightclub-section-inner" />
											</div>
											<div className="our-classes-content fightclub-content-band vc">
												<div className="fightclub-inner-container">
													<div
														className="fightclub-column vc one-half fade-left"
														data-fade="true"
														data-fade-animation="in-from-left"
													>
														<div className="fightclub-column-inner">
															<h5>OUR CLASSES</h5>
															<h1>Kickboxing (All Levels)</h1>
															<p>
																<span className="fightclub-icon-style fightclub-lines-on">
																	<i className="fightclub-icon  fightclub-icon-boxer5" />
																</span>
															</p>
															<p className="classes-desc">
																One of the most popular combat sports nowadays, and
																definitely one of the most effective ways to keep
																your mind and body in a perfect shape. Skilled
																trainers, professional hardware and eight different
																groups depending on your level, age and schedule
																preferences.
															</p>
															<p>
																<a
																	className="fightclub-btn fightclub-btn-normal fightclub-btn-regular"
																	href="#"
																	target="_blank"
																>
																	{" "}
																	Read More{" "}
																</a>
															</p>
														</div>
													</div>
													<div className="fightclub-column vc one-half">
														<div className="fightclub-column-inner" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* end our classes bgr-right */}
						{/* About us */}
						<div
							id="about-us"
							className="fightclub-content-band vc three-cols-center man"
						>
							<div className="fightclub-container-fluid max width">
								<div className="fightclub-inner-container">
									<div
										className="fightclub-column vc whole fade-bottom"
										data-fade="true"
										data-fade-animation="in-from-bottom"
									>
										<div className="fightclub-column-inner">
											<h5>About Us</h5>
											<h1>What We Do And Who We Are?</h1>
											<p>
												<span className="fightclub-icon-style fightclub-lines-on">
													<i className="fightclub-icon  fightclub-icon-boxing14" />
												</span>
											</p>
											<div className="about-us-content fightclub-content-band vc">
												<div className="fightclub-inner-container">
													<div
														className="fightclub-column vc one-third fade-bottom"
														data-fade="true"
														data-fade-animation="in-from-bottom"
													>
														<div className="fightclub-column-inner">
															<p>
																<img
																	className=" size-full aligncenter"
																	src="#"
																	data-src="holder.js/370x315?auto=yes"
																	alt="Photo-Filter-31"
																	width={370}
																	height={315}
																/>
															</p>
															<h5>
																Sam Smith <span>“The Machine”</span>
															</h5>
															<p>
																<span>Judo Instructor,</span>
																<a href="mailto:support@themeforest.net">
																	{" "}
																	support@themeforest.net
																</a>
																<br />
																Sit amet, consectetur adipisicing elit, sed do
																<br />
																eiusmod tempor incididunt ut labore
															</p>
															<hr className="fightclub-gap" />
														</div>
													</div>
													<div
														className="fightclub-column vc one-third fade-bottom"
														data-fade="true"
														data-fade-animation="in-from-bottom"
													>
														<div className="fightclub-column-inner">
															<p>
																<img
																	className="size-full aligncenter"
																	src="#"
																	data-src="holder.js/370x315?auto=yes"
																	alt="Photo"
																	width={370}
																	height={315}
																/>
															</p>
															<h5>
																Sandra Fit <span>“The Hammer”</span>
															</h5>
															<p>
																<span>Founder,</span>{" "}
																<a href="mailto:support@themeforest.net">
																	support@themeforest.net
																</a>
																<br />
																Sit amet, consectetur adipisicing elit, sed do
																<br />
																eiusmod tempor incididunt ut labore
															</p>
															<hr className="fightclub-gap" />
														</div>
													</div>
													<div
														className="fightclub-column vc one-third fade-bottom"
														data-fade="true"
														data-fade-animation="in-from-bottom"
													>
														<div className="fightclub-column-inner">
															<p>
																<img
																	className="size-full aligncenter"
																	src="#"
																	data-src="holder.js/370x315?auto=yes"
																	alt="Photo"
																	width={370}
																	height={315}
																/>
															</p>
															<h5>
																John Beaton <span>“Scrappy Doo”</span>
															</h5>
															<p>
																<span>Grappling Instructor,</span>{" "}
																<a href="mailto:support@themeforest.net">
																	support@themeforest.net
																</a>
																<br />
																Sit amet, consectetur adipisicing elit, sed do
																<br />
																eiusmod tempor incididunt ut labore
															</p>
															<hr className="fightclub-gap" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* end about us */}
						{/* Gallery Block */}
						<div
							id="gallery-block"
							className="fightclub-content-band vc bg-image parallax man holderjs"
							data-background-src="?holder.js/1920x1050?bg=#717170"
						>
							<div className="fightclub-container-fluid max width">
								<div className="fightclub-inner-container">
									<div className="fightclub-column vc whole">
										<div className="fightclub-column-inner">
											<h5>Gallery</h5>
											<h1>See Our Awesome Images</h1>
											<p>
												<span className="fightclub-icon-style fightclub-lines-on">
													<i className="fightclub-icon  fightclub-icon-boxer4" />
												</span>
											</p>
											<hr className="fightclub-gap" />
											<div className="fightclub-portfolio-wrapper post-type-archive-fightclub-portfolio">
												<div
													id="fightclub-iso-container"
													className="fightclub-iso-container cols-4"
												>
													{/* image 1 */}
													<article className="fightclub-portfolio type-fightclub-portfolio status-publish has-post-thumbnail hentry portfolio-category-heroes portfolio-category-promo">
														<div className="entry-featured">
															<div className="entry-featured">
																<a href="#" title='Permalink to: "Our Prospects"'>
																	<img
																		src="#"
																		data-src="holder.js/770x700?auto=yes"
																		alt="Photo"
																	/>
																</a>
															</div>
															<header className="entry-header">
																<h3>
																	<a href="#" title='Permalink to: "Our Prospects"'>
																		<span className="dum-hover" />
																	</a>
																</h3>
																<a
																	href=""
																	data-id={3328}
																	data-action="single_page"
																	className="fightclub-portfolio-preview"
																>
																	<i className="fightclub-icon-search-2" />
																</a>
																<a
																	href="#"
																	className="fightclub-portfolio-permalink"
																>
																	<i className="fightclub-icon-link" />
																</a>
															</header>
														</div>
													</article>
													{/* Image 2 */}
													<article className="fightclub-portfolio type-fightclub-portfolio status-publish has-post-thumbnail hentry portfolio-category-fights">
														<div className="entry-featured">
															<div className="entry-featured">
																<a href="#" title='Permalink to: "Our Champions"'>
																	<img
																		src="#"
																		data-src="holder.js/770x700?auto=yes"
																		alt="Photo"
																	/>
																</a>
															</div>
															<header className="entry-header">
																<h3>
																	<a href="#" title='Permalink to: "Our Champions"'>
																		<span className="dum-hover" />
																	</a>
																</h3>
																<a
																	href="javascript:void(0);"
																	data-id={3325}
																	data-action="single_page"
																	className="fightclub-portfolio-preview"
																>
																	<i className="fightclub-icon-search-2" />
																</a>
																<a
																	href="#"
																	className="fightclub-portfolio-permalink"
																>
																	<i className="fightclub-icon-link" />
																</a>
															</header>
														</div>
													</article>
													{/* Image 3 */}
													<article className="fightclub-portfolio type-fightclub-portfolio status-publish has-post-thumbnail hentry portfolio-category-classes">
														<div className="entry-featured">
															<div className="entry-featured">
																<a href="#" title='Permalink to: "Skills"'>
																	<img
																		src="#"
																		data-src="holder.js/770x700?auto=yes"
																		alt="Photo"
																	/>
																</a>
															</div>
															<header className="entry-header">
																<h3>
																	<a href="#" title='Permalink to: "Skills"'>
																		<span className="dum-hover" />
																	</a>
																</h3>
																<a
																	href="javascript:void(0);"
																	data-id={3322}
																	data-action="single_page"
																	className="fightclub-portfolio-preview"
																>
																	<i className="fightclub-icon-search-2" />
																</a>
																<a
																	href="#"
																	className="fightclub-portfolio-permalink"
																>
																	<i className="fightclub-icon-link" />
																</a>
															</header>
														</div>
													</article>
													<article className="fightclub-portfolio type-fightclub-portfolio status-publish has-post-thumbnail hentry portfolio-category-promo portfolio-category-teachers">
														<div className="entry-featured">
															<div className="entry-featured">
																<a href="#" title='Permalink to: "Trainers"'>
																	<img
																		src="#"
																		data-src="holder.js/770x700?auto=yes"
																		alt="Photo"
																	/>
																</a>
															</div>
															<header className="entry-header">
																<h3>
																	<a href="#" title='Permalink to: "Trainers"'>
																		<span className="dum-hover" />
																	</a>
																</h3>
																<a
																	href="javascript:void(0);"
																	data-id={3319}
																	data-action="single_page"
																	className="fightclub-portfolio-preview"
																>
																	<i className="fightclub-icon-search-2" />
																</a>
																<a
																	href="#"
																	className="fightclub-portfolio-permalink"
																>
																	<i className="fightclub-icon-link" />
																</a>
															</header>
														</div>
													</article>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* end gallery block */}
						{/* Testimonials block */}
						<div
							id="testimonials-block"
							className="fightclub-content-band vc bg-image parallax man holderjs"
							data-background-src="?holder.js/1920x1050?bg=#211C17"
						>
							<div className="fightclub-container-fluid max width">
								<div className="fightclub-inner-container">
									<div className="fightclub-column vc whole">
										<div className="fightclub-column-inner">
											<h5>Testimonials</h5>
											<h1>What They Say About Us</h1>
											<p>
												<span className="fightclub-icon-style fightclub-lines-on">
													<i className="fightclub-icon  fightclub-icon-champion2" />
												</span>
											</p>
											<div className="fightclub-slider-shortcode-container fightclub-slider-shortcode-container">
												<div className="fightclub-slider fightclub-slider-shortcode fightclub-slider-shortcode-1">
													{/* Slide 1 */}
													<div className="fightclub-slide">
														<p>
															“It’s all about who you are. Try to rich the next
															lavel.
															<br /> Unde omnis iste natus error sitt voluptatem
															accusantium doloremque.”
														</p>
														<p>
															<img
																className=" size-full aligncenter"
																src="#"
																data-src="holder.js/75x75?auto=yes"
																alt="Fotolia_79"
																width={75}
																height={75}
															/>
														</p>
														<h4>Dave Einstein</h4>
														<p>Trainer</p>
													</div>
													{/* Slide 2 */}
													<div className="fightclub-slide">
														<p>
															“It’s all about who you are. Try to rich the next
															lavel.
															<br /> Unde omnis iste natus error sitt voluptatem
															accusantium doloremque.”
														</p>
														<p>
															<img
																className="aligncenter size-full"
																src="#"
																data-src="holder.js/75x75?auto=yes"
																alt="Photo"
																width={75}
																height={75}
															/>
														</p>
														<h4>Dave Einstein</h4>
														<p>Trainer</p>
													</div>
													{/* Slide 3 */}
													<div className="fightclub-slide">
														<p>
															“It’s all about who you are. Try to rich the next
															lavel.
															<br /> Unde omnis iste natus error sitt voluptatem
															accusantium doloremque.”
														</p>
														<p>
															<img
																className="aligncenter size-full"
																src="#"
																data-src="holder.js/75x75?auto=yes"
																alt="Photo"
																width={75}
																height={75}
															/>
														</p>
														<h4>Dave Einstein</h4>
														<p>Trainer</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* End testimonials-block */}
						{/* Get in touch headings */}
						<div
							id="get-in-touch-headings"
							className="fightclub-content-band vc man"
						>
							<div className="fightclub-container-fluid max width">
								<div className="fightclub-inner-container">
									<div className="fightclub-column vc whole">
										<div className="fightclub-column-inner">
											<h5>Contact Us</h5>
											<h1>Get In Touch</h1>
											<p>
												<span className="fightclub-icon-style fightclub-lines-on">
													<i className="fightclub-icon  fightclub-icon-bicycles4" />
												</span>
											</p>
											<p className="get-in-touch-desc">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit,
												sed do eiusmod tempor incididunt ut labore
												<br /> et aliqua. Ut enim aliquip ex ea commodo consequat.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* end get-in-touch-headings */}
						{/* Contact block */}
						<div
							id="contact-block"
							className="fightclub-content-band vc man no_columns_margin"
						>
							<div className="fightclub-container-fluid max width">
								<div className="fightclub-inner-container">
									{/* map */}
									<div className="fightclub-column vc one-third">
										<div className="fightclub-column-inner">
											<div className="fightclub-map">
												<div className="fightclub-map-inner">
													<p>
														<iframe
															src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d92454.47396011974!2d-81.62625080519284!3d30.339526562202714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1439285276995"
															width={600}
															height={450}
															allowFullScreen="allowfullscreen"
														/>
													</p>
												</div>
											</div>
										</div>
									</div>
									{/* Contact information */}
									<div className="contact-information fightclub-column vc one-third">
										<div className="fightclub-column-inner">
											<h5>For general questions</h5>
											<h2>Contact Information</h2>
											<p>
												The point of using orem Ipsum is that it
												<br /> has a more-or-less normal distribution
												<br /> of letters nostrtion nisi.
											</p>
											<p>
												{" "}
												Adress: <span>124 St Abord Road, London, GB 045</span>
												<br />
												Phone: <span>+1 (800) 123 4567 89</span>
												<br />
												Email:{" "}
												<span>
													<a href="mailto:fxofficeteam@gmail.com">
														fxofficeteam@gmail.com
													</a>
												</span>
											</p>
										</div>
									</div>
									{/* Quick Suppott */}
									<div className="contact-support fightclub-column vc one-third">
										<div className="fightclub-column-inner">
											<h5>Resolve Issue Fast</h5>
											<h2>Quick Support</h2>
											<p>124 St Abord Road, London, GB 045</p>
											<p>+1 (800) 123456789 or +1 (800) 123456789</p>
											<p>
												<a href="mailto:fxofficeteam@gmail.com">
													fxofficeteam@gmail.com
												</a>
											</p>
											<p>Nostrud exercitation ullamco nisi dolore</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* end contact block */}
						{/* Bottom bunner */}
						<div
							id="bottom-bunner"
							className="fightclub-content-band vc bg-image man holderjs"
							data-background-src="?holder.js/1920x300?bg=#717170"
						>
							<div className="fightclub-container-fluid max width">
								<div className="fightclub-inner-container">
									<div className="fightclub-column vc two-thirds">
										<div className="fightclub-column-inner">
											<h5>Design is created by Serhiy Semenov from FXoffice</h5>
											<h2>Create amazing website! what are you waiting for?</h2>
										</div>
									</div>
									<div className="fightclub-column vc one-third">
										<div className="fightclub-column-inner">
											<p>
												<a
													className="fightclub-btn fightclub-btn-normal fightclub-btn-regular"
													href="#"
													target="_blank"
												>
													{" "}
													Purchase Now{" "}
												</a>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* end bottom-bunner */}
					</div>{" "}
					{/* end .entry-content */}
				</article>{" "}
				{/* end .hentry */}
			</div>{" "}
			{/* end .fightclub-main */}
			<footer className="fightclub-footer" role="contentinfo">
				<div className="widget_wrap">
					<div className="fightclub-container-fluid max width">
						<div className="fightclub-row-fluid">
							<div className="footer-widget-1 fightclub-span3">
								<div className="widget widget_text">
									<h3 className="h-widget">About Us</h3>
									<div className="textwidget">
										<p>
											The point of using orem Ipsum is that it has a more-or-less
											normal distribution of letters. Mauris aliquam nibh nisi, sed
											pulvinar lacus semper ut.
										</p>
										<p>
											Address: <span>124 St Abord Road, London, GB 045</span>
											<br />
											Phone: <span>+1 (800) 123 4567 89</span>
											<br />
											Email: <span>fxofficeteam@gmail.com</span>
										</p>
									</div>
								</div>
							</div>
							<div className="footer-widget-2 fightclub-span3">
								<div className="widget widget_text">
									<h3 className="h-widget">Working Hours</h3>
									<div className="textwidget">
										<p>
											Monday
											<span className="dotted" />
											<span className="working-time">07.00-21:00</span>
										</p>
										<p>
											Tuesday
											<span className="dotted" />
											<span className="working-time">07.00-21:00</span>
										</p>
										<p>
											Wednesday
											<span className="dotted" />
											<span className="working-time">07.00-21:00</span>
										</p>
										<p>
											Thursday
											<span className="dotted" />
											<span className="working-time">07.00-21:00</span>
										</p>
										<p>
											Friday
											<span className="dotted" />
											<span className="working-time">07.00-21:00</span>
										</p>
										<p>
											Saturday
											<span className="dotted" />
											<span className="working-time">07.00-21:00</span>
										</p>
										<p>
											Sunday
											<span className="dotted" />
											<span className="working-time">Off</span>
										</p>
									</div>
								</div>
							</div>
							<div className="footer-widget-3 fightclub-span3">
								<div
									id="footer-recent-posts"
									className="widget widget_recent_posts"
								>
									<h3 className="h-widget">Popular Posts</h3>
									<ul className="recent-posts cf">
										<li className="recent_posts cf">
											<a href="standard-post.html">
												<img
													src="#"
													data-src="holder.js/80x80?auto=yes"
													alt="Photo"
												/>
											</a>
											<div>
												<h4>
													<a
														href="standard-post.html"
														className="post_title_widget"
													>
														Standard Text Post
													</a>
												</h4>
												<h5 className="date-block">
													<span className="author-block">FXoffice</span> August 7,
													2015
												</h5>
												<h5 className="date-block">1 comment</h5>
											</div>
										</li>
										<li className="recent_posts cf">
											<a href="#">
												<img
													src="#"
													data-src="holder.js/80x80?auto=yes"
													alt="Photo"
												/>
											</a>
											<div>
												<h4>
													<a href="image-post.html" className="post_title_widget">
														Standard Post with Image
													</a>
												</h4>
												<h5 className="date-block">
													<span className="author-block">FXoffice</span> August 7,
													2015
												</h5>
												<h5 className="date-block">no comments</h5>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="fightclub-span3">
								<div id="tweets-widget-5" className="widget tweets">
									<h3 className="h-widget">Latest Tweets</h3>
									<div className="twitter-box">
										<div className="twitter-holder">
											<div className="b">
												<div
													className="tweets-container"
													id="tweets_tweets-widget-5"
												>
													<ul className="jtwt">
														<li className="jtwt_tweet">
															<p className="jtwt_tweet_text">
																Мобильное приложение для фитнес клубов от компании
																BeApp #fitnesclub #app #мобильноеприложение
																https://t.co/9tWimZuHKV с помощью &nbsp;
																<a
																	href="http://twitter.com/YouTube"
																	target="_blank"
																>
																	@YouTube
																</a>
																&nbsp;
																<span className="tweet_time">
																	<a
																		href="http://twitter.com/FXofficeThemes/statuses/725658596973928449"
																		className="jtwt_date"
																	>
																		1 week ago
																	</a>
																</span>
															</p>
														</li>
														<li className="jtwt_tweet">
															<p className="jtwt_tweet_text">
																Get a trendy free mobile application for your
																fitness club #fitness #fitnessclub #free #app
																https://t.co/gEqy8FSa6o https://t.co/x6uTxixfui
																<span className="tweet_time">
																	<a
																		href="http://twitter.com/FXofficeThemes/statuses/724970158146654208"
																		className="jtwt_date"
																	>
																		1 week ago
																	</a>
																</span>
															</p>
														</li>
														<li className="jtwt_tweet">
															<p className="jtwt_tweet_text">
																How we made first $3000 on #ThemeForest #themes
																#wordpress #envato #envatoelite #wordpressthemes
																#webdevelopment https://t.co/IDcbRTLr1O{" "}
																<span className="tweet_time">
																	<a
																		href="http://twitter.com/FXofficeThemes/statuses/724583173443715072"
																		className="jtwt_date"
																	>
																		2 weeks ago
																	</a>
																</span>
															</p>
														</li>
													</ul>
												</div>
											</div>
										</div>
										<span className="arrow" />
									</div>
								</div>
							</div>
						</div>{" "}
						{/* end .fightclub-row-fluid */}
					</div>{" "}
					{/* end .fightclub-container-fluid.max.width */}
				</div>{" "}
				{/* end .widget_wrap */}
				<div className="footer-bottom cf">
					<div className="fightclub-container-fluid max width">
						<div className="footer-content">
							Copyright © 2016 - designed by{" "}
							<a
								href="http://themeforest.net/user/fxoffice/portfolio"
								target="_blank"
							>
								FXOFFICE
							</a>
						</div>
					</div>
				</div>
			</footer>{" "}
			{/* end .fightclub-footer */}
    </div>
  );
}

export default App;
