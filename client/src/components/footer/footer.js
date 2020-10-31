import { Component } from "react";
import './footer.css'

export default class Footer extends Component {
  render () {
    return (
      <footer className="footer-wrapper">
        <div className="footer-links">
          <a href="/blog">Blog</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-bottom-msg">
          <p>Handcrafted in the U.S.A. Unless otherwise noted, all code is free to use.</p>
        </div>
      </footer>
    )
  }
}