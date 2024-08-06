(window.webpackJsonp=window.webpackJsonp||[]).push([[32,25],{603:function(e,t,n){var content=n(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("2065bca8",content,!0,{sourceMap:!1})},604:function(e,t,n){var o=n(19)(!1);o.push([e.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),e.exports=o},623:function(e,t,n){"use strict";var o=n(85),r=n(1),l=(n(26),n(92),n(60),n(46),n(68),n(4),n(118),n(12),n(13),n(11),n(15),n(9),n(16),n(603),n(593)),c=n(153),d=n(126),h=n(279),v=n(281),f=n(277),m=n(278),_=n(127),x=n(5),y=n(8),O=n(0);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C=Object(x.a)(d.a,h.a,v.a,f.a,m.a,c.a);t.a=C.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(r.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(e,"v-dialog--active",this.isActive),Object(r.a)(e,"v-dialog--persistent",this.persistent),Object(r.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(e,"v-dialog--scrollable",this.scrollable),Object(r.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(t=this.previousActiveElement)||void 0===t||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(y.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){var t,n;(null===(t=e.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(e.previousActiveElement=document.activeElement,null===(n=e.$refs.dialog)||void 0===n||n.focus()),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===O.y.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(e){return!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')}));r&&r.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(l.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:w({role:"dialog","aria-modal":e.hideOverlay?void 0:"true"},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=w(w({},data.style),{},{maxWidth:Object(O.h)(this.maxWidth),width:Object(O.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},689:function(e,t,n){"use strict";n.r(t);var o=n(174),r=n(263),l=n(795),c=n(262),d=n(188),h=n(259),v=n(172),f=n(84),m=n(267),_=n(658),x=(n(40),n(274),{props:["roles","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Name",class:"blue-grey lighten-3",value:"name"},{text:"Code",class:"blue-grey lighten-3",value:"code"},{text:"Action",class:"blue-grey lighten-3 col-2",value:"menu"}]}}}),y=n(78),component=Object(y.a)(x,(function(){var e=this,t=e._self._c;return t(l.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.roles,"items-per-page":25,search:e.search,expanded:e.expanded,"show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"item.is_active",fn:function(n){var o=n.item;return[t(r.a,[e._v(e._s(o.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(n){var o=n.item;return[t(r.a,[e._v(e._s(o.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var r=n.item;return[t(m.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[t(o.a,e._g(e._b({attrs:{icon:""}},"v-btn",l,!1),r),[t(d.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(h.a,{staticClass:"col-12 px-0"},[t(v.a,{on:{click:function(t){return e.$emit("on-role-detail-clicked",r)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(f.b,[e._v("Detail")])],1),e._v(" "),t(c.a),e._v(" "),r.checked?e._e():t(v.a,{on:{click:function(t){return e.$emit("on-role-delete-clicked",r)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(f.b,{staticClass:"pr-9"},[e._v("Delete")])],1)],1)],1)]}},{key:"expanded-item",fn:function(n){var o=n.headers,l=n.item;return[t("td",{staticClass:"px-0 blue-grey lighten-5",attrs:{colspan:o.length}},[t(_.a,{staticClass:"blue-grey lighten-5",scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",{staticClass:"blue-grey lighten-4"},[t("th",{staticClass:"text-center"},[t("b",[e._v("RESOURCES")])]),e._v(" "),t("th",{staticClass:"text-center"},[t("b",[e._v("ACTIONS")])])])]),e._v(" "),t("tbody",e._l(l.rolePermissions,(function(n){return t("tr",{key:n.ID},[t("td",{staticClass:"text-center"},[e._v(e._s(n.permission.resource))]),e._v(" "),t("td",{staticClass:"text-center"},e._l(n.permissionTypes,(function(n){return t(r.a,{key:n.id,staticClass:"ma-2",attrs:{close:""}},[e._v("\n                  "+e._s(n.action)+"\n                ")])})),1)])})),0)]},proxy:!0}],null,!0)})],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},804:function(e,t,n){"use strict";n.r(t);var o=n(818),r=n(174),l=n(264),c=n(273),d=n(618),h=n(623),v=n(262),f=n(188),m=n(592),_=n(121),x=(n(36),n(40),n(274),n(1)),y=(n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(689)),O=n(789),k=n(636),w=n(106);function C(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(t){Object(x.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var A={components:{RoleTable:y.default,RoleForm:O.default},data:function(){var e;return e={breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Work Order",disabled:!0}],search:"",editMode:!1,deleteDialog:!1,editRoleDialogVisible:!1,roleFormVisible:!1,dispatchFormVisible:!1,roles:{},role:{}},Object(x.a)(e,"search",{name:"",concrete_type_id:null}),Object(x.a)(e,"pagination",{page:1,per_page:25}),e},apollo:{roles:{query:k.a,variables:function(){var e={};return this.search.name&&(e=j(j({},e),{name:"%".concat(this.search.name,"%")})),j(j({},e),this.pagination)},fetchPolicy:"cache-and-network"}},methods:j(j({},Object(w.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onAddRoleClicked:function(){this.role={},this.roleFormVisible=!0},onRoleDetailClicked:function(e){this.roleFormVisible=!0,this.role=e},onRoleDeleteClicked:function(e){this.role=e,this.deleteDialog=!0},deleteRole:function(){var e=this;this.$apollo.mutate({mutation:k.c,variables:{id:this.role.id}}).then((function(t){t.data;e.successNotification("Role removed successfully!"),e.$apollo.queries.roles.refetch()})).catch((function(e){console.log(e)})),this.role=null,this.deleteDialog=!1},onCloseRoleForm:function(){this.role=null,this.roleFormVisible=!1,this.$apollo.queries.roles.refetch()}}),created:function(){console.log(this.roles)}},D=n(78),component=Object(D.a)(A,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(o.a,{attrs:{roles:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(f.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"px-4 row ma-1"},[e._m(0),e._v(" "),t(m.a),e._v(" "),t("div",{staticClass:"pr-2"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:e.onAddRoleClicked}},[t(f.a,{attrs:{left:"",dark:""}},[e._v(" mdi-plus-circle ")]),e._v("\n        Add Role\n      ")],1)])],1),e._v(" "),t("div",{staticClass:"px-5 py-3"},[t("div",{staticClass:"row mb-4"},[t(d.a,{attrs:{cols:"12",lg:"4"}},[t(_.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}})],1)],1),e._v(" "),t("role-table",{attrs:{roles:e.roles.data},on:{"on-role-detail-clicked":e.onRoleDetailClicked,"on-role-delete-clicked":e.onRoleDeleteClicked}})],1),e._v(" "),t("div",[t(h.a,{attrs:{width:"90%"},on:{"click:outside":e.onCloseRoleForm},model:{value:e.roleFormVisible,callback:function(t){e.roleFormVisible=t},expression:"roleFormVisible"}},[t("role-form",{attrs:{_role:e.role,editMode:e.editMode},on:{"on-close-role-form":e.onCloseRoleForm}})],1),e._v(" "),t(h.a,{attrs:{width:"500"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[t(l.a,{staticClass:"red lighten-4"},[t(c.c,{staticClass:"text-h5 red lighten-2"},[e._v(" confirm ")]),e._v(" "),t(c.b,{staticClass:"pt-3"},[e._v("\n          Are you sure you want to delete this resource!\n        ")]),e._v(" "),t(v.a),e._v(" "),t(c.a,[t(m.a),e._v(" "),t(r.a,{attrs:{color:"primary",text:""},on:{click:e.deleteRole}},[e._v(" I accept ")])],1)],1)],1)],1)],1)}),[function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("All Roles")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("All Orders Are Shown Here.")])])}],!1,null,null,null);t.default=component.exports}}]);