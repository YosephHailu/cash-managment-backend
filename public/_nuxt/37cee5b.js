(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{600:function(t,n,e){"use strict";e.d(n,"a",(function(){return h})),e.d(n,"d",(function(){return k})),e.d(n,"b",(function(){return $})),e.d(n,"e",(function(){return v})),e.d(n,"f",(function(){return y})),e.d(n,"c",(function(){return j}));var c,r,o,d,l,_,m=e(91),f=e(58),h=Object(f.a)(c||(c=Object(m.a)(["\n  query($page: Int!, $per_page: Int!) {\n    bankAccounts(first: $per_page, page: $page) {\n      data {\n         id\n         account_number\n         initial_balance\n         balance\n         description\n         bank_id\n         branch\n         check_image_url\n         check_template_data\n         bank {\n          id\n          name\n         }\n      }\n    }   \n  }\n"]))),k=Object(f.a)(r||(r=Object(m.a)(["\n  query($id: ID!) {\n    bankAccount(id: $id) {\n      id\n      account_number\n      initial_balance\n      balance\n      description\n      bank_id\n      branch\n      check_image_url\n      check_template_data\n      total_payment\n      total_deposit\n      payments {\n        id\n        to\n        amount_in_words\n        transaction_date\n        bank_account_id\n        reason\n        project\n        payment_method\n        transaction_amount\n        voided\n        voided_date\n        voided_reason\n        payment_date\n        payment_pending\n        bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n        }\n      }\n      deposits {\n        id\n        transaction_amount\n        transaction_date\n        bank_account_id\n        reference_no\n        check_type\n        currency\n        project\n        reason\n        bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n        }\n      }\n      bank {\n        id\n        name\n      }\n    }\n  }\n"]))),$=Object(f.a)(o||(o=Object(m.a)(["\n  mutation($account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n    $check_image: Upload) {\n    createBankAccount(input: {account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, balance: $balance,\n       description: $description, check_image: $check_image}) {\n      id\n      account_number\n    }\n  }\n"]))),v=Object(f.a)(d||(d=Object(m.a)(["\n  mutation($id: ID!, $account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n  $check_image: Upload, $check_template_data: JSON) {\n    updateBankAccount(input: {id: $id, account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, \n      balance: $balance, description: $description, check_image: $check_image, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),y=Object(f.a)(l||(l=Object(m.a)(["\n  mutation($id: ID!, $check_template_data: JSON) {\n    updateBankAccountTemplate(input: {id: $id, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),j=Object(f.a)(_||(_=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteBankAccount(id: $id) {\n        id\n        account_number\n    }   \n  }\n"])))},657:function(t,n,e){"use strict";e.d(n,"a",(function(){return m})),e.d(n,"b",(function(){return f})),e.d(n,"d",(function(){return h})),e.d(n,"c",(function(){return k}));var c,r,o,d,l=e(91),_=e(58),m=Object(_.a)(c||(c=Object(l.a)(["\n  query($page: Int!, $per_page: Int!, $search: String) {\n    deposits(first: $per_page, page: $page, search: $search) {\n      data {\n         id\n         transaction_amount\n         transaction_date\n         bank_account_id\n         reference_no\n         check_type\n         currency\n         project\n         reason\n         bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n         }\n      }\n    }   \n  }\n"]))),f=Object(_.a)(r||(r=Object(l.a)(["\n  mutation($bank_account_id: ID!, $transaction_amount: Float!, $transaction_date: Date!, $reference_no: String!, $check_type: String!, $project: String!, \n    $currency: String!, $reason: String) {\n    createDeposit(input: {bank_account_id: $bank_account_id, transaction_amount: $transaction_amount, transaction_date: $transaction_date, \n      reference_no: $reference_no, check_type: $check_type, project: $project, reason: $reason, currency: $currency}) {\n        id\n        transaction_amount\n    }\n  }\n"]))),h=Object(_.a)(o||(o=Object(l.a)(["\n  mutation($id: ID!, $bank_account_id: ID!, $transaction_amount: Float!, $transaction_date: Date!, $reference_no: String!, $check_type: String!, $project: String!, $reason: String) {\n    createDeposit(input: {id: $id, bank_account_id: $bank_account_id, transaction_amount: $transaction_amount, transaction_date: $transaction_date, \n      reference_no: $reference_no, check_type: $check_type, project: $project, reason: $reason, currency: $currency}) {\n        id\n        transaction_amount\n    }\n  }\n"]))),k=Object(_.a)(d||(d=Object(l.a)(["\n  mutation($id: ID!) {\n    deleteDeposit(id: $id) {\n        id\n        transaction_amount\n    }   \n  }\n"])))},694:function(t,n,e){"use strict";e.r(n);var c=e(174),r=e(264),o=e(273),d=e(636),l=e(807),_=e(262),m=e(646),f=e(189),h=e(267),k=e(639),$=e(576),v=e(593),y=e(120),j=e(670),O=e(1),D=(e(70),e(34),e(37),e(12),e(13),e(11),e(4),e(15),e(9),e(16),e(106)),x=e(600),S=e(657);function w(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(n){Object(O.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}var A={props:["_deposit"],data:function(){return Object(O.a)({editMode:!1,valid:!1,deposit:{currency:"ETB"},bankAccounts:{data:[]},submitting:!1,password_rules:[function(t){return!!t||"Password field is required"}],bank_account_rules:[function(t){return!!t||"Bank Account field is required"}],amount_rules:[function(t){return!!t||"Amount field is required"}],currency_rules:[function(t){return!!t||"Currency field is required"}],date_rules:[function(t){return!!t||"Date field is required"}],reference_no_rules:[function(t){return!!t||"Reference Number field is required"}],check_type_rules:[function(t){return!!t||"Check Type field is required"}]},"check_type_rules",[function(t){return!!t||"Reference Number field is required"}])},apollo:{bankAccounts:{query:x.a,variables:function(){return{page:1,per_page:500}},fetchPolicy:"cache-and-network"}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._deposit)||void 0===t?void 0:t.id)},formattedBankAccounts:function(){return this.bankAccounts.data.map((function(t){return t.label="".concat(t.bank.name," - ").concat(t.account_number),t.id=parseInt(t.id),t}))}},methods:C(C({},Object(D.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.editMode?this.updateDeposit(t):this.registerDeposit(t)},registerDeposit:function(t){var n=this;console.log("deposit",this.deposit),this.submitting=!0,this.deposit.balance=this.deposit.initial_balance,this.$apollo.mutate({mutation:S.b,variables:this.deposit}).then((function(e){e.data;n.successNotification("Deposit registered successfully!"),t.target.reset(),n.submitting=!1,n.$emit("on-close-deposit-form")})).catch((function(t){n.submitting=!1,console.log(t)}))},updateDeposit:function(t){var n=this;this.$apollo.mutate({mutation:S.d,variables:this.deposit}).then((function(e){e.data;n.successNotification("Deposit updated successfully!"),t.target.reset(),n.$emit("on-close-deposit-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._deposit)&&void 0!==t&&t.id&&(this.deposit=C({},this._deposit),this.deposit.bank_account_id=parseInt(this._deposit.bank_account.id))},deep:!0,immediate:!0}}},I=e(79),component=Object(I.a)(A,(function(){var t=this,n=t._self._c;return n(r.a,[n("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[n(k.a,{staticClass:"mx-0"},[n("div",[n(o.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Deposit Registration Form\n        ")]),t._v(" "),n("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),n(v.a),t._v(" "),t.disableForm?n("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(n){t.editMode=!0}}},[n(f.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),n("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),n(m.a,{staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(n){return n.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(n){t.valid=n},expression:"valid"}},[n("div",{staticClass:"mx-5"},[n(k.a,{staticClass:"px-3"},[n(d.a,{attrs:{cols:"12",md:"4"}},[n($.a,{attrs:{items:t.formattedBankAccounts,"item-value":"id","item-text":"label",label:"Select Bank Account",outlined:"",required:"",rules:t.bank_account_rules},model:{value:t.deposit.bank_account_id,callback:function(n){t.$set(t.deposit,"bank_account_id",n)},expression:"deposit.bank_account_id"}})],1),t._v(" "),n(d.a,{attrs:{cols:"12",md:"5"}},[n(y.a,{attrs:{label:"Transaction Amount",outlined:"",type:"number",step:"any",required:"",rules:t.amount_rules},model:{value:t.deposit.transaction_amount,callback:function(n){t.$set(t.deposit,"transaction_amount",t._n(n))},expression:"deposit.transaction_amount"}})],1),t._v(" "),n(d.a,{attrs:{cols:"12",md:"3"}},[n(y.a,{attrs:{label:"Currency",outlined:"",required:"",rules:t.currency_rules},model:{value:t.deposit.currency,callback:function(n){t.$set(t.deposit,"currency",n)},expression:"deposit.currency"}})],1),t._v(" "),n(d.a,{attrs:{cols:"12",md:"6"}},[n(h.a,{ref:"menu",attrs:{transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var c=e.on,r=e.attrs;return[n(y.a,t._g(t._b({attrs:{label:"Date","prepend-icon":"mdi-calendar",readonly:"",outlined:"",rules:t.date_rules},model:{value:t.deposit.transaction_date,callback:function(n){t.$set(t.deposit,"transaction_date",n)},expression:"deposit.transaction_date"}},"v-text-field",r,!1),c))]}}])},[t._v(" "),n(l.a,{attrs:{"no-title":"",outlined:"",scrollable:""},model:{value:t.deposit.transaction_date,callback:function(n){t.$set(t.deposit,"transaction_date",n)},expression:"deposit.transaction_date"}},[n(v.a),t._v(" "),n(c.a,{attrs:{text:"",color:"primary"},on:{click:function(n){t.menu=!1}}},[t._v("\n                Cancel\n              ")]),t._v(" "),n(c.a,{attrs:{text:"",color:"primary"},on:{click:function(n){return t.$refs.menu.save(t.deposit.transaction_date)}}},[t._v("\n                OK\n              ")])],1)],1)],1),t._v(" "),n(d.a,{attrs:{cols:"12",md:"6"}},[n(y.a,{attrs:{label:"Reference Number",outlined:"",required:"",rules:t.reference_no_rules},model:{value:t.deposit.reference_no,callback:function(n){t.$set(t.deposit,"reference_no",n)},expression:"deposit.reference_no"}})],1),t._v(" "),n(d.a,{attrs:{cols:"12",md:"6"}},[n($.a,{attrs:{items:["bearer","check"],label:"Select Check Type",outlined:"",required:"",rules:t.check_type_rules},model:{value:t.deposit.check_type,callback:function(n){t.$set(t.deposit,"check_type",n)},expression:"deposit.check_type"}})],1),t._v(" "),n(d.a,{attrs:{cols:"12",md:"6"}},[n(y.a,{attrs:{label:"Project",outlined:"",required:"",rules:t.check_type_rules},model:{value:t.deposit.project,callback:function(n){t.$set(t.deposit,"project",n)},expression:"deposit.project"}})],1),t._v(" "),n(d.a,{attrs:{cols:"12"}},[n(j.a,{attrs:{rows:"2",label:"Description",outlined:"",required:""},model:{value:t.deposit.reason,callback:function(n){t.$set(t.deposit,"reason",n)},expression:"deposit.reason"}})],1)],1)],1),t._v(" "),n(_.a,{staticClass:"my-2"}),t._v(" "),n(d.a,{staticClass:"d-flex"},[n("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(n){return t.$emit("on-close-deposit-form")}}},[n("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),n(v.a),t._v(" "),t.disableForm?t._e():n("div",[t.editMode?n(c.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:t.submitting||!t.valid}},[n("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):n(c.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:t.submitting||!t.valid}},[n("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);