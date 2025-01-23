// src/pages/LandingPage.js
import React from "react";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Crop Monitoring System</h1>
        <nav>
          <a href="#features">Features</a>
          <a href="#cta">Get Started</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Revolutionize Your Farming with Real-Time Monitoring</h2>
        <p>
          Empower your agricultural practices with cutting-edge IoT technology. 
          Monitor soil, temperature, and humidity for optimal crop health.
        </p>
      </section>

      <section id="features" className="features">
        <h3>Key Features</h3>
        <div className="feature-list">
          <div className="feature">
            <h4>Real-Time Data</h4>
            <p>Get live updates on soil moisture, temperature, and humidity.</p>
          </div>
          <div className="feature">
            <h4>Data Visualization</h4>
            <p>Interactive charts and graphs to track crop health trends.</p>
          </div>
          <div className="feature">
            <h4>Precision Farming</h4>
            <p>Optimize resources and maximize yields with actionable insights.</p>
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <h3>Ready to Enhance Your Farm?</h3>
        <p>Explore the dashboard to monitor your crops in real time.</p>
        <a href="/dashboard" className="cta-button">Go to Dashboard</a>
      </section>

      <footer id="contact" className="footer">
        <p>Made By Group 8 of VIT Pune, IT-E Branch</p>
        <p>&copy;Crop Monitoring System</p>
        <p>Group Members:</p>
        <ul>
            <li>Samay Kumar</li>
            <li>Vedant Sanap</li>
            <li>Purva Salunke</li>
            <li>Sanskar Zine</li>
            <li>Sanika Luktuke</li>
            <li>Samyak Lokhande</li>
        </ul>
      </footer>
    </div>
  );
}

export default LandingPage;
