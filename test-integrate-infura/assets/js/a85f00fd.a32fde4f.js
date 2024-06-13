"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[71319],{7868:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var t=r(74848),a=r(28453),c=r(11470),s=r(19365);const l={description:"debug_traceBlockByHash API method"},o="debug_traceBlockByHash",i={id:"reference/linea/json-rpc-methods/debug/debug_traceblockbyhash",title:"debug_traceBlockByHash",description:"debug_traceBlockByHash API method",source:"@site/services/reference/linea/json-rpc-methods/debug/debug_traceblockbyhash.md",sourceDirName:"reference/linea/json-rpc-methods/debug",slug:"/reference/linea/json-rpc-methods/debug/debug_traceblockbyhash",permalink:"/test-integrate-infura/services/reference/linea/json-rpc-methods/debug/debug_traceblockbyhash",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/services/reference/linea/json-rpc-methods/debug/debug_traceblockbyhash.md",tags:[],version:"current",frontMatter:{description:"debug_traceBlockByHash API method"},sidebar:"servicesSidebar",previous:{title:"Debug methods",permalink:"/test-integrate-infura/services/reference/linea/json-rpc-methods/debug/"},next:{title:"debug_traceBlockByNumber",permalink:"/test-integrate-infura/services/reference/linea/json-rpc-methods/debug/debug_traceblockbynumber"}},u={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Request",id:"request",level:3},{value:"Result",id:"result",level:3}];function f(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"debug_traceblockbyhash",children:"debug_traceBlockByHash"}),"\n",(0,t.jsx)(n.p,{children:"Returns tracing results by executing all transactions in the block specified by the block hash."}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"blockHash"}),": (string) ",(0,t.jsx)(n.em,{children:"[required]"})," hash of the block to trace."]}),"\n",(0,t.jsxs)(n.li,{children:["Optional tracing options object with the following fields:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tracer"}),": (string) ",(0,t.jsx)(n.em,{children:"[optional]"})," type of tracer. Supports ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/#calltracer",children:(0,t.jsx)(n.code,{children:"callTracer"})})," or\n",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/##prestatetracer",children:(0,t.jsx)(n.code,{children:"prestateTracer"})}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tracerConfig"}),": (object) ",(0,t.jsx)(n.em,{children:"[optional]"}),"  tracer configuration options:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"onlyTopCall"}),": (boolean) ",(0,t.jsx)(n.em,{children:"[optional]"})," when ",(0,t.jsx)(n.code,{children:"true"}),", will only trace the primary (top-level) call and not any\nsub-calls. It eliminates the additional processing for each call frame."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,t.jsxs)(n.p,{children:["Depending on the specified tracer type, returns a ",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/##calltracer",children:(0,t.jsx)(n.code,{children:"callTracer"})})," object or\n",(0,t.jsx)(n.a,{href:"/test-integrate-infura/services/#prestatetracer",children:(0,t.jsx)(n.code,{children:"prestateTracer"})})," object."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.h3,{id:"request",children:"Request"}),"\n",(0,t.jsxs)(c.A,{children:[(0,t.jsx)(s.A,{value:"cURL",label:"cURL",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://linea-goerli.infura.io/v3/<YOUR-API-KEY> \\\n-X POST \\\n-H "Content-Type: application/json" \\\n-d \'{"method":"debug_traceBlockByHash","params":["0xcc4e47e5f5e82c12ccd511e97f6994b4c4f95808778323ed5cf0a56640b0a815", {"tracer": "callTracer"}],"id":1,"jsonrpc":"2.0"}\'\n'})})}),(0,t.jsx)(s.A,{value:"WSS",label:"WSS",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'wscat -c wss://linea-goerli.infura.io/ws/v3/<YOUR-API-KEY> \\\n-x \'{"method":"debug_traceBlockByHash","params":["0xcc4e47e5f5e82c12ccd511e97f6994b4c4f95808778323ed5cf0a56640b0a815", {"tracer": "callTracer"}],"id":1,"jsonrpc":"2.0"}\'\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "result": [\n        {\n            "result": {\n                "calls": [\n                    {\n                        "from": "0xa0013f511c70f01c077a8f809e36b905a0d16c95",\n                        "gas": "0x1feac",\n                        "gasUsed": "0x9d5",\n                        "input": "0x0902f1ac",\n                        "output": "0x0000000000000000000000000000000000000000000000025aa314728293841e00000000000000000000000000000000000000000000000000000007a5cc7a260000000000000000000000000000000000000000000000000000000064b8c380",\n                        "to": "0x75a97d88ff19e07da99023ef0e35e35f51869de0",\n                        "type": "STATICCALL"\n                    },\n                    {\n                        "calls": [\n                            {\n                                "from": "0xf56dc6695cf1f5c364edebc7dc7077ac9b586068",\n                                "gas": "0x1bc78",\n                                "gasUsed": "0x6c8f",\n                                "input": "0x23b872dd000000000000000000000000c2aa3359b78bd4223f3434bcf6b0f3b5f5d71c8f00000000000000000000000075a97d88ff19e07da99023ef0e35e35f51869de00000000000000000000000000000000000000000000000000000000002faf080",\n                                "output": "0x0000000000000000000000000000000000000000000000000000000000000001",\n                                "to": "0x1c92ff898f7c34fc6ed884aec3859fd6c655c1f0",\n                                "type": "DELEGATECALL",\n                                "value": "0x0"\n                            }\n                        ],\n                        "from": "0xa0013f511c70f01c077a8f809e36b905a0d16c95",\n                        "gas": "0x1dfd5",\n                        "gasUsed": "0x8907",\n                        "input": "0x23b872dd000000000000000000000000c2aa3359b78bd4223f3434bcf6b0f3b5f5d71c8f00000000000000000000000075a97d88ff19e07da99023ef0e35e35f51869de00000000000000000000000000000000000000000000000000000000002faf080",\n                        "output": "0x0000000000000000000000000000000000000000000000000000000000000001",\n                        "to": "0xf56dc6695cf1f5c364edebc7dc7077ac9b586068",\n                        "type": "CALL",\n                        "value": "0x0"\n                    },\n                    ...\n                ],\n                "from": "0xc2aa3359b78bd4223f3434bcf6b0f3b5f5d71c8f",\n                "gas": "0x273bd",\n                "gasUsed": "0x22499",\n                "input": "0x38ed17390000000000000000000000000000000000000000000000000000000002faf08000000000000000000000000000000000000000000000000000e8291f2bdfeff000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000c2aa3359b78bd4223f3434bcf6b0f3b5f5d71c8f0000000000000000000000000000000000000000000000000000000064b8cdb80000000000000000000000000000000000000000000000000000000000000002000000000000000000000000f56dc6695cf1f5c364edebc7dc7077ac9b586068000000000000000000000000ed4ccdd10b8b97ba9555a6767613bfb98aaf72c4",\n                "output": "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000002faf08000000000000000000000000000000000000000000000000000e9c8a628b94ade",\n                "to": "0xa0013f511c70f01c077a8f809e36b905a0d16c95",\n                "type": "CALL",\n                "value": "0x0"\n            }\n        },\n        ...\n    ]\n}\n'})})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},19365:(e,n,r)=>{r.d(n,{A:()=>s});r(96540);var t=r(18215);const a={tabItem:"tabItem_Ymn6"};var c=r(74848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,s),hidden:r,children:n})}},11470:(e,n,r)=>{r.d(n,{A:()=>k});var t=r(96540),a=r(18215),c=r(23104),s=r(56347),l=r(205),o=r(57485),i=r(31682),u=r(70679);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function b(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const a=(0,s.W6)(),c=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(c),(0,t.useCallback)((e=>{if(!c)return;const n=new URLSearchParams(a.location.search);n.set(c,e),a.replace({...a.location,search:n.toString()})}),[c,a])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,c=f(e),[s,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:c}))),[i,d]=h({queryString:r,groupId:a}),[p,m]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,c]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&c.set(e)}),[r,c])]}({groupId:a}),x=(()=>{const e=i??p;return b({value:e,tabValues:c})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,t.useCallback)((e=>{if(!b({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,c]),tabValues:c}}var m=r(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(74848);function v(e){let{className:n,block:r,selectedValue:t,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,c.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(i(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:c}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...c,className:(0,a.A)("tabs__item",x.tabItem,c?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const c=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=c.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:c.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=p(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(96540);const a={},c=t.createContext(a);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);