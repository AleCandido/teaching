import{S as d,i as s,s as a,O as t,l as r,P as e,f as i,K as n,d as o,Q as l}from"./vendor-1c829566.js";function c(d){let s,a;return{c(){s=new t,a=r(),this.h()},l(d){s=e(d),a=r(),this.h()},h(){s.a=a},m(t,r){s.m(d[0],t,r),i(t,a,r)},p:n,i:n,o:n,d(d){d&&o(a),d&&s.d()}}}function x(d,s,a){let{latex:t}=s,{display:r=!1}=s;const e=l.renderToString(t,{displayMode:r,macros:{"\\dd":"\\text{d}","\\dv":"\\frac{\\dd #1}{\\dd #2}","\\dx":"\\frac{\\dd #1}{\\dd x}","\\ddx":"\\frac{\\dd}{\\dd x}"},throwOnError:!1});return d.$$set=d=>{"latex"in d&&a(1,t=d.latex),"display"in d&&a(2,r=d.display)},[e,t,r]}class p extends d{constructor(d){super(),s(this,d,x,c,a,{latex:1,display:2})}}export{p as M};