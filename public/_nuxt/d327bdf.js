(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{692:function(e,t,n){"use strict";n.r(t);var r=n(174),l=n(263),c=n(796),o=n(262),d=n(189),_=n(259),v=n(172),m=n(84),f=n(267),h=n(655),x=(n(41),n(274),{props:["roles","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Name",class:"blue-grey lighten-3",value:"name"},{text:"Code",class:"blue-grey lighten-3",value:"code"},{text:"Action",class:"blue-grey lighten-3 col-2",value:"menu"}]}}}),k=n(79),component=Object(k.a)(x,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.roles,"items-per-page":25,search:e.search,expanded:e.expanded,"show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"item.is_active",fn:function(n){var r=n.item;return[t(l.a,[e._v(e._s(r.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(n){var r=n.item;return[t(l.a,[e._v(e._s(r.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var l=n.item;return[t(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,c=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),l),[t(d.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(_.a,{staticClass:"col-12 px-0"},[t(v.a,{on:{click:function(t){return e.$emit("on-role-detail-clicked",l)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(m.b,[e._v("Detail")])],1),e._v(" "),t(o.a),e._v(" "),l.checked?e._e():t(v.a,{on:{click:function(t){return e.$emit("on-role-delete-clicked",l)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(m.b,{staticClass:"pr-9"},[e._v("Delete")])],1)],1)],1)]}},{key:"expanded-item",fn:function(n){var r=n.headers,c=n.item;return[t("td",{staticClass:"px-0 blue-grey lighten-5",attrs:{colspan:r.length}},[t(h.a,{staticClass:"blue-grey lighten-5",scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",{staticClass:"blue-grey lighten-4"},[t("th",{staticClass:"text-center"},[t("b",[e._v("RESOURCES")])]),e._v(" "),t("th",{staticClass:"text-center"},[t("b",[e._v("ACTIONS")])])])]),e._v(" "),t("tbody",e._l(c.rolePermissions,(function(n){return t("tr",{key:n.ID},[t("td",{staticClass:"text-center"},[e._v(e._s(n.permission.resource))]),e._v(" "),t("td",{staticClass:"text-center"},e._l(n.permissionTypes,(function(n){return t(l.a,{key:n.id,staticClass:"ma-2",attrs:{close:""}},[e._v("\n                  "+e._s(n.action)+"\n                ")])})),1)])})),0)]},proxy:!0}],null,!0)})],1)]}}])})}),[],!1,null,null,null);t.default=component.exports}}]);