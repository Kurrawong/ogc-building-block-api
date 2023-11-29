import{s as k,r as o,v as F,c as g,a as l,t as n,g as u,y as p,z as v,A as f,d as D,F as R,n as C,o as j}from"./entry.28982f2f.js";import{u as M}from"./rdf.5e71285a.js";import"./axios.7bde71be.js";import"./str.0b61149f.js";const N=l("h1",null,"Vocab listing",-1),z=l("div",null,[l("button",{type:"submit"},"Refresh")],-1),B=l("h2",null,"Prefixes",-1),E=l("h2",null,"Match All",-1),L=l("thead",null,[l("tr",null,[l("th",null,"subject"),l("th",null,"predicate"),l("th",null,"object")])],-1),q={__name:"debug",setup(O){const d=M(),{loading:S,success:T,error:V,prefixes:w,prez:b}=k(d),m=o([]),a=o(""),s=o(""),r=o(""),i=o("https://api.gswa.dev.kurrawong.ai/v/vocab/df:vertical-depth-reference-systems");F(async()=>{await d.load(i.value),console.log("mounted"),x()});async function A(){await d.load(i.value),x()}const h=o(0),y=o({});function x(){console.log("LOAD"),m.value=b.value.store.getQuads(null,null,null,null),console.log("MATCH");const c=b.value.firstQuad(null,"prez:count",null,null);if(console.log("COUNT"),c!==null){h.value=c.object.value;const e=d.getPrefixExpandedFilter({predicate:"rdf:type",object:c.subject.value});y.value=d.store.getSubjects(e.predicate,c[0].subject,null)}}function U(){m.value=b.value.store.getQuads(a.value!=""?a.value:null,s.value!=""?s.value:null,r.value!=""?r.value:null,null)}return(c,e)=>(j(),g(R,null,[l("div",null,"COUNT = "+n(u(h)),1),l("div",null,"DATA = "+n(u(y)),1),l("div",null,[N,l("form",{method:"post",onSubmit:e[5]||(e[5]=t=>{t.preventDefault(),U()})},[l("div",null,[p(l("input",{placeholder:"url",name:"url","onUpdate:modelValue":e[0]||(e[0]=t=>f(i)?i.value=t:null),style:{width:"500px"}},null,512),[[v,u(i)]]),l("button",{type:"button",onClick:e[1]||(e[1]=t=>A())},"Reload")]),l("div",null,[p(l("input",{placeholder:"subject",name:"subject","onUpdate:modelValue":e[2]||(e[2]=t=>f(a)?a.value=t:null)},null,512),[[v,u(a)]]),p(l("input",{placeholder:"predicate",name:"predict","onUpdate:modelValue":e[3]||(e[3]=t=>f(s)?s.value=t:null)},null,512),[[v,u(s)]]),p(l("input",{placeholder:"object",name:"object","onUpdate:modelValue":e[4]||(e[4]=t=>f(r)?r.value=t:null)},null,512),[[v,u(r)]])]),z],32),D(" "+n(u(a))+" - "+n(u(s))+" - "+n(u(r))+" ",1),l("div",null,[l("div",null,"Loading = "+n(u(S)),1),l("div",null,"Error = "+n(u(V)),1),l("div",null,"Success = "+n(u(T)),1)]),B,D(" "+n(u(w))+" ",1),E,l("table",null,[L,l("tbody",null,[(j(!0),g(R,null,C(u(m),(t,_)=>(j(),g("tr",null,[l("td",null,n(_)+"# "+n(t.subject.value),1),l("td",null,n(t.predicate.value),1),l("td",null,n(t.object.value),1)]))),256))])])])],64))}};export{q as default};