(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{657:function(e,t,n){"use strict";n.r(t);var c=n(174),r=n(263),l=n(800),o=n(262),_=n(189),v=n(259),m=n(172),d=n(84),f=n(267),h=(n(41),n(274),n(36),{props:["deposits","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Bank Account",class:"blue-grey lighten-3",value:"account_number"},{text:"Transaction Amount",class:"blue-grey lighten-3",value:"transaction_amount"},{text:"Transaction Date",class:"blue-grey lighten-3",value:"transaction_date"},{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Check Type",class:"blue-grey lighten-3",value:"check_type"},{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Currency",class:"blue-grey lighten-3",value:"currency"},{text:"Project",class:"blue-grey lighten-3",value:"project"},{text:"Reason",class:"blue-grey lighten-3",value:"reason"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}}}),k=n(79),component=Object(k.a)(h,(function(){var e=this,t=e._self._c;return t(l.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.deposits,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.account_number",fn:function(n){var c=n.item;return[t(r.a,[e._v(e._s(c.bankAccount.bank.name)+" - "+e._s(c.bankAccount.account_number)+" ")])]}},{key:"item.transaction_amount",fn:function(n){var c=n.item;return[t(r.a,[e._v(e._s(e._f("currency")(c.transaction_amount)))])]}},{key:"item.is_locked",fn:function(n){var c=n.item;return[t(r.a,[e._v(e._s(c.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var r=n.item;return[t(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[t(c.a,e._g(e._b({attrs:{icon:""}},"v-btn",l,!1),r),[t(_.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(v.a,{staticClass:"col-12 px-0"},[t(m.a,{on:{click:function(t){return e.$emit("on-deposit-detail-clicked",r)}}},[t(_.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(d.b,[e._v("Detail")])],1),e._v(" "),t(o.a),e._v(" "),r.checked?e._e():t(m.a,{on:{click:function(t){return e.$emit("on-deposit-delete-clicked",r)}}},[t(_.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(d.b,{staticClass:"pr-9"},[e._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports}}]);