"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[36455],{71026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=r(74848),a=r(28453),s=r(11470),o=r(19365);const i={description:"Authenticate all requests to Infura with an API key secret."},l="API key secret",u={id:"how-to/secure-an-api/api-key-secret",title:"API key secret",description:"Authenticate all requests to Infura with an API key secret.",source:"@site/developer-tools/dashboard/how-to/secure-an-api/api-key-secret.md",sourceDirName:"how-to/secure-an-api",slug:"/how-to/secure-an-api/api-key-secret",permalink:"/test-integrate-infura/developer-tools/dashboard/how-to/secure-an-api/api-key-secret",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/developer-tools/dashboard/how-to/secure-an-api/api-key-secret.md",tags:[],version:"current",frontMatter:{description:"Authenticate all requests to Infura with an API key secret."},sidebar:"dashboardSidebar",previous:{title:"Secure an API",permalink:"/test-integrate-infura/developer-tools/dashboard/dashboard/secure-an-api"},next:{title:"API key",permalink:"/test-integrate-infura/developer-tools/dashboard/how-to/secure-an-api/api-key"}},c={},d=[{value:"When to use an API key secret",id:"when-to-use-an-api-key-secret",level:2},{value:"Enable the API key secret for requests",id:"enable-the-api-key-secret-for-requests",level:2},{value:"Call APIs using an API key secret",id:"call-apis-using-an-api-key-secret",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"api-key-secret",children:"API key secret"}),"\n",(0,n.jsx)(t.p,{children:"For enhanced security, you can require an API key secret for all requests to Infura. The API key\nsecret serves as a password accompanying the API key (which serves as a username). This two-factor\napproach strengthens the authentication process, ensuring that only requests from authorized sources\nare accepted."}),"\n",(0,n.jsx)(t.h2,{id:"when-to-use-an-api-key-secret",children:"When to use an API key secret"}),"\n",(0,n.jsx)(t.p,{children:"Use an API key secret if your dapp includes server-side components. Storing and using the API key\nsecret only on the server side prevents exposure to client-side risks, such as malicious actors\ngaining access through browser inspection tools or network monitoring."}),"\n",(0,n.jsxs)(t.p,{children:["If your dapp operates solely on the client side without a server, use only the API key.\nThe API key is exposed in client-side code, so you should secure it using ",(0,n.jsx)(t.a,{href:"/test-integrate-infura/developer-tools/dashboard/how-to/secure-an-api/use-an-allowlist",children:"allowlists"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For customers on the Developer tier or higher, Infura supports ",(0,n.jsx)(t.a,{href:"/test-integrate-infura/developer-tools/dashboard/how-to/secure-an-api/use-an-allowlist#overide-your-allowlist-settings",children:"overriding your allowlist"}),"\nwhen you specify an API key secret. This allows you to apply the principle of least privilege on the\nclient side while allowing unrestricted access on the server side."]})}),"\n",(0,n.jsx)(t.h2,{id:"enable-the-api-key-secret-for-requests",children:"Enable the API key secret for requests"}),"\n",(0,n.jsxs)(t.p,{children:["In the API key's ",(0,n.jsx)(t.strong,{children:"Settings"})," tab, select ",(0,n.jsx)(t.strong,{children:"Require API Key secret for all requests"}),"."]}),"\n",(0,n.jsx)("div",{class:"left-align-container",children:(0,n.jsx)("div",{class:"img-large",children:(0,n.jsx)("img",{src:r(67347).A})})}),"\n",(0,n.jsx)(t.h2,{id:"call-apis-using-an-api-key-secret",children:"Call APIs using an API key secret"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(o.A,{value:"HTTPS",label:"HTTPS",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'curl --user :<YOUR-API-KEY-SECRET> \\\n  https://mainnet.infura.io/v3/<YOUR-API-KEY> \\\n  -d \'{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}\'\n'})})}),(0,n.jsx)(o.A,{value:"WebSocket",label:"WebSocket",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'wscat -c wss://mainnet.infura.io/ws/v3/<YOUR-API-KEY> --auth ":<YOUR-API-KEY-SECRET>"\n> {"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}\n'})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>o});r(96540);var n=r(18215);const a={tabItem:"tabItem_Ymn6"};var s=r(74848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var n=r(96540),a=r(18215),s=r(23104),o=r(56347),i=r(205),l=r(57485),u=r(31682),c=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:r,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),y=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function I(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(k,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(t))}},67347:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/security-page-4e308ac9cb2c8a9260d7daea0c7c82b3.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(96540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);