(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{600:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"d",(function(){return y})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return k})),n.d(e,"f",(function(){return $})),n.d(e,"c",(function(){return w}));var o,c,r,l,d,m,_=n(91),h=n(58),v=Object(h.a)(o||(o=Object(_.a)(["\n  query($page: Int!, $per_page: Int!) {\n    bankAccounts(first: $per_page, page: $page) {\n      data {\n         id\n         account_number\n         initial_balance\n         balance\n         description\n         bank_id\n         branch\n         check_image_url\n         check_template_data\n         bank {\n          id\n          name\n         }\n      }\n    }   \n  }\n"]))),y=Object(h.a)(c||(c=Object(_.a)(["\n  query($id: ID!) {\n    bankAccount(id: $id) {\n      id\n      account_number\n      initial_balance\n      balance\n      description\n      bank_id\n      branch\n      check_image_url\n      check_template_data\n      total_payment\n      total_deposit\n      payments {\n        id\n        to\n        amount_in_words\n        transaction_date\n        bank_account_id\n        reason\n        project\n        payment_method\n        transaction_amount\n        voided\n        voided_date\n        voided_reason\n        payment_date\n        payment_pending\n        bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n        }\n      }\n      deposits {\n        id\n        transaction_amount\n        transaction_date\n        bank_account_id\n        reference_no\n        check_type\n        currency\n        project\n        reason\n        bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n        }\n      }\n      bank {\n        id\n        name\n      }\n    }\n  }\n"]))),f=Object(h.a)(r||(r=Object(_.a)(["\n  mutation($account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n    $check_image: Upload) {\n    createBankAccount(input: {account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, balance: $balance,\n       description: $description, check_image: $check_image}) {\n      id\n      account_number\n    }\n  }\n"]))),k=Object(h.a)(l||(l=Object(_.a)(["\n  mutation($id: ID!, $account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n  $check_image: Upload, $check_template_data: JSON) {\n    updateBankAccount(input: {id: $id, account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, \n      balance: $balance, description: $description, check_image: $check_image, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),$=Object(h.a)(d||(d=Object(_.a)(["\n  mutation($id: ID!, $check_template_data: JSON) {\n    updateBankAccountTemplate(input: {id: $id, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),w=Object(h.a)(m||(m=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteBankAccount(id: $id) {\n        id\n        account_number\n    }   \n  }\n"])))},602:function(t,e,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("f04981f0",content,!0,{sourceMap:!1})},606:function(t,e,n){"use strict";n.d(e,"a",(function(){return $})),n.d(e,"f",(function(){return w})),n.d(e,"g",(function(){return O})),n.d(e,"d",(function(){return P})),n.d(e,"h",(function(){return j})),n.d(e,"e",(function(){return x})),n.d(e,"i",(function(){return C})),n.d(e,"c",(function(){return S})),n.d(e,"b",(function(){return A}));var o,c,r,l,d,m,_,h,v,y,f=n(91),k=n(58),$=Object(k.a)(o||(o=Object(f.a)(["\n  query($page: Int!, $per_page: Int!, $voided: Boolean, $payment_pending: Boolean, $approved: Boolean, $search: String) {\n    payments(first: $per_page, page: $page, voided: $voided, pending: $payment_pending, search: $search, approved: $approved) {\n      data {\n         id\n         to\n         amount_in_words\n         transaction_date\n         bank_account_id\n         reason\n         project\n         payment_method\n         transaction_amount\n         voided\n         voided_date\n         voided_reason\n         payment_date\n         payment_pending\n         checked_by_id\n         checked_at\n         checked\n         approved_by_id\n         approved_at\n         approved\n         invoice_number\n         cheque_number\n         bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),w=Object(k.a)(c||(c=Object(f.a)(["\n  query($id: ID!) {\n    payment(id: $id) {\n      id\n      to\n      amount_in_words\n      transaction_date\n      bank_account_id\n      reason\n      project\n      payment_method\n      transaction_amount\n      voided\n      voided_date\n      voided_reason\n      checked_by_id\n      checked_at\n      checked\n      approved_by_id\n      approved_at\n      approved\n      payment_date\n      payment_pending\n      invoice_number\n      cheque_number\n      bankAccount {\n        id\n        account_number\n        check_image_url\n        check_template_data\n        bank {\n          id\n          name\n        }\n      }\n    }   \n  }\n"]))),O=Object(k.a)(r||(r=Object(f.a)(["\n  query {\n    paymentPersons {\n      to\n    }\n  }\n"]))),P=Object(k.a)(l||(l=Object(f.a)(["\n  mutation($bank_account_id: ID!, $to: String!, $amount_in_words: String!, $transaction_amount: Float!, $transaction_date: Date!, $project: String!, \n    $payment_method:String!, $to_bank_account_id: ID, $reason: String, $cheque_number: String) {\n    createPayment(input: {bank_account_id: $bank_account_id, to: $to, amount_in_words: $amount_in_words, transaction_date: $transaction_date, \n      transaction_amount: $transaction_amount, to_bank_account_id: $to_bank_account_id, reason: $reason, project: $project, \n      payment_method: $payment_method, cheque_number: $cheque_number}) {\n        id\n        to\n    }\n  }\n"]))),j=Object(k.a)(d||(d=Object(f.a)(["\n  mutation($id: ID!, $bank_account_id: ID!, $to: String!, $amount_in_words: String!, $transaction_amount: Float!, $transaction_date: Date!, \n    $project: String!, $payment_method:String!, $to_bank_account_id: ID, $reason: String, $cheque_number: String) {\n    updatePayment(input: {id: $id, bank_account_id: $bank_account_id, to: $to, amount_in_words: $amount_in_words, transaction_date: $transaction_date,\n      transaction_amount: $transaction_amount, to_bank_account_id: $to_bank_account_id, project: $project, reason: $reason, \n      payment_method: $payment_method, cheque_number: $cheque_number}) {\n        id\n        to\n    }\n  }\n"]))),x=Object(k.a)(m||(m=Object(f.a)(["\n  mutation($id: ID!) {\n    deletePayment(id: $id) {\n        id\n        to\n    }   \n  }\n"]))),C=Object(k.a)(_||(_=Object(f.a)(["\n  mutation($id: ID!, $voided_reason: String!) {\n    voidPayment(input: {id: $id, voided_reason: $voided_reason}) {\n        id\n        to\n    }   \n  }\n"]))),S=Object(k.a)(h||(h=Object(f.a)(["\n  mutation($id: ID!) {\n    checkPayment(id: $id) {\n        id\n        to\n    }   \n  }\n"]))),A=Object(k.a)(v||(v=Object(f.a)(["\n  mutation($id: ID!) {\n    approvePayment(id: $id) {\n        id\n        to\n    }   \n  }\n"])));Object(k.a)(y||(y=Object(f.a)(["\n  mutation {\n    exportPayments {\n        status\n    }   \n  }\n"])))},612:function(t,e,n){"use strict";n(602)},613:function(t,e,n){var o=n(19)(!1);o.push([t.i,".img{z-index:0!important}.check-dev{transform-origin:top left}@media print{.check-dev{transform-origin:top left;transform:rotate(-90deg) translateX(-100%);position:relative}}",""]),t.exports=o},614:function(t,e,n){"use strict";n.r(e);var o=n(174),c=n(636),r=n(189),l=n(639),d=(n(37),n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(1)),m=n(106),_=n(600);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={props:["check_image","payment","bankAccount"],data:function(){return{check_template_data:{name:{top:313,left:291},amount:{top:395,left:663},amount_in_words:{top:360,left:291},branch:{top:150,left:372},date:{top:268,left:665},dimension:{width:200,height:30}},top:0,left:0,position:"absolute"}},computed:{template:function(){var t;if(null!==(t=this.bankAccount)&&void 0!==t&&t.check_template_data){var e=JSON.parse(this.bankAccount.check_template_data);return e.dimension||(e.dimension={}),this.check_template_data=e,e}return this.check_template_data}},methods:v(v({},Object(m.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{updateBankAccountTemplate:function(){var t=this;this.$apollo.mutate({mutation:_.f,variables:{check_template_data:JSON.stringify(this.check_template_data),id:this.bankAccount.id}}).then((function(e){e.data;t.successNotification("Bank Account Template Updated Successfully!")})).catch((function(t){console.log(t)}))},calculatePosition:function(t){this.top=t.offsetY-5,this.left=t.offsetX}}),created:function(){},watch:{check_template_data:{handler:function(){this.$emit("on-template-data-change",this.check_template_data)},deep:!0}}},f=(n(612),n(79)),component=Object(f.a)(y,(function(){var t,e,n,d,m,_=this,h=_._self._c;return h("div",[h(l.a,{staticClass:"px-2 mb-5 no-print"},[h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Name")]),_._v(" "),h(l.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.name.top,expression:"check_template_data.name.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:_.check_template_data.name.top},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.name,"top",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.name.left,expression:"check_template_data.name.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:_.check_template_data.name.left},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.name,"left",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Amount")]),_._v(" "),h(l.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.amount.top,expression:"check_template_data.amount.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:_.check_template_data.amount.top},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.amount,"top",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.amount.left,expression:"check_template_data.amount.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:_.check_template_data.amount.left},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.amount,"left",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Amount In Words")]),_._v(" "),h(l.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.amount_in_words.top,expression:"check_template_data.amount_in_words.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:_.check_template_data.amount_in_words.top},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.amount_in_words,"top",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.amount_in_words.left,expression:"check_template_data.amount_in_words.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:_.check_template_data.amount_in_words.left},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.amount_in_words,"left",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Branch")]),_._v(" "),h(l.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.branch.top,expression:"check_template_data.branch.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:_.check_template_data.branch.top},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.branch,"top",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.branch.left,expression:"check_template_data.branch.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:_.check_template_data.branch.left},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.branch,"left",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Date")]),_._v(" "),h(l.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.date.top,expression:"check_template_data.date.top"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Top"},domProps:{value:_.check_template_data.date.top},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.date,"top",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.date.left,expression:"check_template_data.date.left"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Left"},domProps:{value:_.check_template_data.date.left},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.date,"left",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"3"}},[h("fieldset",{staticClass:"px-2 pb-2"},[h("legend",[_._v("Dimensions")]),_._v(" "),h(l.a,[h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.dimension.width,expression:"check_template_data.dimension.width"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Width"},domProps:{value:_.check_template_data.dimension.width},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.dimension,"width",t.target.value)}}})]),_._v(" "),h(c.a,{attrs:{cols:"12",md:"6"}},[h("input",{directives:[{name:"model",rawName:"v-model",value:_.check_template_data.dimension.height,expression:"check_template_data.dimension.height"}],staticStyle:{width:"100%"},attrs:{type:"number",placeholder:"Height"},domProps:{value:_.check_template_data.dimension.height},on:{input:function(t){t.target.composing||_.$set(_.check_template_data.dimension,"height",t.target.value)}}})])],1)],1)]),_._v(" "),h(c.a,{staticClass:"mt-5"},[h("span",[_._v(" TOP: "+_._s(_.top)+" ")]),_._v(" "),h("span",{staticClass:"px-5"},[_._v("|")]),_._v(" "),h("span",[_._v(" LEFT: "+_._s(_.left)+" ")])])],1),_._v(" "),_.payment.id?h(o.a,{staticClass:"ml-5 light no-print",staticStyle:{float:"right"},attrs:{to:"/payment"},on:{click:_.updateBankAccountTemplate}},[h(r.a,{staticClass:"mr-2"},[_._v("mdi-arrow-left")]),_._v(" Get Back\n  ")],1):_._e(),_._v(" "),_.payment.id?h(o.a,{staticClass:"ml-5 blue-grey white--text no-print",staticStyle:{float:"right"},on:{click:_.updateBankAccountTemplate}},[h(r.a,{staticClass:"mr-2"},[_._v("mdi-check")]),_._v(" Save Changes\n  ")],1):_._e(),_._v(" "),h("div",{staticClass:"check-dev",on:{click:_.calculatePosition}},[h("span",{staticClass:"names white--black",staticStyle:{color:"black !important"},style:{position:_.position,top:_.template.name.top+"px",left:_.template.name.left+"px"},attrs:{color:""}},[_._v(_._s(null===(t=_.payment)||void 0===t?void 0:t.to))]),_._v(" "),h("span",{staticClass:"names",style:{position:_.position,width:_.template.dimension.width+"px",top:_.template.amount_in_words.top+"px",left:_.template.amount_in_words.left+"px",lineHeight:_.template.dimension.height+"px","text-transform":"uppercase"}},[_._v(_._s(null===(e=_.payment)||void 0===e?void 0:e.amount_in_words))]),_._v(" "),h("span",{staticClass:"names",style:{position:_.position,top:_.template.amount.top+"px",left:_.template.amount.left+"px"}},[_._v(_._s(_._f("number_format")(null===(n=_.payment)||void 0===n?void 0:n.transaction_amount)))]),_._v(" "),h("span",{staticClass:"names",style:{position:_.position,top:_.template.branch.top+"px",left:_.template.branch.left+"px"}},[_._v(_._s(null===(d=_.payment)||void 0===d?void 0:d.branch))]),_._v(" "),h("span",{staticClass:"names",style:{position:_.position,top:_.template.date.top+"px",left:_.template.date.left+"px"}},[_._v(_._s(null===(m=_.payment)||void 0===m?void 0:m.payment_date)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},628:function(t,e,n){"use strict";n.r(e);var o=n(174),c=n(264),r=n(273),l=n(636),d=n(654),m=n(807),_=n(262),h=n(646),v=n(189),y=n(267),f=n(639),k=n(576),$=n(593),w=n(120),O=n(670),P=(n(11),n(4),n(12),n(13),n(15),n(9),n(16),n(1)),j=(n(70),n(118),n(34),n(37),n(41),n(188),n(85),n(106)),x=n(276),C=n(600),S=n(606);n(618);function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(P.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var N={components:{CheckPrintForm:n(614).default},props:["_payment","readOnlyForm"],data:function(){var t=this;return{editMode:!1,valid:!1,payment:{},pay_to:"",bankAccounts:{data:[]},paymentPersons:[],submitting:!1,to_rules:[function(e){return!!e&&"RTGS"!=t.payment.payment_method||"To field is required"}],to_bank_account_rules:[function(e){return!!e&&"RTGS"==t.payment.payment_method||"To Bank Account field is required"}],password_rules:[function(t){return!!t||"Password field is required"}],bank_account_rules:[function(t){return!!t||"Bank Account field is required"}],payment_method_rules:[function(t){return!!t||"Payment Method field is required"}],date_rules:[function(t){return!!t||"Date field is required"}],amount_rules:[function(t){return!!t||"Amount field is required"}],amount_in_words_rules:[function(t){return!!t||"Amount In Words field is required"}],project_rules:[function(t){return!!t||"Project field is required"}],reason_rules:[function(t){return!!t||"Reason field is required"}]}},apollo:{bankAccounts:{query:C.a,variables:function(){return{page:1,per_page:5e3}},fetchPolicy:"cache-and-network"},paymentPersons:{query:S.g,fetchPolicy:"cache-and-network"}},computed:{paid_to:function(){return this.payment.to},personals:function(){return this.paymentPersons.map((function(p){return p.to}))},bankAccount:function(){var t=this;return this.bankAccounts.data.find((function(e){var n;return e.id==(null===(n=t.payment)||void 0===n?void 0:n.bank_account_id)}))},disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._payment)||void 0===t?void 0:t.id)},formattedBankAccounts:function(){return this.bankAccounts.data.map((function(t){return t.label="".concat(t.bank.name," - ").concat(t.account_number),t.id=parseInt(t.id),t}))}},methods:D(D({},Object(j.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updatePayment(t):this.registerPayment(t))},registerPayment:function(t){var e=this;this.submitting=!0,this.payment.balance=this.payment.initial_balance,this.$apollo.mutate({mutation:S.d,variables:this.payment}).then((function(n){n.data;e.successNotification("Payment registered successfully!"),t.target.reset(),e.$emit("on-close-payment-form"),e.payment={},e.submitting=!1})).catch((function(t){e.submitting=!1}))},updatePayment:function(t){var e=this;this.pay_to&&(this.payment.to=this.pay_to),this.$apollo.mutate({mutation:S.h,variables:this.payment}).then((function(n){n.data;e.successNotification("Payment updated successfully!"),t.target.reset(),e.$emit("on-close-payment-form"),e.editMode=!1,e.payment={}})).catch((function(t){console.log(t.response)}))},onAmountCHange:function(){var t=(this.payment.transaction_amount+"").split(".");t[1]?this.payment.amount_in_words="".concat(Object(x.b)(t[0])," and ").concat(this.numberToWordForCents(t[1])," cents"):this.payment.amount_in_words="".concat(Object(x.b)(this.payment.transaction_amount)," Only").toUpperCase()},numberToWordForCents:function(t){for(var e=t.toString().match(/^0+/),n=e?e[0].length:0,o="",c=0;c<n;c++)o="".concat(o);return t<=9&&0==n&&(t*=10),o+Object(x.b)(parseInt(t))},onPaymentMethodSelected:function(){this.payment.to="","Check"==this.payment_method||"Account To Account"==this.payment_method?this.payment.to_bank_account_id=null:"RTGS"==this.payment_method&&(this.payment.to="Internal")},onPayToChange:function(t){t&&t.target?this.pay_to=t.target.value:this.pay_to=t}}),watch:{$props:{handler:function(){var t,e;null!==(t=this._payment)&&void 0!==t&&t.id?(this.payment=D({},this._payment),this.payment.bank_account_id=parseInt(this._payment.bankAccount.id)):(this.payment.transaction_date=Date.now(),this.payment={},this.editMode=!1),console.log("this._payment---",this._payment),null!==(e=this._payment)&&void 0!==e&&e.purchase_order&&(this.payment={transaction_amount:this._payment.amount,to:this._payment.pay_to,project:this._payment.project},this.editMode=!1,this.onAmountCHange())},deep:!0,immediate:!0}}},F=n(79),component=Object(F.a)(N,(function(){var t=this,e=t._self._c;return e(c.a,[t.readOnlyForm?t._e():e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(f.a,{staticClass:"mx-0"},[e("div",[e(r.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Payment Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e($.a),t._v(" "),t.disableForm?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(v.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(h.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(f.a,{staticClass:"px-3"},[e(l.a,{attrs:{cols:"12",md:"4"}},[e(k.a,{attrs:{items:t.formattedBankAccounts,"item-value":"id","item-text":"label",label:"Select Bank Account",outlined:"",required:"",rules:t.bank_account_rules},model:{value:t.payment.bank_account_id,callback:function(e){t.$set(t.payment,"bank_account_id",e)},expression:"payment.bank_account_id"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"5"}},[e(k.a,{attrs:{items:["Check","RTGS","Account To Account","CPO","Letter Payment"],label:"Select Payment Method",outlined:"",required:"",rules:t.payment_method_rules},on:{change:t.onPaymentMethodSelected},model:{value:t.payment.payment_method,callback:function(e){t.$set(t.payment,"payment_method",e)},expression:"payment.payment_method"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"3"}},[e(y.a,{ref:"menu",attrs:{transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[e(w.a,t._g(t._b({attrs:{label:"Date","prepend-icon":"mdi-calendar",readonly:"",outlined:"",rules:t.date_rules},model:{value:t.payment.transaction_date,callback:function(e){t.$set(t.payment,"transaction_date",e)},expression:"payment.transaction_date"}},"v-text-field",c,!1),o))]}}])},[t._v(" "),e(m.a,{attrs:{"no-title":"",outlined:"",scrollable:""},model:{value:t.payment.transaction_date,callback:function(e){t.$set(t.payment,"transaction_date",e)},expression:"payment.transaction_date"}},[e($.a),t._v(" "),e(o.a,{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                Cancel\n              ")]),t._v(" "),e(o.a,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.payment.transaction_date)}}},[t._v("\n                OK\n              ")])],1)],1)],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(w.a,{attrs:{label:"Transaction Amount",outlined:"",type:"number",step:"0.01",required:"",rules:t.amount_rules},on:{input:t.onAmountCHange},model:{value:t.payment.transaction_amount,callback:function(e){t.$set(t.payment,"transaction_amount",t._n(e))},expression:"payment.transaction_amount"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(O.a,{attrs:{label:"Amount In Words",outlined:"",rows:"2",required:"",rules:t.amount_in_words_rules},model:{value:t.payment.amount_in_words,callback:function(e){t.$set(t.payment,"amount_in_words",e)},expression:"payment.amount_in_words"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(w.a,{attrs:{label:"Cheque Number",outlined:""},model:{value:t.payment.cheque_number,callback:function(e){t.$set(t.payment,"cheque_number",e)},expression:"payment.cheque_number"}})],1),t._v(" "),"RTGS"!=t.payment.payment_method?e(l.a,{attrs:{cols:"12",md:"8"}},[e(d.a,{attrs:{items:t.personals,label:"Pay To",outlined:"",rules:t.to_rules},on:{keyup:t.onPayToChange,change:t.onPayToChange},model:{value:t.payment.to,callback:function(e){t.$set(t.payment,"to",e)},expression:"payment.to"}})],1):e(l.a,{attrs:{cols:"12",md:"8"}},[e(k.a,{attrs:{items:t.formattedBankAccounts.filter((function(e){return e.id!=t.payment.bank_account_id})),"item-value":"id","item-text":"label",label:"Pay To",outlined:"",required:"",rules:t.to_bank_account_rules},model:{value:t.payment.to_bank_account_id,callback:function(e){t.$set(t.payment,"to_bank_account_id",e)},expression:"payment.to_bank_account_id"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(w.a,{attrs:{label:"Project",outlined:"",required:"",rules:t.project_rules},model:{value:t.payment.project,callback:function(e){t.$set(t.payment,"project",e)},expression:"payment.project"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e(O.a,{attrs:{rows:"2",label:"Reason",outlined:"",required:"",rules:t.reason_rules},model:{value:t.payment.reason,callback:function(e){t.$set(t.payment,"reason",e)},expression:"payment.reason"}})],1)],1)],1),t._v(" "),e(_.a,{staticClass:"my-2"}),t._v(" "),t.readOnlyForm?t._e():e(l.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-payment-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e($.a),t._v(" "),t.disableForm?t._e():e("div",[t.editMode?e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:t.submitting||!t.valid}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:t.submitting||!t.valid}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},661:function(t,e,n){"use strict";n.r(e);var o=n(640),c=n(174),r=n(263),l=n(808),d=n(189),m=n(259),_=n(172),h=n(84),v=n(267),y=(n(41),n(274),n(37),{props:["payments","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Bank Account",class:"blue-grey lighten-3",value:"account_number"},{text:"Transaction Amount",class:"blue-grey lighten-3",value:"transaction_amount"},{text:"Check Type",class:"blue-grey lighten-3",value:"amount_in_words"},{text:"Payment Method",class:"blue-grey lighten-3",value:"payment_method"},{text:"Project",class:"blue-grey lighten-3",value:"project"},{text:"Void Reason",class:"blue-grey lighten-4",value:"voided_reason"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}}}),f=n(79),component=Object(f.a)(y,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.payments,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.account_number",fn:function(n){var o=n.item;return[e(r.a,[t._v(t._s(o.bankAccount.bank.name)+" -\n      "+t._s(o.bankAccount.account_number)+"\n    ")])]}},{key:"item.transaction_amount",fn:function(n){var c=n.item;return[e(r.a,[t._v(t._s(t._f("currency")(c.transaction_amount))+"\n      "),c.voided?e(o.a,{attrs:{content:"void",color:"red",inline:""}}):e("div",[c.payment_pending?e(o.a,{attrs:{color:"grey",content:c.payment_date,inline:""}}):e(o.a,{attrs:{content:c.payment_date,inline:""}})],1)],1)]}},{key:"item.is_locked",fn:function(n){var o=n.item;return[e(r.a,[t._v(t._s(o.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var o=n.item;return[e(v.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e(c.a,t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[e(d.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(m.a,{staticClass:"col-12 px-0"},[e(_.a,{on:{click:function(e){return t.$emit("on-payment-detail-clicked",o)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(h.b,[t._v("Detail")])],1),t._v(" "),e(_.a,{attrs:{to:"/payment/".concat(o.id,"/print"),target:"_blank"}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-printer")]),t._v(" "),e(h.b,[t._v("Print Check")])],1),t._v(" "),o.voided?t._e():e(_.a,{on:{click:function(e){return t.$emit("on-payment-void-clicked",o)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-close")]),t._v(" "),e(h.b,{staticClass:"pr-9"},[t._v("Void Check")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},826:function(t,e,n){"use strict";n.r(e);var o=n(622),c=n(174),r=n(264),l=n(273),d=n(636),m=n(627),_=n(262),h=n(189),v=n(593),y=n(120),f=n(670),k=(n(37),n(41),n(274),n(1)),$=(n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(661)),w=n(628),O=n(606),P=n(106);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={middleware:["authenticated"],components:{VoidedPaymentTable:$.default,PaymentForm:w.default},data:function(){var t;return t={breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Voided Payments",disabled:!0}],voided_reason:"",search:"",editMode:!1,voidDialog:!1,editPaymentDialogVisible:!1,PaymentFormVisible:!1,dispatchFormVisible:!1,payments:{},payment:{}},Object(k.a)(t,"search",{name:"",concrete_type_id:null}),Object(k.a)(t,"pagination",{page:1,per_page:1e5}),t},apollo:{payments:{query:O.a,variables:function(){var t={voided:!0};return this.search.name&&(t=x(x({},t),{name:"%".concat(this.search.name,"%")})),x(x({},t),this.pagination)},fetchPolicy:"cache-and-network"}},methods:x(x({},Object(P.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onAddPaymentClicked:function(){this.payment=null,this.PaymentFormVisible=!0},onPaymentDetailClicked:function(t){this.PaymentFormVisible=!0,this.payment=t},onPaymentVoidClicked:function(t){this.payment=t,this.voidDialog=!0},voidPayment:function(){var t=this;this.voided_reason?(this.$apollo.mutate({mutation:O.i,variables:{id:this.payment.id,voided_reason:this.voided_reason}}).then((function(e){e.data;t.successNotification("Payment voided successfully!"),t.$apollo.queries.payments.refetch()})).catch((function(t){console.log(t)})),this.payment=null,this.voidDialog=!1):this.errorNotification("Reason field is required!")},PaymentForm:function(){this.payment=null,this.PaymentFormVisible=!1,this.$apollo.queries.payments.refetch()}}),created:function(){console.log(this.payments)}},S=n(79),component=Object(S.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(o.a,{attrs:{payments:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(h.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(v.a),t._v(" "),e("div",{staticClass:"pr-2"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:t.onAddPaymentClicked}},[e(h.a,{attrs:{left:"",dark:""}},[t._v(" mdi-plus-circle ")]),t._v("\n        Add Payment\n      ")],1)])],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"},[e(d.a,{attrs:{cols:"12",lg:"4"}},[e(y.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:t.search.name,callback:function(e){t.$set(t.search,"name",e)},expression:"search.name"}})],1)],1),t._v(" "),e("voided-payment-table",{attrs:{payments:t.payments.data},on:{"on-payment-detail-clicked":t.onPaymentDetailClicked,"on-payment-void-clicked":t.onPaymentVoidClicked}})],1),t._v(" "),e("div",[e(m.a,{attrs:{width:"1280"},on:{"click:outside":t.PaymentForm},model:{value:t.PaymentFormVisible,callback:function(e){t.PaymentFormVisible=e},expression:"PaymentFormVisible"}},[e("payment-form",{attrs:{_payment:t.payment,editMode:t.editMode},on:{"on-close-payment-form":t.PaymentForm}})],1),t._v(" "),e(m.a,{attrs:{width:"500"},model:{value:t.voidDialog,callback:function(e){t.voidDialog=e},expression:"voidDialog"}},[e(r.a,{staticClass:"yellow lighten-4"},[e(l.c,{staticClass:"text-h5 yellow lighten-2"},[t._v("\n          Void this check\n        ")]),t._v(" "),e(l.b,{staticClass:"pt-3"},[t._v("\n          Are you sure you want to make this check void!\n          "),e("br"),t._v(" "),e("i",[t._v("please enter your reason below!")])]),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(f.a,{attrs:{rows:"2",label:"Reason",outlined:"",required:""},model:{value:t.voided_reason,callback:function(e){t.voided_reason=e},expression:"voided_reason"}})],1),t._v(" "),e(_.a),t._v(" "),e(l.a,[e(v.a),t._v(" "),e(c.a,{attrs:{color:"primary",text:""},on:{click:t.voidPayment}},[t._v(" I accept ")])],1)],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("All Voided Payments")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All Voided Payments Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);