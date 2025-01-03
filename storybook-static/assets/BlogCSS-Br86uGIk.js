/* empty css                */const t=()=>`
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
          <!-- BlogPost Header END (uneditable) -->`,i=()=>`
<!-- BlogPost CSS START (uneditable) -->
<style>
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

  :root {
    --qf-greyGreen: #2e644a;
    --qf-green: #006400;
    --pf-orange: #ff8c00;
  }

  .blogArticle h2#BlogHeaderTitle,
  .blogArticle h2,
  .blogArticle h3,
  .blogArticle p,
  .blogArticle .byLine,
  .blogArticle figcaption {
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "wdth" 100;
  }
  .blogArticle h2#BlogHeaderTitle,
  .blogArticle h2,
  .blogArticle h3 {
    text-transform: uppercase;
  }
  .blogArticle h2#BlogHeaderTitle {
    font-size: 28px;
    font-weight: 800;
    color: #444;
  }
  .blogArticle h2 {
    font-size: 24px;
    font-weight: 800;
  }
  .blogArticle h3 {
    font-size: 20px;
    font-weight: 800;
    margin-top: 40px;
  }
  .blogArticle h4 {
    font-size: 18px;
    font-weight: 800;
    margin-top: 20px;
    text-transform: none;
  }
  .blogArticle p,
  .blogArticle li {
    font-family: "Open Sans", helvetica, arial, sans-serif;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.7;
    margin-bottom: 22px;
  }
  .blogArticle p {
    text-align: justify;
  }
  .blogArticle li {
    text-align: unset;
  }
  .blogArticle .byLine {
    font-size: 16px;
    font-weight: 400;
  }
  .blogArticle figcaption {
    font-style: italic;
    text-align: right;
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.4px;
  }
  .blogArticle-bd .originallyAppearedIn {
    font-weight: bold;
    font-style: italic;
    border-style: solid;
    border-color: var(--qf-green);
    border-width: 1px;
    padding: 1em;
    font-size: 15px;
    text-align: center;
  }
  .blogArticle h3.quote {
    color: var(--qf-green);
    font-family: "Baskervillle";
    text-align: center;
    font-size: 32px;
    padding-top: 1rem;
    padding-bottom: 1.6rem;
    text-transform: unset;
    max-width: 680px;
    font-style: italic;
  }
  .blogArticle-bd .dotSeparator {
    /* background-image: url("/getattachment/09fc3844-5235-4861-8019-d03e7eb32b47/pheasants-•••-divider.png.aspx"); */
    background-image: url("../src/imgs/divider-threeDots.png");
    height: 24px;
    width: 54px;
    margin-bottom: 22px;
  }
  .blogArticle-bd .featherSeparator {
    /* background-image: url("/getattachment/09fc3844-5235-4861-8019-d03e7eb32b47/pheasants-•••-divider.png.aspx"); */
    background-image: url("../src/imgs/divider-feather.png");
    height: 56px;
    width: 87px;
    margin-bottom: 22px;
  }
  .blogArticle-bd .birdFooter {
    /* background-image: url("/getattachment/01ffc584-10c6-4892-96ed-67a9edf7a695/2-quail-footer.png.aspx"); */
    background-image: url("../src/imgs/footer-twoQuail.png");
    height: 73px;
    width: 87px;
    margin-bottom: 22px;
  }
  .blogArticle-bd .pheasantFooter {
    /* background-image: url("/getattachment/2736e118-ebcb-44f2-912e-e62f1741998f/3-bird-footer.png.aspx"); */
    background-image: url("../src/imgs/footer-threePheasants.png");
    height: 75px;
    width: 150px;
    margin-bottom: 22px;
  }
  .blogArticle-bd img,
  .blogArticle-hd img {
    border-radius: 4px;
  }
  .blogArticle-bd .inlineImgShell {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  hr.BlogHeaderLine {
    border-top: 1px solid #c9c4c3;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  #BlogHeaderCategory {
    font-family: "Oswald";
    text-transform: uppercase;
    font-size: 15px;
  }
  #BlogHeaderDate {
    font-family: "Open Sans", sans-serif;
    font-style: italic;
    color: #646464;
    font-size: 14px;
  }
  .blogArticle ul li {
    list-style-type: "» ";
  }
  .blogArticle ul li::marker,
  .blogArticle ol li::marker {
    padding-inline-start: 1ch;
    color: var(--pf-orange);
    margin-right: 0.5rem;
    padding-right: 0.5rem;
    text-transform: uppercase;
  }
  .blogArticle ul li::marker {
    font-size: 19px;
  }
  .blogArticle ol li::marker {
    font-size: 17px;
    font-weight: 700;
  }
  span.ListNum {
    color: var(--qf-green);
    font-size: 17px;
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }
  ul.BlogListText {
    padding-left: 1.5em;
    text-indent: unset;
    margin-left: 1.5em;
    margin-bottom: 22px;
  }
  ol.BlogListText {
    padding-left: 1.5em;
    text-indent: -1.5em;
    margin-left: 1.5em;
    margin-bottom: 22px;
  }
  ul.BlogListText p,
  ol.BlogListText p {
    margin-bottom: 0px;
    font-size: 16px;
  }
  @media only screen and (max-width: 900px) {
    .blogArticle h3.quote {
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media only screen and (max-width: 759px) {
    .blogArticle h2#BlogHeaderTitle {
      font-size: 26px;
    }
    .blogArticle h2 {
      font-size: 22px;
    }
    .blogArticle h3 {
      font-size: 20px;
    }
    .blogArticle p {
      font-size: 15px;
    }
    .blogArticle .byLine {
      font-size: 13px;
    }
    .blogArticle figcaption {
      font-size: 12px;
    }
    .blogArticle-bd .originallyAppearedIn {
      font-size: 13px;
    }
    .blogArticle .quoteContainer {
      margin: auto -15px auto -15px;
    }
    .blogArticle h3.quote {
      font-size: 30px;
    }
    .blogArticle p,
    .blogArticle li {
      font-size: 15px;
      line-height: 1.6;
    }
    #BlogHeaderDate {
      font-size: 14px;
    }
    #BlogHeaderTitle {
      font-size: 22px;
    }
    #BlogHeaderCategory {
      font-size: 15px;
    }
    #BlogBodyText {
      padding: 0 0px;
    }
  }
</style>
<!-- BlogPost CSS END (uneditable) -->`;export{i as a,t as c};
