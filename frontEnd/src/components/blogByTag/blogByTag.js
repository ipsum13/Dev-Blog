import React, { useState, useEffect } from "react";
import moment from "moment"
import "../blogList/blogList.css";

import Header from "../header/header";
import Footer from "../footer/footer";
import HeadMetaData from "../../headMetaData";
import getBlogPostsByTag from "../../api/getBlogPostsByTag";

export default function BlogByTag(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getInitialProps();
  }, []);
  async function getInitialProps() {
    const apiResult = await getBlogPostsByTag(props.query.tag);
    if (apiResult && apiResult.posts) {
      setPosts(apiResult);
    }
  }
  return (
    <div className="layout-wrapper">
      <HeadMetaData
        title={`Blog posts tagged as "${props.query.tag}" | Coding Blog`}
        metaDescription={`All blog posts tagged as "${props.query.tag}".`}
      />
      <Header />
      <div className="blog-posts-container">
        <h1>
          Blog posts tagged as <u>{props.query.tag}</u>
        </h1>
        <div className="blog-posts-list">
          {posts && posts.length > 0
            ? posts.map((post, index) => {
                return (
                  <a key={index} href={`/blog/${post.urlTitle}`}>
                    <div className="blog-posts-list-item">
                      <div className="blog-posts-thumbnail">
                        <img src={post.thumbnailImageUrl} />
                      </div>
                      <div className="blog-posts-list-item-title-and-date">
                        <h2>{post.title}</h2>
                        <div className="blog-posts-list-item-date">
                          <span>
                            {moment
                              .unix(post.dateTimestamp)
                              .format("MMMM Do, YYYY")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })
            : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}
