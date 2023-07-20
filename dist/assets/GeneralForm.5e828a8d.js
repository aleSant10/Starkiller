import{c as V,g as $}from"./download-api.72002240.js";import{U as D,v as a,j as o,L as C,G as f,A as g,aj as _,Z as F,E as w,ak as T,n as h,al as k,p as B,am as L,an as z,ao as v,ap as A,aq as M,a as P,b as y,a8 as E,V as O,ar as N,ae as q,w as U,o as j}from"./index.69f4bb51.js";import{b as p,c as u}from"./ErrorStateAlert.d881b2d7.js";import{V as n,d as K,b as R,c as d}from"./VSelect.d9660f2d.js";import{_ as G}from"./VSwitch.4e67fef2.js";const I={...K,offsetY:!0,offsetOverflow:!0,transition:!1},r=n.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:n.options.props.menuProps.type,default:()=>I},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...n.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map(e=>this.getValue(e))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some(e=>!this.hasItem(e)):this.filteredItems.length>0},currentRange(){return this.selectedItem==null?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||this.internalSearch==null?this.allItems:this.allItems.filter(e=>{const t=D(e,this.itemText),s=t!=null?String(t):"";return this.filter(e,String(this.internalSearch),s)})},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return this.isFocused?this.hasDisplayedItems||!this.hideNoData:!1},$_menuProps(){const e=n.options.computed.$_menuProps.call(this);return e.contentClass=`v-autocomplete__content ${e.contentClass||""}`.trim(),{...I,...e}},searchIsDirty(){return this.internalSearch!=null&&this.internalSearch!==""},selectedItem(){return this.multiple?null:this.selectedItems.find(e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue)))},listData(){const e=n.options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){e||!this.hasSlot||(this.lazySearch=null)},items(e,t){!(t&&t.length)&&this.hideNoData&&this.isFocused&&!this.isMenuActive&&e.length&&this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex(i=>i===s)):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick(()=>{!this.internalSearch||e.length!==1&&!this.autoSelectFirst||(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))})}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===a.left?this.selectedIndex===-1?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===a.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:(e===a.backspace||e===a.delete)&&this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(this.selectedIndex===-1&&s!==0){this.selectedIndex=s;return}const i=this.selectedItems.length,l=e!==i-1?e:e-1;this.selectedItems[l]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=l},clearableCallback(){this.internalSearch=null,n.options.methods.clearableCallback.call(this)},genInput(){const e=o.options.methods.genInput.call(this);return e.data=C(e.data,{attrs:{"aria-activedescendant":f(this.$refs.menu,"activeTile.id"),autocomplete:f(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=n.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?n.options.methods.genSelections.call(this):[]},onClick(e){!this.isInteractive||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),!this.multiple&&s===""&&this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;(e.ctrlKey||![a.home,a.end].includes(t))&&n.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){n.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){n.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){n.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick(()=>{(!this.multiple||!this.internalSearch||!this.isMenuActive)&&(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))})},updateSelf(){!this.searchIsDirty&&!this.internalValue||!this.multiple&&!this.valueComparator(this.internalSearch,this.getValue(this.internalValue))&&this.setSearch()},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(this.selectedIndex===-1)return;const i=this.selectedItems[this.selectedIndex],l=this.getText(i);(t=e.clipboardData)===null||t===void 0||t.setData("text/plain",l),(s=e.clipboardData)===null||s===void 0||s.setData("text/vnd.vuetify.autocomplete.item+plain",l),e.preventDefault()}}}),Y=r.extend({name:"v-combobox",props:{delimiters:{type:Array,default:()=>[]},returnObject:{type:Boolean,default:!0}},data:()=>({editingIndex:-1}),computed:{computedCounterValue(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot(){return n.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed(){return!0},menuCanShow(){return this.isFocused?this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData:!1},searchIsDirty(){return this.internalSearch!=null}},methods:{onInternalSearchChanged(e){if(e&&this.multiple&&this.delimiters.length){const t=this.delimiters.find(s=>e.endsWith(s));t!=null&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput(){const e=r.options.methods.genInput.call(this);return delete e.data.attrs.name,e.data.on.paste=this.onPaste,e},genChipSelection(e,t){const s=n.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(s.componentOptions.listeners={...s.componentOptions.listeners,dblclick:()=>{this.editingIndex=t,this.internalSearch=this.getText(e),this.selectedIndex=-1}}),s},onChipInput(e){n.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown(e){e.preventDefault(),!(this.getMenuIndex()>-1)&&this.$nextTick(this.updateSelf)},onKeyDown(e){const t=e.keyCode;(e.ctrlKey||![a.home,a.end].includes(t))&&n.options.methods.onKeyDown.call(this,e),this.multiple&&t===a.left&&this.$refs.input.selectionStart===0?this.updateSelf():t===a.enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown(e){if(this.multiple&&this.internalSearch&&this.getMenuIndex()===-1)return e.preventDefault(),e.stopPropagation(),this.updateTags();r.options.methods.onTabDown.call(this,e)},selectItem(e){this.editingIndex>-1?this.updateEditing():(r.options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems(){this.internalValue==null||this.internalValue===""?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue(e){n.options.methods.setValue.call(this,e===void 0?this.internalSearch:e)},updateEditing(){const e=this.internalValue.slice(),t=this.selectedItems.findIndex(s=>this.getText(s)===this.internalSearch);if(t>-1){const s=typeof e[t]=="object"?Object.assign({},e[t]):e[t];e.splice(t,1),e.push(s)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox(){if(!this.searchIsDirty)return;this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null)},updateSelf(){this.multiple?this.updateTags():this.updateCombobox()},updateTags(){const e=this.getMenuIndex();if(e<0&&!this.searchIsDirty||!this.internalSearch)return;if(this.editingIndex>-1)return this.updateEditing();const t=this.selectedItems.findIndex(i=>this.internalSearch===this.getText(i)),s=t>-1&&typeof this.selectedItems[t]=="object"?Object.assign({},this.selectedItems[t]):this.internalSearch;if(t>-1){const i=this.internalValue.slice();i.splice(t,1),this.setValue(i)}if(e>-1)return this.internalSearch=null;this.selectItem(s),this.internalSearch=null},onPaste(e){var t;if(this.$emit("paste",e),!this.multiple||this.searchIsDirty)return;const s=(t=e.clipboardData)===null||t===void 0?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");s&&this.findExistingIndex(s)===-1&&(e.preventDefault(),n.options.methods.selectItem.call(this,s))},clearableCallback(){this.editingIndex=-1,r.options.methods.clearableCallback.call(this)}}});const Z=o.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:e=>g(e).every(t=>t!=null&&typeof t=="object")}},computed:{classes(){return{...o.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);const t=this.internalArrayValue.reduce((s,{size:i=0})=>s+i,0);return this.$vuetify.lang.t(this.counterSizeString,e,_(t,this.base===1024))},internalArrayValue(){return g(this.internalValue)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return!this.isDirty&&(this.persistentPlaceholder||this.isFocused||!this.hasLabel)?[this.placeholder]:this.internalArrayValue.map(e=>{const{name:t="",size:s=0}=e,i=this.truncateText(t);return this.showSize?`${i} (${_(s,this.base===1024)})`:i})},base(){return typeof this.showSize!="boolean"?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(e){e===!0&&F("readonly is not supported on <v-file-input>",this)},immediate:!0},value(e){const t=this.multiple?e:e?[e]:[];w(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((e,t)=>this.$createElement(R,{props:{small:this.smallChips},on:{"click:close":()=>{const s=this.internalValue;s.splice(t,1),this.internalValue=s}}},[e])):[]},genControl(){const e=o.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=T(e.data.style,{display:"none"})),e},genInput(){const e=o.options.methods.genInput.call(this);return e.data.attrs.multiple=this.multiple,delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot(){if(!this.prependIcon)return null;const e=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[e])},genSelectionText(){const e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections(){const e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((t,s)=>{!this.$scopedSlots.selection||e.push(this.$scopedSlots.selection({text:this.text[s],file:t,index:s}))}):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot(){const e=o.options.methods.genTextFieldSlot.call(this);return e.data.on={...e.data.on||{},click:t=>{t.target&&t.target.nodeName==="LABEL"||this.$refs.input.click()}},e},onInput(e){const t=[...e.target.files||[]];this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown(e){this.$emit("keydown",e)},truncateText(e){if(e.length<Number(this.truncateLength))return e;const t=Math.floor((Number(this.truncateLength)-1)/2);return`${e.slice(0,t)}\u2026${e.slice(e.length-t)}`}}});const W={name:"FileUploadDialog",components:{},props:{value:{type:Boolean,default:!1},rules:{type:Array,default:()=>[]}},data(){return{loading:!1,file:null}},computed:{show:{get(){return this.value},set(e){this.$emit("input",e)}}},methods:{async submit(){if(!this.$refs.form.validate())return;const e=new FormData;e.append("file",this.file);const t=await V(e);this.$emit("submit",{file:t.data})}}};var H=function(){var t=this,s=t._self._c;return s(k,{ref:"uploadDialog",attrs:{"max-width":"750px"},model:{value:t.show,callback:function(i){t.show=i},expression:"show"}},[s(B,[s(L,[s("span",{staticClass:"headline"},[t._v("Upload To Empire Server")])]),s(z,[s(v,{ref:"form",attrs:{"on-submit":"return false;"},on:{submit:function(i){i.preventDefault()}}},[s(A,[s(p,[s(u,{attrs:{cols:"12"}},[s(Z,{ref:"fileInput",attrs:{accept:"*/*",rules:t.rules,outlined:"",dense:""},model:{value:t.file,callback:function(i){t.file=i},expression:"file"}})],1)],1)],1)],1)],1),s(M,[s(P),s(y,{attrs:{color:"blue darken-1",text:""},on:{click:function(i){i.stopPropagation(),t.show=!1}}},[t._v(" Close ")]),s(y,{attrs:{color:"blue darken-1",text:"",loading:t.loading},on:{click:t.submit}},[t._v(" Upload ")])],1)],1)],1)},J=[],Q=h(W,H,J,!1,null,null,null,null);const x=Q.exports;function S(e,t){if(e===0)return"0 Bytes";const s=1024,i=t||2,l=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(e)/Math.log(s));return`${parseFloat((e/s**c).toFixed(i))} ${l[c]}`}const X={components:{FileUploadDialog:x},props:{value:{type:[String,Array,Number],required:!0},label:{type:String,default:"Server Files"},rules:{type:Array,default:()=>[]},maximumFileSize:{type:Number,required:!1,default:-1},returnObject:{type:Boolean,required:!1,default:!1}},data(){return{internalValue:this.value,isLoading:!1,count:0,entries:[],search:null,showDialog:!1}},computed:{fileItems(){return this.entries.map(e=>{const t=e.location.length>this.descriptionLimit?`(${S(e.size)}) ${e.location.slice(0,this.descriptionLimit)}...`:`(${S(e.size)}) ${e.location}`;return{...e,description:t}})}},watch:{internalValue(e){this.$emit("input",e)},value(e){this.internalValue=e},search(){this.doSearch()}},mounted(){this.doSearch()},methods:{doSearch(e=!0){!e&&this.fileItems.length>0||this.isLoading||(this.isLoading=!0,$({page:1,limit:-1}).then(t=>{const{records:s}=t;this.maximumFileSize>0?this.entries=s.filter(i=>i.size<=this.maximumFileSize):this.entries=s,this.count=this.entries.length}).catch(t=>{console.log(t)}).finally(()=>{this.isLoading=!1}))},fileUploaded({file:e}){this.showDialog=!1,this.doSearch(!0),this.returnObject?this.internalValue=e:this.internalValue=e.id}}};var ee=function(){var t=this,s=t._self._c;return s("div",[s(x,{attrs:{rules:t.rules},on:{submit:t.fileUploaded},model:{value:t.showDialog,callback:function(i){t.showDialog=i},expression:"showDialog"}}),s(r,{attrs:{items:t.fileItems,loading:t.isLoading,"search-input":t.search,"hide-no-data":"","hide-selected":"",clearable:"","cache-items":"","item-text":"description","item-value":"id",label:t.label,placeholder:"Start typing to Search","prepend-icon":"fa-upload",outlined:"",dense:"","return-object":t.returnObject},on:{"update:searchInput":function(i){t.search=i},"update:search-input":function(i){t.search=i},"click:prepend":function(i){t.showDialog=!0}},model:{value:t.internalValue,callback:function(i){t.internalValue=i},expression:"internalValue"}})],1)},te=[],se=h(X,ee,te,!1,null,null,null,null);const b=se.exports;const ie={components:{FileInput:b},props:{value:{type:[String,Array,Number],required:!0},suggestedValues:{type:Array,default:()=>[]},strict:{type:Boolean,default:!1},name:{type:String,required:!0},rules:{type:Array,default:()=>[]},type:{type:String,default:"text"}},data(){return{internalValue:this.value}},watch:{internalValue(e){this.$emit("input",e)}},methods:{truncate(e){return e?e.length>80?`${e.substr(0,80)}...`:e:""}}};var ne=function(){var t=this,s=t._self._c;return s("div",[t.suggestedValues.length>0&&t.strict&&t.suggestedValues.includes("True")&&t.suggestedValues.includes("False")?s(G,{attrs:{"false-value":"False","true-value":"True",label:t.name},model:{value:t.internalValue,callback:function(i){t.internalValue=i},expression:"internalValue"}}):t.name==="Bypasses"?s(r,{attrs:{items:t.suggestedValues,label:t.name,outlined:"",multiple:"",chips:""},model:{value:t.internalValue,callback:function(i){t.internalValue=i},expression:"internalValue"}}):t.type==="file"?s(b,{attrs:{label:t.name},model:{value:t.internalValue,callback:function(i){t.internalValue=i},expression:"internalValue"}}):t.name==="CredID"?s(r,{attrs:{items:t.suggestedValues,label:t.name,outlined:"",dense:"","item-value":"ID","item-text":"ID"},scopedSlots:t._u([{key:"item",fn:function(i){return[s(E,[s(O,{domProps:{textContent:t._s(t.truncate(`${i.item.username} ${i.item.domain} ${i.item.password}`))}}),s(N,{domProps:{textContent:t._s(t.truncate(`${i.item.ID}, ${i.item.notes}`))}})],1)]}}]),model:{value:t.internalValue,callback:function(i){t.internalValue=i},expression:"internalValue"}}):t.suggestedValues.length>0&&!t.strict?s(Y,{attrs:{items:t.suggestedValues,label:t.name,outlined:"",dense:""},model:{value:t.internalValue,callback:function(i){t.internalValue=i},expression:"internalValue"}}):t.suggestedValues.length>0&&t.strict?s(r,{attrs:{items:t.suggestedValues,label:t.name,outlined:"",dense:""},model:{value:t.internalValue,callback:function(i){t.internalValue=i},expression:"internalValue"}}):s(o,{attrs:{rules:t.rules,label:t.name,type:t.type==="string"?"text":"number",outlined:"",dense:"",required:""},model:{value:t.internalValue,callback:function(i){t.internalValue=i},expression:"internalValue"}})],1)},le=[],ae=h(ie,ne,le,!1,null,null,null,null);const m=ae.exports;const re={components:{DynamicFormInput:m},props:{options:{type:Object,required:!0},readonly:{type:Boolean,default:!1},priority:{type:Array,default:()=>[]}},data(){return{form:{},valid:!0}},computed:{...q({listeners:"listener/listenerNames",bypasses:"bypass/bypassNames",malleableProfiles:"malleable/profileNames",credentials:"credential/credentials"}),optionalFields(){return this.fields.filter(e=>e.required===!1).map(e=>({...e,type:this.fieldType(e)}))},requiredFields(){return this.fields.filter(e=>e.required===!0).map(e=>({...e,type:this.fieldType(e)}))},fields(){const e=Object.keys(this.options).map(t=>({name:t,...this.options[t]}));return this.priority.slice().reverse().forEach(t=>{const s=e.findIndex(i=>i.name===t);if(s>-1){const i=e.splice(s,1)[0];e.unshift(i)}}),e},rules(){return this.fields.reduce((e,t)=>(e[t.name]=[],t.required===!0&&e[t.name].push(s=>!!s||s===0||`${t.name} is required`),e),{})}},watch:{form:{handler(e){const t={...e};t.Bypasses&&(t.Bypasses=t.Bypasses.join(" ")),this.$emit("input",t)},deep:!0},fields:{immediate:!0,handler(e){const t=e.reduce((s,i)=>(i.name==="Bypasses"&&!Array.isArray(i.value)?s[i.name]=i.value.split(" ")||[]:s[i.name]=i.value==null?"":i.value,s),{});U.set(this,"form",t)}}},mounted(){var e,t,s,i;((e=this.listeners)==null?void 0:e.length)===0&&this.$store.dispatch("listener/getListeners"),((t=this.bypasses)==null?void 0:t.length)===0&&this.$store.dispatch("bypass/getBypasses"),((s=this.malleableProfiles)==null?void 0:s.length)===0&&this.$store.dispatch("malleable/getMalleableProfiles"),((i=this.credentials)==null?void 0:i.length)===0&&this.$store.dispatch("credential/getCredentials")},methods:{suggestedValuesForField(e){return e.name==="Listener"?this.listeners:e.name==="Bypasses"?this.bypasses:e.name==="Profile"?this.malleableProfiles:e.name==="CredID"?this.credentials:e.suggested_values},strictForField(e){return e.name==="Listener"||e.name==="Bypasses"||e.name==="Profile"||e.name==="CredID"?!0:e.strict},fieldExists(e){return this.fields.find(t=>t.name===e)},fieldType(e){return e.value_type==="INTEGER"?"number":e.value_type==="FLOAT"?"float":e.value_type==="BOOLEAN"?"boolean":e.value_type==="STRING"?"string":e.value_type==="FILE"?"file":"string"}}};var oe=function(){var t=this,s=t._self._c;return s(v,{ref:"form",attrs:{readonly:t.readonly},nativeOn:{submit:function(i){return i.preventDefault(),t.submit.apply(null,arguments)}},model:{value:t.valid,callback:function(i){t.valid=i},expression:"valid"}},[t._l(t.requiredFields,function(i){return s(p,{key:i.name},[s(u,{attrs:{cols:"6"}},[s(m,{attrs:{"suggested-values":t.suggestedValuesForField(i),strict:t.strictForField(i),name:i.name,rules:t.rules[i.name],type:i.type},model:{value:t.form[i.name],callback:function(l){t.$set(t.form,i.name,l)},expression:"form[field.name]"}})],1),s(u,{attrs:{cols:"6"}},[s(d,[t._v(" "+t._s(i.description)+" ")])],1)],1)}),t.optionalFields.length>0?s(d,[t._v(" Optional Fields ")]):t._e(),t.optionalFields.length>0?s(j,{staticClass:"mb-8"}):t._e(),t._l(t.optionalFields,function(i){return s(p,{key:i.name},[s(u,{attrs:{cols:"6"}},[s(m,{attrs:{"suggested-values":t.suggestedValuesForField(i),strict:t.strictForField(i),name:i.name,rules:t.rules[i.name],type:i.type},model:{value:t.form[i.name],callback:function(l){t.$set(t.form,i.name,l)},expression:"form[field.name]"}})],1),s(u,{attrs:{cols:"6"}},[s(d,[t._v(" "+t._s(i.description)+" ")])],1)],1)})],2)},ue=[],he=h(re,oe,ue,!1,null,null,null,null);const ge=he.exports;export{ge as _,r as a,b,Z as c,S as f};
