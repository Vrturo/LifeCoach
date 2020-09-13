import React from 'react';
import '../css/App.css';

function Header() {
  return (
    <header className="masthead">
        <div className="fightclub-search-bar">
            <div className="fightclub-searchform-overlay-inner">
                <div className="fightclub-container-fluid max width cf">
                    <form method="get" id="searchform-navbar" className="form-search" action="http://themes.fxoffice.net/fightclub_wp/">
                        <label htmlFor="s">Type and Press &quot;Enter&quot; to Search</label>
                        <input id="s" className="search-query" type="text" name="s" />
                    </form>
                </div>
            </div>
        </div>
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

                            <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children ing-dropdown-menu"  >
                                <a href="#">Home <span className="caret"></span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="index.html">Fightclub</a>
                                    </li>
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="home-portfolio.html">Home Portfolio</a>
                                    </li>
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="home-parallax.html">Home Parallax</a>
                                    </li>
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="home-light.html">Home Light</a>
                                    </li>
                                    <li className="menu-item current-menu-item current_page_item ing-dropdown-submenu">
                                        <a href="home-video.html">Home Video</a>
                                    </li>
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="home-grid.html">Home Grid</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item menu-item-has-children ing-dropdown-menu"  >
                                <a href="#">Pages <span className="caret"></span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li  className="menu-item ing-dropdown-submenu">
                                        <a href="schedule.html">Schedule</a>
                                    </li>
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="contact-us.html">Contact Us</a>
                                    </li>
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="404.html">404 Page</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item menu-item-has-children ing-dropdown-menu">
                                <a href="#">Portfolio <span className="caret"></span></a>
                                <ul className="sub-menu">
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="portfolio-fullwidth.html">Portfolio Fullwidth</a>
                                    </li>
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="portfolio-2-columns.html">Portfolio 2 Columns</a>
                                    </li>
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="portfolio-3-columns.html">Portfolio 3 Columns</a>
                                    </li>
                                    <li className="menu-item ing-dropdown-submenu">
                                        <a href="portfolio-4-columns.html">Portfolio 4 Columns</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item menu-item-has-children ing-dropdown-menu">
                                <a href="#">Blog <span className="caret"></span></a>
                                <ul className="sub-menu">
                                <li className="menu-item menu-item-has-children ing-dropdown-submenu">
                                        <a href="#">Classic</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="classic-blog-right-sidebar.html">Classic Blog Right Sidebar</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="classic-blog-left-sidebar.html">Classic Blog Left Sidebar</a>
                                            </li>
                                            <li className="menu-item">
                                                <a href="classic-blog-fullwidth.html">Classic Blog Fullwidth</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li  className="menu-item menu-item-has-children ing-dropdown-submenu">
                                        <a href="#">Masonry</a>
                                        <ul className="sub-menu">
                                            <li className="menu-item">
                                                <a href="masonry-2-columns.html">Masonry 2 Columns</a></li>
                                            <li className="menu-item">
                                                <a href="masonry-2-columns-right-sidebar.html">Masonry 2 Columns Right Sidebar</a></li>
                                            <li className="menu-item">
                                                <a href="masonry-2-columns-left-sidebar.html">Masonry 2 Columns Left Sidebar</a></li>
                                            <li className="menu-item">
                                                <a href="masonry-3-columns.html">Masonry 3 Columns</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li className="menu-item menu-item-has-children ing-megamenu-menu">
                                <a href="#">Shop <span className="caret"></span></a>
                                <ul className='fightclub-megamenu-wrapper fightclub-columns-2 columns-per-row-2 columns-2 col-span-4'>
                                    <li className='row'>
                                        <div className="fightclub-megamenu-holder">
                                            <ul className='fightclub-megamenu '>
                                                <li className="menu-item menu-item-has-children fightclub-megamenu-submenu fightclub-megamenu-columns-2 col-lg-6 col-md-6 col-sm-6">
                                                    <h4 className='fightclub-megamenu-title'>Shop Content</h4>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">
                                                            <a href="shop-2-columns.html">Shop 2 Columns</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="shop-2-columns-right-filter.html">Shop 2 Columns Right Filter</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="shop-2-columns-left-filter.html">Shop 2 Columns Left Filter</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="shop-3-columns.html">Shop 3 Columns</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item menu-item-has-children fightclub-megamenu-submenu fightclub-megamenu-columns-2 col-lg-6 col-md-6 col-sm-6">
                                                    <h4 className='fightclub-megamenu-title'>Product Pages</h4>
                                                    <ul className="sub-menu">
                                                        <li className="menu-item">
                                                            <a href="standard-product.html">Standard Product</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="sale-product.html">Sale Product</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="variable-product.html">Variable Product</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="cart.html">Cart</a>
                                                        </li>
                                                        <li className="menu-item">
                                                            <a href="checkout.html">Checkout</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="fightclub-clear-block"></div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* <!-- endmain menu --> */}
                        <a href="#" className="fightclub-navbar-search"><i className="fas fa-search"></i></a>

                    </nav> {/* <!-- end .fightclub-nav-collapse.collapse --> */}
                </div> {/* <!-- end .fightclub-navbar-inner --> */}
            </div> {/* <!-- end .fightclub-navbar --> */}
        </div> {/* <!-- end .fightclub-navbar-wrap --> */}
    </header>
  );
}

export default Header;
