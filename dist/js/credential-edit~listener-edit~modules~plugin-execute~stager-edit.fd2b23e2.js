(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["credential-edit~listener-edit~modules~plugin-execute~stager-edit"],{"0fd9":function(e,t,n){"use strict";var i=n("ade3"),s=n("5530"),a=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),l=n("d9f7"),r=n("80d2"),o=["sm","md","lg","xl"],c=["start","end","center"];function u(e,t){return o.reduce((function(n,i){return n[e+Object(r["I"])(i)]=t(),n}),{})}var d=function(e){return[].concat(c,["baseline","stretch"]).includes(e)},h=u("align",(function(){return{type:String,default:null,validator:d}})),f=function(e){return[].concat(c,["space-between","space-around"]).includes(e)},p=u("justify",(function(){return{type:String,default:null,validator:f}})),m=function(e){return[].concat(c,["space-between","space-around","stretch"]).includes(e)},g=u("alignContent",(function(){return{type:String,default:null,validator:m}})),v={align:Object.keys(h),justify:Object.keys(p),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(e,t,n){var i=b[e];if(null!=n){if(t){var s=t.replace(e,"");i+="-".concat(s)}return i+="-".concat(n),i.toLowerCase()}}var I=new Map;t["a"]=a["default"].extend({name:"v-row",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:f}},p),{},{alignContent:{type:String,default:null,validator:m}},g),render:function(e,t){var n=t.props,s=t.data,a=t.children,r="";for(var o in n)r+=String(n[o]);var c=I.get(r);return c||function(){var e,t;for(t in c=[],v)v[t].forEach((function(e){var i=n[e],s=y(t,e,i);s&&c.push(s)}));c.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(e,"align-".concat(n.align),n.align),Object(i["a"])(e,"justify-".concat(n.justify),n.justify),Object(i["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),I.set(r,c)}(),e(n.tag,Object(l["a"])(s,{staticClass:"row",class:c}),a)}})},"2bfd":function(e,t,n){},"62ad":function(e,t,n){"use strict";var i=n("ade3"),s=n("5530"),a=(n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),l=n("d9f7"),r=n("80d2"),o=["sm","md","lg","xl"],c=function(){return o.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return o.reduce((function(e,t){return e["offset"+Object(r["I"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return o.reduce((function(e,t){return e["order"+Object(r["I"])(t)]={type:[String,Number],default:null},e}),{})}(),h={col:Object.keys(c),offset:Object.keys(u),order:Object.keys(d)};function f(e,t,n){var i=e;if(null!=n&&!1!==n){if(t){var s=t.replace(e,"");i+="-".concat(s)}return"col"!==e||""!==n&&!0!==n?(i+="-".concat(n),i.toLowerCase()):i.toLowerCase()}}var p=new Map;t["a"]=a["default"].extend({name:"v-col",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({cols:{type:[Boolean,String,Number],default:!1}},c),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,s=t.data,a=t.children,r=(t.parent,"");for(var o in n)r+=String(n[o]);var c=p.get(r);return c||function(){var e,t;for(t in c=[],h)h[t].forEach((function(e){var i=n[e],s=f(t,e,i);s&&c.push(s)}));var s=c.some((function(e){return e.startsWith("col-")}));c.push((e={col:!s||!n.cols},Object(i["a"])(e,"col-".concat(n.cols),n.cols),Object(i["a"])(e,"offset-".concat(n.offset),n.offset),Object(i["a"])(e,"order-".concat(n.order),n.order),Object(i["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),p.set(r,c)}(),e(n.tag,Object(l["a"])(s,{class:c}),a)}})},"83b4":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-form",{ref:"form",attrs:{readonly:e.readonly},nativeOn:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[e._l(e.requiredFields,(function(t){return n("v-row",{key:t.name},[n("v-col",{attrs:{cols:"6"}},[n("dynamic-form-input",{attrs:{"suggested-values":e.suggestedValuesForField(t),strict:e.strictForField(t),name:t.name,rules:e.rules[t.name],type:t.type},model:{value:e.form[t.name],callback:function(n){e.$set(e.form,t.name,n)},expression:"form[field.name]"}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-subheader",[e._v(" "+e._s(t.description)+" ")])],1)],1)})),e.optionalFields.length>0?n("v-subheader",[e._v(" Optional Fields ")]):e._e(),e.optionalFields.length>0?n("v-divider",{staticClass:"mb-8"}):e._e(),e._l(e.optionalFields,(function(t){return n("v-row",{key:t.name},[n("v-col",{attrs:{cols:"6"}},[n("dynamic-form-input",{attrs:{"suggested-values":e.suggestedValuesForField(t),strict:e.strictForField(t),name:t.name,rules:e.rules[t.name],type:t.type},model:{value:e.form[t.name],callback:function(n){e.$set(e.form,t.name,n)},expression:"form[field.name]"}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-subheader",[e._v(" "+e._s(t.description)+" ")])],1)],1)}))],2)},s=[],a=n("5530"),l=(n("d81d"),n("4de4"),n("b64b"),n("159b"),n("fb6a"),n("c740"),n("b0c0"),n("a434"),n("a15b"),n("ac1f"),n("1276"),n("7db0"),n("2b0e")),r=n("2f62"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.suggestedValues.length>0&&e.strict&&e.suggestedValues.includes("True")&&e.suggestedValues.includes("False")?n("v-switch",{attrs:{"false-value":"False","true-value":"True",label:e.name},model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}}):"Bypasses"===e.name?n("v-autocomplete",{attrs:{items:e.suggestedValues,label:e.name,outlined:"",multiple:"",chips:""},model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}}):"CredID"===e.name?n("v-autocomplete",{attrs:{items:e.suggestedValues,label:e.name,outlined:"",dense:"","item-value":"ID","item-text":"ID"},scopedSlots:e._u([{key:"item",fn:function(t){return[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:e._s(e.truncate(t.item.username+" "+t.item.domain+" "+t.item.password))}}),n("v-list-item-subtitle",{domProps:{textContent:e._s(e.truncate(t.item.ID+", "+t.item.notes))}})],1)]}}]),model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}}):e.suggestedValues.length>0&&!e.strict?n("v-combobox",{attrs:{items:e.suggestedValues,label:e.name,outlined:"",dense:""},model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}}):e.suggestedValues.length>0&&e.strict?n("v-autocomplete",{attrs:{items:e.suggestedValues,label:e.name,outlined:"",dense:""},model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}}):n("v-text-field",{attrs:{rules:e.rules,label:e.name,type:"string"===e.type?"text":"number",outlined:"",dense:"",required:""},model:{value:e.internalValue,callback:function(t){e.internalValue=t},expression:"internalValue"}})],1)},c=[],u=(n("a9e3"),{props:{value:{type:[String,Array,Number],required:!0},suggestedValues:{type:Array,default:function(){return[]}},strict:{type:Boolean,default:!1},name:{type:String,required:!0},rules:{type:Array,default:function(){return[]}},type:{type:String,default:"text"}},data:function(){return{internalValue:this.value}},watch:{internalValue:function(e){this.$emit("input",e)}},methods:{truncate:function(e){return e?e.length>80?"".concat(e.substr(0,80),"..."):e:""}}}),d=u,h=n("2877"),f=n("6544"),p=n.n(f),m=n("c6a6"),g=n("53ca"),v=(n("d3b7"),n("25f0"),n("8a79"),n("caad"),n("2532"),n("2bfd"),n("b974")),b=n("80d2"),y=m["a"].extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return v["a"].options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find((function(t){return e.endsWith(t)}));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var e=m["a"].options.methods.genInput.call(this);return delete e.data.attrs.name,e.data.on.paste=this.onPaste,e},genChipSelection:function(e,t){var n=this,i=v["a"].options.methods.genChipSelection.call(this,e,t);return this.multiple&&(i.componentOptions.listeners=Object(a["a"])(Object(a["a"])({},i.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}})),i},onChipInput:function(e){v["a"].options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[b["A"].home,b["A"].end].includes(t)||v["a"].options.methods.onKeyDown.call(this,e),this.multiple&&t===b["A"].left&&0===this.$refs.input.selectionStart?this.updateSelf():t===b["A"].enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();m["a"].options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():(m["a"].options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){v["a"].options.methods.setValue.call(this,void 0===e?this.internalSearch:e)},updateEditing:function(){var e=this,t=this.internalValue.slice(),n=this.selectedItems.findIndex((function(t){return e.getText(t)===e.internalSearch}));if(n>-1){var i="object"===Object(g["a"])(t[n])?Object.assign({},t[n]):t[n];t.splice(n,1),t.push(i)}else t[this.editingIndex]=this.internalSearch;this.setValue(t),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){if(this.searchIsDirty){this.internalSearch!==this.getText(this.internalValue)&&this.setValue();var e=Boolean(this.$scopedSlots.selection)||this.hasChips;e&&(this.internalSearch=null)}},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this,t=this.getMenuIndex();if(!(t<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(t){return e.internalSearch===e.getText(t)})),i=n>-1&&"object"===Object(g["a"])(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var s=this.internalValue.slice();s.splice(n,1),this.setValue(s)}if(t>-1)return this.internalSearch=null;this.selectItem(i),this.internalSearch=null}},onPaste:function(e){var t;if(this.multiple&&!this.searchIsDirty){var n=null==(t=e.clipboardData)?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(e.preventDefault(),v["a"].options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,m["a"].options.methods.clearableCallback.call(this)}}}),I=n("5d23"),S=n("b73d"),x=n("8654"),j=Object(h["a"])(d,o,c,!1,null,null,null),O=j.exports;p()(j,{VAutocomplete:m["a"],VCombobox:y,VListItemContent:I["a"],VListItemSubtitle:I["b"],VListItemTitle:I["c"],VSwitch:S["a"],VTextField:x["a"]});var V={components:{DynamicFormInput:O},props:{options:{type:Object,required:!0},readonly:{type:Boolean,default:!1},priority:{type:Array,default:function(){return[]}}},data:function(){return{form:{},valid:!0}},computed:Object(a["a"])(Object(a["a"])({},Object(r["b"])({listeners:"listener/listenerNames",bypasses:"bypass/bypassNames",malleableProfiles:"malleable/profileNames",credentials:"credential/credentials"})),{},{optionalFields:function(){var e=this;return this.fields.filter((function(e){return!1===e.required})).map((function(t){return Object(a["a"])(Object(a["a"])({},t),{},{type:e.fieldType(t)})}))},requiredFields:function(){var e=this;return this.fields.filter((function(e){return!0===e.required})).map((function(t){return Object(a["a"])(Object(a["a"])({},t),{},{type:e.fieldType(t)})}))},fields:function(){var e=this,t=Object.keys(this.options).map((function(t){return Object(a["a"])({name:t},e.options[t])}));return this.priority.slice().reverse().forEach((function(e){var n=t.findIndex((function(t){return t.name===e}));if(n>-1){var i=t.splice(n,1)[0];t.unshift(i)}})),t},rules:function(){return this.fields.reduce((function(e,t){return e[t.name]=[],!0===t.required&&e[t.name].push((function(e){return!!e||0===e||"".concat(t.name," is required")})),e}),{})}}),watch:{form:{handler:function(e){var t=Object(a["a"])({},e);t.Bypasses&&(t.Bypasses=t.Bypasses.join(" ")),this.$emit("input",t)},deep:!0},fields:{immediate:!0,handler:function(e){var t=e.reduce((function(e,t){return"Bypasses"!==t.name||Array.isArray(t.value)?e[t.name]=null==t.value?"":t.value:e[t.name]=t.value.split(" ")||[],e}),{});l["default"].set(this,"form",t)}}},mounted:function(){this.$store.dispatch("listener/getListeners"),this.$store.dispatch("bypass/getBypasses"),this.$store.dispatch("malleable/getMalleableProfiles"),this.$store.dispatch("credential/getCredentials")},methods:{suggestedValuesForField:function(e){return"Listener"===e.name?this.listeners:"Bypasses"===e.name?this.bypasses:"Profile"===e.name?this.malleableProfiles:"CredID"===e.name?this.credentials:e.suggested_values},strictForField:function(e){return"Listener"===e.name||("Bypasses"===e.name||("Profile"===e.name||("CredID"===e.name||e.strict)))},fieldExists:function(e){return this.fields.find((function(t){return t.name===e}))},fieldType:function(e){return"INTEGER"===e.value_type?"number":"FLOAT"===e.value_type?"float":"BOOLEAN"===e.value_type?"boolean":(e.value_type,"string")}}},C=V,w=n("62ad"),D=n("ce7e"),F=n("4bd4"),k=n("0fd9"),$=n("e0c7"),_=Object(h["a"])(C,i,s,!1,null,null,null);t["a"]=_.exports;p()(_,{VCol:w["a"],VDivider:D["a"],VForm:F["a"],VRow:k["a"],VSubheader:$["a"]})},9442:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[n("v-btn",e._g({staticClass:"mr-5",attrs:{color:e.flat?"":e.color,to:e.to,icon:"",small:!e.xSmall,"x-small":e.xSmall},on:{click:function(t){return e.$emit("click")}}},i),[n("v-icon",{style:0!==e.padLeft?"padding-left: "+e.padLeft+"px":""},[e._v(" "+e._s(e.icon)+" ")])],1)]}}])},[n("span",[e._v(e._s(e.text))])])},s=[],a=(n("a9e3"),{name:"TooltipButton",props:{icon:{type:String,required:!0},text:{type:String,required:!0},padLeft:{type:Number,default:0},color:{type:String,default:""},flat:{type:Boolean,default:!1},to:{type:Object,default:null},xSmall:{type:Boolean,default:!1}}}),l=a,r=n("2877"),o=n("6544"),c=n.n(o),u=n("8336"),d=n("132d"),h=n("3a2f"),f=Object(r["a"])(l,i,s,!1,null,null,null);t["a"]=f.exports;c()(f,{VBtn:u["a"],VIcon:d["a"],VTooltip:h["a"]})},"9d01":function(e,t,n){},b73d:function(e,t,n){"use strict";var i=n("15fd"),s=n("5530"),a=(n("0481"),n("ec29"),n("9d01"),n("fe09")),l=n("c37a"),r=n("c3f0"),o=n("0789"),c=n("490a"),u=n("80d2"),d=["title"];t["a"]=a["a"].extend({name:"v-switch",directives:{Touch:r["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])({},l["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var e=this.attrs$,t=(e.title,Object(i["a"])(e,d));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",Object(s["a"])(Object(s["a"])({},this.attrs),t)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",Object(s["a"])({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(o["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(c["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(e){(e.keyCode===u["A"].left&&this.isActive||e.keyCode===u["A"].right&&!this.isActive)&&this.onChange()}}})},c6a6:function(e,t,n){"use strict";var i=n("5530"),s=(n("d81d"),n("4de4"),n("498a"),n("7db0"),n("c740"),n("caad"),n("2532"),n("2bfd"),n("b974")),a=n("8654"),l=n("d9f7"),r=n("80d2"),o=Object(i["a"])(Object(i["a"])({},s["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t["a"]=s["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s["a"].options.props.menuProps.type,default:function(){return o}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},s["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(r["t"])(t,e.itemText),i=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),i)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=s["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(i["a"])(Object(i["a"])({},o),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=s["a"].options.computed.listData.call(this);return e.props=Object(i["a"])(Object(i["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var i=t[this.$refs.menu.listIndex];i?this.setMenuIndex(e.findIndex((function(e){return e===i}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===r["A"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===r["A"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==r["A"].backspace&&e!==r["A"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var i=this.selectedItems.length,s=e!==i-1?e:e-1,a=this.selectedItems[s];a?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=s}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,s["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=a["a"].options.methods.genInput.call(this);return e.data=Object(l["a"])(e.data,{attrs:{"aria-activedescendant":Object(r["r"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(r["r"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=s["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?s["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[r["A"].home,r["A"].end].includes(t)||s["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){s["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){s["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){s["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var i=this.selectedItems[this.selectedIndex],s=this.getText(i);null==(t=e.clipboardData)||t.setData("text/plain",s),null==(n=e.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",s),e.preventDefault()}}}})}}]);
//# sourceMappingURL=credential-edit~listener-edit~modules~plugin-execute~stager-edit.fd2b23e2.js.map