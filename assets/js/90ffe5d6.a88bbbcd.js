(self.webpackChunkapplied_genomics=self.webpackChunkapplied_genomics||[]).push([[4],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6267:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var o=n(2122),i=n(9756),r=(n(7294),n(3905)),a={id:"week-1",title:"Environment Setup",description:"",sidebar_label:"Week 1",sidebar_position:1},l={unversionedId:"week-1",id:"week-1",isDocsHomePage:!1,title:"Environment Setup",description:"",source:"@site/docs/week_01.md",sourceDirName:".",slug:"/week-1",permalink:"/Applied-Genomics/docs/week-1",editUrl:"https://github.com/Functional-Genomics-Lab/Applied-Genomics/edit/main/docs/week_01.md",version:"current",sidebar_label:"Week 1",sidebarPosition:1,frontMatter:{id:"week-1",title:"Environment Setup",description:"",sidebar_label:"Week 1",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/Applied-Genomics/docs/overview"},next:{title:"Reproducible Research",permalink:"/Applied-Genomics/docs/week_02/intro"}},s=[{value:"This is not a programming class; this is a \u201cworkflows\u201d class",id:"this-is-not-a-programming-class-this-is-a-workflows-class",children:[]},{value:"Why reproducible Research?",id:"why-reproducible-research",children:[{value:"Computing",id:"computing",children:[]},{value:"Money",id:"money",children:[]},{value:"Time",id:"time",children:[]}]},{value:"How are we going to be more Reproducible?",id:"how-are-we-going-to-be-more-reproducible",children:[]},{value:"How big of a problem is this?",id:"how-big-of-a-problem-is-this",children:[]},{value:"Logging into Sysbio",id:"logging-into-sysbio",children:[{value:"Connecting Remotely",id:"connecting-remotely",children:[]},{value:"Setting up VS Code",id:"setting-up-vs-code",children:[]},{value:"Login using Remote-SSH",id:"login-using-remote-ssh",children:[]}]},{value:"Intro to Unix",id:"intro-to-unix",children:[{value:"Some basic commands",id:"some-basic-commands",children:[]}]}],u={toc:s};function c(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"this-is-not-a-programming-class-this-is-a-workflows-class"},"This is not a programming class; this is a \u201cworkflows\u201d class"),(0,r.kt)("h2",{id:"why-reproducible-research"},"Why reproducible Research?"),(0,r.kt)("p",null,"To reduce wasted resources."),(0,r.kt)("h3",{id:"computing"},"Computing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the right tool for the job."),(0,r.kt)("li",{parentName:"ul"},"Running computational intensive things on your laptop is too little."),(0,r.kt)("li",{parentName:"ul"},"Running jobs that are precise wastes compute time in the cluster that you or\nsomeone else could be using for other things.")),(0,r.kt)("h3",{id:"money"},"Money"),(0,r.kt)("p",null,"Funding runs out. Waiting for results to come back, or reproducing old results\nrequires time of highly trained individuals, which is expensive."),(0,r.kt)("h3",{id:"time"},"Time"),(0,r.kt)("p",null,"Save time for your future self, and for researchers who come after you."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What if you're about to graduate and your hard-drive dies(The results are too\nlarge for a backup on a usb)? How quickly could you reproduce that work?"),(0,r.kt)("li",{parentName:"ul"},"How would you work with a new undergraduate in your lab?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"How would they make substantial contributions?"),(0,r.kt)("li",{parentName:"ul"},"How would could you trust them to work on your research without fear that\nthey may break something?"))),(0,r.kt)("li",{parentName:"ul"},"When you go to write a manuscript, how would you share your code?")),(0,r.kt)("h2",{id:"how-are-we-going-to-be-more-reproducible"},"How are we going to be more Reproducible?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Avoiding homegrown solutions, instead favoring community curated efforts"),(0,r.kt)("li",{parentName:"ul"},"Documentation"),(0,r.kt)("li",{parentName:"ul"},"Version Control"),(0,r.kt)("li",{parentName:"ul"},"Utilizing build systems")),(0,r.kt)("h2",{id:"how-big-of-a-problem-is-this"},"How big of a problem is this?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/leipzig/awesome-reproducible-research"},"Awesome Reproducible\nResearch")),(0,r.kt)("h2",{id:"logging-into-sysbio"},"Logging into Sysbio"),(0,r.kt)("p",null,"Just to check that everyone has access and get any issues out of the way!"),(0,r.kt)("h3",{id:"connecting-remotely"},"Connecting Remotely"),(0,r.kt)("p",null,"Utilize the UTD VPN Service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.utdallas.edu/oit/vpn/"},"OIT support link")),(0,r.kt)("li",{parentName:"ul"},"Enroll in NetIDplus"),(0,r.kt)("li",{parentName:"ul"},"Install the Cisco AnyConnect VPN Software"),(0,r.kt)("li",{parentName:"ul"},"Connect to the Cisco AnyConnect VPN System")),(0,r.kt)("h3",{id:"setting-up-vs-code"},"Setting up ",(0,r.kt)("a",{parentName:"h3",href:"https://code.visualstudio.com/"},"VS Code")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/#alt-downloads"},"correct install for your\nplatform")),(0,r.kt)("li",{parentName:"ol"},"Install"),(0,r.kt)("li",{parentName:"ol"},"Search in extensions for ",(0,r.kt)("inlineCode",{parentName:"li"},"Functional Genomics"))),(0,r.kt)("h3",{id:"login-using-remote-ssh"},"Login using Remote-SSH"),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},"Click the green button"),(0,r.kt)("li",{parentName:"ol"},"Connect to Host..."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"<netid>@sysbio.utdallas.edu")," (Or see ",(0,r.kt)("a",{parentName:"li",href:"https://oit.utdallas.edu/helpdesk/kb/?id=9472349b881c17a0a06f1944a4adda29f9761a1dc8"},"this guide to\nconnect"),"\nto ",(0,r.kt)("inlineCode",{parentName:"li"},"giant.utdallas.edu")," if we haven't gotten accounts on sysbio yet)"),(0,r.kt)("li",{parentName:"ol"},"Password is your usual UTD password"),(0,r.kt)("li",{parentName:"ol"},"Open up a terminal ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl+Shift+~")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sinfo")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ls"))),(0,r.kt)("p",null,"There are plenty of other ways to login remotely. Here are some alternatives for you to play around with:"),(0,r.kt)("p",null,"Windows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab"},"Windows Terminal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mobaxterm.mobatek.net/"},"Mobaxterm"))),(0,r.kt)("p",null,"MacOS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://iterm2.com/downloads.html"},"iTerm2"))),(0,r.kt)("h2",{id:"intro-to-unix"},"Intro to Unix"),(0,r.kt)("p",null,"Practical Research Computing Unix Lecture ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("h3",{id:"some-basic-commands"},"Some basic commands"),(0,r.kt)("p",null,"You don't need to make flashcards to memorize them. Luckily if you're at a\ncommand line, you probably have access to a search engine, and what they do or\nwhat they were is just a search away."),(0,r.kt)("p",null,"We're going to run through ",(0,r.kt)("a",{parentName:"p",href:"https://missing.csail.mit.edu/2020/course-shell/"},"The Missing Semester: The\nShell")," together."),(0,r.kt)("h1",{id:"assignment-1"},"Assignment 1"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/join"},"Create a GitHub account")," and submit your username\nthrough elearning."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{target:"_blank",href:n(4833).Z},"Practical Research Computing Unix Lecture"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}c.isMDXComponent=!0},4833:function(e,t,n){"use strict";t.Z=n.p+"assets/files/02-unix-a1708cc939b34f4e12a157e606b5a667.pdf"}}]);