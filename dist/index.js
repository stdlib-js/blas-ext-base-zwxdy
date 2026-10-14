"use strict";var l=function(v,t){return function(){try{return t||v((t={exports:{}}).exports,t),t.exports}catch(o){throw (t=0, o)}};};var _=l(function(T,O){
var R=require('@stdlib/strided-base-reinterpret-complex128/dist'),f=require('@stdlib/complex-float64-base-div/dist').assign,q=5;function F(v,t,o,d,x,c,p,y,M,D){var a,i,s,r,e,u,m,z,j,w,n;if(v<=0)return y;if(a=R(t,0),i=R(x,0),s=R(y,0),r=d*2,e=p*2,u=D*2,m=o*2,z=c*2,j=M*2,o===1&&c===1&&M===1){if(w=v%q,w>0)for(n=0;n<w;n++)f(a[r],a[r+1],i[e],i[e+1],s,1,u),r+=m,e+=z,u+=j;if(v<q)return y;for(n=w;n<v;n+=q)f(a[r],a[r+1],i[e],i[e+1],s,1,u),f(a[r+2],a[r+3],i[e+2],i[e+3],s,1,u+2),f(a[r+4],a[r+5],i[e+4],i[e+5],s,1,u+4),f(a[r+6],a[r+7],i[e+6],i[e+7],s,1,u+6),f(a[r+8],a[r+9],i[e+8],i[e+9],s,1,u+8),r+=q*2,e+=q*2,u+=q*2;return y}for(n=0;n<v;n++)f(a[r],a[r+1],i[e],i[e+1],s,1,u),r+=m,e+=z,u+=j;return y}O.exports=F
});var h=l(function(U,b){
var g=require('@stdlib/strided-base-stride2offset/dist'),G=_();function H(v,t,o,d,x,c,p){return G(v,t,o,g(v,o),d,x,g(v,x),c,p,g(v,p))}b.exports=H
});var B=l(function(V,A){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=h(),J=_();I(k,"ndarray",J);A.exports=k
});var K=require("path").join,L=require('@stdlib/utils-try-require/dist'),P=require('@stdlib/assert-is-error/dist'),Q=B(),E,C=L(K(__dirname,"./native.js"));P(C)?E=Q:E=C;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
