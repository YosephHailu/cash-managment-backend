(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{599:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return y})),n.d(e,"e",(function(){return C})),n.d(e,"f",(function(){return k})),n.d(e,"c",(function(){return O}));var c,r,l,o,d,h,_=n(91),v=n(58),m=Object(v.a)(c||(c=Object(_.a)(["\n  query($page: Int!, $per_page: Int!) {\n    bankAccounts(first: $per_page, page: $page) {\n      data {\n         id\n         account_number\n         initial_balance\n         balance\n         description\n         bank_id\n         branch\n         check_image_url\n         check_template_data\n         bank {\n          id\n          name\n         }\n      }\n    }   \n  }\n"]))),f=Object(v.a)(r||(r=Object(_.a)(["\n  query($id: ID!) {\n    bankAccount(id: $id) {\n      id\n      account_number\n      initial_balance\n      balance\n      description\n      bank_id\n      branch\n      check_image_url\n      check_template_data\n      total_payment\n      total_deposit\n      payments {\n        id\n        to\n        amount_in_words\n        transaction_date\n        bank_account_id\n        reason\n        project\n        payment_method\n        transaction_amount\n        voided\n        voided_date\n        voided_reason\n        payment_date\n        payment_pending\n        bankAccount {\n          id\n          account_number\n          check_image_url\n          check_template_data\n          bank {\n            id\n            name\n          }\n        }\n      }\n      deposits {\n        id\n        transaction_amount\n        transaction_date\n        bank_account_id\n        reference_no\n        check_type\n        currency\n        project\n        reason\n        bankAccount {\n          id\n          account_number\n          bank {\n            id\n            name\n          }\n        }\n      }\n      bank {\n        id\n        name\n      }\n    }\n  }\n"]))),y=Object(v.a)(l||(l=Object(_.a)(["\n  mutation($account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n    $check_image: Upload) {\n    createBankAccount(input: {account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, balance: $balance,\n       description: $description, check_image: $check_image}) {\n      id\n      account_number\n    }\n  }\n"]))),C=Object(v.a)(o||(o=Object(_.a)(["\n  mutation($id: ID!, $account_number: String!, $bank_id: ID!, $branch: String!, $initial_balance: Float!, $balance: Float!, $description: String, \n  $check_image: Upload, $check_template_data: JSON) {\n    updateBankAccount(input: {id: $id, account_number: $account_number, bank_id: $bank_id branch: $branch, initial_balance: $initial_balance, \n      balance: $balance, description: $description, check_image: $check_image, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),k=Object(v.a)(d||(d=Object(_.a)(["\n  mutation($id: ID!, $check_template_data: JSON) {\n    updateBankAccountTemplate(input: {id: $id, check_template_data: $check_template_data}) {\n      id\n      account_number\n    }\n  }\n"]))),O=Object(v.a)(h||(h=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteBankAccount(id: $id) {\n        id\n        account_number\n    }   \n  }\n"])))},668:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c,r=n(91),l=n(58),o=Object(l.a)(c||(c=Object(r.a)(["\n  query {\n    dashboardStatistic {\n      total_balance\n      total_deposited\n      total_payment\n      barChartData {\n        label\n        backgroundColor\n        barChartDatasets {\n            label\n            value\n        }\n      }\n    }\n  }\n"])))},814:function(t,e,n){"use strict";n.r(e);n(36),n(12),n(13),n(11),n(4),n(15),n(9),n(16);var c,r=n(1),l=(n(68),n(668)),o=n(599),d=(n(76),n(40)),h=n(2);function _(t,e,n,r){t(e,n),void 0!==r&&r.emit(c.ChartRendered)}function v(t,e){t.destroy(),void 0!==e&&e.emit(c.ChartDestroyed)}function m(t,e){const n=t;return void 0!==n&&"plugins"in n&&void 0!==e&&Object.keys(e).length>0&&(n.plugins={...n.plugins,...e}),n}function f(t,e,n){const c=[];t.datasets=e.datasets.map((e=>{const r=t.datasets.find((t=>t[n]===e[n]));return r&&e.data&&!c.includes(r)?(c.push(r),Object.assign(r,e),r):{...e}}))}!function(t){t.ChartRendered="chart:rendered",t.ChartUpdated="chart:updated",t.ChartDestroyed="chart:destroyed",t.LabelsUpdated="labels:updated"}(c||(c={}));const y=(t,e,n)=>Object(h.b)({props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:t},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Object,default:()=>{}}},setup(t,r){d.f.register(n);const l=Object(h.h)(null),o=Object(h.g)(null);function y(data,n){if(null!==l.value&&v(Object(h.i)(l.value),r),null===o.value)throw new Error("Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components");{const c=function(data,t){const e={labels:void 0===data.labels?[]:[...data.labels],datasets:[]};return f(e,{...data},t),e}(data,t.datasetIdKey),r=o.value.getContext("2d");null!==r&&(l.value=new d.f(r,{type:e,data:Object(h.d)(data)?new Proxy(c,{}):c,options:m(n,t.plugins)}))}}function C(e,n){const o=Object(h.d)(e)?Object(h.i)(e):{...e},d=Object(h.d)(n)?Object(h.i)(n):{...n};if(Object.keys(d).length>0){const e=Object(h.i)(l.value),n=function(t,e){const n=t.datasets.map((t=>t.label)),c=e.datasets.map((t=>t.label));return e.datasets.length===t.datasets.length&&n.every(((t,e)=>t===c[e]))}(o,d);n&&null!==e?(f(null==e?void 0:e.data,o,t.datasetIdKey),void 0!==o.labels&&function(t,e,n){t.data.labels=e,void 0!==n&&n.emit(c.LabelsUpdated)}(e,o.labels,r),function(t,e){t.update(),void 0!==e&&e.emit(c.ChartUpdated)}(e,r)):(null!==e&&v(e,r),_(y,t.chartData,t.chartOptions,r))}else null!==l.value&&v(Object(h.i)(l.value),r),_(y,t.chartData,t.chartOptions,r)}return Object(h.j)((()=>t.chartData),((t,e)=>C(t,e)),{deep:!0}),Object(h.f)((()=>{"datasets"in t.chartData&&t.chartData.datasets.length>0&&_(y,t.chartData,t.chartOptions,r)})),Object(h.e)((()=>{null!==l.value&&v(Object(h.i)(l.value),r)})),()=>Object(h.c)("div",{style:t.styles,class:t.cssClasses},[Object(h.c)("canvas",{id:t.chartId,width:t.width,height:t.height,ref:o})])}}),C=y("bar-chart","bar",d.b);d.g,d.i,d.l,d.n,d.o,d.d,d.p;function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var O={components:{Bar:C},middleware:["authenticated"],data:function(){return{search:"",calories:"",dashboardStatistic:{barChartData:[]},bankAccounts:{},chart_data:{labels:["All","Pending","Approved"],datasets:[{label:"Orders",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]},chart_options:{responsive:!0,maintainAspectRatio:!1}}},apollo:{bankAccounts:{query:o.a,variables:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},{page:1,per_page:10,checked:!1})},fetchPolicy:"cache-and-network"},dashboardStatistic:{query:l.a,fetchPolicy:"cache-and-network"}},computed:{computedBarChartLabels:function(){console.log(this.dashboardStatistic.barChartData.map((function(t){return t.value}))),this.chart_data.datasets=this.dashboardStatistic.barChartData.map((function(t){var e={label:t.label,backgroundColor:t.backgroundColor,data:t.barChartDatasets.map((function(t){return t.value}))};return console.log(e),e}))}},created:function(){}},x=O,j=n(79),component=Object(j.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 ma-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 col-lg-4 col-12"},[e("div",{staticClass:"v-card--material pa-3 blue lighten-5 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex grow flex-wrap"},[t._m(0),t._v(" "),e("div",{staticClass:"ml-6"},[e("div",{staticClass:"ml-auto"},[e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Total Account Balance\n              ")]),t._v(" "),e("h3",{staticClass:"display-1 font-weight-light text--primary"},[t._v("\n                "+t._s(t._f("currency")(t.dashboardStatistic.total_balance))+" "),e("small")])])])]),t._v(" "),t._m(1),t._v(" "),e("i",{staticClass:"v-icon notranslate ml-2 mr-1 mdi mdi-clock theme--light",staticStyle:{"font-size":"16px"},attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("Just Updated")])])]),t._v(" "),e("div",{staticClass:"col-sm-6 col-lg-4 col-12"},[e("div",{staticClass:"v-card--material green lighten-5 pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex grow flex-wrap"},[t._m(2),t._v(" "),e("div",{staticClass:"ml-6"},[e("div",{staticClass:"ml-auto"},[e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Total Deposited\n              ")]),t._v(" "),e("h3",{staticClass:"display-1 font-weight-light text--primary"},[t._v("\n                "+t._s(t._f("currency")(t.dashboardStatistic.total_deposited))+" "),e("small")])])])]),t._v(" "),t._m(3),t._v(" "),e("i",{staticClass:"v-icon notranslate ml-2 mr-1 mdi mdi-clock theme--light",staticStyle:{"font-size":"16px"},attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("Just Updated")])])]),t._v(" "),e("div",{staticClass:"col-sm-6 col-lg-4 col-12"},[e("div",{staticClass:"v-card--material red lighten-5 pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex grow flex-wrap"},[t._m(4),t._v(" "),e("div",{staticClass:"ml-6"},[e("div",{staticClass:"ml-auto"},[e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Total Payments\n              ")]),t._v(" "),e("h3",{staticClass:"display-1 font-weight-light text--primary"},[t._v("\n                "+t._s(t._f("currency")(t.dashboardStatistic.total_payment))+" "),e("small")])])])]),t._v(" "),t._m(5),t._v(" "),e("i",{staticClass:"v-icon notranslate ml-2 mr-1 mdi mdi-clock theme--light",staticStyle:{"font-size":"16px"},attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("Just Updated")])])]),t._v(" "),e("div",{staticClass:"col-md-6 col-12"},[e("div",{staticClass:"v-card--material pa-3 px-5 py-3 v-card v-sheet theme--light v-card--material--has-heading"},[t._m(6),t._v(" "),e("div",{staticClass:"v-card__text mt-3"},[e("div",{staticClass:"v-data-table theme--light"},[e("div",{staticClass:"v-data-table__wrapper"},[e("table",[t._m(7),t._v(" "),t._m(8),t._v(" "),e("tbody",t._l(t.bankAccounts.data,(function(n,c){return e("tr",{key:n.id},[e("td",{staticClass:"text-start"},[t._v(t._s(n.bank.name))]),t._v(" "),e("td",{staticClass:"text-start"},[t._v(t._s(n.account_number))]),t._v(" "),e("td",{staticClass:"text-center blue-grey lighten-5"},[t._v("\n                      "+t._s(t._f("currency")(n.balance))+"\n                    ")])])})),0)])])])])])]),t._v(" "),e("div",{staticClass:"col-12 col-md-6"},[e("Bar",{attrs:{chartData:t.chart_data,options:t.chart_options}})],1),t._v("\n    "+t._s(t.computedBarChartLabels)+"\n  ")])])}),[function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 info pa-7",staticStyle:{"max-height":"90px",width:"auto"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chart-areaspline theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"px-0 col col-12 mt-5"},[t("hr",{staticClass:"v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 green pa-7",staticStyle:{"max-height":"90px",width:"auto"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-calendar-multiple-check theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"px-0 col col-12 mt-5"},[t("hr",{staticClass:"v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 red pa-7",staticStyle:{"max-height":"90px",width:"auto"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-archive-cancel theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"px-0 col col-12 mt-5"},[t("hr",{staticClass:"v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex grow flex-wrap"},[e("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 warning pa-7",staticStyle:{width:"100%"}},[e("div",{staticClass:"display-2 font-weight-light"},[t._v("Account Balance")]),t._v(" "),e("div",{staticClass:"subtitle-1 font-weight-light"},[t._v("\n              Account Balances\n            ")])])])},function(){var t=this,e=t._self._c;return e("colgroup",[e("col",{}),t._v(" "),e("col",{}),t._v(" "),e("col",{}),t._v(" "),e("col",{}),t._v(" "),e("col",{})])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"v-data-table-header"},[e("tr",[e("th",{staticClass:"text-start blue-grey lighten-4 text-uppercase",attrs:{role:"columnheader",scope:"col","aria-label":"ID","aria-sort":"none"}},[e("span",[t._v("Bank Name")])]),t._v(" "),e("th",{staticClass:"text-start blue-grey lighten-4 text-uppercase",attrs:{role:"columnheader",scope:"col","aria-label":"Name","aria-sort":"none"}},[e("span",[t._v("Account Number")])]),t._v(" "),e("th",{staticClass:"text-center text-uppercase blue-grey lighten-5",attrs:{role:"columnheader",scope:"col","aria-label":"Salary","aria-sort":"none"}},[e("b",[t._v("Balance")])])])])}],!1,null,null,null);e.default=component.exports}}]);