"use strict";(self.webpackChunkdocs_spa=self.webpackChunkdocs_spa||[]).push([[2146],{9193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(4848),i=n(8453);const o={},a=void 0,s={id:"autobot-admin/center-package/center-repository",title:"center-repository",description:"The code snippet you've shared defines a repository interface for the CenterEntity entity using Spring Data JPA. Below is a detailed explanation:",source:"@site/docs/autobot-admin/center-package/center-repository.md",sourceDirName:"autobot-admin/center-package",slug:"/autobot-admin/center-package/center-repository",permalink:"/autobot-docs/docs/autobot-admin/center-package/center-repository",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/autobot-admin/center-package/center-repository.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"center-entity",permalink:"/autobot-docs/docs/autobot-admin/center-package/center-entity"},next:{title:"center-service",permalink:"/autobot-docs/docs/autobot-admin/center-package/center-service"}},c={},d=[{value:"Code Breakdown:",id:"code-breakdown",level:3},{value:"1. <strong>Package Declaration:</strong>",id:"1-package-declaration",level:4},{value:"2. <strong>Imports:</strong>",id:"2-imports",level:4},{value:"3. <strong>CenterRepository Interface:</strong>",id:"3-centerrepository-interface",level:4}];function p(e){const t={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The code snippet you've shared defines a repository interface for the ",(0,r.jsx)(t.code,{children:"CenterEntity"})," entity using Spring Data JPA. Below is a detailed explanation:"]}),"\n",(0,r.jsx)(t.h3,{id:"code-breakdown",children:"Code Breakdown:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"package autobot.app.admin.center;\n\nimport org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.JpaSpecificationExecutor;\n\npublic interface CenterRepository extends JpaRepository<CenterEntity, Long>, JpaSpecificationExecutor<CenterEntity> {\n}\n"})}),"\n",(0,r.jsxs)(t.h4,{id:"1-package-declaration",children:["1. ",(0,r.jsx)(t.strong,{children:"Package Declaration:"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"package autobot.app.admin.center;\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["This indicates that the ",(0,r.jsx)(t.code,{children:"CenterRepository"})," interface is part of the ",(0,r.jsx)(t.code,{children:"autobot.app.admin.center"}),' package, which likely deals with the "center" domain within the application.']}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"2-imports",children:["2. ",(0,r.jsx)(t.strong,{children:"Imports:"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"import org.springframework.data.jpa.repository.JpaRepository;\nimport org.springframework.data.jpa.repository.JpaSpecificationExecutor;\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"JpaRepository"})}),": This is a Spring Data JPA interface that provides CRUD (Create, Read, Update, Delete) operations and paging/sorting functionality. It provides default methods like ",(0,r.jsx)(t.code,{children:"save()"}),", ",(0,r.jsx)(t.code,{children:"findAll()"}),", ",(0,r.jsx)(t.code,{children:"delete()"}),", etc."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"JpaSpecificationExecutor"})}),": This interface adds the capability to execute queries based on JPA criteria API. It allows you to create complex queries that might involve joining tables, filtering by multiple conditions, etc."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"3-centerrepository-interface",children:["3. ",(0,r.jsx)(t.strong,{children:"CenterRepository Interface:"})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-java",children:"public interface CenterRepository extends JpaRepository<CenterEntity, Long>, JpaSpecificationExecutor<CenterEntity> {\n}\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"CenterRepository"})}),": This is the repository interface for managing ",(0,r.jsx)(t.code,{children:"CenterEntity"})," objects."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"JpaRepository<CenterEntity, Long>"})}),": By extending ",(0,r.jsx)(t.code,{children:"JpaRepository"}),", the repository inherits default CRUD operations for the ",(0,r.jsx)(t.code,{children:"CenterEntity"}),". The second generic type (",(0,r.jsx)(t.code,{children:"Long"}),") is the type of the primary key in ",(0,r.jsx)(t.code,{children:"CenterEntity"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"JpaSpecificationExecutor<CenterEntity>"})}),": By extending this interface, the repository is also capable of executing complex queries using specifications (criteria queries), enabling dynamic filtering."]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>s});var r=n(6540);const i={},o=r.createContext(i);function a(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);