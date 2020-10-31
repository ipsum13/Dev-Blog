import React, { useEffect, useState } from "react";
import BlogList from "../blogList/blogList";
import getFivePosts from "../../api/getFivePosts";
import "./home.css";

export default function Home() {
  
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getInitialProps();
  }, []);
  async function getInitialProps() {
    const apiResult = await getFivePosts();
    if (apiResult && apiResult.posts) {
      setPosts(apiResult);
    }
  }

  return (
    <div className="homepage-container">
      <div className="homepage-introduction">
        <h1>Hi, I'm Samiul Lesum. I help people learn software development.</h1>
        <p>
          I'm a full stack software developer that writes about modern Node.js,
          JavaScript, and development.
        </p>
      </div>
      <div className="homepage-latest-blog-posts">
        <h2>
          Latest Blog Posts
          <a className="homepage-latest-blog-posts-view-all" href="/blog">
            View all
          </a>
        </h2>
        <div className="homepage-latest-blog-posts-list">
          {posts && posts.length > 0
            ? posts.map((post, index) => {
                return (
                  <a key={index} href={`/blog/${post.urlTitle}`}>
                    <div className="homepage-latest-blog-post">
                      <div className="homepage-latest-thumbnail">
                        <img src={post.thumbnailImageUrl} />
                      </div>
                      <div className="homepage-latest-blog-post-title">
                        <h3>{post.title}</h3>
                      </div>
                    </div>
                  </a>
                );
              })
            : null}
        </div>
      </div>
      <div className="homepage-projects">
        <h2>My Projects</h2>
        <div className="homepage-projects-list">
          <div className="homepage-project">
            <h3>
              <a href="/#">
                <div className="homepage-project-icon">📞</div>
                <div className="homepage-project-title">Q1 Trivia</div>
              </a>
            </h3>
            <p>Fun Trivia game built with React Native deployed in Google Play store.</p>
            <div className="homepage-project-btns">
              <a
                className="homepage-project-view-btn"
                href="/#"
              >
                View
              </a>
            </div>
          </div>
          <div className="homepage-project">
            <h3>
              <a href="/#">
                <div className="homepage-project-icon">⌛</div>
                <div className="homepage-project-title">N-Queens Visualizer</div>
              </a>
            </h3>
            <p>
            Visualize N-Queens using backtracking algorithms in React.
            </p>
            <div className="homepage-project-btns">
              <a
                className="homepage-project-view-btn"
                href="/#"
              >
                View
              </a>
            </div>
          </div>
          <div className="homepage-project">
            <h3>
              <a href="/#">
                <div className="homepage-project-icon">⌛</div>
                <div className="homepage-project-title">Sorting Visualizer</div>
              </a>
            </h3>
            <p>
            Visualize major sorting algorithms in React.
            </p>
            <div className="homepage-project-btns">
              <a
                className="homepage-project-view-btn"
                href="/#"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
