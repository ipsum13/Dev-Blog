import React, { useState, useEffect } from "react";

import Header from "../header/header";
import Footer from "../footer/footer";
import HeadMetaData from "../../headMetaData";
import getAllBlogPosts from "../../api/getAllBlogPosts";
import moment from "moment"
import "./blogList.css";

export default function BlogList () {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    getInitialProps();
  }, []);
  async function getInitialProps() {
    const apiResult = await getAllBlogPosts();
    if (apiResult && apiResult.posts) {
      setPosts(apiResult);
    }
  }
    return (
      <div className="layout-wrapper">
        <HeadMetaData
          title="Blog Posts | Coding Blog"
          metaDescription="List of all blog posts published on the Samiul Lesum coding blog."
        />
        <Header />
        <div className="blog-posts-container">
          <h1>Blog posts</h1>
          <div className="blog-posts-list">
          
              {posts && posts.length > 0 ? (posts.map((post, index) => {
                return (
                  <a key={index} href={`/blog/${post.urlTitle}`}>
                    <div className="blog-posts-list-item">
                      <div className="blog-posts-thumbnail">
                        <img src={post.thumbnailImageUrl} />
                      </div>
                      <div className="blog-posts-list-item-title-and-date">
                        <h2>{post.title}</h2>
                        <div className="blog-posts-list-item-date">
                          <span>{moment.unix(post.dateTimestamp).format("MMMM Do, YYYY")}</span>
                        </div>
                      </div>
                    </div>
                  </a>)
              })) : null}
                
              
              
            
          </div>
        </div>
        <Footer />
      </div>
    );
}
