import{d as c,u as p,l as $,m as y,n as v,q as w,s as k,o as l,i as b,w as u,c as f,k as t,e as s,t as m,a as h,f as r,v as _,T as C,x as V,y as g,b as B}from"./app.0fd1cf5c.js";const M={text:"center"},T=["href"],D={m:"y-4",class:"end flex justify-center items-center"},N=s("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),E={p:"x-4",font:"serif bold",class:"whitespace-nowrap"},S=s("hr",{class:"line inline-flex",w:"full",m:"!y-2"},null,-1),j=c({__name:"ValaxyMd",props:{frontmatter:null,excerpt:null},setup(n){const a=n,{t:e}=p(),i=$();function o(){V(i.value)}return y(()=>{o()}),a.frontmatter.aplayer&&v(),a.frontmatter.codepen&&w(),k(),(d,A)=>(l(),b(C,{appear:""},{default:u(()=>[d.$slots.default?(l(),f("article",{key:0,class:_(n.frontmatter.markdown!==!1&&"markdown-body")},[t(d.$slots,"default",{ref_key:"content",ref:i,onVnodeUpdated:o}),s("div",M,[n.frontmatter.url?(l(),f("a",{key:0,href:n.frontmatter.url,class:"post-link-btn shadow hover:shadow-md",rounded:"",target:"_blank",m:"b-4"},m(h(e)("post.view_link")),9,T)):r("v-if",!0)]),n.frontmatter.end!==void 0?t(d.$slots,"end",{key:0},()=>[s("div",D,[N,s("span",E,m(n.frontmatter.end?"Q.E.D.":"To Be Continued."),1),S])]):r("v-if",!0)],2)):r("v-if",!0)]),_:3}))}}),q={w:"full",flex:"~"},x={class:"content",flex:"~ col grow",w:"full",p:"l-4 lt-md:0"},z={class:"markdown-body prose max-w-none pb-8"},P=c({__name:"ValaxyMain",props:{frontmatter:null,data:null},setup(n){const a=g();return(e,i)=>{const o=j;return l(),f("main",null,[s("div",q,[t(e.$slots,"main",{},()=>[s("div",x,[t(e.$slots,"main-header"),t(e.$slots,"main-header-after"),t(e.$slots,"main-content",{},()=>[s("div",z,[B(o,{frontmatter:n.frontmatter},{default:u(()=>[t(e.$slots,"main-content-md"),t(e.$slots,"default")]),_:3},8,["frontmatter"])]),t(e.$slots,"main-content-after")])]),t(e.$slots,"main-nav-before"),t(e.$slots,"main-nav"),t(e.$slots,"main-nav-after"),h(a).comment.enable&&n.frontmatter.comment!==!1?t(e.$slots,"comment",{key:0}):r("v-if",!0),t(e.$slots,"footer")])]),t(e.$slots,"aside")])}}});export{P as _};
