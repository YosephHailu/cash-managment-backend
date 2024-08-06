(window.webpackJsonp=window.webpackJsonp||[]).push([[37,23],{600:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return k})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return x})),n.d(e,"c",(function(){return $}));var c,r,o,l,_,d,m=n(91),v=n(58),h=Object(v.a)(c||(c=Object(m.a)(["\n  query($page: Int!, $per_page: Int!) {\n    bankAccounts(first: $per_page, page: $page) {\n      data {\n         id\n         account_number\n         initial_balance\n         balance\n         description\n         bank_id\n         branch\n         check_image_url\n         check_template_data\n         bank {\n          id\n          name\n         }\n      }\n    }   \n  }\n"]))),k=Object(v.a)(r||(r=Object(m.a)(["\n  query($id: ID!) {\n    bankAccount(id: $id) {\n      id\n      account_number\n      initial_balance\n      balance\n      description\n      bank_id\n      branch\n      check_image_url\n      check_template_data\n      total_payment\n      total_deposit\n      payments {\n        id\n        to\n        amount_in_words\n        transaction_date\n        bank_account_id\n        reason\n        project\n        payment_method\n        transaction_amount\n        voided\n        voided_date\n        voided_reason\n        payment_date\n        payment_pending\n        bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n        }\n      }\n      deposits {\n        id\n        transaction_amount\n        transaction_date\n        bank_account_id\n        reference_no\n        check_type\n        currency\n        project\n        reason\n        bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n        }\n      }\n      bank {\n        id\n        name\n      }\n    }\n  }\n"]))),f=Object(v.a)(o||(o=Object(m.a)(["\n  mutation($account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n    $check_image: Upload) {\n    createBankAccount(input: {account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, balance: $balance,\n       description: $description, check_image: $check_image}) {\n      id\n      account_number\n    }\n  }\n"]))),y=Object(v.a)(l||(l=Object(m.a)(["\n  mutation($id: ID!, $account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n  $check_image: Upload, $check_template_data: JSON) {\n    updateBankAccount(input: {id: $id, account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, \n      balance: $balance, description: $description, check_image: $check_image, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),x=Object(v.a)(_||(_=Object(m.a)(["\n  mutation($id: ID!, $check_template_data: JSON) {\n    updateBankAccountTemplate(input: {id: $id, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),$=Object(v.a)(d||(d=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteBankAccount(id: $id) {\n        id\n        account_number\n    }   \n  }\n"])))},633:function(t,e,n){"use strict";n.r(e);var c=n(638),r=n(174),o=n(263),l=n(808),_=n(262),d=n(189),m=n(259),v=n(172),h=n(84),k=n(267),f=(n(41),n(274),n(37),n(276)),y=n(36),x=n(67),$={props:["payments","search"],data:function(){return{pagination:{},expanded:[],element_permissions:{approve_btn:[{resource:y.a.PAYMENT,action:x.a.APPROVE}],check_btn:[{resource:y.a.PAYMENT,action:x.a.CHECK}],void_btn:[{resource:y.a.PAYMENT,action:x.a.VOID}]},headers:[{text:"Bank Account",class:"blue-grey lighten-3",value:"account_number"},{text:"Transaction Amount",class:"blue-grey lighten-3",value:"transaction_amount"},{text:"Payment Method",class:"blue-grey lighten-3",value:"payment_method"},{text:"Paid To",class:"blue-grey lighten-3",value:"to"},{text:"Project",class:"blue-grey lighten-3",value:"project"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}},methods:{can:function(t){return Object(f.a)(this.$auth.user,t)}}},C=n(79),component=Object(C.a)($,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.payments,"items-per-page":25,"hide-default-footer":!0,search:t.search},scopedSlots:t._u([{key:"item.account_number",fn:function(n){var c=n.item;return[e(o.a,[t._v(t._s(c.bankAccount.bank.name)+" -\n      "+t._s(c.bankAccount.account_number)+"\n    ")])]}},{key:"item.transaction_amount",fn:function(n){var r=n.item;return[e(o.a,[t._v(t._s(t._f("currency")(r.transaction_amount))+"\n      "),r.voided?e(c.a,{attrs:{content:"void",color:"red",inline:""}}):e("div",[r.payment_pending?e(c.a,{attrs:{color:"grey",content:r.payment_date,inline:""}}):e(c.a,{attrs:{content:r.payment_date,inline:""}})],1)],1)]}},{key:"item.is_locked",fn:function(n){var c=n.item;return[e(o.a,[t._v(t._s(c.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var c=n.item;return[e(k.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,o=n.attrs;return[e(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),c),[e(d.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(m.a,{staticClass:"col-12 px-0"},[e(v.a,{on:{click:function(e){return t.$emit("on-payment-detail-clicked",c)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(h.b,[t._v("Detail")])],1),t._v(" "),!c.checked&&t.can(t.element_permissions.check_btn)?e(v.a,{on:{click:function(e){return t.$emit("on-payment-check-clicked",c)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(h.b,[t._v("Check")])],1):t._e(),t._v(" "),c.checked&!c.approved&&t.can(t.element_permissions.approve_btn)?e(v.a,{on:{click:function(e){return t.$emit("on-payment-approve-clicked",c)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(h.b,[t._v("Approve")])],1):t._e(),t._v(" "),c.approved?e(v.a,{attrs:{to:"/payment/".concat(c.id,"/voucher")}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-printer")]),t._v(" "),e(h.b,[t._v("Voucher")])],1):t._e(),t._v(" "),c.approved&&"Check"==c.payment_method?e(v.a,{attrs:{to:"/payment/".concat(c.id,"/print")}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-printer")]),t._v(" "),e(h.b,[t._v("Print Check")])],1):t._e(),t._v(" "),!c.voided&&c.approved&&t.can(t.element_permissions.void_btn)&&"Check"==c.payment_method?e(v.a,{on:{click:function(e){return t.$emit("on-payment-void-clicked",c)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-close")]),t._v(" "),e(h.b,{staticClass:"pr-9"},[t._v("Void Check")])],1):t._e(),t._v(" "),e(_.a),t._v(" "),e(v.a,{on:{click:function(e){return t.$emit("on-payment-delete-clicked",c)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(h.b,{staticClass:"pr-9"},[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},660:function(t,e,n){"use strict";n.r(e);var c=n(174),r=n(263),o=n(808),l=n(262),_=n(189),d=n(259),m=n(172),v=n(84),h=n(267),k=(n(41),n(274),n(37),{props:["deposits","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Bank Account",class:"blue-grey lighten-3",value:"account_number"},{text:"Transaction Amount",class:"blue-grey lighten-3",value:"transaction_amount"},{text:"Transaction Date",class:"blue-grey lighten-3",value:"transaction_date"},{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Check Type",class:"blue-grey lighten-3",value:"check_type"},{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Currency",class:"blue-grey lighten-3",value:"currency"},{text:"Project",class:"blue-grey lighten-3",value:"project"},{text:"Reason",class:"blue-grey lighten-3",value:"reason"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}}}),f=n(79),component=Object(f.a)(k,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.deposits,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.account_number",fn:function(n){var c=n.item;return[e(r.a,[t._v(t._s(c.bankAccount.bank.name)+" - "+t._s(c.bankAccount.account_number)+" ")])]}},{key:"item.transaction_amount",fn:function(n){var c=n.item;return[e(r.a,[t._v(t._s(t._f("currency")(c.transaction_amount)))])]}},{key:"item.is_locked",fn:function(n){var c=n.item;return[e(r.a,[t._v(t._s(c.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var r=n.item;return[e(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(c.a,t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[e(_.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(d.a,{staticClass:"col-12 px-0"},[e(m.a,{on:{click:function(e){return t.$emit("on-deposit-detail-clicked",r)}}},[e(_.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(v.b,[t._v("Detail")])],1),t._v(" "),e(l.a),t._v(" "),r.checked?t._e():e(m.a,{on:{click:function(e){return t.$emit("on-deposit-delete-clicked",r)}}},[e(_.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(v.b,{staticClass:"pr-9"},[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},827:function(t,e,n){"use strict";n.r(e);var c=n(264),r=n(794),o=n(189),l=n(654),_=n(593),d=n(806),m=n(835),v=n(812),h=(n(37),n(660)),k=n(633),f=n(600),y={components:{DepositTable:h.default,PaymentTable:k.default},layout:"default",data:function(){return{tab:"payment-tab",bankAccount:{bank:{}}}},apollo:{bankAccount:{query:f.d,variables:function(){return{id:this.$route.params.id}},fetchPolicy:"cache-and-network"}},methods:{print:function(){window.print()}},watch:{}},x=n(79),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(_.a),t._v(" "),e("div",{staticClass:"pr-2"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"}},[e(o.a,{attrs:{left:"",dark:""}},[t._v(" mdi-pen ")]),t._v("\n        Edit\n      ")],1)])],1),t._v(" "),e("div",[e(l.a,{staticClass:"col-6",scopedSlots:t._u([{key:"default",fn:function(){var n;return[e("thead",[e("tr",[e("th",{staticClass:"blue-grey lighten-3 text-uppercase font-weight-bold",attrs:{colspan:"4"}},[t._v("\n              BANK ACCOUNT DETAIL\n            ")])]),t._v(" "),e("hr"),t._v(" "),e("tr",[e("th",{staticClass:"blue-grey lighten-4 text-right text-uppercase font-weight-bold text-subtitle-2"},[e("b",[t._v("Account Number")])]),t._v(" "),e("th",{staticClass:"blue-grey white--text text-subtitle-2",attrs:{colspan:"3"}},[t._v("\n              "+t._s(t.bankAccount.account_number)+"\n            ")])]),t._v(" "),e("hr"),t._v(" "),e("tr",[e("th",{staticClass:"blue-grey lighten-4 text-right text-uppercase font-weight-bold"},[t._v("\n              Bank Name\n            ")]),t._v(" "),e("th",{staticClass:"blue-grey white--text text-subtitle-2",attrs:{colspan:"3"}},[t._v("\n              "+t._s(null===(n=t.bankAccount.bank)||void 0===n?void 0:n.name)+"\n            ")])]),t._v(" "),e("hr"),t._v(" "),e("tr",[e("th",{staticClass:"blue-grey lighten-4 text-right text-uppercase font-weight-bold"},[t._v("\n              Initial Balance\n            ")]),t._v(" "),e("th",{staticClass:"blue-grey white--text text-subtitle-2",attrs:{colspan:"3"}},[t._v("\n              "+t._s(t.bankAccount.initial_balance)+"\n            ")])]),t._v(" "),e("hr"),t._v(" "),e("tr",[e("th",{staticClass:"blue-grey lighten-4 text-right text-uppercase font-weight-bold"},[t._v("\n              Current Balance\n            ")]),t._v(" "),e("th",{staticClass:"blue-grey white--text text-subtitle-2",attrs:{colspan:"3"}},[t._v("\n              "+t._s(t._f("currency")(t.bankAccount.balance))+"\n            ")])]),t._v(" "),e("hr"),t._v(" "),e("tr",[e("th",{staticClass:"blue-grey lighten-4 text-right text-uppercase font-weight-bold"},[t._v("\n              Total Deposit\n            ")]),t._v(" "),e("th",{staticClass:"blue-grey white--text text-subtitle-2",attrs:{colspan:"3"}},[t._v("\n              "+t._s(t._f("currency")(t.bankAccount.total_deposit))+"\n            ")])]),t._v(" "),e("hr"),t._v(" "),e("tr",[e("th",{staticClass:"blue-grey lighten-4 text-right text-uppercase font-weight-bold"},[t._v("\n              Total Payment\n            ")]),t._v(" "),e("th",{staticClass:"blue-grey white--text text-subtitle-2",attrs:{colspan:"3"}},[t._v("\n              "+t._s(t._f("currency")(t.bankAccount.total_payment))+"\n            ")])])])]},proxy:!0}])})],1),t._v(" "),e(c.a,{staticClass:"mt-3"},[e(v.a,{staticClass:"center",attrs:{color:"deep-purple accent-4",center:""}},[e(d.a,{attrs:{value:"deposit-tab"}},[t._v("Deposits")]),t._v(" "),e(d.a,{attrs:{value:"payment-tab"}},[t._v("Payments")]),t._v(" "),e(m.a,[e(r.a,{attrs:{fluid:""}},[e("deposit-table",{attrs:{deposits:t.bankAccount.deposits}})],1)],1),t._v(" "),e(m.a,[e(r.a,{attrs:{fluid:""}},[e("payment-table",{attrs:{payments:t.bankAccount.payments}})],1)],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("All Bank Accounts")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All Bank Accounts Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);