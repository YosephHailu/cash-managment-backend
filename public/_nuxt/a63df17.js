(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{808:function(t,e,n){"use strict";n.r(e);var o=n(619),c=n(264),r=n(273),l=n(631),d=n(262),f=n(662),m=n(642),v=n(189),_=n(632),h=n(592),y=n(121),C=(n(12),n(13),n(11),n(4),n(15),n(9),n(16),n(1)),x=n(106),O=n(288);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(C.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={middleware:["authenticated"],data:function(){var t;return t={breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Configurations",disabled:!0}],search:"",valid:!1,editMode:!1,configurations:[],configuration:{}},Object(C.a)(t,"search",{name:"",concrete_type_id:null}),Object(C.a)(t,"pagination",{page:1,per_page:25}),t},apollo:{configurations:{query:O.a,fetchPolicy:"cache-and-network",prefetch:function(data){console.log("data",data)}}},computed:{config:function(){return this.configurations.length?(this.editMode=!0,this.configurations[0]):[]}},methods:j(j({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.editMode?this.updateConfiguration(t):this.registerConfiguration(t)},registerConfiguration:function(t){var e=this;this.$apollo.mutate({mutation:O.b,variables:this.config}).then((function(t){t.data;e.successNotification("Configuration registered successfully!")})).catch((function(t){console.log(t)}))},updateConfiguration:function(t){var e=this;this.$apollo.mutate({mutation:O.c,variables:this.config}).then((function(t){t.data;e.successNotification("Configuration updated successfully!")})).catch((function(t){console.log(t)}))}})},N=n(79),component=Object(N.a)(k,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(o.a,{attrs:{configurations:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(v.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(h.a)],1),t._v(" "),e(c.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4 mt-5"},[e(_.a,{staticClass:"mx-0"},[e("img",{staticClass:"pa-2 mt-2",attrs:{src:t.config.company_logo_url,height:"70",alt:""}}),t._v(" "),e("div",[e(r.c,{staticClass:"text-h5 pb-0"},[t._v("\n            Configuration Form\n          ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("configuration form")])],1),t._v(" "),e(h.a)],1)],1),t._v(" "),e(m.a,{staticClass:"mt-4 p-4",on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(_.a,{staticClass:"px-3"},[e(l.a,{attrs:{cols:"12",md:"4"}},[e(y.a,{attrs:{label:"Document Number",outlined:"",required:"",type:"number"},model:{value:t.config.document_no,callback:function(e){t.$set(t.config,"document_no",t._n(e))},expression:"config.document_no"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(y.a,{attrs:{label:"Document Label",outlined:"",required:""},model:{value:t.config.document_label,callback:function(e){t.$set(t.config,"document_label",e)},expression:"config.document_label"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(y.a,{attrs:{label:"Issue Number",outlined:"",required:"",type:"number"},model:{value:t.config.issue_no,callback:function(e){t.$set(t.config,"issue_no",t._n(e))},expression:"config.issue_no"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(y.a,{attrs:{label:"Company Name",outlined:"",required:""},model:{value:t.config.company_name,callback:function(e){t.$set(t.config,"company_name",e)},expression:"config.company_name"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(y.a,{attrs:{label:"Company Address",outlined:"",required:""},model:{value:t.config.company_address,callback:function(e){t.$set(t.config,"company_address",e)},expression:"config.company_address"}})],1),t._v(" "),e(l.a,{attrs:{cols:"4"}},[e(f.a,{attrs:{"truncate-length":"15",label:"Company Logo",outlined:"",required:""},model:{value:t.config.company_logo,callback:function(e){t.$set(t.config,"company_logo",e)},expression:"config.company_logo"}})],1)],1)],1),t._v(" "),e(d.a,{staticClass:"my-2"}),t._v(" "),e(l.a,{staticClass:"d-flex"},[e(h.a),t._v(" "),e("div",[t.editMode?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])])],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("Constant Configuration")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("Constant Configuration Page.")])])}],!1,null,null,null);e.default=component.exports}}]);