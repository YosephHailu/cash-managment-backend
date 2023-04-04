(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{603:function(t,e,r){var content=r(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("b1bed018",content,!0,{sourceMap:!1})},604:function(t,e,r){var n=r(19)(!1);n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=n},610:function(t,e,r){"use strict";r.d(e,"a",(function(){return O})),r.d(e,"f",(function(){return j})),r.d(e,"g",(function(){return $})),r.d(e,"d",(function(){return x})),r.d(e,"h",(function(){return k})),r.d(e,"e",(function(){return P})),r.d(e,"i",(function(){return D})),r.d(e,"c",(function(){return S})),r.d(e,"b",(function(){return C}));var n,o,d,l,c,_,h,v,m,f,y=r(91),w=r(58),O=Object(w.a)(n||(n=Object(y.a)(["\n  query($page: Int!, $per_page: Int!, $voided: Boolean, $payment_pending: Boolean, $approved: Boolean, $search: String) {\n    payments(first: $per_page, page: $page, voided: $voided, pending: $payment_pending, search: $search, approved: $approved) {\n      data {\n         id\n         to\n         amount_in_words\n         transaction_date\n         bank_account_id\n         reason\n         project\n         payment_method\n         transaction_amount\n         voided\n         voided_date\n         voided_reason\n         payment_date\n         payment_pending\n         checked_by_id\n         checked_at\n         checked\n         approved_by_id\n         approved_at\n         approved\n         invoice_number\n         cheque_number\n         bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n         }\n      }\n    }   \n  }\n"]))),j=Object(w.a)(o||(o=Object(y.a)(["\n  query($id: ID!) {\n    payment(id: $id) {\n      id\n      to\n      amount_in_words\n      transaction_date\n      bank_account_id\n      reason\n      project\n      payment_method\n      transaction_amount\n      voided\n      voided_date\n      voided_reason\n      checked_by_id\n      checked_at\n      checked\n      approved_by_id\n      approved_at\n      approved\n      payment_date\n      payment_pending\n      invoice_number\n      cheque_number\n      bankAccount {\n        id\n        account_number\n        check_image_url\n        check_template_data\n        bank {\n          id\n          name\n        }\n      }\n    }   \n  }\n"]))),$=Object(w.a)(d||(d=Object(y.a)(["\n  query {\n    paymentPersons {\n      to\n    }\n  }\n"]))),x=Object(w.a)(l||(l=Object(y.a)(["\n  mutation($bank_account_id: ID!, $to: String!, $amount_in_words: String!, $transaction_amount: Float!, $transaction_date: Date!, $project: String!, \n    $payment_method:String!, $to_bank_account_id: ID, $reason: String, $cheque_number: String) {\n    createPayment(input: {bank_account_id: $bank_account_id, to: $to, amount_in_words: $amount_in_words, transaction_date: $transaction_date, \n      transaction_amount: $transaction_amount, to_bank_account_id: $to_bank_account_id, reason: $reason, project: $project, \n      payment_method: $payment_method, cheque_number: $cheque_number}) {\n        id\n        to\n    }\n  }\n"]))),k=Object(w.a)(c||(c=Object(y.a)(["\n  mutation($id: ID!, $bank_account_id: ID!, $to: String!, $amount_in_words: String!, $transaction_amount: Float!, $transaction_date: Date!, \n    $project: String!, $payment_method:String!, $to_bank_account_id: ID, $reason: String, $cheque_number: String) {\n    updatePayment(input: {id: $id, bank_account_id: $bank_account_id, to: $to, amount_in_words: $amount_in_words, transaction_date: $transaction_date,\n      transaction_amount: $transaction_amount, to_bank_account_id: $to_bank_account_id, project: $project, reason: $reason, \n      payment_method: $payment_method, cheque_number: $cheque_number}) {\n        id\n        to\n    }\n  }\n"]))),P=Object(w.a)(_||(_=Object(y.a)(["\n  mutation($id: ID!) {\n    deletePayment(id: $id) {\n        id\n        to\n    }   \n  }\n"]))),D=Object(w.a)(h||(h=Object(y.a)(["\n  mutation($id: ID!, $voided_reason: String!) {\n    voidPayment(input: {id: $id, voided_reason: $voided_reason}) {\n        id\n        to\n    }   \n  }\n"]))),S=Object(w.a)(v||(v=Object(y.a)(["\n  mutation($id: ID!) {\n    checkPayment(id: $id) {\n        id\n        to\n    }   \n  }\n"]))),C=Object(w.a)(m||(m=Object(y.a)(["\n  mutation($id: ID!) {\n    approvePayment(id: $id) {\n        id\n        to\n    }   \n  }\n"])));Object(w.a)(f||(f=Object(y.a)(["\n  mutation {\n    exportPayments {\n        status\n    }   \n  }\n"])))},620:function(t,e,r){"use strict";r(12),r(13),r(11),r(4),r(15),r(9),r(16);var n=r(1),o=(r(119),r(603),r(64)),d=r(5);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=Object(d.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,c(c({},data),{},{attrs:c(c({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),h=r(0),v=Object(h.j)("v-breadcrumbs__divider","li"),m=r(17);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(m.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(_,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},642:function(t,e,r){var content=r(643);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("7c06aa28",content,!0,{sourceMap:!1})},643:function(t,e,r){var n=r(19)(!1);n.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=n},659:function(t,e,r){"use strict";r(12),r(13),r(11),r(4),r(15),r(9),r(16);var n=r(1),o=(r(26),r(642),r(0)),d=r(17),l=r(5);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(l.a)(d.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(o.h)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},813:function(t,e,r){"use strict";r.r(e);var n=r(620),o=r(189),d=r(659),l=r(592),c=(r(12),r(13),r(11),r(4),r(15),r(9),r(16),r(1)),_=r(610),h=r(106);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Voided Payments",disabled:!0}],payments:{},payment:{},search:{name:"",concrete_type_id:null},pagination:{page:1,per_page:25}}},apollo:{payments:{query:_.a,variables:function(){return m(m({},{}),this.pagination)},fetchPolicy:"cache-and-network"}},methods:m(m({},Object(h.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{exportPayment:function(){window.location="http://localhost/payment-export"}}),created:function(){console.log(this.payments)}},y=r(79),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(n.a,{attrs:{payments:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(o.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(l.a),t._v(" "),e("div",{staticClass:"pr-2"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:t.exportPayment}},[e(o.a,{attrs:{left:"",dark:""}},[t._v(" mdi-plus-circle ")]),t._v("\n        Export\n      ")],1)])],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"}),t._v(" "),e(d.a,{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("\n              Bank Account\n            ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n              Transaction Amount\n            ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n              Payment Method\n            ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n              Paid To\n            ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n              Project\n            ")]),t._v(" "),e("th",{staticClass:"text-left"},[t._v("\n              transaction_date\n            ")])])]),t._v(" "),e("tbody",t._l(t.payments.data,(function(r){return e("tr",{key:r.id},[e("td",[t._v(t._s(r.bankAccount.account_number))]),t._v(" "),e("td",[t._v(t._s(r.transaction_amount))]),t._v(" "),e("td",[t._v(t._s(r.payment_method))]),t._v(" "),e("td",[t._v(t._s(r.to))]),t._v(" "),e("td",[t._v(t._s(r.project))]),t._v(" "),e("td",[t._v(t._s(r.transaction_date))])])})),0)]},proxy:!0}])})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("All Payments")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All Payments Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);