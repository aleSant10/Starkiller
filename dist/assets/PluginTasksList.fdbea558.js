import{_ as g}from"./TagViewer.b07ca85a.js";import{_ as h}from"./DateTimeDisplay.97700a4a.js";import{_}from"./TooltipButton.6022e185.js";import{n as f,bL as I,bM as w,bN as P,z as p,bO as l,bP as $,b as c,b9 as q,c as u,k as C,l as o,V as r,a as O,i as D}from"./index.154e9cc6.js";import{h as m}from"./moment.9709ab41.js";import{l as T}from"./index.e9f2ede5.js";import{A as B}from"./ansi_up.bcd3942b.js";import{D as b}from"./download-stager.85a6b476.js";import{b as S,d as U}from"./download-api.dfe5301b.js";import{_ as A}from"./VPagination.90d5be16.js";import{_ as G}from"./VDataTable.71ce8bb9.js";import{_ as F}from"./VSwitch.4adac3f4.js";import{_ as j}from"./VSelect.27a57f2b.js";import{_ as d}from"./ExpansionPanelFilter.5838fe52.js";import{_ as k}from"./ExpansionPanelSearch.7dcac59a.js";import{_ as x}from"./AdvancedTable.65916e9e.js";import{_ as v}from"./ListPageTop.dad49f81.js";import{g as E}from"./tag-api.5e19879c.js";const L={name:"PluginTasksTable",components:{DateTimeDisplay:h,TagViewer:g,TooltipButton:_},mixins:[b],props:{plugin:{type:Object,required:!1,default:null},refreshTasks:{type:Boolean,default:!1},hideColumns:{type:Array,default:()=>[]},selectedPlugins:{type:Array,default:()=>[]},selectedUsers:{type:Array,default:()=>[]},selectedTags:{type:Array,default:()=>[]},search:{type:String,default:""},noFilters:{type:Boolean,default:!1}},data(){return{tasks:[],currentPage:1,totalPages:1,totalItems:0,itemsPerPage:10,loading:!1,moment:m,sortBy:"updated_at",sortDesc:!0,refreshInterval:null,expandedTasks:{},debouncedGetTasks:T(this.getTasks,500)}},computed:{headers(){return[{text:"Task ID",value:"id",sortable:!0},{text:"Status",value:"status",sortable:!0},{text:"Plugin",value:"plugin_id",sortable:!0},{text:"Task Input",value:"input",sortable:!1},{text:"Task Name",value:"task_name",sortable:!1},{text:"User",value:"username",sortable:!1},{text:"Updated At",value:"updated_at",sortable:!0},{text:"Tags",value:"tags",sortable:!1,width:400},{text:"Actions",value:"actions",sortable:!1}].filter(t=>!this.hideColumns.includes(t.value))}},watch:{refreshTasks:{handler(t){t?(this.debouncedGetTasks?this.debouncedGetTasks():this.getTasks(),this.refreshInterval=setInterval(()=>{this.debouncedGetTasks()},8e3)):clearInterval(this.refreshInterval)},immediate:!0},currentPage(){this.debouncedGetTasks()},plugin(){this.debouncedGetTasks()},selectedPlugins(){this.debouncedGetTasks()},selectedUsers(){this.debouncedGetTasks()},selectedTags(){this.debouncedGetTasks()},search(){this.debouncedGetTasks()}},async mounted(){this.debouncedGetTasks()},beforeDestroy(){clearInterval(this.refreshInterval)},methods:{stripAnsi(t){return t.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g,"")},isAnsi(t){return this.stripAnsi(t)!==t},ansiToHtml(t){return new B().ansi_to_html(t)},deleteTag(t,e){I(t.plugin_id,t.id,e.id).then(()=>{this.$set(t,"tags",t.tags.filter(s=>s.id!==e.id)),this.$emit("refresh-tags")}).catch(s=>this.$snack.error(`Error: ${s}`))},updateTag(t,e){w(t.plugin_id,t.id,e).then(s=>{const n=t.tags.findIndex(a=>a.id===s.id);t.tags.splice(n,1,s),this.$emit("refresh-tags"),this.$snack.success("Tag updated")}).catch(s=>this.$snack.error(`Error: ${s}`))},addTag(t,e){P(t.plugin_id,t.id,e).then(s=>{this.$set(t,"tags",[...t.tags,s]),this.$emit("refresh-tags")}).catch(s=>this.$snack.error(`Error: ${s}`))},truncateMessage(t){return t?t.length>30?`${t.substr(0,30)}...`:t:""},updateTaskBackgroundColor(t){t.backgroundColor==="black"?t.backgroundColor="white":t.backgroundColor="black",this.expandedTasks[t.uniqueId].backgroundColor=t.backgroundColor,p.set(this.tasks,this.tasks.indexOf(t),t)},isDownload(t){return t.downloads&&t.downloads.length>0},downloadFile(t){S(t.id)},hasOutput(t){return!!t.output},async downloadInput(t){if(t.input){if(!this.expandedTasks[t.uniqueId]){const e=await l(t.agent_id,t.id);this.expandedTasks[t.uniqueId]=e}this.downloadText(this.expandedTasks[t.uniqueId].full_input,`${t.uniqueId}-input.txt`)}},downloadOutput(t){t.output&&this.downloadText(t.output,`${t.uniqueId}-output.txt`)},async copyInput(t){if(t.input){if(!this.expandedTasks[t.uniqueId]){const e=await l(t.plugin_id,t.id);this.expandedTasks[t.uniqueId]=e}try{navigator.clipboard.writeText(this.expandedTasks[t.uniqueId].full_input)}catch{this.$snack.warn("Failed to copy to clipboard. You must be on HTTPS or localhost.")}}},copyOutput(t){if(t.output)try{navigator.clipboard.writeText(t.output)}catch{this.$snack.warn("Failed to copy to clipboard. You must be on HTTPS or localhost.")}},imageData(t,e){var n;const s=(n=this.expandedTasks[t.uniqueId])==null?void 0:n.downloads;if(s){const a=s.find(i=>i.id===e.id);if(a)return a.image}return null},async getImagesForTask(t){var e;if(!this.expandedTasks[t.uniqueId]){const s=await l(t.plugin_id,t.id);this.expandedTasks[t.uniqueId]={...this.expandedTasks[t.uniqueId],...s}}for(let s=0;s<t.downloads.length;s++){const n=t.downloads[s];if(!((e=this.expandedTasks[t.uniqueId].downloads[n.id])!=null&&e.image)&&n.filename.match(/[^/]+(jpg|jpeg|png|gif)$/)){const a=await U(n.id);this.expandedTasks[t.uniqueId].downloads[s].image=a}}p.set(this.tasks,this.tasks.indexOf(t),t)},async toggleSeeFullInput(t){if(t.expandedInput)this.expandedTasks[t.uniqueId].expandedInput=!1,t.expandedInput=!1;else{const e=await l(t.plugin_id,t.id);this.expandedTasks[t.uniqueId]={...this.expandedTasks[t.uniqueId],...e,expandedInput:!0},t.expandedInput=!0}p.set(this.tasks,this.tasks.indexOf(t),t)},handlePageChange(){this.debouncedGetTasks()},handleOptionsChange(t){this.currentPage=t.page,this.itemsPerPage=t.itemsPerPage,t.sortBy.length>0?(this.sortBy=t.sortBy[0],this.sortDesc=t.sortDesc[0]):(this.sortBy="id",this.sortDesc=!0),this.debouncedGetTasks()},async getTasks(){if(!this.noFilters&&(this.selectedPlugins.length===0||this.selectedUsers.length===0)){this.tasks=[],this.currentPage=1,this.totalPages=1,this.totalItems=0;return}this.loading=!0;let t=null;this.selectedPlugins.length>0&&(t=this.selectedPlugins);const e=await $(t,{page:this.currentPage,limit:this.itemsPerPage,sortBy:this.sortBy,sortOrder:this.sortDesc?"desc":"asc",users:this.selectedUsers,tags:this.selectedTags,search:this.search});this.currentPage=e.page,this.totalPages=e.total_pages,this.totalItems=e.total,this.tasks=e.records.map(s=>(s.uniqueId=`${s.plugin_id}-${s.id}`,this.expandedTasks[s.uniqueId]||(this.expandedTasks[s.uniqueId]={}),this.expandedTasks[s.uniqueId].expandedInput&&(s.expandedInput=!0),this.expandedTasks[s.uniqueId].backgroundColor=this.expandedTasks[s.uniqueId].backgroundColor||"black",s.backgroundColor=this.expandedTasks[s.uniqueId].backgroundColor,this.isAnsi(s.output||"")&&(this.expandedTasks[s.uniqueId].htmlOutput=this.ansiToHtml(s.output)),s)),this.tasks=e.records,this.loading=!1}}};var H=function(){var e=this,s=e._self._c;return s("div",[s(A,{attrs:{length:e.totalPages,"total-visible":10},on:{input:e.handlePageChange},model:{value:e.currentPage,callback:function(n){e.currentPage=n},expression:"currentPage"}}),s(G,{attrs:{headers:e.headers,items:e.tasks,"item-key":"uniqueId","sort-by":e.sortBy,"sort-desc":e.sortDesc,"server-items-length":e.totalItems,"footer-props":{"items-per-page-options":[10,25,50,100]},"items-per-page":e.itemsPerPage,loading:e.loading,page:e.currentPage,"show-expand":""},on:{"update:itemsPerPage":function(n){e.itemsPerPage=n},"update:items-per-page":function(n){e.itemsPerPage=n},"update:options":e.handleOptionsChange},scopedSlots:e._u([{key:"expanded-item",fn:function({headers:n,item:a}){return[s("td",{attrs:{colspan:n.length}},[s("div",[s("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[s("div",[s(_,{attrs:{icon:a.expandedInput?"fa-minus":"fa-plus",text:"See Full Input","x-small":""},on:{click:function(i){return e.toggleSeeFullInput(a)}}}),a.expandedInput?s("span",[e._v("Showing full input")]):e._e()],1),s(F,{attrs:{"false-value":"white","true-value":"black",label:"Dark Background"},on:{change:function(i){return e.updateTaskBackgroundColor(a)}},model:{value:e.expandedTasks[a.uniqueId].backgroundColor,callback:function(i){e.$set(e.expandedTasks[a.uniqueId],"backgroundColor",i)},expression:"expandedTasks[item.uniqueId].backgroundColor"}})],1),s("p",[s("b",[e._v("Task Input:")])]),s("p",{class:"mono "+(e.expandedTasks[a.uniqueId].backgroundColor==="white"?"font-black":"font-white"),style:"background-color: "+e.expandedTasks[a.uniqueId].backgroundColor+";"},[e._v(" "+e._s(a.expandedInput?e.expandedTasks[a.uniqueId].full_input:a.input)+" ")]),s("p",[s("b",[e._v("Task Output:")])]),a.downloads.length>0&&a.downloads.some(i=>i.filename.match(/[^/]+(jpg|jpeg|png|gif)$/))?s("div",[s(c,{attrs:{text:"","x-small":""},on:{click:function(i){return e.getImagesForTask(a)}}},[e._v(" View Images ")]),s("div",e._l(a.downloads,function(i){return s(q,{key:i.id,attrs:{src:e.imageData(a,i),alt:i.filename,"max-width":700,contain:""}})}),1)],1):e._e(),s("div",{class:"mono "+(e.expandedTasks[a.uniqueId].backgroundColor==="white"?"font-black":"font-white"),style:"background-color: "+e.expandedTasks[a.uniqueId].backgroundColor+";"},[e.expandedTasks[a.uniqueId].htmlOutput?s("div",{domProps:{innerHTML:e._s(e.expandedTasks[a.uniqueId].htmlOutput)}}):s("div",[e._v(" "+e._s(a.output)+" ")])])])])]}},{key:"item.status",fn:function({item:n}){return[e._v(" "+e._s(n.status)+" ")]}},{key:"item.input",fn:function({item:n}){return[s("span",[e._v(e._s(e.truncateMessage(n.input)))])]}},{key:"item.task_name",fn:function({item:n}){return[s("span",[e._v(e._s(n.module_name==null?n.task_name:n.module_name))])]}},{key:"item.updated_at",fn:function({item:n}){return[s(h,{attrs:{timestamp:n.updated_at}})]}},{key:"item.tags",fn:function({item:n}){return[s(g,{attrs:{tags:n.tags},on:{"update-tag":function(a){return e.updateTag(n,...arguments)},"delete-tag":function(a){return e.deleteTag(n,...arguments)},"new-tag":function(a){return e.addTag(n,...arguments)}}})]}},{key:"item.actions",fn:function({item:n}){return[s(j,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:a,attrs:i}){return[s(c,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",i,!1),a),[s(u,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[s(C,{staticClass:"ml-2 mr-2"},[s(o,{key:"downloadInput",attrs:{link:""},on:{click:function(a){return e.downloadInput(n)}}},[s(r,[s(u,[e._v("fa-download")]),e._v(" Download Input ")],1)],1),e.hasOutput(n)?s(o,{key:"downloadOutput",attrs:{link:""},on:{click:function(a){return e.downloadOutput(n)}}},[s(r,[s(u,[e._v("fa-download")]),e._v(" Download Output ")],1)],1):e._e(),s(o,{key:"clipboardInput",attrs:{link:""},on:{click:function(a){return e.copyInput(n)}}},[s(r,[s(u,[e._v("fa-paperclip")]),e._v(" Copy Input to Clipboard ")],1)],1),e.hasOutput(n)?s(o,{key:"clipboardOutput",attrs:{link:""},on:{click:function(a){return e.copyOutput(n)}}},[s(r,[s(u,[e._v("fa-paperclip")]),e._v(" Copy Output to Clipboard ")],1)],1):e._e(),s(O),e._l(n.downloads,function(a){return s(o,{key:"download-"+a.id,attrs:{link:""},on:{click:function(i){return e.downloadFile(a)}}},[s(r,[s(u,[e._v("fa-download")]),e._v(" Download "+e._s(a.filename)+" ")],1)],1)})],2)],1)]}}])})],1)},M=[],V=f(L,H,M,!1,null,null,null,null);const y=V.exports;const N={name:"PluginTasksList",components:{AdvancedTable:x,ExpansionPanelFilter:d,ExpansionPanelSearch:k,PluginTasksTable:y,ListPageTop:v},mixins:[b],props:{plugin:{type:Object,required:!1,default:null},refreshTasks:{type:Boolean,default:!1},active:{type:Boolean,default:!1}},data(){return{breads:[{text:"Plugins",disabled:!0,href:"/plugins"},{text:"Tasks",disabled:!0,href:"/plugins?tab=tasks"}],tasks:[],search:"",loading:!1,moment:m,selectedPlugins:[],selectedUsers:[],selectedTags:[],tags:[],debouncedGetTasks:T(this.getTasks,500)}},computed:{...D({plugins:t=>t.plugin.plugins,users:t=>{const e=t.user.users;return e.push({id:0,username:"Non-User"}),e}})},watch:{plugin:{handler(t){t&&(this.selectedPlugins=[t.session_id])},immediate:!0}},async mounted(){await Promise.all([this.$store.dispatch("plugin/getPlugins"),this.$store.dispatch("user/getUsers"),this.getTags()])},methods:{async getTags(){const t=await E({page:1,limit:-1,sources:"plugin_task"}),e=[];t.records.forEach(s=>{e.find(a=>a.name===s.name&&a.value===s.value)||e.push(s)}),this.tags=e},getTasks(){this.$refs.pluginTaskTable.debouncedGetTasks()}}};var R=function(){var e=this,s=e._self._c;return s("div",[e.active?s(v,{attrs:{breads:e.breads,"show-create":!1,"show-refresh":!0,"show-delete":!1},on:{refresh:e.getTasks}}):e._e(),s(x,{scopedSlots:e._u([{key:"filters",fn:function(){return[s(k,{attrs:{title:"Search",label:"Search"},model:{value:e.search,callback:function(n){e.search=n},expression:"search"}}),e.plugin?e._e():s(d,{attrs:{title:"Plugins",label:"name","item-key":"id","item-value":"id",items:e.plugins},model:{value:e.selectedPlugins,callback:function(n){e.selectedPlugins=n},expression:"selectedPlugins"}}),s(d,{attrs:{title:"Users",label:"username","item-key":"id","item-value":"id",items:e.users},model:{value:e.selectedUsers,callback:function(n){e.selectedUsers=n},expression:"selectedUsers"}}),s(d,{attrs:{title:"Tags",label:"label","item-key":"id","item-value":"label",items:e.tags,"empty-default":!0},model:{value:e.selectedTags,callback:function(n){e.selectedTags=n},expression:"selectedTags"}})]},proxy:!0},{key:"table",fn:function(){return[s(y,{ref:"pluginTaskTable",attrs:{plugin:e.plugin,"refresh-tasks":e.refreshTasks,"hide-columns":["id","task_name"],"selected-plugins":e.selectedPlugins,"selected-users":e.selectedUsers,"selected-tags":e.selectedTags,search:e.search},on:{"refresh-tags":e.getTags}})]},proxy:!0}])})],1)},z=[],Y=f(N,R,z,!1,null,null,null,null);const ce=Y.exports;export{ce as _};