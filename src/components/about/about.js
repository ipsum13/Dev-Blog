import { Component } from "react"

import Header from "../header/header";
import Footer from "../footer/footer";
import HeadMetaData from "../../headMetaData";
import './about.css'

export default class About extends Component {
  render () {
    return (
      <div className="layout-wrapper">
      <HeadMetaData
          title="About Me | Coding Blog"
          metaDescription="Samiul Lesum is a full stack software developer that also writes about modern NodeJS and JavaScript."
        />
        <Header />
        <div className="about-container">
          <div className="about-section">
            <h1>About Me</h1>
            <p>I’m Samiul Lesum, a full stack software developer and technical writer.</p>
            <p>I started this website as a place to document everything I learned while going through a career change. I learn in public and write about everything I know.</p>
          </div>
          <div className="about-section">
            <h2>My Projects</h2>
            <ul>
              <li><a href="/#">Q1 Trivia</a> – Fun Trivia game built with React Native deployed in Google Play store</li>
              <li><a href="/#">N-Queens Visualizer</a> – Visualize N-Queens using backtracking algorithms in React</li>
              <li><a href="/#">Sorting Visualizer</a> – Visualize major sorting algorithms in React.</li>
            </ul>
          </div>
          <div className="about-section">
            <h2>Currently Using</h2>
            <ul>
              <li><strong>Computer</strong>: Custom Linux Desktop</li>
              <li><strong>Hosting</strong>: <a href="/#">Firebase</a></li>
              <li><strong>Editor</strong>: <a href="/#">VS Code</a></li>
              <li><strong>Coding Framework</strong>: <a href="https://nextjs.org">Next.js</a></li>
              <li><strong>Syntax Highlighting</strong>: <a href="https://prismjs.com">PrismJS</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}