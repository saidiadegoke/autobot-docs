"use strict";(self.webpackChunkdocs_spa=self.webpackChunkdocs_spa||[]).push([[9370],{3658:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=s(4848),t=s(8453);const r={},o=void 0,d={id:"autobot-admin/client-node-package/services",title:"services",description:"Documentation: ClientNodeService and ClientNodeServiceImpl",source:"@site/docs/autobot-admin/client-node-package/services.md",sourceDirName:"autobot-admin/client-node-package",slug:"/autobot-admin/client-node-package/services",permalink:"/autobot-docs/docs/autobot-admin/client-node-package/services",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/autobot-admin/client-node-package/services.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"repository",permalink:"/autobot-docs/docs/autobot-admin/client-node-package/repository"},next:{title:"utilities",permalink:"/autobot-docs/docs/autobot-admin/client-node-package/utilities"}},c={},l=[{value:"Documentation: <code>ClientNodeService</code> and <code>ClientNodeServiceImpl</code>",id:"documentation-clientnodeservice-and-clientnodeserviceimpl",level:3},{value:"<strong><code>ClientNodeService</code> Interface</strong>",id:"clientnodeservice-interface",level:4},{value:"<strong><code>ClientNodeServiceImpl</code> Class</strong>",id:"clientnodeserviceimpl-class",level:4},{value:"<strong>Main Functionalities:</strong>",id:"main-functionalities",level:5},{value:"<strong>Fields:</strong>",id:"fields",level:5},{value:"<strong>Detailed Explanation of Logic</strong>",id:"detailed-explanation-of-logic",level:4}];function a(e){const n={code:"code",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h3,{id:"documentation-clientnodeservice-and-clientnodeserviceimpl",children:["Documentation: ",(0,i.jsx)(n.code,{children:"ClientNodeService"})," and ",(0,i.jsx)(n.code,{children:"ClientNodeServiceImpl"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"clientnodeservice-interface",children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"ClientNodeService"})," Interface"]})}),"\n",(0,i.jsx)(n.p,{children:"This interface defines the core functionality for registering client nodes within the system. It provides a method for registering a client node based on the incoming request data."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Method:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ConnectToServerResponseDTO registerClientNode(ConnectToServerRequestDTO requestDTO) throws InvalidInputException;"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Registers a client node by taking a ",(0,i.jsx)(n.code,{children:"ConnectToServerRequestDTO"})," as input and returning a ",(0,i.jsx)(n.code,{children:"ConnectToServerResponseDTO"})," with registration details."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Throws"}),": ",(0,i.jsx)(n.code,{children:"InvalidInputException"})," if the request data is incomplete or invalid."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"clientnodeserviceimpl-class",children:(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"ClientNodeServiceImpl"})," Class"]})}),"\n",(0,i.jsxs)(n.p,{children:["This class implements the ",(0,i.jsx)(n.code,{children:"ClientNodeService"})," interface and handles the business logic for registering client nodes, checking for capacity limits, and associating nodes with ongoing exams."]}),"\n",(0,i.jsx)(n.h5,{id:"main-functionalities",children:(0,i.jsx)(n.strong,{children:"Main Functionalities:"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"registerClientNode(ConnectToServerRequestDTO requestDTO)"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": Registers a client node with detailed logic for validating the request, checking center and exam capacity, and saving the node to the database."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Validation"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Checks if ",(0,i.jsx)(n.code,{children:"requestDTO"})," or ",(0,i.jsx)(n.code,{children:"ipAddress"})," is null."]}),"\n",(0,i.jsx)(n.li,{children:"Verifies if the client node's app version matches the current app version."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Node Registration"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Checks if a node with the given UUID already exists."}),"\n",(0,i.jsx)(n.li,{children:"If not, it checks if the center has reached its maximum capacity and if any ongoing exam has room for new nodes."}),"\n",(0,i.jsx)(n.li,{children:"If all checks pass, it either registers a new node or updates the existing node's information."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Center Capacity and Exam Session Checks"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Before registering a new node, the method checks:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the center has exceeded its maximum capacity of connected nodes."}),"\n",(0,i.jsx)(n.li,{children:"If any pending or ongoing exam sessions have available capacity for more nodes."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Node Registration Finalization"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Saves the node to the database, generates registration number and candidate name for new nodes, and updates existing node records."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Notifying Admin"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sends a message to the admin via WebSocket with the total count of connected nodes."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Exam Session Checks"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If an exam is in progress, the method verifies that the exam's end time has not passed and updates the node with the appropriate exam session information."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"ConnectToServerResponseDTO"})," containing node UUID, candidate name, registration number, and exam session details if an exam is in progress."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"init()"})})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Purpose"}),": This method runs at application startup (via ",(0,i.jsx)(n.code,{children:"@PostConstruct"}),") and initializes the system by deleting all previously connected nodes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Logic"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'Deletes all client nodes from the repository or marks them as "disconnected".'}),"\n",(0,i.jsx)(n.li,{children:"This ensures a fresh start for node connections when the system restarts."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"fields",children:(0,i.jsx)(n.strong,{children:"Fields:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Autowired Components"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"SimpMessagingTemplate"})}),": Used for sending WebSocket messages to the admin to update the number of connected nodes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ClientNodeRepository"})}),": Handles CRUD operations for ",(0,i.jsx)(n.code,{children:"ClientNodeEntity"})," objects."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"CenterRepository"})}),": Used to retrieve center information, particularly to check capacity limits."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"ExamSessionRepository"})," and ",(0,i.jsx)(n.code,{children:"ExamSessionNodeRepository"})]}),": Manages interactions with exam session entities, including checks on whether an exam is ongoing and its capacity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"ExamService"})}),": Provides additional exam-related logic."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"appVersion"})}),": Injected from the application's configuration to validate client nodes' app versions during registration."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Logger"}),": Logs errors and important operations, such as when there are parsing issues or registration problems."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"detailed-explanation-of-logic",children:(0,i.jsx)(n.strong,{children:"Detailed Explanation of Logic"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Client Node Validation"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Ensures that critical information such as the IP address and app version is provided before attempting to register a node. If the information is missing or outdated, the system throws an ",(0,i.jsx)(n.code,{children:"InvalidInputException"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Capacity Checks"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Before registering a new node, the system checks if the total number of connected nodes exceeds the center's capacity."}),"\n",(0,i.jsx)(n.li,{children:"It also checks if any ongoing or pending exam sessions have available capacity for more nodes. If the node count exceeds any of these limits, an exception is thrown to prevent further registrations."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Registration Process"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the node is new (determined by checking its UUID), a unique registration number and candidate name are generated. Otherwise, the node is updated with the new request data."}),"\n",(0,i.jsx)(n.li,{children:"The method also formats various hardware details such as CPU, memory, and disk information before saving the node to the database."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Admin Notifications"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"After registering the node, the method sends a message to the admin to update the total count of connected nodes using WebSocket communication."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Exam Session Handling"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The method checks if an exam session is in progress and whether the node can still join the exam. If the exam has ended, the node is not allowed to join. If the exam is still running, the node is registered with the exam session, and the client is notified that the exam is in progress."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"System Initialization"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"init()"}),' method runs at startup to clean up the system by removing all previously connected nodes or marking them as "disconnected". This ensures a fresh start when the system restarts, and no stale node data remains.']}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>d});var i=s(6540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);