var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,l=(e,l)=>{for(var n in l||(l={}))a.call(l,n)&&s(e,n,l[n]);if(t)for(var n of t(l))r.call(l,n)&&s(e,n,l[n]);return e};import{S as n,i as o,s as c,e as i,k as h,t as f,c as u,a as g,n as p,g as d,d as m,F as v,b as y,f as b,G as j,L as E,h as x,K as $,x as w,j as I,m as O,o as k,u as H,v as M,w as P,M as T,E as A,r as D}from"../chunks/vendor-7d460438.js";function q(e){let t,a,r,s,l,n,o,c,w,I,O,k,H=e[0].title+"",M=e[0].description+"";return{c(){t=i("article"),a=i("img"),s=h(),l=i("div"),n=i("h4"),o=f(H),c=h(),w=i("p"),I=f(M),this.h()},l(e){t=u(e,"ARTICLE",{class:!0});var r=g(t);a=u(r,"IMG",{src:!0,alt:!0,class:!0}),s=p(r),l=u(r,"DIV",{class:!0});var i=g(l);n=u(i,"H4",{class:!0});var h=g(n);o=d(h,H),h.forEach(m),c=p(i),w=u(i,"P",{class:!0});var f=g(w);I=d(f,M),f.forEach(m),i.forEach(m),r.forEach(m),this.h()},h(){v(a.src,r="/books-small.jpg")||y(a,"src","/books-small.jpg"),y(a,"alt",""),y(a,"class","flex-grow-0 h-full w-2/5"),y(n,"class","mb-2 capitalize font-bold underline"),y(w,"class","text-sm pl-1"),y(l,"class","w-7/12 pt-2 mr-3 ml-3"),y(t,"class","w-96 m-5 h-40 flex border border-gray-500 rounded-lg overflow-hidden bg-white svelte-2qazug")},m(r,i){b(r,t,i),j(t,a),j(t,s),j(t,l),j(l,n),j(n,o),j(l,c),j(l,w),j(w,I),O||(k=E(t,"click",e[1]),O=!0)},p(e,[t]){1&t&&H!==(H=e[0].title+"")&&x(o,H),1&t&&M!==(M=e[0].description+"")&&x(I,M)},i:$,o:$,d(e){e&&m(t),O=!1,k()}}}function z(e,t,a){let{year:r}=t,{details:s}=t;return e.$$set=e=>{"year"in e&&a(2,r=e.year),"details"in e&&a(0,s=e.details)},[s,function(e){location.href=`/courses/${r}/${s.project}`},r]}class B extends n{constructor(e){super(),o(this,e,z,q,c,{year:2,details:0})}}function G(e,t,a){const r=e.slice();return r[1]=t[a][0],r[2]=t[a][1],r}function L(e,t,a){const r=e.slice();return r[5]=t[a],r}function R(e){let t,a;return t=new B({props:{year:e[1],details:e[5]}}),{c(){I(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){k(t,e,r),a=!0},p(e,a){const r={};1&a&&(r.year=e[1]),1&a&&(r.details=e[5]),t.$set(r)},i(e){a||(w(t.$$.fragment,e),a=!0)},o(e){H(t.$$.fragment,e),a=!1},d(e){M(t,e)}}}function S(e){let t,a,r,s,l,n,o=e[1]+"",c=e[2],v=[];for(let i=0;i<c.length;i+=1)v[i]=R(L(e,c,i));const E=e=>H(v[e],1,1,(()=>{v[e]=null}));return{c(){t=i("h2"),a=f(o),r=h(),s=i("div");for(let e=0;e<v.length;e+=1)v[e].c();l=h(),this.h()},l(e){t=u(e,"H2",{class:!0});var n=g(t);a=d(n,o),n.forEach(m),r=p(e),s=u(e,"DIV",{class:!0});var c=g(s);for(let t=0;t<v.length;t+=1)v[t].l(c);l=p(c),c.forEach(m),this.h()},h(){y(t,"class","text-3xl font-bold mt-8 mb-3"),y(s,"class","flex flex-wrap justify-around")},m(e,o){b(e,t,o),j(t,a),b(e,r,o),b(e,s,o);for(let t=0;t<v.length;t+=1)v[t].m(s,null);j(s,l),n=!0},p(e,t){if((!n||1&t)&&o!==(o=e[1]+"")&&x(a,o),1&t){let a;for(c=e[2],a=0;a<c.length;a+=1){const r=L(e,c,a);v[a]?(v[a].p(r,t),w(v[a],1)):(v[a]=R(r),v[a].c(),w(v[a],1),v[a].m(s,l))}for(D(),a=c.length;a<v.length;a+=1)E(a);P()}},i(e){if(!n){for(let e=0;e<c.length;e+=1)w(v[e]);n=!0}},o(e){v=v.filter(Boolean);for(let t=0;t<v.length;t+=1)H(v[t]);n=!1},d(e){e&&m(t),e&&m(r),e&&m(s),T(v,e)}}}function V(e){let t,a,r,s,l,n,o,c,v,E,x=[...Object.entries(e[0])].reverse(),$=[];for(let i=0;i<x.length;i+=1)$[i]=S(G(e,x,i));const I=e=>H($[e],1,1,(()=>{$[e]=null}));return{c(){t=h(),a=i("header"),r=i("h1"),s=f("Teaching Material"),l=h(),n=i("main"),o=i("p"),c=f("Here I store the material for anything I teach or help to (as much as I manage to update)."),v=h();for(let e=0;e<$.length;e+=1)$[e].c();this.h()},l(e){A('[data-svelte="svelte-gmt0qv"]',document.head).forEach(m),t=p(e),a=u(e,"HEADER",{});var i=g(a);r=u(i,"H1",{class:!0});var h=g(r);s=d(h,"Teaching Material"),h.forEach(m),i.forEach(m),l=p(e),n=u(e,"MAIN",{class:!0});var f=g(n);o=u(f,"P",{});var y=g(o);c=d(y,"Here I store the material for anything I teach or help to (as much as I manage to update)."),y.forEach(m),v=p(f);for(let t=0;t<$.length;t+=1)$[t].l(f);f.forEach(m),this.h()},h(){document.title="Teaching",y(r,"class","text-6xl text-center m-10 svelte-1pg3pjt"),y(n,"class","svelte-1pg3pjt")},m(e,i){b(e,t,i),b(e,a,i),j(a,r),j(r,s),b(e,l,i),b(e,n,i),j(n,o),j(o,c),j(n,v);for(let t=0;t<$.length;t+=1)$[t].m(n,null);E=!0},p(e,[t]){if(1&t){let a;for(x=[...Object.entries(e[0])].reverse(),a=0;a<x.length;a+=1){const r=G(e,x,a);$[a]?($[a].p(r,t),w($[a],1)):($[a]=S(r),$[a].c(),w($[a],1),$[a].m(n,null))}for(D(),a=x.length;a<$.length;a+=1)I(a);P()}},i(e){if(!E){for(let e=0;e<x.length;e+=1)w($[e]);E=!0}},o(e){$=$.filter(Boolean);for(let t=0;t<$.length;t+=1)H($[t]);E=!1},d(e){e&&m(t),e&&m(a),e&&m(l),e&&m(n),T($,e)}}}async function C({fetch:e}){const t=await e("./index.json");return t.ok?{props:l({},await t.json())}:{}}function F(e,t,a){let{years:r}=t;return e.$$set=e=>{"years"in e&&a(0,r=e.years)},[r]}class K extends n{constructor(e){super(),o(this,e,F,V,c,{years:0})}}export{K as default,C as load};