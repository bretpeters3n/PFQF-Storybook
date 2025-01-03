"use strict";

// import "./blogPost.css";
import { createBlogHeader } from "./BlogHeader";
import { createBlogBody } from "./BlogBody";
import { createBlogCSS } from "./BlogCSS";

export const createBlogPost = () =>
  `<!-- BlogPost beginning Wrapper START (uneditable) -->
<div id="subpage">
  <div id="addContainer" class="container blog-post-container">
    <div class="row">
      <div class="col-lg-8">
        <div style="max-width: 660px" class="blogArticle">
        <!-- BlogPost beginning Wrapper END (uneditable) -->` +
  `
        ` +
  createBlogHeader() +
  `
        ` +
  createBlogBody() +
  `

        <!-- BlogPost ending Wrapper START (uneditable) -->
        </div>
      </div>
    </div>
  </div>
</div>
<!-- BlogPost ending Wrapper END (uneditable) -->` +
  `
        ` +
  createBlogCSS();
