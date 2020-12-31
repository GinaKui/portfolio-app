(this["webpackJsonpdev-portfolio"]=this["webpackJsonpdev-portfolio"]||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c(3),a=c(8),r=c.n(a),o=c(38),n=c(39),l=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsxs)("h1",{className:"display-3",children:["Hello, I'm ",Object(s.jsx)("span",{children:"Gina Kui"})]}),Object(s.jsx)("hr",{className:"my-2"}),Object(s.jsxs)("p",{className:"lead",children:[Object(s.jsx)("strong",{children:"MERN"})," stack web developer living in Toronto"]}),Object(s.jsxs)("ul",{className:"d-flex justify-content-center",children:[Object(s.jsx)("li",{style:{marginLeft:"-30px"},children:Object(s.jsxs)(n.a,{outline:!0,color:"dark",target:"_blank",href:"https://github.com/GinaKui",children:[Object(s.jsx)("i",{className:"fab fa-github"}),"\xa0github"]})}),Object(s.jsx)("li",{className:"ml-3",children:Object(s.jsxs)(n.a,{outline:!0,color:"dark",target:"_blank",href:"https://codepen.io/ginakui/pens/popular",children:[Object(s.jsx)("i",{className:"fab fa-codepen"}),"\xa0codepen"]})}),Object(s.jsx)("li",{className:"ml-3",children:Object(s.jsxs)(n.a,{outline:!0,color:"dark",target:"_blank",href:"https://www.freecodecamp.org/developerkui",children:[Object(s.jsx)("i",{className:"fab fa-free-code-camp"}),"\xa0freecodecamp"]})})]}),Object(s.jsxs)("p",{children:[Object(s.jsxs)("a",{href:"mailto:developerkui@outlook.com",children:[Object(s.jsx)("i",{className:"fas fa-envelope"}),"\xa0developerkui@outlook.com \xa0| \xa0"]}),Object(s.jsxs)("a",{href:"tel:+1.647.766.4746",children:[Object(s.jsx)("i",{className:"fas fa-phone-alt"}),"\xa0(647)766-4746"]})]})]})},d=c(46),j=c(47),h=c(48),p=c(41),u=c(42),b=c(43),m=c(44),g=c(45),x=c(17),f=c(51),O=c(40),k=function(e){var t=e.buttonImg,c=e.demoImg,a=e.className,r=e.projectName,o=Object(i.useState)(!1),l=Object(x.a)(o,2),d=l[0],j=l[1],h=function(){return j(!d)};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(n.a,{className:"bg-transparent",onClick:h,style:{padding:0},children:Object(s.jsx)("img",{src:t,width:"100%",height:"100%",alt:r})}),Object(s.jsx)(f.a,{isOpen:d,toggle:h,className:a,centered:!0,size:"lg",children:Object(s.jsx)(O.a,{children:Object(s.jsx)("img",{src:c,width:"100%",height:"100%",alt:"demo ".concat(r)})})})]})},v=(c(32),function(e){var t=e.project,c=t.name,i=t.description,a=t.img,r=t.demo;return Object(s.jsxs)(p.a,{className:"ProjectCard",children:[Object(s.jsx)(k,{buttonImg:a,demoImg:r||a,projectName:c}),Object(s.jsxs)(u.a,{children:[Object(s.jsx)(b.a,{children:c}),Object(s.jsx)(m.a,{children:i}),t.src_url&&Object(s.jsx)(g.a,{href:t.src_url,children:Object(s.jsx)("i",{className:"fab fa-github",title:"github source code"})}),t.deploy_url&&Object(s.jsx)(g.a,{href:t.deploy_url,children:"live"})]})]})});v.defaultProps={project:{name:"project",description:"brief description",img:"image url"}};var y=v,N=c.p+"static/media/contact-book.fefd4a63.png",_=c.p+"static/media/ekitten.ebccbbf2.png",S=c.p+"static/media/githuber.17884bff.png",P=c.p+"static/media/service-ticket.e241d07e.png",R=c.p+"static/media/themeColor.024bf93b.png",w=c.p+"static/media/hashkitten-demo.f002740f.gif",E=c.p+"static/media/serviceticket-demo.cb3d5160.gif",G=c.p+"static/media/githuber-demo.2a4d68fc.gif",I=c.p+"static/media/contactbook-demo.e9d811f5.gif",K=c.p+"static/media/themeColor-demo.e42d5c41.gif",A=(c(33),function(e){return Object(s.jsxs)(d.a,{className:"ProjectPage",children:[Object(s.jsx)(j.a,{children:Object(s.jsx)(h.a,{children:Object(s.jsx)("h2",{children:"MY PROJECTS"})})}),Object(s.jsx)(j.a,{children:e.projects.map((function(e){return Object(s.jsx)(h.a,{sm:"6",lg:"4",children:Object(s.jsx)(y,{project:e},e.id)})}))})]})});A.defaultProps={projects:[{id:1,name:"service-ticket",description:"React app to display service requests with modal dialog for editing. Redux toolkits are used to track status. App is styled using material-css",techs:["react","redux","javascript"],img:P,demo:E,deploy_url:"",src_url:"https://github.com/GinaKui/service-ticket"},{id:2,name:"search github users",description:"SPA built by react hooks and react-router-dom. Consume github API by axios",techs:["react","javascript"],img:S,demo:G,deploy_url:"https://search-github-developerkui.netlify.com/",src_url:"https://github.com/GinaKui/search-github-users"},{id:3,name:"hash-kitten",description:"react responsive SPA making async request using fetch API. App is styled using tachyons",techs:["react","javascript","tachyons","scss"],img:_,demo:w,deploy_url:"https://hashkitten19.netlify.com/",src_url:"https://github.com/GinaKui/hash-kitten"},{id:4,name:"contact book",description:"RESTful app builted by MERN (mongoose, express, react, node.js). User authorization is implemented using json web token",techs:["React","Node","Express.js","MongoDB"],img:N,demo:I,deploy_url:"https://contact-book-mern.herokuapp.com",src_url:"https://github.com/GinaKui/contact-book"},{id:5,name:"theme color",description:"Single page react app to pick color and generate theme color palette. Material-ui is used to style the app",techs:["react","material-ui","react-router-dom"],img:R,demo:K,deploy_url:"https://themepalette-gina.netlify.app/",src_url:"https://github.com/GinaKui/theme-color"}]};var C=A,M=c(50),T=c(0),B=c.n(T),q=c(49),D=function(e){var t=e.title,c=e.content;return Object(s.jsxs)(p.a,{className:"SkillCard text-center",children:[Object(s.jsx)(q.a,{tag:"h3",children:t}),Object(s.jsx)(u.a,{children:Object(s.jsx)(m.a,{children:c})})]})};D.propType={title:B.a.string.isRequired,content:B.a.string.isRequired};var F=D,J=(c(34),function(e){return Object(s.jsx)("div",{className:"Skill-parallax SkillPage",children:Object(s.jsxs)(d.a,{children:[Object(s.jsx)(j.a,{children:Object(s.jsx)(h.a,{children:Object(s.jsx)("h2",{children:"SKILLS TO SHARE"})})}),Object(s.jsx)(M.a,{children:e.skillSet.map((function(e){return Object(s.jsx)(F,{title:e.category,content:e.content},e.title)}))})]})})});J.defaultProps={skillSet:[{category:"Front End",content:"React, html5, css, sass, javascript, Bootstrap, Material-UI"},{category:"Back End",content:"Node.js, Express.js, MongoDB, RESTful apis"},{category:"Development Tooling",content:"Git, npm, webpack, babel, heroku"}]};var L=J,z=function(){return Object(s.jsx)("footer",{className:"Footer",children:Object(s.jsxs)("p",{children:["By ",Object(s.jsx)("a",{href:"https://github.com/GinaKui",target:"_blank",title:"github",children:"Gina Kui"}),", ",Object(s.jsx)("a",{href:"@mailto:developerkui@outlook.com",children:"developer@outlook.com"})]})})},H=function(){return Object(s.jsxs)("main",{className:"App",children:[Object(s.jsx)(l,{}),Object(s.jsx)(L,{}),Object(s.jsx)(C,{}),Object(s.jsx)(z,{})]})};c(35),c(36);r.a.render(Object(s.jsx)(H,{}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8001a1d6.chunk.js.map