(window.webpackJsonp=window.webpackJsonp||[]).push([[32,15,24],{603:function(e,t,n){var content=n(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("b1bed018",content,!0,{sourceMap:!1})},604:function(e,t,n){var r=n(19)(!1);r.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=r},605:function(e,t,n){var content=n(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("2065bca8",content,!0,{sourceMap:!1})},606:function(e,t,n){var r=n(19)(!1);r.push([e.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),e.exports=r},620:function(e,t,n){"use strict";n(12),n(13),n(11),n(4),n(15),n(9),n(16);var r=n(1),o=(n(119),n(603),n(64)),c=n(5);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return e("li",[e(n,l(l({},data),{},{attrs:l(l({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=n(0),h=Object(v.j)("v-breadcrumbs__divider","li"),_=n(17);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(c.a)(_.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),t?e.push(this.$scopedSlots.item({item:r})):e.push(this.$createElement(m,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},623:function(e,t,n){"use strict";var r,o,c,d,l,m,v,h,_,f=n(91),y=n(58);Object(y.a)(r||(r=Object(f.a)(["\n  query($customer_name: String, $concrete_type_id: ID, $checked: Boolean, $approved: Boolean, $closed: Boolean, $on_production: Boolean, $page: Int!, $per_page: Int!) {\n    workOrders(customer_name: $customer_name, concrete_type_id: $concrete_type_id, checked: $checked, approved: $approved, closed: $closed, on_production: $on_production, first: $per_page, page: $page) {\n      data {\n        id\n        work_order_no\n        customer_name\n        customer_address\n        delivered_date\n        delivery_date\n        order_quantity\n        unit_price\n        project_description\n        pump_supplier\n        pump_type\n        receipt_no\n        receipt_number\n        is_paid\n        checked\n        approved\n        closed\n        remark\n        checkedBy {\n          id\n          name\n        }\n        concreteType {\n          id\n          name\n          description\n          concreteIngredients {\n              id\n              amount\n              item {\n                  id\n                  name\n                  balance\n                  unit_price\n                  description\n                  measurementUnit {\n                      id\n                      name\n                      abbreviation\n                  }\n              }\n          }\n        }\n      }\n    }\n  }\n"]))),Object(y.a)(o||(o=Object(f.a)(["\n  query($customer_name: String, $concrete_type_id: ID, $checked: Boolean, $approved: Boolean, $closed: Boolean, $on_production: Boolean, $start_date: Date, $end_date: Date) {\n    searchWorkOrder(customer_name: $customer_name, concrete_type_id: $concrete_type_id, checked: $checked, approved: $approved, closed: $closed, \n      on_production: $on_production, end_date: $end_date, start_date: $start_date ) {\n        id\n        work_order_no\n        customer_name\n        customer_address\n        account_name\n        cheque_number\n        delivered_date\n        delivery_date\n        order_quantity\n        unit_price\n        project_description\n        pump_supplier\n        pump_type\n        receipt_no\n        receipt_number\n        is_paid\n        checked\n        approved\n        closed\n        delivered_quantity\n        remaining_quantity\n        previously_delivered\n        executed_quantity\n        concrete_type_id\n        remark\n        checkedBy {\n          id\n          name\n        }\n        concreteType {\n          id\n          name\n          description\n          concreteIngredients {\n              id\n              amount\n              item {\n                  id\n                  name\n                  balance\n                  unit_price\n                  description\n                  measurementUnit {\n                      id\n                      name\n                      abbreviation\n                  }\n              }\n          }\n        }\n      }\n    }\n"]))),Object(y.a)(c||(c=Object(f.a)(["\nquery($id: ID!) {\n  workOrder(id: $id) {\n      id\n      work_order_no\n      customer_name\n      customer_address\n      delivered_date\n      delivery_date\n      order_quantity\n      unit_price\n      project_description\n      pump_supplier\n      pump_type\n      receipt_no\n      receipt_number\n      is_paid\n      checked\n      approved\n      closed\n      remark\n      checkedBy {\n        id\n        name\n      }\n      concreteType {\n        id\n        name\n        description\n        concreteIngredients {\n          id\n          amount\n          item {\n            id\n            name\n            balance\n            unit_price\n            description\n            measurementUnit {\n              id\n              name\n              abbreviation\n            }\n          }\n        }\n      }\n  }\n}\n"]))),Object(y.a)(d||(d=Object(f.a)(["\n  mutation ($order_quantity: Float!, $customer_name: String!, $customer_address: String, $delivery_date: String, $delivered_date: String, \n    $receipt_number: String, $project_description: String, $account_name: String, $cheque_number: String, $receipt_no: String, $pump_type: String, \n    $pump_supplier: String, $is_paid: Boolean, $unit_price: Float! $concrete_type_id: ID!, $remark: String) {\n    createWorkOrder(input: {\n      order_quantity: $order_quantity,\n      customer_name: $customer_name,\n      customer_address: $customer_address,\n      receipt_number: $receipt_number,\n      project_description: $project_description,\n      receipt_no: $receipt_no,\n      delivery_date: $delivery_date,\n      delivered_date: $delivered_date,\n      pump_type: $pump_type,\n      pump_supplier: $pump_supplier,\n      concrete_type_id: $concrete_type_id\n      is_paid: $is_paid\n      unit_price: $unit_price\n      account_name: $account_name\n      cheque_number: $cheque_number\n      remark: $remark\n    }) {\n      id\n      work_order_no\n    }\n  }\n"]))),Object(y.a)(l||(l=Object(f.a)(["\n  mutation ($id: ID!, $order_quantity: Float!, $customer_name: String!, $customer_address: String, $delivery_date: String, $delivered_date: String, \n    $receipt_number: String, $project_description: String, $account_name: String, $cheque_number: String, $receipt_no: String, $pump_type: String, \n    $pump_supplier: String, $is_paid: Boolean, $unit_price: Float! $concrete_type_id: ID!, $remark: String) {\n    updateWorkOrder(input: {\n      id: $id\n      order_quantity: $order_quantity,\n      customer_name: $customer_name,\n      customer_address: $customer_address,\n      receipt_number: $receipt_number,\n      project_description: $project_description,\n      receipt_no: $receipt_no,\n      delivery_date: $delivery_date,\n      delivered_date: $delivered_date,\n      pump_type: $pump_type,\n      pump_supplier: $pump_supplier,\n      concrete_type_id: $concrete_type_id\n      is_paid: $is_paid\n      unit_price: $unit_price\n      account_name: $account_name\n      cheque_number: $cheque_number\n      remark: $remark\n    }) {\n      id\n      work_order_no\n    }\n  }\n"]))),Object(y.a)(m||(m=Object(f.a)(["\n  mutation($id: ID!) {\n    deleteWorkOrder(id: $id) {\n      id\n    }\n  }\n"]))),Object(y.a)(v||(v=Object(f.a)(["\n  mutation ($id: ID!) {\n      approveWorkOrder (id: $id) {\n          id\n          approved\n          work_order_no\n          approvedBy {\n              id\n              name\n          }\n      }\n  }\n"]))),Object(y.a)(h||(h=Object(f.a)(["\n  mutation ($id: ID!) {\n      checkWorkOrder (id: $id) {\n          id\n          checked\n          work_order_no\n          checkedBy {\n              id\n              name\n          }\n      }\n  }\n"]))),Object(y.a)(_||(_=Object(f.a)(["\n  mutation ($id: ID!, $closing_remark: String!) {\n    closeWorkOrder (id: $id, closing_remark: $closing_remark) {\n          id\n          checked\n          work_order_no\n          checkedBy {\n              id\n              name\n          }\n      }\n  }\n"])))},625:function(e,t,n){"use strict";var r=n(86),o=n(1),c=(n(26),n(92),n(59),n(46),n(68),n(4),n(118),n(12),n(13),n(11),n(15),n(9),n(16),n(605),n(593)),d=n(153),l=n(126),m=n(278),v=n(280),h=n(276),_=n(277),f=n(127),y=n(5),$=n(8),O=n(0);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j=Object(y.a)(l.a,m.a,v.a,h.a,_.a,d.a);t.a=j.extend({name:"v-dialog",directives:{ClickOutside:f.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(o.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(e,"v-dialog--active",this.isActive),Object(o.a)(e,"v-dialog--persistent",this.persistent),Object(o.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(e,"v-dialog--scrollable",this.scrollable),Object(o.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(t=this.previousActiveElement)||void 0===t||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object($.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){var t,n;(null===(t=e.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(e.previousActiveElement=document.activeElement,null===(n=e.$refs.dialog)||void 0===n||n.focus()),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===O.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(e){return!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')}));o&&o.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(c.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:x({role:"dialog","aria-modal":e.hideOverlay?void 0:"true"},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=x(x({},data.style),{},{maxWidth:Object(O.h)(this.maxWidth),width:Object(O.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},629:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return _})),n.d(t,"c",(function(){return f}));var r,o,c,d,l=n(91),m=n(58),v=Object(m.a)(r||(r=Object(l.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permissions(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        code\n        description\n        resource\n        is_active\n     }\n    }   \n  }\n"]))),h=Object(m.a)(o||(o=Object(l.a)(["\n  mutation($name: String!, $code: String, $resource: String, $description: String) {\n    createPermission(input: {name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),_=Object(m.a)(c||(c=Object(l.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $resource: String, $description: String) {\n    updatePermission(input: {id: $id, name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),f=Object(m.a)(d||(d=Object(l.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},695:function(e,t,n){"use strict";n.r(t);var r=n(174),o=n(263),c=n(801),d=n(262),l=n(189),m=n(259),v=n(172),h=n(84),_=n(267),f=(n(41),n(274),{props:["permissions","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Name",class:"blue-grey lighten-3",value:"name"},{text:"Code",class:"blue-grey lighten-3",value:"code"},{text:"Resource",class:"blue-grey lighten-3",value:"resource"},{text:"Description",class:"blue-grey lighten-3",value:"description"},{text:"Action",class:"blue-grey lighten-3 col-2",value:"menu"}]}}}),y=n(79),component=Object(y.a)(f,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.permissions,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.is_active",fn:function(n){var r=n.item;return[t(o.a,[e._v(e._s(r.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(n){var r=n.item;return[t(o.a,[e._v(e._s(r.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var o=n.item;return[t(_.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),o),[t(l.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(m.a,{staticClass:"col-12 px-0"},[t(v.a,{on:{click:function(t){return e.$emit("on-permission-detail-clicked",o)}}},[t(l.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(h.b,[e._v("Detail")])],1),e._v(" "),t(d.a),e._v(" "),o.checked?e._e():t(v.a,{on:{click:function(t){return e.$emit("on-permission-delete-clicked",o)}}},[t(l.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(h.b,{staticClass:"pr-9"},[e._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},696:function(e,t,n){"use strict";n.r(t);var r=n(264),o=n(273),c=n(633),d=n(262),l=n(644),m=n(189),v=n(634),h=n(592),_=n(120),f=(n(36),n(13),n(87),n(12),n(11),n(4),n(15),n(9),n(16),n(1)),y=n(106),$=n(629);n(623),n(617);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={props:["_permission"],data:function(){return{editMode:!1,valid:!1,permission:{}}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._permission)||void 0===e?void 0:e.id)}},methods:k(k({},Object(y.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.editMode?this.updateConcrete(e):this.registerConcrete(e)},registerConcrete:function(e){var t=this;console.log(this.permission),this.$apollo.mutate({mutation:$.b,variables:this.permission}).then((function(n){n.data;t.successNotification("Permission  registered successfully!"),e.target.reset(),t.$emit("on-close-permission-form")})).catch((function(e){console.log(e)}))},updateConcrete:function(e){var t=this;this.$apollo.mutate({mutation:$.d,variables:this.permission}).then((function(n){n.data;t.successNotification("Permission  updated successfully!"),e.target.reset(),t.$emit("on-close-permission-form")})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){this._permission&&(this.editMode=!1,this.permission=k({},this._permission))},deep:!0,immediate:!0}}},j=n(79),component=Object(j.a)(x,(function(){var e=this,t=e._self._c;return t(r.a,[t("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[t(v.a,{staticClass:"mx-0"},[t("div",[t(o.c,{staticClass:"text-h5 pb-0"},[e._v("\n          Permission  Registration Form\n        ")]),e._v(" "),t("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),t(h.a),e._v(" "),e.disableForm?t("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(t){e.editMode=!0}}},[t(m.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),t("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),t(l.a,{staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"mx-5"},[t(v.a,{staticClass:"px-3"},[t(c.a,{attrs:{cols:"12"}},[t(_.a,{attrs:{label:"Name",outlined:"",required:""},model:{value:e.permission.name,callback:function(t){e.$set(e.permission,"name",t)},expression:"permission.name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"6"}},[t(_.a,{attrs:{label:"Code",outlined:"",required:""},model:{value:e.permission.code,callback:function(t){e.$set(e.permission,"code",t)},expression:"permission.code"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"6"}},[t(_.a,{attrs:{label:"Resource",outlined:"",required:""},model:{value:e.permission.resource,callback:function(t){e.$set(e.permission,"resource",t)},expression:"permission.resource"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t(_.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:e.permission.description,callback:function(t){e.$set(e.permission,"description",t)},expression:"permission.description"}})],1)],1)],1),e._v(" "),t(d.a,{staticClass:"my-2"}),e._v(" "),t(c.a,{staticClass:"d-flex"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(t){return e.$emit("on-close-permission-form")}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(h.a),e._v(" "),e.disableForm?e._e():t("div",[e.editMode?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},809:function(e,t,n){"use strict";n.r(t);var r=n(620),o=n(174),c=n(264),d=n(273),l=n(633),m=n(625),v=n(262),h=n(189),_=n(592),f=n(120),y=(n(36),n(41),n(274),n(1)),$=(n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(695)),O=n(696),k=n(629),x=n(106);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C={middleware:["authenticated"],components:{PermissionTable:$.default,PermissionForm:O.default},data:function(){var e;return e={breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Work Order",disabled:!0}],search:"",editMode:!1,deleteDialog:!1,editPermissionDialogVisible:!1,permissionFormVisible:!1,dispatchFormVisible:!1,permissions:{},permission:{}},Object(y.a)(e,"search",{name:"",concrete_type_id:null}),Object(y.a)(e,"pagination",{page:1,per_page:25}),e},apollo:{permissions:{query:k.a,variables:function(){var e={};return this.search.name&&(e=w(w({},e),{name:"%".concat(this.search.name,"%")})),w(w({},e),this.pagination)},fetchPolicy:"cache-and-network"}},methods:w(w({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onAddPermissionClicked:function(){this.permission={},this.permissionFormVisible=!0},onPermissionDetailClicked:function(e){this.permissionFormVisible=!0,this.permission=e},onPermissionDeleteClicked:function(e){this.permission=e,this.deleteDialog=!0},deletePermission:function(){var e=this;this.$apollo.mutate({mutation:k.c,variables:{id:this.permission.id}}).then((function(t){t.data;e.successNotification("Permission removed successfully!"),e.$apollo.queries.permissions.refetch()})).catch((function(e){console.log(e)})),this.permission=null,this.deleteDialog=!1},onClosePermissionForm:function(){this.permission=null,this.permissionFormVisible=!1,this.$apollo.queries.permissions.refetch()}}),created:function(){console.log(this.permissions)}},S=n(79),component=Object(S.a)(C,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(r.a,{attrs:{permissions:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(h.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"px-4 row ma-1"},[e._m(0),e._v(" "),t(_.a),e._v(" "),t("div",{staticClass:"pr-2"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:e.onAddPermissionClicked}},[t(h.a,{attrs:{left:"",dark:""}},[e._v(" mdi-plus-circle ")]),e._v("\n        Add Permission\n      ")],1)])],1),e._v(" "),t("div",{staticClass:"px-5 py-3"},[t("div",{staticClass:"row mb-4"},[t(l.a,{attrs:{cols:"12",lg:"4"}},[t(f.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}})],1)],1),e._v(" "),t("permission-table",{attrs:{permissions:e.permissions.data},on:{"on-permission-detail-clicked":e.onPermissionDetailClicked,"on-permission-delete-clicked":e.onPermissionDeleteClicked}})],1),e._v(" "),t("div",[t(m.a,{attrs:{width:"1080"},on:{"click:outside":e.onClosePermissionForm},model:{value:e.permissionFormVisible,callback:function(t){e.permissionFormVisible=t},expression:"permissionFormVisible"}},[t("permission-form",{attrs:{_permission:e.permission,editMode:e.editMode},on:{"on-close-permission-form":e.onClosePermissionForm}})],1),e._v(" "),t(m.a,{attrs:{width:"500"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[t(c.a,{staticClass:"red lighten-4"},[t(d.c,{staticClass:"text-h5 red lighten-2"},[e._v(" confirm ")]),e._v(" "),t(d.b,{staticClass:"pt-3"},[e._v("\n          Are you sure you want to delete this resource!\n        ")]),e._v(" "),t(v.a),e._v(" "),t(d.a,[t(_.a),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:e.deletePermission}},[e._v(" I accept ")])],1)],1)],1)],1)],1)}),[function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("All Permissions")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("All Orders Are Shown Here.")])])}],!1,null,null,null);t.default=component.exports}}]);