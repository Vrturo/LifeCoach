import React from 'react';
import './Header';
import './App.css';

function Header() {
  return (
    <header class="masthead">
        <div class="fightclub-search-bar">
            <div class="fightclub-searchform-overlay-inner">
                <div class="fightclub-container-fluid max width cf">
                    <form method="get" id="searchform-navbar" class="form-search" action="http://themes.fxoffice.net/fightclub_wp/">
                        <label for="s">Type and Press &quot;Enter&quot; to Search</label>
                        <input id="s" class="search-query" type="text" name="s" />
                    </form>
                </div>
            </div>
        </div>
        <div class="fightclub-navbar-wrap">
            <div class="fightclub-navbar">
                <div class="fightclub-navbar-inner fightclub-container-fluid max width cf">
                    <h1 class="visually-hidden">FightClub</h1>
                    <div class="fightclub-brand-wrap">
                        <a href="index.html" class="fightclub-brand img" title="FightClub &amp; Fitness Theme">
                            <img src="#" data-src="holder.js/319x35?auto=yes&bg=#f5e49d" alt="FightClub &amp; Fitness Theme" class="main-logo" />
                            <img src="#" data-src="holder.js/35x35?auto=yes&bg=#f5e49d" alt="FightClub &amp; Fitness Theme" class="mobile-logo" />
                            <img src="#" data-src="holder.js/319x35?auto=yes&bg=#f5e49d" alt="FightClub &amp; Fitness Theme" class=" alt-logo" />
                        </a>
                    </div>
                    <a href="#" class="fightclub-btn-navbar collapsed" data-toggle="collapse" data-target=".fightclub-nav-collapse">
                        <i class="fightclub-icon-menu-1"></i>
                        <span class="visually-hidden">Navigation</span>
                    </a>
                    <nav class="fightclub-nav-collapse collapse" role="navigation">

                        {/* <!-- Main menu --> */}
                        <ul id="menu-main-menu" class="fightclub-nav sf-menu">

                            <li class="menu-item current-menu-ancestor current-menu-parent menu-item-has-children ing-dropdown-menu"  >
                                <a href="#">Home <span class="caret"></span></a>
                                <ul class="sub-menu">
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="index.html">Fightclub</a>
                                    </li>
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="home-portfolio.html">Home Portfolio</a>
                                    </li>
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="home-parallax.html">Home Parallax</a>
                                    </li>
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="home-light.html">Home Light</a>
                                    </li>
                                    <li class="menu-item current-menu-item current_page_item ing-dropdown-submenu">
                                        <a href="home-video.html">Home Video</a>
                                    </li>
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="home-grid.html">Home Grid</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="menu-item menu-item-has-children ing-dropdown-menu"  >
                                <a href="#">Pages <span class="caret"></span></a>
                                <ul class="sub-menu">
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="about-us.html">About Us</a>
                                    </li>
                                    <li  class="menu-item ing-dropdown-submenu">
                                        <a href="schedule.html">Schedule</a>
                                    </li>
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="contact-us.html">Contact Us</a>
                                    </li>
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="404.html">404 Page</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="menu-item menu-item-has-children ing-dropdown-menu">
                                <a href="#">Portfolio <span class="caret"></span></a>
                                <ul class="sub-menu">
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="portfolio-fullwidth.html">Portfolio Fullwidth</a>
                                    </li>
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="portfolio-2-columns.html">Portfolio 2 Columns</a>
                                    </li>
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="portfolio-3-columns.html">Portfolio 3 Columns</a>
                                    </li>
                                    <li class="menu-item ing-dropdown-submenu">
                                        <a href="portfolio-4-columns.html">Portfolio 4 Columns</a>
                                    </li>
                                </ul>
                            </li>

                            <li class="menu-item menu-item-has-children ing-dropdown-menu">
                                <a href="#">Blog <span class="caret"></span></a>
                                <ul class="sub-menu">
                                <li class="menu-item menu-item-has-children ing-dropdown-submenu">
                                        <a href="#">Classic</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item">
                                                <a href="classic-blog-right-sidebar.html">Classic Blog Right Sidebar</a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="classic-blog-left-sidebar.html">Classic Blog Left Sidebar</a>
                                            </li>
                                            <li class="menu-item">
                                                <a href="classic-blog-fullwidth.html">Classic Blog Fullwidth</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li  class="menu-item menu-item-has-children ing-dropdown-submenu">
                                        <a href="#">Masonry</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item">
                                                <a href="masonry-2-columns.html">Masonry 2 Columns</a></li>
                                            <li class="menu-item">
                                                <a href="masonry-2-columns-right-sidebar.html">Masonry 2 Columns Right Sidebar</a></li>
                                            <li class="menu-item">
                                                <a href="masonry-2-columns-left-sidebar.html">Masonry 2 Columns Left Sidebar</a></li>
                                            <li class="menu-item">
                                                <a href="masonry-3-columns.html">Masonry 3 Columns</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="menu-item menu-item-has-children ing-megamenu-menu">
                                <a href="#">Shop <span class="caret"></span></a>
                                <ul class='fightclub-megamenu-wrapper fightclub-columns-2 columns-per-row-2 columns-2 col-span-4'>
                                    <li class='row'>
                                        <div class="fightclub-megamenu-holder">
                                            <ul class='fightclub-megamenu '>
                                                <li class="menu-item menu-item-has-children fightclub-megamenu-submenu fightclub-megamenu-columns-2 col-lg-6 col-md-6 col-sm-6">
                                                    <h4 class='fightclub-megamenu-title'>Shop Content</h4>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item">
                                                            <a href="shop-2-columns.html">Shop 2 Columns</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="shop-2-columns-right-filter.html">Shop 2 Columns Right Filter</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="shop-2-columns-left-filter.html">Shop 2 Columns Left Filter</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="shop-3-columns.html">Shop 3 Columns</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item menu-item-has-children fightclub-megamenu-submenu fightclub-megamenu-columns-2 col-lg-6 col-md-6 col-sm-6">
                                                    <h4 class='fightclub-megamenu-title'>Product Pages</h4>
                                                    <ul class="sub-menu">
                                                        <li class="menu-item">
                                                            <a href="standard-product.html">Standard Product</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="sale-product.html">Sale Product</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="variable-product.html">Variable Product</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="cart.html">Cart</a>
                                                        </li>
                                                        <li class="menu-item">
                                                            <a href="checkout.html">Checkout</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="fightclub-clear-block"></div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* <!-- endmain menu --> */}
                        <a href="#" class="fightclub-navbar-search"><i class="fightclub-icon-search"></i></a>

                    </nav> {/* <!-- end .fightclub-nav-collapse.collapse --> */}
                </div> {/* <!-- end .fightclub-navbar-inner --> */}
            </div> {/* <!-- end .fightclub-navbar --> */}
        </div> {/* <!-- end .fightclub-navbar-wrap --> */}
    </header>
  );
}

export default Header;
