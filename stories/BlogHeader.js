"use strict";

import "./blogHeader.css";

export const createBlogHeader = () => `
          <!-- BlogPost Header START (uneditable) -->
          <div class="blogArticle-hd">
            <br />
            <span id="BlogHeaderCategory">
              <a href="#" title="Tagged Posts">
                <a class="Hunting & Heritage" href="https://pheasantsforever.org/Blog.aspx?categoryid=366">Hunting & Heritage</a>
              </a>
            </span>
            <span></span>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <span id="BlogHeaderDate">08/28/2024</span>
            <h2 id="BlogHeaderTitle">Eyes in the Sky</h2>
            <hr class="BlogHeaderLine" />
            <img alt="0313c6d1-f837-47ac-9b4f-205e3aa8202d" src="../src/imgs/blogMain-droneInField.jpg"/>
          </div>
          <!-- BlogPost Header END (uneditable) -->`;
