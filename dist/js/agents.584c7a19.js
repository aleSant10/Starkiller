(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["agents"],{1925:function(e,t,s){},"52ff":function(e,t,s){"use strict";var n=s("1925"),a=s.n(n);a.a},"828a":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("portal",{attrs:{to:"app-bar"}},[s("div",{staticClass:"v-toolbar__content",staticStyle:{width:"100%"}},[s("v-breadcrumbs",{attrs:{items:e.breads}}),s("v-spacer"),e._t("extra-stuff"),s("div",[e.showDelete?s("v-btn",{staticClass:"mr-2",attrs:{color:"error",text:""},on:{click:function(t){return e.$emit("delete")}}},[e._v(" "+e._s(e.deleteText)+" "),s("v-icon",{attrs:{right:""}},[e._v(" fa-trash-alt ")])],1):e._e(),e.showRefresh?s("v-btn",{staticClass:"mr-2",attrs:{disabled:e.refreshLoading,color:"primary",text:""},on:{click:function(t){return e.$emit("refresh")}}},[e._v(" "+e._s(e.refreshText)+" "),s("v-icon",{attrs:{right:""}},[e._v(" fa-redo "+e._s(e.refreshLoading?"fa-spin":"")+" ")])],1):e._e(),e.showCreate?s("v-btn",{staticClass:"mr-2",attrs:{color:"primary",rounded:""},on:{click:function(t){return e.$emit("create")}}},[e._v(" "+e._s(e.createText)+" "),s("v-icon",{attrs:{right:""}},[e._v(" fa-plus-square ")])],1):e._e()],1)],2)])},a=[],i={name:"ListPageTop",props:{deleteText:{type:String,default:"Delete"},refreshText:{type:String,default:"Refresh"},createText:{type:String,default:"Create"},showDelete:{type:Boolean,default:!1},showRefresh:{type:Boolean,default:!1},showCreate:{type:Boolean,default:!1},refreshLoading:{type:Boolean,default:!1},breads:{type:Array,default:function(){return[]}}}},r=i,o=s("2877"),l=s("6544"),c=s.n(l),u=s("2bc5"),d=s("8336"),h=s("132d"),f=s("2fa4"),v=Object(o["a"])(r,n,a,!1,null,null,null);t["a"]=v.exports;c()(v,{VBreadcrumbs:u["a"],VBtn:d["a"],VIcon:h["a"],VSpacer:f["a"]})},9392:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("list-page-top",{attrs:{breads:e.breads,"show-create":!1,"show-refresh":!0,"show-delete":e.showDelete,"delete-text":"Kill"},on:{delete:e.killAgents,refresh:e.getAgents}}),s("div",{staticClass:"ml-3 mr-3 align-center",staticStyle:{display:"flex"}},[s("v-switch",{attrs:{label:"Hide Stale Agents"},model:{value:e.hideStaleAgentsCheckbox,callback:function(t){e.hideStaleAgentsCheckbox=t},expression:"hideStaleAgentsCheckbox"}}),s("v-switch",{staticClass:"pl-4",attrs:{label:"Hide Archived Agents"},model:{value:e.hideArchivedAgentsCheckbox,callback:function(t){e.hideArchivedAgentsCheckbox=t},expression:"hideArchivedAgentsCheckbox"}}),s("v-spacer"),s("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[s("v-btn",e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",a,!1),n),[s("v-icon",[e._v("mdi-format-columns")])],1)]}}]),model:{value:e.showHeaderMenu,callback:function(t){e.showHeaderMenu=t},expression:"showHeaderMenu"}},[s("v-list",{staticStyle:{"overflow-y":"auto"},attrs:{"max-height":"400px"}},[s("v-list-item",[s("v-checkbox",{attrs:{label:"Select All"},model:{value:e.selectedAll,callback:function(t){e.selectedAll=t},expression:"selectedAll"}})],1),s("v-divider",{staticClass:"pb-4"}),e._l(e.selectableHeaders,(function(t,n){return s("v-list-item",{key:n},[s("v-checkbox",{attrs:{label:t.text,value:t},model:{value:e.selectedHeadersTemp,callback:function(t){e.selectedHeadersTemp=t},expression:"selectedHeadersTemp"}})],1)}))],2),s("v-card",{staticClass:"pt-4"},[s("v-btn",{staticClass:"mb-4",attrs:{text:""},on:{click:function(t){e.showHeaderMenu=!1}}},[e._v(" Cancel ")]),s("v-btn",{staticClass:"ml-4 mb-4",attrs:{text:""},on:{click:e.submitHeaderForm}},[e._v(" Save ")])],1)],1)],1),s("v-data-table",{attrs:{"item-class":e.rowClass,headers:e.headers,items:e.sortedAgents,"footer-props":{itemsPerPageOptions:[5,10,15,20,50,100]},"items-per-page":15,"item-key":"session_id",dense:"","show-select":""},scopedSlots:e._u([{key:"item.name",fn:function(t){var n=t.item;return[s("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[1===n.high_integrity?s("v-icon",e._g({attrs:{small:""}},a),[e._v(" fa-user-cog ")]):e._e()]}}],null,!0)},[s("span",[e._v("Elevated Process")])]),s("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"agentEdit",params:{id:n.session_id}}}},[e._v(" "+e._s(n.name)+" ")])]}},{key:"item.lastseen_time",fn:function(t){var n=t.item;return[s("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[s("span",e._g({},a),[e._v(e._s(e.moment(n.lastseen_time).fromNow()))])]}}],null,!0)},[s("span",[e._v(e._s(e.moment(n.lastseen_time).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.checkin_time",fn:function(t){var n=t.item;return[s("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[s("span",e._g({},a),[e._v(e._s(e.moment(n.checkin_time).fromNow()))])]}}],null,!0)},[s("span",[e._v(e._s(e.moment(n.checkin_time).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.listener",fn:function(t){var n=t.item;return[s("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"listenerEdit",params:{id:n.listener}}}},[e._v(" "+e._s(n.listener)+" ")])]}},{key:"item.process_name",fn:function(t){var n=t.item;return[s("span",[e._v(e._s(e.truncateMessage(n.process_name)))])]}},{key:"item.actions",fn:function(t){var n=t.item;return[s("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,a=t.attrs;return[s("v-btn",e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",a,!1),n),[s("v-icon",[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[s("v-list",{staticClass:"ml-2 mr-2"},[s("v-list-item",{key:"view",attrs:{link:""}},[s("router-link",{staticClass:"text-decoration-none",staticStyle:{color:"inherit"},attrs:{to:{name:"agentEdit",params:{id:n.session_id}}}},[s("v-list-item-title",[s("v-icon",[e._v("fa-binoculars")]),e._v(" View ")],1)],1)],1),s("v-list-item",{key:"popout",attrs:{link:""},on:{click:function(t){return e.popout(n)}}},[s("v-list-item-title",[s("v-icon",[e._v(" fa-external-link-alt ")]),e._v(" Popout ")],1)],1),s("v-divider",{staticClass:"pb-4"}),s("v-list-item",{key:"delete",attrs:{link:""},on:{click:function(t){return e.killAgent(n)}}},[s("v-list-item-title",[s("v-icon",[e._v("fa-trash-alt")]),e._v(" Kill ")],1)],1)],1)],1)]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},a=[],i=s("1da1"),r=s("2909"),o=s("5530"),l=(s("96cf"),s("159b"),s("4de4"),s("c740"),s("fb6a"),s("b0c0"),s("99af"),s("c1df")),c=s.n(l),u=s("2f62"),d=s("828a"),h={name:"Agents",components:{ListPageTop:d["a"]},data:function(){return{breads:[{text:"Agents",disabled:!0,href:"/agents"}],headersFull:[{text:"Name",value:"name",defaultHeader:!0,alwaysShow:!0,order:1},{text:"Last Seen",value:"lastseen_time",defaultHeader:!0,alwaysShow:!0,order:2},{text:"First Seen",value:"checkin_time",defaultHeader:!0,alwaysShow:!0,order:3},{text:"Listener",value:"listener",order:4},{text:"Hostname",value:"hostname",defaultHeader:!0,order:5},{text:"Process",value:"process_name",defaultHeader:!0,order:6},{text:"Process ID",value:"process_id",order:7},{text:"Architecture",value:"architecture",defaultHeader:!0,order:8},{text:"Language",value:"language",defaultHeader:!0,order:9},{text:"Language Version",value:"language_version",order:10},{text:"Username",value:"username",defaultHeader:!0,order:11},{text:"Working Hours",value:"working_hours",order:12},{text:"Exteneral IP",value:"external_ip",order:13},{text:"Internal IP",value:"internal_ip",defaultHeader:!0,order:14},{text:"Delay",value:"delay",order:15},{text:"Jitter",value:"jitter",order:16},{text:"Actions",value:"actions",defaultHeader:!0,alwaysShow:!0,order:17}],selectedHeadersTemp:[],selected:[],showHeaderMenu:!1,moment:c.a}},computed:Object(o["a"])(Object(o["a"])({},Object(u["c"])({agents:function(e){return e.agent.agents},hideStaleAgents:function(e){return e.application.hideStaleAgents},hideArchivedAgents:function(e){return e.application.hideArchivedAgents},selectedHeadersState:function(e){return e.application.agentHeaders}})),{},{selectedAll:{set:function(e){var t=this;this.selectedHeadersTemp=Object(r["a"])(this.staticHeaders),e&&this.headersFull.forEach((function(e){t.selectedHeadersTemp.push(e)}))},get:function(){return this.selectedHeadersTemp.length===this.count}},headers:function(){var e=this;return this.headersFull.filter((function(t){return e.selectedHeaders.findIndex((function(e){return e.text===t.text}))>-1})).sort((function(e,t){return e.order-t.order}))},selectableHeaders:function(){return this.headersFull.filter((function(e){return!e.alwaysShow}))},staticHeaders:function(){return this.headersFull.filter((function(e){return e.alwaysShow}))},sortedAgents:function(){var e=this.agents.slice();return e.sort((function(e,t){return-e.lastseen_time.localeCompare(t.lastseen_time)})),this.hideStaleAgents?e.filter((function(e){return!e.stale})):this.hideArchivedAgents?e.filter((function(e){return!e.archived})):e},showDelete:function(){return this.selected.length>0},hideStaleAgentsCheckbox:{set:function(e){this.$store.dispatch("application/hideStaleAgents",e)},get:function(){return this.hideStaleAgents}},hideArchivedAgentsCheckbox:{set:function(e){this.$store.dispatch("application/hideArchivedAgents",e)},get:function(){return this.hideArchivedAgents}},selectedHeaders:{set:function(e){this.$store.dispatch("application/agentHeaders",e)},get:function(){return this.selectedHeadersState}}}),mounted:function(){this.getAgents(),0===this.selectedHeaders.length&&(this.selectedHeaders=this.headersFull.filter((function(e){return!0===e.defaultHeader}))),this.selectedHeadersTemp=Object(r["a"])(this.selectedHeaders)},methods:{submitHeaderForm:function(){this.selectedHeaders=Object(r["a"])(this.selectedHeadersTemp),this.showHeaderMenu=!1},killAgents:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$root.$confirm("Kill Agent","Do you want to kill ".concat(e.selected.length," agents?"),{color:"red"});case 2:if(!t.sent){t.next=6;break}e.selected.forEach((function(t){e.$store.dispatch("agent/killAgent",{name:t.session_id})})),e.$snack.success("".concat(e.selected.length," agents tasked to run TASK_EXIT.")),e.selected=[];case 6:case"end":return t.stop()}}),t)})))()},getAgents:function(){this.$store.dispatch("agent/getAgents")},killAgent:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.$root.$confirm("Kill Agent","Do you want to kill agent ".concat(e.name,"?"),{color:"red"});case 2:if(!s.sent){s.next=5;break}t.$store.dispatch("agent/killAgent",{name:e.session_id}),t.$snack.success("Agent ".concat(e.name," tasked to run TASK_EXIT."));case 5:case"end":return s.stop()}}),s)})))()},popout:function(e){window.open("".concat(window.location.href,"/").concat(e.name,"?hideSideBar=true"),"popup","width=600,height=600")},truncateMessage:function(e){return e?e.length>30?"".concat(e.substr(0,30),"..."):e:""},rowClass:function(e){return e.stale?"warning-row":""}}},f=h,v=(s("52ff"),s("2877")),m=s("6544"),p=s.n(m),g=s("8336"),_=s("b0af"),b=s("ac7c"),w=s("8fea"),k=s("ce7e"),x=s("132d"),A=s("8860"),S=s("da13"),y=s("5d23"),H=s("e449"),C=s("2fa4"),T=s("b73d"),$=s("3a2f"),V=Object(v["a"])(f,n,a,!1,null,null,null);t["default"]=V.exports;p()(V,{VBtn:g["a"],VCard:_["a"],VCheckbox:b["a"],VDataTable:w["a"],VDivider:k["a"],VIcon:x["a"],VList:A["a"],VListItem:S["a"],VListItemTitle:y["c"],VMenu:H["a"],VSpacer:C["a"],VSwitch:T["a"],VTooltip:$["a"]})},"9d01":function(e,t,s){},b73d:function(e,t,s){"use strict";var n=s("15fd"),a=s("5530"),i=(s("0481"),s("ec29"),s("9d01"),s("fe09")),r=s("c37a"),o=s("c3f0"),l=s("0789"),c=s("490a"),u=s("80d2"),d=["title"];t["a"]=i["a"].extend({name:"v-switch",directives:{Touch:o["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({},r["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var e=this.attrs$,t=(e.title,Object(n["a"])(e,d));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(a["a"])(Object(a["a"])({},this.attrs),t)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(a["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(l["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(c["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===u["A"].left&&this.isActive||e.keyCode===u["A"].right&&!this.isActive)&&this.onChange()}}})}}]);
//# sourceMappingURL=agents.584c7a19.js.map