"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6594],{22080:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(74848),i=t(28453);const s={description:"Connect to MetaMask via EIP-6963.",sidebar_position:1,toc_max_heading_level:4},o="Connect to MetaMask",c={id:"how-to/connect/index",title:"Connect to MetaMask",description:"Connect to MetaMask via EIP-6963.",source:"@site/wallet/how-to/connect/index.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/",permalink:"/wallet/how-to/connect/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Connect to MetaMask via EIP-6963.",sidebar_position:1,toc_max_heading_level:4},sidebar:"walletSidebar",previous:{title:"How to",permalink:"/wallet/how-to"},next:{title:"Access a user's accounts",permalink:"/wallet/how-to/connect/access-accounts"}},a={},d=[{value:"Connect to MetaMask using third-party libraries",id:"connect-to-metamask-using-third-party-libraries",level:2},{value:"Connect to MetaMask directly using Vite",id:"connect-to-metamask-directly-using-vite",level:2},{value:"Vanilla TypeScript",id:"vanilla-typescript",level:3},{value:"1. Create a project",id:"1-create-a-project",level:4},{value:"2. Set up the project",id:"2-set-up-the-project",level:4},{value:"3. Update <code>main.ts</code>",id:"3-update-maints",level:4},{value:"4. Connect to wallets",id:"4-connect-to-wallets",level:4},{value:"5. View the project",id:"5-view-the-project",level:4},{value:"Example",id:"example",level:4},{value:"React TypeScript",id:"react-typescript",level:3},{value:"1. Create a project",id:"1-create-a-project-1",level:4},{value:"2. Set up the project",id:"2-set-up-the-project-1",level:4},{value:"3. Update <code>App.tsx</code>",id:"3-update-apptsx",level:4},{value:"4. Detect and connect to wallets",id:"4-detect-and-connect-to-wallets",level:4},{value:"5. Add React hooks",id:"5-add-react-hooks",level:4},{value:"6. Create utility functions",id:"6-create-utility-functions",level:4},{value:"Example",id:"example-1",level:4},{value:"Next steps",id:"next-steps",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"connect-to-metamask",children:"Connect to MetaMask"}),"\n",(0,r.jsxs)(n.p,{children:["You can connect your dapp to users' MetaMask wallets by detecting MetaMask in their browsers and\nconnecting to their accounts.\nThis page provides instructions for connecting to MetaMask using the wallet detection mechanism\nintroduced by ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-6963",children:"EIP-6963"}),".\nThis approach allows you to detect multiple installed wallets and connect to them without conflicts."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Learn more about EIP-6963 in ",(0,r.jsx)(n.a,{href:"/wallet/concepts/wallet-interoperability",children:"Wallet interoperability"}),"."]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To connect to MetaMask without using EIP-6963, see the ",(0,r.jsx)(n.a,{href:"/wallet/tutorials/javascript-dapp-simple",children:"Create a simple dapp"})," tutorial."]})}),"\n",(0,r.jsxs)(n.p,{children:["You can connect to MetaMask ",(0,r.jsx)(n.a,{href:"#connect-to-metamask-using-third-party-libraries",children:"using third-party libraries"}),"\nor ",(0,r.jsx)(n.a,{href:"#connect-to-metamask-directly-using-vite",children:"directly using Vite"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"connect-to-metamask-using-third-party-libraries",children:"Connect to MetaMask using third-party libraries"}),"\n",(0,r.jsx)(n.p,{children:"You can connect to MetaMask using the following third-party libraries that support EIP-6963:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://wagmi.sh",children:"Wagmi 2+"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.walletconnect.com/web3modal/about",children:"Web3Modal 3+"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/wevm/mipd",children:"MIPD Store"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://www.rainbowkit.com",children:"RainbowKit"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://onboard.blocknative.com",children:"Web3-Onboard"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"connect-to-metamask-directly-using-vite",children:"Connect to MetaMask directly using Vite"}),"\n",(0,r.jsxs)(n.p,{children:["To connect to MetaMask directly, we recommend implementing support for EIP-6963 using the\n",(0,r.jsx)(n.a,{href:"https://vitejs.dev/",children:"Vite"})," build tool with ",(0,r.jsx)(n.a,{href:"#vanilla-typescript",children:"vanilla TypeScript"})," or\n",(0,r.jsx)(n.a,{href:"#react-typescript",children:"React TypeScript"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"vanilla-typescript",children:"Vanilla TypeScript"}),"\n",(0,r.jsx)(n.p,{children:"Follow these steps for creating a vanilla TypeScript project to connect to MetaMask:"}),"\n",(0,r.jsx)(n.h4,{id:"1-create-a-project",children:"1. Create a project"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://v3.vitejs.dev/guide/#scaffolding-your-first-vite-project",children:"Create a Vite project"})," using the\ntemplate for vanilla TypeScript:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm create vite@latest vanilla-ts-6963 -- --template vanilla-ts\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2-set-up-the-project",children:"2. Set up the project"}),"\n",(0,r.jsxs)(n.p,{children:["In your Vite project, update ",(0,r.jsx)(n.code,{children:"src/vite-env.d.ts"})," with the\n",(0,r.jsx)(n.a,{href:"/wallet/concepts/wallet-interoperability#eip-6963-interfaces",children:"EIP-6963 interfaces"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="vite-env.d.ts"',children:'/// <reference types="vite/client" />\n\ninterface EIP6963ProviderInfo {\n  rdns: string\n  uuid: string\n  name: string\n  icon: string\n}\n\ninterface EIP6963ProviderDetail {\n  info: EIP6963ProviderInfo\n  provider: EIP1193Provider\n}\n\ntype EIP6963AnnounceProviderEvent = {\n  detail: {\n    info: EIP6963ProviderInfo,\n    provider: Readonly<EIP1193Provider>,\n  }\n}\n\ninterface EIP1193Provider {\n  isStatus?: boolean\n  host?: string\n  path?: string\n  sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["In addition to the EIP-6963 interfaces, you need a ",(0,r.jsx)(n.code,{children:"EIP1193Provider"})," interface (defined by\n",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:"EIP-1193"}),"), which is the foundational structure for\nEthereum wallet providers, and represents the essential properties and methods for interacting with\nMetaMask and other Ethereum wallets in JavaScript."]})}),"\n",(0,r.jsxs)(n.h4,{id:"3-update-maints",children:["3. Update ",(0,r.jsx)(n.code,{children:"main.ts"})]}),"\n",(0,r.jsxs)(n.p,{children:["Update ",(0,r.jsx)(n.code,{children:"src/main.ts"})," with the following code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="main.ts"',children:'import "./style.css"\nimport { listProviders } from "./providers.ts"\n\ndocument.querySelector<HTMLDivElement>(\'#app\')!.innerHTML = `\n  <div>\n    <div id="providerButtons"></div>\n  </div>\n`\n\nlistProviders(document.querySelector<HTMLDivElement>("#providerButtons")!)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"querySelector"})," finds and returns the first HTML element that matches the CSS selector ",(0,r.jsx)(n.code,{children:"app"}),",\nand sets its ",(0,r.jsx)(n.code,{children:"innerHTML"}),".\nYou need to include a basic HTML structure with an inner ",(0,r.jsx)(n.code,{children:"div"})," to inject a list of buttons, each\nrepresenting a detected wallet provider."]}),"\n",(0,r.jsxs)(n.p,{children:["You'll create the ",(0,r.jsx)(n.code,{children:"listProviders"})," function in the next step, and pass an argument which represents\nthe ",(0,r.jsx)(n.code,{children:"div"})," element."]}),"\n",(0,r.jsx)(n.h4,{id:"4-connect-to-wallets",children:"4. Connect to wallets"}),"\n",(0,r.jsxs)(n.p,{children:["Create a file ",(0,r.jsx)(n.code,{children:"src/providers.ts"})," with the following code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="providers.ts"',children:'declare global {\n  interface WindowEventMap {\n    "eip6963:announceProvider": CustomEvent\n  }\n}\n\n// Connect to the selected provider using eth_requestAccounts.\nconst connectWithProvider = async (wallet: EIP6963AnnounceProviderEvent["detail"]) => {\n  try {\n    await wallet.provider\n      .request({ method: "eth_requestAccounts" })\n  } catch (error) {\n    console.error("Failed to connect to provider:", error)\n  }\n}\n\n// Display detected providers as connect buttons.\nexport function listProviders(element: HTMLDivElement) {\n  window.addEventListener("eip6963:announceProvider",\n    (event: EIP6963AnnounceProviderEvent) => {\n      const button = document.createElement("button")\n    \n      button.innerHTML = `\n        <img src="${event.detail.info.icon}" alt="${event.detail.info.name}" />\n        <div>${event.detail.info.name}</div>\n      `\n    \n      // Call connectWithProvider when a user selects the button.\n      button.onclick = () => connectWithProvider(event.detail)\n      element.appendChild(button)\n    }\n  )\n\n  // Notify event listeners and other parts of the dapp that a provider is requested.\n  window.dispatchEvent(new Event("eip6963:requestProvider"))\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"connectWithProvider"})," function connects the user to the selected provider using\n",(0,r.jsx)(n.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,r.jsx)(n.code,{children:"eth_requestAccounts"})}),".\nThe ",(0,r.jsx)(n.code,{children:"wallet"})," object is passed as an argument to the function, indicating the argument type."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"listProviders"})," function uses a simplified approach.\nInstead of mapping and joining an entire block of HTML, it directly passes the ",(0,r.jsx)(n.code,{children:"event.detail"})," object\nto the ",(0,r.jsx)(n.code,{children:"connectWithProvider"})," function when a provider is announced."]}),"\n",(0,r.jsx)(n.h4,{id:"5-view-the-project",children:"5. View the project"}),"\n",(0,r.jsx)(n.p,{children:"Run the following command to view and test the Vite project in your browser:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run dev\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://github.com/MetaMask/vite-vanilla-ts-eip-6963",children:"vanilla TypeScript example"})," for more information.\nYou can clone the repository and run the example locally using ",(0,r.jsx)(n.code,{children:"npm i && npm run dev"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"react-typescript",children:"React TypeScript"}),"\n",(0,r.jsx)(n.p,{children:"Follow these steps for creating a React TypeScript project to connect to MetaMask:"}),"\n",(0,r.jsx)(n.h4,{id:"1-create-a-project-1",children:"1. Create a project"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://v3.vitejs.dev/guide/#scaffolding-your-first-vite-project",children:"Create a Vite project"})," using the\ntemplate for React TypeScript:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm create vite@latest react-ts-6963 -- --template react-ts\n"})}),"\n",(0,r.jsx)(n.h4,{id:"2-set-up-the-project-1",children:"2. Set up the project"}),"\n",(0,r.jsxs)(n.p,{children:["In your Vite project, update ",(0,r.jsx)(n.code,{children:"src/vite-env.d.ts"})," with the\n",(0,r.jsx)(n.a,{href:"/wallet/concepts/wallet-interoperability#eip-6963-interfaces",children:"EIP-6963 interfaces"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="vite-env.d.ts"',children:'/// <reference types="vite/client" />\n\ninterface EIP6963ProviderInfo {\n  rdns: string\n  uuid: string\n  name: string\n  icon: string\n}\n\ninterface EIP6963ProviderDetail {\n  info: EIP6963ProviderInfo\n  provider: EIP1193Provider\n}\n\ntype EIP6963AnnounceProviderEvent = {\n  detail: {\n    info: EIP6963ProviderInfo,\n    provider: Readonly<EIP1193Provider>,\n  }\n}\n\ninterface EIP1193Provider {\n  isStatus?: boolean\n  host?: string\n  path?: string\n  sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["In addition to the EIP-6963 interfaces, you need a ",(0,r.jsx)(n.code,{children:"EIP1193Provider"})," interface (defined by\n",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:"EIP-1193"}),"), which is the foundational structure for\nEthereum wallet providers, and represents the essential properties and methods for interacting with\nMetaMask and other Ethereum wallets in JavaScript."]})}),"\n",(0,r.jsxs)(n.h4,{id:"3-update-apptsx",children:["3. Update ",(0,r.jsx)(n.code,{children:"App.tsx"})]}),"\n",(0,r.jsxs)(n.p,{children:["Update ",(0,r.jsx)(n.code,{children:"src/App.tsx"})," with the following code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="App.tsx"',children:'import "./App.css"\nimport { DiscoverWalletProviders } from "./components/DiscoverWalletProviders"\n\nfunction App() {\n  return (\n    <DiscoverWalletProviders/>\n  )\n}\n\nexport default App\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This code renders the ",(0,r.jsx)(n.code,{children:"DiscoverWalletProviders"})," component that you'll create in the next step, which\ncontains the logic for detecting and connecting to wallet providers."]}),"\n",(0,r.jsx)(n.h4,{id:"4-detect-and-connect-to-wallets",children:"4. Detect and connect to wallets"}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.code,{children:"src/components"})," directory, create a component ",(0,r.jsx)(n.code,{children:"DiscoverWalletProviders.tsx"})," with the\nfollowing code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="DiscoverWalletProviders.tsx"',children:'import { useState } from "react"\nimport { useSyncProviders } from "../hooks/useSyncProviders"\nimport { formatAddress } from "~/utils"\n\nexport const DiscoverWalletProviders = () => {\n  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()\n  const [userAccount, setUserAccount] = useState<string>("")\n  const providers = useSyncProviders()\n\n  // Connect to the selected provider using eth_requestAccounts.\n  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {\n    try {\n      const accounts = await providerWithInfo.provider.request({ \n        method: "eth_requestAccounts"\n      })\n\n      setSelectedWallet(providerWithInfo)\n      setUserAccount(accounts?.[0])\n    } catch (error) {\n      console.error(error)\n    }\n  }\n\n  // Display detected providers as connect buttons.\n  return (\n    <>\n      <h2>Wallets Detected:</h2>\n      <div>\n        {\n          providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (\n            <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >\n              <img src={provider.info.icon} alt={provider.info.name} />\n              <div>{provider.info.name}</div>\n            </button>\n          )) :\n            <div>\n              No Announced Wallet Providers\n            </div>\n        }\n      </div>\n      <hr />\n      <h2>{userAccount ? "" : "No "}Wallet Selected</h2>\n      {userAccount &&\n        <div>\n          <div>\n            <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />\n            <div>{selectedWallet.info.name}</div>\n            <div>({formatAddress(userAccount)})</div>\n          </div>\n        </div>\n      }\n    </>\n  )\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"In this code:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"selectedWallet"})," is a state variable that holds the user's most recently selected wallet."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"userAccount"})," is a state variable that holds the user's connected wallet's address."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"useSyncProviders"})," is a custom hook that returns the providers array (wallets installed in the browser)."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"handleConnect"})," function takes a ",(0,r.jsx)(n.code,{children:"providerWithInfo"}),", which is an ",(0,r.jsx)(n.code,{children:"EIP6963ProviderDetail"})," object.\nThat object is used to request the user's accounts from the provider using\n",(0,r.jsx)(n.a,{href:"/wallet/reference/eth_requestaccounts",children:(0,r.jsx)(n.code,{children:"eth_requestAccounts"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["If the request succeeds, the ",(0,r.jsx)(n.code,{children:"selectedWallet"})," and ",(0,r.jsx)(n.code,{children:"userAccount"})," local state variables are set."]}),"\n",(0,r.jsx)(n.p,{children:"Then, the component maps over the providers array and renders a button for each detected provider."}),"\n",(0,r.jsxs)(n.p,{children:["Finally, if the ",(0,r.jsx)(n.code,{children:"userAccount"})," state variable is not empty, the selected wallet icon, name, and\naddress are displayed."]}),"\n",(0,r.jsx)(n.h4,{id:"5-add-react-hooks",children:"5. Add React hooks"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"src/hooks"})," directory and add a ",(0,r.jsx)(n.code,{children:"store.ts"})," file with the following code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="hooks/store.ts"',children:'declare global {\n  interface WindowEventMap {\n    "eip6963:announceProvider": CustomEvent\n  }\n}\n\n// An array to store the detected wallet providers.\nlet providers: EIP6963ProviderDetail[] = []\n\nexport const store = {\n  value: ()=> providers,\n  subscribe: (callback: ()=> void) => {\n    function onAnnouncement(event: EIP6963AnnounceProviderEvent){\n      if(providers.map(p => p.info.uuid).includes(event.detail.info.uuid)) return\n      providers = [...providers, event.detail]\n      callback()\n    }\n\n    // Listen for eip6963:announceProvider and call onAnnouncement when the event is triggered.\n    window.addEventListener("eip6963:announceProvider", onAnnouncement)\n    \n    // Dispatch the event, which triggers the event listener in the MetaMask wallet.\n    window.dispatchEvent(new Event("eip6963:requestProvider"))\n    \n    // Return a function that removes the event listern.\n    return () => window.removeEventListener("eip6963:announceProvider", onAnnouncement)\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Also, add a file ",(0,r.jsx)(n.code,{children:"useSyncProviders.ts"})," with the following code to the ",(0,r.jsx)(n.code,{children:"hooks"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="hooks/useSyncProviders.ts"',children:'import { useSyncExternalStore } from "react"\nimport { store } from "./store"\n\nexport const useSyncProviders = ()=> useSyncExternalStore(store.subscribe, store.value, store.value)\n'})}),"\n",(0,r.jsxs)(n.p,{children:["This hook allows you to subscribe to MetaMask events, read updated values, and update components.\nIt uses the ",(0,r.jsx)(n.code,{children:"store.value"})," and ",(0,r.jsx)(n.code,{children:"store.subscribe"})," methods defined in the ",(0,r.jsx)(n.code,{children:"store.ts"})," hook."]}),"\n",(0,r.jsx)(n.h4,{id:"6-create-utility-functions",children:"6. Create utility functions"}),"\n",(0,r.jsxs)(n.p,{children:["Create a ",(0,r.jsx)(n.code,{children:"src/utils"})," directory and add a file ",(0,r.jsx)(n.code,{children:"index.ts"})," with the following code:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:'title="index.ts"',children:"export const formatBalance = (rawBalance: string) => {\n  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)\n  return balance\n}\n\nexport const formatChainAsNum = (chainIdHex: string) => {\n  const chainIdNum = parseInt(chainIdHex)\n  return chainIdNum\n}\n\nexport const formatAddress = (addr: string) => {\n  const upperAfterLastTwo = addr.slice(0,2) + addr.slice(2)\n  return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This is a good place to store utility functions that you might need to reuse throughout your dapp.\nThis example only uses the ",(0,r.jsx)(n.code,{children:"formatAddress"})," function, but the others might be useful for other applications."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://github.com/MetaMask/vite-react-ts-eip-6963",children:"React TypeScript example"})," for more information.\nYou can clone the repository and run the example locally using ",(0,r.jsx)(n.code,{children:"npm i && npm run dev"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsx)(n.p,{children:"After connecting to MetaMask directly, you can:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../manage-networks",children:"Detect, add, and switch networks"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/wallet/how-to/send-transactions",children:"Send transactions"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/wallet/how-to/sign-data/",children:"Sign data"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"../display",children:"Display tokens, contract methods, and icons in MetaMask"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var r=t(96540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);