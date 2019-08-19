(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),i=a(1),s=a(5),o=a(3),u=a(2),m=a(4),p={aboutMe:"AboutMe",contact:"Contact",home:"Home",skills:"Skills"},E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).setNextPage=function(e){a.setState({page:e})},a}return Object(m.a)(t,e),t}(l.a.Component),h=(a(6),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).jumpToHomePage=function(){a.props.setNextPage(p.home)},a.jumpToAboutMe=function(){a.props.setNextPage(p.aboutMe)},a.jumpToSkills=function(){a.props.setNextPage(p.skills)},a.jumpToContact=function(){a.props.setNextPage(p.contact)},a.state={page:"HomePage"},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"nav"},l.a.createElement("button",{onClick:this.jumpToHomePage},"Home"),l.a.createElement("button",{onClick:this.jumpToAboutMe},"Me"),l.a.createElement("button",{onClick:this.jumpToSkills},"Skills"),l.a.createElement("button",{onClick:this.jumpToContact},"Contact"))}}]),t}(l.a.Component)),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={page:p.aboutMe},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.page!==p.aboutMe?l.a.createElement(j,{page:this.state.page}):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"image-side"}),l.a.createElement("div",{className:"box"},l.a.createElement(h,{setNextPage:this.setNextPage}),l.a.createElement("h1",null,"About me"),l.a.createElement("ul",null,l.a.createElement("li",null,"Full Name: ",l.a.createElement("span",null,"Marta Kolodziej")),l.a.createElement("li",null,"Age: ",l.a.createElement("span",null,"25 Years")),l.a.createElement("li",null,"Job: ",l.a.createElement("span",null,"Front-end developer")),l.a.createElement("li",null,"Telephone: ",l.a.createElement("span",null,"123 456 789")),l.a.createElement("li",null,"E-mail: ",l.a.createElement("span",null,"marta.koodziej at gmail"))),l.a.createElement("hr",null),l.a.createElement("p",null," Recently I completed web programming course CodersCamp, which was organised by CodersCrew Association. During the course I learnt basic programming tools and technology. Basing on theoretical knowledge I created website by myself and a few simple applications with my team. I would like to learn and develop my skills. Working as a Junior Front-end Developer or an internship in software company would be for me great possibility to gain necessary experience and knowledge.")))}}]),t}(E),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={page:p.skills},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.page!==p.skills?l.a.createElement(j,{page:this.state.page}):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"image-side"}),l.a.createElement("div",{className:"box"},l.a.createElement(h,{setNextPage:this.setNextPage}),l.a.createElement("h1",null,"Skills"),l.a.createElement("ul",{className:"hard"},l.a.createElement("li",null,l.a.createElement("span",null,"Languages:"),l.a.createElement("ul",null,l.a.createElement("li",null,"HTML5"),l.a.createElement("li",null,"CSS3"),l.a.createElement("li",null,"JavaScript (ES6)"))),l.a.createElement("li",null,l.a.createElement("span",null,"Library:"),l.a.createElement("ul",null,l.a.createElement("li",null,"React"),l.a.createElement("li",null,"npm"))),l.a.createElement("li",null,l.a.createElement("span",null,"Tools:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Babel"),l.a.createElement("li",null,"Webpack"))),l.a.createElement("li",null,l.a.createElement("span",null,"Version control system and repository:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Git"),l.a.createElement("li",null,"GitHub")))),l.a.createElement("hr",null),l.a.createElement("ul",{className:"soft"},l.a.createElement("li",null,"Communication skills and ability to work in a team"),l.a.createElement("li",null,"Good organisational skills"),l.a.createElement("li",null,"Willingness to learn and develop"))))}}]),t}(E),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={page:p.contact},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.page!==p.contact?l.a.createElement(j,{page:this.state.page}):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"image-side"}),l.a.createElement("div",{className:"box"},l.a.createElement(h,{setNextPage:this.setNextPage}),l.a.createElement("h1",null,"Contact me"),l.a.createElement("ul",null,l.a.createElement("li",null,"Poland, Wroclaw"),l.a.createElement("li",null,"D\u0142uga 3, 12-123"),l.a.createElement("li",null,"123 456 789"),l.a.createElement("li",null,"marta.koodziej at gmail")),l.a.createElement("hr",null),l.a.createElement("div",{className:"thanks"},l.a.createElement("h1",null," Thank you for getting in touch! "),l.a.createElement("p",null," I appreciate you contacting me. ",l.a.createElement("br",null),"I will answer you as soon as possible."),l.a.createElement("h2",null," Have a great day! "))))}}]),t}(E),j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.page===p.home?l.a.createElement(f,null):this.props.page===p.aboutMe?l.a.createElement(b,null):this.props.page===p.skills?l.a.createElement(g,null):this.props.page===p.contact?l.a.createElement(d,null):null}}]),t}(l.a.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={page:p.home},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.page!==p.home?l.a.createElement(j,{page:this.state.page}):l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"image-side"}),l.a.createElement("div",{className:"box"},l.a.createElement(h,{setNextPage:this.setNextPage}),l.a.createElement("h1",{className:"home"},"Hello!"),l.a.createElement("h2",null,"My name is Marta Kolodziej"),l.a.createElement("h3",null,"and my passion is front-end")))}}]),t}(E),O=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null))}}]),t}(l.a.Component);r.a.render(l.a.createElement(O,null),document.querySelector("#root"))},6:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.4e0ad4b9.chunk.js.map