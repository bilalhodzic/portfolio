(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[7],{407:function(e,t,r){e.exports={content:"Projects_content__3dTXV",title:"Projects_title__1oR9F",subtitle:"Projects_subtitle__1UMJb",projects:"Projects_projects__31b6_",purple:"Projects_purple__3snqR"}},408:function(e,t,r){e.exports={purple:"ProjectCard_purple__2o3F-",card:"ProjectCard_card__1JA0_",cardWrapper:"ProjectCard_cardWrapper__1fDMC",description:"ProjectCard_description__192Kc",cardHeader:"ProjectCard_cardHeader__KUYhk",projectimage:"ProjectCard_projectimage__3oV6B",cardBody:"ProjectCard_cardBody__2L8Tf",title:"ProjectCard_title__3iPmm"}},432:function(e,t,r){"use strict";r.r(t);var a=r(85);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}var n=r(407),i=r.n(n),s=r(87),o=r(28),l=r(408),j=r.n(l),d=r(3),b=r(13),u=r(23),h=r(2),p=function(e){var t=e.id,r=e.image,a=e.title,c=e.description,n=Object(d.g)();return Object(h.jsx)("li",{className:j.a.card,children:Object(h.jsxs)("div",{className:j.a.cardWrapper,children:[Object(h.jsx)("div",{className:j.a.cardHeader,children:Object(h.jsx)(b.b,{to:{pathname:"/project/".concat(t),state:{background:n}},children:Object(h.jsx)(u.LazyLoadImage,{alt:"card-img",effect:"blur",src:r.src,width:"100%",style:{minHeight:"10rem",objectFit:"contain",height:"100%"},placeholderSrc:r.placeholderSrc,wrapperClassName:j.a.projectimage})})}),Object(h.jsxs)("div",{className:j.a.cardBody,children:[Object(h.jsx)("h3",{className:j.a.title,children:a}),Object(h.jsx)("p",{className:j.a.description,children:c})]})]})})};t.default=function(){return Object(h.jsx)(s.a,{children:Object(h.jsxs)("div",{className:i.a.content,children:[Object(h.jsxs)("h1",{className:i.a.title,children:["My Recent"," ",Object(h.jsx)("strong",{className:i.a.purple,children:"Projects and Experience"})]}),Object(h.jsx)("p",{className:i.a.subtitle,children:"Here are a few projects I've worked on recently."}),Object(h.jsx)("ul",{className:i.a.projects,children:o.a.map((function(e){return Object(h.jsx)(p,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e),e.id)}))})]})})}},59:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r(1),c=r(25),n=function(){return Object(a.useContext)(c.a)}},69:function(e,t,r){"use strict";var a=r(85),c=r(15),n=r(17),i=r.n(n),s=r(70),o=r.n(s),l=r(1),j=r(2);t.a=function(e){var t=e.children,r=Object(l.useState)(!1),n=Object(c.a)(r,2),s=n[0],d=n[1];return window.addEventListener("scroll",(function(){d(window.scrollY>=20)})),Object(j.jsx)("div",{className:i()(o.a.header,Object(a.a)({},o.a.highlighted,s)),children:Object(j.jsx)("div",{className:o.a.container,children:t})})}},70:function(e,t,r){e.exports={header:"Header_header__wA-ul",container:"Header_container__3UH9J",highlighted:"Header_highlighted__1KpNR"}},72:function(e,t,r){"use strict";var a=r(73),c=r.n(a),n=r(82),i=r(84),s=r(2);t.a=function(){var e=(new Date).getFullYear();return Object(s.jsx)("div",{className:c.a.footer,children:Object(s.jsxs)("div",{className:c.a.container,children:[Object(s.jsx)("div",{className:c.a.copyright,children:Object(s.jsx)("h3",{children:"Developed by Bilal Hodzic"})}),Object(s.jsx)("div",{className:c.a.copyright,children:Object(s.jsxs)("h3",{children:["Copyright \xa9 ",e]})}),Object(s.jsx)("div",{className:c.a.body,children:Object(s.jsxs)("ul",{className:c.a.socialIcons,children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/bilalhodzic",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(n.a,{})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.facebook.com/bilall.121",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(i.a,{})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://www.linkedin.com/in/bilal-hodzic/",target:"_blank",rel:"noreferrer",children:Object(s.jsx)(i.b,{})})})]})})]})})}},73:function(e,t,r){e.exports={footer:"Footer_footer__3_KRn",container:"Footer_container__1AHXu",copyright:"Footer_copyright__23Ni_",body:"Footer_body__27pWj",socialIcons:"Footer_socialIcons__-CPjN"}},74:function(e,t,r){e.exports={navigationDrawerNav:"MainNavigation_navigationDrawerNav__1OvJS",desktop:"MainNavigation_desktop__1NEbe",mobile:"MainNavigation_mobile__25PTp"}},75:function(e,t,r){e.exports={navBar:"NavLinks_navBar__1i32J",active:"NavLinks_active__7v2Kn"}},76:function(e,t,r){e.exports={sideDrawer:"SideDrawer_sideDrawer__3HYof"}},77:function(e,t,r){e.exports={burger:"Burger_burger__20hJv"}},78:function(e,t,r){e.exports={toggleTheme:"BtnToggleTheme_toggleTheme__22meI"}},79:function(e,t,r){e.exports={logo:"Logo_logo__1BaBS"}},80:function(e,t,r){"use strict";var a,c=r(15),n=r(74),i=r.n(n),s=r(1),o=r(101),l=r(75),j=r.n(l),d=r(102),b=r(103),u=r(22),h=r(13),p=r(2),O=function(){return Object(p.jsxs)("ul",{className:j.a.navBar,children:[Object(p.jsx)("li",{children:Object(p.jsxs)(h.c,{to:u.b.HOME,activeClassName:j.a.active,exact:!0,children:[Object(p.jsx)(d.a,{}),"Home"]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(h.c,{to:u.b.ABOUT,activeClassName:j.a.active,children:[Object(p.jsx)(d.c,{}),"About"]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(h.c,{to:u.b.PROJECTS,activeClassName:j.a.active,children:[Object(p.jsx)(d.b,{}),"Projects"]})}),Object(p.jsx)("li",{children:Object(p.jsxs)(h.c,{to:u.b.RESUME,activeClassName:j.a.active,children:[Object(p.jsx)(b.a,{}),"Resume"]})})]})},m=r(76),x=r.n(m),_=r(48),f=r(24),v=function(e){var t=e.children,r=e.show,a=e.onClose;return Object(p.jsxs)(p.Fragment,{children:[r&&Object(p.jsx)(f.a,{onClick:a}),Object(p.jsx)(_.a,{in:r,timeout:200,classNames:"slide-in-left",mountOnEnter:!0,unmountOnExit:!0,children:Object(p.jsx)("aside",{className:x.a.sideDrawer,onClick:a,children:t})})]})},g=r(77),y=r.n(g),w=function(e){var t=e.onClick;return Object(p.jsxs)("button",{onClick:t,className:y.a.burger,children:[Object(p.jsx)("span",{}),Object(p.jsx)("span",{}),Object(p.jsx)("span",{})]})},N=r(78),k=r.n(N),P=r(16),C=["title","titleId"];function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function H(e,t){var r=e.title,c=e.titleId,n=B(e,C);return s.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",ref:t,"aria-labelledby":c},n),r?s.createElement("title",{id:c},r):null,a||(a=s.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})))}var L,S,D,I,F,T,M,R,z,J=s.forwardRef(H),W=(r.p,["title","titleId"]);function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var r,a,c=function(e,t){if(null==e)return{};var r,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}function K(e,t){var r=e.title,a=e.titleId,c=A(e,W);return s.createElement("svg",Y({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",ref:t,"aria-labelledby":a},c),r?s.createElement("title",{id:a},r):null,L||(L=s.createElement("circle",{cx:12,cy:12,r:5})),S||(S=s.createElement("line",{x1:12,y1:1,x2:12,y2:3})),D||(D=s.createElement("line",{x1:12,y1:21,x2:12,y2:23})),I||(I=s.createElement("line",{x1:4.22,y1:4.22,x2:5.64,y2:5.64})),F||(F=s.createElement("line",{x1:18.36,y1:18.36,x2:19.78,y2:19.78})),T||(T=s.createElement("line",{x1:1,y1:12,x2:3,y2:12})),M||(M=s.createElement("line",{x1:21,y1:12,x2:23,y2:12})),R||(R=s.createElement("line",{x1:4.22,y1:19.78,x2:5.64,y2:18.36})),z||(z=s.createElement("line",{x1:18.36,y1:5.64,x2:19.78,y2:4.22})))}var U=s.forwardRef(K),X=(r.p,r(59)),q=function(e){var t=e.className,r=Object(X.a)(),a=r.dark,c=r.toggleTheme;return Object(p.jsxs)(P.a,{addClass:t,onClick:c,children:[a&&Object(p.jsx)(J,{className:k.a.toggleTheme}),!a&&Object(p.jsx)(U,{className:k.a.toggleTheme})]})},V=r(79),G=r.n(V),Q=r(23),Z=r.p+"static/media/logo-bilal-black.051ee636.png",$=r.p+"static/media/logo-bilal-white.672f26c4.png",ee=function(e){var t=e.className,r=Object(X.a)().dark;return Object(p.jsx)("div",{className:t,children:Object(p.jsx)(h.b,{to:u.b.HOME,children:Object(p.jsx)(Q.LazyLoadImage,{alt:"home-img",effect:"blur",src:r?$:Z,wrapperClassName:G.a.logo})})})};t.a=function(){var e=Object(s.useState)(!1),t=Object(c.a)(e,2),r=t[0],a=t[1],n=function(){a((function(e){return!e}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(ee,{className:i.a.desktop}),Object(p.jsxs)("nav",{className:i.a.desktop,children:[Object(p.jsx)(O,{}),Object(p.jsx)(q,{})]}),Object(p.jsx)(o.a,{query:{maxWidth:768},children:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(w,{onClick:n}),Object(p.jsx)(ee,{className:i.a.mobile}),Object(p.jsx)(q,{className:i.a.mobile})]})}}),Object(p.jsx)(v,{show:r,onClose:n,children:Object(p.jsx)("nav",{className:i.a.navigationDrawerNav,children:Object(p.jsx)(O,{})})})]})}},81:function(e,t,r){"use strict";var a=r(91),c=r.n(a),n={number:{value:20,density:{enable:!0,value_area:800}},color:{value:"#154366"},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!0,speed:2,size_min:3,sync:!1}},line_linked:{enable_auto:!0,distance:50,color:"#154366",opacity:1,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},i={number:{value:160,density:{enable:!0,value_area:1500}},line_linked:{enable:!1,opacity:.03},move:{direction:"right",speed:.05},size:{value:1},opacity:{anim:{enable:!0,speed:1,opacity_min:.05}}},s=r(59),o=r(2);t.a=function(){var e=Object(s.a)().dark?i:n;return Object(o.jsx)(c.a,{params:{particles:e,interactivity:{events:{onclick:{enable:!0,mode:"push"}},modes:{push:{particles_nb:1}}},retina_detect:!0}})}},87:function(e,t,r){"use strict";var a=r(88),c=r.n(a),n=r(69),i=r(81),s=r(72),o=r(80),l=r(2);t.a=function(e){var t=e.children;return Object(l.jsxs)("div",{className:c.a.layout,children:[Object(l.jsx)(i.a,{}),Object(l.jsx)(n.a,{children:Object(l.jsx)(o.a,{})}),Object(l.jsx)("div",{className:c.a.container,children:t}),Object(l.jsx)(s.a,{})]})}},88:function(e,t,r){e.exports={layout:"BaseLayout_layout__28Oc7",container:"BaseLayout_container__BIYlO"}}}]);
//# sourceMappingURL=7.1f6105b6.chunk.js.map