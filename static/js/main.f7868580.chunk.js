(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/cover-image.d18630c7.jpg"},,function(e,a,t){e.exports=t.p+"static/media/resume-image1.16e4ffc0.jpg"},function(e,a,t){e.exports=t.p+"static/media/resume-image2.d3d0d01d.jpg"},function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/my-budget.dbee5ad2.jpg"},function(e,a,t){e.exports=t.p+"static/media/deep-thoughts.2ec3eda2.jpg"},function(e,a,t){e.exports=t.p+"static/media/copy-cat-games.7539bfce.jpg"},function(e,a,t){e.exports=t.p+"static/media/6day-six-weather.a4fcf86f.jpg"},function(e,a,t){e.exports=t.p+"static/media/uhoo.b555abde.jpg"},function(e,a,t){e.exports=t.p+"static/media/food-festival.d153a1b3.jpg"},function(e,a,t){e.exports=t.p+"static/media/techite.b9faad06.jpg"},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(3),c=t.n(i),s=(t(13),t(1));var r=function(e){var a=e.contactSelected,t=e.setContactSelected,l=e.aboutSelected,i=e.setAboutSelected,c=e.portfolioSelected,s=e.setPortfolioSelected,r=e.resumeSelected,o=e.setResumeSelected;return n.a.createElement("header",{className:"flex-row px-1"},n.a.createElement("h2",null,n.a.createElement("a",{id:"app-creator",href:"/kcaseychamberlain-react-portfolio"},"Casey Chamberlain")),n.a.createElement("nav",null,n.a.createElement("ul",{className:"flex-row"},n.a.createElement("li",null,n.a.createElement("a",{className:"mx-2 nav-title ".concat(l&&"navActive"),href:"#about",onClick:function(){i(!0),t(!1),s(!1),o(!1)}},"About Me")),n.a.createElement("li",null,n.a.createElement("a",{className:"mx-2 nav-title ".concat(a&&"navActive"),href:"#contact",onClick:function(){t(!0),i(!1),s(!1),o(!1)}},"Contact Me")),n.a.createElement("li",null,n.a.createElement("a",{className:"mx-2 nav-title ".concat(c&&"navActive"),href:"#portfolio",onClick:function(){s(!0),i(!1),t(!1),o(!1)}},"My Portfolio")),n.a.createElement("li",null,n.a.createElement("a",{className:"mx-2 nav-title ".concat(r&&"navActive"),href:"#resume",onClick:function(){o(!0),i(!1),t(!1),s(!1)}},"My Resume")))))},o=t(4),m=t.n(o);var d=function(){return n.a.createElement("section",{className:"my-5"},n.a.createElement("h1",{id:"about"},"Who is kcaseychamberlain?"),n.a.createElement("img",{src:m.a,className:"my-2",style:{width:"45%"},alt:"Casey Chamberlain with dog name Cheif"}),n.a.createElement("div",{id:"about-text"},n.a.createElement("p",null,"Recent full stack web developer graduate with previous analyst experience. Professionally educated at the University of Utah. Graduated from Coding Bootcamp in the spring of 2022. Skills and experiences in HTML, CSS, JavaScript, Node.js, Express.js, and MySQL. Strengths in teamwork, meeting deadlines, creativity, and self reliance. Known to be a hyperactive and determined person passionate about developing full stack web applications."),n.a.createElement("p",null,"With each project, my aim is to learn new skills and to make the most UI friendly experience. I recently created a full stack web application that included a storefront with a forum feature attached to the store. I worked on a team of four to develop a board game storefront that also allowed a social aspect to the board game community. I\u2019m excited to leverage my skills as part of a fast-paced quality-driven team to build better experiences for the users who will come across my work."),n.a.createElement("p",null,"My technical experience as a shipping analyst for an international market for one of \u201cAmerica\u2019s Best Midsize Employers\u201d (Forbes), has taught me the importance of the corporate work setting and communication. My experience as an analyst and in corporate communication makes me a strong addition as a developer with a mindset geared towards the small details and the user.")))};var p=function(){return n.a.createElement("footer",{className:"flex-row px-1"},n.a.createElement("nav",null,n.a.createElement("ul",{className:"flex-row"},n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{"data-testid":"github",href:"https://github.com/KCaseyChamberlain",target:"blank"},"GitHub")),n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{"data-testid":"linkedin",href:"https://www.linkedin.com/in/kcaseychamberlain",target:"blank"},"LinkedIn")),n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{"data-testid":"insta",href:"https://www.instagram.com/khamberlain/?hl=en",target:"blank"},"Instagram")))))},u=t(5);var h=function(){var e=Object(l.useState)({name:"",email:"",message:""}),a=Object(s.a)(e,2),t=a[0],i=a[1],c=Object(l.useState)(""),r=Object(s.a)(c,2),o=r[0],m=r[1],d=t.name,p=t.email,h=t.message,f=function(e){if("email"===e.target.name){var a=(t=e.target.value,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()));m(a?"":"Your email is invalid.")}else e.target.value.length?m(""):m("".concat(e.target.name," is required."));var t};return n.a.createElement("section",null,n.a.createElement("h1",{"data-testid":"h1tag"},"Contact me"),n.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),o||(i(Object(u.a)({},e.target.name,e.target.value)),console.log("Form",t))}},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"name"},"Name:"),n.a.createElement("input",{type:"text",name:"name",defaultValue:d,onBlur:f})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"email"},"Email address:"),n.a.createElement("input",{type:"email",name:"email",defaultValue:p,onBlur:f})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"message"},"Message:"),n.a.createElement("textarea",{name:"message",rows:"5",defaultValue:h,onBlur:f})),o&&n.a.createElement("div",null,n.a.createElement("p",{className:"error-text"},o)),n.a.createElement("button",{"data-testid":"button",type:"submit"},"Submit")))},f=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"flex-row "},n.a.createElement("div",{className:"portfolioBlock flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"My Budget"),n.a.createElement("a",{href:"https://amir-mybudget.herokuapp.com/",target:"blank"},n.a.createElement("img",{src:t(15),alt:"my budget app demo",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This M.E.R.N. full stack application dynamically and safely displays the user's sensitive budgeting information once authenticated. JSON Web Token is utilized for secure authentication. This application was created with the aim to streamline and visualize the user's sensitive budget through user created categories. Bootstrap has been used to make the application's styling responsive to even mobile sizes.")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/AShariat/my-budget",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"portfolioBlock flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"Deep Thoughts"),n.a.createElement("a",{href:"https://guarded-wave-66695.herokuapp.com/",target:"blank"},n.a.createElement("img",{src:t(16),alt:"deep thoughts app demo",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This appication demonstrates a full stack M.E.R.N. project. This appication demonstrates a full stack M.E.R.N. project. This appication demonstrates a full stack M.E.R.N. project. This appication demonstrates a full stack M.E.R.N. project. This appication demonstrates a full stack M.E.R.N. project.")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/KCaseyChamberlain/deep-thoughts",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"portfolioBlock flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"Copy Cat Games"),n.a.createElement("a",{href:"https://morning-spire-87893.herokuapp.com/",target:"blank"},n.a.createElement("img",{src:t(17),alt:"copy cat games app demo",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This full stack appication demonstrates collaboration and MyLSQ. This full stack appication demonstrates collaboration and MyLSQ. This full stack appication demonstrates collaboration and MyLSQ. This full stack appication demonstrates collaboration and MyLSQ.")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/KCaseyChamberlain/copy-cat-games",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"portfolioBlock flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"6Day Six Weather"),n.a.createElement("a",{href:"https://kcaseychamberlain.github.io/6day-six-weather/",target:"blank"},n.a.createElement("img",{src:t(18),alt:"6 day six weather app demo",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This application demonstrates the dynamic use of public APIs. This application demonstrates the dynamic use of public APIs. This application demonstrates the dynamic use of public APIs. This application demonstrates the dynamic use of public APIs.")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/KCaseyChamberlain/6day-six-weather",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"portfolioBlock flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"Uhoo"),n.a.createElement("a",{href:"https://kcaseychamberlain.github.io/uhoo/",target:"blank"},n.a.createElement("img",{src:t(19),alt:"uhoo app demo",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This application demonstrates the use of team work and many public APIs. This application demonstrates the use of team work and many public APIs. This application demonstrates the use of team work and many public APIs.")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/KCaseyChamberlain/uhoo",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"portfolioBlock flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"Food Festival"),n.a.createElement("a",{href:"https://kcaseychamberlain.github.io/food-festival/",target:"blank"},n.a.createElement("img",{src:t(20),alt:"food festival app demo",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This appication demonstrates offline functionality and code modularization for performance boosts. This appication demonstrates offline functionality and code modularization for performance boosts. This appication demonstrates offline functionality and code modularization for performance boosts. This appication demonstrates offline functionality and code modularization for performance boosts.")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://www.linkedin.com/in/kcaseychamberlain",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"portfolioBlock flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"Techite"),n.a.createElement("a",{href:"https://calm-garden-53998.herokuapp.com/",target:"blank"},n.a.createElement("img",{src:t(21),alt:"techite app demo",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This application demonstrates full stack web development with a MySQL database. This application demonstrates full stack web development with a MySQL database. This application demonstrates full stack web development with a MySQL database. This application demonstrates full stack web development with a MySQL database. This application demonstrates full stack web development with a MySQL database.")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/KCaseyChamberlain/techite",target:"blank"},n.a.createElement("h4",null,"GitHub"))))))},b=t(6),E=t.n(b),g=t(7),v=t.n(g);var y=function(){return n.a.createElement("section",{className:"my-5"},n.a.createElement("h1",{id:"resume"},"My Resume"),n.a.createElement("img",{src:E.a,className:"my-2",style:{width:"50%"},alt:"resume page 1"}),n.a.createElement("img",{src:v.a,className:"my-2",style:{width:"50%"},alt:"resume page 2"}),n.a.createElement("div",{className:"my-2"},n.a.createElement("a",{"data-testid":"devresdoc",href:"https://docs.google.com/document/d/1JZmTZZerYMMK7dJCxq2Iew3pQl12C7OrLxBNVcnie2M/edit?usp=sharing",target:"blank"},n.a.createElement("h4",null,"Download & View Resume Here!")),n.a.createElement("h3",{id:"dev-pro"},"Developer Proficiencies:"),n.a.createElement("p",null,"M.E.R.N., HTML, CSS, JavaScript, React JS, Node.JS, Express.JS, MongoDB, MySQL, NoSQL, Handlebars.JS, Bootstrap, Bulma.")))};var k=function(){var e=Object(l.useState)(!0),a=Object(s.a)(e,2),t=a[0],i=a[1],c=Object(l.useState)(!1),o=Object(s.a)(c,2),m=o[0],u=o[1],b=Object(l.useState)(!1),E=Object(s.a)(b,2),g=E[0],v=E[1],k=Object(l.useState)(!1),w=Object(s.a)(k,2),N=w[0],x=w[1];return n.a.createElement("div",null,n.a.createElement(r,{contactSelected:m,setContactSelected:u,aboutSelected:t,setAboutSelected:i,portfolioSelected:g,setPortfolioSelected:v,resumeSelected:N,setResumeSelected:x}),n.a.createElement("main",null,t&&n.a.createElement(d,null),m&&n.a.createElement(h,null),g&&n.a.createElement(f,null),N&&n.a.createElement(y,null)),n.a.createElement(p,null))},w=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,23)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,i=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),i(e),c(e)})};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),w()}],[[8,3,2]]]);
//# sourceMappingURL=main.f7868580.chunk.js.map