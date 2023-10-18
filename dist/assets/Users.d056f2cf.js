import{_ as o}from"./ListPageTop.2a204a11.js";import{e as i,aH as u,bz as _,n as d}from"./index.85262dd3.js";import{h as l}from"./moment.9709ab41.js";import{_ as m}from"./VDataTable.125536b6.js";import{_ as c}from"./VSelect.8543571f.js";import{_ as p}from"./VTooltip.0c849a74.js";import{_ as f}from"./VSwitch.8a27782c.js";import"./VBreadcrumbs.32f4f2d0.js";const h={name:"Users",components:{ListPageTop:o},data(){return{moment:l,breads:[{text:"Users",disabled:!0,href:"/users"}],headers:[{text:"Name",value:"username"},{text:"Is Admin",value:"is_admin"},{text:"Actions",value:"actions",sortable:!1}]}},computed:{...i({users:t=>t.user.users}),...u({isAdmin:"application/isAdmin"})},mounted(){this.getUsers()},methods:{create(){this.$router.push({name:"userNew"})},async disableUser(t){_(t).catch(e=>{this.$snack.error(`Error: ${e}`),t.enabled=!t.enabled})},getUsers(){this.$store.dispatch("user/getUsers")}}};var b=function(){var e=this,n=e._self._c;return n("div",[n(o,{attrs:{breads:e.breads,"show-create":e.isAdmin,"show-refresh":!0,"show-delete":!1},on:{create:e.create,refresh:e.getUsers}}),n(m,{attrs:{headers:e.headers,items:e.users,dense:""},scopedSlots:e._u([{key:"item.username",fn:function({item:s}){return[e.isAdmin?n("router-link",{staticStyle:{color:"inherit"},attrs:{to:{name:"userEdit",params:{id:s.id}}}},[e._v(" "+e._s(s.username)+" ")]):n("span",[e._v(e._s(s.username))])]}},{key:"item.is_admin",fn:function({item:s}){return[n(c,{attrs:{disabled:""},model:{value:s.is_admin,callback:function(r){e.$set(s,"is_admin",r)},expression:"item.is_admin"}})]}},{key:"item.actions",fn:function({item:s}){return[e.isAdmin?n(p,{attrs:{disabled:!s.admin,top:""},scopedSlots:e._u([{key:"activator",fn:function({on:r}){return[n("div",e._g({staticStyle:{"max-width":"120px"}},r),[n(f,e._g({attrs:{disabled:s.admin,label:"Enabled"},on:{change:function(a){return e.disableUser(s)}},model:{value:s.enabled,callback:function(a){e.$set(s,"enabled",a)},expression:"item.enabled"}},r))],1)]}}],null,!0)},[n("span",[e._v("Cannot disable admin user")])]):e._e()]}}])})],1)},v=[],g=d(h,b,v,!1,null,null,null,null);const E=g.exports;export{E as default};