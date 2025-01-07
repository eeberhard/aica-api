"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:3,title:"Installation and Launch"},o=void 0,l={unversionedId:"getting-started/installation-and-launch",id:"getting-started/installation-and-launch",title:"Installation and Launch",description:"Pre-requisites",source:"@site/docs/getting-started/03-installation-and-launch.md",sourceDirName:"getting-started",slug:"/getting-started/installation-and-launch",permalink:"/docs/getting-started/installation-and-launch",draft:!1,editUrl:"https://github.com/aica-technology/api/tree/main/docs/docs/getting-started/03-installation-and-launch.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Installation and Launch"},sidebar:"gettingStartedSidebar",previous:{title:"Licensing",permalink:"/docs/getting-started/licensing"},next:{title:"Examples",permalink:"/docs/category/examples"}},s={},c=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"AICA Launcher",id:"aica-launcher",level:2},{value:"Installation",id:"installation",level:3},{value:"Entering an AICA System License",id:"entering-an-aica-system-license",level:3},{value:"Configuring the AICA System image",id:"configuring-the-aica-system-image",level:3},{value:"Launching a configuration",id:"launching-a-configuration",level:3},{value:"Manual installation and launch",id:"manual-installation-and-launch",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"AICA System software is distributed with Docker images and executed with Docker containers."),(0,i.kt)("p",null,"Before proceeding, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"install Docker Engine")," on the host machine."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For Ubuntu users, make sure to follow\nthe ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/linux-postinstall/"},"post installation steps")," to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," group\nand add your user.")),(0,i.kt)("h2",{id:"aica-launcher"},"AICA Launcher"),(0,i.kt)("p",null,"AICA Launcher is the easiest way to get up and running with the AICA System. It manages licensing, package distribution\nand the Docker toolchain so that no command-line access is necessary. It also embeds AICA Studio: Edge directly inside\nthe launcher."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Find the latest release on the AICA GitHub organization under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aica-technology/api/releases"},"https://github.com/aica-technology/api/releases"),", and\nsearch for AICA Launcher (for\nexample, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aica-technology/api/tree/launcher/v1.0.0"},"AICA Launcher v1.0.0"),")."),(0,i.kt)("p",null,"Download the prebuilt launcher app based on your operating system and architecture. For example,\n",(0,i.kt)("inlineCode",{parentName:"p"},"aica-launcher-linux-amd64.zip")," for Linux machines with an AMD processor or ",(0,i.kt)("inlineCode",{parentName:"p"},"aica-launcher-darwin-arm64.zip")," for macOS\non Apple Silicon."),(0,i.kt)("p",null,"Unzip the file and extract the AICA Launcher executable to your machine, then launch it by double-clicking or\nright-clicking to start the program."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"On macOS, you may be unable to open the AICA Launcher app because of default security settings."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"\u201cAICA Launcher\u201d can\u2019t be opened because Apple cannot check it for malicious software.\n")),(0,i.kt)("p",{parentName:"admonition"},"To bypass this, right-click on the app and choose Open, and then click Open on the dialog that appears.")),(0,i.kt)("h3",{id:"entering-an-aica-system-license"},"Entering an AICA System License"),(0,i.kt)("p",null,"When the AICA Launcher is started for the first time (or after explicitly logging out), you will be prompted to enter\nyour AICA System License. As an example, the online license key to enter might look similar to\n",(0,i.kt)("inlineCode",{parentName:"p"},"5614D1-3E7A6C-932DEB-8C4189-F6B0F2-V3"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"aica-launcher-login",src:n(4362).Z,width:"2784",height:"1720"})),(0,i.kt)("p",null,"Once the license is copied into the text field, it will automatically check the validity of the license and log in if\nsuccessful. If the license is not recognized, check your internet connection\nor ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@aica.tech"},"contact AICA support"),"."),(0,i.kt)("h3",{id:"configuring-the-aica-system-image"},"Configuring the AICA System image"),(0,i.kt)("p",null,"AICA Launcher provides direct access to AICA Core and Studio, and additionally simplifies installing add-on packages\nfrom the registry or from custom SDK contributions."),(0,i.kt)("p",null,'A "configuration" refers to a specific version of AICA Core and the extra packages and versions that should be included.\nDefining configurations helps to ensure repeatable builds and deployments, even if AICA Core or any of the referenced\npackages are subsequently updated or changed.'),(0,i.kt)("p",null,"The simplest configuration just specifies the AICA Core Version, without any packages. Official packages can be added\nfrom a dropdown, with a version subselection for each package. ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/intro"},"Custom packages")," can be built\nusing the SDK and then added to the configuration using a Docker image URI."),(0,i.kt)("p",null,"Advanced configuration options allow setting additional Docker parameters, including real-time permissions and volume\nmounting for persistent storage or file-system interactions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"aica-launcher-package",src:n(8985).Z,width:"1378",height:"886"})),(0,i.kt)("h3",{id:"launching-a-configuration"},"Launching a configuration"),(0,i.kt)("p",null,"Press the Launch button for any given configuration to start up the AICA System and enter AICA Studio. For the\nfirst time launching a configuration, the AICA Core software image and any additional packages first need to be pulled\nfrom the registry and bundled into the specific runtime image. Depending on network speeds, this may take a while. After\nthe image has been built, launching the configuration a second time will be much faster as the results are cached."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"aica-launcher-studio",src:n(9421).Z,width:"1422",height:"930"})),(0,i.kt)("h2",{id:"manual-installation-and-launch"},"Manual installation and launch"),(0,i.kt)("p",null,"For advanced users or users that deal with headless machines, there exists the option to ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/manual-installation-launch"},"manually perform the login,\nbuild and launch steps")," that the AICA Launcher handles automatically."))}d.isMDXComponent=!0},4362:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aica-launcher-login-37826328adf5b4a3106ba3c9f60c12b7.png"},8985:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aica-launcher-package-5b1d67fbf30bf135bed9db684739bc06.png"},9421:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aica-launcher-studio-b56f8cc63d4b0ac97e27213efa29e5c9.png"}}]);