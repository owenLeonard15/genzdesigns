(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),s=(a(66),a(8)),i=a(9),o=a(12),m=a(10),u=a(11),d=(a(68),a(7)),f=(a(70),a(52)),p=a.n(f),E=a(128),g=a(129),h=a(53),v=a.n(h),b=a(2),N=(a(82),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).componentDidMount=function(){a.updateIndicator()},a.componentDidUpdate=function(){a.updateIndicator()},a.updateIndicator=function(){for(var e=document.getElementsByClassName("circle"),t=document.getElementsByClassName("line"),n=0;n<e.length;n++)e[n].setAttribute("fill","transparent"),e[n].setAttribute("stroke","white"),e[n].classList.remove("animateIn");for(var l=0;l<t.length;l++)t[l].setAttribute("stroke-width","1");for(var r=0;r<e.length;r++)r<=a.props.curSection&&(e[r].setAttribute("fill","white"),e[r].setAttribute("stroke","white"));for(var c=0;c<t.length;c++)c<a.props.curSection&&t[c].setAttribute("stroke-width","3");e[a.props.curSection].classList.add("animateIn"),e[a.props.curSection].setAttribute("fill","white")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"indicator"},l.a.createElement("svg",{height:"300",width:"70"},l.a.createElement("line",{className:"line",x1:"50",y1:"50",x2:"50",y2:"93",style:{stroke:"white"}}),l.a.createElement("circle",{onClick:function(t){return e.props.handleCircleClick(t.target)},className:"circle",id:"1",cx:"50",cy:"50",r:"8",stroke:"white",strokeWidth:"1",fill:"transparent"}),l.a.createElement("line",{className:"line",x1:"50",y1:"108",x2:"50",y2:"143",style:{stroke:"white"}}),l.a.createElement("circle",{onClick:function(t){return e.props.handleCircleClick(t.target)},className:"circle",id:"2",cx:"50",cy:"100",r:"8",stroke:"white",strokeWidth:"1",fill:"transparent"}),l.a.createElement("line",{className:"line",x1:"50",y1:"158",x2:"50",y2:"193",style:{stroke:"white"}}),l.a.createElement("circle",{onClick:function(t){return e.props.handleCircleClick(t.target)},className:"circle",id:"3",cx:"50",cy:"150",r:"8",stroke:"white",strokeWidth:"1",fill:"transparent"}),l.a.createElement("line",{className:"line",x1:"50",y1:"208",x2:"50",y2:"243",style:{stroke:"white"}}),l.a.createElement("circle",{onClick:function(t){return e.props.handleCircleClick(t.target)},className:"circle",id:"4",cx:"50",cy:"200",r:"8",stroke:"white",strokeWidth:"1",fill:"transparent"}),l.a.createElement("circle",{onClick:function(t){return e.props.handleCircleClick(t.target)},className:"circle",id:"5",cx:"50",cy:"250",r:"8",stroke:"white",strokeWidth:"1",fill:"transparent"}),"Sorry, your browser does not support inline SVG.")))}}]),t}(l.a.Component)),y=a(54),w=a.n(y),k=a(3),C=(a(92),a(55)),S=a.n(C),x=0,O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).componentDidMount=function(){window.scrollTo(0,0),window.addEventListener("scroll",e.handleScroll,{passive:!0}),b.Events.scrollEvent.register("begin",function(){}),b.Events.scrollEvent.register("end",function(){}),x=window.innerWidth,console.log(x)},e.startMove=function(){e.setState({intervalId:setInterval(e.frame,100)})},e.frame=function(){10===e.state.percentage?clearInterval(e.state.intervalId):e.setState({percentage:e.state.percentage+1})},e.handleCircleClick=function(t){var a=parseInt(t.id)-1;e.setState({curSection:a}),0===a?e.scrollToTop():1===a?b.scroller.scrollTo("section1",{duration:800,delay:0,smooth:"easeInOutQuart"}):2===a?b.scroller.scrollTo("section2",{duration:800,delay:0,smooth:"easeInOutQuart"}):3===a?b.scroller.scrollTo("section3",{duration:800,delay:0,smooth:"easeInOutQuart"}):4===a&&b.scroller.scrollTo("section4",{duration:800,delay:0,smooth:"easeInOutQuart"})},e.handleScroll=function(){var t=e.state.curScroll;window.scrollY>t&&e.setState({isScrolling:!0}),e.setState({curScroll:window.scrollY});var a=1/t*15;a<.15&&(a=0),document.getElementsByClassName("box")[0].setAttribute("opacity",a);var n=document.getElementsByClassName("title")[0];t>250?n.classList="title animateOut":t<250&&(n.classList="title animateIn");var l=document.getElementsByClassName("title")[1],r=document.getElementById("description");t>400&&t<800?l.classList="title animateIn":(t<400||t>800)&&(l.classList="title animateOut"),t>450&&t<850?r.classList="animateIn":(t<450||t>850)&&(r.classList="animateOut");var c=document.getElementsByClassName("progress");if(t>1250&&t<1850){for(var s=0;s<c.length;s++)c[s].classList="progress animateIn";e.startMove()}var i=document.getElementsByClassName("arrows")[0];t>400?i.classList="arrows animateOut":t<30&&(i.classList="arrows animateIn"),t<400?e.setState({curSection:0}):t>400&&t<1200?e.setState({curSection:1}):t>1200&&t<3300?e.setState({curSection:2}):t>3300&&t<4e3?e.setState({curSection:3}):e.setState({curSection:4})},e.state={curSection:0,curScroll:0,isScrolling:!1,percentage:0,intervalId:null,curImage:S.a},e.scrollToTop=e.scrollToTop.bind(Object(d.a)(Object(d.a)(e))),e.startMove=e.startMove.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"scrollToTop",value:function(){b.animateScroll.scrollToTop()}},{key:"scrollTo",value:function(){b.scroller.scrollTo("scroll-to-element",{duration:800,delay:0,smooth:"easeInOutQuart"})}},{key:"scrollToWithContainer",value:function(){new Promise(function(e,t){b.Events.scrollEvent.register("end",function(){e(),b.Events.scrollEvent.remove("end")}),b.scroller.scrollTo("scroll-container",{duration:800,delay:0,smooth:"easeInOutQuart"})}).then(function(){return b.scroller.scrollTo("scroll-container-second-element",{duration:800,delay:0,smooth:"easeInOutQuart",containerId:"scroll-container"})})}},{key:"componentWillUnmount",value:function(){b.Events.scrollEvent.remove("begin"),b.Events.scrollEvent.remove("end")}},{key:"render",value:function(){var e=4*this.state.percentage;return l.a.createElement(l.a.Fragment,null,x>1e3?l.a.createElement("div",{className:"fullscreen-bg"},l.a.createElement("video",{loop:!0,muted:!0,autoPlay:!0,className:"fullscreen-bg-video"},l.a.createElement("source",{src:p.a,type:"video/mp4"}),"Sorry, your browser doesn't support embedded videos.")):null,l.a.createElement("div",{className:"home"},l.a.createElement(N,{curSection:this.state.curSection,handleCircleClick:this.handleCircleClick}),l.a.createElement(E.a,{className:"section container-fluid"},l.a.createElement("div",null,l.a.createElement("h2",{className:"title animateIn",id:"test"},l.a.createElement("span",{id:"smaller"},"WELCOME TO"),l.a.createElement("br",null)," GenZ Designs"),l.a.createElement("svg",{className:"box",height:"15",width:"900"},l.a.createElement("line",{x1:"0",y1:"0",x2:"1200",y2:"0",style:{stroke:"white",strokeWidth:"3"}},l.a.createElement("animate",{attributeType:"XML",attributeName:"x1",from:"450",to:"0",dur:"2s",fill:"freeze"}),l.a.createElement("animate",{attributeType:"XML",attributeName:"x2",from:"450",to:"900",dur:"2s",fill:"freeze"}),l.a.createElement("animate",{attributeType:"style",attributeName:"stroke",from:"black",to:"white",dur:"3s",fill:"freeze"}),l.a.createElement("animate",{attributeType:"style",attributeName:"strokeWidth",from:"10",to:"10",dur:"3s",fill:"freeze"})))),l.a.createElement(b.Link,{activeClass:"active",className:"section1",to:"section1",spy:!0,smooth:!0,duration:500},l.a.createElement("svg",{className:"arrows",onClick:this.scrollNext},l.a.createElement("path",{className:"a1",d:"M0 0 L30 32 L60 0"}),l.a.createElement("path",{className:"a2",d:"M0 20 L30 52 L60 20"}),l.a.createElement("path",{className:"a3",d:"M0 40 L30 72 L60 40"})))),l.a.createElement(b.Element,{id:"section1",className:"element"},l.a.createElement(E.a,{className:"section container-fluid"},l.a.createElement("div",{className:"subsection"},l.a.createElement("h3",{className:"title"},"Who We Are"),l.a.createElement("p",{id:"description",className:"invisible"},"Genz Designs is a digital experience consulting firm that utilizes expert knowledge, thorough research, and data-driven design principles to build unique marketing, branding, and design strategies",l.a.createElement("br",null),l.a.createElement("strong",null,"to help companies connect with Generation Z."))),l.a.createElement("div",{className:"subsection"},l.a.createElement(k.Parallax,{className:"custom-class",offsetXMax:20,offsetXMin:-20,slowerScrollRate:!0,tag:"figure"},l.a.createElement("img",{id:"profile",src:v.a,alt:"profile"})),l.a.createElement("p",{id:"profileDescription"},"Andrew Roth ",l.a.createElement("br",null),"- Founder, CEO, Member of Generation Z")))),l.a.createElement(b.Element,{id:"section2",className:"element"},l.a.createElement(E.a,{className:"section2 container-fluid"},l.a.createElement(g.a,{lg:3,md:3},l.a.createElement(k.Parallax,{className:"custom-class",offsetYMax:20,offsetYMin:-20,slowerScrollRate:!0,tag:"figure"},l.a.createElement("h4",{className:"bigTitle"},"Why",l.a.createElement("br",null)," GenZ?")),l.a.createElement("p",{id:"subtitle"},"Because if you want your business to succeed,",l.a.createElement("br",null),"you don't have a choice")),l.a.createElement(g.a,{lg:9,md:9,id:"secondColumn"},l.a.createElement("p",{className:"graphCaption"},"By 2020, we will make up nearly",l.a.createElement("br",null),"half of all consumers "),l.a.createElement("div",{className:"progress animateOut",style:{padding:"0 0 0 15vh"}},l.a.createElement(k.Parallax,{className:"custom-class",offsetYMax:-20,offsetYMin:20,slowerScrollRate:!0,tag:"figure"},l.a.createElement(w.a,{id:"progressBar",percentage:e,text:"".concat(e,"%"),background:!0,initialAnimation:!0,backgroundPadding:3,styles:{zIndex:"-2",background:{fill:"rgba(0,0,0,.3)"},text:{fill:"#fff",fontSize:"16px"},path:{stroke:"#fff"},trail:{stroke:"transparent"}}}))))),l.a.createElement(E.a,{className:"container-fluid"},l.a.createElement("div",{className:"subsection3"},l.a.createElement("h3",{className:"title"},"Generation Z uses technology differently"),l.a.createElement(E.a,{id:"pics"},l.a.createElement(k.Parallax,{offsetXMax:-20,offsetXMin:20,slowerScrollRate:!0,tag:"figure"},l.a.createElement("div",{id:"picOne",className:"gallery"},l.a.createElement("div",{className:"overlay"},l.a.createElement("p",{className:"fact"},"$44 Billion in yearly GenZ purchasing power")))),window.innerWidth>700?l.a.createElement(k.Parallax,{offsetYMax:15,offsetYMin:-15,slowerScrollRate:!0,tag:"figure"},l.a.createElement("div",{id:"picTwo",className:"gallery"},l.a.createElement("div",{className:"overlay"},l.a.createElement("p",{className:"fact"},"Our attention span is short. 8 seconds short.")))):l.a.createElement("div",{id:"picTwo",className:"gallery"},l.a.createElement("div",{className:"overlay"},l.a.createElement("p",{className:"fact"},"Our attention span is short. 8 seconds short."))),l.a.createElement(k.Parallax,{offsetXMax:20,offsetXMin:-20,slowerScrollRate:!0,tag:"figure"},l.a.createElement("div",{id:"picThree",className:"gallery"},l.a.createElement("div",{className:"overlay"},l.a.createElement("p",{className:"fact"},"86% use social media to learn about new products"))))))),l.a.createElement(E.a,{className:"container-fluid"},l.a.createElement("div",{className:"subsection3"},l.a.createElement("h3",{className:"title",id:"left"},"To reach GenZ,",l.a.createElement("br",null)," you need to understand them."),l.a.createElement(E.a,{id:"pics"},l.a.createElement(k.Parallax,{offsetXMax:-15,offsetXMin:20,slowerScrollRate:!0,tag:"figure"},l.a.createElement("h4",{className:"bigTitle2"},"How We Do It..."))),l.a.createElement(b.Link,{activeClass:"active",className:"section1",to:"section3",spy:!0,smooth:!0,duration:500},l.a.createElement("svg",{className:"arrows2",onClick:this.scrollNext},l.a.createElement("path",{className:"a1",d:"M0 0 L30 32 L60 0"}),l.a.createElement("path",{className:"a2",d:"M0 20 L30 52 L60 20"}),l.a.createElement("path",{className:"a3",d:"M0 40 L30 72 L60 40"})))))),l.a.createElement(b.Element,{id:"section3",className:"element"},l.a.createElement(E.a,{className:"container-fluid section4"},l.a.createElement("div",{className:"infocard"},l.a.createElement("h6",null,"The GenZ-Score"),l.a.createElement("p",{id:"fact2",className:"fact"},"A GenZ Score is a score given to your business based on its engagement potential for Generation Z. The score is based on 50+ well researched  quantitative and qualitative factors, weighted differently based on GenZ research and compiled to generate sub-scores and an overall GenZ Score."),l.a.createElement("button",{className:"button button--wayra button--border-thick button--text-upper button--size-s"},"LEARN MORE")))),l.a.createElement(b.Element,{id:"section4",className:"element"},l.a.createElement(E.a,{className:"container-fluid section4"},l.a.createElement("div",{className:"contact-banner"},l.a.createElement("h6",null,"Contact Us"),l.a.createElement("p",{id:"fact2",className:"fact"},"Send us an email at email@tbd.com or click the button below to",l.a.createElement("br",null),"get your free 3 pager, or schedule a consultation"),l.a.createElement("button",{className:"button button--wayra button--border-thick button--text-upper button--size-s"},"LEARN MORE"))))))}}]),t}(l.a.Component),I=a(60),T=a.n(I),L=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).updateActive=function(t){e.setState({activePage:t.target.id})},e.toggle=function(){e.setState({toggled:!e.state.toggled}),e.state.toggled?(document.getElementById("toggle").className="fas fa-times",document.getElementById("logo").className="animateOut"):(document.getElementById("toggle").className="fas fa-bars",document.getElementById("logo").className="animateIn")},e.state={toggled:!0,activePage:"home"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=l.a.createElement(l.a.Fragment,null,l.a.createElement("i",{id:"toggle",className:"fas fa-bars",onClick:this.toggle}),l.a.createElement("img",{src:T.a,alt:"logo",id:"logo",className:"animateIn"})),a=l.a.createElement("div",{id:"navList",className:"animateIn"},"home"===this.state.activePage?l.a.createElement("p",{id:"home",className:"active",onClick:function(t){return e.updateActive(t)}},"Home"):l.a.createElement("p",{id:"home",onClick:function(t){return e.updateActive(t)}},"Home"),"portfolio"===this.state.activePage?l.a.createElement("p",{id:"portfolio",className:"active",onClick:function(t){return e.updateActive(t)}},"Portfolio"):l.a.createElement("p",{id:"portfolio",onClick:function(t){return e.updateActive(t)}},"Portfolio"),"services"===this.state.activePage?l.a.createElement("p",{id:"services",className:"active",onClick:function(t){return e.updateActive(t)}},"Services"):l.a.createElement("p",{id:"services",onClick:function(t){return e.updateActive(t)}},"Services"),"info"===this.state.activePage?l.a.createElement("p",{id:"info",className:"active",onClick:function(t){return e.updateActive(t)}},"Info + Contact"):l.a.createElement("p",{id:"info",onClick:function(t){return e.updateActive(t)}},"Info + Contact"));return l.a.createElement(k.ParallaxProvider,null,l.a.createElement("div",{className:"App"},t,this.state.toggled?null:a,this.state.toggled?null:l.a.createElement("div",{className:"fullscreen-bg",id:"shell"}),l.a.createElement(O,{handleScroll:this.state.isScrolling})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t,a){e.exports=a.p+"static/media/blue.b254c5d0.mp4"},53:function(e,t,a){e.exports=a.p+"static/media/rothProfile.a3e2cff1.png"},55:function(e,t,a){e.exports=a.p+"static/media/rothProfile.2e7b8723.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/GenZlogo.ab3f3a43.png"},61:function(e,t,a){e.exports=a(126)},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},82:function(e,t,a){}},[[61,2,1]]]);
//# sourceMappingURL=main.f464f6ec.chunk.js.map