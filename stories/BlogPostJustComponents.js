"use strict";

// import "./blogPost.css";
import { createBlogHeader } from "./BlogHeader";
import { createBlogBodyJustComponents } from "./BlogBodyJustComponents";
import { createBlogCSS } from "./BlogCSS";

export const createBlogPostJustComponents = () =>
  `<div id="subpage">
  <div id="addContainer" class="container blog-post-container">
    <div class="row">
      <div class="col-lg-8">
        <div style="max-width: 660px" class="blogArticle">` +
  `
              ` +
  createBlogHeader() +
  `
              ` +
  createBlogBodyJustComponents() +
  `
  
        </div>
      </div>
    </div>
  </div>
</div>` +
  `
        ` +
  createBlogCSS();
