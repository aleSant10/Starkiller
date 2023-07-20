import{_ as k}from"./TooltipButton.560438a3.js";import{h as b}from"./moment.9709ab41.js";import{l as x,_ as P}from"./index.53bfd985.js";import{D as T}from"./download-stager.85a6b476.js";import{b as w,d as q}from"./download-api.72002240.js";import{n as v,w as p,bi as d,bj as C,b as h,aK as $,c as i,k as A,l as u,V as o,a as O,i as U,p as f,j as D,aH as r,o as m}from"./index.69f4bb51.js";import{A as S}from"./ansi_up.a7ad0e9a.js";import{_ as B}from"./VDataTable.b008cb55.js";import{_ as G}from"./VSwitch.4e67fef2.js";import{_ as F}from"./VTooltip.cad8701d.js";import{_ as j}from"./VSelect.d9660f2d.js";import{_ as I}from"./ListPageTop.cd957760.js";import{_ as M,a as c,b as _,c as g}from"./VExpansionPanelHeader.a53d79c3.js";const H={name:"PluginTasksTable",components:{TooltipButton:k},mixins:[T],props:{plugin:{type:Object,required:!1,default:null},refreshTasks:{type:Boolean,default:!1},hideColumns:{type:Array,default:()=>[]},selectedPlugins:{type:Array,default:()=>[]},selectedUsers:{type:Array,default:()=>[]},search:{type:String,default:""},noFilters:{type:Boolean,default:!1}},data(){return{tasks:[],currentPage:1,totalPages:1,totalItems:0,itemsPerPage:10,loading:!1,moment:b,sortBy:"updated_at",sortDesc:!0,refreshInterval:null,expandedTasks:{}}},computed:{headers(){return[{text:"Task ID",value:"id",sortable:!0},{text:"Status",value:"status",sortable:!0},{text:"Plugin",value:"plugin_id",sortable:!0},{text:"Task Input",value:"input",sortable:!1},{text:"Task Name",value:"task_name",sortable:!1},{text:"User",value:"username",sortable:!1},{text:"Updated At",value:"updated_at",sortable:!0},{text:"Actions",value:"actions",sortable:!1}].filter(s=>!this.hideColumns.includes(s.value))}},watch:{refreshTasks:{handler(s){s?(this.debouncedGetTasks?this.debouncedGetTasks():this.getTasks(),this.refreshInterval=setInterval(()=>{this.debouncedGetTasks()},8e3)):clearInterval(this.refreshInterval)},immediate:!0},currentPage(){this.debouncedGetTasks()},plugin(){this.debouncedGetTasks()},selectedPlugins(){this.debouncedGetTasks()},selectedUsers(){this.debouncedGetTasks()},search(){this.debouncedGetTasks()}},async mounted(){this.debouncedGetTasks=x(this.getTasks,500),this.debouncedGetTasks()},beforeDestroy(){clearInterval(this.refreshInterval)},methods:{stripAnsi(s){return s.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g,"")},isAnsi(s){return this.stripAnsi(s)!==s},ansiToHtml(s){return new S().ansi_to_html(s)},truncateMessage(s){return s?s.length>30?`${s.substr(0,30)}...`:s:""},updateTaskBackgroundColor(s){s.backgroundColor==="black"?s.backgroundColor="white":s.backgroundColor="black",this.expandedTasks[s.uniqueId].backgroundColor=s.backgroundColor,p.set(this.tasks,this.tasks.indexOf(s),s)},isDownload(s){return s.downloads&&s.downloads.length>0},downloadFile(s){w(s.id)},hasOutput(s){return!!s.output},async downloadInput(s){if(s.input){if(!this.expandedTasks[s.uniqueId]){const e=await d(s.agent_id,s.id);this.expandedTasks[s.uniqueId]=e}this.downloadText(this.expandedTasks[s.uniqueId].full_input,`${s.uniqueId}-input.txt`)}},downloadOutput(s){s.output&&this.downloadText(s.output,`${s.uniqueId}-output.txt`)},async copyInput(s){if(s.input){if(!this.expandedTasks[s.uniqueId]){const e=await d(s.plugin_id,s.id);this.expandedTasks[s.uniqueId]=e}try{navigator.clipboard.writeText(this.expandedTasks[s.uniqueId].full_input)}catch{this.$snack.warn("Failed to copy to clipboard. You must be on HTTPS or localhost.")}}},copyOutput(s){if(s.output)try{navigator.clipboard.writeText(s.output)}catch{this.$snack.warn("Failed to copy to clipboard. You must be on HTTPS or localhost.")}},imageData(s,e){var n;const t=(n=this.expandedTasks[s.uniqueId])==null?void 0:n.downloads;if(t){const a=t.find(l=>l.id===e.id);if(a)return a.image}return null},async getImagesForTask(s){var e;if(!this.expandedTasks[s.uniqueId]){const t=await d(s.plugin_id,s.id);this.expandedTasks[s.uniqueId]={...this.expandedTasks[s.uniqueId],...t}}for(let t=0;t<s.downloads.length;t++){const n=s.downloads[t];if(!((e=this.expandedTasks[s.uniqueId].downloads[n.id])!=null&&e.image)&&n.filename.match(/[^/]+(jpg|jpeg|png|gif)$/)){const a=await q(n.id);this.expandedTasks[s.uniqueId].downloads[t].image=a}}p.set(this.tasks,this.tasks.indexOf(s),s)},async toggleSeeFullInput(s){if(s.expandedInput)this.expandedTasks[s.uniqueId].expandedInput=!1,s.expandedInput=!1;else{const e=await d(s.plugin_id,s.id);this.expandedTasks[s.uniqueId]={...this.expandedTasks[s.uniqueId],...e,expandedInput:!0},s.expandedInput=!0}p.set(this.tasks,this.tasks.indexOf(s),s)},handlePageChange(){this.debouncedGetTasks()},handleOptionsChange(s){this.currentPage=s.page,this.itemsPerPage=s.itemsPerPage,s.sortBy.length>0?(this.sortBy=s.sortBy[0],this.sortDesc=s.sortDesc[0]):(this.sortBy="id",this.sortDesc=!0),this.debouncedGetTasks()},async getTasks(){if(!this.noFilters&&(this.selectedPlugins.length===0||this.selectedUsers.length===0)){this.tasks=[],this.currentPage=1,this.totalPages=1,this.totalItems=0;return}this.loading=!0;let s=null;this.selectedPlugins.length>0&&(s=this.selectedPlugins);const e=await C(s,{page:this.currentPage,limit:this.itemsPerPage,sortBy:this.sortBy,sortOrder:this.sortDesc?"desc":"asc",users:this.selectedUsers,search:this.search});this.currentPage=e.page,this.totalPages=e.total_pages,this.totalItems=e.total,this.tasks=e.records.map(t=>(t.uniqueId=`${t.plugin_id}-${t.id}`,this.expandedTasks[t.uniqueId]||(this.expandedTasks[t.uniqueId]={}),this.expandedTasks[t.uniqueId].expandedInput&&(t.expandedInput=!0),this.expandedTasks[t.uniqueId].backgroundColor=this.expandedTasks[t.uniqueId].backgroundColor||"black",t.backgroundColor=this.expandedTasks[t.uniqueId].backgroundColor,this.isAnsi(t.output)&&(this.expandedTasks[t.uniqueId].htmlOutput=this.ansiToHtml(t.output)),t)),this.tasks=e.records,this.loading=!1}}};var Y=function(){var e=this,t=e._self._c;return t("div",[t(P,{attrs:{length:e.totalPages,"total-visible":10},on:{input:e.handlePageChange},model:{value:e.currentPage,callback:function(n){e.currentPage=n},expression:"currentPage"}}),t(B,{attrs:{headers:e.headers,items:e.tasks,"item-key":"uniqueId","sort-by":e.sortBy,"sort-desc":e.sortDesc,"server-items-length":e.totalItems,"footer-props":{"items-per-page-options":[10,25,50,100]},"items-per-page":e.itemsPerPage,loading:e.loading,page:e.currentPage,"show-expand":""},on:{"update:itemsPerPage":function(n){e.itemsPerPage=n},"update:items-per-page":function(n){e.itemsPerPage=n},"update:options":e.handleOptionsChange},scopedSlots:e._u([{key:"expanded-item",fn:function({headers:n,item:a}){return[t("td",{attrs:{colspan:n.length}},[t("div",[t("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[t("div",[t(k,{attrs:{icon:a.expandedInput?"fa-minus":"fa-plus",text:"See Full Input","x-small":""},on:{click:function(l){return e.toggleSeeFullInput(a)}}}),a.expandedInput?t("span",[e._v("Showing full input")]):e._e()],1),t(G,{attrs:{"false-value":"white","true-value":"black",label:"Dark Background"},on:{change:function(l){return e.updateTaskBackgroundColor(a)}},model:{value:e.expandedTasks[a.uniqueId].backgroundColor,callback:function(l){e.$set(e.expandedTasks[a.uniqueId],"backgroundColor",l)},expression:"expandedTasks[item.uniqueId].backgroundColor"}})],1),t("p",[t("b",[e._v("Task Input:")])]),t("p",{class:"mono "+(e.expandedTasks[a.uniqueId].backgroundColor==="white"?"font-black":"font-white"),style:"background-color: "+e.expandedTasks[a.uniqueId].backgroundColor+";"},[e._v(" "+e._s(a.expandedInput?e.expandedTasks[a.uniqueId].full_input:a.input)+" ")]),t("p",[t("b",[e._v("Task Output:")])]),a.downloads.length>0&&a.downloads.some(l=>l.filename.match(/[^/]+(jpg|jpeg|png|gif)$/))?t("div",[t(h,{attrs:{text:"","x-small":""},on:{click:function(l){return e.getImagesForTask(a)}}},[e._v(" View Images ")]),t("div",e._l(a.downloads,function(l){return t($,{key:l.id,attrs:{src:e.imageData(a,l),alt:l.filename,"max-width":700,contain:""}})}),1)],1):e._e(),t("div",{class:"mono "+(e.expandedTasks[a.uniqueId].backgroundColor==="white"?"font-black":"font-white"),style:"background-color: "+e.expandedTasks[a.uniqueId].backgroundColor+";"},[e.expandedTasks[a.uniqueId].htmlOutput?t("div",{domProps:{innerHTML:e._s(e.expandedTasks[a.uniqueId].htmlOutput)}}):t("div",[e._v(" "+e._s(a.output)+" ")])])])])]}},{key:"item.status",fn:function({item:n}){return[e._v(" "+e._s(n.status)+" ")]}},{key:"item.input",fn:function({item:n}){return[t("span",[e._v(e._s(e.truncateMessage(n.input)))])]}},{key:"item.task_name",fn:function({item:n}){return[t("span",[e._v(e._s(n.module_name==null?n.task_name:n.module_name))])]}},{key:"item.updated_at",fn:function({item:n}){return[t(F,{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function({on:a}){return[t("span",e._g({},a),[e._v(e._s(e.moment(n.updated_at).fromNow()))])]}}],null,!0)},[t("span",[e._v(e._s(e.moment(n.updated_at).format("MMM D YYYY, h:mm:ss a")))])])]}},{key:"item.actions",fn:function({item:n}){return[t(j,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:l}){return[t(h,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",l,!1),a),[t(i,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[t(A,{staticClass:"ml-2 mr-2"},[t(u,{key:"downloadInput",attrs:{link:""},on:{click:function(a){return e.downloadInput(n)}}},[t(o,[t(i,[e._v("fa-download")]),e._v(" Download Input ")],1)],1),e.hasOutput(n)?t(u,{key:"downloadOutput",attrs:{link:""},on:{click:function(a){return e.downloadOutput(n)}}},[t(o,[t(i,[e._v("fa-download")]),e._v(" Download Output ")],1)],1):e._e(),t(u,{key:"clipboardInput",attrs:{link:""},on:{click:function(a){return e.copyInput(n)}}},[t(o,[t(i,[e._v("fa-paperclip")]),e._v(" Copy Input to Clipboard ")],1)],1),e.hasOutput(n)?t(u,{key:"clipboardOutput",attrs:{link:""},on:{click:function(a){return e.copyOutput(n)}}},[t(o,[t(i,[e._v("fa-paperclip")]),e._v(" Copy Output to Clipboard ")],1)],1):e._e(),t(O),e._l(n.downloads,function(a){return t(u,{key:"download-"+a.id,attrs:{link:""},on:{click:function(l){return e.downloadFile(a)}}},[t(o,[t(i,[e._v("fa-download")]),e._v(" Download "+e._s(a.filename)+" ")],1)],1)})],2)],1)]}}])})],1)},L=[],V=v(H,Y,L,!1,null,null,null,null);const y=V.exports;const R={name:"PluginTasksList",components:{PluginTasksTable:y,ListPageTop:I},mixins:[T],props:{plugin:{type:Object,required:!1,default:null},refreshTasks:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},data(){return{breads:[{text:"Plugins",disabled:!0,href:"/plugins"},{text:"Tasks",disabled:!0,href:"/plugins?tab=tasks"}],tasks:[],search:"",loading:!1,moment:b,selectedPlugins:[],selectedUsers:[]}},computed:{...U({plugins:s=>s.plugin.plugins,users:s=>s.user.users}),selectedAllPlugins:{set(s){s?this.selectedPlugins=this.plugins.map(e=>e.id):this.selectedPlugins=[],this.debouncedGetTasks()},get(){return this.selectedPlugins.length===this.plugins.length}},selectedAllUsers:{set(s){s?this.selectedUsers=this.users.map(e=>e.id):this.selectedUsers=[],this.debouncedGetTasks()},get(){return this.selectedUsers.length===this.users.length}}},async mounted(){this.debouncedGetTasks=x(this.getTasks,500),await Promise.all([this.$store.dispatch("plugin/getPlugins"),this.$store.dispatch("user/getUsers")]),this.selectedPlugins=this.plugins.map(s=>s.id),this.selectedUsers=this.users.map(s=>s.id),this.plugin&&(this.selectedPlugins=[this.plugin.id])},methods:{getTasks(){this.$refs.pluginTaskTable.debouncedGetTasks()}}};var N=function(){var e=this,t=e._self._c;return t("div",[e.active?t(I,{attrs:{breads:e.breads,"show-create":!1,"show-refresh":!0,"show-delete":!1},on:{refresh:e.getTasks}}):e._e(),t("div",{staticStyle:{display:"flex","flex-direction":"row"}},[t(f,{staticClass:"mr-2 pa-2",staticStyle:{width:"300px"},attrs:{elevation:"2",outlined:""}},[t(M,{staticClass:"mb-6",attrs:{multiple:""}},[t(c,[t(_,{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(" Search ")]),t(g,[t(D,{attrs:{label:"Search",outlined:"",dense:"",required:""},model:{value:e.search,callback:function(n){e.search=n},expression:"search"}})],1)],1),e.plugin?e._e():t(c,[t(_,{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(" Plugins ")]),t(g,[t(r,{attrs:{"x-small":"",dense:"",label:"Select All"},model:{value:e.selectedAllPlugins,callback:function(n){e.selectedAllPlugins=n},expression:"selectedAllPlugins"}}),t(m,{staticClass:"pb-4"}),e._l(e.plugins,function(n){return t(r,{key:n.id,attrs:{value:n.id,"x-small":"",dense:"",label:n.name},model:{value:e.selectedPlugins,callback:function(a){e.selectedPlugins=a},expression:"selectedPlugins"}})})],2)],1),t(c,[t(_,{attrs:{"expand-icon":"mdi-menu-down"}},[e._v(" Users ")]),t(g,[t(r,{attrs:{"x-small":"",dense:"",label:"Select All"},model:{value:e.selectedAllUsers,callback:function(n){e.selectedAllUsers=n},expression:"selectedAllUsers"}}),t(m,{staticClass:"pb-4"}),e._l(e.users,function(n){return t(r,{key:n.id,attrs:{value:n.id,"x-small":"",dense:"",label:n.username},model:{value:e.selectedUsers,callback:function(a){e.selectedUsers=a},expression:"selectedUsers"}})})],2)],1)],1)],1),t(f,{staticStyle:{"flex-grow":"1"},attrs:{elevation:"2",outlined:""}},[t(y,{ref:"pluginTaskTable",attrs:{plugin:e.plugin,"refresh-tasks":e.refreshTasks,"hide-columns":["id","task_name"],"selected-plugins":e.selectedPlugins,"selected-users":e.selectedUsers,search:e.search}})],1)],1)],1)},z=[],K=v(R,N,z,!1,null,null,null,null);const ue=K.exports;export{ue as _};
