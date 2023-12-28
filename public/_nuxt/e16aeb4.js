(window.webpackJsonp=window.webpackJsonp||[]).push([[42,13,22],{600:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return _})),n.d(e,"b",(function(){return y})),n.d(e,"e",(function(){return k})),n.d(e,"f",(function(){return O})),n.d(e,"c",(function(){return x}));var r,o,c,l,d,h,m=n(91),v=n(58),f=Object(v.a)(r||(r=Object(m.a)(["\n  query($page: Int!, $per_page: Int!) {\n    bankAccounts(first: $per_page, page: $page) {\n      data {\n         id\n         account_number\n         initial_balance\n         balance\n         description\n         bank_id\n         branch\n         check_image_url\n         check_template_data\n         bank {\n          id\n          name\n         }\n      }\n    }   \n  }\n"]))),_=Object(v.a)(o||(o=Object(m.a)(["\n  query($id: ID!) {\n    bankAccount(id: $id) {\n      id\n      account_number\n      initial_balance\n      balance\n      description\n      bank_id\n      branch\n      check_image_url\n      check_template_data\n      total_payment\n      total_deposit\n      payments {\n        id\n        to\n        amount_in_words\n        transaction_date\n        bank_account_id\n        reason\n        project\n        payment_method\n        transaction_amount\n        voided\n        voided_date\n        voided_reason\n        payment_date\n        payment_pending\n        bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n        }\n      }\n      deposits {\n        id\n        transaction_amount\n        transaction_date\n        bank_account_id\n        reference_no\n        check_type\n        currency\n        project\n        reason\n        bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n        }\n      }\n      bank {\n        id\n        name\n      }\n    }\n  }\n"]))),y=Object(v.a)(c||(c=Object(m.a)(["\n  mutation($account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n    $check_image: Upload) {\n    createBankAccount(input: {account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, balance: $balance,\n       description: $description, check_image: $check_image}) {\n      id\n      account_number\n    }\n  }\n"]))),k=Object(v.a)(l||(l=Object(m.a)(["\n  mutation($id: ID!, $account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n  $check_image: Upload, $check_template_data: JSON) {\n    updateBankAccount(input: {id: $id, account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, \n      balance: $balance, description: $description, check_image: $check_image, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),O=Object(v.a)(d||(d=Object(m.a)(["\n  mutation($id: ID!, $check_template_data: JSON) {\n    updateBankAccountTemplate(input: {id: $id, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),x=Object(v.a)(h||(h=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteBankAccount(id: $id) {\n        id\n        account_number\n    }   \n  }\n"])))},603:function(t,e,n){var content=n(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b1bed018",content,!0,{sourceMap:!1})},604:function(t,e,n){var r=n(19)(!1);r.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),t.exports=r},606:function(t,e,n){var content=n(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2065bca8",content,!0,{sourceMap:!1})},607:function(t,e,n){var r=n(19)(!1);r.push([t.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),t.exports=r},621:function(t,e,n){"use strict";n(12),n(13),n(11),n(4),n(15),n(9),n(16);var r=n(1),o=(n(119),n(603),n(64)),c=n(5);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),n=e.tag,data=e.data;return t("li",[t(n,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),m=n(0),v=Object(m.j)("v-breadcrumbs__divider","li"),f=n(17);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(c.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),e?t.push(this.$scopedSlots.item({item:r})):t.push(this.$createElement(h,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},624:function(t,e,n){"use strict";var r=n(86),o=n(1),c=(n(26),n(92),n(59),n(46),n(69),n(4),n(118),n(12),n(13),n(11),n(15),n(9),n(16),n(606),n(594)),l=n(153),d=n(126),h=n(279),m=n(280),v=n(277),f=n(278),_=n(127),y=n(5),k=n(8),O=n(0);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=Object(y.a)(d.a,h.a,m.a,v.a,f.a,l.a);e.a=j.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(t,"v-dialog--active",this.isActive),Object(o.a)(t,"v-dialog--persistent",this.persistent),Object(o.a)(t,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(t,"v-dialog--scrollable",this.scrollable),Object(o.a)(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(k.e)("full-width",this)},beforeMount:function(){var t=this;this.$nextTick((function(){t.isBooted=t.isActive,t.isActive&&t.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,window.clearTimeout(t.animateTimeout),t.animateTimeout=window.setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){var e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):m.a.options.methods.hideScroll.call(this)},show:function(){var t=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){t.$nextTick((function(){var e,n;(null===(e=t.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(t.previousActiveElement=document.activeElement,null===(n=t.$refs.dialog)||void 0===n||n.focus()),t.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(t){if(t.keyCode===O.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick((function(){return e&&e.focus()}))}this.$emit("keydown",t)},onFocusin:function(t){if(t&&this.retainFocus){var e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(t){return t.contains(e)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(t){return!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]')}));o&&o.focus()}}},genContent:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement(c.a,{props:{root:!0,light:t.light,dark:t.dark}},[t.$createElement("div",{class:t.contentClasses,attrs:$({role:"dialog","aria-modal":t.hideOverlay?void 0:"true"},t.getScopeIdAttrs()),on:{keydown:t.onKeydown},style:{zIndex:t.activeZIndex},ref:"content"},[t.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=$($({},data.style),{},{maxWidth:Object(O.h)(this.maxWidth),width:Object(O.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},657:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return _}));var r,o,c,l,d=n(91),h=n(58),m=Object(h.a)(r||(r=Object(d.a)(["\n  query($page: Int!, $per_page: Int!, $search: String) {\n    deposits(first: $per_page, page: $page, search: $search) {\n      data {\n         id\n         transaction_amount\n         transaction_date\n         bank_account_id\n         reference_no\n         check_type\n         currency\n         project\n         reason\n         bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n         }\n      }\n    }   \n  }\n"]))),v=Object(h.a)(o||(o=Object(d.a)(["\n  mutation($bank_account_id: ID!, $transaction_amount: Float!, $transaction_date: Date!, $reference_no: String!, $check_type: String!, $project: String!, \n    $currency: String!, $reason: String) {\n    createDeposit(input: {bank_account_id: $bank_account_id, transaction_amount: $transaction_amount, transaction_date: $transaction_date, \n      reference_no: $reference_no, check_type: $check_type, project: $project, reason: $reason, currency: $currency}) {\n        id\n        transaction_amount\n    }\n  }\n"]))),f=Object(h.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $bank_account_id: ID!, $transaction_amount: Float!, $transaction_date: Date!, $reference_no: String!, $check_type: String!, $project: String!, $reason: String) {\n    createDeposit(input: {id: $id, bank_account_id: $bank_account_id, transaction_amount: $transaction_amount, transaction_date: $transaction_date, \n      reference_no: $reference_no, check_type: $check_type, project: $project, reason: $reason, currency: $currency}) {\n        id\n        transaction_amount\n    }\n  }\n"]))),_=Object(h.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deleteDeposit(id: $id) {\n        id\n        transaction_amount\n    }   \n  }\n"])))},660:function(t,e,n){"use strict";n.r(e);var r=n(174),o=n(263),c=n(808),l=n(262),d=n(189),h=n(259),m=n(172),v=n(84),f=n(267),_=(n(41),n(274),n(37),{props:["deposits","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Bank Account",class:"blue-grey lighten-3",value:"account_number"},{text:"Transaction Amount",class:"blue-grey lighten-3",value:"transaction_amount"},{text:"Transaction Date",class:"blue-grey lighten-3",value:"transaction_date"},{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Check Type",class:"blue-grey lighten-3",value:"check_type"},{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Currency",class:"blue-grey lighten-3",value:"currency"},{text:"Project",class:"blue-grey lighten-3",value:"project"},{text:"Reason",class:"blue-grey lighten-3",value:"reason"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}}}),y=n(79),component=Object(y.a)(_,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.deposits,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.account_number",fn:function(n){var r=n.item;return[e(o.a,[t._v(t._s(r.bankAccount.bank.name)+" - "+t._s(r.bankAccount.account_number)+" ")])]}},{key:"item.transaction_amount",fn:function(n){var r=n.item;return[e(o.a,[t._v(t._s(t._f("currency")(r.transaction_amount)))])]}},{key:"item.is_locked",fn:function(n){var r=n.item;return[e(o.a,[t._v(t._s(r.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var o=n.item;return[e(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[e(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),o),[e(d.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(h.a,{staticClass:"col-12 px-0"},[e(m.a,{on:{click:function(e){return t.$emit("on-deposit-detail-clicked",o)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(v.b,[t._v("Detail")])],1),t._v(" "),e(l.a),t._v(" "),o.checked?t._e():e(m.a,{on:{click:function(e){return t.$emit("on-deposit-delete-clicked",o)}}},[e(d.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(v.b,{staticClass:"pr-9"},[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},694:function(t,e,n){"use strict";n.r(e);var r=n(174),o=n(264),c=n(273),l=n(636),d=n(807),h=n(262),m=n(646),v=n(189),f=n(267),_=n(639),y=n(576),k=n(593),O=n(120),x=n(670),$=n(1),j=(n(70),n(34),n(37),n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(106)),w=n(600),D=n(657);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function A(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object($.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={props:["_deposit"],data:function(){return Object($.a)({editMode:!1,valid:!1,deposit:{currency:"ETB"},bankAccounts:{data:[]},submitting:!1,password_rules:[function(t){return!!t||"Password field is required"}],bank_account_rules:[function(t){return!!t||"Bank Account field is required"}],amount_rules:[function(t){return!!t||"Amount field is required"}],currency_rules:[function(t){return!!t||"Currency field is required"}],date_rules:[function(t){return!!t||"Date field is required"}],reference_no_rules:[function(t){return!!t||"Reference Number field is required"}],check_type_rules:[function(t){return!!t||"Check Type field is required"}]},"check_type_rules",[function(t){return!!t||"Reference Number field is required"}])},apollo:{bankAccounts:{query:w.a,variables:function(){return{page:1,per_page:500}},fetchPolicy:"cache-and-network"}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._deposit)||void 0===t?void 0:t.id)},formattedBankAccounts:function(){return this.bankAccounts.data.map((function(t){return t.label="".concat(t.bank.name," - ").concat(t.account_number),t.id=parseInt(t.id),t}))}},methods:A(A({},Object(j.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.editMode?this.updateDeposit(t):this.registerDeposit(t)},registerDeposit:function(t){var e=this;console.log("deposit",this.deposit),this.submitting=!0,this.deposit.balance=this.deposit.initial_balance,this.$apollo.mutate({mutation:D.b,variables:this.deposit}).then((function(n){n.data;e.successNotification("Deposit registered successfully!"),t.target.reset(),e.submitting=!1,e.$emit("on-close-deposit-form")})).catch((function(t){e.submitting=!1,console.log(t)}))},updateDeposit:function(t){var e=this;this.$apollo.mutate({mutation:D.d,variables:this.deposit}).then((function(n){n.data;e.successNotification("Deposit updated successfully!"),t.target.reset(),e.$emit("on-close-deposit-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._deposit)&&void 0!==t&&t.id&&(this.deposit=A({},this._deposit),this.deposit.bank_account_id=parseInt(this._deposit.bank_account.id))},deep:!0,immediate:!0}}},P=n(79),component=Object(P.a)(S,(function(){var t=this,e=t._self._c;return e(o.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(_.a,{staticClass:"mx-0"},[e("div",[e(c.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Deposit Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(k.a),t._v(" "),t.disableForm?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(v.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(m.a,{staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(_.a,{staticClass:"px-3"},[e(l.a,{attrs:{cols:"12",md:"4"}},[e(y.a,{attrs:{items:t.formattedBankAccounts,"item-value":"id","item-text":"label",label:"Select Bank Account",outlined:"",required:"",rules:t.bank_account_rules},model:{value:t.deposit.bank_account_id,callback:function(e){t.$set(t.deposit,"bank_account_id",e)},expression:"deposit.bank_account_id"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"5"}},[e(O.a,{attrs:{label:"Transaction Amount",outlined:"",type:"number",step:"any",required:"",rules:t.amount_rules},model:{value:t.deposit.transaction_amount,callback:function(e){t.$set(t.deposit,"transaction_amount",t._n(e))},expression:"deposit.transaction_amount"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"3"}},[e(O.a,{attrs:{label:"Currency",outlined:"",required:"",rules:t.currency_rules},model:{value:t.deposit.currency,callback:function(e){t.$set(t.deposit,"currency",e)},expression:"deposit.currency"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(f.a,{ref:"menu",attrs:{transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(O.a,t._g(t._b({attrs:{label:"Date","prepend-icon":"mdi-calendar",readonly:"",outlined:"",rules:t.date_rules},model:{value:t.deposit.transaction_date,callback:function(e){t.$set(t.deposit,"transaction_date",e)},expression:"deposit.transaction_date"}},"v-text-field",o,!1),r))]}}])},[t._v(" "),e(d.a,{attrs:{"no-title":"",outlined:"",scrollable:""},model:{value:t.deposit.transaction_date,callback:function(e){t.$set(t.deposit,"transaction_date",e)},expression:"deposit.transaction_date"}},[e(k.a),t._v(" "),e(r.a,{attrs:{text:"",color:"primary"},on:{click:function(e){t.menu=!1}}},[t._v("\n                Cancel\n              ")]),t._v(" "),e(r.a,{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.menu.save(t.deposit.transaction_date)}}},[t._v("\n                OK\n              ")])],1)],1)],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(O.a,{attrs:{label:"Reference Number",outlined:"",required:"",rules:t.reference_no_rules},model:{value:t.deposit.reference_no,callback:function(e){t.$set(t.deposit,"reference_no",e)},expression:"deposit.reference_no"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(y.a,{attrs:{items:["bearer","check"],label:"Select Check Type",outlined:"",required:"",rules:t.check_type_rules},model:{value:t.deposit.check_type,callback:function(e){t.$set(t.deposit,"check_type",e)},expression:"deposit.check_type"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(O.a,{attrs:{label:"Project",outlined:"",required:"",rules:t.check_type_rules},model:{value:t.deposit.project,callback:function(e){t.$set(t.deposit,"project",e)},expression:"deposit.project"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12"}},[e(x.a,{attrs:{rows:"2",label:"Description",outlined:"",required:""},model:{value:t.deposit.reason,callback:function(e){t.$set(t.deposit,"reason",e)},expression:"deposit.reason"}})],1)],1)],1),t._v(" "),e(h.a,{staticClass:"my-2"}),t._v(" "),e(l.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-deposit-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(k.a),t._v(" "),t.disableForm?t._e():e("div",[t.editMode?e(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:t.submitting||!t.valid}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:t.submitting||!t.valid}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},814:function(t,e,n){"use strict";n.r(e);var r=n(621),o=n(174),c=n(264),l=n(273),d=n(636),h=n(624),m=n(262),v=n(189),f=n(593),_=n(120),y=(n(41),n(274),n(1)),k=(n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(660)),O=n(694),x=n(657),$=n(106);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D={middleware:["authenticated"],components:{DepositTable:k.default,DepositForm:O.default},data:function(){var t;return t={breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Deposits",disabled:!0}],search:"",editMode:!1,deleteDialog:!1,editDepositDialogVisible:!1,DepositFormVisible:!1,dispatchFormVisible:!1,deposits:{},deposit:{}},Object(y.a)(t,"search",{search:"",concrete_type_id:null}),Object(y.a)(t,"pagination",{page:1,per_page:25}),t},apollo:{deposits:{query:x.a,variables:function(){var t={};return this.search.search&&(t=w(w({},t),{search:"".concat(this.search.search)})),w(w({},t),this.pagination)},fetchPolicy:"cache-and-network"}},methods:w(w({},Object($.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onAddDepositClicked:function(){this.deposit=null,this.DepositFormVisible=!0},onDepositDetailClicked:function(t){this.DepositFormVisible=!0,this.deposit=t},onDepositDeleteClicked:function(t){this.deposit=t,this.deleteDialog=!0},deleteDeposit:function(){var t=this;this.$apollo.mutate({mutation:x.c,variables:{id:this.deposit.id}}).then((function(e){e.data;t.successNotification("Deposit removed successfully!"),t.$apollo.queries.deposits.refetch()})).catch((function(t){console.log(t)})),this.deposit=null,this.deleteDialog=!1},closeDepositForm:function(){this.deposit=null,this.DepositFormVisible=!1,this.$apollo.queries.deposits.refetch()}}),created:function(){console.log(this.deposits)}},C=D,A=n(79),component=Object(A.a)(C,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(r.a,{attrs:{deposits:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(v.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(f.a),t._v(" "),e("div",{staticClass:"pr-2"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:t.onAddDepositClicked}},[e(v.a,{attrs:{left:"",dark:""}},[t._v(" mdi-plus-circle ")]),t._v("\n        Add Deposit\n      ")],1)])],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"},[e(d.a,{attrs:{cols:"12",lg:"4"}},[e(_.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by search, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:t.search.search,callback:function(e){t.$set(t.search,"search",e)},expression:"search.search"}})],1)],1),t._v(" "),e("deposit-table",{attrs:{deposits:t.deposits.data},on:{"on-deposit-detail-clicked":t.onDepositDetailClicked,"on-deposit-delete-clicked":t.onDepositDeleteClicked}})],1),t._v(" "),e("div",[e(h.a,{attrs:{width:"1080"},on:{"click:outside":t.closeDepositForm},model:{value:t.DepositFormVisible,callback:function(e){t.DepositFormVisible=e},expression:"DepositFormVisible"}},[e("deposit-form",{attrs:{_deposit:t.deposit,editMode:t.editMode},on:{"on-close-deposit-form":t.closeDepositForm}})],1),t._v(" "),e(h.a,{attrs:{width:"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[e(c.a,{staticClass:"red lighten-4"},[e(l.c,{staticClass:"text-h5 red lighten-2"},[t._v(" Confirm ")]),t._v(" "),e(l.b,{staticClass:"pt-3"},[t._v("\n          Are you sure you want to delete this resource!\n        ")]),t._v(" "),e(m.a),t._v(" "),e(l.a,[e(f.a),t._v(" "),e(o.a,{attrs:{color:"primary",text:""},on:{click:t.deleteDeposit}},[t._v(" I accept ")])],1)],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("All Deposits")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All Deposits Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);