var g=Object.defineProperty;var w=(n,e,t)=>e in n?g(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var l=(n,e,t)=>(w(n,typeof e!="symbol"?e+"":e,t),t);import{B as y,h as b,s as v,r as p,v as x,o as A,c as P,d as N,a as k,t as L,g as S,F as z}from"./entry.e934cf79.js";import{D as T,N as h,a as _,b as D}from"./axios.7bde71be.js";import{p as E,g as Q}from"./str.0b61149f.js";import{c as u}from"./config.7d21e144.js";const R={prezNamedNode(n,e,t,s,a){return{termType:"NamedNode",uri:s||n,label:e,description:t,curie:a}},prezLiteral(n){return{termType:"Literal",text:n}},prezBlankNode(n){return{termType:"BlankNode",form:n}}},{namedNode:m}=T,{prezNamedNode:B,prezBlankNode:V,prezLiteral:F}=R,f=m("http://www.w3.org/1999/02/22-rdf-syntax-ns#type"),j=m("http://www.w3.org/2000/01/rdf-schema#label");class O{constructor(){l(this,"store");l(this,"data");l(this,"parser");l(this,"prefixes");l(this,"headerLinks");this.store=new h,this.parser=new _,this.data=[],this.prefixes={},this.headerLinks=[]}async fetch(e,t){try{const s=await D(e,t);if(s.status!=200)throw new Error(`Request failed with status ${s.status}`);this.headerLinks=E(s.headers.link),await this.load(await s.data)}catch(s){throw s instanceof Error?new Error(`Error: ${s.message}`):new Error("An unknown error occurred.")}}async load(e){await this.parser.parse(e,(t,s,a)=>{a&&(this.prefixes=a),s&&this.data.push(s)}),this.store=new h(this.data)}expandAll(e){return e.map(t=>this.expand(t))}expand(e){const t=e.split(":");return t.length>=2&&t[0]in this.prefixes?(t[0]=this.prefixes[t[0]].toString(),t[0]+t.slice(1).join(":")):e}firstQuad(e,t,s,a){const r=this.store.getQuads(e,t,s,a);return r&&r.length>0?r[0]:null}getAnnotation(e,t){console.log("LOOKING UP ",e,t);let s;return t.map(a=>{if(s===void 0){const r=this.firstQuad(e,a,null,null);r&&(s=F(r.object.value))}}),s}getAnnotated(e,t,s=[]){return B(e,this.getAnnotation(e,t),this.getAnnotation(e,s),e,this.compact(e))}expandConfig(e){return{classPredicates:this.expandAll(e.classPredicates),labelPredicates:this.expandAll(e.labelPredicates),descriptionPredicates:this.expandAll(e.descriptionPredicates)}}form(e,t=""){let s=t,a="";if(t==""){const i=this.firstQuad(null,f,null,null);if(i!==null)s=i.subject.value,a=i.object.value;else throw new Error("rdf:type predicate not found")}const r=this.expandConfig(e);return{config:r,class:this.getAnnotated(a,r.labelPredicates),properties:{},title:this.getAnnotated(s,r.labelPredicates,r.descriptionPredicates)}}getMeta(e,t,s){const{label:a,description:r}=this.getAnnotations(e.predicate.value,t,s);let o,i;if(e.object.datatype){console.log("DATA TYPE = ",e.object),i=e.object.datatype.value;const d=this.firstQuad(i,j,null,null);o=Q(d!==null&&d.object.value?d.object.value.toString():i)}return{iri:e.predicate.value,label:a,description:r,typeIRI:i,type:o}}getAnnotations(e,t,s){let a,r;return t.map(o=>{if(a===void 0){const i=this.firstQuad(e,o,null,null);i&&(a=i.object.value)}}),s.map(o=>{if(r===void 0){const i=this.firstQuad(e,o,null,null);i&&(r=i.object.value)}}),{label:a,description:r}}compact(e){for(const t in this.prefixes)if(e.startsWith(this.prefixes[t].toString()))return`${t}:${e.substring(this.prefixes[t].toString().length)}`;return e==f.value?"rdf:type":e}}const I=y("rdf",{state:()=>({cache:{},loading:!1,error:"",success:!1,prez:null}),actions:{clearCache(){this.cache={}},async load(n,e){try{this.loading=!0,this.success=!1;const t=n+JSON.stringify(e);t in this.cache?this.prez=this.cache[t]:(this.prez=new O,await this.prez.fetch(n,e),this.cache[t]=this.prez),this.success=!0,this.error=null}catch(t){this.error=t.message,this.success=!1}finally{this.loading=!1}}}}),H=b({__name:"test",setup(n){const e=I(),{loading:t,success:s,error:a,prez:r}=v(e),o=p(1),i=p(void 0);return p(null),x(async()=>{var c;await e.load(u.API_BASE_URL+"/"+u.CATALOG_LIST_URL+"/bblck-ctlg:bblocks",{params:{page:o.value}}),i.value=(c=r.value)==null?void 0:c.form({classPredicates:["rdf:type"],labelPredicates:["skos:prefLabel","dcterms:title","rdfs:label","schema:name"],descriptionPredicates:["skos:definition","dcterms:description","schema:description"]})}),(c,d)=>(A(),P(z,null,[N(" OUTPUT: "),k("pre",null,L(S(i)),1)],64))}});export{H as default};
