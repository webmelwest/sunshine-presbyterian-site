import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css'; // Import your styles if needed

// Import the new images
import MainImage from './img/MainImage.png';
import SunshineChurchLogo from './img/SunshineChurchLogo.png';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Sunshine Presbyterian Church</title>
        <meta name="viewport" content="width=device-width" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
        />
        <meta name="robots" content="max-image-preview:large" />
        {/* Add additional meta tags, links and scripts as needed */}
      </Helmet>
      <div className="site-container">
        <Header />
        <Navigation />
        <Banner />
        <div className="site-inner">
          <div className="wrap">
            <MainContent />
            <Sidebar />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <header
      id="header"
      className="site-header"
      role="banner"
      itemScope
      itemType="http://schema.org/WPHeader"
    >
      <div className="wrap">
        <div className="title-area">
          <div itemScope itemType="http://schema.org/Organization" className="site-title">
            <a itemProp="url" href="https://sunshinepresbyterian.com.au">
              <img alt="Sunshine Presbyterian Church Logo" src={SunshineChurchLogo} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <nav
      id="navigation"
      className="nav-primary"
      role="navigation"
      itemScope
      itemType="http://schema.org/SiteNavigationElement"
    >
      <div className="wrap">
        {/* Replace the anchor with a button for accessibility */}
        <button id="menu-icon" className="menu-icon" type="button">
          <span></span>
        </button>
        <ul id="menu-default" className="menu omega-nav-menu menu-primary">
          <li
            id="menu-item-73"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7 current_page_item first menu-item-73"
          >
            <a href="https://sunshinepresbyterian.com.au/" aria-current="page">
              Home
            </a>
          </li>
          <li
            id="menu-item-116"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-116"
          >
            <a href="https://sunshinepresbyterian.com.au/?page_id=110">WORSHIP</a>
          </li>
          <li
            id="menu-item-67"
            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-67"
          >
            <a href="https://sunshinepresbyterian.com.au/?page_id=65">ABOUT</a>
          </li>
          <li
            id="menu-item-25"
            className="menu-item menu-item-type-post_type menu-item-object-page last menu-item-25"
          >
            <a href="https://sunshinepresbyterian.com.au/?page_id=6">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Banner() {
  return (
    <div className="banner">
      <div className="wrap">
        <img
          className="header-image"
          src={MainImage}
          alt="Main banner"
        />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <main className="content" id="content" role="main" itemProp="mainContentOfPage">
      <article
        id="post-7"
        className="entry page publish author-samuelson post-7"
        itemScope
        itemType="http://schema.org/CreativeWork"
      >
        <div className="entry-wrap">
          <header className="entry-header">
            <h1 className="entry-title" itemProp="headline">
              Welcome to Sunshine Presbyterian Church
            </h1>
          </header>
          <div className="entry-content" itemProp="text">
            <p className="p1">
              <b>Welcome!</b> Sunshine Presbyterian Church is a Gospel-Centred Reformed Presbyterian church that is part of the{" "}
              <span className="s1">
                <a href="http://pcv.org.au/">
                  <span className="s2">Presbyterian Church of Victoria </span>
                </a>
              </span>
              (PCV). As a linked congregation with the{" "}
              <a href="http://melwest.org/">Melbourne West Korean Church</a>, we are a community of Christ-followers who embrace the truth, beauty, and power of the Gospel to change our lives.
            </p>
            <p>
              <strong>Our aim</strong> is to bring people to Jesus and to membership of His family. We want to nurture them to Christ-like maturity and equip them for their ministry in the church, in order to magnify God’s name.
            </p>
            <p>
              <strong>We stand</strong> in the heritage of the Reformation; walking in God’s truth and living in the Holy Spirit’s power.
            </p>
            <p>We are located at 120 Anderson Road, Sunshine. Our main Sunday service is at 10am.</p>
            <h2 style={{ textAlign: 'center' }}>
              <strong>The Lord’s Day Worship Service at 10 am</strong>
            </h2>
            <h2 style={{ textAlign: 'center' }}>
              <strong>
                <a href="https://www.youtube.com/channel/UCILWFoghAwuSfcyAPQPntBQ/live">
                  Live Stream Worship Link
                </a>
              </strong>
            </h2>
          </div>
        </div>
      </article>
    </main>
  );
}

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar sidebar-primary widget-area" itemScope itemType="http://schema.org/WPSideBar">
      <section id="text-2" className="widget widget-1 even widget-first widget_text">
        <div className="widget-wrap">
          <h4 className="widget-title">Worship Time and Location</h4>
          <div className="textwidget">
            <ul>
              <li>Sunday Service 10am</li>
              <li>120 Anderson Road Sunshine Victoria 3020</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="text-3" className="widget widget-2 odd widget_text">
        <div className="widget-wrap">
          <h4 className="widget-title">Online Giving</h4>
          <div className="textwidget">
            <ul className="xoxo blogroll">
              <li>
                <p className="p1">BSB: 033-085 Account Number: 880297</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="block-2" className="widget widget-3 even widget-last widget_block widget_text">
        <div className="widget-wrap">
          <p></p>
        </div>
      </section>
    </aside>
  );
}

function Footer() {
  return (
    <footer
      id="footer"
      className="site-footer"
      role="contentinfo"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <div className="wrap">
        <div className="footer-content footer-insert">
          <p className="copyright">Copyright © 2025 Sunshine Presbyterian Church.</p>
          <p className="credit">
            <a
              className="child-link"
              href="https://themehall.com/free-responsive-church-theme-wordpress"
              title="Church WordPress Theme"
            >
              Church
            </a>{" "}
            WordPress Theme by themehall.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;