(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{721:function(t,e,a){"use strict";a.r(e);var s=a(1),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"business-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#business-requirements"}},[t._v("#")]),t._v(" Business requirements")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("TL;DR")]),t._v(": The lack of a default underlying app (previously called the "),a("em",[t._v("authentication module")]),t._v("), and the need to separate application and authentication concerns were recognised as primary reasons for the slow adoption of ICS 27 Interchain Accounts (ICA).")])]),t._v(" "),a("h2",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[t._v("#")]),t._v(" Problem")]),t._v(" "),a("p",[t._v("We believe that the lack of controller chains so far have been because:")]),t._v(" "),a("ul",[a("li",[t._v("We did not develop a standardized authentication module, which created a bottleneck for chains looking to integrate the controller submodule.")]),t._v(" "),a("li",[t._v("We did not have a clear understanding of all the use cases ICA would facilitate.")]),t._v(" "),a("li",[t._v("We expected more chains to want to design custom authentication for ICA.")]),t._v(" "),a("li",[t._v("Coupling ICA authentication and application logic was a misdesign.")])]),t._v(" "),a("h2",{attrs:{id:"objectives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objectives"}},[t._v("#")]),t._v(" Objectives")]),t._v(" "),a("ul",[a("li",[t._v("Make controller functionality integration in a chain easier.")]),t._v(" "),a("li",[t._v("Introduce a message server in the controller submodule that exposes APIs for interchain account registration and control.")]),t._v(" "),a("li",[t._v("Once application callbacks are implemented (via ADR 008) deprecate the APIs introduced in ibc-go v3.0.0.")])]),t._v(" "),a("h2",{attrs:{id:"scope"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[t._v("#")]),t._v(" Scope")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Features")]),t._v(" "),a("th",[t._v("Release")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Register interchain accounts and send transactions to host chain via message passing.")]),t._v(" "),a("td",[t._v("v6.0.0")])]),t._v(" "),a("tr",[a("td",[t._v("Support application callbacks with message server in controller submodule (requires ADR 008).")]),t._v(" "),a("td",[t._v("N/A")])])])]),t._v(" "),a("h1",{attrs:{id:"user-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-requirements"}},[t._v("#")]),t._v(" User requirements")]),t._v(" "),a("h2",{attrs:{id:"use-cases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[t._v("#")]),t._v(" Use cases")]),t._v(" "),a("h3",{attrs:{id:"custom-authentication-module-needs-to-access-ibc-packet-callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-authentication-module-needs-to-access-ibc-packet-callbacks"}},[t._v("#")]),t._v(" Custom authentication module needs to access IBC packet callbacks")]),t._v(" "),a("p",[t._v("Application developers of custom authentication modules that wish to consume IBC packet callbacks and react upon packet acknowledgements or timeouts must continue using the controller submodule's legacy APIs.")]),t._v(" "),a("h3",{attrs:{id:"custom-authentication-module-does-not-need-access-to-ibc-packet-callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#custom-authentication-module-does-not-need-access-to-ibc-packet-callbacks"}},[t._v("#")]),t._v(" Custom authentication module does not need access to IBC packet callbacks")]),t._v(" "),a("p",[t._v("The authentication module should interact with the controller submodule via the message server for registering interchain accounts and sending messages to it.")]),t._v(" "),a("h3",{attrs:{id:"no-need-for-custom-authentication-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-need-for-custom-authentication-module"}},[t._v("#")]),t._v(" No need for custom authentication module")]),t._v(" "),a("p",[t._v("Chains not only want individual accounts to be able to use Interchain Accounts, but also for generic Cosmos SDK authentication modules such as "),a("code",[t._v("x/gov")]),t._v(" and "),a("code",[t._v("x/group")]),t._v(" to be able to register an interchain account and send messages. An example use case with "),a("code",[t._v("x/gov")]),t._v(": the Cosmos Hub (controller), upon governance authorization, sends some of its inflationary rewards to Osmosis (host) to provide liquidity and purchase ATOM GAMM shares, which are then sent back to the Hub in one flow.")]),t._v(" "),a("h1",{attrs:{id:"functional-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functional-requirements"}},[t._v("#")]),t._v(" Functional requirements")]),t._v(" "),a("h2",{attrs:{id:"assumptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assumptions"}},[t._v("#")]),t._v(" Assumptions")]),t._v(" "),a("p",[t._v("No further assumptions besides the ones listed in the v1 requirements document.")]),t._v(" "),a("h2",{attrs:{id:"known-limitations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#known-limitations"}},[t._v("#")]),t._v(" Known limitations")]),t._v(" "),a("ol",[a("li",[t._v("Custom authentication modules that wish to consume IBC packet callbacks need to use the legacy APIs until ADR 008 is implemented.")])]),t._v(" "),a("h2",{attrs:{id:"terminology"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#terminology"}},[t._v("#")]),t._v(" Terminology")]),t._v(" "),a("p",[t._v("See section "),a("a",{attrs:{href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-027-interchain-accounts/README.md#definitions",target:"_blank",rel:"noopener noreferrer"}},[t._v("Definitions"),a("OutboundLink")],1),t._v(" in ICS 27 spec.")]),t._v(" "),a("h2",{attrs:{id:"features"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),a("h3",{attrs:{id:"_1-registration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-registration"}},[t._v("#")]),t._v(" 1 - Registration")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Verification")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Release")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1.01")]),t._v(" "),a("td",[t._v("An application shall have the ability to use an RPC endpoint to create interchain accounts on the host chain.")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/modules/apps/27-interchain-accounts/controller/keeper/msg_server_test.go#L31",target:"_blank",rel:"noopener noreferrer"}},[t._v("Acceptance test"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("code",[t._v("Verified")])]),t._v(" "),a("td",[t._v("v6.0.0")])])])]),t._v(" "),a("h3",{attrs:{id:"_2-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-control"}},[t._v("#")]),t._v(" 2 - Control")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Verification")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Release")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("2.01")]),t._v(" "),a("td",[t._v("An application shall have the ability to use an RPC endpoint to submit transactions to be executed on the host chain on the behalf of the interchain account.")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/modules/apps/27-interchain-accounts/controller/keeper/msg_server_test.go#L31",target:"_blank",rel:"noopener noreferrer"}},[t._v("Acceptance test"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("code",[t._v("Verified")])]),t._v(" "),a("td",[t._v("v6.0.0")])])])]),t._v(" "),a("h1",{attrs:{id:"non-functional-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-functional-requirements"}},[t._v("#")]),t._v(" Non-functional requirements")]),t._v(" "),a("h2",{attrs:{id:"_3-migration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-migration"}},[t._v("#")]),t._v(" 3 - Migration")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Verification")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Release")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("3.01")]),t._v(" "),a("td",[t._v("Chains shall be able to run a migration to assign ownership of the channel capability of a custom authentication module to the ICS 27 controller submodule.")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/modules/apps/27-interchain-accounts/controller/migrations/v6/migrations_test.go#L89",target:"_blank",rel:"noopener noreferrer"}},[t._v("Acceptance test"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("code",[t._v("Verified")])]),t._v(" "),a("td",[t._v("v6.0.0")])])])]),t._v(" "),a("h1",{attrs:{id:"external-interface-requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-interface-requirements"}},[t._v("#")]),t._v(" External interface requirements")]),t._v(" "),a("h2",{attrs:{id:"_4-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-cli"}},[t._v("#")]),t._v(" 4 - CLI")]),t._v(" "),a("h3",{attrs:{id:"transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction"}},[t._v("#")]),t._v(" Transaction")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Verification")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Release")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("4.01")]),t._v(" "),a("td",[t._v("There shall be a CLI command available to generate the Interchain Accounts packet data required to send.")]),t._v(" "),a("td",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/modules/apps/27-interchain-accounts/host/client/cli/tx.go#L21",target:"_blank",rel:"noopener noreferrer"}},[t._v("CLI"),a("OutboundLink")],1)]),t._v(" "),a("td",[a("code",[t._v("Verified")])]),t._v(" "),a("td",[t._v("v6.0.0")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);