(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{364:function(t,e,o){var content=o(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(76).default)("6dccdb7a",content,!0,{sourceMap:!1})},386:function(t,e,o){"use strict";o(364)},387:function(t,e,o){var r=o(75)(!1);r.push([t.i,"[data-v-b375201e]:root{font-size:16px}@media (max-width:500px){[data-v-b375201e]:root{font-size:14px}}*[data-v-b375201e]{margin:0;padding:0;box-sizing:border-box}[data-v-b375201e]::-moz-selection{background:#87cd33;color:#fff}[data-v-b375201e]::selection{background:#87cd33;color:#fff}body[data-v-b375201e]{overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji}h1[data-v-b375201e]{font-size:5rem}h2[data-v-b375201e]{font-size:2rem}img[data-v-b375201e]{width:100%;height:auto;background:#f0f0f0}ul[data-v-b375201e]{padding-left:1rem;list-style:none}li[data-v-b375201e]{flex-shrink:0;width:clamp(500px,60vw,800px);padding-right:1rem}header[data-v-b375201e]{height:100vh}footer[data-v-b375201e]{height:50vh}[data-v-b375201e]:link,[data-v-b375201e]:visited{color:#4e9815}[data-v-b375201e]:-webkit-any-link{color:#4e9815}[data-v-b375201e]:-moz-any-link{color:#4e9815}[data-v-b375201e]:any-link{color:#4e9815}.df[data-v-b375201e]{display:flex}.aic[data-v-b375201e]{align-items:center}.jcc[data-v-b375201e]{justify-content:center}.loader[data-v-b375201e]{position:fixed;top:0;left:0;right:0;bottom:0;background:#000;color:#fff}.demo-wrapper[data-v-b375201e]{overflow-x:hidden}.wrapper[data-v-b375201e]{display:flex}.demo-gallery[data-v-b375201e]:not(.last){padding-bottom:1rem}.demo-text .text[data-v-b375201e]{font-size:clamp(8rem,15vw,16rem);line-height:1;font-weight:900}",""]),t.exports=r},404:function(t,e,o){"use strict";o.r(e);var r=o(14),l=(o(8),o(22),{mounted:function(){gsap.registerPlugin(ScrollTrigger);var t=gsap.utils.toArray("img"),e=document.querySelector(".loader--text");imagesLoaded(t).on("progress",(function(o){return e.textContent="".concat(Math.round(100*o.progressedCount/t.length),"%")})).on("always",(function(){document.body.style.overflow="auto",document.scrollingElement.scrollTo(0,0),gsap.to(document.querySelector(".loader"),{autoAlpha:0}),gsap.utils.toArray("section").forEach((function(section,t){var e=section.querySelector(".wrapper"),o=t%2?["100%",-1*(e.scrollWidth-section.offsetWidth)]:[-1*e.scrollWidth,0],l=Object(r.a)(o,2),c=l[0],d=l[1];gsap.fromTo(e,{x:c},{x:d,scrollTrigger:{trigger:section,scrub:.5}})}))})),console.log("GSAP LOGIN!!!")}}),c=(o(386),o(44)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"loader df aic jcc"},[o("div",[o("h1",[t._v("Loading")]),t._v(" "),o("h2",{staticClass:"loader--text"},[t._v("0%")])])]),t._v(" "),o("div",{staticClass:"demo-wrapper"},[o("header",{staticClass:"df aic jcc"},[o("div",[o("h1",[t._v("ScrollTrigger")]),t._v(" "),o("h2",[t._v("demo")])])]),t._v(" "),o("section",{staticClass:"demo-text"},[o("div",{staticClass:"wrapper text"},[t._v("\n          ABCDEFGHIJKLMNOPQRSTUVWXYZ\n          ")])]),t._v(" "),o("section",{staticClass:"demo-gallery"},[o("ul",{staticClass:"wrapper"},[o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=172",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=51",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=60",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=107",width:"1240"}})])])]),t._v(" "),o("section",{staticClass:"demo-gallery"},[o("ul",{staticClass:"wrapper"},[o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=174",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=122",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=85",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=33",width:"1240"}})])])]),t._v(" "),o("section",{staticClass:"demo-gallery"},[o("ul",{staticClass:"wrapper"},[o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=52",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=71",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=45",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=44",width:"1240"}})])])]),t._v(" "),o("section",{staticClass:"demo-gallery"},[o("ul",{staticClass:"wrapper"},[o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=150",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=82",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=61",width:"1240"}})]),t._v(" "),o("li",[o("img",{attrs:{height:"874",src:"https://source.unsplash.com/random/1240x874?sig=149",width:"1240"}})])])]),t._v(" "),o("section",{staticClass:"demo-text"},[o("div",{staticClass:"wrapper text"},[t._v("\n          ABCDEFGHIJKLMNOPQRSTUVWXYZ\n          ")])]),t._v(" "),o("footer",{staticClass:"df aic jcc"},[o("p",[t._v("Images from "),o("a",{attrs:{href:"https://unsplash.com/"}},[t._v("Unsplash")])])])])])}],!1,null,"b375201e",null);e.default=component.exports}}]);