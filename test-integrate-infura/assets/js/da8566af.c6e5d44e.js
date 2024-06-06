"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[94618],{56043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(74848),r=t(28453),s=t(11470),c=t(19365);const o={title:"starknet_addDeclareTransaction"},l=void 0,i={id:"api/networks/starknet/json-rpc-methods/starknet_adddeclaretransaction",title:"starknet_addDeclareTransaction",description:"Submits a new class declaration transaction.",source:"@site/services/api/networks/starknet/json-rpc-methods/starknet_adddeclaretransaction.mdx",sourceDirName:"api/networks/starknet/json-rpc-methods",slug:"/api/networks/starknet/json-rpc-methods/starknet_adddeclaretransaction",permalink:"/test-integrate-infura/services/api/networks/starknet/json-rpc-methods/starknet_adddeclaretransaction",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/api/networks/starknet/json-rpc-methods/starknet_adddeclaretransaction.mdx",tags:[],version:"current",frontMatter:{title:"starknet_addDeclareTransaction"},sidebar:"servicesSidebar",previous:{title:"JSON-RPC methods",permalink:"/test-integrate-infura/services/api/networks/starknet/json-rpc-methods/"},next:{title:"starknet_addDeployAccountTransaction",permalink:"/test-integrate-infura/services/api/networks/starknet/json-rpc-methods/starknet_adddeployaccounttransaction"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Submits a new class declaration transaction."}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"declare_transaction"}),": [",(0,a.jsx)(n.em,{children:"Required"}),"] A\n",(0,a.jsx)(n.a,{href:"https://docs.starknet.io/documentation/architecture_and_concepts/Network_Architecture/transactions/#declare-transaction",children:"declare transaction"}),"\nobject to declare a new class on StarkNet."]}),"\n",(0,a.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(n.p,{children:"The result of the transaction submission, including:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"transaction_hash"}),": The hash of the declare transaction."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"class_hash"}),": The hash of the declared class."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.p,{children:["Replace ",(0,a.jsx)(n.code,{children:"YOUR-API-KEY"})," with an API key from your ",(0,a.jsx)(n.a,{href:"https://infura.io/dashboard",children:"Infura dashboard"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(c.A,{value:"cURL",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl https://starknet-mainnet.infura.io/v3/YOUR-API-KEY \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "jsonrpc": "2.0",\n    "method": "starknet_addDeclareTransaction",\n    "params": {\n      "declare_transaction": {\n        "type": "DECLARE",\n        "sender_address": "0x13e3ca9a377084c37dc7eacbd1d9f8c3e3733935bcbad887c32a0e213cd6fe0",\n        "max_fee": "0x28ed6103d0000",\n        "version": "0x3",\n        "signature": [\n          "0x42527ffe9912b338983cbed67e139cfcc26a4d8cf1d1c2a85e4125fdf5f59ed", "0x636147d06fefd02ed37984b752556d4b9aefdac1a50b3df0528ec7c201ad84b"\n        ],\n        "nonce": "0x17",\n        "contract_class": {\n          "sierra_program": [\n            "0x1",\n            "0x3",\n            "0x0",\n            "0x361",\n            "0x800000000000000700000000000000000000000000000000",\n            "0x537472756374"\n          ]\n          "entry_points_by_type": {\n            "CONSTRUCTOR": [\n              {\n                "function_idx": 14,\n                "selector": "0x28ffe4ff0f226a9107253e17a904099aa4f63a02a5621de0576e5aa71bc5194"\n              }\n            ],\n            "EXTERNAL": [\n              {\n                "function_idx": 11,\n                "selector": "0x14dfa38c36b389189b8be0b1d3f9434ffcca49bf1a88f3658579d23d16368f"\n              },\n              {\n                "function_idx": 10,\n                "selector": "0x1fd12fd4580400368d8953eca1bf472ee233e7e06245d1ef8c176ff12bd3c4"\n              }\n            ],\n            "L1_HANDLER": []\n          }\n        }\n      }\n    },\n    "id": 0\n  }\'\n'})})})}),"\n",(0,a.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(c.A,{value:"JSON",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "jsonrpc": "2.0",\n  "result": {\n    "transaction_hash": "0x121aaba2894a63cce81acabb559eb2c114f4859dc5803e0b91349ec398d2eb0",\n    "class_hash": "0x515dd668a1798214e7ca9ec90c52e267229b8104fb296a90f20b6f70baaef53"\n  },\n  "id": 0\n}\n'})})})})]})}function f(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>c});t(96540);var a=t(18215);const r={tabItem:"tabItem_Ymn6"};var s=t(74848);function c(e){let{children:n,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,c),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>_});var a=t(96540),r=t(18215),s=t(23104),c=t(56347),o=t(205),l=t(57485),i=t(31682),u=t(70679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,c.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[c,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[i,d]=p({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),x=(()=>{const e=i??m;return f({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{x&&l(x)}),[x]);return{selectedValue:c,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function k(e){let{className:n,block:t,selectedValue:a,selectValue:c,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(i(n),c(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function g(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,v.jsx)(k,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function _(e){const n=(0,b.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var a=t(96540);const r={},s=a.createContext(r);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);