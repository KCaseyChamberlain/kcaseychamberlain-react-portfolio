(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/cover-image.d18630c7.jpg"},,function(e,a,t){e.exports=t.p+"static/media/resume-image1.16e4ffc0.jpg"},function(e,a,t){e.exports=t.p+"static/media/resume-image2.d3d0d01d.jpg"},function(e,a,t){e.exports=t(21)},,,,,function(e,a,t){},,function(e,a,t){e.exports=t.p+"static/media/deep-thoughts.2ec3eda2.jpg"},function(e,a,t){e.exports=t.p+"static/media/copy-cat-games.7539bfce.jpg"},function(e,a,t){e.exports=t.p+"static/media/6day-six-weather.a4fcf86f.jpg"},function(e,a,t){e.exports=t.p+"static/media/uhoo.b555abde.jpg"},function(e,a,t){e.exports=t.p+"static/media/food-festival.d153a1b3.jpg"},function(e,a,t){e.exports=t.p+"static/media/techite.b9faad06.jpg"},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(3),c=t.n(r),m=(t(13),t(1));var i=function(e){var a=e.contactSelected,t=e.setContactSelected,l=e.aboutSelected,r=e.setAboutSelected,c=e.portfolioSelected,m=e.setPortfolioSelected,i=e.resumeSelected,s=e.setResumeSelected;return n.a.createElement("header",{className:"flex-row px-1"},n.a.createElement("h2",null,n.a.createElement("a",{"data-testid":"link",href:"/"},"Casey Chamberlain")),n.a.createElement("nav",null,n.a.createElement("ul",{className:"flex-row"},n.a.createElement("li",{className:"mx-2 ".concat(l&&"navActive")},n.a.createElement("a",{"data-testid":"about",href:"#about",onClick:function(){r(!0),t(!1),m(!1),s(!1)}},"About Me")),n.a.createElement("li",{className:"mx-2 ".concat(a&&"navActive")},n.a.createElement("a",{"data-testid":"contact",href:"#contact",onClick:function(){t(!0),r(!1),m(!1),s(!1)}},"Contact Me")),n.a.createElement("li",{className:"mx-2 ".concat(c&&"navActive")},n.a.createElement("a",{"data-testid":"portfolio",href:"#portfolio",onClick:function(){m(!0),r(!1),t(!1),s(!1)}},"My Portfolio")),n.a.createElement("li",{className:"mx-2 ".concat(i&&"navActive")},n.a.createElement("a",{"data-testid":"resume",href:"#resume",onClick:function(){s(!0),r(!1),t(!1),m(!1)}},"My Resume")))))},s=t(4),o=t.n(s);var d=function(){return n.a.createElement("section",{className:"my-5"},n.a.createElement("h1",{id:"about"},"Who is kcaseychamberlain?"),n.a.createElement("img",{src:o.a,className:"my-2",style:{width:"55%"},alt:"cover"}),n.a.createElement("div",{className:"my-2"},n.a.createElement("p",null,"Recent full stack web developer graduate with previous analyst experience. Professionally educated at the University of Utah. Graduated from Coding Bootcamp in the spring of 2022. Skills and experiences in HTML, CSS, JavaScript, Node.js, Express.js, and MySQL. Strengths in teamwork, meeting deadlines, creativity, and self reliance. Known to be a hyperactive and determined person passionate about developing full stack web applications."),n.a.createElement("p",null,"With each project, my aim is to learn new skills and to make the most UI friendly experience. I recently created a full stack web application that included a storefront with a forum feature attached to the store. I worked on a team of four to develop a board game storefront that also allowed a social aspect to the board game community. I\u2019m excited to leverage my skills as part of a fast-paced quality-driven team to build better experiences for the users who will come across my work."),n.a.createElement("p",null,"My technical experience as a shipping analyst for an international market for one of \u201cAmerica\u2019s Best Midsize Employers\u201d (Forbes), has taught me the importance of the corporate work setting and communication. My experience as an analyst and in corporate communication makes me a strong addition as a developer with a mindset geared towards the small details and the user.")))};var u=function(){return n.a.createElement("footer",{className:"flex-row px-1"},n.a.createElement("nav",null,n.a.createElement("ul",{className:"flex-row"},n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{"data-testid":"github",href:"https://github.com/KCaseyChamberlain",target:"blank"},"GitHub")),n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{"data-testid":"linkedin",href:"https://www.linkedin.com/in/kcaseychamberlain",target:"blank"},"LinkedIn")),n.a.createElement("li",{className:"mx-2"},n.a.createElement("a",{"data-testid":"insta",href:"https://www.instagram.com/khamberlain/?hl=en",target:"blank"},"Instagram")))))},h=t(5);var p=function(){var e=Object(l.useState)({name:"",email:"",message:""}),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(""),i=Object(m.a)(c,2),s=i[0],o=i[1],d=t.name,u=t.email,p=t.message,E=function(e){if("email"===e.target.name){var a=(t=e.target.value,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()));o(a?"":"Your email is invalid.")}else e.target.value.length?o(""):o("".concat(e.target.name," is required."));var t};return n.a.createElement("section",null,n.a.createElement("h1",{"data-testid":"h1tag"},"Contact me"),n.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),s||(r(Object(h.a)({},e.target.name,e.target.value)),console.log("Form",t))}},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"name"},"Name:"),n.a.createElement("input",{type:"text",name:"name",defaultValue:d,onBlur:E})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"email"},"Email address:"),n.a.createElement("input",{type:"email",name:"email",defaultValue:u,onBlur:E})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"message"},"Message:"),n.a.createElement("textarea",{name:"message",rows:"5",defaultValue:p,onBlur:E})),s&&n.a.createElement("div",null,n.a.createElement("p",{className:"error-text"},s)),n.a.createElement("button",{"data-testid":"button",type:"submit"},"Submit")))},E=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"flex-row "},n.a.createElement("div",{className:"modalContainer flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"Deep Thoughts"),n.a.createElement("a",{href:"https://guarded-wave-66695.herokuapp.com/",target:"blank"},n.a.createElement("img",{src:t(15),alt:"test",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This appication demonstrates M.E.R.N.")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/KCaseyChamberlain/deep-thoughts",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"modalContainer flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"Copy Cat Games"),n.a.createElement("a",{href:"https://morning-spire-87893.herokuapp.com/",target:"blank"},n.a.createElement("img",{src:t(16),alt:"test",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This full stack appication demonstrates collaboration and MySQL")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/KCaseyChamberlain/copy-cat-games",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"modalContainer flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"6Day Six Weather"),n.a.createElement("a",{href:"https://kcaseychamberlain.github.io/6day-six-weather/",target:"blank"},n.a.createElement("img",{src:t(17),alt:"test",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This application demonstrates the dynamic use of public APIs")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/KCaseyChamberlain/6day-six-weather",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"modalContainer flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"Uhoo"),n.a.createElement("a",{href:"https://kcaseychamberlain.github.io/uhoo/",target:"blank"},n.a.createElement("img",{src:t(18),alt:"test",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This application demonstrates the use of team work and many public APIs")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/KCaseyChamberlain/uhoo",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"modalContainer flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"Food Festival"),n.a.createElement("a",{href:"https://kcaseychamberlain.github.io/food-festival/",target:"blank"},n.a.createElement("img",{src:t(19),alt:"test",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This appication demonstrates offline functionality and code modularization for performance boosts")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://www.linkedin.com/in/kcaseychamberlain",target:"blank"},n.a.createElement("h4",null,"GitHub")))),n.a.createElement("div",{className:"modalContainer flex-row"},n.a.createElement("div",{className:"live-image "},n.a.createElement("h2",{className:"portfolio-name-title"},"Techite"),n.a.createElement("a",{href:"https://calm-garden-53998.herokuapp.com/",target:"blank"},n.a.createElement("img",{src:t(20),alt:"test",className:"img-thumbnail mx-1"})),n.a.createElement("p",null,"This application demonstrates full stack web development with a MySQL database")),n.a.createElement("div",{className:"live-repos "},n.a.createElement("a",{href:"https://github.com/KCaseyChamberlain/techite",target:"blank"},n.a.createElement("h4",null,"GitHub"))))))},f=t(6),g=t.n(f),b=t(7),v=t.n(b);var y=function(){return n.a.createElement("section",{className:"my-5"},n.a.createElement("h1",{id:"resume"},"My Resume"),n.a.createElement("img",{src:g.a,className:"my-2",style:{width:"50%"},alt:"resume page 1"}),n.a.createElement("img",{src:v.a,className:"my-2",style:{width:"50%"},alt:"resume page 2"}),n.a.createElement("div",{className:"my-2"},n.a.createElement("a",{"data-testid":"devresdoc",href:"https://docs.google.com/document/d/1JZmTZZerYMMK7dJCxq2Iew3pQl12C7OrLxBNVcnie2M/edit?usp=sharing",target:"blank"},n.a.createElement("h5",null,"Download & View Resume Here!")),n.a.createElement("h3",{id:"dev-pro"},"Developer Proficiencies:"),n.a.createElement("p",null,"M.E.R.N., HTML, CSS, JavaScript, React JS, Node.JS, Express.JS, MongoDB, MySQL, NoSQL, Handlebars.JS, Bootstrap, Bulma.")))};var N=function(){var e=Object(l.useState)(!0),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(!1),s=Object(m.a)(c,2),o=s[0],h=s[1],f=Object(l.useState)(!1),g=Object(m.a)(f,2),b=g[0],v=g[1],N=Object(l.useState)(!1),w=Object(m.a)(N,2),x=w[0],k=w[1];return n.a.createElement("div",null,n.a.createElement(i,{contactSelected:o,setContactSelected:h,aboutSelected:t,setAboutSelected:r,portfolioSelected:b,setPortfolioSelected:v,resumeSelected:x,setResumeSelected:k}),n.a.createElement("main",null,t&&n.a.createElement(d,null),o&&n.a.createElement(p,null),b&&n.a.createElement(E,null),x&&n.a.createElement(y,null)),n.a.createElement(u,null))},w=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,22)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),r(e),c(e)})};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),w()}],[[8,3,2]]]);
//# sourceMappingURL=main.4e3ce2bc.chunk.js.map