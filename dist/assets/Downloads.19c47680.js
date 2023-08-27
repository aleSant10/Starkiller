import{_ as u}from"./TagViewer.b07ca85a.js";import{_ as r}from"./DateTimeDisplay.97700a4a.js";import{_ as i}from"./ExpansionPanelFilter.5838fe52.js";import{_ as d}from"./ExpansionPanelSearch.7dcac59a.js";import{_ as g}from"./TooltipButton.6022e185.js";import{_ as p}from"./ListPageTop.dad49f81.js";import{e as m,u as _,f as h,g as f,b as v,c as b}from"./download-api.dfe5301b.js";import{l as w}from"./index.e9f2ede5.js";import{h as y}from"./moment.9709ab41.js";import{g as P}from"./tag-api.5e19879c.js";import{n as T,r as l,b as x,c,k as D,a as k,l as B,V as S}from"./index.154e9cc6.js";import{_ as $}from"./VExpansionPanels.1f915cd7.js";import{_ as F}from"./VPagination.90d5be16.js";import{_ as C}from"./VDataTable.71ce8bb9.js";import{_ as G}from"./VSelect.27a57f2b.js";import"./VTooltip.b258437e.js";import"./index.27090f0f.js";import"./VExpansionPanelHeader.d8fbc23c.js";import"./VBreadcrumbs.a2278375.js";const E={name:"Downloads",components:{DateTimeDisplay:r,ExpansionPanelSearch:d,ExpansionPanelFilter:i,TagViewer:u,ListPageTop:p,TooltipButton:g},data(){return{moment:y,items:[],currentPage:1,totalPages:1,totalItems:0,itemsPerPage:10,sortBy:"updated_at",sortDesc:!0,loading:!1,search:"",breads:[{text:"Downloads",disabled:!0,href:"/downloads"}],headers:[{text:"Id",value:"id",sortable:!1},{text:"Filename",value:"filename",sortable:!0},{text:"Location",value:"location",sortable:!0},{text:"Size",value:"size",sortable:!0},{text:"Created At",value:"created_at",sortable:!0},{text:"Updated At",value:"updated_at",sortable:!0},{text:"Tags",value:"tags",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],isSelecting:!1,selectedFile:null,selectedSources:[],sources:[{label:"Upload",value:"upload"},{label:"Agent Task",value:"agent_task"},{label:"Agent File",value:"agent_file"},{label:"Stager",value:"stager"}],selectedTags:[],tags:[],debouncedGetDownloads:w(this.getDownloads,500)}},watch:{search(){this.debouncedGetDownloads()},selectedSources(){this.debouncedGetDownloads()},selectedTags(){this.debouncedGetDownloads()}},async mounted(){this.selectedSources=this.sources.map(s=>s.value),this.getTags(),this.getDownloads()},methods:{async getTags(){const s=await P({page:1,limit:-1,sources:"download"}),e=[];s.records.forEach(t=>{e.find(o=>o.name===t.name&&o.value===t.value)||e.push(t)}),this.tags=e},deleteTag(s,e){m(s.id,e.id).then(()=>{s.tags=s.tags.filter(t=>t.id!==e.id),this.getTags()}).catch(t=>this.$snack.error(`Error: ${t}`))},updateTag(s,e){_(s.id,e).then(t=>{const a=s.tags.findIndex(o=>o.id===t.id);s.tags.splice(a,1,t),this.getTags(),this.$snack.success("Tag updated")}).catch(t=>this.$snack.error(`Error: ${t}`))},addTag(s,e){h(s.id,e).then(t=>{s.tags.push(t),this.getTags()}).catch(t=>this.$snack.error(`Error: ${t}`))},async getDownloads(){this.loading=!0;const s=await f({page:this.currentPage,limit:this.itemsPerPage,query:this.search,sources:this.selectedSources,sortBy:this.sortBy,sortOrder:this.sortDesc?"desc":"asc",tags:this.selectedTags});this.items=s.records,this.currentPage=s.page,this.totalPages=s.total_pages,this.totalItems=s.total,this.loading=!1},downloadFile(s){v(s.id)},async refreshDownloads(){this.debouncedGetDownloads()},handleFileImport(){this.isSelecting=!0,window.addEventListener("focus",()=>{this.isSelecting=!1},{once:!0}),this.$refs.uploader.click()},async onFileChanged(s){this.selectedFile=s.target.files[0];const e=new FormData;e.append("file",this.selectedFile),await b(e),this.$snack.success("Upload complete"),this.debouncedGetDownloads()},handlePageChange(s){this.currentPage=s,this.debouncedGetDownloads()},handleOptionsChange(s){this.currentPage=s.page,this.itemsPerPage=s.itemsPerPage,s.sortBy.length>0?(this.sortBy=s.sortBy[0],this.sortDesc=s.sortDesc[0]):(this.sortBy="updated_at",this.sortDesc=!0),this.debouncedGetDownloads()},formatBytes(s,e){if(s===0)return"0 Bytes";const t=1024,a=e||2,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(s)/Math.log(t));return`${parseFloat((s/t**n).toFixed(a))} ${o[n]}`}}};var I=function(){var e=this,t=e._self._c;return t("div",[t(p,{attrs:{breads:e.breads,"show-create":!1,"show-refresh":!0,"show-delete":!1},on:{refresh:e.refreshDownloads}},[t("template",{slot:"extra-stuff"},[t(g,{attrs:{icon:"fa-upload",text:"Upload"},on:{click:e.handleFileImport}}),t("input",{ref:"uploader",staticClass:"d-none",attrs:{type:"file","aria-label":"uploader"},on:{change:e.onFileChanged}})],1)],2),t("div",{staticStyle:{display:"flex","flex-direction":"row","flex-wrap":"wrap"}},[t(l,{staticClass:"mr-2 pa-2",staticStyle:{"flex-basis":"250px"},attrs:{elevation:"2",outlined:""}},[t($,{staticClass:"mb-6",attrs:{multiple:""}},[t(d,{attrs:{title:"Search",label:"Search"},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}}),t(i,{attrs:{title:"Source",label:"label","item-key":"value","item-value":"value",items:e.sources},model:{value:e.selectedSources,callback:function(a){e.selectedSources=a},expression:"selectedSources"}}),t(i,{attrs:{title:"Tags",label:"label","item-key":"id","item-value":"label",items:e.tags,"empty-default":!0},model:{value:e.selectedTags,callback:function(a){e.selectedTags=a},expression:"selectedTags"}})],1)],1),t(l,{staticStyle:{flex:"1","min-width":"0"},attrs:{elevation:"2",outlined:""}},[t(F,{attrs:{length:e.totalPages,"total-visible":10},on:{input:e.handlePageChange},model:{value:e.currentPage,callback:function(a){e.currentPage=a},expression:"currentPage"}}),t(C,{attrs:{headers:e.headers,items:e.items,"item-key":"id","sort-by":e.sortBy,"sort-desc":e.sortDesc,"server-items-length":e.totalItems,"footer-props":{"items-per-page-options":[10,25,50,100]},"items-per-page":e.itemsPerPage,loading:e.loading,page:e.currentPage},on:{"update:itemsPerPage":function(a){e.itemsPerPage=a},"update:items-per-page":function(a){e.itemsPerPage=a},"update:options":e.handleOptionsChange},scopedSlots:e._u([{key:"item.updated_at",fn:function({item:a}){return[t(r,{attrs:{timestamp:a.updated_at}})]}},{key:"item.created_at",fn:function({item:a}){return[t(r,{attrs:{timestamp:a.created_at}})]}},{key:"item.size",fn:function({item:a}){return[t("span",[e._v(e._s(e.formatBytes(a.size)))])]}},{key:"item.tags",fn:function({item:a}){return[t(u,{attrs:{tags:a.tags},on:{"update-tag":function(o){return e.updateTag(a,...arguments)},"delete-tag":function(o){return e.deleteTag(a,...arguments)},"new-tag":function(o){return e.addTag(a,...arguments)}}})]}},{key:"item.actions",fn:function({item:a}){return[t(G,{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function({on:o,attrs:n}){return[t(x,e._g(e._b({attrs:{text:"",icon:"","x-small":""}},"v-btn",n,!1),o),[t(c,[e._v("fa-ellipsis-v")])],1)]}}],null,!0)},[t(D,{staticClass:"ml-2 mr-2"},[t(k),t(B,{attrs:{link:""},on:{click:function(o){return e.downloadFile(a)}}},[t(S,[t(c,[e._v("fa-download")]),e._v(" Download ")],1)],1)],1)],1)]}}])})],1)],1)],1)},z=[],A=T(E,I,z,!1,null,null,null,null);const se=A.exports;export{se as default};