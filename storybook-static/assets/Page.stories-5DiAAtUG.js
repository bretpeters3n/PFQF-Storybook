import{w as f,e as d,u as k}from"./index-DQLiMaGX.js";const p=({primary:o=!1,size:t="medium",backgroundColor:n,label:a,onClick:s})=>{const e=document.createElement("button");e.type="button",e.innerText=a,e.addEventListener("click",s);const c=o?"storybook-button--primary":"storybook-button--secondary";return e.className=["storybook-button",`storybook-button--${t}`,c].join(" "),e.style.backgroundColor=n,e},B=({user:o,onLogout:t,onLogin:n,onCreateAccount:a})=>{const s=document.createElement("header"),e=document.createElement("div");e.className="storybook-header",e.insertAdjacentHTML("afterbegin",`<div>
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF" />
        <path
          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
          fill="#555AB9" />
        <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
      </g>
    </svg>
    <h1>Acme</h1>
  </div>`);const r=document.createElement("div");if(o){const m=`<span class="welcome">Welcome, <b>${o.name}</b>!</span>`;r.innerHTML=m,r.appendChild(p({size:"small",label:"Log out",onClick:t}))}else r.appendChild(p({size:"small",label:"Log in",onClick:n})),r.appendChild(p({size:"small",label:"Sign up",onClick:a,primary:!0}));return e.appendChild(r),s.appendChild(e),s},L=()=>{const o=document.createElement("article");let t=null,n=null;const a=()=>{const u=document.getElementsByTagName("article")[0];u.replaceChild(r(),u.firstChild)},s=()=>{t={name:"Jane Doe"},a()},e=()=>{t=null,a()},c=()=>{t={name:"Jane Doe"},a()},r=()=>B({onLogin:s,onLogout:e,onCreateAccount:c,user:t});return n=r(),o.appendChild(n),o.insertAdjacentHTML("beforeend",`
  <section class="storybook-page">
    <h2>Pages in Storybook</h2>
    <p>
      We recommend building UIs with a
      <a
        href="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"
        target="_blank"
        rel="noopener noreferrer">
        <strong>component-driven</strong>
      </a>
      process starting with atomic components and ending with pages.
    </p>
    <p>
      Render pages with mock data. This makes it easy to build and review page states without
      needing to navigate to them in your app. Here are some handy patterns for managing page data
      in Storybook:
    </p>
    <ul>
      <li>
        Use a higher-level connected component. Storybook helps you compose such data from the
        "args" of child component stories
      </li>
      <li>
        Assemble data in the page component from your services. You can mock these services out
        using Storybook.
      </li>
    </ul>
    <p>
      Get a guided tutorial on component-driven development at
      <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">
        Storybook tutorials
      </a>
      . Read more in the
      <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer">docs</a>
      .
    </p>
    <div class="tip-wrapper">
      <span class="tip">Tip</span>
      Adjust the width of the canvas with the
      <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path
            d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0
            01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0
            010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
            id="a"
            fill="#999" />
        </g>
      </svg>
      Viewports addon in the toolbar
    </div>
  </section>
`),o},E={title:"Layout/Page",render:()=>L(),parameters:{layout:"fullscreen"}},i={},l={play:async({canvasElement:o})=>{const t=f(o),n=t.getByRole("button",{name:/Log in/i});await d(n).toBeInTheDocument(),await k.click(n),await d(n).not.toBeInTheDocument();const a=t.getByRole("button",{name:/Log out/i});await d(a).toBeInTheDocument()}};var g,h,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,w,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole("button", {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const T=["LoggedOut","LoggedIn"];export{l as LoggedIn,i as LoggedOut,T as __namedExportsOrder,E as default};
