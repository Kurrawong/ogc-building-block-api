/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var F=Object.prototype.toString,k=Array.isArray||function(e){return F.call(e)==="[object Array]"};function _(t){return typeof t=="function"}function M(t){return k(t)?"array":typeof t}function U(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function I(t,e){return t!=null&&typeof t=="object"&&e in t}function $(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var x=RegExp.prototype.test;function K(t,e){return x.call(t,e)}var D=/\S/;function L(t){return!K(D,t)}var N={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function V(t){return String(t).replace(/[&<>"'`=\/]/g,function(r){return N[r]})}var B=/\s*/,z=/\s+/,A=/\s*=/,G=/\s*\}/,J=/#|\^|\/|>|\{|&|=|!/;function Q(t,e){if(!t)return[];var r=!1,n=[],s=[],a=[],i=!1,o=!1,c="",u=0;function p(){if(i&&!o)for(;a.length;)delete s[a.pop()];else a=[];i=!1,o=!1}var g,b,O;function j(y){if(typeof y=="string"&&(y=y.split(z,2)),!k(y)||y.length!==2)throw new Error("Invalid tags: "+y);g=new RegExp(U(y[0])+"\\s*"),b=new RegExp("\\s*"+U(y[1])),O=new RegExp("\\s*"+U("}"+y[1]))}j(e||v.tags);for(var l=new m(t),w,h,d,R,P,C;!l.eos();){if(w=l.pos,d=l.scanUntil(g),d)for(var T=0,q=d.length;T<q;++T)R=d.charAt(T),L(R)?(a.push(s.length),c+=R):(o=!0,r=!0,c+=" "),s.push(["text",R,w,w+1]),w+=1,R===`
`&&(p(),c="",u=0,r=!1);if(!l.scan(g))break;if(i=!0,h=l.scan(J)||"name",l.scan(B),h==="="?(d=l.scanUntil(A),l.scan(A),l.scanUntil(b)):h==="{"?(d=l.scanUntil(O),l.scan(G),l.scanUntil(b),h="&"):d=l.scanUntil(b),!l.scan(b))throw new Error("Unclosed tag at "+l.pos);if(h==">"?P=[h,d,w,l.pos,c,u,r]:P=[h,d,w,l.pos],u++,s.push(P),h==="#"||h==="^")n.push(P);else if(h==="/"){if(C=n.pop(),!C)throw new Error('Unopened section "'+d+'" at '+w);if(C[1]!==d)throw new Error('Unclosed section "'+C[1]+'" at '+w)}else h==="name"||h==="{"||h==="&"?o=!0:h==="="&&j(d)}if(p(),C=n.pop(),C)throw new Error('Unclosed section "'+C[1]+'" at '+l.pos);return Y(X(s))}function X(t){for(var e=[],r,n,s=0,a=t.length;s<a;++s)r=t[s],r&&(r[0]==="text"&&n&&n[0]==="text"?(n[1]+=r[1],n[3]=r[3]):(e.push(r),n=r));return e}function Y(t){for(var e=[],r=e,n=[],s,a,i=0,o=t.length;i<o;++i)switch(s=t[i],s[0]){case"#":case"^":r.push(s),n.push(s),r=s[4]=[];break;case"/":a=n.pop(),a[5]=s[2],r=n.length>0?n[n.length-1][4]:e;break;default:r.push(s)}return e}function m(t){this.string=t,this.tail=t,this.pos=0}m.prototype.eos=function(){return this.tail===""};m.prototype.scan=function(e){var r=this.tail.match(e);if(!r||r.index!==0)return"";var n=r[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n};m.prototype.scanUntil=function(e){var r=this.tail.search(e),n;switch(r){case-1:n=this.tail,this.tail="";break;case 0:n="";break;default:n=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=n.length,n};function E(t,e){this.view=t,this.cache={".":this.view},this.parent=e}E.prototype.push=function(e){return new E(e,this)};E.prototype.lookup=function(e){var r=this.cache,n;if(r.hasOwnProperty(e))n=r[e];else{for(var s=this,a,i,o,c=!1;s;){if(e.indexOf(".")>0)for(a=s.view,i=e.split("."),o=0;a!=null&&o<i.length;)o===i.length-1&&(c=I(a,i[o])||$(a,i[o])),a=a[i[o++]];else a=s.view[e],c=I(s.view,e);if(c){n=a;break}s=s.parent}r[e]=n}return _(n)&&(n=n.call(this.view)),n};function f(){this.templateCache={_cache:{},set:function(e,r){this._cache[e]=r},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}f.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};f.prototype.parse=function(e,r){var n=this.templateCache,s=e+":"+(r||v.tags).join(":"),a=typeof n<"u",i=a?n.get(s):void 0;return i==null&&(i=Q(e,r),a&&n.set(s,i)),i};f.prototype.render=function(e,r,n,s){var a=this.getConfigTags(s),i=this.parse(e,a),o=r instanceof E?r:new E(r,void 0);return this.renderTokens(i,o,n,e,s)};f.prototype.renderTokens=function(e,r,n,s,a){for(var i="",o,c,u,p=0,g=e.length;p<g;++p)u=void 0,o=e[p],c=o[0],c==="#"?u=this.renderSection(o,r,n,s,a):c==="^"?u=this.renderInverted(o,r,n,s,a):c===">"?u=this.renderPartial(o,r,n,a):c==="&"?u=this.unescapedValue(o,r):c==="name"?u=this.escapedValue(o,r,a):c==="text"&&(u=this.rawValue(o)),u!==void 0&&(i+=u);return i};f.prototype.renderSection=function(e,r,n,s,a){var i=this,o="",c=r.lookup(e[1]);function u(b){return i.render(b,r,n,a)}if(c){if(k(c))for(var p=0,g=c.length;p<g;++p)o+=this.renderTokens(e[4],r.push(c[p]),n,s,a);else if(typeof c=="object"||typeof c=="string"||typeof c=="number")o+=this.renderTokens(e[4],r.push(c),n,s,a);else if(_(c)){if(typeof s!="string")throw new Error("Cannot use higher-order sections without the original template");c=c.call(r.view,s.slice(e[3],e[5]),u),c!=null&&(o+=c)}else o+=this.renderTokens(e[4],r,n,s,a);return o}};f.prototype.renderInverted=function(e,r,n,s,a){var i=r.lookup(e[1]);if(!i||k(i)&&i.length===0)return this.renderTokens(e[4],r,n,s,a)};f.prototype.indentPartial=function(e,r,n){for(var s=r.replace(/[^ \t]/g,""),a=e.split(`
`),i=0;i<a.length;i++)a[i].length&&(i>0||!n)&&(a[i]=s+a[i]);return a.join(`
`)};f.prototype.renderPartial=function(e,r,n,s){if(n){var a=this.getConfigTags(s),i=_(n)?n(e[1]):n[e[1]];if(i!=null){var o=e[6],c=e[5],u=e[4],p=i;c==0&&u&&(p=this.indentPartial(i,u,o));var g=this.parse(p,a);return this.renderTokens(g,r,n,p,s)}}};f.prototype.unescapedValue=function(e,r){var n=r.lookup(e[1]);if(n!=null)return n};f.prototype.escapedValue=function(e,r,n){var s=this.getConfigEscape(n)||v.escape,a=r.lookup(e[1]);if(a!=null)return typeof a=="number"&&s===v.escape?String(a):s(a)};f.prototype.rawValue=function(e){return e[1]};f.prototype.getConfigTags=function(e){return k(e)?e:e&&typeof e=="object"?e.tags:void 0};f.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!k(e))return e.escape};var v={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){S.templateCache=t},get templateCache(){return S.templateCache}},S=new f;v.clearCache=function(){return S.clearCache()};v.parse=function(e,r){return S.parse(e,r)};v.render=function(e,r,n,s){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+M(e)+'" was given as the first argument for mustache#render(template, view, partials)');return S.render(e,r,n,s)};v.escape=V;v.Scanner=m;v.Context=E;v.Writer=f;const Z=["{{!bc}}Home","{{!bc}}Catalogs","{{!bc}}Collections","{{!bc}}Items","Home Page","View Members","{{ header.label }} collection","{{ header.label }} resource"],H={"{{!bc}}Home":"Home"};function re(t){return t}function te(t){const e=[];return typeof t!="string"?[]:(t.split(",").forEach(r=>{const[n,...s]=r.split(";").map(i=>i.trim()),a={iri:n.replace(/[<>]/g,"")};s.forEach(i=>{const[o,c]=i.split("="),u=o.trim(),p=c.replace(/["<>]/g,"").trim();a[u]=p}),e.push(a)}),e)}const ee=(t,e)=>{const r=t.replace(/{{(.*?)}}/g,(n,s)=>`{{${s.replace(/:/g,"__")}}}`);return v.render(r,W(e))},W=t=>{const e={};for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const n=t[r];n!==null&&typeof n=="object"?e[r.replace(/:/g,"__")]=W(n):e[r.replace(/:/g,"__")]=n}return e._debug=Object.keys(e).map(r=>r.replace("__",":")),e};function ne(t,e){const r=Z.includes(t)?t in H?H[t]:t:`"${t}" not found`;return e!==void 0?ee(r,e):r.replace(/{{\!.+}}/g,"")}export{ee as a,re as g,te as p,ne as t};
