import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import moment from "moment";

import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";

import Header from "../header/header";
import Footer from "../footer/footer";
import HeadMetaData from "../../headMetaData";

import getBlogPostByUrlTitle from "../../api/getBlogPostByUrlTitle"

import "./styles/blogByTitle.css";
import "./styles/prismjs.css";

export default function BlogByTitle (props) {
  const [post, setPost] = useState([]);
  useEffect(() => {
    Prism.highlightAll();
    getInitialProps();
  }, []);
  async function getInitialProps() {
    const apiResult = await getBlogPostByUrlTitle(props.query.title);
    if (apiResult && apiResult.posts) {
      setPost(apiResult);
    }
  }

    return (
      <div className="layout-wrapper">
      <HeadMetaData
          title={post ? post.seoTitleTag : "Blog Post | Coding Blog"}
          metaDescription={post && post.seoMetaDescription}
        />
        <Header />
        <div className="blog-post-container">
          <div className="blog-post-top-section">
            <h1>{this.props.post.title}</h1>
            <div className="blog-post-top-meta">
              <span>{moment.unix(post.dateTimestamp).format("MMMM Do, YYYY")}</span>
              {
                post.tags.map((tag, index) => {
                  return (
                    <a
                      className="blog-post-top-tag-btn"
                      key={index}
                      href={`/blog/tags/${tag}`}
                    >
                      <span>{tag}</span>
                    </a>
                  )
                })
              }
            </div>
          </div>
          <div dangerouslySetInnerHTML={{__html: post.markdownContent}} className="blog-post-body-content"></div>
        </div>
        <Footer />
      </div>
    );
}
