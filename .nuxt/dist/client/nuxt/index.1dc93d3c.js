import{_ as m}from"./Loading.vue.a4608ec4.js";import{_ as u}from"./Form.vue.10f8a84d.js";import{f as p,r as s,c as _,b as c,g as t,F as d,o as f}from"./entry.00940869.js";import{c as $}from"./config.7d21e144.js";import{t as a}from"./str.0b61149f.js";import"./nuxt-link.9e22181e.js";import"./rdf.d61dea5b.js";import"./axios.7bde71be.js";const E={__name:"index",setup(b){const e=p(),o=s(e.params.id),l=s(e.params.collectionId),r=s(e.params.itemId);return(g,v)=>{const i=m,n=u;return f(),_(d,null,[c(i,{items:[{title:t(a)("{{!bc}}Home"),to:"/"},{title:t(a)("{{!bc}}Catalogs"),to:"/catalogs"},{title:`${o.value}`,to:`/catalogs/${o.value}`},{title:t(a)("{{!bc}}Collections"),to:`/catalogs/${o.value}/collections`},{title:`${l.value}`,to:`/catalogs/${o.value}/collections/${l.value}`},{title:t(a)("{{!bc}}Items"),to:`/catalogs/${o.value}/collections/${l.value}/items`},{title:`${r.value}`,to:t(e).path,disabled:!0}]},null,8,["items"]),c(n,{"header-title":t(a)("{{ header.label }} resource"),"form-title":"{{ fields.rdfs:label }}","data-url":t($).API_BASE_URL+t(e).path},null,8,["header-title","data-url"])],64)}}};export{E as default};
