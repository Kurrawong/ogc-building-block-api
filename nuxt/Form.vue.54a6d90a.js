import{_ as R}from"./nuxt-link.8286c55f.js";import{h as w,i as h,o as r,j as i,w as d,d as c,_ as V,k as M,g as n,l as O,c as a,t as l,m as s,a as p,F as z,n as N,b as q,q as E,s as I,r as T,v as U,f as P,x as W}from"./entry.28982f2f.js";import{a as S}from"./str.0b61149f.js";import{a as G}from"./Loading.vue.d2a17020.js";import{u as J}from"./rdf.5e71285a.js";const K=w({__name:"prez:members",props:{info:{},form:{}},setup(_){return(t,m)=>{const y=h("v-btn");return r(),i(y,{to:t.info[0].fields["prez:link"]},{default:d(()=>[c("View Members")]),_:1},8,["to"])}}});const Q=V(K,[["__scopeId","data-v-c0694020"]]),C={"prez:members":Q},X=w({__name:"index",props:{fieldName:{},form:{},info:{}},setup(_){return(t,m)=>(r(),i(M(n(C)[t.fieldName]),{info:t.info,form:t.form},null,8,["info","form"]))}}),Y={key:0,class:"form",style:{position:"relative"}},Z={key:0,class:"text-h3 mb-5 mt-2"},x={key:0},ee={colspan:"2"},oe={style:{"white-space":"nowrap"}},re=["href","title"],te={key:0},se=["title"],ne={key:1},ae=w({__name:"Form",props:{form:{},formTitle:{},headerTitle:{},excludeFields:{},fields:{},info:{type:Boolean},links:{}},setup(_){const t=_,m=t.excludeFields?t.excludeFields:[/^prez:./],y=(t.fields?t.fields:Object.keys(t.form.formHeaders)).filter(e=>{if(!(e in t.form.formHeaders)||!(e in t.form.fields))return console.warn(`${e} not found in form
(${Object.keys(t.form.formHeaders)})`),!1;if(e in C)return!(m.indexOf(e)>=0);for(const k in m)if(e.match(m[k]))return!1;return!0}),v=e=>Array.isArray(t.form.fields[e])&&typeof t.form.fields[e][0]=="object",$=e=>Array.isArray(t.form.fields[e])&&typeof t.form.fields[e][0]=="string";return O(),(e,k)=>{const u=h("v-chip"),b=h("v-icon"),g=R,j=D,B=X,f=h("v-table"),A=h("v-chip-group");return e.form&&e.form.count>0?(r(),a("div",Y,[e.headerTitle&&e.form?(r(),a("div",Z,l(n(S)(e.headerTitle,e.form)),1)):s("",!0),e.form.header.label?(r(),i(u,{key:1,variant:"flat",style:{position:"absolute",right:"0",top:"0"}},{default:d(()=>[c(l(e.form.header.label),1)]),_:1})):s("",!0),e.form?(r(),i(f,{key:2,theme:"dark"},{default:d(()=>[e.formTitle?(r(),a("thead",x,[p("tr",null,[p("th",ee,l(n(S)(e.formTitle,e.form)),1)])])):s("",!0),p("tbody",null,[(r(!0),a(z,null,N(n(y),o=>{var F,H;return r(),a("tr",null,[p("th",oe,[c(l(e.form.formHeaders[o].label)+"  ",1),p("a",{href:e.form.formHeaders[o].iri,title:o},[q(b,{icon:"mdi-link"})],8,re),e.info?(r(),a("div",te,l(o),1)):s("",!0)]),o in n(C)?(r(),a("td",ne,[o in n(C)?(r(),i(B,{key:0,form:e.form,info:e.form.fields[o],"field-name":o},null,8,["form","info","field-name"])):s("",!0)])):(r(),a("td",{key:0,class:E(v(o)?"td-nest":void 0)},[(H=(F=e.form.fields._meta)==null?void 0:F[o])!=null&&H.type?(r(),i(u,{key:0,size:"x-small"},{default:d(()=>[c(l(e.form.fields._meta[o].type),1)]),_:2},1024)):s("",!0),p("div",{title:o in e.form.fields._meta&&e.form.fields[o]!=e.form.fields._meta[o].value?e.form.fields._meta[o].value:null},[o=="prez:link"?(r(),i(g,{key:0,to:e.form.fields[o]},{default:d(()=>[c(l(e.form.fields[o]),1)]),_:2},1032,["to"])):s("",!0),c(" "+l(typeof e.form.fields[o]!="object"&&o!="prez:link"?e.form.fields[o]:"")+" "+l($(o)?e.form.fields[o].join(", "):"")+" ",1),v(o)?(r(!0),a(z,{key:1},N(e.form.fields[o],L=>(r(),i(j,{form:L,"exclude-fields":n(m)},null,8,["form","exclude-fields"]))),256)):s("",!0)],8,se)],2))])}),256))])]),_:1})):s("",!0),e.links?(r(),i(A,{key:3},{default:d(()=>[(r(!0),a(z,null,N(e.links.filter(o=>o.title),o=>(r(),i(u,null,{default:d(()=>[c(l(o.title),1)]),_:2},1024))),256))]),_:1})):s("",!0)])):s("",!0)}}});const D=V(ae,[["__scopeId","data-v-6ce81e14"]]),de=w({__name:"Form",props:{dataUrl:{},formTitle:{},excludeFields:{},headerTitle:{},fields:{},info:{type:Boolean}},setup(_){const t=_,m=J(),{loading:y,success:v,error:$,prez:e}=I(m),k=T(1),u=T(void 0),b=T(null);U(async()=>{await B()});const g=P(),j=T(g.query);W(()=>j.value=g.query,()=>{});async function B(){if(await m.load(t.dataUrl,{params:{page:k.value}}),v.value)try{b.value=null,u.value=e.value.form(["skos:prefLabel","dcterms:title","rdfs:label","schema:name"],["skos:definition","dcterms:description","schema:description"])}catch(f){b.value=f.message}}return(f,A)=>{const o=D,F=G;return r(),a(z,null,[n(u)?(r(),i(o,{key:0,"header-title":f.headerTitle,"form-title":f.formTitle,form:n(u),fields:f.fields,"exclude-fields":f.excludeFields,info:f.info,links:n(e).headerLinks},null,8,["header-title","form-title","form","fields","exclude-fields","info","links"])):s("",!0),q(F,{loading:n(y),error:n($)},null,8,["loading","error"])],64)}}});export{de as _};