(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["bypasses"],{"65b0":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("list-page-top",{attrs:{breads:e.breads,"show-create":!0,"show-refresh":!0,"show-delete":e.showDelete},on:{create:e.create,delete:e.deleteBypasses,refresh:e.getBypasses}}),s("v-data-table",{attrs:{headers:e.headers,items:e.bypasses,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"name",dense:"","show-select":"","sort-by":e.sortBy,"sort-desc":e.sortDesc},on:{"update:sortBy":function(t){e.sortBy=t},"update:sort-by":function(t){e.sortBy=t},"update:sortDesc":function(t){e.sortDesc=t},"update:sort-desc":function(t){e.sortDesc=t}},scopedSlots:e._u([{key:"item.name",fn:function(t){var a=t.item;return[s("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"bypassEdit",params:{id:a.id}}}},[e._v(" "+e._s(a.name)+" ")])]}},{key:"item.updated_at",fn:function(t){var a=t.item;return[s("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[s("span",e._g({},r),[e._v(e._s(e.moment(a.updated_at).fromNow()))])]}}],null,!0)},[s("span",[e._v(e._s(e.moment(a.updated_at).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.actions",fn:function(t){var a=t.item;return[s("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[s("v-btn",e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",r,!1),a),[s("v-icon",[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[s("v-list",{staticClass:"ml-2 mr-2"},[s("v-list-item",{key:"view",attrs:{link:""}},[s("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:{name:"bypassEdit",params:{id:a.id}}}},[s("v-list-item-title",[s("v-icon",[e._v("fa-binoculars")]),e._v(" View ")],1)],1)],1),s("v-list-item",{key:"copy",attrs:{to:{name:"bypassNew",params:{copy:!0,id:a.id}},link:""}},[s("v-list-item-title",[s("v-icon",[e._v("fa-clone")]),e._v(" Copy ")],1)],1),s("v-divider",{staticClass:"pb-4"}),s("v-list-item",{key:"delete",attrs:{link:""},on:{click:function(t){return e.deleteBypass(a)}}},[s("v-list-item-title",[s("v-icon",[e._v("fa-trash-alt")]),e._v(" Delete ")],1)],1)],1)],1)]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},r=[],n=s("1da1"),o=s("5530"),i=(s("96cf"),s("b0c0"),s("159b"),s("c1df")),c=s.n(i),l=s("828a"),u=s("2f62"),d={name:"Bypasses",components:{ListPageTop:l["a"]},data:function(){return{breads:[{text:"Bypasses",disabled:!0,href:"/bypasses"}],headers:[{text:"Name",value:"name"},{text:"Updated At",value:"updated_at"},{text:"Actions",value:"actions",sortable:!1}],sortBy:"name",sortDesc:!1,moment:c.a,selected:[]}},computed:Object(o["a"])(Object(o["a"])({},Object(u["c"])({bypasses:function(e){return e.bypass.bypasses}})),{},{showDelete:function(){return this.selected.length>0}}),mounted:function(){this.getBypasses()},methods:{getBypasses:function(){this.$store.dispatch("bypass/getBypasses")},create:function(){this.$router.push({name:"bypassNew"})},view:function(e){this.$router.push({name:"bypassEdit",params:{id:e.id}})},deleteBypass:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$root.$confirm("Delete","Are you sure you want to delete bypass ".concat(e.name,"?"),{color:"red"});case 2:if(!s.sent){s.next=4;break}t.$store.dispatch("bypass/deleteBypass",e.id);case 4:case"end":return s.stop()}}),s)})))()},deleteBypasses:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$root.$confirm("Delete","Are you sure you want to delete ".concat(e.selected.length," bypasses?"),{color:"red"});case 2:if(!t.sent){t.next=4;break}e.selected.forEach((function(t){e.$store.dispatch("bypass/deleteBypass",t.id)}));case 4:case"end":return t.stop()}}),t)})))()}}},p=d,f=s("2877"),m=s("6544"),v=s.n(m),y=s("8336"),h=s("8fea"),b=s("ce7e"),_=s("132d"),w=s("8860"),g=s("da13"),k=s("5d23"),x=s("e449"),B=s("3a2f"),D=Object(f["a"])(p,a,r,!1,null,null,null);t["default"]=D.exports;v()(D,{VBtn:y["a"],VDataTable:h["a"],VDivider:b["a"],VIcon:_["a"],VList:w["a"],VListItem:g["a"],VListItemTitle:k["c"],VMenu:x["a"],VTooltip:B["a"]})},"828a":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("portal",{attrs:{to:"app-bar"}},[s("div",{staticClass:"v-toolbar__content",staticStyle:{width:"100%"}},[s("v-breadcrumbs",{attrs:{items:e.breads}}),s("v-spacer"),e._t("extra-stuff"),s("div",[e.showDelete?s("v-btn",{staticClass:"mr-2",attrs:{color:"error",text:""},on:{click:function(t){return e.$emit("delete")}}},[e._v(" "+e._s(e.deleteText)+" "),s("v-icon",{attrs:{right:""}},[e._v(" fa-trash-alt ")])],1):e._e(),e.showRefresh?s("v-btn",{staticClass:"mr-2",attrs:{disabled:e.refreshLoading,color:"primary",text:""},on:{click:function(t){return e.$emit("refresh")}}},[e._v(" "+e._s(e.refreshText)+" "),s("v-icon",{attrs:{right:""}},[e._v(" fa-redo "+e._s(e.refreshLoading?"fa-spin":"")+" ")])],1):e._e(),e.showCreate?s("v-btn",{staticClass:"mr-2",attrs:{color:"primary",rounded:""},on:{click:function(t){return e.$emit("create")}}},[e._v(" "+e._s(e.createText)+" "),s("v-icon",{attrs:{right:""}},[e._v(" fa-plus-square ")])],1):e._e()],1)],2)])},r=[],n={name:"ListPageTop",props:{deleteText:{type:String,default:"Delete"},refreshText:{type:String,default:"Refresh"},createText:{type:String,default:"Create"},showDelete:{type:Boolean,default:!1},showRefresh:{type:Boolean,default:!1},showCreate:{type:Boolean,default:!1},refreshLoading:{type:Boolean,default:!1},breads:{type:Array,default:function(){return[]}}}},o=n,i=s("2877"),c=s("6544"),l=s.n(c),u=s("2bc5"),d=s("8336"),p=s("132d"),f=s("2fa4"),m=Object(i["a"])(o,a,r,!1,null,null,null);t["a"]=m.exports;l()(m,{VBreadcrumbs:u["a"],VBtn:d["a"],VIcon:p["a"],VSpacer:f["a"]})}}]);
//# sourceMappingURL=bypasses.e1ee6a44.js.map