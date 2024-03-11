"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=s,m=u["".concat(i,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={description:"Connect your dapp to existing, third-party Snaps.",sidebar_position:7},o="Connect to a Snap",l={unversionedId:"how-to/connect-to-a-snap",id:"how-to/connect-to-a-snap",title:"Connect to a Snap",description:"Connect your dapp to existing, third-party Snaps.",source:"@site/snaps/how-to/connect-to-a-snap.md",sourceDirName:"how-to",slug:"/how-to/connect-to-a-snap",permalink:"/lint-fix/snaps/how-to/connect-to-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/connect-to-a-snap.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Connect your dapp to existing, third-party Snaps.",sidebar_position:7},sidebar:"snapsSidebar",previous:{title:"Publish a Snap",permalink:"/lint-fix/snaps/how-to/publish-a-snap"},next:{title:"Reference",permalink:"/lint-fix/snaps/reference"}},i={},p=[{value:"Detect wallet",id:"detect-wallet",level:2},{value:"Detect MetaMask Flask",id:"detect-metamask-flask",level:3},{value:"Detect multiple wallets",id:"detect-multiple-wallets",level:3},{value:"Connect to a Snap",id:"connect-to-a-snap-1",level:2},{value:"User rejects the installation request",id:"user-rejects-the-installation-request",level:3},{value:"User approves the installation request",id:"user-approves-the-installation-request",level:3},{value:"Snap is already installed",id:"snap-is-already-installed",level:3},{value:"Determine whether a Snap is installed",id:"determine-whether-a-snap-is-installed",level:2},{value:"Reconnect to a Snap",id:"reconnect-to-a-snap",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"connect-to-a-snap"},"Connect to a Snap"),(0,s.kt)("p",null,"Dapps can connect to Snaps designed to communicate with dapps.\nDapps can use these Snaps to take advantage of new features enabled by Snaps.\nThis is possible because Snaps can expose a ",(0,s.kt)("a",{parentName:"p",href:"/lint-fix/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API"),"."),(0,s.kt)("h2",{id:"detect-wallet"},"Detect wallet"),(0,s.kt)("p",null,"To connect to a Snap, dapps must first detect MetaMask in the user's browser.\nSee the Wallet documentation on ",(0,s.kt)("a",{parentName:"p",href:"/wallet/how-to/detect-wallet"},"how to detect MetaMask"),"."),(0,s.kt)("h3",{id:"detect-metamask-flask"},"Detect MetaMask Flask"),(0,s.kt)("p",null,"If you want to connect to Snap in ",(0,s.kt)("a",{parentName:"p",href:"/lint-fix/snaps/get-started/install-flask"},"MetaMask Flask"),", you first need\nto know whether the user has Flask installed."),(0,s.kt)("p",null,"The following example uses the\n",(0,s.kt)("a",{parentName:"p",href:"https://npmjs.com/package/@metamask/detect-provider"},(0,s.kt)("inlineCode",{parentName:"a"},"@metamask/detect-provider"))," package to get\nthe provider object from MetaMask first:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import detectEthereumProvider from '@metamask/detect-provider';\n\n// This resolves to the value of window.ethereum or null\nconst provider = await detectEthereumProvider();\n\n// web3_clientVersion returns the installed MetaMask version as a string\nconst isFlask = (\n  await provider?.request({ method: 'web3_clientVersion' })\n)?.includes('flask');\n\nif (provider && isFlask) {\n  console.log('MetaMask Flask successfully detected!');\n\n  // Now you can use Snaps!\n} else {\n  console.error('Please install MetaMask Flask!', error);\n}\n")),(0,s.kt)("h3",{id:"detect-multiple-wallets"},"Detect multiple wallets"),(0,s.kt)("p",null,"See the following resources for detecting multiple wallets (via\n",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),") in the user's browser:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/wallet/how-to/detect-wallet/multiple-wallets"},"How to detect multiple wallets")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/Montoya/snap-connect-example"},"Connect to Snap via EIP-6963 example"))),(0,s.kt)("h2",{id:"connect-to-a-snap-1"},"Connect to a Snap"),(0,s.kt)("p",null,"Connect to a Snap by calling the ",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"\nmethod from your dapp.\nIf a user doesn't have the Snap installed in their MetaMask wallet, MetaMask prompts the user to\ninstall the Snap."),(0,s.kt)("p",null,"The following are different possible outcomes from calling ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps"),"."),(0,s.kt)("h3",{id:"user-rejects-the-installation-request"},"User rejects the installation request"),(0,s.kt)("p",null,"If the user rejects the installation request, the call to ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," throws the following error:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{ "code": 4001, "message": "User rejected the request." }\n')),(0,s.kt)("h3",{id:"user-approves-the-installation-request"},"User approves the installation request"),(0,s.kt)("p",null,"If the user approves the installation request, the call to ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," returns an object\nwith the following shape:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SNAP_ID": {\n        "blocked": false,\n        "enabled": true,\n        "id": "SNAP_ID",\n        "initialPermissions": {\n            // ...all the permissions in the Snap\'s manifest\n        },\n        "version": "SNAP_VERSION"\n    }\n}\n')),(0,s.kt)("h3",{id:"snap-is-already-installed"},"Snap is already installed"),(0,s.kt)("p",null,"If the Snap is already installed, the call to ",(0,s.kt)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," returns the same object as for a\nnew installation of the Snap, but the user won't see a confirmation pop-up asking them to install the Snap."),(0,s.kt)("admonition",{title:"important",type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Snaps are installed into the MetaMask instance of each user.\nIf a Snap stores data, that data is specific to that user's MetaMask instance.\nHowever, that data can be shared with multiple dapps.\nDo not assume that data stored by a Snap is unique to your dapp. ")),(0,s.kt)("h2",{id:"determine-whether-a-snap-is-installed"},"Determine whether a Snap is installed"),(0,s.kt)("p",null,"Determine whether a Snap is installed by calling the\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_getsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_getSnaps"))," method from your dapp.\nThis method returns a list of only those Snaps that are connected to your current dapp."),(0,s.kt)("p",null,"The response is in the form of an object keyed by the ID of the Snap.\nEach value is a nested object with additional information, such as the version of the Snap that is installed."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},(0,s.kt)("inlineCode",{parentName:"p"},"wallet_getSnaps")," only returns the Snaps that are connected to your dapp.\nThe user may have other Snaps installed that your dapp is not aware of. ")),(0,s.kt)("p",null,"The following example verifies whether a Snap with ID ",(0,s.kt)("inlineCode",{parentName:"p"},"npm:super-snap")," is installed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"const snaps = await ethereum.request({\n  method: 'wallet_getSnaps'\n});\n\nconst isMySnapInstalled = Object.keys(snaps).includes('npm:super-snap');\n")),(0,s.kt)("p",null,"If you need to work with a specific version of a Snap, you can instead iterate over\n",(0,s.kt)("inlineCode",{parentName:"p"},"Object.values(snaps)"),", and use the ",(0,s.kt)("inlineCode",{parentName:"p"},"id")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"version")," properties inside each object to determine\nwhether the Snap is installed with the required version."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"A user cannot install multiple versions of a Snap into a single MetaMask instance.\nYou should avoid requiring a specific version of a Snap unless you absolutely need to.\nIn most cases, you should request the latest version of the Snap and architect your dapp to be able\nto work with that version.")),(0,s.kt)("h2",{id:"reconnect-to-a-snap"},"Reconnect to a Snap"),(0,s.kt)("p",null,"At any time, a user can open their MetaMask Snaps settings menu and see all the dapps connected to a Snap.\nFrom that menu they can revoke a dapp connection.\nIf your dapp loses the connection to a Snap, you can reconnect by calling\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_requestsnaps"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),".\nSince the Snap is already installed, this returns a success response without MetaMask showing a pop-up.\nHowever, if the user has disabled the Snap, the response has ",(0,s.kt)("inlineCode",{parentName:"p"},"enabled")," set to ",(0,s.kt)("inlineCode",{parentName:"p"},"false")," for your ",(0,s.kt)("inlineCode",{parentName:"p"},"SNAP_ID"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "SNAP_ID": {\n        "blocked": false,\n        "enabled": false,\n        "id": "SNAP_ID",\n        "initialPermissions": {\n            // ...all the permissions in the Snap\'s manifest\n        },\n        "version": "SNAP_VERSION"\n    }\n}\n')))}d.isMDXComponent=!0}}]);