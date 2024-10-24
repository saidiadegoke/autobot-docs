"use strict";(self.webpackChunkdocs_spa=self.webpackChunkdocs_spa||[]).push([[4810],{7169:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=n(4848),r=n(8453);const t={},c="Autobot Candidate Frontend Services",o={id:"autobot-candidate/frontend-services",title:"Autobot Candidate Frontend Services",description:"This document provides a summary of the frontend services used in the Autobot Candidate Application, as represented in the attached image.",source:"@site/docs/autobot-candidate/frontend-services.md",sourceDirName:"autobot-candidate",slug:"/autobot-candidate/frontend-services",permalink:"/autobot-docs/docs/autobot-candidate/frontend-services",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/autobot-candidate/frontend-services.md",tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Services Overview",id:"services-overview",level:2},{value:"1. <strong>Config Service</strong>",id:"1-config-service",level:3},{value:"2. <strong>Database Service</strong>",id:"2-database-service",level:3},{value:"3. <strong>Emitter Service</strong>",id:"3-emitter-service",level:3},{value:"4. <strong>HTTP Service</strong>",id:"4-http-service",level:3},{value:"5. <strong>Local Storage Service</strong>",id:"5-local-storage-service",level:3},{value:"6. <strong>RDP Config Service</strong>",id:"6-rdp-config-service",level:3},{value:"7. <strong>RX Stomp Service Factory</strong>",id:"7-rx-stomp-service-factory",level:3},{value:"8. <strong>RX Stomp Service</strong>",id:"8-rx-stomp-service",level:3},{value:"9. <strong>Session Service</strong>",id:"9-session-service",level:3}];function a(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"autobot-candidate-frontend-services",children:"Autobot Candidate Frontend Services"})}),"\n",(0,i.jsx)(s.p,{children:"This document provides a summary of the frontend services used in the Autobot Candidate Application, as represented in the attached image."}),"\n",(0,i.jsx)(s.h2,{id:"services-overview",children:"Services Overview"}),"\n",(0,i.jsxs)(s.p,{children:["The following services are organized under the ",(0,i.jsx)(s.code,{children:"app/services"})," directory:"]}),"\n",(0,i.jsxs)(s.h3,{id:"1-config-service",children:["1. ",(0,i.jsx)(s.strong,{children:"Config Service"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Manages application configuration settings, including loading and storing configuration data."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Files"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"config.service.ts"}),": The main service file for managing application configuration."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"config.service.spec.ts"}),": The specification file for unit tests related to the Config Service."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"2-database-service",children:["2. ",(0,i.jsx)(s.strong,{children:"Database Service"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Handles database interactions, including CRUD operations and data retrieval."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Files"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"database.service.ts"}),": The main service file for database-related functionality."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"database.service.spec.ts"}),": The specification file for unit tests related to the Database Service."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"3-emitter-service",children:["3. ",(0,i.jsx)(s.strong,{children:"Emitter Service"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Implements an event emitter for managing events and subscriptions throughout the application."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Files"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"emitter.service.ts"}),": The main service file for the Emitter Service functionality."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"emitter.service.spec.ts"}),": The specification file for unit tests related to the Emitter Service."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"4-http-service",children:["4. ",(0,i.jsx)(s.strong,{children:"HTTP Service"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Provides methods for making HTTP requests to external APIs and backend services."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Files"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"http.service.ts"}),": The main service file for HTTP operations."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"http.service.spec.ts"}),": The specification file for unit tests related to the HTTP Service."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"5-local-storage-service",children:["5. ",(0,i.jsx)(s.strong,{children:"Local Storage Service"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Facilitates interaction with the browser's local storage, allowing data persistence between sessions."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Files"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"local-storage.service.ts"}),": The main service file for local storage operations."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"local-storage.service.spec.ts"}),": The specification file for unit tests related to the Local Storage Service."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"6-rdp-config-service",children:["6. ",(0,i.jsx)(s.strong,{children:"RDP Config Service"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Manages the Remote Desktop Protocol (RDP) configuration settings for the application."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Files"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"rdp-config.service.ts"}),": The main service file for handling RDP-related configurations."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"7-rx-stomp-service-factory",children:["7. ",(0,i.jsx)(s.strong,{children:"RX Stomp Service Factory"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Provides a factory for creating instances of RxJS Stomp clients for WebSocket communication."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Files"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"rx-stomp-service-factory.ts"}),": The main service file for the RX Stomp Service Factory."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"8-rx-stomp-service",children:["8. ",(0,i.jsx)(s.strong,{children:"RX Stomp Service"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Manages the communication between the application and the WebSocket server using Stomp protocol."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Files"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"rx-stomp.service.ts"}),": The main service file for RX Stomp communication."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"9-session-service",children:["9. ",(0,i.jsx)(s.strong,{children:"Session Service"})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Purpose"}),": Handles session management within the application, including user authentication and session persistence."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Files"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"session.service.ts"}),": The main service file for session management."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"session.service.spec.ts"}),": The specification file for unit tests related to the Session Service."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>o});var i=n(6540);const r={},t=i.createContext(r);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);