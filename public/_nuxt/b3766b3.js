(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{626:function(e,n,t){"use strict";var r,o,c,d,l,m,_,$,v,f=t(91),y=t(58);Object(y.a)(r||(r=Object(f.a)(["\n  query($customer_name: String, $concrete_type_id: ID, $checked: Boolean, $approved: Boolean, $closed: Boolean, $on_production: Boolean, $page: Int!, $per_page: Int!) {\n    workOrders(customer_name: $customer_name, concrete_type_id: $concrete_type_id, checked: $checked, approved: $approved, closed: $closed, on_production: $on_production, first: $per_page, page: $page) {\n      data {\n        id\n        work_order_no\n        customer_name\n        customer_address\n        delivered_date\n        delivery_date\n        order_quantity\n        unit_price\n        project_description\n        pump_supplier\n        pump_type\n        receipt_no\n        receipt_number\n        is_paid\n        checked\n        approved\n        closed\n        remark\n        checkedBy {\n          id\n          name\n        }\n        concreteType {\n          id\n          name\n          description\n          concreteIngredients {\n              id\n              amount\n              item {\n                  id\n                  name\n                  balance\n                  unit_price\n                  description\n                  measurementUnit {\n                      id\n                      name\n                      abbreviation\n                  }\n              }\n          }\n        }\n      }\n    }\n  }\n"]))),Object(y.a)(o||(o=Object(f.a)(["\n  query($customer_name: String, $concrete_type_id: ID, $checked: Boolean, $approved: Boolean, $closed: Boolean, $on_production: Boolean, $start_date: Date, $end_date: Date) {\n    searchWorkOrder(customer_name: $customer_name, concrete_type_id: $concrete_type_id, checked: $checked, approved: $approved, closed: $closed, \n      on_production: $on_production, end_date: $end_date, start_date: $start_date ) {\n        id\n        work_order_no\n        customer_name\n        customer_address\n        account_name\n        cheque_number\n        delivered_date\n        delivery_date\n        order_quantity\n        unit_price\n        project_description\n        pump_supplier\n        pump_type\n        receipt_no\n        receipt_number\n        is_paid\n        checked\n        approved\n        closed\n        delivered_quantity\n        remaining_quantity\n        previously_delivered\n        executed_quantity\n        concrete_type_id\n        remark\n        checkedBy {\n          id\n          name\n        }\n        concreteType {\n          id\n          name\n          description\n          concreteIngredients {\n              id\n              amount\n              item {\n                  id\n                  name\n                  balance\n                  unit_price\n                  description\n                  measurementUnit {\n                      id\n                      name\n                      abbreviation\n                  }\n              }\n          }\n        }\n      }\n    }\n"]))),Object(y.a)(c||(c=Object(f.a)(["\nquery($id: ID!) {\n  workOrder(id: $id) {\n      id\n      work_order_no\n      customer_name\n      customer_address\n      delivered_date\n      delivery_date\n      order_quantity\n      unit_price\n      project_description\n      pump_supplier\n      pump_type\n      receipt_no\n      receipt_number\n      is_paid\n      checked\n      approved\n      closed\n      remark\n      checkedBy {\n        id\n        name\n      }\n      concreteType {\n        id\n        name\n        description\n        concreteIngredients {\n          id\n          amount\n          item {\n            id\n            name\n            balance\n            unit_price\n            description\n            measurementUnit {\n              id\n              name\n              abbreviation\n            }\n          }\n        }\n      }\n  }\n}\n"]))),Object(y.a)(d||(d=Object(f.a)(["\n  mutation ($order_quantity: Float!, $customer_name: String!, $customer_address: String, $delivery_date: String, $delivered_date: String, \n    $receipt_number: String, $project_description: String, $account_name: String, $cheque_number: String, $receipt_no: String, $pump_type: String, \n    $pump_supplier: String, $is_paid: Boolean, $unit_price: Float! $concrete_type_id: ID!, $remark: String) {\n    createWorkOrder(input: {\n      order_quantity: $order_quantity,\n      customer_name: $customer_name,\n      customer_address: $customer_address,\n      receipt_number: $receipt_number,\n      project_description: $project_description,\n      receipt_no: $receipt_no,\n      delivery_date: $delivery_date,\n      delivered_date: $delivered_date,\n      pump_type: $pump_type,\n      pump_supplier: $pump_supplier,\n      concrete_type_id: $concrete_type_id\n      is_paid: $is_paid\n      unit_price: $unit_price\n      account_name: $account_name\n      cheque_number: $cheque_number\n      remark: $remark\n    }) {\n      id\n      work_order_no\n    }\n  }\n"]))),Object(y.a)(l||(l=Object(f.a)(["\n  mutation ($id: ID!, $order_quantity: Float!, $customer_name: String!, $customer_address: String, $delivery_date: String, $delivered_date: String, \n    $receipt_number: String, $project_description: String, $account_name: String, $cheque_number: String, $receipt_no: String, $pump_type: String, \n    $pump_supplier: String, $is_paid: Boolean, $unit_price: Float! $concrete_type_id: ID!, $remark: String) {\n    updateWorkOrder(input: {\n      id: $id\n      order_quantity: $order_quantity,\n      customer_name: $customer_name,\n      customer_address: $customer_address,\n      receipt_number: $receipt_number,\n      project_description: $project_description,\n      receipt_no: $receipt_no,\n      delivery_date: $delivery_date,\n      delivered_date: $delivered_date,\n      pump_type: $pump_type,\n      pump_supplier: $pump_supplier,\n      concrete_type_id: $concrete_type_id\n      is_paid: $is_paid\n      unit_price: $unit_price\n      account_name: $account_name\n      cheque_number: $cheque_number\n      remark: $remark\n    }) {\n      id\n      work_order_no\n    }\n  }\n"]))),Object(y.a)(m||(m=Object(f.a)(["\n  mutation($id: ID!) {\n    deleteWorkOrder(id: $id) {\n      id\n    }\n  }\n"]))),Object(y.a)(_||(_=Object(f.a)(["\n  mutation ($id: ID!) {\n      approveWorkOrder (id: $id) {\n          id\n          approved\n          work_order_no\n          approvedBy {\n              id\n              name\n          }\n      }\n  }\n"]))),Object(y.a)($||($=Object(f.a)(["\n  mutation ($id: ID!) {\n      checkWorkOrder (id: $id) {\n          id\n          checked\n          work_order_no\n          checkedBy {\n              id\n              name\n          }\n      }\n  }\n"]))),Object(y.a)(v||(v=Object(f.a)(["\n  mutation ($id: ID!, $closing_remark: String!) {\n    closeWorkOrder (id: $id, closing_remark: $closing_remark) {\n          id\n          checked\n          work_order_no\n          checkedBy {\n              id\n              name\n          }\n      }\n  }\n"])))},632:function(e,n,t){"use strict";t.d(n,"a",(function(){return _})),t.d(n,"b",(function(){return $})),t.d(n,"d",(function(){return v})),t.d(n,"c",(function(){return f}));var r,o,c,d,l=t(91),m=t(58),_=Object(m.a)(r||(r=Object(l.a)(["\n  query($page: Int!, $per_page: Int!) {\n    roles(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        code\n        description\n        is_active\n        rolePermissions {\n          permissionTypes {\n            id\n            action\n          }\n          permission {\n            id\n            name\n            resource\n          }\n        }\n      }\n    }   \n  }\n"]))),$=Object(m.a)(o||(o=Object(l.a)(["\n  mutation($name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    createRole(input: {name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),v=Object(m.a)(c||(c=Object(l.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    updateRole(input: {id: $id, name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),f=Object(m.a)(d||(d=Object(l.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},661:function(e,n,t){"use strict";t.d(n,"a",(function(){return $})),t.d(n,"b",(function(){return v})),t.d(n,"c",(function(){return f})),t.d(n,"d",(function(){return y}));var r,o,c,d,l,m=t(91),_=t(58),$=Object(_.a)(r||(r=Object(m.a)(["\n  query($page: Int!, $per_page: Int!) {\n    users(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        email\n        username\n        is_active\n        is_locked\n        last_seen\n        roles {\n          id\n          name\n        }\n        createdBy {\n            id\n            name\n            username\n        }\n      }\n    }   \n  }\n"]))),v=Object(_.a)(o||(o=Object(m.a)(["\n  mutation register($email: String!, $name: String!, $username: String!, $password: String!, $password_confirmation: String!, $roles: [ID!]) {\n    register (input: {email: $email, name: $name, username: $username, password: $password, password_confirmation: $password_confirmation, roles: $roles}) {\n        tokens {\n            access_token\n        }\n    }\n  }\n"]))),f=Object(_.a)(c||(c=Object(m.a)(["\n  mutation updateUser($id: ID!, $name: String!, $password: String!, $password_confirmation: String!, $roles: [ID!]) {\n    updateUser (input: {id: $id, name: $name, password: $password, password_confirmation: $password_confirmation, roles: $roles}) {\n        name\n    }\n  }\n"]))),y=Object(_.a)(d||(d=Object(m.a)(["\n  mutation updateUser($id: ID!, $is_active: Boolean!) {\n    updateActiveStatus (input: {id: $id, is_active: $is_active}) {\n      id\n      name\n      is_active\n    }\n  }\n"])));Object(_.a)(l||(l=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteUser(id: $id) {\n      id\n    }\n  }\n"])))},711:function(e,n,t){"use strict";t.r(n);var r=t(264),o=t(273),c=t(628),d=t(262),l=t(656),m=t(189),_=t(638),$=t(578),v=t(593),f=t(120),y=(t(36),t(12),t(13),t(11),t(4),t(15),t(9),t(16),t(1)),h=(t(68),t(106)),k=t(661);t(626),t(617);function O(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(n){Object(y.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var j={props:["_user"],data:function(){return{editMode:!1,valid:!1,user:{roles:null},roles:{data:[]},workOrder:{},workOrderPagination:{page:1,per_page:25},password_rules:[function(e){return!!e||"Password field is required"}],password_confirmation_rules:[function(e){return!!e||"Password confirmation field is required"}]}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._user)||void 0===e?void 0:e.id)},formattedRoles:function(){return this.roles.data.map((function(e){return e.id=parseInt(e.id),e}))}},apollo:{roles:{query:t(632).a,variables:function(){return{page:1,per_page:1e3}},fetchPolicy:"cache-and-network"}},methods:w(w({},Object(h.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.$refs.form.validate()&&(this.editMode?this.updateUser(e):this.registerConcreteType(e))},registerConcreteType:function(e){var n=this;this.$apollo.mutate({mutation:k.b,variables:this.user}).then((function(t){t.data;n.successNotification("User registered successfully!"),e.target.reset(),n.$emit("on-close-user-form")})).catch((function(e){console.log(e)}))},updateUser:function(e){var n=this;this.$apollo.mutate({mutation:k.c,variables:this.user}).then((function(t){t.data;n.successNotification("User updated successfully!"),e.target.reset(),n.$emit("on-close-user-form")})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e;null!==(e=this._user)&&void 0!==e&&e.id&&(this.user=w({},this._user),this.user.roles=this.user.roles.map((function(e){return parseInt(e.id)})))},deep:!0,immediate:!0}}},S=t(79),component=Object(S.a)(j,(function(){var e=this,n=e._self._c;return n(r.a,[n("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[n(_.a,{staticClass:"mx-0"},[n("div",[n(o.c,{staticClass:"text-h5 pb-0"},[e._v("\n          User Registration Form\n        ")]),e._v(" "),n("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),n(v.a),e._v(" "),e.disableForm?n("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(n){e.editMode=!0}}},[n(m.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),n("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),n(l.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(n){return n.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[n("div",{staticClass:"mx-5"},[n(_.a,{staticClass:"px-3"},[n(c.a,{attrs:{cols:"12"}},[n(f.a,{attrs:{label:"Full Name",outlined:"",required:""},model:{value:e.user.name,callback:function(n){e.$set(e.user,"name",n)},expression:"user.name"}})],1),e._v(" "),n(c.a,{attrs:{cols:"12",md:"6"}},[n(f.a,{attrs:{label:"Email",disabled:e.editMode,outlined:"",required:""},model:{value:e.user.email,callback:function(n){e.$set(e.user,"email",n)},expression:"user.email"}})],1),e._v(" "),n(c.a,{attrs:{cols:"12",md:"6"}},[n(f.a,{attrs:{label:"Username",disabled:e.editMode,outlined:"",required:""},model:{value:e.user.username,callback:function(n){e.$set(e.user,"username",n)},expression:"user.username"}})],1),e._v(" "),n(c.a,{attrs:{cols:"12",md:"6"}},[n(f.a,{attrs:{label:"Password",type:"password",outlined:"",required:"",rules:e.password_rules},model:{value:e.user.password,callback:function(n){e.$set(e.user,"password",n)},expression:"user.password"}})],1),e._v(" "),n(c.a,{attrs:{cols:"12",md:"6"}},[n(f.a,{attrs:{label:"Confirm Password",type:"password",outlined:"",required:"",rules:e.password_confirmation_rules},model:{value:e.user.password_confirmation,callback:function(n){e.$set(e.user,"password_confirmation",n)},expression:"user.password_confirmation"}})],1),e._v(" "),n(c.a,{attrs:{cols:"12",md:"6"}},[n($.a,{attrs:{items:e.formattedRoles,"item-value":"id","item-text":"name",label:"Select Role",chips:"",multiple:"",outlined:"",required:""},model:{value:e.user.roles,callback:function(n){e.$set(e.user,"roles",n)},expression:"user.roles"}})],1)],1)],1),e._v(" "),n(d.a,{staticClass:"my-2"}),e._v(" "),n(c.a,{staticClass:"d-flex"},[n("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(n){return e.$emit("on-close-user-form")}}},[n("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),n(v.a),e._v(" "),e.disableForm?e._e():n("div",[e.editMode?n("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[n("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):n("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[n("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);