"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(h,r(r({ref:n},l),{},{components:t})):a.createElement(h,r({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8518:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(7462),o=(t(7294),t(3905));const i={sidebar_position:3,title:"Describing a component"},r="Describing a component",s={unversionedId:"reference/custom-components/component-descriptions",id:"reference/custom-components/component-descriptions",title:"Describing a component",description:"To fully support custom components in the AICA application framework, it is crucial to have a consistent means of",source:"@site/docs/reference/custom-components/03-component-descriptions.md",sourceDirName:"reference/custom-components",slug:"/reference/custom-components/component-descriptions",permalink:"/docs/reference/custom-components/component-descriptions",draft:!1,editUrl:"https://github.com/aica-technology/api/tree/main/docs/docs/reference/custom-components/03-component-descriptions.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Describing a component"},sidebar:"programmingReferenceSidebar",previous:{title:"Writing a component",permalink:"/docs/reference/custom-components/custom-component"},next:{title:"Mounting a component package",permalink:"/docs/reference/custom-components/package-mounting"}},p={},c=[{value:"Component metadata",id:"component-metadata",level:2},{value:"Registration",id:"registration",level:3},{value:"Inheritance",id:"inheritance",level:3},{value:"Virtual components",id:"virtual-components",level:4},{value:"Signals",id:"signals",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Predicates",id:"predicates",level:2},{value:"Services",id:"services",level:2}],l={toc:c},d="wrapper";function m(e){let{components:n,...i}=e;return(0,o.kt)(d,(0,a.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"describing-a-component"},"Describing a component"),(0,o.kt)("p",null,"To fully support custom components in the AICA application framework, it is crucial to have a consistent means of\ndescribing individual components and the interfaces they provide. A machine-readable component description should\ncontain all necessary information to procedurally generate documentation, frontend visualisations and backend services\nfor any new component."),(0,o.kt)("p",null,"Components have various interfaces that need to be described:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"signals to send and receive data in the form of inputs and outputs"),(0,o.kt)("li",{parentName:"ul"},"parameters with specific types and names that define their behaviour"),(0,o.kt)("li",{parentName:"ul"},"services to trigger specific behaviors on request"),(0,o.kt)("li",{parentName:"ul"},'predicates that produce special "true / false" messages to indicate specific component states')),(0,o.kt)("p",null,"Aside from interfaces, a component description should also include information on the type of component (regular or\nlifecycle), the general component behavior or purpose, and other metadata such as name and registration details."),(0,o.kt)("p",null,"The elements of a component description are written as a standardized JSON file for each component. The expected\nstructure of the component description is defined by\nthe ",(0,o.kt)("a",{target:"_blank",href:t(1629).Z},"Component Description JSON schema")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"JSON schemas for public AICA structures and syntax can be found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"schemas")," directory of\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aica-technology/api"},"API repository")," on AICA GitHub.")),(0,o.kt)("h2",{id:"component-metadata"},"Component metadata"),(0,o.kt)("p",null,"The basic required properties of a component description are the component name, description, registration and\ninheritance, as shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="component_descriptions/foo_component_package_foo.json"',title:'"component_descriptions/foo_component_package_foo.json"'},'{\n  "name": "Foo",\n  "description": {\n    "brief": "An example component",\n    "details": "This is an in-depth description of the example component."\n  },\n  "registration": "foo_component_package::Foo",\n  "inherits": "modulo_components::Component"\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," should be short, descriptive and human-readable, suitable for displaying to the user when listing a directory\nof components or rendering a component visually on the frontend."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"description")," property should have a brief one-line description and preferably a more detailed description\nthat explains the functionality of the component in depth."),(0,o.kt)("h3",{id:"registration"},"Registration"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"registration")," property is used to associate the description with a unique component class. Component classes\nare implemented by ROS2 packages and registered under a unique class name. By convention, the class name must be\ndefined in the namespace of the package, delimited by double colons ",(0,o.kt)("inlineCode",{parentName:"p"},"::"),". For example, some component class ",(0,o.kt)("inlineCode",{parentName:"p"},"Foo"),"\nin the package ",(0,o.kt)("inlineCode",{parentName:"p"},"foo_component_package")," should be registered as ",(0,o.kt)("inlineCode",{parentName:"p"},"foo_component_package::Foo"),", so that the package can be\ninferred from the registered name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "registration": "foo_component_package::Foo"\n}\n')),(0,o.kt)("h3",{id:"inheritance"},"Inheritance"),(0,o.kt)("p",null,"The implementation of custom component classes can inherit and extend the behaviors of base component classes.\nWhen a base component already has suitable descriptions for signals, parameters, predicates and services, they\nshould not be duplicated for each derived component class description. Instead, the registration of the base class\ncan be provided, following the same rules as the ",(0,o.kt)("a",{parentName:"p",href:"#registration"},(0,o.kt)("inlineCode",{parentName:"a"},"registration")," property"),"."),(0,o.kt)("p",null,"Any consumer of the component description can dynamically load the base component description using the registration\ndetails in the ",(0,o.kt)("inlineCode",{parentName:"p"},"inherits")," property and expand the fields into the derived description."),(0,o.kt)("p",null,"Components that derive directly from ",(0,o.kt)("inlineCode",{parentName:"p"},"modulo_components::Component")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"modulo_components::LifecycleComponent"),"\nshould also specify this under the ",(0,o.kt)("inlineCode",{parentName:"p"},"inherits")," property. These core base classes are identified and treated\ndistinctly by consumers of the component description."),(0,o.kt)("h4",{id:"virtual-components"},"Virtual components"),(0,o.kt)("p",null,'With the inheritance pattern, a base component class can implement common properties and behaviors that derived\ncomponents extend. In some cases, the base class itself might not be intended to be instantiated or used as a component\ndirectly. For example, a base motion generator may define common parameters, signals and logic, but might produce no\noutput if the signal calculation is left for derived classes to implement. Such base components may be considered\n"virtual" or "abstract".'),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"virtual")," property is a boolean flag which, if true, indicates that a component class is an abstract or virtual\nbase class not intended for instantiation. It is an optional property and is assumed to be false if omitted.\nConsumers of the component description can use this property to handle virtual base classes distinctly; for example,\nvirtual components might be hidden in drop-down menus or lists of available and instantiable components."),(0,o.kt)("p",null,"The core classes ",(0,o.kt)("inlineCode",{parentName:"p"},"modulo_components::Component")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"modulo_components::LifecycleComponent")," are examples of virtual\ncomponents, as they provide no meaningful behavior if directly instantiated."),(0,o.kt)("h2",{id:"signals"},"Signals"),(0,o.kt)("p",null,"The expected structure of the signal description is defined by\nthe ",(0,o.kt)("a",{target:"_blank",href:t(5278).Z},"Signal Description JSON schema"),"."),(0,o.kt)("p",null,"Component inputs and outputs are described with a signal name and type, matching the name and type in the implementation\nwhen using the respective ",(0,o.kt)("inlineCode",{parentName:"p"},"add_input")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"add_output")," function. Additionally, a human-readable display name and\ndescription should be included."),(0,o.kt)("p",null,"An example description of a component with one input and one output, both as joint states, is given below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "inputs": [\n    {\n      "display_name": "Joint state",\n      "description": "The current joint state from the robot",\n      "signal_name": "state",\n      "signal_type": "joint_state"\n    }\n  ],\n  "outputs": [\n    {\n      "display_name": "Joint command",\n      "description": "The desired joint command to send to the robot",\n      "signal_name": "command",\n      "signal_type": "joint_state"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"The expected structure of the parameter description is defined by\nthe ",(0,o.kt)("a",{target:"_blank",href:t(8741).Z},"Parameter Description JSON schema"),"."),(0,o.kt)("p",null,"Parameters contain a value of a certain type, described by the ",(0,o.kt)("inlineCode",{parentName:"p"},"parameter_type")," property. Valid parameter types are\ndefined in the ",(0,o.kt)("a",{target:"_blank",href:t(650).Z},"Parameter Type JSON schema"),"."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"parameter_type")," property is ",(0,o.kt)("inlineCode",{parentName:"p"},"state"),", then the ",(0,o.kt)("inlineCode",{parentName:"p"},"parameter_state_type")," property must also be defined as a member\nof the enumeration\nin ",(0,o.kt)("a",{target:"_blank",href:t(8734).Z},"Encoded State Type JSON schema"),"."),(0,o.kt)("p",null,"Parameters generally have a default value which renders them optional in some cases. When a parameter has no valid\ndefault state and must be set by the user for the component to function, the ",(0,o.kt)("inlineCode",{parentName:"p"},"default_value")," property in the component\ndescription should be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),". This is distinct from a valid default empty parameter state, which can be\nexpressed with the empty string ",(0,o.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,o.kt)("p",null,"If a parameter is dynamically reconfigurable, as described by the ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamic")," property, it implies that the parameter can\nbe changed after the component is already configured to influence the run-time behaviour.\nThis requires the component to either poll the parameter value while running or implement a parameter change callback."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"internal")," property can be used to hide a parameter from public interfaces that use the component description by\nindicating that the parameter is intended for internal use only. The intended outcome is for the parameter to be hidden\nfrom auto-generated component visualizations or documentation at a high level.\nIf the field is omitted from a description, the parameter is assumed to be public."),(0,o.kt)("p",null,"An example parameter description is shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "parameters": [\n    {\n      "display_name": "Gain",\n      "description": "The gain value by which the input should be scaled",\n      "parameter_name": "gain",\n      "parameter_type": "double",\n      "default_value": "1.0"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"predicates"},"Predicates"),(0,o.kt)("p",null,'Predicates are crucial to drive the event logic of the Dynamic State Engine, but they are very simple to declare\nand describe. Each predicate of a component indicates a particular run-time state or configuration that is either\n"true" or "false". In the implementation, a predicate is a publisher with a boolean type. The component is responsible\nfor determining the value of a predicate and publishing it under a particular topic name.'),(0,o.kt)("p",null,"In the component description, predicates have a display name and description. The ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate_name")," property is used\nto inform the state engine of the hidden topic name to listen to for that predicate."),(0,o.kt)("p",null,"An example predicate description is shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "predicates": [\n    {\n      "display_name": "Is in bounds",\n      "description": "If true, the target frame is within the collision object",\n      "predicate_name": "is_in_bounds"\n    }\n  ]\n}\n')),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("p",null,"Services are endpoints provided by a component that can trigger certain behaviours. In the backend implementation,\nthey are created as ROS2 services with a specific ",(0,o.kt)("inlineCode",{parentName:"p"},"service_name")," using one of two service message types. The first\ntype is simply an empty trigger service that has no payload, which is the default case. The second type is a trigger\nservice with a string payload, which can be used to pass parameters to the service call."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"payload_format")," property is used to describe the expected format and usage of the string trigger payload;\nit is thereby inferred that the service type is not an empty trigger when this property is present."),(0,o.kt)("p",null,"Some example service descriptions are shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "services": [\n    {\n      "display_name": "Record frame",\n      "description": "Record a frame from TF and write to file in yaml format",\n      "service_name": "record_frame",\n      "payload_format": "A YAML-formatted dict with the following name-value fields: \'frame\' for the TF to lookup and \'reference_frame\' (default \'world\')"\n    },\n    {\n      "display_name": "Reset",\n      "description": "Reset the component by deleting all recorded frames and removing the output file",\n      "service_name": "reset"\n    }\n  ]\n}\n')))}m.isMDXComponent=!0},1629:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/component.schema-8fa03a7d04f14f59ad508a849b6da796.json"},8734:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/encoded_state_type.schema-515707b49a19611df8567efce22ce782.json"},8741:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/parameter.schema-a574f6c3c110aa93c54e183c7022bb6c.json"},650:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/parameter_type.schema-99cfd5872b017cd866cdf02802b91549.json"},5278:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/files/signal.schema-d79da1fc849717e9f6447ed6d789bbdf.json"}}]);