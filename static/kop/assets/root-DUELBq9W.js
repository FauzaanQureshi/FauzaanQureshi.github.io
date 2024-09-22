import{r as a,j as e}from"./jsx-runtime-IdAWuXfe.js";import{Q as p}from"./react-toastify.esm-CVN34uGn.js";import{j as g,_ as f,N as b,M as j,k as y,S as w}from"./components-CJTaBzP6.js";import{u as d,b as v,c as N,O as S}from"./index-ugiZISQl.js";import"./router-CdQiufPQ.js";/**
 * @remix-run/react v2.12.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let x="positions";function k({getKey:t,...s}){let{isSpaMode:l}=g(),r=d(),o=v();N({getKey:t,storageKey:x});let m=a.useMemo(()=>{if(!t)return null;let i=t(r,o);return i!==r.key?i:null},[]);if(l)return null;let h=((i,u)=>{if(!window.history.state||!window.history.state.key){let n=Math.random().toString(32).slice(2);window.history.replaceState({key:n},"")}try{let c=JSON.parse(sessionStorage.getItem(i)||"{}")[u||window.history.state.key];typeof c=="number"&&window.scrollTo(0,c)}catch(n){console.error(n),sessionStorage.removeItem(i)}}).toString();return a.createElement("script",f({},s,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${h})(${JSON.stringify(x)}, ${JSON.stringify(m)})`}}))}const O=({setIsOpen:t})=>e.jsxs("div",{className:"absolute flex z-50 lg:left-32 h-screen w-full lg:w-[20%] md:pt-8 lg:pt-0 bg-stone-700",children:[e.jsx("div",{className:"w-[1px] bg-white opacity-60"}),e.jsxs("nav",{className:"flex-1 navScroll overflow-auto p-4 md:pt-8 relative ",children:[e.jsxs("div",{className:"lg:hidden absolute w-[94%] h-16 md:h-20 flex items-center justify-between text-white top-2 bg-stone-900 px-4 shadow-lg rounded-md",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("i",{className:"ri-user-3-line text-3xl md:text-5xl border px-2 py-1 rounded-full bg-yellow-400 text-stone-900"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"text-sm md:text-2xl font-semibold text-yellow-400",children:"Welcome, Nitesh Kumar"}),e.jsx("hr",{className:"border-t border-white opacity-40 mt-1"}),e.jsxs("p",{className:"text-xs md:text-xl flex items-center text-gray-300 mt-1",children:[e.jsx("i",{className:"ri-map-pin-fill text-red-500 mr-1"}),e.jsx("span",{children:"Bhopal"})]})]})]}),e.jsx("i",{className:"ri-close-line bg-stone-800 text-white px-3 py-2 rounded-full cursor-pointer hover:bg-red-600 transition-all duration-200"})]}),e.jsx("ul",{className:"space-y-4 mt-16 md:mt-20 lg:mt-0",children:[{to:"/",icon:"ri-home-line",label:"Home"},{to:"/sales/sales-and-purchase",icon:"ri-shopping-cart-line",label:"Sales & Purchase"},{to:"/inventory/inventory-master",icon:"ri-store-line",label:"Inventory"},{to:"/production/production-process",icon:"ri-building-3-fill",label:"Production"},{to:"/payments",icon:"ri-money-dollar-circle-line",label:"Payments"},{to:"/reports-intelligence",icon:"ri-bar-chart-line",label:"Reports & Intelligence"},{to:"/resource-planning",icon:"ri-calendar-line",label:"Resource Planning"},{to:"/buyers-suppliers",icon:"ri-team-line",label:"Buyers & Suppliers"},{to:"/ticket-system/raise-ticket",icon:"ri-ticket-2-line",label:"Ticket System"},{to:"/approvals/received",icon:"ri-check-line",label:"Approvals"},{to:"/pickup",icon:"ri-truck-line t",label:"Cart Pickup"},{to:"/qualitycheck",icon:"ri-check-double-line",label:"Quality Check"},{to:"/settings",icon:"ri-settings-5-line",label:"Settings"},{to:"/logout",icon:"ri-logout-circle-line",label:"Logout"}].map(({to:s,icon:l,label:r})=>e.jsx("li",{children:e.jsxs(b,{to:s,onClick:()=>t(!1),className:({isActive:o})=>`flex items-center gap-4 p-1 rounded-lg transition-all duration-300 ease-in-out ${o?"bg-green-500 text-white":"text-gray-300 hover:bg-stone-800 hover:text-white"}`,children:[e.jsx("i",{className:`${l} text-2xl md:text-5xl lg:text-2xl px-1`}),e.jsx("span",{className:"text-sm md:text-2xl lg:text-sm font-medium",children:r}),s!=="/"&&e.jsx("i",{className:"ri-arrow-right-s-line text-xl ml-auto"})]})},s))})]})]});function L(){const[t,s]=a.useState(!1),{pathname:l}=d();return["/login","/register","/resetpassword"].includes(l)?null:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"lg:hidden w-full px-5 justify-between flex items-center bg-white h-20 md:h-32 shadow-md border-b border-green-500",children:[e.jsx("h1",{className:"text-xl md:text-5xl font-bold text-green-700",children:"Katayani Organics"}),e.jsx("i",{onClick:()=>s(!0),className:"ri-menu-fill text-xl md:text-5xl cursor-pointer"})]}),e.jsxs("div",{className:"hidden lg:flex h-screen w-32 bg-stone-700 gap-4 flex-col justify-center items-center",children:[e.jsx("i",{className:"ri-reactjs-fill text-indigo-600 text-2xl"}),e.jsx("i",{className:"ri-star-fill text-xl cursor-pointer text-slate-200"}),e.jsx("div",{className:"h-44 w-0.5 bg-gradient-to-t from-green-400 to-transparent mb-4"}),e.jsx("button",{onClick:()=>s(!t),className:"-rotate-90 border m-5 border-green-400 w-full text-center p-2 rounded-full text-green-400 bg-stone-600 transform transition-all duration-300 ease-in-out hover:border-green-300 hover:ring-2 hover:ring-green-300 hover:bg-stone-500 shadow-lg hover:shadow-green-400/70 tracking-tight",children:"ALL MODULES"}),e.jsx("div",{className:"h-44 w-0.5 bg-gradient-to-b from-green-300 to-transparent mt-4"}),e.jsx("i",{className:"ri-lightbulb-flash-fill text-yellow-400"}),e.jsx("i",{className:"ri-map-pin-user-fill cursor-pointer text-gray-200 text-xl"})]}),t&&e.jsx("div",{className:"fixed inset-0 z-50 bg-black bg-opacity-50",onClick:()=>s(!1),children:e.jsx(O,{setIsOpen:s})})]})}function P({children:t}){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(j,{}),e.jsx(y,{})]}),e.jsxs("body",{children:[e.jsxs("div",{className:"lg:flex h-screen bg-gray-200",children:[e.jsx(L,{}),e.jsx("div",{className:"flex-1 overflow-x-auto",children:t})]}),e.jsx(p,{}),e.jsx(k,{}),e.jsx(w,{})]})]})}function Q(){return e.jsx(S,{})}function T(){return[{rel:"icon",type:"image/x-icon",href:"https://play-lh.googleusercontent.com/IQOd8AE5VCEBSbs7cSGYGnZ2TVvTK4Z5jwVlkDxVSsXSYGQMUxOrxbBsVt2kHRpktQ=w240-h480-rw"},{href:"https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css",rel:"stylesheet"},{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"},{rel:"stylesheet",href:"https://unpkg.com/leaflet/dist/leaflet.css"},{rel:"stylesheet",href:"https://unpkg.com/leaflet-routing-machine/dist/leaflet-routing-machine.css"}]}export{P as Layout,Q as default,T as links};
