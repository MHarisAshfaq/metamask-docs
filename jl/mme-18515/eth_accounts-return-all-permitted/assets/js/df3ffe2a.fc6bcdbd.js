"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3660],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?o.createElement(b,i(i({ref:t},p),{},{components:r})):o.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4337:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_label:"Mobile",sidebar_position:3},i="Use MetaMask SDK with mobile dapps",l={unversionedId:"how-to/use-sdk/mobile/index",id:"how-to/use-sdk/mobile/index",title:"Use MetaMask SDK with mobile dapps",description:"You can import MetaMask SDK into your mobile dapp to enable your users to easily connect with their",source:"@site/wallet/how-to/use-sdk/mobile/index.md",sourceDirName:"how-to/use-sdk/mobile",slug:"/how-to/use-sdk/mobile/",permalink:"/jl/mme-18515/eth_accounts-return-all-permitted/wallet/how-to/use-sdk/mobile/",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Mobile",sidebar_position:3},sidebar:"walletSidebar",previous:{title:"Unreal Engine (coming soon)",permalink:"/jl/mme-18515/eth_accounts-return-all-permitted/wallet/how-to/use-sdk/gaming/unreal-engine"},next:{title:"Native iOS",permalink:"/jl/mme-18515/eth_accounts-return-all-permitted/wallet/how-to/use-sdk/mobile/ios"}},s={},c=[{value:"How it works",id:"how-it-works",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-metamask-sdk-with-mobile-dapps"},"Use MetaMask SDK with mobile dapps"),(0,n.kt)("p",null,"You can import MetaMask SDK into your mobile dapp to enable your users to easily connect with their\nMetaMask Mobile wallet.\nSee the instructions for the following mobile platforms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/jl/mme-18515/eth_accounts-return-all-permitted/wallet/how-to/use-sdk/javascript/react-native"},"React Native")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/jl/mme-18515/eth_accounts-return-all-permitted/wallet/how-to/use-sdk/mobile/ios"},"Native iOS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/jl/mme-18515/eth_accounts-return-all-permitted/wallet/how-to/use-sdk/mobile/android"},"Native Android")," (coming soon)")),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"When a user accesses your mobile dapp, the SDK automatically deeplinks to MetaMask Mobile (or if the\nuser doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,n.kt)("p",{align:"center"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SDK mobile browser example",src:r(9063).Z,width:"334",height:"696"}))))}u.isMDXComponent=!0},9063:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/sdk-mobile-browser-3a2065bba036d5910206697edcd2a298.gif"}}]);