import { Component } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import HeadMetaData from "../../headMetaData";
import "./contact.css"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
      <HeadMetaData
          title="Contact | Coding Blog"
          metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
        />
        <Header />
        <div className="contact-container">
          <div className="contact-section">
            <h1>Contact</h1>
            <p>Hi, I’m Samiul Lesum, a full stack software engineer based out of Seattle. I write about modern JavaScript and build coding courses that show people how to build real world applications.</p>
            <p>If you have any comments, ideas, critiques, or you just want to say hi, don’t hesitate to send me an email at samiul.lesum@outlook.com!</p>
          </div>
          <div className="contact-section">
            <h2>Around the Web</h2>
            <ul>
              <li><strong>Email</strong>: samiul.lesum@outlook.com</li>
              <li><strong>GitHub</strong>: <a href="https://github.com/ipsum13">Samiul Lesum</a></li>
              <li><strong>Twitter</strong>: <a href="https://twitter.com">My Twitter Page</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}