"use strict";(self.webpackChunkbarklarm_website=self.webpackChunkbarklarm_website||[]).push([[1110],{237:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>T,contentTitle:()=>q,default:()=>_,frontMatter:()=>S,metadata:()=>E,toc:()=>N});var n=r(4848),a=r(8453),l=r(6540),s=r(4164),i=r(3104),o=r(6347),u=r(205),c=r(7485),d=r(1682),h=r(9466);function b(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return b(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,d.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c.aZ)(a),(0,l.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(n.location.search);t.set(a,e),n.replace({...n.location,search:t.toString()})}),[a,n])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,a=m(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[o,c]=f({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,a]=(0,h.Dv)(r);return[n,(0,l.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:n}),g=(()=>{const e=o??d;return p({value:e,tabValues:a})?e:null})();(0,u.A)((()=>{g&&i(g)}),[g]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,a]),tabValues:a}}var v=r(2303);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function x(e){let{className:t,block:r,selectedValue:a,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=o[r].value;n!==a&&(c(t),l(n))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:l}=e;return(0,n.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:h,onClick:d,...l,className:(0,s.A)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=g(e);return(0,n.jsxs)("div",{className:(0,s.A)("tabs-container",k.tabList),children:[(0,n.jsx)(x,{...t,...e}),(0,n.jsx)(j,{...t,...e})]})}function y(e){const t=(0,v.A)();return(0,n.jsx)(w,{...e,children:b(e.children)},String(t))}const I={tabItem:"tabItem_Ymn6"};function V(e){let{children:t,hidden:r,className:a}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(I.tabItem,a),hidden:r,children:t})}const S={sidebar_position:2},q="Quick Start",E={id:"quick-start",title:"Quick Start",description:"Let's discover Barklarm in less than 120 seconds.",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/docs/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/barklarm/barklarm-website/tree/main/docs/quick-start.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/intro"},next:{title:"Application",permalink:"/docs/category/application"}},T={},N=[{value:"Getting Started",id:"getting-started",level:2},{value:"Install",id:"install",level:3},{value:"Using Package Manager",id:"using-package-manager",level:4},{value:"Manual",id:"manual",level:4}];function A(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,n.jsxs)(t.p,{children:["Let's discover ",(0,n.jsx)(t.strong,{children:"Barklarm in less than 120 seconds"}),"."]}),"\n",(0,n.jsx)("video",{controls:!0,src:"/video/intro.webm",width:"700",height:"400"}),"\n",(0,n.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsx)(t.h3,{id:"install",children:"Install"}),"\n",(0,n.jsx)(t.h4,{id:"using-package-manager",children:"Using Package Manager"}),"\n",(0,n.jsxs)(y,{children:[(0,n.jsx)(V,{value:"osx",label:"OSX",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"    # Using brew\n    brew install --cask barklarm/barklarm/barklarm\n"})})}),(0,n.jsx)(V,{value:"windows",label:"Windows",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"    # Using chocolatey\n    choco install barklarm\n"})})})]}),"\n",(0,n.jsx)(t.h4,{id:"manual",children:"Manual"}),"\n",(0,n.jsx)(t.p,{children:"Get started by:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/kanekotic/barklarm/releases",children:"downloading barklarm"})}),"\n",(0,n.jsx)(t.li,{children:"Execute installer"}),"\n"]})]})}function _(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>i});var n=r(6540);const a={},l=n.createContext(a);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);