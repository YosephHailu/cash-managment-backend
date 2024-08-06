(window.webpackJsonp=window.webpackJsonp||[]).push([[43,14,23],{600:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"d",(function(){return v})),n.d(e,"b",(function(){return k})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return $})),n.d(e,"c",(function(){return D}));var c,o,r,l,d,_,m=n(91),f=n(58),h=Object(f.a)(c||(c=Object(m.a)(["\n  query($page: Int!, $per_page: Int!) {\n    bankAccounts(first: $per_page, page: $page) {\n      data {\n         id\n         account_number\n         initial_balance\n         balance\n         description\n         bank_id\n         branch\n         check_image_url\n         check_template_data\n         bank {\n          id\n          name\n         }\n      }\n    }   \n  }\n"]))),v=Object(f.a)(o||(o=Object(m.a)(["\n  query($id: ID!) {\n    bankAccount(id: $id) {\n      id\n      account_number\n      initial_balance\n      balance\n      description\n      bank_id\n      branch\n      check_image_url\n      check_template_data\n      total_payment\n      total_deposit\n      payments {\n        id\n        to\n        amount_in_words\n        transaction_date\n        bank_account_id\n        reason\n        project\n        payment_method\n        transaction_amount\n        voided\n        voided_date\n        voided_reason\n        payment_date\n        payment_pending\n        bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n        }\n      }\n      deposits {\n        id\n        transaction_amount\n        transaction_date\n        bank_account_id\n        reference_no\n        check_type\n        currency\n        project\n        reason\n        bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n        }\n      }\n      bank {\n        id\n        name\n      }\n    }\n  }\n"]))),k=Object(f.a)(r||(r=Object(m.a)(["\n  mutation($account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n    $check_image: Upload) {\n    createBankAccount(input: {account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, balance: $balance,\n       description: $description, check_image: $check_image}) {\n      id\n      account_number\n    }\n  }\n"]))),y=Object(f.a)(l||(l=Object(m.a)(["\n  mutation($id: ID!, $account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n  $check_image: Upload, $check_template_data: JSON) {\n    updateBankAccount(input: {id: $id, account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, \n      balance: $balance, description: $description, check_image: $check_image, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),$=Object(f.a)(d||(d=Object(m.a)(["\n  mutation($id: ID!, $check_template_data: JSON) {\n    updateBankAccountTemplate(input: {id: $id, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),D=Object(f.a)(_||(_=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteBankAccount(id: $id) {\n        id\n        account_number\n    }   \n  }\n"])))},657:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return v}));var c,o,r,l,d=n(91),_=n(58),m=Object(_.a)(c||(c=Object(d.a)(["\n  query($page: Int!, $per_page: Int!, $search: String) {\n    deposits(first: $per_page, page: $page, search: $search) {\n      data {\n         id\n         transaction_amount\n         transaction_date\n         bank_account_id\n         reference_no\n         check_type\n         currency\n         project\n         reason\n         bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),f=Object(_.a)(o||(o=Object(d.a)(["\n  mutation($bank_account_id: ID!, $transaction_amount: Float!, $transaction_date: Date!, $reference_no: String!, $check_type: String!, $project: String!, \n    $currency: String!, $reason: String) {\n    createDeposit(input: {bank_account_id: $bank_account_id, transaction_amount: $transaction_amount, transaction_date: $transaction_date, \n      reference_no: $reference_no, check_type: $check_type, project: $project, reason: $reason, currency: $currency}) {\n        id\n        transaction_amount\n    }\n  }\n"]))),h=Object(_.a)(r||(r=Object(d.a)(["\n  mutation($id: ID!, $bank_account_id: ID!, $transaction_amount: Float!, $transaction_date: Date!, $reference_no: String!, $check_type: String!, $project: String!, $reason: String) {\n    createDeposit(input: {id: $id, bank_account_id: $bank_account_id, transaction_amount: $transaction_amount, transaction_date: $transaction_date, \n      reference_no: $reference_no, check_type: $check_type, project: $project, reason: $reason, currency: $currency}) {\n        id\n        transaction_amount\n    }\n  }\n"]))),v=Object(_.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deleteDeposit(id: $id) {\n        id\n        transaction_amount\n    }   \n  }\n"])))},660:function(t,e,n){"use strict";n.r(e);var c=n(174),o=n(263),r=n(808),l=n(262),d=n(189),_=n(259),m=n(172),f=n(84),h=n(267),v=(n(41),n(274),n(37),{props:["deposits","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Bank Account",class:"blue-grey lighten-3",value:"account_number"},{text:"Transaction Amount",class:"blue-grey lighten-3",value:"transaction_amount"},{text:"Transaction Date",class:"blue-grey lighten-3",value:"transaction_date"},{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Check Type",class:"blue-grey lighten-3",value:"check_type"},{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Currency",class:"blue-grey lighten-3",value:"currency"},{text:"Project",class:"blue-grey lighten-3",value:"project"},{text:"Reason",class:"blue-grey lighten-3",value:"reason"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}}}),k=n(79),component=Object(k.a)(v,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.deposits,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.account_number",fn:function(n){var c=n.item;return[e(o.a,[t._v(t._s(c.bankAccount.bank.name)+" - "+t._s(c.bankAccount.account_number)+" ")])]}},{key:"item.transaction_amount",fn:function(n){var c=n.item;return[e(o.a,[t._v(t._s(t._f("currency")(c.transaction_amount)))])]}},{key:"item.is_locked",fn:function(n){var c=n.item;return[e(o.a,[t._v(t._s(c.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var o=n.item;return[e(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(c.a,t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[e(d.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(_.a,{staticClass:"col-12 px-0"},[e(m.a,{on:{click:function(e){return t.$emit("on-deposit-detail-clicked",o)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(f.b,[t._v("Detail")])],1),t._v(" "),e(l.a),t._v(" "),o.checked?t._e():e(m.a,{on:{click:function(e){return t.$emit("on-deposit-delete-clicked",o)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(f.b,{staticClass:"pr-9"},[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},695:function(t,e,n){"use strict";n.r(e);var c=n(174),o=n(264),r=n(273),l=n(641),d=n(807),_=n(262),m=n(655),f=n(189),h=n(267),v=n(642),k=n(576),y=n(593),$=n(120),D=n(671),j=n(1),O=(n(70),n(34),n(37),n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(106)),x=n(600),C=n(657);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(j.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A={props:["_deposit"],data:function(){return Object(j.a)({editMode:!1,valid:!1,deposit:{currency:"ETB"},bankAccounts:{data:[]},submitting:!1,password_rules:[function(t){return!!t||"Password field is required"}],bank_account_rules:[function(t){return!!t||"Bank Account field is required"}],amount_rules:[function(t){return!!t||"Amount field is required"}],currency_rules:[function(t){return!!t||"Currency field is required"}],date_rules:[function(t){return!!t||"Date field is required"}],reference_no_rules:[function(t){return!!t||"Reference Number field is required"}],check_type_rules:[function(t){return!!t||"Check Type field is required"}]},"check_type_rules",[function(t){return!!t||"Reference Number field is required"}])},apollo:{bankAccounts:{query:x.a,variables:function(){return{page:1,per_page:500}},fetchPolicy:"cache-and-network"}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._deposit)||void 0===t?void 0:t.id)},formattedBankAccounts:function(){return this.bankAccounts.data.map((function(t){return t.label="".concat(t.bank.name," - ").concat(t.account_number),t.id=parseInt(t.id),t}))}},methods:S(S({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.editMode?this.updateDeposit(t):this.registerDeposit(t)},registerDeposit:function(t){var e=this;console.log("deposit",this.deposit),this.submitting=!0,this.deposit.balance=this.deposit.initial_balance,this.$apollo.mutate({mutation:C.b,variables:this.deposit}).then((function(n){n.data;e.successNotification("Deposit registered successfully!"),t.target.reset(),e.submitting=!1,e.$emit("on-close-deposit-form")})).catch((function(t){e.submitting=!1,console.log(t)}))},updateDeposit:function(t){var e=this;this.$apollo.mutate({mutation:C.d,variables:this.deposit}).then((function(n){n.data;e.successNotification("Deposit updated successfully!"),t.target.reset(),e.$emit("on-close-deposit-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._deposit)&&void 0!==t&&t.id&&(this.deposit=S({},this._deposit),this.deposit.bank_account_id=parseInt(this._deposit.bank_account.id))},deep:!0,immediate:!0}}},F=n(79),component=Object(F.a)(A,(function(){var t=this,e=t._self._c;return e(o.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(v.a,{staticClass:"mx-0"},[e("div",[e(r.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Deposit Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(y.a),t._v(" "),t.disableForm?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(f.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(m.a,{staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(v.a,{staticClass:"px-3"},[e(l.a,{attrs:{cols:"12",md:"4"}},[e(k.a,{attrs:{items:t.formattedBankAccounts,"item-value":"id","item-text":"label",label:"Select Bank Account",outlined:"",required:"",rules:t.bank_account_rules},model:{value:t.deposit.bank_account_id,callback:function(e){t.$set(t.deposit,"bank_account_id",e)},expression:"deposit.bank_account_id"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"5"}},[e($.a,{attrs:{label:"Transaction Amount",outlined:"",type:"number",step:"any",required:"",rules:t.amount_rules},model:{value:t.deposit.transaction_amount,callback:function(e){t.$set(t.deposit,"transaction_amount",t._n(e))},expression:"deposit.transaction_amount"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"3"}},[e($.a,{attrs:{label:"Currency",outlined:"",required:"",rules:t.currency_rules},model:{value:t.deposit.currency,callback:function(e){t.$set(t.deposit,"currency",e)},expression:"deposit.currency"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(h.a,{ref:"menu",attrs:{transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,o=n.attrs;return[e($.a,t._g(t._b({attrs:{label:"Date","prepend-icon":"mdi-calendar",readonly:"",outlined:"",rules:t.date_rules},model:{value:t.deposit.transaction_date,callback:function(e){t.$set(t.deposit,"transaction_date",e)},expression:"deposit.transaction_date"}},"v-text-field",o,!1),c))]}}])},[t._v(" "),e(d.a,{attrs:{"no-title":"",outlined:"",scrollable:""},model:{value:t.deposit.transaction_date,callback:function(e){t.$set(t.deposit,"transaction_date",e)},expression:"deposit.transaction_date"}},[e(y.a),t._v(" "),e(c.a,{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                Cancel\n              ")]),t._v(" "),e(c.a,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.deposit.transaction_date)}}},[t._v("\n                OK\n              ")])],1)],1)],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e($.a,{attrs:{label:"Reference Number",outlined:"",required:"",rules:t.reference_no_rules},model:{value:t.deposit.reference_no,callback:function(e){t.$set(t.deposit,"reference_no",e)},expression:"deposit.reference_no"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(k.a,{attrs:{items:["bearer","check"],label:"Select Check Type",outlined:"",required:"",rules:t.check_type_rules},model:{value:t.deposit.check_type,callback:function(e){t.$set(t.deposit,"check_type",e)},expression:"deposit.check_type"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e($.a,{attrs:{label:"Project",outlined:"",required:"",rules:t.check_type_rules},model:{value:t.deposit.project,callback:function(e){t.$set(t.deposit,"project",e)},expression:"deposit.project"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e(D.a,{attrs:{rows:"2",label:"Description",outlined:"",required:""},model:{value:t.deposit.reason,callback:function(e){t.$set(t.deposit,"reason",e)},expression:"deposit.reason"}})],1)],1)],1),t._v(" "),e(_.a,{staticClass:"my-2"}),t._v(" "),e(l.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-deposit-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(y.a),t._v(" "),t.disableForm?t._e():e("div",[t.editMode?e(c.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:t.submitting||!t.valid}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e(c.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:t.submitting||!t.valid}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},814:function(t,e,n){"use strict";n.r(e);var c=n(622),o=n(174),r=n(264),l=n(273),d=n(641),_=n(627),m=n(262),f=n(189),h=n(805),v=n(593),k=n(120),y=(n(41),n(274),n(1)),$=(n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(660)),D=n(695),j=n(657),O=n(106);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={middleware:["authenticated"],components:{DepositTable:$.default,DepositForm:D.default},data:function(){var t;return t={breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Deposits",disabled:!0}],search:"",editMode:!1,deleteDialog:!1,editDepositDialogVisible:!1,DepositFormVisible:!1,dispatchFormVisible:!1,deposits:{},deposit:{}},Object(y.a)(t,"search",{search:"",concrete_type_id:null}),Object(y.a)(t,"pagination",{page:1,per_page:25}),t},apollo:{deposits:{query:j.a,variables:function(){var t={};return this.search.search&&(t=C(C({},t),{search:"".concat(this.search.search)})),C(C({},t),this.pagination)},fetchPolicy:"cache-and-network"}},methods:C(C({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onAddDepositClicked:function(){this.deposit=null,this.DepositFormVisible=!0},onDepositDetailClicked:function(t){this.DepositFormVisible=!0,this.deposit=t},onDepositDeleteClicked:function(t){this.deposit=t,this.deleteDialog=!0},deleteDeposit:function(){var t=this;this.$apollo.mutate({mutation:j.c,variables:{id:this.deposit.id}}).then((function(e){e.data;t.successNotification("Deposit removed successfully!"),t.$apollo.queries.deposits.refetch()})).catch((function(t){console.log(t)})),this.deposit=null,this.deleteDialog=!1},closeDepositForm:function(){this.deposit=null,this.DepositFormVisible=!1,this.$apollo.queries.deposits.refetch()}}),created:function(){console.log(this.deposits)}},S=w,A=n(79),component=Object(A.a)(S,(function(){var t,e,n=this,y=n._self._c;return y("div",{staticClass:"pa-5 grey lighten-3"},[y(c.a,{attrs:{deposits:n.breadcrumbs},scopedSlots:n._u([{key:"divider",fn:function(){return[y(f.a,[n._v("mdi-chevron-double-right")])]},proxy:!0}])}),n._v(" "),y("div",{staticClass:"px-4 row ma-1"},[n._m(0),n._v(" "),y(v.a),n._v(" "),y("div",{staticClass:"pr-2"},[y("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:n.onAddDepositClicked}},[y(f.a,{attrs:{left:"",dark:""}},[n._v(" mdi-plus-circle ")]),n._v("\n        Add Deposit\n      ")],1)])],1),n._v(" "),y("div",{staticClass:"px-5 py-3"},[y("div",{staticClass:"row mb-4"},[y(d.a,{attrs:{cols:"12",lg:"4"}},[y(k.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by account number","single-line":"","hide-details":"",outlined:""},model:{value:n.search.search,callback:function(t){n.$set(n.search,"search",t)},expression:"search.search"}})],1)],1),n._v(" "),y("deposit-table",{attrs:{deposits:n.deposits.data},on:{"on-deposit-detail-clicked":n.onDepositDetailClicked,"on-deposit-delete-clicked":n.onDepositDeleteClicked}}),n._v(" "),y(h.a,{staticClass:"my-4",attrs:{length:null===(t=n.deposits)||void 0===t||null===(e=t.paginatorInfo)||void 0===e?void 0:e.lastPage},model:{value:n.pagination.page,callback:function(t){n.$set(n.pagination,"page",t)},expression:"pagination.page"}})],1),n._v(" "),y("div",[y(_.a,{attrs:{width:"1080"},on:{"click:outside":n.closeDepositForm},model:{value:n.DepositFormVisible,callback:function(t){n.DepositFormVisible=t},expression:"DepositFormVisible"}},[y("deposit-form",{attrs:{_deposit:n.deposit,editMode:n.editMode},on:{"on-close-deposit-form":n.closeDepositForm}})],1),n._v(" "),y(_.a,{attrs:{width:"500"},model:{value:n.deleteDialog,callback:function(t){n.deleteDialog=t},expression:"deleteDialog"}},[y(r.a,{staticClass:"red lighten-4"},[y(l.c,{staticClass:"text-h5 red lighten-2"},[n._v(" Confirm ")]),n._v(" "),y(l.b,{staticClass:"pt-3"},[n._v("\n          Are you sure you want to delete this resource!\n        ")]),n._v(" "),y(m.a),n._v(" "),y(l.a,[y(v.a),n._v(" "),y(o.a,{attrs:{color:"primary",text:""},on:{click:n.deleteDeposit}},[n._v(" I accept ")])],1)],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("All Deposits")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All Deposits Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);