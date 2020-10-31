import { Component } from "react";
import './header.css'

export default class Header extends Component {
  render () {
    return (
      <header className="header-wrapper">
        <div className="header-container">
          <div className="header-logo">
            <a href="/">
              <span className="header-logo-icon">💾</span>
              <span className="header-logo-text">Samiul Lesum</span>
            </a>
          </div>
          <div className="header-links">
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </header>
    )
  }
}