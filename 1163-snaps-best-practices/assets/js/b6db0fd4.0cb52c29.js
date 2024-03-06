"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2176],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,k=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),s=a(12466),c=a(70989),i=a(72389);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){let{className:t,block:a,selectedValue:c,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==c&&(d(t),i(n))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:m},s,{className:(0,o.Z)("tabs__item",l.tabItem,s?.className,{"tabs__item--active":c===t})}),a??t)})))}function u(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,c.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",l.tabList)},r.createElement(p,(0,n.Z)({},e,t)),r.createElement(u,(0,n.Z)({},e,t)))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>d});var n=a(67294),r=a(16550),o=a(91980),s=a(67392),c=a(50012);function i(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function l(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??i(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:a}=e;const s=(0,r.k6)(),c=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(c),(0,n.useCallback)((e=>{if(!c)return;const t=new URLSearchParams(s.location.search);t.set(c,e),s.replace({...s.location,search:t.toString()})}),[c,s])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=l(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[d,m]=u({queryString:a,groupId:r}),[k,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),f=(()=>{const e=d??k;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),m(e),h(e)}),[m,h,o]),tabValues:o}}},43314:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),s=a(85162);const c={sidebar_label:"React",sidebar_position:1,description:"Set up the SDK in your React dapp.",tags:["JavaScript SDK"]},i="Use MetaMask SDK with React",l={unversionedId:"how-to/use-sdk/javascript/react/index",id:"how-to/use-sdk/javascript/react/index",title:"Use MetaMask SDK with React",description:"Set up the SDK in your React dapp.",source:"@site/wallet/how-to/use-sdk/javascript/react/index.md",sourceDirName:"how-to/use-sdk/javascript/react",slug:"/how-to/use-sdk/javascript/react/",permalink:"/1163-snaps-best-practices/wallet/how-to/use-sdk/javascript/react/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/javascript/react/index.md",tags:[{label:"JavaScript SDK",permalink:"/1163-snaps-best-practices/wallet/tags/java-script-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"React",sidebar_position:1,description:"Set up the SDK in your React dapp.",tags:["JavaScript SDK"]},sidebar:"walletSidebar",previous:{title:"JavaScript",permalink:"/1163-snaps-best-practices/wallet/how-to/use-sdk/javascript/"},next:{title:"React UI",permalink:"/1163-snaps-best-practices/wallet/how-to/use-sdk/javascript/react/react-ui"}},p={},u=[{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Wrap your project with MetaMaskProvider",id:"3-wrap-your-project-with-metamaskprovider",level:3},{value:"4. Use the SDK",id:"4-use-the-sdk",level:3},{value:"Example",id:"example",level:2}],d={toc:u},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-metamask-sdk-with-react"},"Use MetaMask SDK with React"),(0,r.kt)("p",null,"Import ",(0,r.kt)("a",{parentName:"p",href:"/1163-snaps-best-practices/wallet/concepts/sdk/"},"MetaMask SDK")," into your React dapp to enable your users to\neasily connect to the MetaMask browser extension and MetaMask Mobile.\nThe SDK for React has the ",(0,r.kt)("a",{parentName:"p",href:"/1163-snaps-best-practices/wallet/how-to/use-sdk/javascript/#prerequisites"},"same prerequisites")," as for standard JavaScript."),(0,r.kt)("admonition",{title:"React UI",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This page provides instructions for using the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"@metamask/sdk-react")," package.\nAlternatively, you can use the ",(0,r.kt)("a",{parentName:"p",href:"/1163-snaps-best-practices/wallet/how-to/use-sdk/javascript/react/react-ui"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/sdk-react-ui"))," package to easily use\n",(0,r.kt)("a",{parentName:"p",href:"https://wagmi.sh/"},"wagmi")," hooks and a pre-styled UI button component for connecting to MetaMask.")),(0,r.kt)("h2",{id:"steps"},"Steps"),(0,r.kt)("h3",{id:"1-install-the-sdk"},"1. Install the SDK"),(0,r.kt)("p",null,"In your project directory, install the SDK using Yarn or npm:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @metamask/sdk-react\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @metamask/sdk-react\n")),(0,r.kt)("h3",{id:"2-import-the-sdk"},"2. Import the SDK"),(0,r.kt)("p",null,"In your project script, add the following to import the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { MetaMaskProvider } from "@metamask/sdk-react";\n')),(0,r.kt)("h3",{id:"3-wrap-your-project-with-metamaskprovider"},"3. Wrap your project with MetaMaskProvider"),(0,r.kt)("p",null,"Wrap your root component in a ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskProvider"),".\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskProvider } from "@metamask/sdk-react";\n\nconst root = ReactDOM.createRoot(\n    document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n    <React.StrictMode>\n        <MetaMaskProvider\n            debug={false}\n            sdkOptions={{\n                dappMetadata: {\n                    name: "Example React Dapp",\n                    url: window.location.href,\n                },\n                // Other options\n            }}\n        >\n            <App />\n        </MetaMaskProvider>\n    </React.StrictMode>\n);\n')),(0,r.kt)("p",null,"When initializing ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskProvider"),", set ",(0,r.kt)("inlineCode",{parentName:"p"},"debug")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to activate debug mode.\nFor the full list of options you can set for ",(0,r.kt)("inlineCode",{parentName:"p"},"sdkOptions"),", see the\n",(0,r.kt)("a",{parentName:"p",href:"/1163-snaps-best-practices/wallet/reference/sdk-js-options"},"JavaScript SDK options reference"),"."),(0,r.kt)("admonition",{title:"Important SDK options",type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/1163-snaps-best-practices/wallet/reference/sdk-js-options#dappmetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"dappMetadata"))," to display information\nabout your dapp in the MetaMask connection modal."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/1163-snaps-best-practices/wallet/reference/sdk-js-options#modals"},(0,r.kt)("inlineCode",{parentName:"a"},"modals"))," to ",(0,r.kt)("a",{parentName:"li",href:"/1163-snaps-best-practices/wallet/how-to/display/custom-modals"},"customize the logic and UI of\nthe displayed modals"),"."),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"/1163-snaps-best-practices/wallet/reference/sdk-js-options#infuraapikey"},(0,r.kt)("inlineCode",{parentName:"a"},"infuraAPIKey"))," to\n",(0,r.kt)("a",{parentName:"li",href:"/1163-snaps-best-practices/wallet/how-to/make-read-only-requests"},"make read-only RPC requests")," from your dapp."))),(0,r.kt)("h3",{id:"4-use-the-sdk"},"4. Use the SDK"),(0,r.kt)("p",null,"Use the SDK by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSDK")," hook in your React components.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { useSDK } from "@metamask/sdk-react";\nimport React, { useState } from "react";\n\nexport const App = () => {\n    const [account, setAccount] = useState<string>();\n    const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n    const connect = async () => {\n        try {\n            const accounts = await sdk?.connect();\n            setAccount(accounts?.[0]);\n        } catch (err) {\n            console.warn("failed to connect..", err);\n        }\n    };\n\n    return (\n        <div className="App">\n            <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n                Connect\n            </button>\n            {connected && (\n                <div>\n                    <>\n                        {chainId && `Connected chain: ${chainId}`}\n                        <p></p>\n                        {account && `Connected account: ${account}`}\n                    </>\n                </div>\n            )}\n        </div>\n    );\n};\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,"useSDK return values"),(0,r.kt)("p",null,(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sdk"),": Main SDK object that facilitates connection and actions related to MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connected"),": Boolean value indicating if the dapp is connected to MetaMask."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"connecting"),": Boolean value indicating if a connection is in process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"provider"),": The provider object which can be used for lower-level interactions with the Ethereum blockchain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"chainId"),": Currently connected blockchain's chain ID.")))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sdk.connect()")," method initiates a connection to MetaMask and returns an array of connected accounts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const connect = async () => {\n    try {\n        const accounts = await sdk?.connect();\n        setAccount(accounts?.[0]);\n    } catch (err) {\n        console.warn(`failed to connect..`, err);\n    }\n};\n")),(0,r.kt)("p",null,"You can also ",(0,r.kt)("a",{parentName:"p",href:"/1163-snaps-best-practices/wallet/how-to/sign-data/connect-and-sign"},"use the ",(0,r.kt)("inlineCode",{parentName:"a"},"connectAndSign")," method")," to\nconnect to MetaMask and sign data in a single interaction."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"You can copy the full React example to get started:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"Root component",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="index.tsx"',title:'"index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom/client";\nimport App from "./App";\nimport { MetaMaskProvider } from "@metamask/sdk-react";\n\nconst root = ReactDOM.createRoot(\n    document.getElementById("root") as HTMLElement\n);\n\nroot.render(\n    <React.StrictMode>\n        <MetaMaskProvider\n            debug={false}\n            sdkOptions={{\n                dappMetadata: {\n                    name: "Example React Dapp",\n                    url: window.location.href,\n                },\n                // Other options\n            }}\n        >\n            <App />\n        </MetaMaskProvider>\n    </React.StrictMode>\n);\n'))),(0,r.kt)(s.Z,{value:"React component",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { useSDK } from "@metamask/sdk-react";\nimport React from "react";\n\nexport const App = () => {\n    const [account, setAccount] = useState<string>();\n    const { sdk, connected, connecting, provider, chainId } = useSDK();\n\n    const connect = async () => {\n        try {\n            const accounts = await sdk?.connect();\n            setAccount(accounts?.[0]);\n        } catch (err) {\n            console.warn("failed to connect..", err);\n        }\n    };\n\n    return (\n        <div className="App">\n            <button style={{ padding: 10, margin: 10 }} onClick={connect}>\n                Connect\n            </button>\n            {connected && (\n                <div>\n                    <>\n                        {chainId && "Connected chain: ${chainId}"}\n                        <p></p>\n                        {account && "Connected account: ${account}"}\n                    </>\n                </div>\n            )}\n        </div>\n    );\n};\n')))),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/create-react-app"},"example React dapp"),"\nin the JavaScript SDK GitHub repository for more information."))}k.isMDXComponent=!0}}]);