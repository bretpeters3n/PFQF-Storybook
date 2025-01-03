/* empty css                */const t=()=>`
<!-- LandingPage CSS START (uneditable) -->
<style>
/* YES newWebStyles START */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");

:root {
  --qf-greyGreen: #2e644a;
  --qf-green: #006400;
  --pf-orange: #ff8c00;
}
/* YES newWebStyles END */

/* NOT newWebStyles START */
.btnReadMore:after {
  font-size: 14px;
}
.responsive-image .desktop {
  display: none;
}
.responsive-image .mobile {
  display: block;
}
@media (min-width: 650px) {
  .responsive-image .desktop {
    display: block;
  }
  .responsive-image .mobile {
    display: none;
  }
}

#OnlineAuction {
  background-color: #2e644a;
  color: white;
  text-align: center;
  padding: 13px 0 13px 0;
}

#OnlineAuction a {
  color: white;
  text-decoration: none;
  font-family: "Oswald";
  text-transform: uppercase;
  font-size: 18px;
  text-shadow: 2px 1px 2px black;
}

#OnlineAuction a:hover {
  text-shadow: 4px 1px 4px black;
}

@media only screen and (max-width: 759px) {
  #OnlineAuction {
    padding: 15px 10px;
  }
  #OnlineAuction a {
    font-size: 16px;
  }
  .primarySearch {
    width: 50%;
  }
}

#BAWA-main p {
  text-align: justify;
  font-size: 16px;
}

#btnReadMore:after {
  font-size: 14px;
}
span.ListNum {
  color: #ff8c00;
  font-size: 17px;
  font-family: "Oswald", sans-serif;
  font-weight: 700;
  text-transform: uppercase;
}
div.BlogListText {
  padding-left: 1.5em;
  text-indent: -1.5em;
  margin-left: 1.5em;
  margin-bottom: 22px;
}
div.BlogListText p {
  margin-bottom: 0px;
  font-size: 16px;
}
@media only screen and (max-device-width: 759px) {
  p.OFFset {
    top: -110px;
  }
}
p.OFFset {
  display: block;
  position: relative;
  visibility: hidden;
  margin-bottom: 0px;
  line-height: 0.1;
}
.CSS1Compat h2 {
  font-size: 22px;
  font-size: 22px;
}
@media screen and (max-width: 559px) {
  .CSS1Compat ul {
    padding-left: 0px;
  }
}

#top-banner {
  min-height: 500px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-position-x: center;
  background-position-y: 30%;
  /* background-image: url("https://quailforever.org/getattachment/c0eaa50f-2e27-4c4a-93b1-8c1b71c9a1b2/banner-(1).jpg.aspx"); */
  background-image: url("../src/imgs/PF 2000x900.jpg");
  background-color: #f7f7f7;
  text-align: left;
  color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: -40px;
}
#top-banner h1 {
  text-transform: uppercase;
  font-family: "Oswald";
  font-size: 38px;
  padding-bottom: 20px;
  text-shadow: 2px 2px 6px rgb(0 0 0 / 90%);
}
#top-banner-text {
  width: 1260px;
  margin: auto;
}
#top-banner-text a.btnActionText {
  padding: 5px 60px;
}
#PdT {
  display: block;
}
#PmO {
  display: none;
}
.CSS1Compat h3 {
  font-family: "Oswald";
  text-transform: uppercase;
}
.CSS1Compat h3.justBold {
  font-family: sans-serif;
  text-transform: unset;
}
#subpage .CSS1Compat h3.quote {
  color: var(--qf-green);
  font-family: "Baskervillle";
  text-align: center;
  font-size: 32px;
  padding-top: 1rem;
  padding-bottom: 1.6rem;
  /* margin-left: -8vw;
  margin-right: -8vw; */
  /* max-width: 960px; */
  max-width: 680px;
  font-style: italic;
}
/* #subpage .CSS1Compat .quoteContainer {
  margin: auto;
  width: 100vw;
  background-color: #fd7a01;
} */
#subpage .CSS1Compat {
  padding: 0 20px;
}
.btnActionText:after {
  display: none;
}
#middle-banner {
  height: 400px;
  max-width: 1200px;
  display: flex;
  /*justify-content: center;*/
  align-items: center;
  background-position-x: center;
  background-position-y: 38%;
  /* background-image: url("https://quailforever.org/getattachment/c0eaa50f-2e27-4c4a-93b1-8c1b71c9a1b2/banner-(1).jpg.aspx"); */
  background-image: url("../src/imgs/headBanner-2000x900-mountain2.jpg");
  background-color: #f7f7f7;
  text-align: left;
  color: #fff;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 40px;
}
#middle-banner-text {
  width: 100%;
  /* margin: auto; */
  margin: auto 24px auto 24px;
}
#middle-banner h1 {
  text-transform: uppercase;
  font-family: "Oswald";
  font-size: 50px;
  padding-bottom: 10px;
  text-shadow: 2px 2px 6px rgb(0 0 0 / 90%);
  width: 100%;
}

#middle-banner p {
  font-size: 20px;
  line-height: 1.2;
  text-shadow: 2px 2px 6px rgb(0 0 0 / 90%), -2px -2px 6px rgb(0 0 0 / 90%);
}

@media only screen and (max-width: 1260px) {
  #top-banner-text {
    padding: 0 0 0 40px;
  }
}

@media only screen and (max-width: 900px) {
  #subpage .CSS1Compat h3.quote {
    /* display: none; */
    /* color: var(--qf-green);
    font-family: "Baskervillle";
    text-align: center;
    font-size: xx-large;
    padding-top: 1rem;
    padding-bottom: 1.6rem; */
    margin-left: auto;
    margin-right: auto;
    /* max-width: 69.5vw; */
  }
}

@media only screen and (max-width: 759px) {
  #top-banner {
    min-height: 50vh;
    margin-top: -30px;
    /* background-image: url("https://quailforever.org/getattachment/c0eaa50f-2e27-4c4a-93b1-8c1b71c9a1b2/banner-(1).jpg.aspx"); */
    /* background-image: url("./imgs/headBanner-2000x900-mountain1.jpg"); */
    background-position-x: 41%;
  }
  #top-banner-text {
    width: 100%;
    padding: 0 20px;
  }

  #top-banner h1 {
    font-size: 45px;
    max-width: 90%;
  }
  #top-banner-text a.btnActionText {
    padding: 5px 40px;
  }
  #top-banner-text #LB {
    padding: 5px 40px;
    margin: 7px 0;
  }
  #PdT {
    display: none;
  }
  #PmO {
    display: none;
    max-width: 148px;
  }
  #middle-banner {
    margin-top: 30px;
    /* background-image: url("https://quailforever.org/getattachment/c0eaa50f-2e27-4c4a-93b1-8c1b71c9a1b2/banner-(1).jpg.aspx"); */
    /* background-image: url("./imgs/headBanner-2000x900-mountain2.jpg"); */
    background-position-x: 36%;
  }
  #middle-banner-text {
    width: 100%;
    padding: 0 20px;
  }
  #middle-banner h1 {
    font-size: 40px;
  }
  #middle-banner {
    min-height: 20vh;
    max-height: 40vh;
  }
  #middle-banner p {
    font-size: 17.5px;
  }
  #subpage .CSS1Compat .quoteContainer {
    margin: auto -15px auto -15px;
  }
  #subpage .CSS1Compat h3.quote {
    font-size: 30px;
  }
}
/* NOT newWebStyles END */

/* YES newWebStyles START */
#subpage p.OFFset {
  display: none;
}
.CSS1Compat img {
  border-radius: 4px;
}
body {
  background: #fff;
  font-family: "Open Sans", helvetica, arial, sans-serif;
  font-size: 17px;
  color: #212121;
  width: 100%;
  height: auto;
}
#subpage .CSS1Compat p {
  font-family: "Open Sans", helvetica, arial, sans-serif;
  font-size: 17px;
  font-weight: 400;
  text-align: justify;
  line-height: 1.7;
  margin-bottom: 22px;
}
#subpage .CSS1Compat p.caption {
  font-size: 15px;
}
#subpage .CSS1Compat p,
#subpage .CSS1Compat h1,
#subpage .CSS1Compat h2,
#subpage .CSS1Compat h3,
#subpage .CSS1Compat h4,
.fl-card,
#subpage div#ToC,
#subpage .CSS1Compat .imageRow,
#subpage .CSS1Compat .contentRow {
  max-width: 680px;
  margin-left: auto;
  margin-right: auto;
}
#subpage .CSS1Compat h1,
#subpage .CSS1Compat h2,
#subpage .CSS1Compat h3,
#subpage .CSS1Compat h4,
#subpage .CSS1Compat h5,
#subpage .CSS1Compat h6,
#subpage #top-banner h1,
#subpage #middle-banner h1 {
  font-family: "Baskerville", serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  /* color: var(--qf-green); */
}
#subpage .blockquote blockquote p,
#subpage .CSS1Compat .blockquote p {
  text-align: center;
  color: #fd7a01;
}
#subpage .blockquote blockquote p {
  font-family: "Libre Baskerville", serif;
  font-weight: 400;
  font-style: italic;
  font-size: 28px;
}
#subpage #top-banner h1,
#subpage #middle-banner h1,
#subpage #fourth-banner h1 {
  font-weight: 800;
  text-transform: uppercase;
  padding-bottom: 22px;
  text-shadow: 2px 2px 6px rgb(0 0 0 / 90%), -2px -2px 6px rgb(0 0 0 / 90%);
}
#subpage #top-banner h1 {
  font-size: 50px;
}
#subpage #middle-banner h1,
#subpage #fourth-banner h1 {
  font-size: 38px;
}

#subpage a.btnActionText {
  text-decoration: none !important;
}
#subpage .btnActionText {
  font-family: "Open Sans", helvetica, arial, sans-serif;
  /* font-family: "Oswald", sans-serif; */
  font-size: 18px;
  font-weight: 700;
  padding: 5px 12px;
  text-transform: uppercase;
  /* text-transform: unset; */
  display: inline-block;
  color: #fff;
  /* background: #fd7a01; */
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  line-height: 1.5;
}
#subpage #middle-banner .btnActionText {
  filter: drop-shadow(0 0 0.75rem black);
}
#subpage h2 {
  font-family: "Open Sans", helvetica, arial, sans-serif;
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 16px;
}
#subpage h3 {
  font-family: "Open Sans", helvetica, arial, sans-serif;
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
  padding-top: 4px;
  /* text-transform: uppercase; */
}

#subpage #ToC h2 {
  font-family: "Open Sans", helvetica, arial, sans-serif;
  text-align: center;
  font-size: 19px;
  font-weight: 800;
  filter: drop-shadow(0 0 0.75rem black);
}

#ToC .col-6.col-md-4 {
  padding-right: 4px;
  padding-left: 4px;
  margin-bottom: 6px;
  position: relative;
}
#ToC .col-6.col-md-4 img {
  margin-bottom: 0px;
}
#ToC #ToC-Intro {
  display: none;
}
#ToC .inactive img {
  filter: brightness(0.35);
}
#ToC #ch2 img {
  filter: brightness(0.6);
}
#ToC #ch4 img {
  filter: brightness(0.7);
}
#ToC .col-6.col-md-4 h2 {
  margin-bottom: 0px;
  color: white;
  font-weight: 500;
}
#ToC .inactive h2,
#ToC .inactive h3 {
  color: #eae8e8;
}
#ToC .col-6.col-md-4 h3 {
  font-style: italic;
  color: #d3d1d1;
  font-weight: 400;
  font-size: 13px;
  margin-bottom: 0px;
}
#ToC .col-6.col-md-4 a {
  text-decoration: none;
  color: white;
}
#ToC .col-6.col-md-4 a:hover {
  cursor: pointer;
}
#ToC .col-6.col-md-4 a:hover img,
#ToC #ch2 a:hover img,
#ToC #ch4 a:hover img {
  filter: brightness(0.5);
}
#ToC .col-6.col-md-4 .text-content {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  text-align: center;
  width: 75%;
}

#subpage div.BlogListText p {
  margin-bottom: 0px;
  font-size: 16px;
}
#subpage .blockquote {
  padding-top: 16px;
  padding-bottom: 16px;
}
/* #subpage .blockquote p {
  max-width: unset;
} */
#subpage .CSS1Compat {
  /* max-width: 800px; */
  max-width: 1000px;
  margin: 40px auto 60px auto;
}
#subpage .byLine p {
  font-family: "Open Sans", helvetica, arial, sans-serif;
  font-size: 15px;
}
@media only screen and (max-width: 759px) {
  #subpage #top-banner h1 {
    font-size: 38px;
  }
  #subpage .primaryContent .btnActionText {
    font-size: 16px;
  }
  #subpage .primaryContent h2 {
    font-size: 22px;
  }
  #subpage h3 {
    font-size: 20px;
  }
  #subpage .CSS1Compat p {
    font-size: 15px;
    line-height: 1.6;
  }
  #subpage #middle-banner h1,
  #subpage #fourth-banner h1 {
    font-size: 32px;
  }
}

#subpage .CSS1Compat {
  width: 100%;
  padding-right: 24px;
  /* margin: 40px 15px 80px 15px;
  padding: 0px; */
}
#subpage .primaryContent {
  width: 100%;
  /* margin: 40px 15px 80px 15px; */
}
#subpage .CSS1Compat img,
#subpage #middle-banner {
  border-radius: 6px;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
  }
}
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  /*   padding: 0.5em; */
  max-width: 67em;
  list-style: unset;
  /*   counter-reset: cardLi; */
  column-gap: 16px;
  /*row-gap: 4px;*/
}
.cards > li {
  flex: 1 0 26%;
  margin: 0.5em;
  /*   padding: 1em; */
  max-width: 15em;
  min-width: 14em;
  /*   counter-increment: cardLi; */
  /*   background: beige; */
  border-radius: 1em;
  text-align: center;
  list-style-type: none;
}
.cards > li:before,
.cards > li > span {
  float: left;
  margin-right: 0.4em;
}
/* .cards > li:before {
  content: counter(cardLi) ".";
} */
.cards > li > span {
  width: 1.25em;
  height: 1.25em;
  text-align: center;
  /*   background: #c00; */
  color: #fff;
}
/* .cards > li > span + span {
    background: #00f;
} */
.cards > li > div {
  overflow: hidden;
  /*   padding-left: 0.6em; */
  font-size: 16px;
  line-height: 1.3;
  font-style: italic;
}
@media only screen and (max-width: 759px) {
  .cards > li > div {
    overflow: hidden;
    /*   padding-left: 0.6em; */
    font-size: 14px;
    line-height: 1.3;
    font-style: italic;
  }
}
#profile-image img {
  margin: 0px 0px 22px;
  float: right;
}
#profile-info p {
  text-align: left;
}
.tiny {
  font-size: 14px;
  line-height: 0.8;
}
@media only screen and (max-width: 768px) {
  #profile-image img {
    float: unset;
  }
  .tiny {
    font-size: 13px;
  }
}

/* YES newWebStyles END */

</style>
<!-- LandingPage CSS END (uneditable) -->`;export{t as c};
