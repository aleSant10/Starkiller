import{_ as o}from"./AgentExecuteModule.5a9691be.js";import{_ as n}from"./EditPageTop.1c8ef462.js";import{i as a,n as r,p as u}from"./index.69f4bb51.js";import{a as l}from"./GeneralForm.5e828a8d.js";import"./TechniqueChips.9b636d05.js";import"./VSelect.d9660f2d.js";import"./index.8117981e.js";import"./InfoViewer.1a61095a.js";import"./VExpansionPanelHeader.a53d79c3.js";import"./VItemGroup.8874e5e3.js";import"./ErrorStateAlert.d881b2d7.js";import"./index.938508d7.js";import"./VDataTable.b008cb55.js";import"./TooltipButton.560438a3.js";import"./VTooltip.cad8701d.js";import"./VBreadcrumbs.e45171e0.js";import"./download-api.72002240.js";import"./VSwitch.4e67fef2.js";const i={name:"ModuleExecute",components:{AgentExecuteModule:o,EditPageTop:n},data(){return{selectedAgents:[],moduleName:""}},computed:{...a({agents:s=>s.agent.agents.filter(e=>e.archived===!1&&e.stale===!1)}),breads(){return[{text:"Modules",disabled:!1,to:"/modules",exact:!0},{text:`${this.moduleName}`,disabled:!0,to:"/modules/execute"}]}},mounted(){this.getAgents(),this.moduleName=this.$route.params.id},methods:{submit(){this.$refs.executeform.create()},moduleChange(s){this.moduleName=s,this.$router.push({name:"moduleExecute",params:{id:s}})},getAgents(){this.$store.dispatch("agent/getAgents")},clearAgents(){this.selectedAgents=[]}}};var d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"p4"},[t(n,{attrs:{breads:e.breads,"show-submit":!0},on:{submit:e.submit}}),t("h4",{staticClass:"pl-4 pb-4"},[e._v(" Execute Module ")]),t(l,{attrs:{dense:"",outlined:"",chips:"",multiple:"",placeholder:"Agents",items:e.agents,"item-text":"name","item-value":"name"},model:{value:e.selectedAgents,callback:function(m){e.selectedAgents=m},expression:"selectedAgents"}}),t(u,[t(o,{ref:"executeform",attrs:{"module-name":e.moduleName,agents:e.selectedAgents,"show-submit":!1},on:{moduleChange:e.moduleChange,submitted:e.clearAgents}})],1)],1)},p=[],c=r(i,d,p,!1,null,null,null,null);const P=c.exports;export{P as default};
