import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MapIcon from "@mui/icons-material/Map";
import FavoriteIcon from "@mui/icons-material/Favorite";
function Navbar2() {
  return (
    <>
      <header id="header--main" className="header--main no-print  ">
        <div className="sidenav">
          <div className="sidenav--closelang__wrapper">
            <a href="javascript:void(0)" className="closebtn">
              ×
            </a>
            <div className="LanguageSwitcher">
              <div className="current" tabindex="0" role="button">
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/en.svg" alt="English (US)" />
                  <span>English (US)</span>
                </div>
              </div>
              <div className="dropdown">
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/en.svg" alt="English (US)" />
                  <span>English (US)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/en-au.svg" alt="English (AU)" />
                  <span>English (AU)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img
                    src="/assets/svg/flags/pt-br.svg"
                    alt="Portuguese (BR)"
                  />
                  <span>Portuguese (BR)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/en-ca.svg" alt="English (CA)" />
                  <span>English (CA)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/de.svg" alt="German (DE)" />
                  <span>German (DE)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/fr.svg" alt="French (FR)" />
                  <span>French (FR)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/en-in.svg" alt="English (IN)" />
                  <span>English (IN)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/it.svg" alt="Italian (IT)" />
                  <span>Italian (IT)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/es-mx.svg" alt="Spanish (MX)" />
                  <span>Spanish (MX)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/en-gb.svg" alt="English (UK)" />
                  <span>English (UK)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/zh-hans.svg" alt="Chinese (CN)" />
                  <span>Chinese (CN)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/ja.svg" alt="Japanese (JP)" />
                  <span>Japanese (JP)</span>
                </div>
                <div className="option" role="button" tabindex="0">
                  <img src="/assets/svg/flags/ko.svg" alt="Korean (KR)" />
                  <span>Korean (KR)</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a className="nav--links__main" href="/places-to-visit/">
              Places to Visit
            </a>
          </div>
          <div>
            <a className="nav--links__main" href="/things-to-do/">
              Things To Do
            </a>
          </div>
          <div>
            <a className="nav--links__main" href="/now/">
              Blog
            </a>
          </div>
          <div>
            <a className="nav--links__main" href="/road-trips/">
              Road Trips
            </a>
          </div>
          <div>
            <a className="nav--links__main" href="/locals/">
              Local Tips
            </a>
          </div>
          <div>
            <a className="nav--links__main" href="/native/">
              Visit Native California
            </a>
          </div>
          <hr className="side--panel__divider" />
          <div>
            <a className="nav--links__subnav" href="/travel-videos/">
              Travel Videos
            </a>
          </div>
          <div>
            <a className="nav--links__subnav" href="/travel-guides/">
              Travel Guides
            </a>
          </div>
          <div>
            <a className="nav--links__subnav" href="/newsletters/">
              Newsletter
            </a>
          </div>
          <div>
            <a className="nav--links__subnav" href="/podcasts/">
              Podcast
            </a>
          </div>
          <div>
            <a className="nav--links__subnav" href="/welcome-centers/">
              Welcome Centers
            </a>
          </div>
          <hr className="side--panel__divider" />
          <div>
            <div>
              <a className="nav--links__lastnav" href="/regions/">
                <MapIcon />
                &nbsp;Regional Map
              </a>
              <a className="nav--links__lastnav" href="/likes/">
                <FavoriteIcon />
                &nbsp;Bookmarks
              </a>
              <button type="button" tabindex="0" className="auth-button">
                <AccountCircleIcon />
                &nbsp; Login
              </button>
            </div>
          </div>
        </div>
        <div id="search-header" className="search--header">
          <div className="search--header__wrapper">
            <a
              aria-current="page"
              className="headerMain__nav--inner__logo"
              href="/"
              style={{ paddingTop: "12px", outline: "none" }}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                className=""
                title=""
              >
                <use xlink:href="/assets/logo/logos.svg#logo-white"></use>
              </svg> */}
            </a>
            <div className="search--header__container">
              <div id="a-searchBar--focus-holder">
                <div
                  id="a-searchBar-header--main"
                  className="a-searchBar --blueGradient "
                >
                  <input
                    id="search-bar-input"
                    type="text"
                    name="header--main"
                    placeholder="Search..."
                    aria-label="header--main"
                  />
                  <div className="searchbar--search__icon">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      className="a-icon a-icon--small "
                      aria-label="L"
                      style="fill: rgb(255, 255, 255);"
                    >
                      <use xlink:href="/assets/svg/sprite.svg#ico-search"></use>
                    </svg> */}
                  </div>
                </div>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              className="closebtn"
              style={{ display: "block" }}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                className="a-icon a-icon--xsmall "
                aria-label="L"
              >
                <use xlink:href="/assets/svg/sprite.svg#ico-search-header-cross"></use>
              </svg> */}
            </a>
          </div>
        </div>
        <div className="searchBar__searchResultsContainerOuter">
          <div
            id="searchBar__searchResultsContainerInner"
            className=""
            style={{ marginBottom: "5425px" }}
          >
            <div className="p-search__container">
              <div className="p-search__default">
                <div>
                  <p>
                    <strong style={{ paddingLeft: "10px" }}>
                      EXPLORE CALIFORNIA
                    </strong>
                  </p>
                  <a href="/near-me/">
                    <div className="nearme__button-wrapper">
                      <div className="nearme__left-icon"></div>
                      <span className="nearme__button-text">Near me</span>
                      <div className="nearme__right-icon">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          className="a-icon a-icon--xsmall "
                          aria-label="L"
                        >
                          <use xlink:href="/assets/svg/sprite.svg#ico-arrow-right"></use>
                        </svg> */}
                      </div>
                    </div>
                  </a>
                  <div className="p-search__default--suggestedblock">
                    <strong
                      className="p-search-default__suggestedblock--header"
                      style={{ paddingLeft: "10px" }}
                    >
                      SUGGESTED
                    </strong>
                    <div className="p-search__result">
                      <a href="/things-to-do/theme-parks/">Theme Parks</a>
                    </div>
                    <div className="p-search__result">
                      <a href="/things-to-do/beaches/">Beaches</a>
                    </div>
                    <div className="p-search__result">
                      <a href="/things-to-do/national-parks/">National Parks</a>
                    </div>
                    <div className="p-search__result">
                      <a href="/things-to-do/food-drink/">Food and Drink</a>
                    </div>
                    <div className="p-search__result">
                      <a href="/things-to-do/arts-culture/">Arts and Culture</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header--main__nav">
          <div className="header--main__nav--inner">
            <a
              aria-current="page"
              className="header--main__nav--inner__logo"
              href="/"
            >
              <b style={{ fontSize: "40px", color: "black" }}>OTV</b>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                className=""
                title="Visit California"
              >
                <use xlink:href="/assets/logo/logos.svg#logo-color"></use>
              </svg> */}
            </a>
            <div className="header--main__nav--inner__link">
              <a href="/places-to-visit/">Places to Visit</a>
            </div>
            <div className="header--main__nav--inner__link">
              <a href="/things-to-do/">Things To Do</a>
            </div>
            <div className="header--main__nav--inner__link">
              <a href="/road-trips/">Road Trips</a>
            </div>
            <div className="header--main__nav--inner__link">
              <div className="header--main__nav--inner__link">
                <button className="more-button">
                  More
                  <MenuIcon />
                </button>
              </div>
            </div>
            <div
              id="search--navicon__wrapper"
              className="search--navicon__wrapper"
              style={{ cursor: "pointer" }}
            >
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="header--main__more" tabindex="-1">
          <div className="header--main__more--inner">
            <div className="header--main__more--inner--intro">
              <span>More</span>
            </div>
            <div className="header--main__more--inner__link">
              <a aria-current="page" className="" href="/">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="a-icon a-icon--xsmall "
                  aria-label="L"
                  style="fill: rgb(81, 182, 210);"
                >
                  <use xlink:href="/assets/svg/sprite.svg#ico-travel-video"></use>
                </svg> */}
                Travel Videos
              </a>
            </div>
            <div className="header--main__more--inner__link">
              <a aria-current="page" className="" href="/">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="a-icon a-icon--xsmall "
                  aria-label="L"
                  style="fill: rgb(81, 182, 210);"
                >
                  <use xlink:href="/assets/svg/sprite.svg#ico-travel-guide"></use>
                </svg> */}
                Travel Guides
              </a>
            </div>
            <div className="header--main__more--inner__link">
              <a aria-current="page" className="" href="/">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="a-icon a-icon--xsmall "
                  aria-label="L"
                  style="fill: rgb(81, 182, 210);"
                >
                  <use xlink:href="/assets/svg/sprite.svg#ico-newsletter"></use>
                </svg> */}
                Newsletter
              </a>
            </div>
            <div className="header--main__more--inner__link">
              <a aria-current="page" className="" href="/">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="a-icon a-icon--xsmall "
                  aria-label="L"
                  style="fill: rgb(81, 182, 210);"
                >
                  <use xlink:href="/assets/svg/sprite.svg#ico-podcast"></use>
                </svg> */}
                Podcast
              </a>
            </div>
            <div className="header--main__more--inner__link">
              <a aria-current="page" className="" href="/">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="a-icon a-icon--xsmall "
                  aria-label="L"
                  style="fill: rgb(81, 182, 210);"
                >
                  <use xlink:href="/assets/svg/sprite.svg#ico-welcome-center"></use>
                </svg> */}
                Welcome Centers
              </a>
            </div>
          </div>
        </div>
        <div className="header--main__extra">
          <a href="/regions/">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="a-icon a-icon--xxsmall "
              aria-label="L"
              style="fill: rgb(255, 255, 255);"
            >
              <use xlink:href="/assets/svg/sprite.svg#ico-map-pin"></use>
            </svg> */}
            Regional Map
          </a>
          <a href="/likes/">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="a-icon a-icon--xxsmall "
              aria-label="L"
              style="fill: rgb(255, 255, 255);"
            >
              <use xlink:href="/assets/svg/sprite.svg#ico-heart"></use>
            </svg> */}
            Bookmarks
          </a>
          <a target="_blank">Login</a>
        </div>
        <div className="header-border"></div>
        <div className="m-travelAlert ">
          <div>
            <a href="/travel-alerts/">
              <div className="linkedMessageContainer">
                <div>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="a-icon a-icon--xxsmall " aria-label="L" style="fill: rgb(3, 15, 9);">
                        <use xlink:href="/assets/svg/sprite.svg#ico-alert"></use>
                    </svg> */}
                </div>
                <div>
                  <p>Travel Alerts</p>
                </div>
                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="a-icon a-icon--xxxsmall " aria-label="L" style="fill: rgb(255, 255, 255);">
                        <use xlink:href="/assets/svg/sprite.svg#ico-caret-right"></use>
                    </svg> */}
              </div>
            </a>
          </div>
          <button type="button">
            <span>Close</span>
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="a-icon a-icon--xxsmall " aria-label="L" style="fill: rgb(255, 255, 255);">
                        <use xlink:href="/assets/svg/sprite.svg#ico-close"></use>
                    </svg> */}
          </button>
        </div>
      </header>
      <div className="mobileWrapper">
        <div className="mobileSearch  ">
          <div className="mobileSearch__menu">
            <MenuIcon />
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="a-icon a-icon--xsmall " aria-label="L" style="fill: rgb(11, 126, 157);">
                <use xlink:href="/assets/svg/sprite.svg#ico-hamburger"></use>
            </svg> */}
          </div>
          <div id="logoWithSearch" className="mobileSearch__logoWithSearch">
            <a aria-current="page" className="font-bold text-3xl" href="/">
                OTV
            </a>
          </div>
          <div
            className="mobileSearch__searchCTA"
            aria-label="open search"
            tabindex="0"
          >
            <SearchIcon className="a-icon a-icon--xsmall "/>
            <SearchIcon className="a-icon a-icon--xsmall "/>
            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" className="a-icon a-icon--xsmall " aria-label="L" style="fill: rgb(11, 126, 157);">
      <use xlink:href="/assets/svg/sprite.svg#ico-search"></use>
      </svg> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="a-icon a-icon--xsmall "
              aria-label="L"
              style="fill: rgb(11, 126, 157);"
            >
              <use xlink:href="/assets/svg/sprite.svg#ico-search"></use>
            </svg> */}
          </div>
        </div>
        <div className="m-travelAlert ">
          <div>
            <a href="/travel-alerts/">
              <div className="linkedMessageContainer">
                <div>
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    className="a-icon a-icon--xxsmall "
                    aria-label="L"
                    style="fill: rgb(3, 15, 9);"
                  >
                    <use xlink:href="/assets/svg/sprite.svg#ico-alert"></use>
                  </svg> */}
                </div>
                <div>
                  <p>Travel Alerts</p>
                </div>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="a-icon a-icon--xxxsmall "
                  aria-label="L"
                  style="fill: rgb(255, 255, 255);"
                >
                  <use xlink:href="/assets/svg/sprite.svg#ico-caret-right"></use>
                </svg> */}
              </div>
            </a>
          </div>
          <button type="button">
            <span>Close</span>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              className="a-icon a-icon--xxsmall "
              aria-label="L"
              style="fill: rgb(255, 255, 255);"
            >
              <use xlink:href="/assets/svg/sprite.svg#ico-close"></use>
            </svg> */}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar2;
