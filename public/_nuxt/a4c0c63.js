(window.webpackJsonp=window.webpackJsonp||[]).push([[36,20],{686:function(t,e,n){"use strict";n.r(e);var c=n(174),o=n(263),l=n(796),r=n(262),d=n(189),k=n(259),v=n(172),h=n(84),f=n(267),m=(n(41),n(274),{props:["bankAccounts","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Bank",class:"blue-grey lighten-3",value:"bank.name"},{text:"Branch",class:"blue-grey lighten-3",value:"branch"},{text:"Account Number",class:"blue-grey lighten-3",value:"account_number"},{text:"Initial Balance",class:"blue-grey lighten-3",value:"initial_balance"},{text:"Balance",class:"blue-grey lighten-3",value:"balance"},{text:"Description",class:"blue-grey lighten-3",value:"description"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}}}),_=n(79),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.bankAccounts,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.balance",fn:function(n){var c=n.item;return[e(o.a,[t._v(t._s(t._f("currency")(c.balance)))])]}},{key:"item.initial_balance",fn:function(n){var c=n.item;return[e(o.a,[t._v(t._s(t._f("currency")(c.initial_balance)))])]}},{key:"item.is_locked",fn:function(n){var c=n.item;return[e(o.a,[t._v(t._s(c.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var o=n.item;return[e(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(c.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),o),[e(d.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(k.a,{staticClass:"col-12 px-0"},[e(v.a,{attrs:{to:"bank_accounts/".concat(o.id)}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(h.b,[t._v("Detail")])],1),t._v(" "),e(v.a,{on:{click:function(e){return t.$emit("on-bank-account-detail-clicked",o)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-pen")]),t._v(" "),e(h.b,[t._v("Edit")])],1),t._v(" "),e(r.a),t._v(" "),o.checked?t._e():e(v.a,{on:{click:function(e){return t.$emit("on-bank-account-delete-clicked",o)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(h.b,{staticClass:"pr-9"},[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},800:function(t,e,n){"use strict";n.r(e);var c=n(619),o=n(174),l=n(264),r=n(273),d=n(631),k=n(624),v=n(262),h=n(189),f=n(592),m=n(121),_=(n(36),n(41),n(274),n(1)),A=(n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(686)),y=n(792),x=n(599),B=n(106);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={middleware:["authenticated"],components:{BankAccountTable:A.default,BankAccountForm:y.default},data:function(){var t;return t={breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All BankAccounts",disabled:!0}],search:"",editMode:!1,deleteDialog:!1,editBankAccountDialogVisible:!1,BankAccountFormVisible:!1,dispatchFormVisible:!1,bankAccounts:{},bankAccount:{}},Object(_.a)(t,"search",{name:"",concrete_type_id:null}),Object(_.a)(t,"pagination",{page:1,per_page:250}),t},apollo:{bankAccounts:{query:x.a,variables:function(){var t={};return this.search.name&&(t=C(C({},t),{name:"%".concat(this.search.name,"%")})),C(C({},t),this.pagination)},fetchPolicy:"cache-and-network"}},methods:C(C({},Object(B.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onAddBankAccountClicked:function(){this.bankAccount=null,this.BankAccountFormVisible=!0},onBankAccountDetailClicked:function(t){this.BankAccountFormVisible=!0,this.bankAccount=t},onBankAccountDeleteClicked:function(t){this.bankAccount=t,this.deleteDialog=!0},deleteBankAccount:function(){var t=this;this.$apollo.mutate({mutation:x.c,variables:{id:this.bankAccount.id}}).then((function(e){var data=e.data;console.log(data),data.deleteBankAccount.id?(t.successNotification("BankAccount removed successfully!"),t.$apollo.queries.bankAccounts.refetch()):t.errorNotification("Failed! Related Resource exists")})).catch((function(t){console.log(t)})),this.bankAccount=null,this.deleteDialog=!1},closeBankAccountForm:function(){this.bankAccount=null,this.BankAccountFormVisible=!1,this.$apollo.queries.bankAccounts.refetch()}}),created:function(){console.log(this.bankAccounts)}},D=n(79),component=Object(D.a)(O,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(c.a,{attrs:{bankAccounts:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(h.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(f.a),t._v(" "),e("div",{staticClass:"pr-2"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:t.onAddBankAccountClicked}},[e(h.a,{attrs:{left:"",dark:""}},[t._v(" mdi-plus-circle ")]),t._v("\n        Add Bank Account\n      ")],1)])],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"},[e(d.a,{attrs:{cols:"12",lg:"4"}},[e(m.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:t.search.name,callback:function(e){t.$set(t.search,"name",e)},expression:"search.name"}})],1)],1),t._v(" "),e("bank-account-table",{attrs:{bankAccounts:t.bankAccounts.data},on:{"on-bank-account-detail-clicked":t.onBankAccountDetailClicked,"on-bank-account-delete-clicked":t.onBankAccountDeleteClicked}})],1),t._v(" "),e("div",[e(k.a,{staticStyle:{"overflow-x":"hidden"},attrs:{width:"100%"},on:{"click:outside":t.closeBankAccountForm},model:{value:t.BankAccountFormVisible,callback:function(e){t.BankAccountFormVisible=e},expression:"BankAccountFormVisible"}},[e("bank-account-form",{attrs:{_bankAccount:t.bankAccount,editMode:t.editMode},on:{"on-close-bank-account-form":t.closeBankAccountForm}})],1),t._v(" "),e(k.a,{attrs:{width:"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[e(l.a,{staticClass:"red lighten-4"},[e(r.c,{staticClass:"text-h5 red lighten-2"},[t._v(" confirm ")]),t._v(" "),e(r.b,{staticClass:"pt-3"},[t._v("\n          Are you sure you want to delete this resource!\n        ")]),t._v(" "),e(v.a),t._v(" "),e(r.a,[e(f.a),t._v(" "),e(o.a,{attrs:{color:"primary",text:""},on:{click:t.deleteBankAccount}},[t._v(" I accept ")])],1)],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("All Bank Accounts")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All Bank Accounts Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);