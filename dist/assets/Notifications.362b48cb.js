import{_ as a}from"./ListPageTop.2a204a11.js";import{e as _,n as r,b as e,c,f as l,g as p,h as u,V as f,i as m,j as d,k as v,l as g}from"./index.85262dd3.js";import"./VBreadcrumbs.32f4f2d0.js";const x={name:"Notifications",components:{ListPageTop:a},computed:{..._({notifications:s=>s.application.notifications})},beforeDestroy(){this.$store.dispatch("application/markAllNotificationsAsRead")},methods:{clearNotifications(){this.$store.dispatch("application/clearNotifications")}}};var y=function(){var t=this,n=t._self._c;return n("div",[n(a,{attrs:{breads:[{text:"Notifications",disabled:!0,to:"/notifications"}]},scopedSlots:t._u([{key:"extra-stuff",fn:function(){return[n(e,{attrs:{color:"primary",text:""},on:{click:t.clearNotifications}},[t._v(" Clear "),n(c,{attrs:{right:""}},[t._v(" mdi-delete ")])],1)]},proxy:!0}])}),n(l,{staticClass:"mr-2 pa-2",staticStyle:{"flex-basis":"250px"},attrs:{elevation:"2",outlined:""}},[n(p,[t._l(t.notifications,function(o,i){return[n(u,{key:`list-'${i}`,style:o.read?"":"background-color: rgba(118, 127, 134, 0.5);",attrs:{to:o.route,link:""}},[n(f,[n(m,[t._v(" "+t._s(o.title)+" ")]),n(d,[t._v(" "+t._s(o.text)+" ")])],1),n(v,[o.route?n(e,{attrs:{color:"primary",text:"",to:o.route}},[t._v(" "+t._s(o.buttonText)+" ")]):t._e()],1)],1),n(g,{key:`divider-${i}`})]})],2)],1)],1)},b=[],h=r(x,y,b,!1,null,null,null,null);const L=h.exports;export{L as default};