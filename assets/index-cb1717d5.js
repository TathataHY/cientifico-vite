(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();const u=()=>`
      <div class="Header-main">
        <div class="Header-logo">
          <h1>
            <a href="/cientifico-vite">
              100tifi.co
            </a>
          </h1>
        </div>
        <div class="Header-nav">
          <a href="#/about/">
            About
          </a>
        </div>
      </div>
    `,i="https://rickandmortyapi.com/api/character/",d=async r=>{const e=r?`${i}${r}`:i;try{return await(await fetch(e)).json()}catch(a){console.log("Fetch Error",a)}},p=async()=>`
    <div class="Characters">
      ${(await d()).results.map(a=>`
        <article class="Character-item">
          <a href="#/${a.id}/">
            <img src="${a.image}" alt="${a.name}">
            <h2>${a.name}</h2>
          </a>
        </article>
      `).join("")}
    </div>
  `,l=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",f=async()=>{const r=l(),e=await d(r);return`
    <div class="Characters-inner">
      <article class="Characters-card">
        <img src="${e.image}" alt="${e.name}">
        <h2>${e.name}</h2>
      </article>
      <article class="Characters-card">
        <h3>Episodes: <span>${e.episode.length}</span></h3>
        <h3>Status: <span>${e.status}</span></h3>
        <h3>Species: <span>${e.species}</span></h3>
        <h3>Gender: <span>${e.gender}</span></h3>
        <h3>Origin: <span>${e.origin.name}</span></h3>
        <h3>Last Location: ${e.location.name}</h3>
      </article>
    </div>
  `},m=()=>`
      <div class="Error404">
        <h2>Error 404</h2>
      </div>
    `,v=r=>r.length<=3?r==="/"?r:"/:id":`/${r}`,c={"/":p,"/:id":f,"/contact":"Contact"},h=async()=>{const r=document.getElementById("header"),e=document.getElementById("content");r.innerHTML=await u();let a=l(),n=await v(a),t=c[n]?c[n]:m;e.innerHTML=await t()};window.addEventListener("load",h);window.addEventListener("hashchange",h);
