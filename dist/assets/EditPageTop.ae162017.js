import{_ as a}from"./TooltipButton.21f18540.js";import{n as l,a as i,b as o,c as n}from"./index.81c4d563.js";import{_ as r}from"./VBreadcrumbs.8405c320.js";const _={name:"ListPageTop",components:{TooltipButton:a},props:{deleteText:{type:String,default:"Delete"},copyText:{type:String,default:"Copy"},submitText:{type:String,default:"Submit"},showDelete:{type:Boolean,default:!1},showCopy:{type:Boolean,default:!1},showSubmit:{type:Boolean,default:!1},disableSubmit:{type:Boolean},submitLoading:{type:Boolean,default:!1},copyLink:{type:Object,default:()=>{}},smallCopy:{type:Boolean,default:!1},smallDelete:{type:Boolean,default:!1},breads:{type:Array,default:()=>[]}}};var p=function(){var t=this,e=t._self._c;return e("portal",{attrs:{to:"app-bar"}},[e("div",{staticClass:"v-toolbar__content",staticStyle:{width:"100%"}},[e(r,{attrs:{items:t.breads}}),e(i),t._t("extra-stuff"),t.showDelete&&!t.smallDelete?e(o,{staticClass:"mr-2",attrs:{color:"error",text:""},on:{click:function(s){return t.$emit("delete")}}},[t._v(" "+t._s(t.deleteText)+" "),e(n,{attrs:{right:""}},[t._v(" fa-trash-alt ")])],1):t.showDelete&&t.smallDelete?e(a,{attrs:{icon:"fa-trash-alt",color:"error",text:t.deleteText},on:{click:function(s){return t.$emit("delete")}}}):t._e(),t.showCopy&&Object.keys(t.copyLink).length>0&&!t.smallCopy?e(o,{staticClass:"mr-2",attrs:{color:"primary",text:"",to:t.copyLink}},[t._v(" "+t._s(t.copyText)+" "),e(n,{attrs:{right:""}},[t._v(" fa-copy ")])],1):t.showCopy&&Object.keys(t.copyLink).length>0&&t.smallCopy?e(a,{attrs:{icon:"fa-copy",text:t.copyText,to:t.copyLink}}):t._e(),t.showSubmit?e(o,{staticClass:"primary",attrs:{disabled:t.disableSubmit,type:"submit",loading:t.submitLoading},on:{click:function(s){return t.$emit("submit")}}},[t._v(" "+t._s(t.submitText)+" ")]):t._e()],2)])},c=[],u=l(_,p,c,!1,null,null,null,null);const b=u.exports;export{b as _};