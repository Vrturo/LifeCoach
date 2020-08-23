import React from 'react';

function HomeVideo() {
	return (
		<div className="fightclub-slider-revolution-container below">
			<div
				id="rev_slider_1_1_wrapper"
				className="rev_slider_wrapper fullwidthbanner-container"
				data-alias="main-home"
			>
				{/* START REVOLUTION SLIDER fullwidth mode */}
				<div
					id="revslider"
					className="rev_slider fullwidthabanner"
					data-version={5.0}
				>
					<ul>
						{" "}
						{/* SLIDE 1 */}
						<li data-transition="fade">
							{/* MAIN IMAGE */}
							{/* <img src="../img/bodybuilding/transparent.png"  alt="transparent" */}
							<img
								src="#"
								data-src="holder.js/1905x1050?auto=yes&text=video layer"
								alt="transparent"
								title="slide-1"
								width={1926}
								height={1092}
								data-bgposition="center top"
								data-bgfit="cover"
								data-bgrepeat="no-repeat"
								className="rev-slidebg"
								data-no-retina
							/>
							{/* LAYERS */}
							{/* Video layer */}
							<div
								className="rs-background-video-layer"
								data-videomp4="../media/squat2.mp4"
								data-forcerewind="on"
								data-volume="mute"
								data-ytid="T8--OggjJKQ"
								data-videoattributes="version=3&enablejsapi=1&html5=1& hd=1&wmode=opaque&showinfo=0& ref=0;;origin=http://server.local;"
								data-videorate="1.5"
								data-videowidth="100%"
								data-videoheight="100%"
								data-videoendat="60:00"
								data-videocontrols="none"
								data-videoloop="loopandnoslidestop"
								data-forcecover={1}
								data-aspectratio="16:9"
								data-autoplay="true"
								data-autoplayonlyfirsttime="false"
							></div>
							{/* LAYER NR. 1 */}
							<div
								className="tp-caption customlightwhite   tp-resizeme"
								data-x={546}
								data-y={380}
								data-width="['auto']"
								data-height="['auto']"
								data-transform_idle="o:1;"
								data-transform_in="x:-50px;opacity:0;s:1000;e:easeInQuad;"
								data-transform_out="x:-50px;opacity:0;s:300;"
								data-start={500}
								data-splitin="none"
								data-splitout="none"
								data-responsive_offset="on"
								style={{
									zIndex: 5,
									whiteSpace: "nowrap",
									fontFamily: '"Exo 2"',
									lineHeight: 60,
									fontWeight: 300,
									letterSpacing: 0,
									fontSize: 60,
									opacity: 1,
									color: "#FFF",
									textTransform: "left",
									WebkitTransform: "translate3d(0, 0, 0)",
									MozTransform: "translate3d(0, 0, 0)",
									msTransform: "translate3d(0, 0, 0)",
									OTransform: "translate3d(0, 0, 0)",
									transform: "translate3d(0, 0, 0)",
									WebkitTransformOrigin: "50% 50% 0",
									MozTransformOrigin: "50% 50% 0",
									msTransformOrigin: "50% 50% 0",
									OTransformOrigin: "50% 50% 0",
									transformOrigin: "50% 50% 0"
								}}
							>
								tap the pros for
							</div>
							{/* LAYER NR. 2 */}
							<div
								className="tp-caption customboldwhite tp-resizeme"
								data-x={483}
								data-y={440}
								data-width="['auto']"
								data-height="['auto']"
								data-transform_idle="o:1;"
								data-transform_in="x:-50px;opacity:0;s:1000;e:easeInOutQuad;"
								data-transform_out="x:-50px;opacity:0;s:300;"
								data-start={1000}
								data-splitin="none"
								data-splitout="none"
								data-responsive_offset="on"
								style={{
									zIndex: 6,
									whiteSpace: "nowrap",
									fontFamily: '"Exo 2"',
									lineHeight: 100,
									letterSpacing: 0,
									fontWeight: 700,
									fontSize: 100,
									color: "#FFF",
									textTransform: "left",
									WebkitTransform: "translate3d(0, 0, 0)",
									MozTransform: "translate3d(0, 0, 0)",
									msTransform: "translate3d(0, 0, 0)",
									OTransform: "translate3d(0, 0, 0)",
									transform: "translate3d(0, 0, 0)",
									WebkitTransformOrigin: "50% 50% 0",
									MozTransformOrigin: "50% 50% 0",
									msTransformOrigin: "50% 50% 0",
									OTransformOrigin: "50% 50% 0",
									transformOrigin: "50% 50% 0"
								}}
							>
								5 Days Free!
							</div>
							{/* LAYER NR. 3 */}
							<div
								className="tp-caption custombutton   tp-resizeme"
								data-x={685}
								data-y={586}
								data-width="['auto']"
								data-height="['auto']"
								data-transform_idle="o:1;"
								data-transform_in="x:-50px;opacity:0;s:1000;e:easeInOutQuad;"
								data-transform_out="x:-50px;opacity:0;s:300;"
								data-start={1500}
								data-splitin="none"
								data-splitout="none"
								data-responsive_offset="on"
								style={{ zIndex: 7, whiteSpace: "nowrap", textTransform: "left" }}
							>
								<a href="#" className="fightclub-btn custom-btn">
									Get Your Free Pass
								</a>
							</div>
						</li>
					</ul>
				</div>
				{/* END REVOLUTION SLIDER */}
			</div>
	</div>
	)
}

export default HomeVideo;