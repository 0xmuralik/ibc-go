(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{570:function(e,t,i){e.exports=i.p+"assets/img/middleware-stack.0aaa1f91.png"},692:function(e,t,i){"use strict";i.r(t);var a=i(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ibc-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ibc-middleware"}},[e._v("#")]),e._v(" IBC middleware")]),e._v(" "),a("p",[e._v("Learn how to write your own custom middleware to wrap an IBC application, and understand how to hook different middleware to IBC base applications to form different IBC application stacks {synopsis}.")]),e._v(" "),a("p",[e._v("This documentation serves as a guide for middleware developers who want to write their own middleware and for chain developers who want to use IBC middleware on their chains.")]),e._v(" "),a("p",[e._v("After going through the overview they can consult respectively:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/ibc/middleware/develop.html"}},[e._v("documentation on developing custom middleware")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/ibc/middleware/integration.html"}},[e._v("documentation on integrating middleware into a stack on a chain")])],1)]),e._v(" "),a("h2",{attrs:{id:"pre-requisite-readings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisite-readings"}},[e._v("#")]),e._v(" Pre-requisite readings")]),e._v(" "),a("ul",[a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/ibc/overview.html"}},[e._v("IBC Overview")])],1),e._v(" "),a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/ibc/integration.html"}},[e._v("IBC Integration")])],1),e._v(" "),a("li",{attrs:{prereq:""}},[a("RouterLink",{attrs:{to:"/ibc/apps/apps.html"}},[e._v("IBC Application Developer Guide")])],1)]),e._v(" "),a("h2",{attrs:{id:"why-middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-middleware"}},[e._v("#")]),e._v(" Why middleware?")]),e._v(" "),a("p",[e._v("IBC applications are designed to be self-contained modules that implement their own application-specific logic through a set of interfaces with the core IBC handlers. These core IBC handlers, in turn, are designed to enforce the correctness properties of IBC (transport, authentication, ordering) while delegating all application-specific handling to the IBC application modules. "),a("strong",[e._v("However, there are cases where some functionality may be desired by many applications, yet not appropriate to place in core IBC.")])]),e._v(" "),a("p",[e._v("Middleware allows developers to define the extensions as separate modules that can wrap over the base application. This middleware can thus perform its own custom logic, and pass data into the application so that it may run its logic without being aware of the middleware's existence. This allows both the application and the middleware to implement its own isolated logic while still being able to run as part of a single packet flow.")]),e._v(" "),a("h2",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[e._v("#")]),e._v(" Definitions")]),e._v(" "),a("p",[a("code",[e._v("Middleware")]),e._v(": A self-contained module that sits between core IBC and an underlying IBC application during packet execution. All messages between core IBC and underlying application must flow through middleware, which may perform its own custom logic.")]),e._v(" "),a("p",[a("code",[e._v("Underlying Application")]),e._v(": An underlying application is the application that is directly connected to the middleware in question. This underlying application may itself be middleware that is chained to a base application.")]),e._v(" "),a("p",[a("code",[e._v("Base Application")]),e._v(": A base application is an IBC application that does not contain any middleware. It may be nested by 0 or multiple middleware to form an application stack.")]),e._v(" "),a("p",[a("code",[e._v("Application Stack (or stack)")]),e._v(": A stack is the complete set of application logic (middleware(s) + base application) that gets connected to core IBC. A stack may be just a base application, or it may be a series of middlewares that nest a base application.")]),e._v(" "),a("p",[e._v("The diagram below gives an overview of a middleware stack consisting of two middleware (one stateless, the other stateful).")]),e._v(" "),a("p",[a("img",{attrs:{src:i(570),alt:"Middleware stack"}})]),e._v(" "),a("p",[e._v("Keep in mind that:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("The order of the middleware matters")]),e._v(" (more on how to correctly define your stack in the code will follow in the "),a("RouterLink",{attrs:{to:"/ibc/middleware/integration.html"}},[e._v("integration section")]),e._v(").")],1),e._v(" "),a("li",[e._v("Depending on the type of message, it will either be passed on from the base application up the middleware stack to core IBC or down the stack in the reverse situation (handshake and packet callbacks).")]),e._v(" "),a("li",[e._v("IBC middleware will wrap over an underlying IBC application and sits between core IBC and the application. It has complete control in modifying any message coming from IBC to the application, and any message coming from the application to core IBC. "),a("strong",[e._v("Middleware must be completely trusted by chain developers who wish to integrate them")]),e._v(", as this gives them complete flexibility in modifying the application(s) they wrap.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);