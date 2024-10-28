"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[201],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},i="Events",s={unversionedId:"concepts/building-blocks/events",id:"concepts/building-blocks/events",title:"Events",description:"Events are discrete actions that change the dynamic state of an AICA application. They are handled and executed by the",source:"@site/docs/concepts/05-building-blocks/02-events.md",sourceDirName:"concepts/05-building-blocks",slug:"/concepts/building-blocks/events",permalink:"/docs/concepts/building-blocks/events",draft:!1,editUrl:"https://github.com/aica-technology/api/tree/main/docs/docs/concepts/05-building-blocks/02-events.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"conceptsSidebar",previous:{title:"Signals",permalink:"/docs/concepts/building-blocks/signals"},next:{title:"Components",permalink:"/docs/concepts/building-blocks/components"}},c={},l=[{value:"Event types",id:"event-types",level:2},{value:"Triggering events",id:"triggering-events",level:2},{value:"Predicates",id:"predicates",level:3},{value:"Transitions",id:"transitions",level:3},{value:"Sequences",id:"sequences",level:3},{value:"Conditions",id:"conditions",level:3}],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"events"},"Events"),(0,o.kt)("p",null,'Events are discrete actions that change the dynamic state of an AICA application. They are handled and executed by the\nEvent Engine. For this reason, they are sometimes referred to as "state events".'),(0,o.kt)("h2",{id:"event-types"},"Event types"),(0,o.kt)("p",null,"The following events can be used to dynamically update the state of a running application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Load or unload a component, controller or hardware interface"),(0,o.kt)("li",{parentName:"ul"},"Trigger a lifecycle transition (for example, configure, activate or deactivate) on a lifecycle component"),(0,o.kt)("li",{parentName:"ul"},"Activate or deactivate a controller"),(0,o.kt)("li",{parentName:"ul"},"Set the value of a parameter on a loaded component or controller"),(0,o.kt)("li",{parentName:"ul"},"Call a service on a loaded component or controller")),(0,o.kt)("h2",{id:"triggering-events"},"Triggering events"),(0,o.kt)("p",null,"Events can be triggered externally by a user through interactions with AICA Studio or via the REST API.\nThey can also be triggered internally by the Event Engine according to the application description as a result\nof ",(0,o.kt)("strong",{parentName:"p"},"predicates"),", ",(0,o.kt)("strong",{parentName:"p"},"transitions"),", ",(0,o.kt)("strong",{parentName:"p"},"sequences")," or ",(0,o.kt)("strong",{parentName:"p"},"conditions"),"."),(0,o.kt)("h3",{id:"predicates"},"Predicates"),(0,o.kt)("p",null,"Predicates are logical statements that evaluate to true or false and are used to indicate key states for either a\ncomponent or controller. AICA components and controllers broadcast any changes to their predicates to a global channel\nin a message containing the source name, the predicate name, and the current value (true or false) of the predicate."),(0,o.kt)("p",null,'While the term "predicate" has several formal definitions in grammar, logic and mathematics, at AICA the ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Predicate_(grammar)"},"grammatical\ndefinition")," is used when naming predicates."),(0,o.kt)("p",null,'Components define predicates depending on their function. A component that calculates if a given input state is within\nsome parameterized limits might have a predicate "is in bounds".'),(0,o.kt)("p",null,"This definition of predicates allows application descriptions to trigger events in a very declarative way. For example:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When component A ",(0,o.kt)("em",{parentName:"p"},"is in bounds"),", load component B")),(0,o.kt)("p",null,"Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"component A")," is the source of the predicate, ",(0,o.kt)("inlineCode",{parentName:"p"},"is in bounds")," is the predicate itself, and ",(0,o.kt)("inlineCode",{parentName:"p"},"load component B")," is\nthe event that is triggered when the predicate is true."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Events are only triggered on the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Signal_edge"},(0,o.kt)("em",{parentName:"a"},"rising edge"))," of a predicate value.")),(0,o.kt)("h3",{id:"transitions"},"Transitions"),(0,o.kt)("p",null,"The Event Engine allows components, controllers and hardware interfaces to be loaded and managed dynamically at runtime.\nOften, it is desirable for the state change in one component to trigger the state change of another. This can apply in\nthe case of setting up an application, where a controller might need to be loaded only after the corresponding hardware\ninterface is loaded. It often also applies to the case of handling errors, such that when a component is unloaded or\nenters into an error state, a controller or other component should be deactivated accordingly."),(0,o.kt)("p",null,"Every valid state transition on any component, controller or hardware interface in an AICA application can be easily\nassociated with one or more events to be triggered when that state transition occurs."),(0,o.kt)("h3",{id:"sequences"},"Sequences"),(0,o.kt)("p",null,"A sequence is a list of steps that are handled sequentially in order. Sequence steps can trigger any state event, while\nintermediate sequence steps can also be configured with a time delay or to wait for a specific condition to resolve in\nthe application."),(0,o.kt)("p",null,"Sequences are a powerful tool to manage events in predetermined ways within the dynamic context of robotic applications."),(0,o.kt)("h3",{id:"conditions"},"Conditions"),(0,o.kt)("p",null,"Application states, including the current states of components, controllers, hardware interfaces or their predicates,\ncan be manipulated with logical operators in conditional statements to create more advanced event triggers."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When component B ",(0,o.kt)("em",{parentName:"p"},"is ",(0,o.kt)("strong",{parentName:"em"},"not")," in bounds"),", do ...")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When component A ",(0,o.kt)("em",{parentName:"p"},"is active")," ",(0,o.kt)("strong",{parentName:"p"},"and")," component B ",(0,o.kt)("em",{parentName:"p"},"is ",(0,o.kt)("strong",{parentName:"em"},"not")," in bounds"),", do ...")),(0,o.kt)("p",null,'AICA conditions support the "not", "all", "any", and "one of" operators (also known as the NOT, AND, OR and XOR\noperators, respectively). If a condition does not trigger an event directly, it can still be used as the input to\nanother condition or to a conditional sequence step.'),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Events are only triggered on the rising edge of a conditional value.")))}u.isMDXComponent=!0}}]);