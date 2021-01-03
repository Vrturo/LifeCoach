import React from 'react';
import '../css/App.css';

function Header() {
  return (
    <header className="masthead">
        <div className="fightclub-navbar-wrap">
            <div className="fightclub-navbar">
                <div className="fightclub-navbar-inner fightclub-container-fluid max width cf">
                    <h1 className="visually-hidden">FightClub</h1>
                    <div className="fightclub-brand-wrap">
                        <a href="index.html" className="fightclub-brand img" title="FightClub &amp; Fitness Theme">
                            <img src="#" data-src="holder.js/319x35?auto=yes&bg=#f5e49d" alt="FightClub &amp; Fitness Theme" className="main-logo" />
                            <img src="#" data-src="holder.js/35x35?auto=yes&bg=#f5e49d" alt="FightClub &amp; Fitness Theme" className="mobile-logo" />
                            <img src="#" data-src="holder.js/319x35?auto=yes&bg=#f5e49d" alt="FightClub &amp; Fitness Theme" className=" alt-logo" />
                        </a>
                    </div>
                    <a href="#" className="fightclub-btn-navbar collapsed" data-toggle="collapse" data-target=".fightclub-nav-collapse">
                        <i className="fightclub-icon-menu-1"></i>
                        <span className="visually-hidden">Navigation</span>
                    </a>
                    <nav className="fightclub-nav-collapse collapse" role="navigation">

                        {/* <!-- Main menu --> */}
                        <ul id="menu-main-menu" className="fightclub-nav sf-menu">

                            <li className="menu-item current-menu-ancestor current-menu-parent"  >
                                <a href="#">Home <span className="caret"></span></a>
                            </li>

                            <li className="menu-item">
                                <a href="#">Blog <span className="caret"></span></a>
                            </li>

                            <li className="menu-item">
                                <a href="#">Contact <span className="caret"></span></a>
                            </li>
                        </ul>
                        {/* <!-- endmain menu --> */}
                    </nav> {/* <!-- end .fightclub-nav-collapse.collapse --> */}
                </div> {/* <!-- end .fightclub-navbar-inner --> */}
            </div> {/* <!-- end .fightclub-navbar --> */}
        </div> {/* <!-- end .fightclub-navbar-wrap --> */}
    </header>
  );
}

export default Header;
