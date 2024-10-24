"use strict";(self.webpackChunkdocs_spa=self.webpackChunkdocs_spa||[]).push([[2379],{6349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=t(4848),s=t(8453);const r={},o="Overview of Autobot Admin",a={id:"autobot-admin/overview",title:"Overview of Autobot Admin",description:"Overview of the Two Projects",source:"@site/docs/autobot-admin/overview.md",sourceDirName:"autobot-admin",slug:"/autobot-admin/overview",permalink:"/autobot-docs/docs/autobot-admin/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/autobot-admin/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building for Distribution",permalink:"/autobot-docs/docs/autobot-candidate/building-for-distribution"},next:{title:"Setting Up the Development Environment",permalink:"/autobot-docs/docs/autobot-admin/setting-up-development-environment"}},d={},l=[{value:"Overview of the Two Projects",id:"overview-of-the-two-projects",level:3},{value:"How They Fit Together",id:"how-they-fit-together",level:3},{value:"Architectural Pattern: <strong>Monolithic Application</strong>",id:"architectural-pattern-monolithic-application",level:3},{value:"Advantages of the Monolithic Design:",id:"advantages-of-the-monolithic-design",level:4},{value:"Disadvantages of the Monolithic Design:",id:"disadvantages-of-the-monolithic-design",level:4},{value:"Alternative Architectural Patterns: <strong>Microservices Architecture</strong>",id:"alternative-architectural-patterns-microservices-architecture",level:3}];function c(e){const n={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"overview-of-autobot-admin",children:"Overview of Autobot Admin"})}),"\n",(0,i.jsx)(n.h3,{id:"overview-of-the-two-projects",children:"Overview of the Two Projects"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"AutoBot Admin"})," system is composed of two distinct but interconnected projects:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AutoBot Admin Backend"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Technology"}),": Spring Boot (Java)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": The backend serves as the core of the application, managing the business logic, database interactions, and handling API requests. It provides services to manage exam centers, client nodes, and examination data, and serves as the bridge between the frontend and the underlying database or service layers. It exposes RESTful endpoints for the frontend to interact with."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Responsibilities"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Handles user authentication and authorization."}),"\n",(0,i.jsx)(n.li,{children:"Manages the exam flow (start, monitor, and end exams)."}),"\n",(0,i.jsx)(n.li,{children:"Provides APIs for uploading reports and retrieving exam-related data."}),"\n",(0,i.jsx)(n.li,{children:"Interfaces with the database to manage all exam center-related data."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AutoBot Admin Frontend"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Technology"}),": Angular (TypeScript)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": The frontend is the user interface layer of the system, developed using Angular. It provides administrators with the ability to interact with the backend services in a visual, user-friendly manner. The frontend handles UI rendering, user input, and displays data retrieved from the backend."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Responsibilities"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Provides an admin dashboard where exam centers and candidate systems can be managed."}),"\n",(0,i.jsx)(n.li,{children:"Allows administrators to initiate and monitor exams, upload reports, and access exam results."}),"\n",(0,i.jsx)(n.li,{children:"Sends requests to the backend and processes the responses for displaying data to the user."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"how-they-fit-together",children:"How They Fit Together"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"AutoBot Admin"})," system follows a ",(0,i.jsx)(n.strong,{children:"client-server architecture"}),", where the ",(0,i.jsx)(n.strong,{children:"backend"})," (Spring Boot) acts as the server, and the ",(0,i.jsx)(n.strong,{children:"frontend"})," (Angular) acts as the client. The backend provides RESTful APIs that the frontend consumes to perform various operations."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Bundling Approach"}),": The Angular frontend is packaged into the Spring Boot backend as static resources. When the backend is deployed, it serves both the frontend UI and the API. In production, this results in a single application that handles both the UI and the backend services."]}),"\n",(0,i.jsxs)(n.p,{children:["The backend hosts the frontend by serving static files generated during the Angular build process from its ",(0,i.jsx)(n.code,{children:"src/main/resources/static"})," directory. As a result, a single application can be deployed that provides both the frontend and backend from the same server."]}),"\n",(0,i.jsxs)(n.h3,{id:"architectural-pattern-monolithic-application",children:["Architectural Pattern: ",(0,i.jsx)(n.strong,{children:"Monolithic Application"})]}),"\n",(0,i.jsxs)(n.p,{children:["This design can be classified as a ",(0,i.jsx)(n.strong,{children:"monolithic architecture"}),", where both the frontend and backend components are packaged and deployed together as a single unit."]}),"\n",(0,i.jsx)(n.h4,{id:"advantages-of-the-monolithic-design",children:"Advantages of the Monolithic Design:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Simplicity"}),": The development and deployment process is simpler since there's only one application to manage. The frontend and backend are tightly coupled, making deployment straightforward."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Single Deployment"}),": Since the frontend is packaged with the backend, it ensures compatibility between the two. The application can be deployed to a single server or environment."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Easier for Small Teams"}),": With everything in one place, managing the application is easier for smaller teams. There's less overhead in terms of maintaining multiple repositories or services."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Shared Codebase"}),": Shared dependencies and libraries can be managed more easily within a single project, avoiding versioning conflicts."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"disadvantages-of-the-monolithic-design",children:"Disadvantages of the Monolithic Design:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Limited Scalability"}),": Scaling a monolithic application is more challenging. As the application grows, performance issues may arise since both the frontend and backend are tightly coupled.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solution"}),": A more complex architecture (like microservices) could allow for independent scaling of components."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Harder to Update/Deploy"}),": Even small changes to either the frontend or backend require a full redeployment of the entire application. This can slow down the development process and make updates riskier.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solution"}),": A microservices architecture could allow smaller, incremental updates."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tight Coupling"}),": Changes in one part of the system (frontend or backend) may have unintended consequences on the other, making development and testing more complex.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solution"}),": Separation of concerns with well-defined APIs in a distributed system would mitigate these issues."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Slower Development"}),": As the codebase grows, it becomes harder to manage. This can result in slower development and longer testing cycles as the system becomes more intertwined.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Solution"}),": Adopting a service-oriented or microservices-based architecture can help decouple the components for more rapid development."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"alternative-architectural-patterns-microservices-architecture",children:["Alternative Architectural Patterns: ",(0,i.jsx)(n.strong,{children:"Microservices Architecture"})]}),"\n",(0,i.jsxs)(n.p,{children:["Instead of bundling the frontend and backend into a single deployable unit, a ",(0,i.jsx)(n.strong,{children:"microservices"})," or ",(0,i.jsx)(n.strong,{children:"distributed architecture"})," would separate the frontend from the backend into independent services. This is more complex but offers several advantages."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"AutoBot Admin"})," system uses a ",(0,i.jsx)(n.strong,{children:"monolithic architecture"}),", where the frontend and backend are bundled and deployed together. This architecture works well for smaller applications, providing simplicity and ease of deployment."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);