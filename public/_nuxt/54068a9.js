(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{599:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return y})),n.d(e,"e",(function(){return k})),n.d(e,"f",(function(){return $})),n.d(e,"c",(function(){return w}));var o,c,r,d,l,m,_=n(91),h=n(58),v=Object(h.a)(o||(o=Object(_.a)(["\n  query($page: Int!, $per_page: Int!) {\n    bankAccounts(first: $per_page, page: $page) {\n      data {\n         id\n         account_number\n         initial_balance\n         balance\n         description\n         bank_id\n         branch\n         check_image_url\n         check_template_data\n         bank {\n          id\n          name\n         }\n      }\n    }   \n  }\n"]))),f=Object(h.a)(c||(c=Object(_.a)(["\n  query($id: ID!) {\n    bankAccount(id: $id) {\n      id\n      account_number\n      initial_balance\n      balance\n      description\n      bank_id\n      branch\n      check_image_url\n      check_template_data\n      total_payment\n      total_deposit\n      payments {\n        id\n        to\n        amount_in_words\n        transaction_date\n        bank_account_id\n        reason\n        project\n        payment_method\n        transaction_amount\n        voided\n        voided_date\n        voided_reason\n        payment_date\n        payment_pending\n        bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n        }\n      }\n      deposits {\n        id\n        transaction_amount\n        transaction_date\n        bank_account_id\n        reference_no\n        check_type\n        currency\n        project\n        reason\n        bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n        }\n      }\n      bank {\n        id\n        name\n      }\n    }\n  }\n"]))),y=Object(h.a)(r||(r=Object(_.a)(["\n  mutation($account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n    $check_image: Upload) {\n    createBankAccount(input: {account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, balance: $balance,\n       description: $description, check_image: $check_image}) {\n      id\n      account_number\n    }\n  }\n"]))),k=Object(h.a)(d||(d=Object(_.a)(["\n  mutation($id: ID!, $account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n  $check_image: Upload, $check_template_data: JSON) {\n    updateBankAccount(input: {id: $id, account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, \n      balance: $balance, description: $description, check_image: $check_image, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),$=Object(h.a)(l||(l=Object(_.a)(["\n  mutation($id: ID!, $check_template_data: JSON) {\n    updateBankAccountTemplate(input: {id: $id, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),w=Object(h.a)(m||(m=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteBankAccount(id: $id) {\n        id\n        account_number\n    }   \n  }\n"])))},602:function(t,e,n){var content=n(612);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("f04981f0",content,!0,{sourceMap:!1})},610:function(t,e,n){"use strict";n.d(e,"a",(function(){return k})),n.d(e,"f",(function(){return $})),n.d(e,"d",(function(){return w})),n.d(e,"g",(function(){return O})),n.d(e,"e",(function(){return j})),n.d(e,"h",(function(){return x})),n.d(e,"c",(function(){return S})),n.d(e,"b",(function(){return P}));var o,c,r,d,l,m,_,h,v,f=n(91),y=n(58),k=Object(y.a)(o||(o=Object(f.a)(["\n  query($page: Int!, $per_page: Int!, $voided: Boolean, $payment_pending: Boolean, $approved: Boolean, $search: String) {\n    payments(first: $per_page, page: $page, voided: $voided, pending: $payment_pending, search: $search, approved: $approved) {\n      data {\n         id\n         to\n         amount_in_words\n         transaction_date\n         bank_account_id\n         reason\n         project\n         payment_method\n         transaction_amount\n         voided\n         voided_date\n         voided_reason\n         payment_date\n         payment_pending\n         checked_by_id\n         checked_at\n         checked\n         approved_by_id\n         approved_at\n         approved\n         invoice_number\n         cheque_number\n         bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n         }\n      }\n    }   \n  }\n"]))),$=Object(y.a)(c||(c=Object(f.a)(["\n  query($id: ID!) {\n    payment(id: $id) {\n      id\n      to\n      amount_in_words\n      transaction_date\n      bank_account_id\n      reason\n      project\n      payment_method\n      transaction_amount\n      voided\n      voided_date\n      voided_reason\n      checked_by_id\n      checked_at\n      checked\n      approved_by_id\n      approved_at\n      approved\n      payment_date\n      payment_pending\n      invoice_number\n      cheque_number\n      bankAccount {\n        id\n        account_number\n        check_image_url\n        check_template_data\n        bank {\n          id\n          name\n        }\n      }\n    }   \n  }\n"]))),w=Object(y.a)(r||(r=Object(f.a)(["\n  mutation($bank_account_id: ID!, $to: String!, $amount_in_words: String!, $transaction_amount: Float!, $transaction_date: Date!, $project: String!, \n    $payment_method:String!, $to_bank_account_id: ID, $reason: String, $cheque_number: String) {\n    createPayment(input: {bank_account_id: $bank_account_id, to: $to, amount_in_words: $amount_in_words, transaction_date: $transaction_date, \n      transaction_amount: $transaction_amount, to_bank_account_id: $to_bank_account_id, reason: $reason, project: $project, \n      payment_method: $payment_method, cheque_number: $cheque_number}) {\n        id\n        to\n    }\n  }\n"]))),O=Object(y.a)(d||(d=Object(f.a)(["\n  mutation($id: ID!, $bank_account_id: ID!, $to: String!, $amount_in_words: String!, $transaction_amount: Float!, $transaction_date: Date!, \n    $project: String!, $payment_method:String!, $to_bank_account_id: ID, $reason: String, $cheque_number: String) {\n    updatePayment(input: {id: $id, bank_account_id: $bank_account_id, to: $to, amount_in_words: $amount_in_words, transaction_date: $transaction_date,\n      transaction_amount: $transaction_amount, to_bank_account_id: $to_bank_account_id, project: $project, reason: $reason, \n      payment_method: $payment_method, cheque_number: $cheque_number}) {\n        id\n        to\n    }\n  }\n"]))),j=Object(y.a)(l||(l=Object(f.a)(["\n  mutation($id: ID!) {\n    deletePayment(id: $id) {\n        id\n        to\n    }   \n  }\n"]))),x=Object(y.a)(m||(m=Object(f.a)(["\n  mutation($id: ID!, $voided_reason: String!) {\n    voidPayment(input: {id: $id, voided_reason: $voided_reason}) {\n        id\n        to\n    }   \n  }\n"]))),S=Object(y.a)(_||(_=Object(f.a)(["\n  mutation($id: ID!) {\n    checkPayment(id: $id) {\n        id\n        to\n    }   \n  }\n"]))),P=Object(y.a)(h||(h=Object(f.a)(["\n  mutation($id: ID!) {\n    approvePayment(id: $id) {\n        id\n        to\n    }   \n  }\n"])));Object(y.a)(v||(v=Object(f.a)(["\n  mutation {\n    exportPayments {\n        status\n    }   \n  }\n"])))},611:function(t,e,n){"use strict";n(602)},612:function(t,e,n){var o=n(19)(!1);o.push([t.i,".img{z-index:0!important}.check-dev{transform-origin:top left}@media print{.check-dev{transform-origin:top left;transform:rotate(-90deg) translateX(-100%);position:relative}}",""]),t.exports=o},613:function(t,e,n){"use strict";n.r(e);var o=n(174),c=n(631),r=n(189),d=n(632),l=(n(36),n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(1)),m=n(106),_=n(599);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:["check_image","payment","bankAccount"],data:function(){return{check_template_data:{name:{top:313,left:291},amount:{top:395,left:663},amount_in_words:{top:360,left:291},branch:{top:150,left:372},date:{top:268,left:665},dimension:{width:200,height:30}},top:0,left:0,position:"absolute"}},computed:{template:function(){var t;if(null!==(t=this.bankAccount)&&void 0!==t&&t.check_template_data){var e=JSON.parse(this.bankAccount.check_template_data);return e.dimension||(e.dimension={}),this.check_template_data=e,e}return this.check_template_data}},methods:v(v({},Object(m.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{updateBankAccountTemplate:function(){var t=this;this.$apollo.mutate({mutation:_.f,variables:{check_template_data:JSON.stringify(this.check_template_data),id:this.bankAccount.id}}).then((function(e){e.data;t.successNotification("Bank Account Template Updated Successfully!")})).catch((function(t){console.log(t)}))},calculatePosition:function(t){this.top=t.offsetY-5,this.left=t.offsetX}}),created:function(){},watch:{check_template_data:{handler:function(){this.$emit("on-template-data-change",this.check_template_data)},deep:!0}}},y=(n(611),n(79)),component=Object(y.a)(f,(function(){var t,e,n,l,m,_=this,h=_._self._c;return h("div",[h(d.a,{staticClass:"px-2 mb-5 no-print"},[h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Name")]),_._v(" "),h(d.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.name.top,expression:"check_template_data.name.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:_.check_template_data.name.top},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.name,"top",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.name.left,expression:"check_template_data.name.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:_.check_template_data.name.left},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.name,"left",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Amount")]),_._v(" "),h(d.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.amount.top,expression:"check_template_data.amount.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:_.check_template_data.amount.top},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.amount,"top",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.amount.left,expression:"check_template_data.amount.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:_.check_template_data.amount.left},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.amount,"left",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Amount In Words")]),_._v(" "),h(d.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.amount_in_words.top,expression:"check_template_data.amount_in_words.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:_.check_template_data.amount_in_words.top},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.amount_in_words,"top",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.amount_in_words.left,expression:"check_template_data.amount_in_words.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:_.check_template_data.amount_in_words.left},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.amount_in_words,"left",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Branch")]),_._v(" "),h(d.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.branch.top,expression:"check_template_data.branch.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:_.check_template_data.branch.top},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.branch,"top",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.branch.left,expression:"check_template_data.branch.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:_.check_template_data.branch.left},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.branch,"left",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Date")]),_._v(" "),h(d.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.date.top,expression:"check_template_data.date.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:_.check_template_data.date.top},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.date,"top",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.date.left,expression:"check_template_data.date.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:_.check_template_data.date.left},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.date,"left",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Dimensions")]),_._v(" "),h(d.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.dimension.width,expression:"check_template_data.dimension.width"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Width"},domProps:{value:_.check_template_data.dimension.width},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.dimension,"width",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.dimension.height,expression:"check_template_data.dimension.height"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Height"},domProps:{value:_.check_template_data.dimension.height},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.dimension,"height",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{staticClass:"mt-5"},[h("span",[_._v(" TOP: "+_._s(_.top)+" ")]),_._v(" "),h("span",{staticClass:"px-5"},[_._v("|")]),_._v(" "),h("span",[_._v(" LEFT: "+_._s(_.left)+" ")])])],1),_._v(" "),_.payment.id?h(o.a,{staticClass:"ml-5 light no-print",staticStyle:{float:"right"},attrs:{to:"/payment"},on:{click:_.updateBankAccountTemplate}},[h(r.a,{staticClass:"mr-2"},[_._v("mdi-arrow-left")]),_._v(" Get Back\n  ")],1):_._e(),_._v(" "),_.payment.id?h(o.a,{staticClass:"ml-5 blue-grey white--text no-print",staticStyle:{float:"right"},on:{click:_.updateBankAccountTemplate}},[h(r.a,{staticClass:"mr-2"},[_._v("mdi-check")]),_._v(" Save Changes\n  ")],1):_._e(),_._v(" "),h("div",{staticClass:"check-dev",on:{click:_.calculatePosition}},[h("span",{staticClass:"names white--black",staticStyle:{color:"black !important"},style:{position:_.position,top:_.template.name.top+"px",left:_.template.name.left+"px"},attrs:{color:""}},[_._v(_._s(null===(t=_.payment)||void 0===t?void 0:t.to))]),_._v(" "),h("span",{staticClass:"names",style:{position:_.position,width:_.template.dimension.width+"px",top:_.template.amount_in_words.top+"px",left:_.template.amount_in_words.left+"px",lineHeight:_.template.dimension.height+"px","text-transform":"uppercase"}},[_._v(_._s(null===(e=_.payment)||void 0===e?void 0:e.amount_in_words))]),_._v(" "),h("span",{staticClass:"names",style:{position:_.position,top:_.template.amount.top+"px",left:_.template.amount.left+"px"}},[_._v(_._s(_._f("number_format")(null===(n=_.payment)||void 0===n?void 0:n.transaction_amount)))]),_._v(" "),h("span",{staticClass:"names",style:{position:_.position,top:_.template.branch.top+"px",left:_.template.branch.left+"px"}},[_._v(_._s(null===(l=_.payment)||void 0===l?void 0:l.branch))]),_._v(" "),h("span",{staticClass:"names",style:{position:_.position,top:_.template.date.top+"px",left:_.template.date.left+"px"}},[_._v(_._s(null===(m=_.payment)||void 0===m?void 0:m.payment_date)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},630:function(t,e,n){"use strict";n.r(e);var o=n(174),c=n(264),r=n(273),d=n(631),l=n(795),m=n(262),_=n(642),h=n(189),v=n(267),f=n(632),y=n(577),k=n(592),$=n(121),w=n(663),O=(n(11),n(4),n(12),n(13),n(15),n(9),n(16),n(1)),j=(n(118),n(68),n(34),n(36),n(41),n(188),n(86),n(50),n(106)),x=n(279),S=n(599),P=n(610);n(616);function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(O.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var N={components:{CheckPrintForm:n(613).default},props:["_payment","readOnlyForm"],data:function(){var t=this;return{editMode:!1,valid:!1,payment:{},bankAccounts:{data:[]},submitting:!1,to_rules:[function(e){return!!e&&"Account To Account"!=t.payment.payment_method||"To field is required"}],to_bank_account_rules:[function(e){return!!e&&"Account To Account"==t.payment.payment_method||"To Bank Account field is required"}],password_rules:[function(t){return!!t||"Password field is required"}],bank_account_rules:[function(t){return!!t||"Bank Account field is required"}],payment_method_rules:[function(t){return!!t||"Payment Method field is required"}],date_rules:[function(t){return!!t||"Date field is required"}],amount_rules:[function(t){return!!t||"Amount field is required"}],amount_in_words_rules:[function(t){return!!t||"Amount In Words field is required"}],project_rules:[function(t){return!!t||"Project field is required"}],reason_rules:[function(t){return!!t||"Reason field is required"}]}},apollo:{bankAccounts:{query:S.a,variables:function(){return{page:1,per_page:25}},fetchPolicy:"cache-and-network"}},computed:{bankAccount:function(){var t=this;return this.bankAccounts.data.find((function(e){var n;return e.id==(null===(n=t.payment)||void 0===n?void 0:n.bank_account_id)}))},disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._payment)||void 0===t?void 0:t.id)},formattedBankAccounts:function(){return this.bankAccounts.data.map((function(t){return t.label="".concat(t.bank.name," - ").concat(t.account_number),t.id=parseInt(t.id),t}))}},methods:C(C({},Object(j.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updatePayment(t):this.registerPayment(t))},registerPayment:function(t){var e=this;this.submitting=!0,this.payment.balance=this.payment.initial_balance,this.$apollo.mutate({mutation:P.d,variables:this.payment}).then((function(n){n.data;e.successNotification("Payment registered successfully!"),t.target.reset(),e.$emit("on-close-payment-form"),e.payment={},e.submitting=!1})).catch((function(t){e.submitting=!1}))},updatePayment:function(t){var e=this;this.$apollo.mutate({mutation:P.g,variables:this.payment}).then((function(n){n.data;e.successNotification("Payment updated successfully!"),t.target.reset(),e.$emit("on-close-payment-form"),e.editMode=!1,e.payment={}})).catch((function(t){console.log(t.response)}))},onAmountCHange:function(){var t=(this.payment.transaction_amount+"").split(".");t[1]?this.payment.amount_in_words="".concat(Object(x.b)(t[0])," birr and ").concat(this.numberToWordForCents(t[1])," cents"):this.payment.amount_in_words="".concat(Object(x.b)(this.payment.transaction_amount)," Birr Only").toUpperCase()},numberToWordForCents:function(t){for(var e=t.toString().match(/^0+/),n=e?e[0].length:0,o="",c=0;c<n;c++)o="".concat(o),console.log(c,o);return console.log(t.toString().slice(n)),t<=9&&0==n&&(t*=10),o+Object(x.b)(parseInt(t))},onPaymentMethodSelected:function(){this.payment.to="","Check"==this.payment_method?this.payment.to_bank_account_id=null:"Account To Account"==this.payment_method&&(this.payment.to="Internal")}}),watch:{$props:{handler:function(){var t;null!==(t=this._payment)&&void 0!==t&&t.id?(this.payment=C({},this._payment),this.payment.bank_account_id=parseInt(this._payment.bankAccount.id)):(this.payment={},this.editMode=!1)},deep:!0,immediate:!0}}},D=n(79),component=Object(D.a)(N,(function(){var t=this,e=t._self._c;return e(c.a,[t.readOnlyForm?t._e():e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(f.a,{staticClass:"mx-0"},[e("div",[e(r.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Payment Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(k.a),t._v(" "),t.disableForm?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(h.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(_.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(f.a,{staticClass:"px-3"},[e(d.a,{attrs:{cols:"12",md:"4"}},[e(y.a,{attrs:{items:t.formattedBankAccounts,"item-value":"id","item-text":"label",label:"Select Bank Account",outlined:"",required:"",rules:t.bank_account_rules},model:{value:t.payment.bank_account_id,callback:function(e){t.$set(t.payment,"bank_account_id",e)},expression:"payment.bank_account_id"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",md:"5"}},[e(y.a,{attrs:{items:["Check","Account To Account","CPO","Letter Payment"],label:"Select Payment Method",outlined:"",required:"",rules:t.payment_method_rules},on:{change:t.onPaymentMethodSelected},model:{value:t.payment.payment_method,callback:function(e){t.$set(t.payment,"payment_method",e)},expression:"payment.payment_method"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",md:"3"}},[e(v.a,{ref:"menu",attrs:{transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[e($.a,t._g(t._b({attrs:{label:"Date","prepend-icon":"mdi-calendar",readonly:"",outlined:"",rules:t.date_rules},model:{value:t.payment.transaction_date,callback:function(e){t.$set(t.payment,"transaction_date",e)},expression:"payment.transaction_date"}},"v-text-field",c,!1),o))]}}])},[t._v(" "),e(l.a,{attrs:{"no-title":"",outlined:"",scrollable:""},model:{value:t.payment.transaction_date,callback:function(e){t.$set(t.payment,"transaction_date",e)},expression:"payment.transaction_date"}},[e(k.a),t._v(" "),e(o.a,{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                Cancel\n              ")]),t._v(" "),e(o.a,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.payment.transaction_date)}}},[t._v("\n                OK\n              ")])],1)],1)],1),t._v(" "),e(d.a,{attrs:{cols:"12",md:"4"}},[e($.a,{attrs:{label:"Transaction Amount",outlined:"",type:"number",step:"0.01",required:"",rules:t.amount_rules},on:{input:t.onAmountCHange},model:{value:t.payment.transaction_amount,callback:function(e){t.$set(t.payment,"transaction_amount",t._n(e))},expression:"payment.transaction_amount"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",md:"4"}},[e(w.a,{attrs:{label:"Amount In Words",outlined:"",rows:"2",required:"",rules:t.amount_in_words_rules},model:{value:t.payment.amount_in_words,callback:function(e){t.$set(t.payment,"amount_in_words",e)},expression:"payment.amount_in_words"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",md:"4"}},[e($.a,{attrs:{label:"Cheque Number",outlined:""},model:{value:t.payment.cheque_number,callback:function(e){t.$set(t.payment,"cheque_number",e)},expression:"payment.cheque_number"}})],1),t._v(" "),"Account To Account"!=t.payment.payment_method?e(d.a,{attrs:{cols:"12",md:"8"}},[e($.a,{attrs:{label:"To",outlined:"",required:"",rules:t.to_rules},model:{value:t.payment.to,callback:function(e){t.$set(t.payment,"to",e)},expression:"payment.to"}})],1):e(d.a,{attrs:{cols:"12",md:"8"}},[e(y.a,{attrs:{items:t.formattedBankAccounts.filter((function(e){return e.id!=t.payment.bank_account_id})),"item-value":"id","item-text":"label",label:"To",outlined:"",required:"",rules:t.to_bank_account_rules},model:{value:t.payment.to_bank_account_id,callback:function(e){t.$set(t.payment,"to_bank_account_id",e)},expression:"payment.to_bank_account_id"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",md:"4"}},[e($.a,{attrs:{label:"Project",outlined:"",required:"",rules:t.project_rules},model:{value:t.payment.project,callback:function(e){t.$set(t.payment,"project",e)},expression:"payment.project"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(w.a,{attrs:{rows:"2",label:"Reason",outlined:"",required:"",rules:t.reason_rules},model:{value:t.payment.reason,callback:function(e){t.$set(t.payment,"reason",e)},expression:"payment.reason"}})],1)],1)],1),t._v(" "),e("div",{staticStyle:{position:"relative"}},[(t.bankAccount&&"Check"==t.payment.payment_method)&!t.readOnlyForm?e("check-print-form",{attrs:{payment:t.payment,bankAccount:t.bankAccount,check_image:t.bankAccount.check_image_url}}):t._e()],1),t._v(" "),e(m.a,{staticClass:"my-2"}),t._v(" "),t.readOnlyForm?t._e():e(d.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-payment-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(k.a),t._v(" "),t.disableForm?t._e():e("div",[t.editMode?e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:t.submitting||!t.valid}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:t.submitting||!t.valid}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);