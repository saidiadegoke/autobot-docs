"use strict";(self.webpackChunkdocs_spa=self.webpackChunkdocs_spa||[]).push([[5251],{1820:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>l});var r=s(4848),i=s(8453);const d={},o=void 0,t={id:"autobot-admin/client-node-package/dtos",title:"dtos",description:"Documentation for Client Node DTOs (Data Transfer Objects)",source:"@site/docs/autobot-admin/client-node-package/dtos.md",sourceDirName:"autobot-admin/client-node-package",slug:"/autobot-admin/client-node-package/dtos",permalink:"/autobot-docs/docs/autobot-admin/client-node-package/dtos",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/autobot-admin/client-node-package/dtos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"client-node-controller",permalink:"/autobot-docs/docs/autobot-admin/client-node-package/client-node-controller"},next:{title:"repository",permalink:"/autobot-docs/docs/autobot-admin/client-node-package/repository"}},c={},l=[{value:"Documentation for Client Node DTOs (Data Transfer Objects)",id:"documentation-for-client-node-dtos-data-transfer-objects",level:3},{value:"<strong><code>ConnectedNodesCounterDTO</code></strong>",id:"connectednodescounterdto",level:4},{value:"<strong><code>ConnectToServerRequestDTO</code></strong>",id:"connecttoserverrequestdto",level:4},{value:"<strong><code>ConnectToServerResponseDTO</code></strong>",id:"connecttoserverresponsedto",level:4},{value:"<strong><code>PulseCheckDTO</code></strong>",id:"pulsecheckdto",level:4},{value:"<strong><code>RDPClientDTO</code></strong>",id:"rdpclientdto",level:4}];function h(e){const n={code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"documentation-for-client-node-dtos-data-transfer-objects",children:"Documentation for Client Node DTOs (Data Transfer Objects)"}),"\n",(0,r.jsxs)(n.p,{children:["This document provides an overview of several Data Transfer Objects (DTOs) used in the ",(0,r.jsx)(n.code,{children:"autobot.app.admin.clientnode"})," package. These DTOs are primarily used for client node communication, including registration, status updates, and real-time metrics."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"connectednodescounterdto",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ConnectedNodesCounterDTO"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": Represents a simple DTO to track the total number of connected client nodes."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Fields"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"totalConnectedNodes"}),": The total number of connected nodes in the system."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Constructor"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ConnectedNodesCounterDTO(int count)"})}),": Initializes the DTO with the total number of connected nodes."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Annotations"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@JsonInclude(JsonInclude.Include.NON_NULL)"})}),": Ensures that only non-null fields are included when the object is serialized to JSON."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@JsonIgnoreProperties(ignoreUnknown = true)"})}),": Ignores any unknown properties during deserialization, ensuring flexibility when receiving JSON from external sources."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"@Getter"}),", ",(0,r.jsx)(n.code,{children:"@Setter"}),", ",(0,r.jsx)(n.code,{children:"@NoArgsConstructor"})]}),": Lombok annotations to automatically generate getters, setters, and a no-argument constructor."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"connecttoserverrequestdto",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ConnectToServerRequestDTO"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": DTO for handling the request to register or connect a client node to the server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Fields"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Network, hardware, and system details such as:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"ipAddress"}),", ",(0,r.jsx)(n.code,{children:"systemIPAddress"}),": The node\u2019s IP address and system IP address."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"sysModel"}),", ",(0,r.jsx)(n.code,{children:"sysSerial"}),", ",(0,r.jsx)(n.code,{children:"sysOEM"}),": System model, serial number, and OEM details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"osDistribution"}),", ",(0,r.jsx)(n.code,{children:"osArchitecture"}),", ",(0,r.jsx)(n.code,{children:"osHostname"}),": Operating system details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cpuManufacturer"}),", ",(0,r.jsx)(n.code,{children:"cpuBrand"}),", ",(0,r.jsx)(n.code,{children:"cpuProcessors"}),", ",(0,r.jsx)(n.code,{children:"cpuCores"}),", ",(0,r.jsx)(n.code,{children:"cpuPhysicalCores"}),": CPU details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"cpuSpeed"}),", ",(0,r.jsx)(n.code,{children:"cpuMaxSpeed"}),", ",(0,r.jsx)(n.code,{children:"cpuSpeedStr"}),", ",(0,r.jsx)(n.code,{children:"cpuMaxSpeedStr"}),": CPU speed and maximum speed as numeric values and formatted strings."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"memSize"}),", ",(0,r.jsx)(n.code,{children:"memSizeStr"}),", ",(0,r.jsx)(n.code,{children:"memSizeTotalAvailable"}),", ",(0,r.jsx)(n.code,{children:"memSizeTotalAvailableStr"}),": Memory details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"dskType"}),", ",(0,r.jsx)(n.code,{children:"dskSerial"}),", ",(0,r.jsx)(n.code,{children:"dskSize"}),", ",(0,r.jsx)(n.code,{children:"dskSizeStr"}),": Disk information (type, serial, and size)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"netInterface"}),", ",(0,r.jsx)(n.code,{children:"netSpeed"}),", ",(0,r.jsx)(n.code,{children:"netSpeedLong"}),", ",(0,r.jsx)(n.code,{children:"netMacAddress"}),": Network interface details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"motherBoardSerial"}),", ",(0,r.jsx)(n.code,{children:"cpuProcessorID"}),": Additional hardware identifiers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"uuidUniqueId"}),", ",(0,r.jsx)(n.code,{children:"uuidThinId"}),": UUID values for identifying the client node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nodeUUID"}),": Unique node identifier."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"appVersion"}),": The version of the app running on the client node."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Annotations"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@JsonInclude(JsonInclude.Include.NON_NULL)"})}),": Includes only non-null fields during serialization."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@JsonIgnoreProperties(ignoreUnknown = true)"})}),": Ignores unknown properties in incoming JSON requests."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"@Getter"}),", ",(0,r.jsx)(n.code,{children:"@Setter"}),", ",(0,r.jsx)(n.code,{children:"@NoArgsConstructor"})]}),": Lombok annotations for automatic generation of getters, setters, and a no-arg constructor."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"connecttoserverresponsedto",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ConnectToServerResponseDTO"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": DTO for sending the server's response when a client node registers or connects to the server."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Fields"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nodeUUID"}),": Unique identifier of the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"candidateName"}),": Name assigned to the client node (e.g., a candidate in a testing system)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"registrationNumber"}),": Registration number of the client node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"subject"}),": Subject associated with the node's session (e.g., for exams)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"isExamInProgress"}),": Indicates whether an exam is in progress."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"examSessionStartNotificationDTO"}),": Details of the exam session, represented by ",(0,r.jsx)(n.code,{children:"ExamSessionStartNotificationDTO"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Constructors"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"ConnectToServerResponseDTO(String nodeUUID, String candidateName, String registrationNumber, String subject)"})}),": Constructor to initialize a response with node information and associated subject."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Annotations"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@JsonInclude(JsonInclude.Include.NON_NULL)"})}),": Excludes null fields during serialization."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@JsonIgnoreProperties(ignoreUnknown = true)"})}),": Ignores unknown properties during deserialization."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"@Getter"}),", ",(0,r.jsx)(n.code,{children:"@Setter"}),", ",(0,r.jsx)(n.code,{children:"@NoArgsConstructor"})]}),": Lombok annotations for automatic generation of getters, setters, and a no-arg constructor."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"pulsecheckdto",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"PulseCheckDTO"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": DTO for handling pulse check requests to track real-time metrics of a client node (network, RAM, CPU usage)."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Fields"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nodeUUID"}),": Unique identifier for the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"currentNetworkSpeed"}),": Current network speed of the client node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"currentRAMUsage"}),": Current RAM usage of the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"currentCPUUsage"}),": Current CPU usage of the node."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Annotations"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"@Data"})}),": Lombok annotation that generates getters, setters, ",(0,r.jsx)(n.code,{children:"toString()"}),", ",(0,r.jsx)(n.code,{children:"equals()"}),", and ",(0,r.jsx)(n.code,{children:"hashCode()"})," methods."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"rdpclientdto",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"RDPClientDTO"})})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Purpose"}),": DTO representing a Remote Desktop Protocol (RDP) client node, typically used in remote access or thin-client scenarios."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Fields"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Node Information"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"rdpNodeUUID"}),": Unique identifier for the RDP node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"isConnected"}),": Boolean flag indicating if the node is connected."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Real-Time Metrics"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"currentNetworkSpeed"}),": Current network speed of the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"currentRAMUsage"}),": Current RAM usage of the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"currentCPUUsage"}),": Current CPU usage of the node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"lastUpdated"}),": Timestamp indicating when the node was last updated."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Additional Fields"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"submissionCount"}),": The number of submissions made by the node."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Constructors"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"RDPClientDTO(String rdpNodeUUID)"})}),": Initializes a new ",(0,r.jsx)(n.code,{children:"RDPClientDTO"})," with the given UUID and marks the node as connected."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"RDPClientDTO(String rdpNodeUUID, boolean isConnected, long currentNetworkSpeed, long currentRAMUsage, long currentCPUUsage, Date lastUpdated, int submissionCount)"})}),": Full constructor to initialize all fields."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Annotations"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"@Getter"}),", ",(0,r.jsx)(n.code,{children:"@Setter"}),", ",(0,r.jsx)(n.code,{children:"@NoArgsConstructor"}),", ",(0,r.jsx)(n.code,{children:"@AllArgsConstructor"}),", ",(0,r.jsx)(n.code,{children:"@Builder"}),", ",(0,r.jsx)(n.code,{children:"@Data"})]}),": Lombok annotations that automatically generate getters, setters, constructors, and other utility methods like ",(0,r.jsx)(n.code,{children:"toString()"})," and ",(0,r.jsx)(n.code,{children:"hashCode()"}),"."]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>t});var r=s(6540);const i={},d=r.createContext(i);function o(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);