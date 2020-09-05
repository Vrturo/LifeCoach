import React, { Component } from 'react';
//import '../css/App.css';

class CounterTwo extends Component {
  render() {
    return (

      <div id="counters-block" classname="fightclub-content-band vc parallax three-cols-center bg-image man holderjs">
        <div classname="fightclub-container-fluid max width">
          <div classname="fightclub-inner-container">
            {/* counter 1 */}
            <div classname="fightclub-column vc one-fourth">
              <div classname="fightclub-column-inner">
                <div id="counter-1" classname="counter-bar">
                  <h1>
                    <span classname="counter-value">
                      <span classname="num_suffix">h</span>
                    </span></h1>
                  <h5 classname="h-count-bar">Hours</h5>
                </div>
              </div>
            </div>
            {/* counter 2 */}
            <div classname="fightclub-column vc one-fourth">
              <div classname="fightclub-column-inner">
                <div id="counter-2" classname="counter-bar">
                  <h1>
                    <span classname="counter-value">
                      <span classname="num_suffix">+</span>
                    </span></h1>
                  <h5 classname="h-count-bar">Trainers</h5>
                </div>
              </div>
            </div>
            {/* counter 3 */}
            <div classname="fightclub-column vc one-fourth">
              <div classname="fightclub-column-inner">
                <div id="counter-3" classname="counter-bar">
                  <h1><span classname="counter-value" /></h1>
                  <h5 classname="h-count-bar">Classes</h5>
                </div>
              </div>
            </div>
            {/* counter 4 */}
            <div classname="fightclub-column vc one-fourth">
              <div classname="fightclub-column-inner">
                <div id="counter-4" classname="counter-bar">
                  <h1><span classname="counter-value"><span classname="num_suffix">K</span></span></h1>
                  <h5 classname="h-count-bar">Gold Medals</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CounterTwo;