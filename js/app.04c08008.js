(function(t){function e(e){for(var a,s,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],a=!0,s=1;s<r.length;s++){var c=r[s];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var a={},s={app:0},n={app:0},i=[];function c(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8d566257"}[t]+".js"}function o(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(t){var e=[],r={about:1};s[t]?e.push(s[t]):0!==s[t]&&r[t]&&e.push(s[t]=new Promise((function(e,r){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"51986561"}[t]+".css",n=o.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===n))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===a||u===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||n,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete s[t],f.parentNode.removeChild(f),r(i)},f.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[t]=0})));var a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=n[t];if(0!==r){if(r){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",d.name="ChunkLoadError",d.type=a,d.request=s,r[1](d)}n[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=a,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(r,a,function(e){return t[e]}.bind(null,a));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/stratego-vue-app/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"16c0":function(t,e,r){},"35ed":function(t,e,r){t.exports=r.p+"img/stratego_title.4e7e4670.png"},4667:function(t,e,r){"use strict";r("d604")},"4f67":function(t,e,r){"use strict";r("a36f")},"56d7":function(t,e,r){"use strict";r.r(e),r.d(e,"firebaseAuth",(function(){return Ht}));var a=r("1da1"),s=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("96cf"),r("d3b7"),r("ac1f"),r("466d"),r("2b0e")),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{staticClass:"backgroundd",attrs:{id:"inspire"}},[r("Navigation",{attrs:{items:t.items,player:t.player,lobby:t.lobby}}),r("v-main",[r("router-view",{attrs:{websocket:t.websocket,authentication:t.authentication,player:t.player,size:t.size,fields:t.fields,currentPlayerIndex:t.currentPlayerIndex,currentPlayer:t.currentPlayer,playerListBufferBlue:t.playerListBufferBlue,playerListBufferRed:t.playerListBufferRed,gameStatus:t.gameStatus,border:t.border,status:t.status,lobby:t.lobby,openSocket:t.openSocket}})],1)],1)},i=[],c=(r("e9c4"),r("b64b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-navigation-drawer",{attrs:{color:"#ecd88a",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h6"},[t._v(" Menu ")]),a("v-list-item-subtitle")],1)],1),a("v-divider"),a("v-list",{attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"",dark:"",src:r("35ed"),height:"200"},scopedSlots:t._u([{key:"img",fn:function(e){var r=e.props;return[a("v-img",t._b({attrs:{gradient:"to top right, rgba(0,0,0,0), rgba(0,0,0,0)"}},"v-img",r,!1))]}}])},[[a("v-app-bar-nav-icon",{attrs:{si:""},on:{click:function(e){t.drawer=!t.drawer}}}),a("v-spacer")],t.user.loggedIn?[a("div",{staticClass:"form-group row justify-end"},[a("div",{staticClass:"col-md-2 offset-md-4"},[t.player===t.lobby.participants[0]?a("div",{staticClass:"color-blue",staticStyle:{"font-size":"20px"}},[t._v(" "+t._s("Player: "+t.player)+" ")]):t._e(),t.player===t.lobby.participants[1]?a("div",{staticClass:"color-red",staticStyle:{"font-size":"20px"}},[t._v(" "+t._s("Player: "+t.player)+" ")]):t._e()]),a("div",{staticClass:"col-md-2 offset-md-5"},[a("v-btn",{staticClass:"text-right",on:{click:function(e){return e.preventDefault(),t.signOut.apply(null,arguments)}}},[a("v-icon",[t._v("mdi-arrow-left")]),t._v(" SignOut ")],1)],1)])]:[a("v-btn",{staticClass:"text-right",on:{click:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[a("v-icon",[t._v("fas fa-lock")]),t._v(" Login ")],1)]],2)],1)}),o=[],l=(r("5319"),{name:"Navigation",data:function(){return{drawer:null,auth:Ht,name:""}},computed:{user:function(){return this.$store.getters.user}},props:{items:Array,player:String,lobby:Object},methods:{signOut:function(){var t=this;Ht.getAuth().signOut().then((function(){t.$router.replace({name:"Home"})}))},login:function(){this.$router.push({name:"Authentication"})}}}),u=l,d=r("2877"),f=r("6544"),p=r.n(f),b=r("40dc"),y=r("5bc1"),m=r("8336"),g=r("ce7e"),h=r("132d"),v=r("adda"),S=r("8860"),k=r("da13"),_=r("5d23"),w=r("34c3"),P=r("f774"),C=r("2fa4"),B=Object(d["a"])(u,c,o,!1,null,"361204e4",null),N=B.exports;p()(B,{VAppBar:b["a"],VAppBarNavIcon:y["a"],VBtn:m["a"],VDivider:g["a"],VIcon:h["a"],VImg:v["a"],VList:S["a"],VListItem:k["a"],VListItemContent:_["a"],VListItemIcon:w["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VNavigationDrawer:P["a"],VSpacer:C["a"]});var O={components:{Navigation:N},data:function(){return{websocket:null,openSocket:!1,authentication:!1,player:"",size:10,fields:[],currentPlayerIndex:0,currentPlayer:"",playerListBufferBlue:40,playerListBufferRed:40,gameStatus:"",border:{},status:"start",lobby:{participants:[]},items:[{title:"Home",icon:"mdi-fencing",to:"/"},{title:"About",icon:"mdi-help-box",to:"/about"},{title:"Authentication",icon:"mdi-account",to:"/authentication"}]}},methods:{createWebsocket:function(){var t=this;this.websocket=new WebSocket(Object({NODE_ENV:"production",BASE_URL:"/stratego-vue-app/"}).VUE_APP_WEBSOCKET),this.websocket.onopen=function(){t.openSocket=!0,t.websocket.send(JSON.stringify({connected:{connect:"successful"}})),console.log("Connected to Websocket"),t.websocket.onclose=function(){console.log("Connection with Websocket Closed!")},t.websocket.onerror=function(t){this.openSocket=!1,console.log("Error in Websocket Occured: "+t)}},this.websocket.onclose=function(){this.openSocket=!1,console.log("WebSocket is closed now.")},this.websocket.onmessage=function(e){if("string"===typeof e.data){var r=JSON.parse(e.data);console.log(e.data),"status"===Object.keys(r)[0]?t.status=r.status:"lobby"===Object.keys(r)[1]?(t.player=r.player,t.lobby.participants=r.lobby):"lobby"===Object.keys(r)[0]?t.lobby.participants=r.lobby:(t.size=r.matchfieldSize,t.fields=r.matchField,t.currentPlayerIndex=r.currentPlayerIndex,t.currentPlayer=r.currentPlayer,t.gameStatus=r.gameStatus,t.playerListBufferBlue=r.playerListBufferBlue,t.playerListBufferRed=r.playerListBufferRed,t.border=r.border)}},Ht.getAuth().onAuthStateChanged((function(e){return t.authentication=!!e}))}},created:function(){this.createWebsocket()}},E=O,x=(r("034f"),r("7496")),L=r("f6c4"),A=Object(d["a"])(E,n,i,!1,null,null,null),j=A.exports;p()(A,{VApp:x["a"],VMain:L["a"]});var I=r("9483");Object(I["a"])("".concat("/stratego-vue-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});r("3ca3"),r("ddb0");var V=r("8c4f"),R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",["start"===t.status&&!0===t.authentication&&!0===t.openSocket?r("Start",{attrs:{lobby:t.lobby,player:t.player,websocket:t.websocket}}):!1===t.authentication&&!0===t.openSocket?r("NoLogin"):"lobby"===t.status&&!0===t.openSocket?r("SetNames",{attrs:{status:t.status,lobby:t.lobby,player:t.player,websocket:t.websocket}}):"Board"===t.status&&!0===t.openSocket?r("Board",{attrs:{size:t.size,fields:t.fields,currentPlayerIndex:t.currentPlayerIndex,currentPlayer:t.currentPlayer,playerListBufferBlue:t.playerListBufferBlue,playerListBufferRed:t.playerListBufferRed,gameStatus:t.gameStatus,border:t.border,player:t.player,websocket:t.websocket}}):!1===t.openSocket?r("NoWebsocketAvailable"):t._e(),r("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"#c08d2b"},on:{click:t.toTop}},[r("v-icon",{attrs:{color:"black"}},[t._v("mdi-arrow-up")])],1)],1)},D=[],U=(r("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"backgroundd"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header text-center"},[a("h2",[t._v(t._s("Welcome to Stratego"))])]),a("div",{staticClass:"card-body"},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{staticClass:"12",attrs:{sm:"6",md:"6"}},[a("v-text-field",{attrs:{"background-color":"#fcf5da",label:"Enter your name",solo:""},model:{value:t.player,callback:function(e){t.player=e},expression:"player"}})],1)],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",sm:"6",md:"6"}},[a("v-img",{staticClass:"margin-center",attrs:{src:r("7aaf"),justify:"center",height:"93",width:"320"},on:{click:function(e){return t.changeStatus()}}})],1)],1)],1)])])])])}),W=[],T={name:"Start",data:function(){return{player:""}},props:{lobby:Object,websocket:WebSocket},methods:{changeStatus:function(){this.websocket.send(JSON.stringify({status:{currentStatus:"lobby"}})),this.joinLobby()},joinLobby:function(){""!==this.player&&this.websocket.send(JSON.stringify({lobby:{currentPlayer:this.player}}))}}},z=T,J=(r("a90d"),r("62ad")),M=r("0fd9"),G=r("8654"),$=Object(d["a"])(z,U,W,!1,null,null,null),F=$.exports;p()($,{VCol:J["a"],VImg:v["a"],VRow:M["a"],VTextField:G["a"]});var Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"backgroundd"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-8"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header text-center"},[r("h2",[t._v(t._s("Welcome to Stratego"))])]),r("div",{staticClass:"card-body"},[r("v-row",{staticStyle:{"text-align":"center"},attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"6"}},[t.player===t.lobby.participants[0]?r("h2",{staticClass:"color-blue"},[t._v(t._s("Player: "+t.player))]):t.player===t.lobby.participants[1]?r("h2",{staticClass:"color-red"},[t._v(t._s("Player: "+t.player))]):t._e()])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[r("v-select",{attrs:{"item-text":"name","item-value":"value",items:t.items,label:"select matchfield size"},on:{change:t.getMatchfieldSize}})],1)],1),r("v-row",{staticStyle:{"text-align":"center"},attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t.player===t.lobby.participants[0]||t.player!==t.lobby.participants[0]?r("h2",{staticClass:"color-blue"},[t._v(t._s(t.lobby.participants[0]))]):t._e()]),r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[t.player===t.lobby.participants[1]||t.player!==t.lobby.participants[1]?r("h2",{staticClass:"color-red"},[t._v(t._s(t.lobby.participants[1]))]):t._e()]),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"6",md:"3"}},[r("div",{staticClass:"my-2",attrs:{id:"btn"}},[r("v-btn",{attrs:{"x-large":"",color:"rgba(192,141,43,255)"},on:{click:function(e){return t.getNames()}}},[t._v(" Play ")])],1)])],1)],1)],1)])])])])},q=[],H={name:"SetNames",data:function(){return{items:[{name:"small",value:4},{name:"medium",value:7},{name:"large",value:10}]}},props:{lobby:Object,player:String,websocket:WebSocket},methods:{changeStatus:function(){this.websocket.send(JSON.stringify({status:{currentStatus:"Board"}}))},getMatchfieldSize:function(t){switch(t){case 4:this.websocket.send(JSON.stringify({small:{matchfieldSize:t}}));break;case 7:this.websocket.send(JSON.stringify({medium:{matchfieldSize:t}}));break;case 10:this.websocket.send(JSON.stringify({large:{matchfieldSize:t}}));break}},getNames:function(){this.changeStatus(),this.websocket.send(JSON.stringify({setNames:{player1:this.lobby.participants[0],player2:this.lobby.participants[1]}}))}},mounted:function(){var t=document.getElementsByTagName("html")[0];t.style.overflowY="hidden"},destroyed:function(){var t=document.getElementsByTagName("html")[0];t.style.overflowY=null}},K=H,Q=(r("4f67"),r("b974")),X=Object(d["a"])(K,Y,q,!1,null,"79f5ed46",null),Z=X.exports;p()(X,{VBtn:m["a"],VCol:J["a"],VRow:M["a"],VSelect:Q["a"]});var tt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-auto init-game-mid",attrs:{id:"gamefield"}},[r("table",{staticClass:"matchfield"},[r("tbody",[t._l(t.fields,(function(e,a){return[r("tr",{key:"row"+a},[t._l(e.cols,(function(e,a){return[e.isSet?r("td",{key:"aField"+a,staticClass:"char-pic field"},[e.colour&&0!==t.playerListBufferBlue&&t.currentPlayer===t.player?r("div",[r("img",{staticClass:"fig-cards blue",attrs:{type:"image",src:t.url+e.figSrc,alt:""}})]):e.colour&&0!==t.playerListBufferBlue&&t.currentPlayer!==t.player?r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:t.url+e.blueSrc,alt:"blue"}})]):e.colour||0===t.playerListBufferRed||t.currentPlayer!==t.player?e.colour||0===t.playerListBufferRed||t.currentPlayer===t.player?0===t.playerListBufferBlue&&e.colour?r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:t.url+e.blueSrc,alt:"blue"}})]):0!==t.playerListBufferRed||e.colour?r("div"):r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:t.url+e.redSrc,alt:"red"}})]):r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:t.url+e.redSrc,alt:"red"}})]):r("div",[r("img",{staticClass:"fig-cards red",attrs:{type:"image",src:t.url+e.figSrc,alt:""}})])]):e.isWater||4===e.row||5===e.row?r("td",{staticClass:"char-pic"}):r("td",{staticClass:"char-pic field"},[t.currentPlayer===t.player?r("div",[r("input",{staticClass:"fig-cards",attrs:{type:"image",src:t.url+e.blackSrc,alt:"black"},on:{click:function(r){return t.clickSet(e.row,e.col)}}})]):t.currentPlayer!==t.player?r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:t.url+e.blackSrc,alt:"black"}})]):t._e()])]}))],2)]}))],2)])])},et=[],rt={name:"InitGame",data:function(){return{row:0,col:0,charac:"",url:Object({NODE_ENV:"production",BASE_URL:"/stratego-vue-app/"}).VUE_APP_MY_DOMAIN}},props:{size:Number,fields:Array,currentPlayerIndex:Number,currentPlayer:String,playerListBufferBlue:Number,playerListBufferRed:Number,gameStatus:String,border:Object,player:String,websocket:WebSocket},methods:{set:function(t,e,r){this.websocket.send(JSON.stringify({set:{row:t,col:e,charac:r}}))},clickSet:function(t,e){this.row=t,this.col=e},onkeydown:function(t){switch(t.keyCode){case 70:case 102:this.charac="F";break;case 66:case 98:this.charac="B";break;case 77:case 109:this.charac="M";break;case 49:this.charac="1";break;case 50:this.charac="2";break;case 51:this.charac="3";break;case 52:this.charac="4";break;case 53:this.charac="5";break;case 54:this.charac="6";break;case 55:this.charac="7";break;case 56:this.charac="8";break;case 57:this.charac="9";break}""!==this.charac&&this.set(this.row,this.col,this.charac)}},created:function(){window.onkeydown=this.onkeydown}},at=rt,st=(r("96c8"),Object(d["a"])(at,tt,et,!1,null,null,null)),nt=st.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-auto init-game-mid",attrs:{id:"gamefield"}},[r("table",{staticClass:"matchfield"},[r("tbody",[t._l(t.fields,(function(e,a){return[r("tr",{key:"row"+a},[t._l(e.cols,(function(e,a){return[e.isSet?r("td",{key:"aField"+a,staticClass:"char-pic field"},[e.colour&&0===t.currentPlayerIndex&&t.currentPlayer===t.player?r("div",[r("input",{staticClass:"fig-cards blue",attrs:{type:"image",src:t.url+e.figSrc,alt:""},on:{click:function(r){return t.clickSet(e.row,e.col)}}})]):e.colour&&0===t.currentPlayerIndex&&t.currentPlayer!==t.player?r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:t.url+e.blueSrc,alt:"blue"}})]):e.colour||1!==t.currentPlayerIndex||t.currentPlayer!==t.player?e.colour||1!==t.currentPlayerIndex||t.currentPlayer===t.player?e.colour||0!==t.currentPlayerIndex||t.currentPlayer===t.player?e.colour&&1===t.currentPlayerIndex&&t.currentPlayer!==t.player?r("div",[r("img",{staticClass:"fig-cards blue",attrs:{type:"image",src:t.url+e.figSrc,alt:""}})]):1===t.currentPlayerIndex&&e.colour?r("div",[r("input",{staticClass:"fig-cards",attrs:{type:"image",src:t.url+e.blueSrc,alt:"blue"},on:{click:function(r){return t.clickSet(e.row,e.col)}}})]):0!==t.currentPlayerIndex||e.colour?t._e():r("div",[r("input",{staticClass:"fig-cards",attrs:{type:"image",src:t.url+e.redSrc,alt:"red"},on:{click:function(r){return t.clickSet(e.row,e.col)}}})]):r("div",[r("img",{staticClass:"fig-cards red",attrs:{type:"image",src:t.url+e.figSrc,alt:""}})]):r("div",[r("img",{staticClass:"fig-cards",attrs:{type:"image",src:t.url+e.redSrc,alt:"red"}})]):r("div",[r("input",{staticClass:"fig-cards red",attrs:{type:"image",src:t.url+e.figSrc,alt:""},on:{click:function(r){return t.clickSet(e.row,e.col)}}})])]):e.isWater?r("td",{staticClass:"char-pic"}):r("td",{staticClass:"char-pic field"})]}))],2)]}))],2)])])},ct=[],ot={name:"PlayGame",data:function(){return{row:0,col:0,setAttack:!1,dir:"",rowD:0,colD:0,url:Object({NODE_ENV:"production",BASE_URL:"/stratego-vue-app/"}).VUE_APP_MY_DOMAIN}},props:{size:Number,fields:Array,currentPlayerIndex:Number,currentPlayer:String,playerListBufferBlue:Number,playerListBufferRed:Number,gameStatus:String,border:Object,player:String,websocket:WebSocket},methods:{move:function(t,e,r){this.websocket.send(JSON.stringify({move:{row:e,col:r,dir:t}}))},attack:function(t,e,r,a){this.websocket.send(JSON.stringify({attack:{row:t,col:e,rowD:r,colD:a}}))},clickSet:function(t,e){!1===this.setAttack?(this.row=t,this.col=e):void 0===this.row&&void 0===this.col||(this.rowD=t,this.colD=e,"WON"!==this.gameStatus&&(this.attack(this.row,this.col,this.rowD,this.colD),this.setAttack=!1))},onkeydown:function(t){switch(t.keyCode){case 65:case 87:this.setAttack=!0;break;case 68:case 100:case 40:this.dir="d";break;case 85:case 117:case 38:this.dir="u";break;case 76:case 108:case 37:this.dir="l";break;case 82:case 114:case 39:this.dir="r";break}void 0===this.dir||""===this.dir||this.dir.length>1||void 0===this.row||void 0===this.col||!0===this.setAttack||"WON"!==this.gameStatus&&this.move(this.dir,this.row,this.col)}},created:function(){window.onkeydown=this.onkeydown}},lt=ot,ut=(r("4667"),Object(d["a"])(lt,it,ct,!1,null,null,null)),dt=ut.exports,ft=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"backgroundd text-center",staticStyle:{flex:"0 0 auto"}},["WON"===t.gameStatus?r("div",[0===t.currentPlayerIndex?r("h2",{staticClass:"color-blue"},[t._v(" "+t._s(t.currentPlayer+" you found the flag and won the game!"))]):t._e(),1===t.currentPlayerIndex?r("h2",{staticClass:"color-red"},[t._v(" "+t._s(t.currentPlayer+" you found the flag and won the game!"))]):t._e(),r("div",{staticClass:"my-2"},[r("v-btn",{attrs:{"x-large":"",color:"rgba(192,141,43,255)"},on:{click:function(e){return t.changeStatus()}}},[t._v(" new game ")])],1)]):r("div",[0===t.playerListBufferRed&&0===t.currentPlayerIndex?r("h2",{staticClass:"color-blue"},[t._v(" "+t._s(t.currentPlayer+" it's your turn"))]):0===t.playerListBufferRed&&1===t.currentPlayerIndex?r("h2",{staticClass:"color-red"},[t._v(" "+t._s(t.currentPlayer+" it's your turn"))]):t.playerListBufferRed>0&&0===t.currentPlayerIndex?r("h2",{staticClass:"color-blue"},[t._v(" "+t._s("Enter your figures "+t.currentPlayer))]):t.playerListBufferRed>0&&1===t.currentPlayerIndex?r("h2",{staticClass:"color-red"},[t._v(" "+t._s("Enter your figures "+t.currentPlayer))]):t._e()]),r("div",{staticClass:"init-game-top"},[r("img",{staticClass:"img-fluid img-game-top",attrs:{src:t.url+t.border.top,alt:"border top"}})]),r("div",{staticClass:"mid-border"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-auto init-game-left"},[r("img",{staticClass:"img-game-left",attrs:{src:t.url+t.border.left,alt:"border left"}})]),this.playerListBufferRed>0?r("InitGame",{attrs:{size:t.size,fields:t.fields,currentPlayerIndex:t.currentPlayerIndex,currentPlayer:t.currentPlayer,playerListBufferBlue:t.playerListBufferBlue,playerListBufferRed:t.playerListBufferRed,gameStatus:t.gameStatus,border:t.border,player:t.player,websocket:t.websocket}}):0===this.playerListBufferRed?r("PlayGame",{attrs:{size:t.size,fields:t.fields,currentPlayerIndex:t.currentPlayerIndex,currentPlayer:t.currentPlayer,playerListBufferBlue:t.playerListBufferBlue,playerListBufferRed:t.playerListBufferRed,gameStatus:t.gameStatus,border:t.border,player:t.player,websocket:t.websocket}}):t._e(),r("div",{staticClass:"col-auto init-game-right"},[r("img",{staticClass:"img-game-right",attrs:{src:t.url+t.border.right,alt:"border right"}})])],1)]),r("div",{staticClass:"init-game-bot"},[r("img",{staticClass:"img-game-bot",attrs:{src:t.url+t.border.bot,alt:"border bot"}})]),r("div",{staticClass:"my-2"},[0!==this.playerListBufferRed?r("v-btn",{attrs:{"x-large":"",color:"rgba(192,141,43,255)"},on:{click:function(e){return t.init()}}},[t._v(" set all characters ")]):t._e()],1)])},pt=[],bt={name:"Board",data:function(){return{url:Object({NODE_ENV:"production",BASE_URL:"/stratego-vue-app/"}).VUE_APP_MY_DOMAIN}},props:{size:Number,fields:Array,currentPlayerIndex:Number,currentPlayer:String,playerListBufferBlue:Number,playerListBufferRed:Number,gameStatus:String,border:Object,player:String,websocket:WebSocket},components:{PlayGame:dt,InitGame:nt},methods:{init:function(){this.websocket.send(JSON.stringify({init:{playGame:!0}}))},changeStatus:function(){this.websocket.send(JSON.stringify({status:{currentStatus:"start"}}))}}},yt=bt,mt=(r("b2e8"),Object(d["a"])(yt,ft,pt,!1,null,null,null)),gt=mt.exports;p()(mt,{VBtn:m["a"]});var ht=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{staticClass:"backgroundd"},[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12",sm:"6",md:"4"}},[r("h2",[r("pre",[t._v(t._s("Welcome to Stratego\nYou are not logged in\nPlease login"))])])])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12",sm:"6",md:"4"}},[r("v-btn",{attrs:{"x-large":"",color:"rgba(192,141,43,255)"},on:{click:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[t._v("Login ")])],1)],1)],1)],1)},vt=[],St={name:"NoLogin",methods:{login:function(){this.$router.push({name:"Authentication"})}}},kt=St,_t=r("a523"),wt=r("4bd4"),Pt=Object(d["a"])(kt,ht,vt,!1,null,"823dcf34",null),Ct=Pt.exports;p()(Pt,{VBtn:m["a"],VCol:J["a"],VContainer:_t["a"],VForm:wt["a"],VRow:M["a"]});var Bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-form",{staticClass:"backgroundd"},[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12",sm:"6",md:"4"}},[r("h2",[r("pre",[t._v(t._s("You are offline.\nPlease connect your device\nwith the internet and\nrefresh the page."))])])])],1),r("v-row",{attrs:{justify:"center"}},[r("v-col",{staticStyle:{"text-align":"center"},attrs:{cols:"12",sm:"6",md:"4"}})],1)],1)],1)},Nt=[],Ot={name:"NoWebsocketAvailable"},Et=Ot,xt=Object(d["a"])(Et,Bt,Nt,!1,null,"48c7f733",null),Lt=xt.exports;p()(xt,{VCol:J["a"],VContainer:_t["a"],VForm:wt["a"],VRow:M["a"]});var At={name:"Home",data:function(){return{fab:!1}},props:{websocket:WebSocket,authentication:Boolean,player:String,size:Number,fields:Array,currentPlayerIndex:Number,currentPlayer:String,playerListBufferBlue:Number,playerListBufferRed:Number,gameStatus:String,border:Object,status:String,lobby:Object,openSocket:Boolean},components:{NoWebsocketAvailable:Lt,NoLogin:Ct,Board:gt,PlayGame:dt,InitGame:nt,SetNames:Z,Start:F},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},jt=At,It=(r("cccb"),r("269a")),Vt=r.n(It),Rt=r("f977"),Dt=Object(d["a"])(jt,R,D,!1,null,null,null),Ut=Dt.exports;p()(Dt,{VApp:x["a"],VBtn:m["a"],VIcon:h["a"]}),Vt()(Dt,{Scroll:Rt["b"]}),s["a"].use(V["a"]);var Wt=[{path:"/",name:"Home",component:Ut},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/authentication",name:"Authentication",component:function(){return r.e("about").then(r.bind(null,"886d"))}}],Tt=new V["a"]({routes:Wt}),zt=Tt,Jt=r("2f62");s["a"].use(Jt["a"]);var Mt=new Jt["a"].Store({state:{user:{loggedIn:!1,data:null}},getters:{user:function(t){return t.user}},mutations:{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e}},actions:{fetchUser:function(t,e){var r=t.commit;r("SET_LOGGED_IN",null!==e),r("SET_USER",e?{displayName:e.displayName,email:e.email}:null)}}}),Gt=r("f309");s["a"].use(Gt["a"]);var $t=new Gt["a"]({}),Ft=(r("f9e3"),r("9537"),r("260b")),Yt=r("ea7b");self.addEventListener("fetch",(function(t){t.respondWith(Object(a["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t.request);case 3:return r=e.sent,e.next=6,caches.open("cache");case 6:return a=e.sent,a.put(t.request.url,r.clone()),e.abrupt("return",r);case 11:return e.prev=11,e.t0=e["catch"](0),e.abrupt("return",caches.match(t.request));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))())})),s["a"].config.productionTip=!1;var qt={apiKey:Object({NODE_ENV:"production",BASE_URL:"/stratego-vue-app/"}).VUE_APP_API_KEY,authDomain:Object({NODE_ENV:"production",BASE_URL:"/stratego-vue-app/"}).VUE_APP_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",BASE_URL:"/stratego-vue-app/"}).VUE_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",BASE_URL:"/stratego-vue-app/"}).VUE_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",BASE_URL:"/stratego-vue-app/"}).VUE_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",BASE_URL:"/stratego-vue-app/"}).VUE_APP_APP_ID};Ft["a"](qt);var Ht=Yt;Ht.getAuth().onAuthStateChanged((function(t){Mt.dispatch("fetchUser",t)})),new s["a"]({router:zt,store:Mt,vuetify:$t,render:function(t){return t(j)}}).$mount("#app")},"5ced":function(t,e,r){},"7aaf":function(t,e,r){t.exports=r.p+"img/stratego_start.a60c539b.png"},"85ec":function(t,e,r){},"96c8":function(t,e,r){"use strict";r("db42")},a36f:function(t,e,r){},a90d:function(t,e,r){"use strict";r("df1f")},b2e8:function(t,e,r){"use strict";r("16c0")},cccb:function(t,e,r){"use strict";r("5ced")},d604:function(t,e,r){},db42:function(t,e,r){},df1f:function(t,e,r){}});
//# sourceMappingURL=app.04c08008.js.map