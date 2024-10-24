"use strict";(self.webpackChunkdocs_spa=self.webpackChunkdocs_spa||[]).push([[817],{6220:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=t(4848),r=t(8453);const s={},i="Cloning the Autobot Server Repositories",c={id:"autobot-server/cloning-repos",title:"Cloning the Autobot Server Repositories",description:"To set up the Autobot server environment, you'll need to clone both the frontend and backend repositories from Bitbucket. Follow the steps below to clone the necessary repositories.",source:"@site/docs/autobot-server/cloning-repos.md",sourceDirName:"autobot-server",slug:"/autobot-server/cloning-repos",permalink:"/autobot-docs/docs/autobot-server/cloning-repos",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/autobot-server/cloning-repos.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setting Up Development Environment",permalink:"/autobot-docs/docs/autobot-server/setting-up-development-environment"},next:{title:"Installing Dependencies",permalink:"/autobot-docs/docs/autobot-server/installing-dependencies"}},l={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Cloning the Repositories",id:"cloning-the-repositories",level:2},{value:"Step 1: Open a Terminal",id:"step-1-open-a-terminal",level:3},{value:"Step 2: Navigate to Your Desired Directory",id:"step-2-navigate-to-your-desired-directory",level:3},{value:"Step 3: Clone the Frontend Repository",id:"step-3-clone-the-frontend-repository",level:3},{value:"Step 4: Clone the Backend Repository",id:"step-4-clone-the-backend-repository",level:3},{value:"Step 5: Verify the Cloning Process",id:"step-5-verify-the-cloning-process",level:3}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"cloning-the-autobot-server-repositories",children:"Cloning the Autobot Server Repositories"})}),"\n",(0,n.jsx)(o.p,{children:"To set up the Autobot server environment, you'll need to clone both the frontend and backend repositories from Bitbucket. Follow the steps below to clone the necessary repositories."}),"\n",(0,n.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(o.p,{children:"Before you begin, ensure you have the following:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Git"}),": Make sure Git is installed on your machine. You can download it from ",(0,n.jsx)(o.a,{href:"https://git-scm.com/downloads",children:"Git's official website"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"Access to the Repositories"}),": Ensure you have the appropriate permissions to access the Bitbucket repositories."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"cloning-the-repositories",children:"Cloning the Repositories"}),"\n",(0,n.jsx)(o.h3,{id:"step-1-open-a-terminal",children:"Step 1: Open a Terminal"}),"\n",(0,n.jsx)(o.p,{children:'Open a terminal window on your machine. You can do this by searching for "Terminal" in your applications.'}),"\n",(0,n.jsx)(o.h3,{id:"step-2-navigate-to-your-desired-directory",children:"Step 2: Navigate to Your Desired Directory"}),"\n",(0,n.jsxs)(o.p,{children:["Use the ",(0,n.jsx)(o.code,{children:"cd"})," command to navigate to the directory where you want to clone the repositories. For example:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"cd ~/projects\n"})}),"\n",(0,n.jsx)(o.h3,{id:"step-3-clone-the-frontend-repository",children:"Step 3: Clone the Frontend Repository"}),"\n",(0,n.jsx)(o.p,{children:"Run the following command to clone the Autobot server frontend repository:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"git clone git@bitbucket.org:morgengreen1/autobot-server-frontend.git\n"})}),"\n",(0,n.jsx)(o.h3,{id:"step-4-clone-the-backend-repository",children:"Step 4: Clone the Backend Repository"}),"\n",(0,n.jsx)(o.p,{children:"Next, run the following command to clone the Autobot server backend repository:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"git clone git@bitbucket.org:morgengreen1/autobot-server-backend.git\n"})}),"\n",(0,n.jsx)(o.h3,{id:"step-5-verify-the-cloning-process",children:"Step 5: Verify the Cloning Process"}),"\n",(0,n.jsxs)(o.p,{children:["After running the above commands, you should see two new directories: ",(0,n.jsx)(o.code,{children:"autobot-server-frontend"})," and ",(0,n.jsx)(o.code,{children:"autobot-server-backend"}),". You can list the contents of your current directory to confirm:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"ls\n"})}),"\n",(0,n.jsx)(o.p,{children:"You should see both cloned repositories listed."})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>c});var n=t(6540);const r={},s=n.createContext(r);function i(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);