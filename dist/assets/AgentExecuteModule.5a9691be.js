import{_ as l,a as c}from"./GeneralForm.5e828a8d.js";import{_ as i}from"./TechniqueChips.9b636d05.js";import{_ as r}from"./InfoViewer.1a61095a.js";import{_ as u,a as d,b as m,c as h}from"./ErrorStateAlert.d881b2d7.js";import{i as _,b5 as g,n as p,aH as a,b as o,al as f,p as v,am as k,an as y,aq as x,a as C}from"./index.69f4bb51.js";import{_ as b}from"./VDataTable.b008cb55.js";const I={components:{InfoViewer:r,GeneralForm:l,TechniqueChips:i,ErrorStateAlert:u},props:{agents:{type:Array,default:()=>[]},showSubmit:{type:Boolean,default:!0},moduleName:{type:String,default:""},moduleOptionDefaults:{type:Object,default:()=>{}}},data(){return{loading:!1,selectedModule:"",selectedItem:{},results:[],reset:!0,headers:[{text:"Agent",value:"agent"},{text:"Result",value:"result"}],showDialog:!1,form:{},errorState:!1,ignoreAdminCheck:!1,ignoreLanguageCheck:!1}},computed:{..._({modules:s=>s.module.modules.filter(e=>e.enabled===!0),selectOptions:s=>s.module.modules.filter(e=>e.enabled===!0).map(e=>e.id)}),moduleOptions(){let{options:s}=this.selectedItem;return s=s||{},s&&s.Agent&&delete s.Agent,Object.keys(this.moduleOptionDefaults||{}).forEach(e=>{s[e]&&(s[e].value=this.moduleOptionDefaults[e])}),s},moduleInfo(){return Object.keys(this.selectedItem).length===0?{}:{authors:this.selectedItem.authors,description:this.selectedItem.description,comments:this.selectedItem.comments,extraDetails:[{key:"Language",value:this.selectedItem.language},{key:"MinLanguageVersion",value:this.selectedItem.min_language_version},{key:"Background",value:this.selectedItem.background},{key:"OpsecSafe",value:this.selectedItem.opsec_safe},{key:"NeedsAdmin",value:this.selectedItem.needs_admin},{key:"OutputExtensions",value:this.selectedItem.output_extensions}]}},errorStateMessage(){return`The resource 'module/${this.moduleName}' Not Found or is Disabled.`}},watch:{modules(s){s.length>0&&this.handleSelect(this.moduleName)},selectedModule(s){this.emitModuleChange(s)},moduleName:{immediate:!0,handler(s){this.selectedModule=s,this.handleSelect(s)}}},async mounted(){this.$store.dispatch("module/getModules")},methods:{async handleSelect(s){if(this.errorState=!1,s===""||s==null){this.reset=!1,this.selectedItem={},setTimeout(()=>{this.reset=!0},500);return}const e=this.modules.find(t=>t.id===s);this.reset=!1,this.selectedItem=e||{},Object.keys(this.selectedItem).length===0&&(this.errorState=!0),setTimeout(()=>{this.reset=!0},500)},rowClass(s){return s.status==="rejected"?"red":""},emitModuleChange(s){this.$emit("moduleChange",s)},validate(){return this.$refs.generalform.$refs.form.validate()},async create(){if(this.agents.length<1||this.loading||!this.validate())return;this.loading=!0;const s=await Promise.allSettled(this.agents.map(e=>g(this.selectedModule,{...this.form,Agent:e},this.ignoreAdminCheck,this.ignoreLanguageCheck)));if(s.some(e=>e.status==="rejected")){const e=s.reduce((t,n)=>(t[n.status].push(n),t),{rejected:[],fulfilled:[]});this.agents.length>1?(this.$snack.warn(`Module failed to execute for ${e.rejected.length} out of ${this.agents.length} agents.`),this.results=s,this.showDialog=!0):this.$snack.error(`Error: ${s[0].reason.error}`)}else{const e=this.agents.length>1?`${this.agents.length} agents.`:`${this.agents[0]}.`;this.$snack.info(`Module execution queued for ${e}`),this.selectedItem={},this.selectedModule="",this.$emit("submitted")}this.loading=!1}}};var w=function(){var e=this,t=e._self._c;return t("div",[e.errorState?t(u,{attrs:{"resource-id":e.moduleName,"resource-type":"module",message:e.errorStateMessage}}):t("div",{staticStyle:{padding:"0 10px 10px 10px"}},[t(r,{staticClass:"info-viewer",attrs:{info:e.moduleInfo}}),t("span",{staticClass:"mr-2 mb-4"},[e._v("Executing on Agents: "+e._s(e.agents.join(", ")))]),t(i,{attrs:{techniques:e.selectedItem.techniques}}),t(c,{attrs:{items:e.selectOptions,loading:!e.reset,placeholder:"Please enter a module name",outlined:"",dense:"",clearable:""},on:{change:e.handleSelect},model:{value:e.selectedModule,callback:function(n){e.selectedModule=n},expression:"selectedModule"}}),e.selectedItem.opsec_safe===!1?t(d,{attrs:{type:"warning"}},[t(m,{attrs:{align:"center"}},[t(h,{staticClass:"grow",staticStyle:{"word-wrap":"word-break",width:"500px"}},[e._v(" This module is not opsec safe. ")])],1)],1):e._e(),Object.keys(e.selectedItem).length>0?t("div",{staticStyle:{display:"flex","flex-direction":"row"}},[t(a,{staticClass:"pa-1",attrs:{label:"Ignore Admin Check",color:"primary"},model:{value:e.ignoreAdminCheck,callback:function(n){e.ignoreAdminCheck=n},expression:"ignoreAdminCheck"}}),t(a,{staticClass:"pa-1",attrs:{label:"Ignore Language Version Check",color:"primary"},model:{value:e.ignoreLanguageCheck,callback:function(n){e.ignoreLanguageCheck=n},expression:"ignoreLanguageCheck"}})],1):e._e(),e.reset?t(l,{ref:"generalform",attrs:{options:e.moduleOptions},model:{value:e.form,callback:function(n){e.form=n},expression:"form"}}):e._e(),e.showSubmit?t(o,{attrs:{loading:e.loading,color:"primary"},on:{click:e.create}},[e._v(" Submit ")]):e._e(),t(f,{ref:"nameDialog",attrs:{"max-width":"900px"},model:{value:e.showDialog,callback:function(n){e.showDialog=n},expression:"showDialog"}},[t(v,[t(k,[t("span",{staticClass:"headline"},[e._v("Execution Result")])]),t(y,[t(b,{attrs:{dense:"",items:e.results,headers:e.headers,"item-class":e.rowClass},scopedSlots:e._u([{key:"item.agent",fn:function({item:n}){return[t("div",[n.status==="rejected"?[t("span",[e._v(e._s(n.reason.agent))])]:[t("span",[e._v(e._s(n.value.agent))])]],2)]}},{key:"item.result",fn:function({item:n}){return[t("div",[n.status==="rejected"?[t("span",[e._v(e._s(n.reason.error))])]:[t("span",[e._v(e._s(n.value.message))])]],2)]}}])})],1),t(x,[t(C),t(o,{attrs:{color:"blue darken-1",text:""},on:{click:function(n){e.showDialog=!1}}},[e._v(" Okay ")])],1)],1)],1)],1)],1)},S=[],M=p(I,w,S,!1,null,"4a3ee904",null,null);const N=M.exports;export{N as _};
