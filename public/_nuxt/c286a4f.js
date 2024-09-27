(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{626:function(e,n,t){"use strict";var r,o,c,d,_,m,l,$,v,y=t(91),h=t(58);Object(h.a)(r||(r=Object(y.a)(["\n  query($customer_name: String, $concrete_type_id: ID, $checked: Boolean, $approved: Boolean, $closed: Boolean, $on_production: Boolean, $page: Int!, $per_page: Int!) {\n    workOrders(customer_name: $customer_name, concrete_type_id: $concrete_type_id, checked: $checked, approved: $approved, closed: $closed, on_production: $on_production, first: $per_page, page: $page) {\n      data {\n        id\n        work_order_no\n        customer_name\n        customer_address\n        delivered_date\n        delivery_date\n        order_quantity\n        unit_price\n        project_description\n        pump_supplier\n        pump_type\n        receipt_no\n        receipt_number\n        is_paid\n        checked\n        approved\n        closed\n        remark\n        checkedBy {\n          id\n          name\n        }\n        concreteType {\n          id\n          name\n          description\n          concreteIngredients {\n              id\n              amount\n              item {\n                  id\n                  name\n                  balance\n                  unit_price\n                  description\n                  measurementUnit {\n                      id\n                      name\n                      abbreviation\n                  }\n              }\n          }\n        }\n      }\n    }\n  }\n"]))),Object(h.a)(o||(o=Object(y.a)(["\n  query($customer_name: String, $concrete_type_id: ID, $checked: Boolean, $approved: Boolean, $closed: Boolean, $on_production: Boolean, $start_date: Date, $end_date: Date) {\n    searchWorkOrder(customer_name: $customer_name, concrete_type_id: $concrete_type_id, checked: $checked, approved: $approved, closed: $closed, \n      on_production: $on_production, end_date: $end_date, start_date: $start_date ) {\n        id\n        work_order_no\n        customer_name\n        customer_address\n        account_name\n        cheque_number\n        delivered_date\n        delivery_date\n        order_quantity\n        unit_price\n        project_description\n        pump_supplier\n        pump_type\n        receipt_no\n        receipt_number\n        is_paid\n        checked\n        approved\n        closed\n        delivered_quantity\n        remaining_quantity\n        previously_delivered\n        executed_quantity\n        concrete_type_id\n        remark\n        checkedBy {\n          id\n          name\n        }\n        concreteType {\n          id\n          name\n          description\n          concreteIngredients {\n              id\n              amount\n              item {\n                  id\n                  name\n                  balance\n                  unit_price\n                  description\n                  measurementUnit {\n                      id\n                      name\n                      abbreviation\n                  }\n              }\n          }\n        }\n      }\n    }\n"]))),Object(h.a)(c||(c=Object(y.a)(["\nquery($id: ID!) {\n  workOrder(id: $id) {\n      id\n      work_order_no\n      customer_name\n      customer_address\n      delivered_date\n      delivery_date\n      order_quantity\n      unit_price\n      project_description\n      pump_supplier\n      pump_type\n      receipt_no\n      receipt_number\n      is_paid\n      checked\n      approved\n      closed\n      remark\n      checkedBy {\n        id\n        name\n      }\n      concreteType {\n        id\n        name\n        description\n        concreteIngredients {\n          id\n          amount\n          item {\n            id\n            name\n            balance\n            unit_price\n            description\n            measurementUnit {\n              id\n              name\n              abbreviation\n            }\n          }\n        }\n      }\n  }\n}\n"]))),Object(h.a)(d||(d=Object(y.a)(["\n  mutation ($order_quantity: Float!, $customer_name: String!, $customer_address: String, $delivery_date: String, $delivered_date: String, \n    $receipt_number: String, $project_description: String, $account_name: String, $cheque_number: String, $receipt_no: String, $pump_type: String, \n    $pump_supplier: String, $is_paid: Boolean, $unit_price: Float! $concrete_type_id: ID!, $remark: String) {\n    createWorkOrder(input: {\n      order_quantity: $order_quantity,\n      customer_name: $customer_name,\n      customer_address: $customer_address,\n      receipt_number: $receipt_number,\n      project_description: $project_description,\n      receipt_no: $receipt_no,\n      delivery_date: $delivery_date,\n      delivered_date: $delivered_date,\n      pump_type: $pump_type,\n      pump_supplier: $pump_supplier,\n      concrete_type_id: $concrete_type_id\n      is_paid: $is_paid\n      unit_price: $unit_price\n      account_name: $account_name\n      cheque_number: $cheque_number\n      remark: $remark\n    }) {\n      id\n      work_order_no\n    }\n  }\n"]))),Object(h.a)(_||(_=Object(y.a)(["\n  mutation ($id: ID!, $order_quantity: Float!, $customer_name: String!, $customer_address: String, $delivery_date: String, $delivered_date: String, \n    $receipt_number: String, $project_description: String, $account_name: String, $cheque_number: String, $receipt_no: String, $pump_type: String, \n    $pump_supplier: String, $is_paid: Boolean, $unit_price: Float! $concrete_type_id: ID!, $remark: String) {\n    updateWorkOrder(input: {\n      id: $id\n      order_quantity: $order_quantity,\n      customer_name: $customer_name,\n      customer_address: $customer_address,\n      receipt_number: $receipt_number,\n      project_description: $project_description,\n      receipt_no: $receipt_no,\n      delivery_date: $delivery_date,\n      delivered_date: $delivered_date,\n      pump_type: $pump_type,\n      pump_supplier: $pump_supplier,\n      concrete_type_id: $concrete_type_id\n      is_paid: $is_paid\n      unit_price: $unit_price\n      account_name: $account_name\n      cheque_number: $cheque_number\n      remark: $remark\n    }) {\n      id\n      work_order_no\n    }\n  }\n"]))),Object(h.a)(m||(m=Object(y.a)(["\n  mutation($id: ID!) {\n    deleteWorkOrder(id: $id) {\n      id\n    }\n  }\n"]))),Object(h.a)(l||(l=Object(y.a)(["\n  mutation ($id: ID!) {\n      approveWorkOrder (id: $id) {\n          id\n          approved\n          work_order_no\n          approvedBy {\n              id\n              name\n          }\n      }\n  }\n"]))),Object(h.a)($||($=Object(y.a)(["\n  mutation ($id: ID!) {\n      checkWorkOrder (id: $id) {\n          id\n          checked\n          work_order_no\n          checkedBy {\n              id\n              name\n          }\n      }\n  }\n"]))),Object(h.a)(v||(v=Object(y.a)(["\n  mutation ($id: ID!, $closing_remark: String!) {\n    closeWorkOrder (id: $id, closing_remark: $closing_remark) {\n          id\n          checked\n          work_order_no\n          checkedBy {\n              id\n              name\n          }\n      }\n  }\n"])))},631:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return $})),t.d(n,"d",(function(){return v})),t.d(n,"c",(function(){return y}));var r,o,c,d,_=t(91),m=t(58),l=Object(m.a)(r||(r=Object(_.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permissions(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        code\n        description\n        resource\n        is_active\n     }\n    }   \n  }\n"]))),$=Object(m.a)(o||(o=Object(_.a)(["\n  mutation($name: String!, $code: String, $resource: String, $description: String) {\n    createPermission(input: {name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),v=Object(m.a)(c||(c=Object(_.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $resource: String, $description: String) {\n    updatePermission(input: {id: $id, name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),y=Object(m.a)(d||(d=Object(_.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},707:function(e,n,t){"use strict";t.r(n);var r=t(264),o=t(273),c=t(628),d=t(262),_=t(656),m=t(189),l=t(638),$=t(593),v=t(120),y=(t(36),t(13),t(87),t(12),t(11),t(4),t(15),t(9),t(16),t(1)),h=t(106),f=t(631);t(626),t(617);function k(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(n){Object(y.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var j={props:["_permission"],data:function(){return{editMode:!1,valid:!1,permission:{}}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._permission)||void 0===e?void 0:e.id)}},methods:O(O({},Object(h.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.editMode?this.updateConcrete(e):this.registerConcrete(e)},registerConcrete:function(e){var n=this;console.log(this.permission),this.$apollo.mutate({mutation:f.b,variables:this.permission}).then((function(t){t.data;n.successNotification("Permission  registered successfully!"),e.target.reset(),n.$emit("on-close-permission-form")})).catch((function(e){console.log(e)}))},updateConcrete:function(e){var n=this;this.$apollo.mutate({mutation:f.d,variables:this.permission}).then((function(t){t.data;n.successNotification("Permission  updated successfully!"),e.target.reset(),n.$emit("on-close-permission-form")})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){this._permission&&(this.editMode=!1,this.permission=O({},this._permission))},deep:!0,immediate:!0}}},S=t(79),component=Object(S.a)(j,(function(){var e=this,n=e._self._c;return n(r.a,[n("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[n(l.a,{staticClass:"mx-0"},[n("div",[n(o.c,{staticClass:"text-h5 pb-0"},[e._v("\n          Permission  Registration Form\n        ")]),e._v(" "),n("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),n($.a),e._v(" "),e.disableForm?n("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(n){e.editMode=!0}}},[n(m.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),n("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),n(_.a,{staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(n){return n.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(n){e.valid=n},expression:"valid"}},[n("div",{staticClass:"mx-5"},[n(l.a,{staticClass:"px-3"},[n(c.a,{attrs:{cols:"12"}},[n(v.a,{attrs:{label:"Name",outlined:"",required:""},model:{value:e.permission.name,callback:function(n){e.$set(e.permission,"name",n)},expression:"permission.name"}})],1),e._v(" "),n(c.a,{attrs:{cols:"12",md:"6"}},[n(v.a,{attrs:{label:"Code",outlined:"",required:""},model:{value:e.permission.code,callback:function(n){e.$set(e.permission,"code",n)},expression:"permission.code"}})],1),e._v(" "),n(c.a,{attrs:{cols:"12",md:"6"}},[n(v.a,{attrs:{label:"Resource",outlined:"",required:""},model:{value:e.permission.resource,callback:function(n){e.$set(e.permission,"resource",n)},expression:"permission.resource"}})],1),e._v(" "),n(c.a,{attrs:{cols:"12"}},[n(v.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:e.permission.description,callback:function(n){e.$set(e.permission,"description",n)},expression:"permission.description"}})],1)],1)],1),e._v(" "),n(d.a,{staticClass:"my-2"}),e._v(" "),n(c.a,{staticClass:"d-flex"},[n("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(n){return e.$emit("on-close-permission-form")}}},[n("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),n($.a),e._v(" "),e.disableForm?e._e():n("div",[e.editMode?n("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[n("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):n("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[n("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);