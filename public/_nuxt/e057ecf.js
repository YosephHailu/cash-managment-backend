(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{630:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"b",(function(){return _})),r.d(e,"d",(function(){return m})),r.d(e,"c",(function(){return f}));var n,o,l,d,c=r(91),h=r(58),v=Object(h.a)(n||(n=Object(c.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permission_types(first: $per_page, page: $page) {\n      data {\n         id\n         action\n         is_active\n      }\n    }   \n  }\n"]))),_=Object(h.a)(o||(o=Object(c.a)(["\n  mutation($action: String!) {\n    createPermissionType(input: {action: $action}) {\n        id\n        action\n    }\n  }\n"]))),m=Object(h.a)(l||(l=Object(c.a)(["\n  mutation($id: ID!, $action: String!) {\n    updatePermissionType(input: {id: $id, action: $action}) {\n        id\n        action\n    }\n  }\n"]))),f=Object(h.a)(d||(d=Object(c.a)(["\n  mutation($id: ID!) {\n    deletePermissionType(id: $id) {\n        id\n        action\n    }   \n  }\n"])))},631:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"b",(function(){return _})),r.d(e,"d",(function(){return m})),r.d(e,"c",(function(){return f}));var n,o,l,d,c=r(91),h=r(58),v=Object(h.a)(n||(n=Object(c.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permissions(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        code\n        description\n        resource\n        is_active\n     }\n    }   \n  }\n"]))),_=Object(h.a)(o||(o=Object(c.a)(["\n  mutation($name: String!, $code: String, $resource: String, $description: String) {\n    createPermission(input: {name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),m=Object(h.a)(l||(l=Object(c.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $resource: String, $description: String) {\n    updatePermission(input: {id: $id, name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),f=Object(h.a)(d||(d=Object(c.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},632:function(t,e,r){"use strict";r.d(e,"a",(function(){return v})),r.d(e,"b",(function(){return _})),r.d(e,"d",(function(){return m})),r.d(e,"c",(function(){return f}));var n,o,l,d,c=r(91),h=r(58),v=Object(h.a)(n||(n=Object(c.a)(["\n  query($page: Int!, $per_page: Int!) {\n    roles(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        code\n        description\n        is_active\n        rolePermissions {\n          permissionTypes {\n            id\n            action\n          }\n          permission {\n            id\n            name\n            resource\n          }\n        }\n      }\n    }   \n  }\n"]))),_=Object(h.a)(o||(o=Object(c.a)(["\n  mutation($name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    createRole(input: {name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),m=Object(h.a)(l||(l=Object(c.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    updateRole(input: {id: $id, name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),f=Object(h.a)(d||(d=Object(c.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},636:function(t,e,r){var content=r(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("7c06aa28",content,!0,{sourceMap:!1})},637:function(t,e,r){var n=r(19)(!1);n.push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=n},655:function(t,e,r){"use strict";r(12),r(13),r(11),r(4),r(15),r(9),r(16);var n=r(1),o=(r(26),r(636),r(0)),l=r(17),d=r(5);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(l.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(o.h)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},709:function(t,e,r){"use strict";r.r(e);var n=r(264),o=r(273),l=r(840),d=r(628),c=r(262),h=r(656),v=r(189),_=r(638),m=r(655),f=r(593),w=r(120),y=(r(36),r(12),r(13),r(11),r(15),r(16),r(1)),$=(r(4),r(9),r(227),r(106)),O=r(631),x=r(630),j=r(632);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={props:["_role"],data:function(){return{selected:[],permissions:{},permission_types:{},editMode:!1,valid:!1,role:{},rolePermissions:{create:[]}}},apollo:{permission_types:{query:x.a,variables:function(){return{page:1,per_page:1e4}},fetchPolicy:"cache-and-network"},permissions:{query:O.a,variables:function(){return{page:1,per_page:1e4}},fetchPolicy:"cache-and-network"}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._role)||void 0===t?void 0:t.id)}},methods:k(k({},Object($.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.prepareRolePermission(),this.editMode?this.updateRole(t):this.registerRole(t)},prepareRolePermission:function(){var t=this;console.log(this.selected),this.selected.forEach((function(e){var r=t.rolePermissions.create.findIndex((function(t){return parseInt(t.permission_id)==parseInt(e.permission_id)}));-1!=r?t.rolePermissions.create[r].rolePermissionTypes.create.push({permission_type_id:parseInt(e.permission_type_id)}):t.rolePermissions.create.push({permission_id:parseInt(e.permission_id),rolePermissionTypes:{create:[{permission_type_id:parseInt(e.permission_type_id)}]}})})),console.log(this.rolePermissions)},registerRole:function(t){var e=this;console.log(this.role),this.role.rolePermissions=this.rolePermissions,this.$apollo.mutate({mutation:j.b,variables:this.role}).then((function(r){r.data;e.successNotification("Role  registered successfully!"),t.target.reset(),e.$emit("on-close-role-form")})).catch((function(t){console.log(t)}))},updateRole:function(t){var e=this;this.role.rolePermissions=this.rolePermissions,this.$apollo.mutate({mutation:j.d,variables:this.role}).then((function(r){r.data;e.successNotification("Role  updated successfully!"),t.target.reset(),e.$emit("on-close-role-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t,e=this;null!==(t=this._role)&&void 0!==t&&t.id&&(this.editMode=!1,this.role=k({},this._role),this._role.rolePermissions.forEach((function(t){t.permissionTypes.forEach((function(r){e.selected.push({permission_id:t.permission.id,permission_type_id:r.id})}))})))},deep:!0,immediate:!0}}},S=r(79),component=Object(S.a)(C,(function(){var t=this,e=t._self._c;return e(n.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(_.a,{staticClass:"mx-0"},[e("div",[e(o.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Role Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(f.a),t._v(" "),t.disableForm?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(v.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(h.a,{staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(_.a,{staticClass:"px-3"},[e(d.a,{attrs:{cols:"12",md:"6"}},[e(w.a,{attrs:{label:"Name",outlined:"",required:""},model:{value:t.role.name,callback:function(e){t.$set(t.role,"name",e)},expression:"role.name"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",md:"6"}},[e(w.a,{attrs:{label:"Code",outlined:"",required:""},model:{value:t.role.code,callback:function(e){t.$set(t.role,"code",e)},expression:"role.code"}})],1)],1)],1),t._v(" "),e(c.a,{staticClass:"my-2"}),t._v(" "),e(m.a,{staticClass:"blue-grey lighten-5",scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",{staticClass:"blue-grey lighten-4"},[e("th",{staticClass:"text-center blue-grey lighten-2",staticStyle:{"min-width":"250px"}},[e("b",[t._v("PERMISSIONS")])]),t._v(" "),t._l(t.permission_types.data,(function(r){return e("th",{key:r.id,staticClass:"text-center"},[e("b",[t._v(t._s(r.action))])])}))],2)]),t._v(" "),e("tbody",t._l(t.permissions.data,(function(r){return e("tr",{key:r.id},[e("td",{staticClass:"text-center blue-grey lighten-3"},[t._v(t._s(r.name))]),t._v(" "),t._l(t.permission_types.data,(function(n){return e("td",{key:n.id,staticClass:"text-center"},[e(l.a,{staticClass:"text-center",attrs:{value:{permission_type_id:n.id,permission_id:r.id}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)}))],2)})),0)]},proxy:!0}])}),t._v(" "),e(c.a,{staticClass:"mb-2"}),t._v(" "),e(d.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-role-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(f.a),t._v(" "),t.disableForm?t._e():e("div",[t.editMode?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);