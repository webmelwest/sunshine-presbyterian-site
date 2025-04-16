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
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
        />
        <meta name="robots" content="max-image-preview:large" />
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
    <header id="header" className="site-header" role="banner">
      <div className="wrap">
        <div className="title-area">
          <div className="site-title">
            <button
              onClick={() => window.location.href = "https://sunshinepresbyterian.com.au"}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <img alt="Sunshine Presbyterian Church Logo" src={SunshineChurchLogo} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Navigation() {
  return (
    <nav id="navigation" className="nav-primary" role="navigation">
      <div className="wrap">
        <button id="menu-icon" className="menu-icon" type="button">
          <span></span>
        </button>
        <ul className="nav-menu">
          <li className="nav-item active">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/worship">Worship</a>
          </li>
          <li className="nav-item">
            <a href="/about">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Contact</a>
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
        <img className="header-image" src={MainImage} alt="Main banner" />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <main className="content" id="content">
      <article className="article">
        <div className="article-wrap">
          <header className="article-header">
            <h1 className="article-title">Welcome to Sunshine Presbyterian Church</h1>
          </header>
          <div className="article-content">
            <p>
              <b>Welcome!</b> Sunshine Presbyterian Church is a Gospel-Centred Reformed Presbyterian church that is part of the{' '}
              <span>
                <a href="http://pcv.org.au/">Presbyterian Church of Victoria</a>
              </span>
              (PCV). As a linked congregation with the{' '}
              <a href="http://melwest.org/">Melbourne West Korean Church</a>, we are a community of Christ-followers who embrace the truth, beauty, and power of the Gospel.
            </p>
            <p>
              <strong>Our aim</strong> is to bring people to Jesus and membership of His family. We nurture them to Christ-like maturity and equip them for ministry, all to magnify God’s name.
            </p>
            <p>
              <strong>We stand</strong> in the heritage of the Reformation; walking in God’s truth and living empowered by the Holy Spirit.
            </p>
            <p>Visit us at 120 Anderson Road, Sunshine. Our main Sunday service is at 10am.</p>
            <h2 style={{ textAlign: 'center' }}>
              <strong>The Lord’s Day Worship Service at 10 am</strong>
            </h2>
            <h2 style={{ textAlign: 'center' }}>
              <strong>
                <a href="https://www.youtube.com/channel/UCILWFoghAwuSfcyAPQPntBQ/live">
                  Live Stream Worship
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
    <aside id="sidebar" className="sidebar">
      <section className="widget">
        <div className="widget-wrap">
          <h4 className="widget-title">Worship Time and Location</h4>
          <div className="textwidget">
            <ul>
              <li>Sunday Service 10am</li>
              <li>120 Anderson Road, Sunshine, VIC 3020</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="widget">
        <div className="widget-wrap">
          <h4 className="widget-title">Online Giving</h4>
          <div className="textwidget">
            <ul className="giving-info">
              <li>
                <p>BSB: 033-085 Account Number: 880297</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </aside>
  );
}

function Footer() {
  return (
    <footer id="footer" className="site-footer" role="contentinfo">
      <div className="wrap">
        <div className="footer-content">
          <p className="copyright">Copyright © 2025 Sunshine Presbyterian Church.</p>
          <p className="credit">
            Custom Designed by Sunshine Presbyterian Church
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;