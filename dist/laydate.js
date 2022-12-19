(function(k){typeof define=="function"&&define.amd?define(k):k()})(function(){"use strict";(function(k){var R=k.document,T={modules:{},status:{},timeout:10,event:{}},M=function(){this.v="2.6.7"},W=k.LAYUI_GLOBAL||{},S=function(){var a=R.currentScript?R.currentScript.src:function(){for(var r=R.scripts,o=r.length-1,l,d=o;d>0;d--)if(r[d].readyState==="interactive"){l=r[d].src;break}return l||r[o].src}();return T.dir=W.dir||a.substring(0,a.lastIndexOf("/")+1)}(),F=function(a,r){r=r||"log",k.console&&console[r]&&console[r]("layui error hint: "+a)},z=typeof opera<"u"&&opera.toString()==="[object Opera]",V=T.builtin={lay:"lay",layer:"layer",laydate:"laydate",laypage:"laypage",laytpl:"laytpl",layedit:"layedit",form:"form",upload:"upload",dropdown:"dropdown",transfer:"transfer",tree:"tree",table:"table",element:"element",rate:"rate",colorpicker:"colorpicker",slider:"slider",carousel:"carousel",flow:"flow",util:"util",code:"code",jquery:"jquery",all:"all","layui.all":"layui.all"};M.prototype.cache=T,M.prototype.define=function(a,r){var o=this,l=typeof a=="function",d=function(){var f=function(D,t){w[D]=t,T.status[D]=!0};return typeof r=="function"&&r(function(D,t){f(D,t),T.callback[D]=function(){r(f)}}),this};return l&&(r=a,a=[]),o.use(a,d,null,"define"),o},M.prototype.use=function(a,r,o,l){var d=this,f=T.dir=T.dir?T.dir:S,D=R.getElementsByTagName("head")[0];a=function(){return typeof a=="string"?[a]:typeof a=="function"?(r=a,["all"]):a}(),k.jQuery&&jQuery.fn.on&&(d.each(a,function(s,p){p==="jquery"&&a.splice(s,1)}),w.jquery=w.$=jQuery);var t=a[0],e=0;o=o||[],T.host=T.host||(f.match(/\/\/([\s\S]+?)\//)||["//"+location.host+"/"])[0];function n(s,p){var h=navigator.platform==="PLaySTATION 3"?/^complete$/:/^(complete|loaded)$/;(s.type==="load"||h.test((s.currentTarget||s.srcElement).readyState))&&(T.modules[t]=p,D.removeChild(c),function A(){if(++e>T.timeout*1e3/4)return F(t+" is not a valid module","error");T.status[t]?i():setTimeout(A,4)}())}function i(){o.push(w[t]),a.length>1?d.use(a.slice(1),r,o,l):typeof r=="function"&&function(){if(w.jquery&&typeof w.jquery=="function"&&l!=="define")return w.jquery(function(){r.apply(w,o)});r.apply(w,o)}()}if(a.length===0||w["layui.all"]&&V[t])return i(),d;var u=(V[t]?f+"modules/":/^\{\/\}/.test(d.modules[t])?"":T.base||"")+(d.modules[t]||t)+".js";if(u=u.replace(/^\{\/\}/,""),!T.modules[t]&&w[t]&&(T.modules[t]=u),T.modules[t])(function s(){if(++e>T.timeout*1e3/4)return F(t+" is not a valid module","error");typeof T.modules[t]=="string"&&T.status[t]?i():setTimeout(s,4)})();else{var c=R.createElement("script");c.async=!0,c.charset="utf-8",c.src=u+function(){var s=T.version===!0?T.v||new Date().getTime():T.version||"";return s?"?v="+s:""}(),D.appendChild(c),c.attachEvent&&!(c.attachEvent.toString&&c.attachEvent.toString().indexOf("[native code")<0)&&!z?c.attachEvent("onreadystatechange",function(s){n(s,u)}):c.addEventListener("load",function(s){n(s,u)},!1),T.modules[t]=u}return d},M.prototype.getStyle=function(a,r){var o=a.currentStyle?a.currentStyle:k.getComputedStyle(a,null);return o[o.getPropertyValue?"getPropertyValue":"getAttribute"](r)},M.prototype.link=function(a,r,o){var l=this,d=R.getElementsByTagName("head")[0],f=R.createElement("link");typeof r=="string"&&(o=r);var D=(o||a).replace(/\.|\//g,""),t=f.id="layuicss-"+D,e="creating",n=0;return f.rel="stylesheet",f.href=a+(T.debug?"?v="+new Date().getTime():""),f.media="all",R.getElementById(t)||d.appendChild(f),typeof r!="function"||function i(u){var c=100,s=R.getElementById(t);if(++n>T.timeout*1e3/c)return F(a+" timeout");parseInt(l.getStyle(s,"width"))===1989?(u===e&&s.removeAttribute("lay-status"),s.getAttribute("lay-status")===e?setTimeout(i,c):r()):(s.setAttribute("lay-status",e),setTimeout(function(){i(e)},c))}(),l},M.prototype.addcss=function(a,r,o){return w.link(T.dir+"css/"+a,r,o)},T.callback={},M.prototype.factory=function(a){if(w[a])return typeof T.callback[a]=="function"?T.callback[a]:null},M.prototype.img=function(a,r,o){var l=new Image;if(l.src=a,l.complete)return r(l);l.onload=function(){l.onload=null,typeof r=="function"&&r(l)},l.onerror=function(d){l.onerror=null,typeof o=="function"&&o(d)}},M.prototype.config=function(a){a=a||{};for(var r in a)T[r]=a[r];return this},M.prototype.modules=function(){var a={};for(var r in V)a[r]=V[r];return a}(),M.prototype.extend=function(a){var r=this;a=a||{};for(var o in a)r[o]||r.modules[o]?F(o+" Module already exists","error"):r.modules[o]=a[o];return r},M.prototype.router=function(o){var r=this,o=o||location.hash,l={path:[],search:{},hash:(o.match(/[^#](#.*$)/)||[])[1]||""};return/^#\//.test(o)&&(o=o.replace(/^#\//,""),l.href="/"+o,o=o.replace(/([^#])(#.*$)/,"$1").split("/")||[],r.each(o,function(d,f){/^\w+=/.test(f)?function(){f=f.split("="),l.search[f[0]]=f[1]}():l.path.push(f)})),l},M.prototype.url=function(a){var r=this,o={pathname:function(){var l=a?function(){var d=(a.match(/\.[^.]+?\/.+/)||[])[0]||"";return d.replace(/^[^\/]+/,"").replace(/\?.+/,"")}():location.pathname;return l.replace(/^\//,"").split("/")}(),search:function(){var l={},d=(a?function(){var f=(a.match(/\?.+/)||[])[0]||"";return f.replace(/\#.+/,"")}():location.search).replace(/^\?+/,"").split("&");return r.each(d,function(f,D){var t=D.indexOf("="),e=function(){return t<0?D.substr(0,D.length):t===0?!1:D.substr(0,t)}();e&&(l[e]=t>0?D.substr(t+1):null)}),l}(),hash:r.router(function(){return a?(a.match(/#.+/)||[])[0]||"/":location.hash}())};return o},M.prototype.data=function(a,r,o){if(a=a||"layui",o=o||localStorage,!(!k.JSON||!k.JSON.parse)){if(r===null)return delete o[a];r=typeof r=="object"?r:{key:r};try{var l=JSON.parse(o[a])}catch{var l={}}return"value"in r&&(l[r.key]=r.value),r.remove&&delete l[r.key],o[a]=JSON.stringify(l),r.key?l[r.key]:l}},M.prototype.sessionData=function(a,r){return this.data(a,r,sessionStorage)},M.prototype.device=function(a){var r=navigator.userAgent.toLowerCase(),o=function(d){var f=new RegExp(d+"/([^\\s\\_\\-]+)");return d=(r.match(f)||[])[1],d||!1},l={os:function(){if(/windows/.test(r))return"windows";if(/linux/.test(r))return"linux";if(/iphone|ipod|ipad|ios/.test(r))return"ios";if(/mac/.test(r))return"mac"}(),ie:function(){return!!k.ActiveXObject||"ActiveXObject"in k?(r.match(/msie\s(\d+)/)||[])[1]||"11":!1}(),weixin:o("micromessenger")};return a&&!l[a]&&(l[a]=o(a)),l.android=/android/.test(r),l.ios=l.os==="ios",l.mobile=!!(l.android||l.ios),l},M.prototype.hint=function(){return{error:F}},M.prototype._typeof=function(a){return a===null?String(a):typeof a=="object"||typeof a=="function"?function(){var r=Object.prototype.toString.call(a).match(/\s(.+)\]$/)||[],o="Function|Array|Date|RegExp|Object|Error|Symbol";return r=r[1]||"Object",new RegExp("\\b("+o+")\\b").test(r)?r.toLowerCase():"object"}():typeof a},M.prototype._isArray=function(a){var r=this,o,l=r._typeof(a);return!a||typeof a!="object"||a===k?!1:(o="length"in a&&a.length,l==="array"||o===0||typeof o=="number"&&o>0&&o-1 in a)},M.prototype.each=function(a,r){var o,l=this,d=function(f,D){return r.call(D[f],f,D[f])};if(typeof r!="function")return l;if(a=a||[],l._isArray(a))for(o=0;o<a.length&&!d(o,a);o++);else for(o in a)if(d(o,a))break;return l},M.prototype.sort=function(a,r,o){var l=JSON.parse(JSON.stringify(a||[]));return r&&(l.sort(function(d,f){var D=/^-?\d+$/,t=d[r],e=f[r];return D.test(t)&&(t=parseFloat(t)),D.test(e)&&(e=parseFloat(e)),t-e}),o&&l.reverse()),l},M.prototype.stope=function(a){a=a||k.event;try{a.stopPropagation()}catch{a.cancelBubble=!0}};var B="LAYUI-EVENT-REMOVE";M.prototype.onevent=function(a,r,o){return typeof a!="string"||typeof o!="function"?this:M.event(a,r,null,o)},M.prototype.event=M.event=function(a,r,o,l){var d=this,f=null,D=(r||"").match(/\((.*)\)$/)||[],t=(a+"."+r).replace(D[0],""),e=D[1]||"",n=function(i,u){var c=u&&u.call(d,o);c===!1&&f===null&&(f=!1)};return o===B?(delete(d.cache.event[t]||{})[e],d):l?(T.event[t]=T.event[t]||{},T.event[t][e]=[l],this):(w.each(T.event[t],function(i,u){if(e==="{*}"){w.each(u,n);return}i===""&&w.each(u,n),e&&i===e&&w.each(u,n)}),f)},M.prototype.on=function(a,r,o){var l=this;return l.onevent.call(l,r,a,o)},M.prototype.off=function(a,r){var o=this;return o.event.call(o,r,a,B)};var w=new M,$="lay",X=window.document,C=function(a){return new I(a)},I=function(a){for(var r=0,o=typeof a=="object"?[a]:(this.selector=a,X.querySelectorAll(a||null));r<o.length;r++)this.push(o[r])};I.prototype=[],I.prototype.constructor=I,C.extend=function(){var a=1,r=arguments,o=function(l,d){l=l||(d.constructor===Array?[]:{});for(var f in d)l[f]=d[f]&&d[f].constructor===Object?o(l[f],d[f]):d[f];return l};for(r[0]=typeof r[0]=="object"?r[0]:{};a<r.length;a++)typeof r[a]=="object"&&o(r[0],r[a]);return r[0]},C.v="1.0.7",C.ie=function(){var a=navigator.userAgent.toLowerCase();return!!window.ActiveXObject||"ActiveXObject"in window?(a.match(/msie\s(\d+)/)||[])[1]||"11":!1}(),C.layui=w,C.getPath=w.cache.dir,C.stope=w.stope,C.each=function(){return w.each.apply(w,arguments),this},C.digit=function(a,r,o){var l="";a=String(a),r=r||2;for(var d=a.length;d<r;d++)l+="0";return a<Math.pow(10,r)?l+(a|0):a},C.elem=function(a,r){var o=X.createElement(a);return C.each(r||{},function(l,d){o.setAttribute(l,d)}),o},C.hasScrollbar=function(){return X.body.scrollHeight>(window.innerHeight||X.documentElement.clientHeight)},C.position=function(a,r,o){if(!!r){o=o||{},(a===X||a===C("body")[0])&&(o.clickType="right");var l=o.clickType==="right"?function(){var s=o.e||window.event||{};return{left:s.clientX,top:s.clientY,right:s.clientX,bottom:s.clientY}}():a.getBoundingClientRect(),d=r.offsetWidth,f=r.offsetHeight,D=function(s){return s=s?"scrollLeft":"scrollTop",X.body[s]|X.documentElement[s]},t=function(s){return X.documentElement[s?"clientWidth":"clientHeight"]},e=5,n=l.left,i=l.bottom;n+d+e>t("width")&&(n=t("width")-d-e),i+f+e>t()&&(l.top>f+e?i=l.top-f-e*2:o.clickType==="right"&&(i=t()-f-e*2,i<0&&(i=0)));var u=o.position;if(u&&(r.style.position=u),r.style.left=n+(u==="fixed"?0:D(1))+"px",r.style.top=i+(u==="fixed"?0:D())+"px",!C.hasScrollbar()){var c=r.getBoundingClientRect();!o.SYSTEM_RELOAD&&c.bottom+e>t()&&(o.SYSTEM_RELOAD=!0,setTimeout(function(){C.position(a,r,o)},50))}}},C.options=function(a,r){var o=C(a),l=r||"lay-options";try{return new Function("return "+(o.attr(l)||"{}"))()}catch(d){return hint.error("parseerror\uFF1A"+d,"error"),{}}},C.isTopElem=function(a){var r=[X,C("body")[0]],o=!1;return C.each(r,function(l,d){if(d===a)return o=!0}),o},I.addStr=function(a,r){return a=a.replace(/\s+/," "),r=r.replace(/\s+/," ").split(" "),C.each(r,function(o,l){new RegExp("\\b"+l+"\\b").test(a)||(a=a+" "+l)}),a.replace(/^\s|\s$/,"")},I.removeStr=function(a,r){return a=a.replace(/\s+/," "),r=r.replace(/\s+/," ").split(" "),C.each(r,function(o,l){var d=new RegExp("\\b"+l+"\\b");d.test(a)&&(a=a.replace(d,""))}),a.replace(/\s+/," ").replace(/^\s|\s$/,"")},I.prototype.find=function(a){var r=this,o=0,l=[],d=typeof a=="object";return this.each(function(f,D){for(var t=d?D.contains(a):D.querySelectorAll(a||null);o<t.length;o++)l.push(t[o]);r.shift()}),d||(r.selector=(r.selector?r.selector+" ":"")+a),C.each(l,function(f,D){r.push(D)}),r},I.prototype.each=function(a){return C.each.call(this,this,a)},I.prototype.addClass=function(a,r){return this.each(function(o,l){l.className=I[r?"removeStr":"addStr"](l.className,a)})},I.prototype.removeClass=function(a){return this.addClass(a,!0)},I.prototype.hasClass=function(a){var r=!1;return this.each(function(o,l){new RegExp("\\b"+a+"\\b").test(l.className)&&(r=!0)}),r},I.prototype.css=function(a,r){var o=this,l=function(d){return isNaN(d)?d:d+"px"};return typeof a=="string"&&r===void 0?function(){if(o.length>0)return o[0].style[a]}():o.each(function(d,f){typeof a=="object"?C.each(a,function(D,t){f.style[D]=l(t)}):f.style[a]=l(r)})},I.prototype.width=function(a){var r=this;return a===void 0?function(){if(r.length>0)return r[0].offsetWidth}():r.each(function(o,l){r.css("width",a)})},I.prototype.height=function(a){var r=this;return a===void 0?function(){if(r.length>0)return r[0].offsetHeight}():r.each(function(o,l){r.css("height",a)})},I.prototype.attr=function(a,r){var o=this;return r===void 0?function(){if(o.length>0)return o[0].getAttribute(a)}():o.each(function(l,d){d.setAttribute(a,r)})},I.prototype.removeAttr=function(a){return this.each(function(r,o){o.removeAttribute(a)})},I.prototype.html=function(a){var r=this;return a===void 0?function(){if(r.length>0)return r[0].innerHTML}():this.each(function(o,l){l.innerHTML=a})},I.prototype.val=function(a){var r=this;return a===void 0?function(){if(r.length>0)return r[0].value}():this.each(function(o,l){l.value=a})},I.prototype.append=function(a){return this.each(function(r,o){typeof a=="object"?o.appendChild(a):o.innerHTML=o.innerHTML+a})},I.prototype.remove=function(a){return this.each(function(r,o){a?o.removeChild(a):o.parentNode.removeChild(o)})},I.prototype.on=function(a,r){return this.each(function(o,l){l.attachEvent?l.attachEvent("on"+a,function(d){d.target=d.srcElement,r.call(l,d)}):l.addEventListener(a,r,!1)})},I.prototype.off=function(a,r){return this.each(function(o,l){l.detachEvent?l.detachEvent("on"+a,r):l.removeEventListener(a,r,!1)})},window.lay=C,window.layui&&w.define&&w.define(function(a){a($,C)})})(window),function(k,R){var T=k.layui&&layui.define,M={getPath:k.lay&&lay.getPath?lay.getPath:"",link:function(t,e,n){!S.path||k.lay&&lay.layui&&lay.layui.link(S.path+t,e,n)}},W=k.LAYUI_GLOBAL||{},S={v:"5.3.1",config:{},index:k.laydate&&k.laydate.v?1e5:0,path:W.laydate_dir||M.getPath,set:function(t){var e=this;return e.config=lay.extend({},e.config,t),e},ready:function(t){var e="laydate",n="",i=(T?"modules/laydate/":"theme/")+"default/laydate.css?v="+S.v+n;return T?layui.addcss(i,t,e):M.link(i,t,e),this}},F=function(){var t=this,e=t.config,n=e.id;return F.that[n]=t,{hint:function(i){t.hint.call(t,i)},config:t.config}},z="laydate",V=".layui-laydate",B="layui-this",w="laydate-disabled",$=[100,2e5],X="layui-laydate-static",C="layui-laydate-list",I="layui-laydate-hint",a="layui-laydate-footer",r=".laydate-btns-confirm",o="laydate-time-text",l="laydate-btns-time",d="layui-laydate-preview",f=function(t){var e=this;e.index=++S.index,e.config=lay.extend({},e.config,S.config,t),t=e.config,t.id="id"in t?t.id:e.index,S.ready(function(){e.init()})},D="yyyy|y|MM|M|dd|d|HH|H|mm|m|ss|s";F.formatArr=function(t){return(t||"").match(new RegExp(D+"|.","g"))||[]},f.isLeapYear=function(t){return t%4===0&&t%100!==0||t%400===0},f.prototype.config={type:"date",range:!1,format:"yyyy-MM-dd",value:null,isInitValue:!0,min:"1900-1-1",max:"2099-12-31",trigger:"click",show:!1,showBottom:!0,isPreview:!0,btns:["clear","now","confirm"],lang:"cn",theme:"default",position:null,calendar:!1,mark:{},zIndex:null,done:null,change:null,timesOption:null},f.prototype.lang=function(){var t=this,e=t.config,n={cn:{weeks:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],time:["\u65F6","\u5206","\u79D2"],timeTips:"\u9009\u62E9\u65F6\u95F4",startTime:"\u5F00\u59CB\u65F6\u95F4",endTime:"\u7ED3\u675F\u65F6\u95F4",dateTips:"\u8FD4\u56DE\u65E5\u671F",month:["\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341","\u5341\u4E00","\u5341\u4E8C"],tools:{confirm:"\u786E\u5B9A",clear:"\u6E05\u7A7A",now:"\u73B0\u5728"},timeout:"\u7ED3\u675F\u65F6\u95F4\u4E0D\u80FD\u65E9\u4E8E\u5F00\u59CB\u65F6\u95F4<br>\u8BF7\u91CD\u65B0\u9009\u62E9",invalidDate:"\u4E0D\u5728\u6709\u6548\u65E5\u671F\u6216\u65F6\u95F4\u8303\u56F4\u5185",formatError:["\u65E5\u671F\u683C\u5F0F\u4E0D\u5408\u6CD5<br>\u5FC5\u987B\u9075\u5FAA\u4E0B\u8FF0\u683C\u5F0F\uFF1A<br>","<br>\u5DF2\u4E3A\u4F60\u91CD\u7F6E"],preview:"\u5F53\u524D\u9009\u4E2D\u7684\u7ED3\u679C"},en:{weeks:["Su","Mo","Tu","We","Th","Fr","Sa"],time:["Hours","Minutes","Seconds"],timeTips:"Select Time",startTime:"Start Time",endTime:"End Time",dateTips:"Select Date",month:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tools:{confirm:"Confirm",clear:"Clear",now:"Now"},timeout:"End time cannot be less than start Time<br>Please re-select",invalidDate:"Invalid date",formatError:["The date format error<br>Must be followed\uFF1A<br>","<br>It has been reset"],preview:"The selected result"}};return n[e.lang]||n.cn},f.prototype.init=function(){var t=this,e=t.config,n=e.position==="static",i={year:"yyyy",month:"yyyy-MM",date:"yyyy-MM-dd",time:"HH:mm:ss",datetime:"yyyy-MM-dd HH:mm:ss"};e.elem=lay(e.elem),e.eventElem=lay(e.eventElem),e.elem[0]&&(t.rangeStr=e.range?typeof e.range=="string"?e.range:"-":"",e.range&&e.range.constructor===Array&&(t.rangeElem=[lay(e.range[0]),lay(e.range[1])]),i[e.type]||(k.console&&console.error&&console.error("laydate type error:'"+e.type+"' is not supported"),e.type="date"),e.format===i.date&&(e.format=i[e.type]||i.date),t.format=F.formatArr(e.format),t.EXP_IF="",t.EXP_SPLIT="",lay.each(t.format,function(u,c){var s=new RegExp(D).test(c)?"\\d{"+function(){return new RegExp(D).test(t.format[u===0?u+1:u-1]||"")?/^yyyy|y$/.test(c)?4:c.length:/^yyyy$/.test(c)?"1,4":/^y$/.test(c)?"1,308":"1,2"}()+"}":"\\"+c;t.EXP_IF=t.EXP_IF+s,t.EXP_SPLIT=t.EXP_SPLIT+"("+s+")"}),t.EXP_IF_ONE=new RegExp("^"+t.EXP_IF+"$"),t.EXP_IF=new RegExp("^"+(e.range?t.EXP_IF+"\\s\\"+t.rangeStr+"\\s"+t.EXP_IF:t.EXP_IF)+"$"),t.EXP_SPLIT=new RegExp("^"+t.EXP_SPLIT+"$",""),t.isInput(e.elem[0])||e.trigger==="focus"&&(e.trigger="click"),e.elem.attr("lay-key")||(e.elem.attr("lay-key",t.index),e.eventElem.attr("lay-key",t.index)),e.mark=lay.extend({},e.calendar&&e.lang==="cn"?{"0-1-1":"\u5143\u65E6","0-2-14":"\u60C5\u4EBA","0-3-8":"\u5987\u5973","0-3-12":"\u690D\u6811","0-4-1":"\u611A\u4EBA","0-5-1":"\u52B3\u52A8","0-5-4":"\u9752\u5E74","0-6-1":"\u513F\u7AE5","0-9-10":"\u6559\u5E08","0-9-18":"\u56FD\u803B","0-10-1":"\u56FD\u5E86","0-12-25":"\u5723\u8BDE"}:{},e.mark),lay.each(["min","max"],function(u,c){var s=[],p=[];if(typeof e[c]=="number"){var h=e[c],A=new Date().getTime(),b=864e5,O=new Date(h?h<b?A+h*b:h:A);s=[O.getFullYear(),O.getMonth()+1,O.getDate()],h<b||(p=[O.getHours(),O.getMinutes(),O.getSeconds()])}else s=(e[c].match(/\d+-\d+-\d+/)||[""])[0].split("-"),p=(e[c].match(/\d+:\d+:\d+/)||[""])[0].split(":");e[c]={year:s[0]|0||new Date().getFullYear(),month:s[1]?(s[1]|0)-1:new Date().getMonth(),date:s[2]|0||new Date().getDate(),hours:p[0]|0,minutes:p[1]|0,seconds:p[2]|0}}),t.elemID="layui-laydate"+e.elem.attr("lay-key"),(e.show||n)&&t.render(),n||t.events(),e.value&&e.isInitValue&&(e.value.constructor===Date?t.setValue(t.parse(0,t.systemDate(e.value))):t.setValue(e.value)))},f.prototype.render=function(){var t=this,e=t.config,n=t.lang(),i=e.position==="static",u=t.elem=lay.elem("div",{id:t.elemID,class:["layui-laydate",e.range?" layui-laydate-range":"",i?" "+X:"",e.theme&&e.theme!=="default"&&!/^#/.test(e.theme)?" laydate-theme-"+e.theme:""].join("")}),c=t.elemMain=[],s=t.elemHeader=[],p=t.elemCont=[],h=t.table=[],A=t.footer=lay.elem("div",{class:a});if(e.zIndex&&(u.style.zIndex=e.zIndex),lay.each(new Array(2),function(x){if(!e.range&&x>0)return!0;var y=lay.elem("div",{class:"layui-laydate-header"}),m=[function(){var g=lay.elem("i",{class:"layui-icon laydate-icon laydate-prev-y"});return g.innerHTML="&#xe65a;",g}(),function(){var g=lay.elem("i",{class:"layui-icon laydate-icon laydate-prev-m"});return g.innerHTML="&#xe603;",g}(),function(){var g=lay.elem("div",{class:"laydate-set-ym"}),N=lay.elem("span"),j=lay.elem("span");return g.appendChild(N),g.appendChild(j),g}(),function(){var g=lay.elem("i",{class:"layui-icon laydate-icon laydate-next-m"});return g.innerHTML="&#xe602;",g}(),function(){var g=lay.elem("i",{class:"layui-icon laydate-icon laydate-next-y"});return g.innerHTML="&#xe65b;",g}()],E=lay.elem("div",{class:"layui-laydate-content"}),v=lay.elem("table"),L=lay.elem("thead"),_=lay.elem("tr");lay.each(m,function(g,N){y.appendChild(N)}),L.appendChild(_),lay.each(new Array(6),function(g){var N=v.insertRow(0);lay.each(new Array(7),function(j){if(g===0){var J=lay.elem("th");J.innerHTML=n.weeks[j],_.appendChild(J)}N.insertCell(j)})}),v.insertBefore(L,v.children[0]),E.appendChild(v),c[x]=lay.elem("div",{class:"layui-laydate-main laydate-main-list-"+x}),c[x].appendChild(y),c[x].appendChild(E),s.push(m),p.push(E),h.push(v)}),lay(A).html(function(){var x=[],y=[];return e.type==="datetime"&&x.push('<span lay-type="datetime" class="'+l+'">'+n.timeTips+"</span>"),!e.range&&e.type==="datetime"||x.push('<span class="'+d+'" title="'+n.preview+'"></span>'),lay.each(e.btns,function(m,E){var v=n.tools[E]||"btn";e.range&&E==="now"||(i&&E==="clear"&&(v=e.lang==="cn"?"\u91CD\u7F6E":"Reset"),y.push('<span lay-type="'+E+'" class="laydate-btns-'+E+'">'+v+"</span>"))}),x.push('<div class="laydate-footer-btns">'+y.join("")+"</div>"),x.join("")}()),lay.each(c,function(x,y){u.appendChild(y)}),e.showBottom&&u.appendChild(A),/^#/.test(e.theme)){var b=lay.elem("style"),O=["#{{id}} .layui-laydate-header{background-color:{{theme}};}","#{{id}} .layui-this{background-color:{{theme}} !important;}"].join("").replace(/{{id}}/g,t.elemID).replace(/{{theme}}/g,e.theme);"styleSheet"in b?(b.setAttribute("type","text/css"),b.styleSheet.cssText=O):b.innerHTML=O,lay(u).addClass("laydate-theme-molv"),u.appendChild(b)}S.thisId=e.id,t.remove(f.thisElemDate),i?e.elem.append(u):(R.body.appendChild(u),t.position()),t.checkDate().calendar(null,0,"init"),t.changeEvent(),f.thisElemDate=t.elemID,typeof e.ready=="function"&&e.ready(lay.extend({},e.dateTime,{month:e.dateTime.month+1})),t.preview()},f.prototype.remove=function(t){var e=this;e.config;var n=lay("#"+(t||e.elemID));return n[0]&&(n.hasClass(X)||e.checkDate(function(){n.remove()})),e},f.prototype.position=function(){var t=this,e=t.config;return lay.position(t.bindElem||e.elem[0],t.elem,{position:e.position}),t},f.prototype.hint=function(t){var e=this;e.config;var n=lay.elem("div",{class:I});!e.elem||(n.innerHTML=t||"",lay(e.elem).find("."+I).remove(),e.elem.appendChild(n),clearTimeout(e.hinTimer),e.hinTimer=setTimeout(function(){lay(e.elem).find("."+I).remove()},3e3))},f.prototype.getAsYM=function(t,e,n){return n?e--:e++,e<0&&(e=11,t--),e>11&&(e=0,t++),[t,e]},f.prototype.systemDate=function(t){var e=t||new Date;const[n,i,u]=this.config.timesOption||[null,null,null];return{year:e.getFullYear(),month:e.getMonth(),date:e.getDate(),hours:t?t.getHours():n&&n[0]?n[0]:0,minutes:t?t.getMinutes():i&&i[0]?i[0]:0,seconds:t?t.getSeconds():u&&u[0]?u[0]:0}},f.prototype.checkDate=function(t){var e=this,n=e.config,i=e.lang(),u=n.dateTime=n.dateTime||e.systemDate(),c,s,p=e.bindElem||n.elem[0];e.isInput(p);var h=function(){if(e.rangeElem){var y=[e.rangeElem[0].val(),e.rangeElem[1].val()];if(y[0]&&y[1])return y.join(" "+e.rangeStr+" ")}return e.isInput(p)?p.value:n.position==="static"?"":lay(p).attr("lay-date")}(),A=function(y){y.year>$[1]&&(y.year=$[1],s=!0),y.month>11&&(y.month=11,s=!0),y.hours>23&&(y.hours=0,s=!0),y.minutes>59&&(y.minutes=0,y.hours++,s=!0),y.seconds>59&&(y.seconds=0,y.minutes++,s=!0),c=S.getEndDate(y.month+1,y.year),y.date>c&&(y.date=c,s=!0)},b=function(y,m,E){var v=["startTime","endTime"];m=(m.match(e.EXP_SPLIT)||[]).slice(1),E=E||0,n.range&&(e[v[E]]=e[v[E]]||{}),lay.each(e.format,function(L,_){var g=parseFloat(m[L]);m[L].length<_.length&&(s=!0),/yyyy|y/.test(_)?(g<$[0]&&(g=$[0],s=!0),y.year=g):/MM|M/.test(_)?(g<1&&(g=1,s=!0),y.month=g-1):/dd|d/.test(_)?(g<1&&(g=1,s=!0),y.date=g):/HH|H/.test(_)?(g<1&&(g=0,s=!0),y.hours=g,n.range&&(e[v[E]].hours=g)):/mm|m/.test(_)?(g<1&&(g=0,s=!0),y.minutes=g,n.range&&(e[v[E]].minutes=g)):/ss|s/.test(_)&&(g<1&&(g=0,s=!0),y.seconds=g,n.range&&(e[v[E]].seconds=g))}),A(y)};if(t==="limit")return A(u),e;h=h||n.value,typeof h=="string"&&(h=h.replace(/\s+/g," ").replace(/^\s|\s$/g,""));var O=function(){n.range&&(e.endDate=e.endDate||lay.extend({},n.dateTime,function(){var y={},m=n.dateTime,E=e.getAsYM(m.year,m.month);return n.type==="year"?y.year=m.year+1:n.type!=="time"&&(y.year=E[0],y.month=E[1]),(n.type==="datetime"||n.type==="time")&&(y.hours=23,y.minutes=y.seconds=59),y}()))};O(),typeof h=="string"&&h?e.EXP_IF.test(h)?n.range?(h=h.split(" "+e.rangeStr+" "),lay.each([n.dateTime,e.endDate],function(y,m){b(m,h[y],y)})):b(u,h):(e.hint(i.formatError[0]+(n.range?n.format+" "+e.rangeStr+" "+n.format:n.format)+i.formatError[1]),s=!0):h&&h.constructor===Date?n.dateTime=e.systemDate(h):(n.dateTime=e.systemDate(),delete e.startTime,delete e.endDate,O(),delete e.endTime),function(){if(e.rangeElem){var y=[e.rangeElem[0].val(),e.rangeElem[1].val()],m=[n.dateTime,e.endDate];lay.each(y,function(E,v){e.EXP_IF_ONE.test(v)&&b(m[E],v,E)})}}(),A(u),n.range&&A(e.endDate),s&&h&&e.setValue(n.range?e.endDate?e.parse():"":e.parse());var x=function(y){return e.newDate(y).getTime()};return(x(u)>x(n.max)||x(u)<x(n.min))&&(u=n.dateTime=lay.extend({},n.min)),n.range&&(x(e.endDate)<x(n.min)||x(e.endDate)>x(n.max))&&(e.endDate=lay.extend({},n.max)),t&&t(),e},f.prototype.mark=function(t,e){var n=this,i,u=n.config;return lay.each(u.mark,function(c,s){var p=c.split("-");(p[0]==e[0]||p[0]==0)&&(p[1]==e[1]||p[1]==0)&&p[2]==e[2]&&(i=s||e[2])}),i&&t.html('<span class="laydate-day-mark">'+i+"</span>"),n},f.prototype.limit=function(t,e,n,i){var u=this,c=u.config,s={},p=c[n>41?"endDate":"dateTime"],h,A=lay.extend({},p,e||{}),b=c.disabled,O=c.weekend;return lay.each({now:A,min:c.min,max:c.max},function(x,y){s[x]=u.newDate(lay.extend({year:y.year,month:y.month,date:y.date},function(){var m={};return lay.each(i,function(E,v){m[v]=y[v]}),m}())).getTime()}),h=s.now<s.min||s.now>s.max,b&&lay.each({now:A},function(x,y){const m=y.year+"-"+(y.month+1<10?"0"+(y.month+1):y.month+1)+"-"+(y.date<10?"0"+y.date:y.date);h||(h=b.includes(m))}),O=="disabled"&&lay.each({now:A},function(x,y){const m=y.year+"-"+(y.month+1<10?"0"+(y.month+1):y.month+1)+"-"+(y.date<10?"0"+y.date:y.date),E=new Date(m).getDay();h||(h=E==0||E==6)}),t&&t[h?"addClass":"removeClass"](w),h},f.prototype.thisDateTime=function(t){var e=this,n=e.config;return t?e.endDate:n.dateTime},f.prototype.calendar=function(t,c,n){var i=this,u=i.config,c=c?1:0,s=t||i.thisDateTime(c),p=new Date,h,A,b,O=i.lang(),x=u.type!=="date"&&u.type!=="datetime",y=lay(i.table[c]).find("td"),m=lay(i.elemHeader[c][2]).find("span");return s.year<$[0]&&(s.year=$[0],i.hint(O.invalidDate)),s.year>$[1]&&(s.year=$[1],i.hint(O.invalidDate)),i.firstDate||(i.firstDate=lay.extend({},s)),p.setFullYear(s.year,s.month,1),h=p.getDay(),A=S.getEndDate(s.month||12,s.year),b=S.getEndDate(s.month+1,s.year),lay.each(y,function(E,v){var L=[s.year,s.month],_=0;v=lay(v),v.removeAttr("class"),E<h?(_=A-h+E,v.addClass("laydate-day-prev"),L=i.getAsYM(s.year,s.month,"sub")):E>=h&&E<b+h?(_=E-h,_+1===s.date&&v.addClass(B)):(_=E-b-h,v.addClass("laydate-day-next"),L=i.getAsYM(s.year,s.month)),L[1]++,L[2]=_+1,v.attr("lay-ymd",L.join("-")).html(L[2]),i.mark(v,L).limit(v,{year:L[0],month:L[1]-1,date:L[2]},E)}),lay(m[0]).attr("lay-ym",s.year+"-"+(s.month+1)),lay(m[1]).attr("lay-ym",s.year+"-"+(s.month+1)),u.lang==="cn"?(lay(m[0]).attr("lay-type","year").html(s.year+" \u5E74"),lay(m[1]).attr("lay-type","month").html(s.month+1+" \u6708")):(lay(m[0]).attr("lay-type","month").html(O.month[s.month]),lay(m[1]).attr("lay-type","year").html(s.year)),x&&(u.range?t&&(i.listYM=[[u.dateTime.year,u.dateTime.month+1],[i.endDate.year,i.endDate.month+1]],i.list(u.type,0).list(u.type,1),u.type==="time"?i.setBtnStatus("\u65F6\u95F4",lay.extend({},i.systemDate(),i.startTime),lay.extend({},i.systemDate(),i.endTime)):i.setBtnStatus(!0)):(i.listYM=[[s.year,s.month+1]],i.list(u.type,0))),u.range&&n==="init"&&!t&&i.calendar(i.endDate,1),u.range||i.limit(lay(i.footer).find(r),null,0,["hours","minutes","seconds"]),i.setBtnStatus(),i},f.prototype.list=function(t,e){var n=this,i=n.config,u=i.dateTime,c=n.lang(),s=i.range&&i.type!=="date"&&i.type!=="datetime",p=lay.elem("ul",{class:C+" "+{year:"laydate-year-list",month:"laydate-month-list",time:"laydate-time-list"}[t]}),h=n.elemHeader[e],A=lay(h[2]).find("span"),b=n.elemCont[e||0],O=lay(b).find("."+C)[0],x=i.lang==="cn",y=x?"\u5E74":"",m=n.listYM[e]||{},E=["hours","minutes","seconds"],v=["startTime","endTime"][e];if(m[0]<1&&(m[0]=1),t==="year"){var L,_=L=m[0]-7;_<1&&(_=L=1),lay.each(new Array(15),function(Y){var H=lay.elem("li",{"lay-ym":L}),P={year:L};L==m[0]&&lay(H).addClass(B),H.innerHTML=L+y,p.appendChild(H),L<n.firstDate.year?(P.month=i.min.month,P.date=i.min.date):L>=n.firstDate.year&&(P.month=i.max.month,P.date=i.max.date),n.limit(lay(H),P,e),L++}),lay(A[x?0:1]).attr("lay-ym",L-8+"-"+m[1]).html(_+y+" - "+(L-1+y))}else if(t==="month")lay.each(new Array(12),function(Y){var H=lay.elem("li",{"lay-ym":Y}),P={year:m[0],month:Y};Y+1==m[1]&&lay(H).addClass(B),H.innerHTML=c.month[Y]+(x?"\u6708":""),p.appendChild(H),m[0]<n.firstDate.year?P.date=i.min.date:m[0]>=n.firstDate.year&&(P.date=i.max.date),n.limit(lay(H),P,e)}),lay(A[x?0:1]).attr("lay-ym",m[0]+"-"+m[1]).html(m[0]+y);else if(t==="time"){var g=function(){lay(p).find("ol").each(function(Y,H){lay(H).find("li").each(function(P,q){n.limit(lay(q),[{hours:P},{hours:n[v].hours,minutes:P},{hours:n[v].hours,minutes:n[v].minutes,seconds:P}][Y],e,[["hours"],["hours","minutes"],["hours","minutes","seconds"]][Y])})}),i.range||n.limit(lay(n.footer).find(r),n[v],0,["hours","minutes","seconds"])};i.range?n[v]||(n[v]=v==="startTime"?u:n.endDate):n[v]=u,console.log(i.timesOption),lay.each(i.timesOption||[24,60,60],function(Y,H){var P=lay.elem("li"),q=["<p>"+c.time[Y]+"</p><ol>"];lay.each(typeof H=="number"?new Array(H):H,function(U,G){console.log(n[v][E[Y]],U,G),q.push("<li"+(n[v][E[Y]]===(G||U)?' class="'+B+'"':"")+">"+lay.digit(G||U,2)+"</li>")}),P.innerHTML=q.join("")+"</ol>",p.appendChild(P)}),g()}if(O&&b.removeChild(O),b.appendChild(p),t==="year"||t==="month")lay(n.elemMain[e]).addClass("laydate-ym-show"),lay(p).find("li").on("click",function(){var Y=lay(this).attr("lay-ym")|0;if(!lay(this).hasClass(w)){e===0?(u[t]=Y,n.limit(lay(n.footer).find(r),null,0)):n.endDate[t]=Y;var H=i.type==="year"||i.type==="month";H?(lay(p).find("."+B).removeClass(B),lay(this).addClass(B),i.type==="month"&&t==="year"&&(n.listYM[e][0]=Y,s&&((e?n.endDate:u).year=Y),n.list("month",e))):(n.checkDate("limit").calendar(null,e),n.closeList()),n.setBtnStatus(),i.range||(i.type==="month"&&t==="month"||i.type==="year"&&t==="year")&&n.setValue(n.parse()).remove().done(),n.done(null,"change"),lay(n.footer).find("."+l).removeClass(w)}});else{var N=lay.elem("span",{class:o}),j=function(){lay(p).find("ol").each(function(Y){var H=this,P=lay(H).find("li");H.scrollTop=[...P].findIndex(q=>q.classList.contains("layui-this"))*30-60})},J=lay(h[2]).find("."+o);j(),N.innerHTML=i.range?[c.startTime,c.endTime][e]:c.timeTips,lay(n.elemMain[e]).addClass("laydate-time-show"),J[0]&&J.remove(),h[2].appendChild(N),lay(p).find("ol").each(function(Y){var H=this;lay(H).find("li").on("click",function(){var P=this.innerHTML|0;lay(this).hasClass(w)||(i.range?n[v][E[Y]]=P:u[E[Y]]=P,lay(H).find("."+B).removeClass(B),lay(this).addClass(B),g(),j(),(n.endDate||i.type==="time")&&n.done(null,"change"),n.setBtnStatus())})})}return n},f.prototype.listYM=[],f.prototype.closeList=function(){var t=this;t.config,lay.each(t.elemCont,function(e,n){lay(this).find("."+C).remove(),lay(t.elemMain[e]).removeClass("laydate-ym-show laydate-time-show")}),lay(t.elem).find("."+o).remove()},f.prototype.setBtnStatus=function(t,e,n){var i=this,u=i.config,c=i.lang(),s,p=lay(i.footer).find(r);u.range&&u.type!=="time"&&(e=e||u.dateTime,n=n||i.endDate,s=i.newDate(e).getTime()>i.newDate(n).getTime(),i.limit(null,e)||i.limit(null,n)?p.addClass(w):p[s?"addClass":"removeClass"](w),t&&s&&i.hint(typeof t=="string"?c.timeout.replace(/日期/g,t):c.timeout))},f.prototype.parse=function(t,e){var n=this,i=n.config,u=e||(t=="end"?lay.extend({},n.endDate,n.endTime):i.range?lay.extend({},i.dateTime,n.startTime):i.dateTime),c=S.parse(u,n.format,1);return i.range&&t===void 0?c+" "+n.rangeStr+" "+n.parse("end"):c},f.prototype.newDate=function(t){return t=t||{},new Date(t.year||1,t.month||0,t.date||1,t.hours||0,t.minutes||0,t.seconds||0)},f.prototype.setValue=function(t){var e=this,n=e.config,i=e.bindElem||n.elem[0];return n.position==="static"||(t=t||"",e.isInput(i)?lay(i).val(t):e.rangeElem?(e.rangeElem[0].val(t?e.parse("start"):""),e.rangeElem[1].val(t?e.parse("end"):"")):(lay(i).find("*").length===0&&lay(i).html(t),lay(i).attr("lay-date",t))),e},f.prototype.preview=function(){var t=this,e=t.config;if(!!e.isPreview){var n=lay(t.elem).find("."+d),i=e.range?t.endDate?t.parse():"":t.parse();n.html(i).css({color:"#5FB878","font-size":"14px;"}),setTimeout(function(){n.css({color:"#666","font-size":"12px;"})},300)}},f.prototype.done=function(t,e){var n=this,i=n.config,u=lay.extend({},lay.extend(i.dateTime,n.startTime)),c=lay.extend({},lay.extend(n.endDate,n.endTime));return lay.each([u,c],function(s,p){"month"in p&&lay.extend(p,{month:p.month+1})}),n.preview(),t=t||[n.parse(),u,c],typeof i[e||"done"]=="function"&&i[e||"done"].apply(i,t),n},f.prototype.choose=function(t,e){var n=this,i=n.config,u=n.thisDateTime(e);lay(n.elem).find("td");var c=t.attr("lay-ymd").split("-");c={year:c[0]|0,month:(c[1]|0)-1,date:c[2]|0},!t.hasClass(w)&&(lay.extend(u,c),i.range?(lay.each(["startTime","endTime"],function(s,p){n[p]=n[p]||{hours:0,minutes:0,seconds:0}}),n.calendar(null,e).done(null,"change")):i.position==="static"?n.calendar().done().done(null,"change"):i.type==="date"?n.setValue(n.parse()).remove().done():i.type==="datetime"&&n.calendar().done(null,"change"))},f.prototype.tool=function(t,e){var n=this,i=n.config,u=n.lang(),c=i.dateTime,s=i.position==="static",p={datetime:function(){lay(t).hasClass(w)||(n.list("time",0),i.range&&n.list("time",1),lay(t).attr("lay-type","date").html(n.lang().dateTips))},date:function(){n.closeList(),lay(t).attr("lay-type","datetime").html(n.lang().timeTips)},clear:function(){s&&(lay.extend(c,n.firstDate),n.calendar()),i.range&&(delete i.dateTime,delete n.endDate,delete n.startTime,delete n.endTime),n.setValue("").remove(),n.done(["",{},{}])},now:function(){var h=new Date;lay.extend(c,n.systemDate(),{hours:h.getHours(),minutes:h.getMinutes(),seconds:h.getSeconds()}),n.setValue(n.parse()).remove(),s&&n.calendar(),n.done()},confirm:function(){if(i.range){if(lay(t).hasClass(w))return n.hint(i.type==="time"?u.timeout.replace(/日期/g,"\u65F6\u95F4"):u.timeout)}else if(lay(t).hasClass(w))return n.hint(u.invalidDate);n.done(),n.setValue(n.parse()).remove()}};p[e]&&p[e]()},f.prototype.change=function(t){var e=this,n=e.config,i=e.thisDateTime(t),u=n.range&&(n.type==="year"||n.type==="month"),c=e.elemCont[t||0],s=e.listYM[t],p=function(h){var A=lay(c).find(".laydate-year-list")[0],b=lay(c).find(".laydate-month-list")[0];return A&&(s[0]=h?s[0]-15:s[0]+15,e.list("year",t)),b&&(h?s[0]--:s[0]++,e.list("month",t)),(A||b)&&(lay.extend(i,{year:s[0]}),u&&(i.year=s[0]),n.range||e.done(null,"change"),n.range||e.limit(lay(e.footer).find(r),{year:s[0]})),e.setBtnStatus(),A||b};return{prevYear:function(){p("sub")||(i.year--,e.checkDate("limit").calendar(null,t),e.done(null,"change"))},prevMonth:function(){var h=e.getAsYM(i.year,i.month,"sub");lay.extend(i,{year:h[0],month:h[1]}),e.checkDate("limit").calendar(null,t),e.done(null,"change")},nextMonth:function(){var h=e.getAsYM(i.year,i.month);lay.extend(i,{year:h[0],month:h[1]}),e.checkDate("limit").calendar(null,t),e.done(null,"change")},nextYear:function(){p()||(i.year++,e.checkDate("limit").calendar(null,t),e.done(null,"change"))}}},f.prototype.changeEvent=function(){var t=this;t.config,lay(t.elem).on("click",function(e){lay.stope(e)}).on("mousedown",function(e){lay.stope(e)}),lay.each(t.elemHeader,function(e,n){lay(n[0]).on("click",function(i){t.change(e).prevYear()}),lay(n[1]).on("click",function(i){t.change(e).prevMonth()}),lay(n[2]).find("span").on("click",function(i){var u=lay(this),c=u.attr("lay-ym"),s=u.attr("lay-type");!c||(c=c.split("-"),t.listYM[e]=[c[0]|0,c[1]|0],t.list(s,e),lay(t.footer).find("."+l).addClass(w))}),lay(n[3]).on("click",function(i){t.change(e).nextMonth()}),lay(n[4]).on("click",function(i){t.change(e).nextYear()})}),lay.each(t.table,function(e,n){var i=lay(n).find("td");i.on("click",function(){t.choose(lay(this),e)})}),lay(t.footer).find("span").on("click",function(){var e=lay(this).attr("lay-type");t.tool(this,e)})},f.prototype.isInput=function(t){return/input|textarea/.test(t.tagName.toLocaleLowerCase())},f.prototype.events=function(){var t=this,e=t.config,n=function(i,u){i.on(e.trigger,function(){u&&(t.bindElem=this),t.render()})};!e.elem[0]||e.elem[0].eventHandler||(n(e.elem,"bind"),n(e.eventElem),e.elem[0].eventHandler=!0)},F.that={},F.getThis=function(t){var e=F.that[t];return e||hint.error(t?z+" instance with ID '"+t+"' not found":"ID argument required"),e},M.run=function(t){t(R).on("mousedown",function(e){if(!!S.thisId){var n=F.getThis(S.thisId);if(!!n){var i=n.config;e.target===i.elem[0]||e.target===i.eventElem[0]||e.target===t(i.closeStop)[0]||n.remove()}}}).on("keydown",function(e){if(!!S.thisId){var n=F.getThis(S.thisId);!n||e.keyCode===13&&t("#"+n.elemID)[0]&&n.elemID===f.thisElemDate&&(e.preventDefault(),t(n.footer).find(r)[0].click())}}),t(k).on("resize",function(){if(!!S.thisId){var e=F.getThis(S.thisId);if(!!e){if(!e.elem||!t(V)[0])return!1;e.position()}}})},S.render=function(t){var e=new f(t);return F.call(e)},S.parse=function(t,e,n){return t=t||{},typeof e=="string"&&(e=F.formatArr(e)),e=(e||[]).concat(),lay.each(e,function(i,u){/yyyy|y/.test(u)?e[i]=lay.digit(t.year,u.length):/MM|M/.test(u)?e[i]=lay.digit(t.month+(n||0),u.length):/dd|d/.test(u)?e[i]=lay.digit(t.date,u.length):/HH|H/.test(u)?e[i]=lay.digit(t.hours,u.length):/mm|m/.test(u)?e[i]=lay.digit(t.minutes,u.length):/ss|s/.test(u)&&(e[i]=lay.digit(t.seconds,u.length))}),e.join("")},S.getEndDate=function(t,e){var n=new Date;return n.setFullYear(e||n.getFullYear(),t||n.getMonth()+1,1),new Date(n.getTime()-1e3*60*60*24).getDate()},T?(S.ready(),layui.define("lay",function(t){S.path=layui.cache.dir,M.run(lay),t(z,S)})):typeof define=="function"&&define.amd?define(function(){return M.run(lay),S}):function(){S.ready(),M.run(k.lay),k.laydate=S}()}(window,window.document)});
