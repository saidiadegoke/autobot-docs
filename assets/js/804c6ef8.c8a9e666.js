"use strict";(self.webpackChunkdocs_spa=self.webpackChunkdocs_spa||[]).push([[4873],{8030:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var i=r(4848),t=r(8453);const s={},o="Configuring Environment Variables for Autobot Application",l={id:"autobot-server/environmental-variables",title:"Configuring Environment Variables for Autobot Application",description:"To ensure that the Autobot application functions correctly, environment variables must be configured either locally in the AWS SAM environment or on AWS Lambda when deployed. This document outlines the necessary environment variables and how to configure them.",source:"@site/docs/autobot-server/environmental-variables.md",sourceDirName:"autobot-server",slug:"/autobot-server/environmental-variables",permalink:"/autobot-docs/docs/autobot-server/environmental-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/autobot-server/environmental-variables.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installing Dependencies",permalink:"/autobot-docs/docs/autobot-server/installing-dependencies"},next:{title:"Running the Autobot Server Application",permalink:"/autobot-docs/docs/autobot-server/running-app"}},a={},d=[{value:"Required Environment Variables",id:"required-environment-variables",level:2},{value:"Configuring Environment Variables Locally in SAM",id:"configuring-environment-variables-locally-in-sam",level:2},{value:"Configuring Environment Variables on AWS Lambda",id:"configuring-environment-variables-on-aws-lambda",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"configuring-environment-variables-for-autobot-application",children:"Configuring Environment Variables for Autobot Application"})}),"\n",(0,i.jsx)(n.p,{children:"To ensure that the Autobot application functions correctly, environment variables must be configured either locally in the AWS SAM environment or on AWS Lambda when deployed. This document outlines the necessary environment variables and how to configure them."}),"\n",(0,i.jsx)(n.h2,{id:"required-environment-variables",children:"Required Environment Variables"}),"\n",(0,i.jsx)(n.p,{children:"The following environment variables are essential for the backend to function properly:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Variable Name"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Example Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DB_USER"})}),(0,i.jsx)(n.td,{children:"Database username"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"postgres"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DB_PASS"})}),(0,i.jsx)(n.td,{children:"Database password"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"postgres"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DB_PWD"})}),(0,i.jsx)(n.td,{children:"Another database password (if applicable)"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"postgres"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"APP_VERSION"})}),(0,i.jsx)(n.td,{children:"Version of the application"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1.2.4"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"EXTERNAL_API_BASE_URL"})}),(0,i.jsx)(n.td,{children:"Base URL for the external API"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"http://centres.jamb.gov.ng"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"EXTERNAL_API_KEY"})}),(0,i.jsx)(n.td,{children:"API key for accessing the external API"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"6******769475945******11cfc777107****"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"EXTERNAL_API_TIMEOUT"})}),(0,i.jsx)(n.td,{children:"Timeout duration for the external API requests (in ms)"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"5000"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"DB_ENDPOINT"})}),(0,i.jsx)(n.td,{children:"Database connection string"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"192.168.100.191:5437/autobot_server_local_db?useTimezone=true&serverTimezone=UTC"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-environment-variables-locally-in-sam",children:"Configuring Environment Variables Locally in SAM"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Create or Edit the SAM Configuration File:"}),"\nNavigate to the backend directory where the ",(0,i.jsx)(n.code,{children:"template.yaml"})," file is located. Create a new file named ",(0,i.jsx)(n.code,{children:"env.json"})," (or any name you prefer) to store your environment variables."]}),"\n",(0,i.jsxs)(n.p,{children:["Example ",(0,i.jsx)(n.code,{children:"env.json"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "DB_USER": "postgres",\n  "DB_PASS": "postgres",\n  "DB_PWD": "postgres",\n  "APP_VERSION": "1.2.4",\n  "EXTERNAL_API_BASE_URL": "http://centres.jamb.gov.ng",\n  "EXTERNAL_API_KEY": "6db109%9277288888888*****86533c711cfc",\n  "EXTERNAL_API_TIMEOUT": "5000",\n  "DB_ENDPOINT": "192.168.100.191:5437/autobot_server_local_db?useTimezone=true&serverTimezone=UTC"\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Reference the Environment Variables in Your Template File:"}),"\nModify your ",(0,i.jsx)(n.code,{children:"template.yaml"})," file to include the environment variables. Here's an example of how to set them under your function configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"Resources:\n  YourFunction:\n    Type: AWS::Serverless::Function\n    Properties:\n      Handler: your.handler\n      Runtime: java11\n      Environment:\n        DB_USER: !Ref DB_USER\n        DB_PASS: !Ref DB_PASS\n        DB_PWD: !Ref DB_PWD\n        APP_VERSION: !Ref APP_VERSION\n        EXTERNAL_API_BASE_URL: !Ref EXTERNAL_API_BASE_URL\n        EXTERNAL_API_KEY: !Ref EXTERNAL_API_KEY\n        EXTERNAL_API_TIMEOUT: !Ref EXTERNAL_API_TIMEOUT\n        DB_ENDPOINT: !Ref DB_ENDPOINT\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Start SAM Locally with the Environment Variables:"}),"\nRun the SAM CLI command to start your API, specifying the environment variable file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sam local start-api --env-vars env.json\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"configuring-environment-variables-on-aws-lambda",children:"Configuring Environment Variables on AWS Lambda"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Log in to the AWS Management Console:"}),"\nGo to the AWS Lambda service."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Select Your Lambda Function:"}),"\nFind and select the function you want to configure."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Edit the Environment Variables:"}),'\nUnder the "Configuration" tab, select "Environment variables." Click on "Edit" and add the variables as key-value pairs.']}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Key: ",(0,i.jsx)(n.code,{children:"DB_USER"}),"  Value: ",(0,i.jsx)(n.code,{children:"postgres"})]}),"\n",(0,i.jsxs)(n.li,{children:["Key: ",(0,i.jsx)(n.code,{children:"DB_PASS"}),"  Value: ",(0,i.jsx)(n.code,{children:"postgres"})]}),"\n",(0,i.jsx)(n.li,{children:"... (add all variables listed above)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Save Changes:"}),"\nAfter entering all the required environment variables, make sure to save the changes."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var i=r(6540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);