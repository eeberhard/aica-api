"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},a="Getting started",s={unversionedId:"getting-started/intro",id:"getting-started/intro",title:"Getting started",description:"This guide will cover the basic steps to get started with the AICA framework, from installation to application examples.",source:"@site/docs/getting-started/01-intro.md",sourceDirName:"getting-started",slug:"/getting-started/intro",permalink:"/docs/getting-started/intro",draft:!1,editUrl:"https://github.com/aica-technology/api/tree/main/docs/docs/getting-started/01-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"gettingStartedSidebar",next:{title:"Installation",permalink:"/docs/getting-started/installation"}},c={},l=[{value:"Compatibility",id:"compatibility",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting started"),(0,i.kt)("p",null,"This guide will cover the basic steps to get started with the AICA framework, from installation to application examples."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The AICA framework is being distributed in a limited beta program. Installation, configuration and run-time instructions\nare subject to breaking changes in the near future. We will endeavour to keep this documentation up-to-date with the\nlatest versions. In case of doubt, contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@aica.tech"},"support@aica.tech")," for help.")),(0,i.kt)("h2",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"The AICA framework is officially supported on Ubuntu and macOS for both amd64 and arm64 architectures."),(0,i.kt)("p",null,"The framework itself runs in a Docker container based on Ubuntu 22.04. Thanks to containerization, the majority of the\ninstallation and usage steps in this guide will be the same for macOS or Ubuntu host platforms unless otherwise\nindicated."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are some limitations with Docker on macOS compared to Docker on Ubuntu, which can affect advanced usage.\nFor the best developer experience, use an Ubuntu 22.04 host machine."),(0,i.kt)("h3",{parentName:"admonition",id:"network-sharing"},"Network sharing"),(0,i.kt)("p",{parentName:"admonition"},"While it is possible to grant a container access to the full host network on Ubuntu, sharing a network between a Mac\nhost and one or more containers requires slightly more work. This can affect connections to peripheral network devices\nsuch as robots or sensors, or to a wider ROS network, or to other containers or processes on the host."),(0,i.kt)("h3",{parentName:"admonition",id:"display-sharing"},"Display sharing"),(0,i.kt)("p",{parentName:"admonition"},"Graphical user interfaces and application windows opened inside a container will fail to open and render on a Mac host\nwithout explicit display forwarding. Further, support for OpenGL rendering is limited on macOS, which affects certain\n3D programs and simulators commonly used in robotics. For example, opening an RViz window in the container on a Mac host\nwill fail, while it will work natively on an Ubuntu host."),(0,i.kt)("h3",{parentName:"admonition",id:"real-time-capabilities"},"Real-time capabilities"),(0,i.kt)("p",{parentName:"admonition"},"To fully leverage the real-time capabilities of AICA controllers, the host machine needs a configured real-time kernel.\nThis is currently possible with the Ubuntu Pro 22.04 real-time kernel or the ",(0,i.kt)("inlineCode",{parentName:"p"},"PREEMPT_RT")," kernel patch on standard\nUbuntu, but not possible on macOS.")))}u.isMDXComponent=!0}}]);