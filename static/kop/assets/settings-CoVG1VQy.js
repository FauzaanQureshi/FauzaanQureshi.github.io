import{j as e,r as o}from"./jsx-runtime-IdAWuXfe.js";import{L as a,u as g,O as p}from"./index-ugiZISQl.js";import{C as j}from"./CommonNav-DYSDwl9E.js";import{v as h}from"./isUserValid-BdCa-Ar8.js";import"./router-CdQiufPQ.js";import"./js.cookie-Cz0CWeBA.js";const u=()=>e.jsxs("div",{className:"relative w-full max-w-sm",children:[e.jsx("input",{type:"text",className:"w-full border border-gray-300 rounded-lg py-2 pl-10 outline-1 pr-4 text-sm text-gray-700",placeholder:"Search here..."}),e.jsx("i",{className:"ri-search-line absolute top-2 left-3 text-gray-400"})]}),f=()=>{const[s,l]=o.useState({userManagement:!1,addresses:!1,alerts:!1,documents:!1}),r=t=>{l(n=>({...n,[t]:!n[t]}))};return e.jsxs("div",{className:"h-fit p-4",children:[e.jsx("h3",{className:"text-sm font-medium opacity-70 mb-4",children:"QUICK ACCESS MENU"}),e.jsx("hr",{className:"p-2"}),e.jsx(u,{}),e.jsxs("div",{className:"mt-4",children:[e.jsxs("button",{className:`w-full flex items-center justify-between py-2 px-2 rounded-md text-gray-800 ${s.userManagement?"bg-gray-100 border border-gray-400":"border border-gray-400"}`,onClick:()=>r("userManagement"),children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("i",{className:"ri-group-fill"})," User Management"]}),e.jsx("i",{className:`ri-arrow-${s.userManagement?"up":"down"}-s-line`})]}),s.userManagement&&e.jsxs("div",{className:"p-4 flex flex-col gap-2 text-black",children:[e.jsxs(a,{to:"/settings/User Management/user",className:"flex items-center justify-between leaf-border border px-2 py-1 rounded hover:bg-gray-200",children:[e.jsx("span",{children:"User"})," ",e.jsx("i",{className:"ri-arrow-right-s-line"})]}),e.jsxs(a,{to:"/settings/User Management/teams",className:"flex items-center justify-between leaf-border border px-2 py-1 rounded hover:bg-gray-200",children:[e.jsx("span",{children:"Teams"})," ",e.jsx("i",{className:"ri-arrow-right-s-line"})]})]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{className:`w-full flex items-center justify-between py-2 px-2 rounded-md text-gray-800 ${s.addresses?"bg-gray-100 border border-gray-400":"border border-gray-400"}`,onClick:()=>r("addresses"),children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("i",{className:"ri-map-pin-fill"})," Addresses"]}),e.jsx("i",{className:`ri-arrow-${s.addresses?"up":"down"}-s-line`})]}),s.addresses&&e.jsxs("div",{className:"p-4 flex flex-col gap-2 text-black",children:[e.jsxs(a,{to:"/settings/Address/location",className:"flex items-center justify-between leaf-border border px-2 py-1 rounded hover:bg-gray-200",children:[e.jsx("span",{children:"Address 1"})," ",e.jsx("i",{className:"ri-arrow-right-s-line"})]}),e.jsxs(a,{to:"#",className:"flex items-center justify-between leaf-border border px-2 py-1 rounded hover:bg-gray-200",children:[e.jsx("span",{children:"Address 2"})," ",e.jsx("i",{className:"ri-arrow-right-s-line"})]})]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{className:`w-full flex items-center justify-between py-2 px-2 rounded-md text-gray-800 ${s.alerts?"bg-gray-100 border border-gray-400":"border border-gray-400"}`,onClick:()=>r("alerts"),children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("i",{className:"ri-notification-3-fill"})," Alert Preferences"]}),e.jsx("i",{className:`ri-arrow-${s.alerts?"up":"down"}-s-line`})]}),s.alerts&&e.jsxs("div",{className:"p-4 flex flex-col gap-2 text-black",children:[e.jsxs(a,{to:"#",className:"flex items-center justify-between leaf-border border px-2 py-1 rounded hover:bg-gray-200",children:[e.jsx("span",{children:"Alert 1"})," ",e.jsx("i",{className:"ri-arrow-right-s-line"})]}),e.jsxs(a,{to:"#",className:"flex items-center justify-between leaf-border border px-2 py-1 rounded hover:bg-gray-200",children:[e.jsx("span",{children:"Alert 2"})," ",e.jsx("i",{className:"ri-arrow-right-s-line"})]})]})]}),e.jsxs("div",{className:"mt-2",children:[e.jsxs("button",{className:`w-full flex items-center justify-between py-2 px-2 rounded-md text-gray-800 ${s.documents?"bg-gray-100 border border-gray-400":"border border-gray-400"}`,onClick:()=>r("documents"),children:[e.jsxs("span",{className:"flex items-center gap-2",children:[e.jsx("i",{className:"ri-file-list-fill"})," Documents"]}),e.jsx("i",{className:`ri-arrow-${s.documents?"up":"down"}-s-line`})]}),s.documents&&e.jsxs("div",{className:"p-4 flex flex-col gap-2 text-black",children:[e.jsxs(a,{to:"#",className:"flex items-center justify-between leaf-border border px-2 py-1 rounded hover:bg-gray-200",children:[e.jsx("span",{children:"Document 1"})," ",e.jsx("i",{className:"ri-arrow-right-s-line"})]}),e.jsxs(a,{to:"#",className:"flex items-center justify-between leaf-border border px-2 py-1 rounded hover:bg-gray-200",children:[e.jsx("span",{children:"Document 2"})," ",e.jsx("i",{className:"ri-arrow-right-s-line"})]})]})]})]})},x=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{id:"popup",className:" transition-all w-[30vw] h-[30vh] p-5 flex items-start justify-start flex-col bg-white rounded absolute top-[-30vh] left-[40vw]",children:[e.jsx("p",{className:"mt-2",children:"User : "}),e.jsx("p",{className:"mt-2",children:"Address : "}),e.jsx("p",{className:"mt-2",children:"Location : "})]})});function b(){var i,c;const[s,l]=o.useState(0),{pathname:r}=g(),t=r==null?void 0:r.split("/"),n=(i=t[2])==null?void 0:i.split("%20").join(" "),m=()=>{const d=document.getElementById("popup");s===0?(d.style.top="4vw",l(1)):s===1&&(d.style.top="-20vw",l(0))};return e.jsxs("div",{className:"bg-gray-100 p-4 rounded-md",children:[e.jsxs("div",{className:"text-xs sm:text-sm text-gray-500 mb-4 flex flex-col sm:flex-row sm:items-center gap-2",children:[e.jsxs("div",{className:"hover:text-gray-700 flex items-center",children:[e.jsx("i",{className:"ri-group-fill mr-2 text-sm"}),e.jsx("span",{children:n||"Home"})]}),e.jsx("span",{className:"hidden sm:inline",children:"/"}),e.jsx("span",{className:"font-medium text-gray-700",children:t[t.length-1].charAt(0).toUpperCase()+((c=t[t.length-1])==null?void 0:c.slice(1))})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4 sm:gap-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl sm:text-2xl font-bold text-gray-900",children:"Users"}),e.jsx("p",{className:"text-xs sm:text-sm text-gray-500",children:"Manage users of company."})]}),e.jsxs("button",{onClick:m,className:"bg-green-700 text-xs sm:text-sm font-semibold flex gap-2 items-center text-white px-4 py-2 rounded hover:bg-green-600",children:[e.jsx("i",{className:"ri-add-line"}),"Verify User"]})]}),e.jsx(x,{})]})}const U=async({request:s})=>h(s);function A(){return[{title:"Settings | Katayanioganics"}]}function C(){return e.jsxs("div",{className:"bg-gray-100 min-h-screen",children:[e.jsx(j,{currentPath:"Settings",icon:"ri-settings-2-line"}),e.jsx("div",{className:"max-w-7xl bg-white mx-auto mt-6 p-6 rounded-lg shadow-sm",children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("i",{className:"ri-settings-2-fill text-xl text-gray-800"}),e.jsx("h1",{className:"text-xl font-bold text-gray-900 leading-tight",children:"Settings"})]})}),e.jsx(x,{}),e.jsxs("div",{className:"flex gap-6 max-w-7xl mx-auto mt-6",children:[e.jsx("div",{className:"w-1/4 bg-white mb-2 p-4 rounded",children:e.jsx(f,{})}),e.jsxs("div",{className:"w-full bg-white p-2 mb-2 rounded ",children:[e.jsx(b,{}),e.jsx("main",{className:"mt-2",children:e.jsx(p,{})})]})]})]})}export{U as clientLoader,C as default,A as meta};
