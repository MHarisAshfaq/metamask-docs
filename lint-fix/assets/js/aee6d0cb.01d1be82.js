"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2044],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),l=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),p=l(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,i(i({ref:e},u),{},{components:a})):n.createElement(h,i({ref:e},u))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c[p]="string"==typeof t?t:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10426:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:3,sidebar_label:"Interact with smart contracts",description:"Interact with smart contracts in your Unity game.",tags:["Unity SDK"]},i="Interact with smart contracts in Unity",c={unversionedId:"how-to/use-sdk/gaming/unity/smart-contracts/index",id:"how-to/use-sdk/gaming/unity/smart-contracts/index",title:"Interact with smart contracts in Unity",description:"Interact with smart contracts in your Unity game.",source:"@site/wallet/how-to/use-sdk/gaming/unity/smart-contracts/index.md",sourceDirName:"how-to/use-sdk/gaming/unity/smart-contracts",slug:"/how-to/use-sdk/gaming/unity/smart-contracts/",permalink:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/smart-contracts/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/gaming/unity/smart-contracts/index.md",tags:[{label:"Unity SDK",permalink:"/lint-fix/wallet/tags/unity-sdk"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Interact with smart contracts",description:"Interact with smart contracts in your Unity game.",tags:["Unity SDK"]},sidebar:"walletSidebar",previous:{title:"Set up Infura",permalink:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/infura"},next:{title:"Contract interface",permalink:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface"}},s={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Generate contract code",id:"generate-contract-code",level:2},{value:"Use the contract",id:"use-the-contract",level:2},{value:"Use contract templates",id:"use-contract-templates",level:3},{value:"Advanced topics",id:"advanced-topics",level:2}],u={toc:l},p="wrapper";function d(t){let{components:e,...o}=t;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interact-with-smart-contracts-in-unity"},"Interact with smart contracts in Unity"),(0,r.kt)("p",null,"You can interact with smart contracts from your Unity game with MetaMask SDK installed."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/"},"MetaMask SDK set up")," in your Unity game"),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"/lint-fix/wallet/concepts/smart-contracts#contract-abi"},"contract ABI")," JSON file or\n",(0,r.kt)("a",{parentName:"li",href:"https://hardhat.org/hardhat-runner/docs/advanced/artifacts#compilation-artifacts"},"Hardhat artifact"),"\nJSON file")),(0,r.kt)("h2",{id:"generate-contract-code"},"Generate contract code"),(0,r.kt)("p",null,"You can use the MetaMask Unity contract code generator to generate\n",(0,r.kt)("a",{parentName:"p",href:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface"},"contract interface")," files.\nThe code generator automatically generates backed types for all contract interfaces to be used by\nthe ",(0,r.kt)("a",{parentName:"p",href:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory#backed-type-contract-factory"},"contract factory"),"."),(0,r.kt)("p",null,"In your Unity editor, go to ",(0,r.kt)("strong",{parentName:"p"},"Tools > MetaMask > Contract ABI Converter"),".\nA new dialog box opens:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dialog",src:a(27274).Z,width:"440",height:"612"}))),(0,r.kt)("p",null,"Paste your contract ABI JSON file or Hardhat artifact JSON file.\nIf you plan to deploy your contract, you must provide a Hardhat artifact, since this\nhas the required ",(0,r.kt)("a",{parentName:"p",href:"/lint-fix/wallet/concepts/smart-contracts#contract-bytecode"},"contract bytecode")," needed for deployment."),(0,r.kt)("p",null,"You can also specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"Root Namespace")," for the generated contract code, with the default value being ",(0,r.kt)("inlineCode",{parentName:"p"},"Contracts"),". Ensure that you include ",(0,r.kt)("inlineCode",{parentName:"p"},"using Contracts"),"; at the beginning of your scripts before using the generated code."),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},"Convert"),", which opens a save dialog box. Then, select a folder to save the generated code files to, somewhere inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Assets")," folder."),(0,r.kt)("h2",{id:"use-the-contract"},"Use the contract"),(0,r.kt)("p",null,"After generating the contract code, you can use the contract using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"Contract.Attach<T>(...)")," function."),(0,r.kt)("p",null,"This function takes a type ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," which must be the interface type of the contract to use.\nThis function returns that type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,r.kt)("p",null,"You must provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," string the contract should be loaded from, and the\n",(0,r.kt)("a",{parentName:"p",href:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"},"provider")," to use to interact with the contract.\nUsually, the provider is ",(0,r.kt)("inlineCode",{parentName:"p"},"MetaMaskUnity.Instance.Wallet"),"."),(0,r.kt)("p",null,"The following is an example of using a contract:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public async void Start()\n{\n    var metaMask = MetaMaskUnity.Instance.Wallet;\n    var address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";\n    \n    ERC20 usdc = Contract.Attach<ERC20>(address, metaMask);\n}\n')),(0,r.kt)("p",null,"Once you have an instance of your contract interface of type ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," (in this example, ",(0,r.kt)("inlineCode",{parentName:"p"},"ERC20"),"), you may\ninvoke any function inside the interface type.\nFor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public async void Start()\n{\n    // ... setup ...\n\n    var balance = await usdc.BalanceOf(metaMask.SelectedAddress);\n    Debug.Log(balance);\n}\n")),(0,r.kt)("h3",{id:"use-contract-templates"},"Use contract templates"),(0,r.kt)("p",null,"The MetaMask Unity SDK offers several contract templates that you can create and manage inside the\nUnity editor.\nThese templates are scriptable objects, so you can configure them once inside the editor and use\nthem throughout your scripts.\nThese templates automatically perform the ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract.Attach")," function for you and automatically\nswitch contract addresses when the network changes."),(0,r.kt)("p",null,"You can create a new template by going to ",(0,r.kt)("strong",{parentName:"p"},"Assets > Create > MetaMask > Contract Templates")," and\nselecting one of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ERC20")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ERC721")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ERC1155"))),(0,r.kt)("p",null,"Before using the contract template, configure the contract address to use for each chain:"),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"empty template",src:a(70448).Z,width:"433",height:"218"}))),(0,r.kt)("p",null,"Select ",(0,r.kt)("strong",{parentName:"p"},"+")," to add a new address/chain pair.\nWhen adding a new address, if you don't see your desired blockchain listed, you can modify the\n",(0,r.kt)("inlineCode",{parentName:"p"},"ScriptableContract.ChainId")," enum to include your chain and chain ID."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"full template",src:a(41396).Z,width:"435",height:"342"}))),(0,r.kt)("p",null,"Once configured, you can use this scriptable object as a variable inside your scripts.\nThe contract template has the same interface and usage as if you used ",(0,r.kt)("inlineCode",{parentName:"p"},"Contract.Attach"),", but the\nsetup and network switching is done for you."),(0,r.kt)("h2",{id:"advanced-topics"},"Advanced topics"),(0,r.kt)("p",null,"To learn more about and customize your contract interactions using the Unity SDK, see the following topics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-interface"},"Contract interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-factory"},"Contract factory")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-proxy-class"},"Contract proxy class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/lint-fix/wallet/how-to/use-sdk/gaming/unity/smart-contracts/contract-provider"},"Contract provider"))))}d.isMDXComponent=!0},27274:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/contract-abi-converter-dialog-56376f7101d15948e9e7f7687f904d75.png"},70448:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/unity-empty-template-a5d151ef642b84b3d7618e5099b9dda2.png"},41396:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/unity-example-template-3e25ec341358849753f8f3462bb88b76.png"}}]);