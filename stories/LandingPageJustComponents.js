"use strict";

// import "./landingPage.css";
import { createLandingPageCSS } from "./LandingPageCSS";

export const createLandingPageJustComponents = () =>
  `<div id="subpage">
    <div class="primaryContent">
      <div id="top-banner">
        <div id="top-banner-text">
          <h1>
            <br />
            <img
              id="PdT"
              src="../src/imgs/PNG_pair-(1).png"
            /><img
              id="PmO"
              src="../src/imgs/PNG_pair-(1).png"
            />
            Landing Page Title here
          </h1>
          <a class="btnActionText" href="#Table-of-Contents" id="LB">See Your Impact</a>
        </div>
      </div>
      <!-- TODO: main hero ENDS here -->

      <!-- TODO: intro copy STARTS here -->
      <div class="CSS1Compat" id="BAWA-main">
        <h2>
          Paragraph <em><u>Header</u></em> Title
        </h2>

        <p class="">
          Quail Forever is expanding quail habitat restoration and public
          access efforts across Arizona, with a particular focus in
          southeastern Arizona. Three species of western quail (Gambles’,
          Mearns’ , and Scaled) converge on this landscape, and with your
          help, we aim to maximize these species’ access to expansive,
          high quality habitat — effectively ‘raising the floor’ for quail
          in the southwest.
        </p>

        <hr class="my-5 w-25" />

        <h2 id="Table-of-Contents">
          Your Impact
        </h2>

        <div class="row mb-5" id="ToC">
          <div class="col-6 col-md-4">
            <a href="#Chapter-1">
              <img src="../src/imgs/PF_HAB_400x200.jpg" />
            </a>
            <div class="text-content">
              <h2><a href="#Chapter-1">Habitat</a></h2>
            </div>
          </div>

          <div class="col-6 col-md-4">
            <a href="#Chapter-2">
              <img src="../src/imgs/PF_HERITAGE_400x200.jpg" />
            </a>
            <div class="text-content">
              <h2><a href="#Chapter-2">Heritage</a></h2>
            </div>
          </div>

          <div class="col-6 col-md-4">
            <a href="#Chapter-3">
              <img src="../src/imgs/PF-QF_ADVOCACY_400x200.jpg" />
            </a>
            <div class="text-content">
              <h2><a href="#Chapter-3">Advocacy</a></h2>
            </div>
          </div>

          <div class="col-6 col-md-4">
            <a href="#Chapter-4">
              <img src="../src/imgs/PF-QF_CHAPTERS_400x200.jpg" />
            </a>
            <div class="text-content">
              <h2><a href="#Chapter-4">Chapters</a></h2>
            </div>
          </div>

          <div class="col-6 col-md-4" id="ch5">
            <a href="#Chapter-5">
              <img src="../src/imgs/PF_PERM_400x200.jpg" />
            </a>
            <div class="text-content">
              <h2><a href="#Chapter-5">Permanent Protection</a></h2>
            </div>
          </div>

          <div class="col-6 col-md-4">
            <a href="#Chapter-6">
              <img src="../src/imgs/PF_BUILDINGFOREVER_400x200.jpg" />
            </a>
            <div class="text-content">
              <h2><a href="#Chapter-6">Building Forever</a></h2>
            </div>
          </div>
        </div>

        <hr class="my-5 w-25" />

        <h2 class="pt-3">Another Paragraph Header?</h2>
        <p class="">
          Many of the upland landscapes we know and love - like the Sky
          Islands region of the southwest - are part of North America’s
          vast grassland biome. Grasslands are every bit as important to
          the health of the planet and the life it sustains as rainforests
          and coral reefs. And unfortunately, they are also every bit as
          fragile and threatened.
        </p>
        <div class="row justify-content-center py-3 imageRow">
          <div class="col-6 pl-0">
            <img src="../src/imgs/sqrImg-400x600-bird1.jpg" />
          </div>
          <div class="col-6 pr-0">
            <img src="../src/imgs/sqrImg-400x600-bird2.jpg" />
          </div>
        </div>
        <p>
          North America’s grasslands are one of the most imperiled
          ecosystems in the world - a reality made clear through what is
          happening to upland birds. In fact, nearly 70 percent of North
          America’s original grasslands and rangeland are gone. As hunters
          and outdoor enthusiasts, many of us have witnessed these losses
          firsthand.
        </p>
        <p>
          We recognize the severity of these threats, but we also have the
          power to change this story; to write a better future for all of
          us. And as the Habitat Organization, Quail Forever can—and
          will—lead the way.
        </p>

        <div class="quoteContainer">
          <div class="container py-2">
            <hr class="my-4 w-25" />
            <h3 class="justBold quote" style="color: var(--qf-green)">
              It’s imperative we plant and nurture the seeds that will
              become the roots of a better future.
            </h3>
            <hr class="my-4 w-25" />
          </div>
        </div>

        <p class="">
          Quail Forever is working to ensure grassland dependent wildlife
          has the space it needs to thrive. Through the Arizona Quail
          Initiative and other programs throughout the country, we’re able
          to realize this future — to protect the best of what remains and
          restore or enhance critical upland habitats.
        </p>
        <p>
          This is the vision of our future, driving the strategic plan
          that will guide Quail Forever’s work in the coming years.
        </p>
      </div>
      <!-- TODO: intro copy ENDS here -->

      <!-- TODO: section 01 hero STARTS here -->
      <div class="container">
        <div id="middle-banner">
          <div id="middle-banner-text" class="text-center">
            <h1 class="text-center pb-0">
              Arizona Quail Initiative Goals
            </h1>
            <br>
            <a class="btnActionText" href="/donate" id="LB">Donate Now!</a>
          </div>
        </div>
      </div>
      <!-- TODO: section 01 hero ENDS here -->

      <!-- TODO: section 01 content STARTS here -->
      <div class="CSS1Compat" id="BAWA-main">
        <!-- <div class="video-container">
          <iframe
            allowfullscreen=""
            frameborder="0"
            height="440"
            src="https://www.youtube.com/embed/0pM3s61A1Rs?si=hDq1_S0iYomitiq3"
            width="660"
          ></iframe>
        </div>

        <p style="text-align: center">
          <a
            class="btnActionText"
            href="https://bellevue.geniussis.com/Registration.aspx?AffiliateID=E9A6E9"
            target='_blank"'
            >Register Now
          </a>
        </p> -->

        <h2 class="pb-2">
          What are the <em><u>Arizona Quail Initiative</u></em> Goals?
        </h2>
        <hr class="my-4 w-25" />

        <div class="contentRow">
          <div class="row py-2 py-sm-3">
            <div class="col-12 col-sm-4">
              <img
                class=""
                src="../src/imgs/blogSupImg-200x200-grassRestore.jpg"
              />
            </div>
            <div class="col-12 col-sm-8 align-content-center">
              <h3 class="">Grassland restoration</h3>
              <p class="pb-2">
                <strong>Restore 30,000-acres</strong> – With over
                8,000-acres of grassland restoration recently completed,
                we intend to rapidly expand our efforts to remove more
                mesquite, juniper and other invasive species that diminish
                quail habitat.
              </p>
            </div>
          </div>
          <div class="row flex-row-reverse py-2 py-sm-3">
            <div class="col-12 col-sm-4">
              <img
                class=""
                src="../src/imgs/blogSupImg-200x200-waterDev.jpg"
              />
            </div>
            <div class="col-12 col-sm-8 align-content-center">
              <h3 class="">Water development</h3>
              <p class="pb-2">
                <strong>Impact 100,000-acres</strong> – With 25,000-acres
                of quail and other wildlife habitat already impacted, we
                will build on this success through solar conversion of
                existing wells, and expansion of water delivery and
                storage systems to provide year-round water for quail.
              </p>
            </div>
          </div>
          <div class="row py-3 py-2 py-sm-3">
            <div class="col-12 col-sm-4">
              <img
                class=""
                src="../src/imgs/blogSupImg-200x200-waterRetention.jpg"
              />
            </div>
            <div class="col-12 col-sm-8 align-content-center">
              <h3 class="">Water retention structures</h3>
              <p class="pb-2">
                <strong>Impact 2 watersheds</strong> – This
                Hands-on-Habitat effort driven by our Quail Forever
                chapters will construct small rock-dam structures that
                will be sited in washes and drainages that slow runoff to
                retain seasonal moisture while reducing erosion and
                encouraging forage production. This practice is key for
                quail, especially when moisture is scarce.
              </p>
            </div>
          </div>
          <div class="row flex-row-reverse py-2 py-sm-3">
            <div class="col-12 col-sm-4">
              <img
                class=""
                src="../src/imgs/blogSupImg-200x200-grazManage.jpg"
              />
            </div>
            <div class="col-12 col-sm-8 align-content-center">
              <h3 class="">Grazing management</h3>
              <p class="pb-2">
                <strong>Improve 100,000-acres of rangeland</strong> –
                Quail Forever aims to partner with willing ranchers in
                southeastern Arizona to apply virtual fencing technology
                to improve and retain essential nesting, brooding and
                overall habitat for Mearns’ Quail in priority areas. By
                deploying this emerging technology, we can advance forage
                production while providing improved quail habitat.
              </p>
            </div>
          </div>
          <div class="row py-2 py-sm-3">
            <div class="col-12 col-sm-4">
              <img class="" src="../src/imgs/blogSupImg-200x200-access.jpg" />
            </div>
            <div class="col-12 col-sm-8 align-content-center">
              <h3 class="">Access</h3>
              <p class="pb-2">
                <strong
                  >Open 50,000 - acres of private and/or landlocked public
                  land</strong
                >
                – We strive to sustain existing access agreements and
                expand opportunities for opening private lands to public
                access and opening land-locked parcels of public land.
              </p>
            </div>
          </div>
          <div class="row flex-row-reverse py-2 py-sm-3">
            <div class="col-12 col-sm-4">
              <img
                class=""
                src="../src/imgs/blogSupImg-200x200-provEssCap.jpg"
              />
            </div>
            <div class="col-12 col-sm-8 align-content-center">
              <h3 class="">Provide essential capacity</h3>
              <p class="pb-2">
                Your donation will help secure and expand the Quail
                Forever team who partners with the Arizona Game and Fish
                Department and BLM as they develop and implement the
                objectives of this initiative. Through our partnerships,
                Quail Forever is uniquely positioned to prioritize project
                activity that directly benefits the species that matter
                most to all of us.
              </p>
            </div>
          </div>
        </div>

        <hr class="my-4 w-25" />

        <!-- <div class="CSS1Compat"> -->
        <div class="d-flex justify-content-center imageRow pt-4">
          <img src="../src/imgs/blogSupImg-800x400-birdsWide.jpg" />
        </div>
        <h2 class="pt-3">Thanks to our Partners!</h2>

        <p style="">
          Like all great conservation work, the Montana Grasslands
          Initiative is made possible by our tremendous network of
          partners and supporters, including...
        </p>

        <!-- <p style="">(Insert Sponsor Logos here)</p> -->
        <ul class="cards pl-0" style="max-width: 700px">
          <li>
            <div>Arizona Game and Fish Department</div>
          </li>
          <li>
            <div>Bureau of Land Management</div>
          </li>
          <li>
            <div>Natural Resources Conservation Service</div>
          </li>
          <li>
            <div>Arizona Association of Conservation Districts</div>
          </li>
          <li>
            <div>Arizona Department of Forestry and Fire Management</div>
          </li>
          <li>
            <div>Intermountain West Joint Venture</div>
          </li>
          <li>
            <div>United States Forest Service</div>
          </li>
        </ul>
        <!-- </div> -->
        <hr class="my-5 w-25" />

        <h2>Contact us</h2>

        <div class="row">
          <div class="col-12 col-md-6" id="profile-image">
            <img
              alt="contact.jpg"
              src="../src/imgs/author-byLineImg.jpg"
              style="max-height: 160px"
            />
          </div>

          <div class="col-12 col-md-6" id="profile-info">
            <p class="w-75 ml-0" style="line-height: 1.2">
              <span class="mb-4 tiny"
                >For more information on the Arizona Quail Initiative,
                contact:</span
              >
            </p>
            <p>
              <strong>Scott Poppenberger</strong><br />
              <em>SW state coordinator</em><br />
              <a href="tel:928-308-2042">928-308-2042</a><br />
              <a href="mailto:spoppenberger@quailforever.org"
                >spoppenberger@quailforever.org</a
              >
            </p>
          </div>
        </div>
      </div>
      <!--<img src="https://pheasantsforever.org/getattachment/1acfb04c-d3ad-454c-bccc-2e0964c9e839/003.jpg.aspx" style="margin: auto;" />-->
    </div>
  </div>
</div>` +
  `
        ` +
  createLandingPageCSS();
