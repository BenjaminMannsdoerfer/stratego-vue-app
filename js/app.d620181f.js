(function(e){function t(t){for(var a,s,c=t[0],o=t[1],l=t[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},s={app:0},n={app:0},i=[];function c(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"97b882c4"}[e]+".js"}function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],r={about:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=new Promise((function(t,r){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"0a1aab6a"}[e]+".css",n=o.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===n))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===n)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||n,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[e],f.parentNode.removeChild(f),r(i)},f.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[e]=0})));var a=n[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var r=n[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,r[1](d)}n[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/stratego-vue-app/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"16c0":function(e,t,r){},"35ed":function(e,t,r){e.exports=r.p+"img/stratego_title.4e7e4670.png"},4667:function(e,t,r){"use strict";r("d604")},"4f67":function(e,t,r){"use strict";r("a36f")},"56d7":function(e,t,r){"use strict";r.r(t),r.d(t,"firebaseAuth",(function(){return Ye}));var a=r("1da1"),s=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("96cf"),r("d3b7"),r("ac1f"),r("466d"),r("2b0e")),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{staticClass:"backgroundd",attrs:{id:"inspire"}},[r("Navigation",{attrs:{items:e.items,player:e.player,lobby:e.lobby}}),r("v-main",[r("router-view",{attrs:{websocket:e.websocket,authentication:e.authentication,player:e.player,size:e.size,fields:e.fields,currentPlayerIndex:e.currentPlayerIndex,currentPlayer:e.currentPlayer,playerListBufferBlue:e.playerListBufferBlue,playerListBufferRed:e.playerListBufferRed,gameStatus:e.gameStatus,border:e.border,status:e.status,lobby:e.lobby,openSocket:e.openSocket}})],1)],1)},i=[],c=(r("e9c4"),r("b64b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-navigation-drawer",{attrs:{color:"#ecd88a",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[e._v(" Menu ")]),a("v-list-item-subtitle")],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},e._l(e.items,(function(t){return a("v-list-item",{key:t.title,attrs:{to:t.to,link:""}},[a("v-list-item-icon",[a("v-icon",[e._v(e._s(t.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[e._v(e._s(t.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"",dark:"",src:r("35ed"),height:"200"},scopedSlots:e._u([{key:"img",fn:function(t){var r=t.props;return[a("v-img",e._b({attrs:{gradient:"to top right, rgba(0,0,0,0), rgba(0,0,0,0)"}},"v-img",r,!1))]}}])},[[a("v-app-bar-nav-icon",{attrs:{si:""},on:{click:function(t){e.drawer=!e.drawer}}}),a("v-spacer")],e.user.loggedIn?[a("div",{staticClass:"form-group row justify-end"},[a("div",{staticClass:"col-md-2 offset-md-4"},[e.player===e.lobby.participants[0]?a("div",{staticClass:"color-blue",staticStyle:{"font-size":"20px"}},[e._v(" "+e._s("Player: "+e.player)+" ")]):e._e(),e.player===e.lobby.participants[1]?a("div",{staticClass:"color-red",staticStyle:{"font-size":"20px"}},[e._v(" "+e._s("Player: "+e.player)+" ")]):e._e()]),a("div",{staticClass:"col-md-2 offset-md-5"},[a("v-btn",{staticClass:"text-right",on:{click:function(t){return t.preventDefault(),e.signOut.apply(null,arguments)}}},[a("v-icon",[e._v("mdi-arrow-left")]),e._v(" SignOut ")],1)],1)])]:[a("v-btn",{staticClass:"text-right",on:{click:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[a("v-icon",[e._v("fas fa-lock")]),e._v(" Login ")],1)]],2)],1)}),o=[],l=(r("5319"),{name:"Navigation",data:function(){return{drawer:null,auth:Ye,name:""}},computed:{user:function(){return this.$store.getters.user}},props:{items:Array,player:String,lobby:Object},methods:{signOut:function(){var e=this;Ye.getAuth().signOut().then((function(){e.$router.replace({name:"Home"})}))},login:function(){this.$router.push({name:"Authentication"})}}}),u=l,d=r("2877"),f=r("6544"),p=r.n(f),b=r("40dc"),y=r("5bc1"),m=r("8336"),g=r("ce7e"),h=r("132d"),v=r("adda"),k=r("8860"),w=r("da13"),S=r("5d23"),_=r("34c3"),C=r("f774"),B=r("2fa4"),P=Object(d["a"])(u,c,o,!1,null,"361204e4",null),x=P.exports;p()(P,{VAppBar:b["a"],VAppBarNavIcon:y["a"],VBtn:m["a"],VDivider:g["a"],VIcon:h["a"],VImg:v["a"],VList:k["a"],VListItem:w["a"],VListItemContent:S["a"],VListItemIcon:_["a"],VListItemSubtitle:S["b"],VListItemTitle:S["c"],VNavigationDrawer:C["a"],VSpacer:B["a"]});var N={components:{Navigation:x},data:function(){return{websocket:null,openSocket:!1,authentication:!1,player:"",size:10,fields:[],currentPlayerIndex:0,currentPlayer:"",playerListBufferBlue:40,playerListBufferRed:40,gameStatus:"",border:{},status:"start",lobby:{participants:[]},items:[{title:"Home",icon:"mdi-fencing",to:"/"},{title:"About",icon:"mdi-help-box",to:"/about"},{title:"Authentication",icon:"mdi-account",to:"/authentication"}]}},methods:{createWebsocket:function(){var e=this;this.websocket=new WebSocket("wss://mighty-mesa-63968.herokuapp.com/websocket"),this.websocket.onopen=function(){e.openSocket=!0,e.websocket.send(JSON.stringify({connected:{connect:"successful"}})),console.log("Connected to Websocket"),e.websocket.onclose=function(){console.log("Connection with Websocket Closed!")},e.websocket.onerror=function(e){this.openSocket=!1,console.log("Error in Websocket Occured: "+e)}},this.websocket.onclose=function(){this.openSocket=!1,console.log("WebSocket is closed now.")},this.websocket.onmessage=function(t){if("string"===typeof t.data){var r=JSON.parse(t.data);console.log(t.data),"status"===Object.keys(r)[0]?e.status=r.status:"lobby"===Object.keys(r)[1]?(e.player=r.player,e.lobby.participants=r.lobby):"lobby"===Object.keys(r)[0]?e.lobby.participants=r.lobby:(e.size=r.matchfieldSize,e.fields=r.matchField,e.currentPlayerIndex=r.currentPlayerIndex,e.currentPlayer=r.currentPlayer,e.gameStatus=r.gameStatus,e.playerListBufferBlue=r.playerListBufferBlue,e.playerListBufferRed=r.playerListBufferRed,e.border=r.border)}},Ye.getAuth().onAuthStateChanged((function(t){return e.authentication=!!t}))}},created:function(){this.createWebsocket()}},L=N,O=(r("034f"),r("7496")),I=r("f6c4"),j=Object(d["a"])(L,n,i,!1,null,null,null),A=j.exports;p()(j,{VApp:O["a"],VMain:I["a"]});var V=r("9483");Object(V["a"])("".concat("/stratego-vue-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("3ca3"),r("ddb0");var E=r("8c4f"),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",["start"===e.status&&!0===e.authentication&&!0===e.openSocket?r("Start",{attrs:{lobby:e.lobby,player:e.player,websocket:e.websocket}}):!1===e.authentication&&!0===e.openSocket?r("NoLogin"):"lobby"===e.status&&!0===e.openSocket?r("SetNames",{attrs:{status:e.status,lobby:e.lobby,player:e.player,websocket:e.websocket}}):"Board"===e.status&&!0===e.openSocket?r("Board",{attrs:{size:e.size,fields:e.fields,currentPlayerIndex:e.currentPlayerIndex,currentPlayer:e.currentPlayer,playerListBufferBlue:e.playerListBufferBlue,playerListBufferRed:e.playerListBufferRed,gameStatus:e.gameStatus,border:e.border,player:e.player,websocket:e.websocket}}):!1===e.openSocket?r("NoWebsocketAvailable"):e._e(),r("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:e.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:e.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#c08d2b"},on:{click:e.toTop}},[r("v-icon",{attrs:{color:"black"}},[e._v("mdi-arrow-up")])],1)],1)},z=[],W=(r("a9e3"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"backgroundd"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header text-center"},[a("h2",[e._v(e._s("Welcome to Stratego"))])]),a("div",{staticClass:"card-body"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"12",attrs:{sm:"6",md:"6"}},[a("v-text-field",{attrs:{"background-color":"#fcf5da",label:"Enter your name",solo:""},model:{value:e.player,callback:function(t){e.player=t},expression:"player"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-img",{staticClass:"margin-center",attrs:{src:r("7aaf"),justify:"center",height:"93",width:"320"},on:{click:function(t){return e.changeStatus()}}})],1)],1)],1)])])])])}),T=[],D={name:"Start",data:function(){return{player:""}},props:{lobby:Object,websocket:WebSocket},methods:{changeStatus:function(){this.websocket.send(JSON.stringify({status:{currentStatus:"lobby"}})),this.joinLobby()},joinLobby:function(){""!==this.player&&this.websocket.send(JSON.stringify({lobby:{currentPlayer:this.player}}))}}},J=D,$=(r("a90d"),r("62ad")),G=r("0fd9"),F=r("8654"),M=Object(d["a"])(J,W,T,!1,null,null,null),q=M.exports;p()(M,{VCol:$["a"],VImg:v["a"],VRow:G["a"],VTextField:F["a"]});var H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"backgroundd"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header text-center"},[r("h2",[e._v(e._s("Welcome to Stratego"))])]),r("div",{staticClass:"card-body"},[r("v-row",{staticStyle:{"text-align":"center"},attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"6"}},[e.player===e.lobby.participants[0]?r("h2",{staticClass:"color-blue"},[e._v(e._s("Player: "+e.player))]):e.player===e.lobby.participants[1]?r("h2",{staticClass:"color-red"},[e._v(e._s("Player: "+e.player))]):e._e()])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[r("v-select",{attrs:{"item-text":"name","item-value":"value",items:e.items,label:"select matchfield size"},on:{change:e.getMatchfieldSize}})],1)],1),r("v-row",{staticStyle:{"text-align":"center"},attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e.player===e.lobby.participants[0]||e.player!==e.lobby.participants[0]?r("h2",{staticClass:"color-blue"},[e._v(e._s(e.lobby.participants[0]))]):e._e()]),r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[e.player===e.lobby.participants[1]||e.player!==e.lobby.participants[1]?r("h2",{staticClass:"color-red"},[e._v(e._s(e.lobby.participants[1]))]):e._e()]),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[r("div",{staticClass:"my-2",attrs:{id:"btn"}},[r("v-btn",{attrs:{"x-large":"",color:"rgba(192,141,43,255)"},on:{click:function(t){return e.getNames()}}},[e._v(" Play ")])],1)])],1)],1)],1)])])])])},U=[],Y={name:"SetNames",data:function(){return{items:[{name:"small",value:4},{name:"medium",value:7},{name:"large",value:10}]}},props:{lobby:Object,player:String,websocket:WebSocket},methods:{changeStatus:function(){this.websocket.send(JSON.stringify({status:{currentStatus:"Board"}}))},getMatchfieldSize:function(e){switch(e){case 4:this.websocket.send(JSON.stringify({small:{matchfieldSize:e}}));break;case 7:this.websocket.send(JSON.stringify({medium:{matchfieldSize:e}}));break;case 10:this.websocket.send(JSON.stringify({large:{matchfieldSize:e}}));break}},getNames:function(){this.changeStatus(),this.websocket.send(JSON.stringify({setNames:{player1:this.lobby.participants[0],player2:this.lobby.participants[1]}}))}},mounted:function(){var e=document.getElementsByTagName("html")[0];e.style.overflowY="hidden"},destroyed:function(){var e=document.getElementsByTagName("html")[0];e.style.overflowY=null}},K=Y,Q=(r("4f67"),r("b974")),X=Object(d["a"])(K,H,U,!1,null,"79f5ed46",null),Z=X.exports;p()(X,{VBtn:m["a"],VCol:$["a"],VRow:G["a"],VSelect:Q["a"]});var ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-auto init-game-mid",attrs:{id:"gamefield"}},[r("table",{staticClass:"matchfield"},[r("tbody",[e._l(e.fields,(function(t,a){return[r("tr",{key:"row"+a},[e._l(t.cols,(function(t,a){return[t.isSet?r("td",{key:"aField"+a,staticClass:"char-pic field"},[t.colour&&0!==e.playerListBufferBlue&&e.currentPlayer===e.player?r("div",[r("img",{staticClass:"fig-cards blue",attrs:{type:"image",src:e.url+t.figSrc,alt:""}})]):t.colour&&0!==e.playerListBufferBlue&&e.currentPlayer!==e.player?r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:e.url+t.blueSrc,alt:"blue"}})]):t.colour||0===e.playerListBufferRed||e.currentPlayer!==e.player?t.colour||0===e.playerListBufferRed||e.currentPlayer===e.player?0===e.playerListBufferBlue&&t.colour?r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:e.url+t.blueSrc,alt:"blue"}})]):0!==e.playerListBufferRed||t.colour?r("div"):r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:e.url+t.redSrc,alt:"red"}})]):r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:e.url+t.redSrc,alt:"red"}})]):r("div",[r("img",{staticClass:"fig-cards red",attrs:{type:"image",src:e.url+t.figSrc,alt:""}})])]):t.isWater||4===t.row||5===t.row?r("td",{staticClass:"char-pic"}):r("td",{staticClass:"char-pic field"},[e.currentPlayer===e.player?r("div",[r("input",{staticClass:"fig-cards",attrs:{type:"image",src:e.url+t.blackSrc,alt:"black"},on:{click:function(r){return e.clickSet(t.row,t.col)}}})]):e.currentPlayer!==e.player?r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:e.url+t.blackSrc,alt:"black"}})]):e._e()])]}))],2)]}))],2)])])},te=[],re={name:"InitGame",data:function(){return{row:0,col:0,charac:"",url:"https://mighty-mesa-63968.herokuapp.com/"}},props:{size:Number,fields:Array,currentPlayerIndex:Number,currentPlayer:String,playerListBufferBlue:Number,playerListBufferRed:Number,gameStatus:String,border:Object,player:String,websocket:WebSocket},methods:{set:function(e,t,r){this.websocket.send(JSON.stringify({set:{row:e,col:t,charac:r}}))},clickSet:function(e,t){this.row=e,this.col=t},onkeydown:function(e){switch(e.keyCode){case 70:case 102:this.charac="F";break;case 66:case 98:this.charac="B";break;case 77:case 109:this.charac="M";break;case 49:this.charac="1";break;case 50:this.charac="2";break;case 51:this.charac="3";break;case 52:this.charac="4";break;case 53:this.charac="5";break;case 54:this.charac="6";break;case 55:this.charac="7";break;case 56:this.charac="8";break;case 57:this.charac="9";break}""!==this.charac&&this.set(this.row,this.col,this.charac)}},created:function(){window.onkeydown=this.onkeydown}},ae=re,se=(r("96c8"),Object(d["a"])(ae,ee,te,!1,null,null,null)),ne=se.exports,ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-auto init-game-mid",attrs:{id:"gamefield"}},[r("table",{staticClass:"matchfield"},[r("tbody",[e._l(e.fields,(function(t,a){return[r("tr",{key:"row"+a},[e._l(t.cols,(function(t,a){return[t.isSet?r("td",{key:"aField"+a,staticClass:"char-pic field"},[t.colour&&0===e.currentPlayerIndex&&e.currentPlayer===e.player?r("div",[r("input",{staticClass:"fig-cards blue",attrs:{type:"image",src:e.url+t.figSrc,alt:""},on:{click:function(r){return e.clickSet(t.row,t.col)}}})]):t.colour&&0===e.currentPlayerIndex&&e.currentPlayer!==e.player?r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:e.url+t.blueSrc,alt:"blue"}})]):t.colour||1!==e.currentPlayerIndex||e.currentPlayer!==e.player?t.colour||1!==e.currentPlayerIndex||e.currentPlayer===e.player?t.colour||0!==e.currentPlayerIndex||e.currentPlayer===e.player?t.colour&&1===e.currentPlayerIndex&&e.currentPlayer!==e.player?r("div",[r("img",{staticClass:"fig-cards blue",attrs:{type:"image",src:e.url+t.figSrc,alt:""}})]):1===e.currentPlayerIndex&&t.colour?r("div",[r("input",{staticClass:"fig-cards",attrs:{type:"image",src:e.url+t.blueSrc,alt:"blue"},on:{click:function(r){return e.clickSet(t.row,t.col)}}})]):0!==e.currentPlayerIndex||t.colour?e._e():r("div",[r("input",{staticClass:"fig-cards",attrs:{type:"image",src:e.url+t.redSrc,alt:"red"},on:{click:function(r){return e.clickSet(t.row,t.col)}}})]):r("div",[r("img",{staticClass:"fig-cards red",attrs:{type:"image",src:e.url+t.figSrc,alt:""}})]):r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:e.url+t.redSrc,alt:"red"}})]):r("div",[r("input",{staticClass:"fig-cards red",attrs:{type:"image",src:e.url+t.figSrc,alt:""},on:{click:function(r){return e.clickSet(t.row,t.col)}}})])]):t.isWater?r("td",{staticClass:"char-pic"}):r("td",{staticClass:"char-pic field"})]}))],2)]}))],2)])])},ce=[],oe={name:"PlayGame",data:function(){return{row:0,col:0,setAttack:!1,dir:"",rowD:0,colD:0,url:"https://mighty-mesa-63968.herokuapp.com/"}},props:{size:Number,fields:Array,currentPlayerIndex:Number,currentPlayer:String,playerListBufferBlue:Number,playerListBufferRed:Number,gameStatus:String,border:Object,player:String,websocket:WebSocket},methods:{move:function(e,t,r){this.websocket.send(JSON.stringify({move:{row:t,col:r,dir:e}}))},attack:function(e,t,r,a){this.websocket.send(JSON.stringify({attack:{row:e,col:t,rowD:r,colD:a}}))},clickSet:function(e,t){!1===this.setAttack?(this.row=e,this.col=t):void 0===this.row&&void 0===this.col||(this.rowD=e,this.colD=t,"WON"!==this.gameStatus&&(this.attack(this.row,this.col,this.rowD,this.colD),this.setAttack=!1))},onkeydown:function(e){switch(e.keyCode){case 65:case 87:this.setAttack=!0;break;case 68:case 100:case 40:this.dir="d";break;case 85:case 117:case 38:this.dir="u";break;case 76:case 108:case 37:this.dir="l";break;case 82:case 114:case 39:this.dir="r";break}void 0===this.dir||""===this.dir||this.dir.length>1||void 0===this.row||void 0===this.col||!0===this.setAttack||"WON"!==this.gameStatus&&this.move(this.dir,this.row,this.col)}},created:function(){window.onkeydown=this.onkeydown}},le=oe,ue=(r("4667"),Object(d["a"])(le,ie,ce,!1,null,null,null)),de=ue.exports,fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"backgroundd text-center",staticStyle:{flex:"0 0 auto"}},["WON"===e.gameStatus?r("div",[0===e.currentPlayerIndex?r("h2",{staticClass:"color-blue"},[e._v(" "+e._s(e.currentPlayer+" you found the flag and won the game!"))]):e._e(),1===e.currentPlayerIndex?r("h2",{staticClass:"color-red"},[e._v(" "+e._s(e.currentPlayer+" you found the flag and won the game!"))]):e._e(),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{"x-large":"",color:"rgba(192,141,43,255)"},on:{click:function(t){return e.changeStatus()}}},[e._v(" new game ")])],1)]):r("div",[0===e.playerListBufferRed&&0===e.currentPlayerIndex?r("h2",{staticClass:"color-blue"},[e._v(" "+e._s(e.currentPlayer+" it's your turn"))]):0===e.playerListBufferRed&&1===e.currentPlayerIndex?r("h2",{staticClass:"color-red"},[e._v(" "+e._s(e.currentPlayer+" it's your turn"))]):e.playerListBufferRed>0&&0===e.currentPlayerIndex?r("h2",{staticClass:"color-blue"},[e._v(" "+e._s("Enter your figures "+e.currentPlayer))]):e.playerListBufferRed>0&&1===e.currentPlayerIndex?r("h2",{staticClass:"color-red"},[e._v(" "+e._s("Enter your figures "+e.currentPlayer))]):e._e()]),r("div",{staticClass:"init-game-top"},[r("img",{staticClass:"img-fluid img-game-top",attrs:{src:e.url+e.border.top,alt:"border top"}})]),r("div",{staticClass:"mid-border"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-auto init-game-left"},[r("img",{staticClass:"img-game-left",attrs:{src:e.url+e.border.left,alt:"border left"}})]),this.playerListBufferRed>0?r("InitGame",{attrs:{size:e.size,fields:e.fields,currentPlayerIndex:e.currentPlayerIndex,currentPlayer:e.currentPlayer,playerListBufferBlue:e.playerListBufferBlue,playerListBufferRed:e.playerListBufferRed,gameStatus:e.gameStatus,border:e.border,player:e.player,websocket:e.websocket}}):0===this.playerListBufferRed?r("PlayGame",{attrs:{size:e.size,fields:e.fields,currentPlayerIndex:e.currentPlayerIndex,currentPlayer:e.currentPlayer,playerListBufferBlue:e.playerListBufferBlue,playerListBufferRed:e.playerListBufferRed,gameStatus:e.gameStatus,border:e.border,player:e.player,websocket:e.websocket}}):e._e(),r("div",{staticClass:"col-auto init-game-right"},[r("img",{staticClass:"img-game-right",attrs:{src:e.url+e.border.right,alt:"border right"}})])],1)]),r("div",{staticClass:"init-game-bot"},[r("img",{staticClass:"img-game-bot",attrs:{src:e.url+e.border.bot,alt:"border bot"}})]),r("div",{staticClass:"my-2"},[0!==this.playerListBufferRed?r("v-btn",{attrs:{"x-large":"",color:"rgba(192,141,43,255)"},on:{click:function(t){return e.init()}}},[e._v(" set all characters ")]):e._e()],1)])},pe=[],be={name:"Board",data:function(){return{url:"https://mighty-mesa-63968.herokuapp.com/"}},props:{size:Number,fields:Array,currentPlayerIndex:Number,currentPlayer:String,playerListBufferBlue:Number,playerListBufferRed:Number,gameStatus:String,border:Object,player:String,websocket:WebSocket},components:{PlayGame:de,InitGame:ne},methods:{init:function(){this.websocket.send(JSON.stringify({init:{playGame:!0}}))},changeStatus:function(){this.websocket.send(JSON.stringify({status:{currentStatus:"start"}}))}}},ye=be,me=(r("b2e8"),Object(d["a"])(ye,fe,pe,!1,null,null,null)),ge=me.exports;p()(me,{VBtn:m["a"]});var he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{staticClass:"backgroundd"},[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12",sm:"6",md:"4"}},[r("h2",[r("pre",[e._v(e._s("Welcome to Stratego\nYou are not logged in\nPlease login"))])])])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12",sm:"6",md:"4"}},[r("v-btn",{attrs:{"x-large":"",color:"rgba(192,141,43,255)"},on:{click:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[e._v("Login ")])],1)],1)],1)],1)},ve=[],ke={name:"NoLogin",methods:{login:function(){this.$router.push({name:"Authentication"})}}},we=ke,Se=r("a523"),_e=r("4bd4"),Ce=Object(d["a"])(we,he,ve,!1,null,"823dcf34",null),Be=Ce.exports;p()(Ce,{VBtn:m["a"],VCol:$["a"],VContainer:Se["a"],VForm:_e["a"],VRow:G["a"]});var Pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{staticClass:"backgroundd"},[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12",sm:"6",md:"4"}},[r("h2",[r("pre",[e._v(e._s("You are offline.\nPlease connect your device\nwith the internet and\nrefresh the page."))])])])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12",sm:"6",md:"4"}})],1)],1)],1)},xe=[],Ne={name:"NoWebsocketAvailable"},Le=Ne,Oe=Object(d["a"])(Le,Pe,xe,!1,null,"48c7f733",null),Ie=Oe.exports;p()(Oe,{VCol:$["a"],VContainer:Se["a"],VForm:_e["a"],VRow:G["a"]});var je={name:"Home",data:function(){return{fab:!1}},props:{websocket:WebSocket,authentication:Boolean,player:String,size:Number,fields:Array,currentPlayerIndex:Number,currentPlayer:String,playerListBufferBlue:Number,playerListBufferRed:Number,gameStatus:String,border:Object,status:String,lobby:Object,openSocket:Boolean},components:{NoWebsocketAvailable:Ie,NoLogin:Be,Board:ge,PlayGame:de,InitGame:ne,SetNames:Z,Start:q},methods:{onScroll:function(e){if("undefined"!==typeof window){var t=window.pageYOffset||e.target.scrollTop||0;this.fab=t>20}},toTop:function(){this.$vuetify.goTo(0)}}},Ae=je,Ve=(r("cccb"),r("269a")),Ee=r.n(Ve),Re=r("f977"),ze=Object(d["a"])(Ae,R,z,!1,null,null,null),We=ze.exports;p()(ze,{VApp:O["a"],VBtn:m["a"],VIcon:h["a"]}),Ee()(ze,{Scroll:Re["b"]}),s["a"].use(E["a"]);var Te=[{path:"/",name:"Home",component:We},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/authentication",name:"Authentication",component:function(){return r.e("about").then(r.bind(null,"886d"))}}],De=new E["a"]({routes:Te}),Je=De,$e=r("2f62");s["a"].use($e["a"]);var Ge=new $e["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(e){return e.user}},mutations:{SET_LOGGED_IN:function(e,t){e.user.loggedIn=t},SET_USER:function(e,t){e.user.data=t}},actions:{fetchUser:function(e,t){var r=e.commit;r("SET_LOGGED_IN",null!==t),r("SET_USER",t?{displayName:t.displayName,email:t.email}:null)}}}),Fe=r("f309");s["a"].use(Fe["a"]);var Me=new Fe["a"]({}),qe=(r("f9e3"),r("9537"),r("260b")),He=r("ea7b");self.addEventListener("fetch",(function(e){e.respondWith(Object(a["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e.request);case 3:return r=t.sent,t.next=6,caches.open("cache");case 6:return a=t.sent,a.put(e.request.url,r.clone()),t.abrupt("return",r);case 11:return t.prev=11,t.t0=t["catch"](0),t.abrupt("return",caches.match(e.request));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))())})),s["a"].config.productionTip=!1;var Ue={apiKey:"AIzaSyB4Ae6GvE2zlqwICHSdBHnnDK6j_Y7Ubdo",authDomain:"stratego-web-app.firebaseapp.com",projectId:"stratego-web-app",storageBucket:"stratego-web-app.appspot.com",messagingSenderId:"477096078131",appId:"1:477096078131:web:5c7434f3a5908563bcec46"};qe["a"](Ue);var Ye=He;Ye.getAuth().onAuthStateChanged((function(e){Ge.dispatch("fetchUser",e)})),new s["a"]({router:Je,store:Ge,vuetify:Me,render:function(e){return e(A)}}).$mount("#app")},"5ced":function(e,t,r){},"7aaf":function(e,t,r){e.exports=r.p+"img/stratego_start.a60c539b.png"},"85ec":function(e,t,r){},"96c8":function(e,t,r){"use strict";r("db42")},a36f:function(e,t,r){},a90d:function(e,t,r){"use strict";r("df1f")},b2e8:function(e,t,r){"use strict";r("16c0")},cccb:function(e,t,r){"use strict";r("5ced")},d604:function(e,t,r){},db42:function(e,t,r){},df1f:function(e,t,r){}});
//# sourceMappingURL=app.d620181f.js.map