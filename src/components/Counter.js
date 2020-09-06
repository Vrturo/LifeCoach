import React from 'react';
import '../css/App.css';

function Counter() {
	return (
			<div id="counters-block" className="fightclub-content-band vc parallax three-cols-center bg-image man holderjs">
		  	<div className="fightclub-container-fluid max width">
		    	<div className="fightclub-inner-container">
		      {/* counter 1 */}
		      <div className="fightclub-column vc one-fourth">
		        <div className="fightclub-column-inner">
		          <div id="counter-1" className="counter-bar">
		            <h1>
		              <span className="counter-value" />
		              <span className="num_suffix">h</span>
		            </h1>
		            <h5 className="h-count-bar">Hours</h5>
		          </div>
		        </div>
		      </div>
		      {/* counter 2 */}
		      <div className="fightclub-column vc one-fourth">
		        <div className="fightclub-column-inner">
		          <div id="counter-2" className="counter-bar">
		            <h1>
		              <span className="counter-value" />
		              <span className="num_suffix">+</span>
		            </h1>
		            <h5 className="h-count-bar">Trainers</h5>
		          </div>
		        </div>
		      </div>
		      {/* counter 3 */}
		      <div className="fightclub-column vc one-fourth">
		        <div className="fightclub-column-inner">
		          <div id="counter-3" className="counter-bar">
		            <h1><span className="counter-value" /></h1>
		            <h5 className="h-count-bar">Classes</h5>
		          </div>
		        </div>
		      </div>
		      {/* counter 4 */}
		      <div className="fightclub-column vc one-fourth">
		        <div className="fightclub-column-inner">
		          <div id="counter-4" className="counter-bar">
		            <h1><span className="counter-value" /><span className="num_suffix">K</span></h1>
		            <h5 className="h-count-bar">Gold Medals</h5>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	)
}

export default Counter;