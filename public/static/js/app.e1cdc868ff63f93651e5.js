webpackJsonp([1,2],[,,function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),s=o(i),u=n(68),r=o(u),l=n(177),c=o(l),d=n(78),f=a(d),p=n(79),h=a(p),_=n(82),v=o(_),m=n(80),g=o(m),y=n(85),C=o(y),b=n(88),P=o(b);s["default"].use(r["default"]);var O=!1;e["default"]=new r["default"].Store({actions:f,getters:h,modules:{auth:v["default"],account:g["default"],notification:C["default"],post:P["default"]},strict:O,plugins:O?[(0,c["default"])()]:[]})},,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={page:function(t,e){return n(180)("./"+t+"/"+e+"/"+e+".vue")},layout:function(t){return n(179)("./"+t+"/"+t+".vue")},component:function(t){return n(178)("./"+t+"/"+t+".vue")}}},,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.FETCH_ACCOUNT="FETCH_ACCOUNT",e.CLEAR_ACCOUNT="CLEAR_ACCOUNT",e.CHECK_AUTHENTICATION="CHECK_AUTHENTICATION",e.LOGOUT="LOGOUT",e.LOGIN="LOGIN",e.ADD_NOTIFICATION="ADD_NOTIFICATION",e.DELETE_NOTIFICATION="DELETE_NOTIFICATION",e.ADD_POST="ADD_POST",e.REMOVE_POST="REMOVE_POST",e.FETCH_POSTS="FETCH_POSTS",e.CLEAR_POST="CLEAR_POST"},,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(75),i=a(o),s=n(76),u=a(s),r=n(77),l=a(r);e["default"]={all:i["default"],destroy:u["default"],store:l["default"]}},,,,,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(73),i=a(o),s=n(74),u=a(s);e["default"]={login:i["default"],logout:u["default"]}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(18),i=a(o),s=n(19),u=a(s),r=function(){function t(){(0,i["default"])(this,t)}return(0,u["default"])(t,null,[{key:"fetchCollection",value:function(t){var e=this,n=[];return t.forEach(function(t){n.push(e.fetch(t))}),n}},{key:"sendCollection",value:function(t){var e=this,n=[];return t.forEach(function(t){n.push(e.send(t))}),n}}]),t}();e["default"]=r},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(72),i=a(o);e["default"]={find:i["default"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.state={id:null,email:null,name:null}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.state={all:[],pagination:{totalCount:0,totalPages:0,currentPage:1,limit:5}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(26),i=a(o),s=n(18),u=a(s),r=n(19),l=a(r),c=n(28),d=a(c),f=n(27),p=a(f),h=n(25),_=a(h),v=function(t){function e(){return(0,u["default"])(this,e),(0,d["default"])(this,(0,i["default"])(e).apply(this,arguments))}return(0,p["default"])(e,t),(0,l["default"])(e,null,[{key:"fetch",value:function(t){return{id:t.id,title:t.title,content:t.content}}},{key:"send",value:function(t){return{id:t.id,title:t.title,content:t.content}}}]),e}(_["default"]);e["default"]=v},,,,,,,,,,,,,,function(t,e,n){var a,o;a=n(94);var i=n(167);o=a=a||{},"object"==typeof a["default"]&&(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,o;a=n(95);var i=n(168);o=a=a||{},"object"==typeof a["default"]&&(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,o;a=n(96);var i=n(166);o=a=a||{},"object"==typeof a["default"]&&(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,o;a=n(97);var i=n(169);o=a=a||{},"object"==typeof a["default"]&&(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,o;a=n(98);var i=n(170);o=a=a||{},"object"==typeof a["default"]&&(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,o;a=n(99);var i=n(171);o=a=a||{},"object"==typeof a["default"]&&(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,o;a=n(100);var i=n(172);o=a=a||{},"object"==typeof a["default"]&&(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){var a,o;a=n(101);var i=n(173);o=a=a||{},"object"==typeof a["default"]&&(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a},,,function(t,e,n){var a,o;a=n(93);var i=n(165);o=a=a||{},"object"==typeof a["default"]&&(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=i.render,o.staticRenderFns=i.staticRenderFns,t.exports=a},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),i=a(o);e["default"]=[{path:"/account",name:"account.show",component:i["default"].page("account","show"),meta:{auth:!0}},{path:"/post",name:"post.index",component:i["default"].page("post","index"),meta:{auth:!0}},{path:"/post/create",name:"post.create",component:i["default"].page("post","create"),meta:{auth:!0}},{path:"/login",name:"login.index",component:i["default"].page("login","index"),meta:{guest:!0}},{path:"/",redirect:"/account"}]},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=a(o),s=n(90),u=a(s),r=n(2),l=a(r),c=function(t){var e=t.data,n=u["default"].fetch(e);l["default"].dispatch("fetchAccount",n)},d=function(){l["default"].dispatch("addNotification",{type:"danger",message:"Fetching account failed!"})};e["default"]=function(){i["default"].http.get("account").then(c,d)}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=a(o),s=n(43),u=a(s),r=n(17),l=a(r),c=n(2),d=a(c),f=function(t){var e=t.data;d["default"].dispatch("login",e.token),l["default"].all(),u["default"].find(),d["default"].dispatch("addNotification",{type:"success",message:"Login successful!"}),i["default"].router.push({name:"post.index"})},p=function(){d["default"].dispatch("addNotification",{type:"danger",message:"Login failed!"})};e["default"]=function(t){i["default"].http.post("auth",t).then(f,p)}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=a(o),s=n(2),u=a(s);e["default"]=function(){u["default"].dispatch("logout"),u["default"].dispatch("clearAccount"),u["default"].dispatch("clearPost"),u["default"].dispatch("addNotification",{type:"success",message:"Logout successful!"}),i["default"].router.push({name:"login.index"})}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=a(o),s=n(2),u=a(s),r=n(46),l=a(r),c=n(91),d=a(c),f=function(t){var e=t.data,n=d["default"].fetch(e.pagination),a=l["default"].fetchCollection(e.data);u["default"].dispatch("fetchPosts",{posts:a,pagination:n})},p=function(){u["default"].dispatch("addNotification",{type:"danger",message:"Fetching posts failed!"})};e["default"]=function(){var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0],e=arguments.length<=1||void 0===arguments[1]?5:arguments[1];i["default"].http.get("posts?page="+t+"&limit="+e).then(f,p)}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=a(o),s=n(2),u=a(s),r=function(){u["default"].dispatch("addNotification",{type:"success",message:"The post has been deleted!"})},l=function(){u["default"].dispatch("addNotification",{type:"danger",message:"Deleting post failed!"})};e["default"]=function(t){i["default"].http["delete"]("posts/"+t).then(r,l)}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=a(o),s=n(2),u=a(s),r=function(){u["default"].dispatch("addNotification",{type:"success",message:"The post has been created!"}),i["default"].router.push({name:"post.index"})},l=function(){u["default"].dispatch("addNotification",{type:"danger",message:"Saving post failed!"})};e["default"]=function(t){i["default"].http.post("posts",t).then(r,l)}},function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}Object.defineProperty(e,"__esModule",{value:!0}),e.clearPost=e.fetchPosts=e.removePost=e.addPost=e.deleteNotification=e.addNotification=e.checkAuthentication=e.logout=e.login=e.clearAccount=e.fetchAccount=void 0;var o=n(13),i=a(o);e.fetchAccount=function(t,e){var n=t.commit;n(i.FETCH_ACCOUNT,e)},e.clearAccount=function(t){var e=t.commit;e(i.CLEAR_ACCOUNT)},e.login=function(t,e){var n=t.commit;n(i.LOGIN,e)},e.logout=function(t){var e=t.commit;e(i.LOGOUT)},e.checkAuthentication=function(t){var e=t.commit;e(i.CHECK_AUTHENTICATION)},e.addNotification=function(t,e){var n=t.commit;n(i.ADD_NOTIFICATION,e)},e.deleteNotification=function(t,e){var n=t.commit;n(i.DELETE_NOTIFICATION,e)},e.addPost=function(t,e){var n=t.commit;n(i.ADD_POST,e)},e.removePost=function(t,e){var n=t.commit;n(i.REMOVE_POST,e)},e.fetchPosts=function(t,e){var n=t.commit,a=e.posts,o=e.pagination;n(i.FETCH_POSTS,{posts:a,pagination:o})},e.clearPost=function(t){var e=t.commit;e(i.CLEAR_POST)}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.allPosts=function(t){return t.post.all},e.postPagination=function(t){return t.post.pagination}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(44),o=n(81);e["default"]={state:a.state,mutations:o.mutations}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mutations=void 0;var o,i=n(20),s=a(i),u=n(13),r=n(44);e.mutations=(o={},(0,s["default"])(o,u.FETCH_ACCOUNT,function(t,e){t.id=e.id,t.email=e.email,t.name=e.name}),(0,s["default"])(o,u.CLEAR_ACCOUNT,function(t){t.id=r.state.id,t.email=r.state.email,t.name=r.state.name}),o)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(84),o=n(83);e["default"]={state:a.state,mutations:o.mutations}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mutations=void 0;var o,i=n(20),s=a(i),u=n(0),r=a(u),l=n(13);e.mutations=(o={},(0,s["default"])(o,l.CHECK_AUTHENTICATION,function(t){if(t.authenticated=!!localStorage.getItem("id_token"),t.authenticated){var e="Bearer "+localStorage.getItem("id_token");r["default"].echo.options.auth.headers.Authorization=e,r["default"].http.headers.common.Authorization=e}}),(0,s["default"])(o,l.LOGIN,function(t,e){var n="Bearer "+e;t.authenticated=!0,localStorage.setItem("id_token",e),r["default"].echo.options.auth.headers.Authorization=n,r["default"].http.headers.common.Authorization=n}),(0,s["default"])(o,l.LOGOUT,function(t){t.authenticated=!1,localStorage.removeItem("id_token"),r["default"].echo.options.auth.headers.Authorization=null,r["default"].http.headers.common.Authorization=null}),o)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.state={authenticated:!1}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(87),o=n(86);e["default"]={state:a.state,mutations:o.mutations}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mutations=void 0;var o,i=n(20),s=a(i),u=n(164),r=a(u),l=n(13);e.mutations=(o={},(0,s["default"])(o,l.ADD_NOTIFICATION,function(t,e){e.id=r["default"].v4(),t.all.push(e)}),(0,s["default"])(o,l.DELETE_NOTIFICATION,function(t,e){t.all=t.all.filter(function(t){return t.id!==e?t:void 0})}),o)},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.state={all:[]}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(45),o=n(89);e["default"]={state:a.state,mutations:o.mutations}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.mutations=void 0;var o,i=n(20),s=a(i),u=n(45),r=n(13);e.mutations=(o={},(0,s["default"])(o,r.ADD_POST,function(t,e){t.all.push(e)}),(0,s["default"])(o,r.REMOVE_POST,function(t,e){var n=t.all.find(function(t){return t.id===e}),a=t.all.indexOf(n);a!==-1&&t.all.splice(a,1)}),(0,s["default"])(o,r.FETCH_POSTS,function(t,e){var n=e.posts,a=e.pagination;t.all=n,t.pagination=a}),(0,s["default"])(o,r.CLEAR_POST,function(t){t.all=u.state.all,t.pagination=u.state.pagination}),o)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(26),i=a(o),s=n(18),u=a(s),r=n(19),l=a(r),c=n(28),d=a(c),f=n(27),p=a(f),h=n(25),_=a(h),v=function(t){function e(){return(0,u["default"])(this,e),(0,d["default"])(this,(0,i["default"])(e).apply(this,arguments))}return(0,p["default"])(e,t),(0,l["default"])(e,null,[{key:"fetch",value:function(t){return{id:t.id,email:t.email,name:t.name}}},{key:"send",value:function(t){return{id:t.id,email:t.email,name:t.name}}}]),e}(_["default"]);e["default"]=v},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(26),i=a(o),s=n(18),u=a(s),r=n(19),l=a(r),c=n(28),d=a(c),f=n(27),p=a(f),h=n(25),_=a(h),v=function(t){function e(){return(0,u["default"])(this,e),(0,d["default"])(this,(0,i["default"])(e).apply(this,arguments))}return(0,p["default"])(e,t),(0,l["default"])(e,null,[{key:"fetch",value:function(t){return{totalCount:t.total_count,totalPages:t.total_pages,currentPage:t.current_page,limit:t.limit}}},{key:"send",value:function(t){return{total_count:t.totalCount,total_pages:t.totalPages,current_page:t.currentPage,limit:t.limit}}}]),e}(_["default"]);e["default"]=v},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.router=void 0;var o=n(0),i=a(o),s=n(174),u=a(s),r=n(24),l=a(r),c=n(161),d=a(c),f=n(176),p=a(f),h=n(2),_=a(h),v=n(175),m=a(v),g=n(71),y=a(g),C=n(160),b=a(C);window.Vue=i["default"],i["default"].config.debug=!1,i["default"].use(u["default"]),i["default"].http.headers.common.Accept="application/json",i["default"].http.options.root="api/v1",i["default"].http.interceptors.push(function(t,e){e(function(t){401===t.status&&l["default"].logout()})}),i["default"].echo=new d["default"]({broadcaster:"pusher",key:"f4a54dd79660dc8fc60b",auth:{headers:{Authorization:"Bearer "+localStorage.getItem("id_token")}},cluster:"eu",authEndpoint:"/broadcasting/auth"}),_["default"].dispatch("checkAuthentication"),i["default"].use(m["default"]);var P=e.router=new m["default"]({routes:y["default"]});P.beforeEach(function(t,e,n){t.matched.some(function(t){return t.meta.auth})&&!_["default"].state.auth.authenticated?e({name:"login.index"}):t.matched.some(function(t){return t.meta.guest})&&_["default"].state.auth.authenticated?e({name:"account.show"}):n()}),p["default"].sync(_["default"],P),i["default"].router=P,window.$=window.jQuery=b["default"],n(108),n(158),n(159)},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=a(o),s=n(2),u=a(s),r=n(92),l=n(9),c=a(l),d=n(17),f=a(d),p=n(43),h=a(p),_=n(46),v=a(_);e["default"]={store:u["default"],router:r.router,mounted:function(){this.$store.state.auth.authenticated&&(f["default"].all(),h["default"].find(),i["default"].echo["private"]("posts").listen("PostHasBeenCreated",function(t){u["default"].dispatch("addPost",v["default"].fetch(t.post))}).listen("PostHasBeenDeleted",function(t){u["default"].dispatch("removePost",t.postId)}))},components:{alert:c["default"].component("alert")},methods:{deleteNotification:function(t){this.$store.dispatch("deleteNotification",t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{contextualStyle:{type:String,required:!1},message:{type:String,required:!0},id:{type:String,required:!0},closeFunction:{type:Function,required:!0}},methods:{startTimer:function(){var t=this;setTimeout(function(){t.closeFunction(t.id)},5e3)}},computed:{classNames:function n(){var n=["alert"];return n.push("alert-"+this.contextualStyle),n}},mounted:function(){this.startTimer()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{switchFunction:{type:Function,required:!0},pagination:{type:Object,required:!0}},computed:{previousDisabled:function(){return this.pagination.currentPage<=1},nextDisabled:function(){return this.pagination.currentPage>=this.pagination.totalPages}},methods:{goToPage:function(t){this.switchFunction(t,this.pagination.limit)},previousPage:function(){this.previousDisabled||this.goToPage(this.pagination.currentPage-1)},nextPage:function(){this.nextDisabled||this.goToPage(this.pagination.currentPage+1)}}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),i=a(o);e["default"]={methods:{logout:function(){i["default"].logout()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),i=a(o);e["default"]={components:{VLayout:i["default"].layout("default")}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),i=a(o),s=n(9),u=a(s);e["default"]={data:function(){return{user:{email:null,password:null}}},methods:{login:function(){i["default"].login(this.user)}},components:{VLayout:u["default"].layout("minimal")}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(17),i=a(o),s=n(9),u=a(s);e["default"]={data:function(){return{post:{title:"",content:""}}},methods:{store:function(){i["default"].store(this.post)}},components:{VLayout:u["default"].layout("default")}}},function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(107),i=a(o),s=n(9),u=a(s),r=n(17),l=a(r),c=n(68);e["default"]={data:function(){return{users:[]}},computed:(0,i["default"])({},(0,c.mapGetters)({posts:"allPosts",pagination:"postPagination"}),{limit:{get:function(){return this.pagination.limit},set:function(t){l["default"].all(1,t)}}}),methods:{all:function(t,e){return l["default"].all(t,e)},destroy:function(t){return l["default"].destroy(t)},ampersandHelper:function(t){var e=!0;return t!==this.users.length-1&&(e=!1),0===t&&(e=!1),e},commaHelper:function(t){var e=!0;return t===this.users.length&&(e=!1),t===this.users.length-1&&(e=!1),0===t&&(e=!1),e}},mounted:function(){var t=this;Vue.echo.join("posts-presence").here(function(e){return t.users=e}).joining(function(e){t.users.push(e)}).leaving(function(e){var n=t.users.indexOf(e);n!==-1&&t.users.splice(n,1)})},beforeDestroy:function(){Vue.echo.leave("posts-presence")},components:{VLayout:u["default"].layout("default"),VPagination:u["default"].component("pagination")}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},,,,,,function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("router-view")," ",_h("div",{staticClass:"notification-wrapper"},[_h("div",{staticClass:"container"},[_h("div",{staticClass:"row"},[_h("div",{staticClass:"col-md-3 pull-right"},[$store.state.notification.all&&_l($store.state.notification.all,function(t){return _h("alert",{attrs:{contextualStyle:t.type,message:t.message,id:t.id,"close-function":deleteNotification}})})])])])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("nav",{staticClass:"navbar navbar-default"},[_h("div",{staticClass:"container"},[_h("div",{staticClass:"navbar-header"},[_m(0)," ",_h("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"account.show"}}},["\n          Login Example\n        "])])," ",_h("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbar"}},[_h("ul",{staticClass:"nav navbar-nav"},[_h("li",{staticClass:"nav-item"},[_h("router-link",{staticClass:"nav-link",attrs:{to:{name:"post.index"}}},["\n              Posts\n            "])])," ",_h("li",{staticClass:"nav-item"},[_h("router-link",{staticClass:"nav-link",attrs:{to:{name:"account.show"}}},["\n              Account\n            "])])])," ",_h("ul",{staticClass:"nav navbar-nav navbar-right"},[_h("li",[_h("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),logout(t)}}},[_m(1)])])])])])])," ",_h("div",{staticClass:"container"},[_h("div",{staticClass:"row"},[_h("div",{staticClass:"col-md-12"},[$slots["default"]])])])])},staticRenderFns:[function(){with(this)return _h("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbar"}},[_h("span",{staticClass:"sr-only"},["Toggle navigation"])," ",_h("span",{staticClass:"icon-bar"})," ",_h("span",{staticClass:"icon-bar"})," ",_h("span",{staticClass:"icon-bar"})])},function(){with(this)return _h("i",{staticClass:"glyphicon glyphicon-log-out"})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{"class":classNames},[_h("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(t){t.preventDefault(),closeFunction(id)}}},[_m(0)]),"\n  "+_s(message)+"\n"])},staticRenderFns:[function(){with(this)return _h("span",{attrs:{"aria-hidden":"true"}},["×"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("nav",[_h("ul",{staticClass:"pagination no-margin"},[_h("li",{"class":{disabled:this.previousDisabled}},[_h("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),previousPage(t)}}},[_m(0)])])," ",pagination.totalPages&&_l(pagination.totalPages,function(t,e){return _h("li",{"class":{active:e+1===pagination.currentPage}},[_h("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),goToPage(e+1)}}},[_s(e+1)])])})," ",_h("li",{"class":{disabled:this.nextDisabled}},[_h("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),nextPage(t)}}},[_m(1)])])])])},staticRenderFns:[function(){with(this)return _h("span",["«"])},function(){with(this)return _h("span",["»"])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"container"},[_h("div",{staticClass:"row"},[_h("div",{staticClass:"col-md-6 col-md-offset-3"},[$slots["default"]])])])},staticRenderFns:[]}},function(module,exports){module.exports={render:function(){with(this)return _h("v-layout",[_h("div",{staticClass:"panel panel-primary"},[_m(0)," ",_h("div",{staticClass:"panel-body"},[_h("table",{staticClass:"table table-striped"},[_m(1)," ",_h("tbody",[_h("tr",[_h("td",["\n            "+_s($store.state.account.name)+"\n          "])," ",_h("td",["\n            "+_s($store.state.account.email)+"\n          "])])])])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"panel-heading"},[_h("h1",{staticClass:"panel-title"},["\n        My Account\n      "])])},function(){with(this)return _h("thead",[_h("tr",[_h("th",["\n            Name\n          "])," ",_h("th",["\n            Email\n          "])])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("v-layout",[_h("div",{staticClass:"panel panel-primary"},[_m(0)," ",_h("div",{staticClass:"panel-body"},[_h("form",{on:{submit:function(t){t.preventDefault(),login(t)}}},[_h("div",{staticClass:"form-group"},[_h("div",{staticClass:"input-group"},[_m(1)," ",_h("input",{directives:[{name:"model",value:user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Email"},domProps:{value:_s(user.email)},on:{input:function(t){t.target.composing||(user.email=t.target.value)}}})])])," ",_h("div",{staticClass:"form-group"},[_h("div",{staticClass:"input-group"},[_m(2)," ",_h("input",{directives:[{name:"model",value:user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password"},domProps:{value:_s(user.password)},on:{input:function(t){t.target.composing||(user.password=t.target.value)}}})])])," ",_m(3)])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"panel-heading"},[_h("h1",{staticClass:"panel-title"},["\n        Login\n      "])])},function(){with(this)return _h("div",{staticClass:"input-group-addon"},[_h("i",{staticClass:"glyphicon glyphicon-envelope"})])},function(){with(this)return _h("div",{staticClass:"input-group-addon"},[_h("i",{staticClass:"glyphicon glyphicon-lock"})])},function(){with(this)return _h("div",{staticClass:"form-group"},[_h("button",{staticClass:"btn btn-primary"},["\n            Login\n          "])])}]}},function(module,exports){module.exports={render:function(){with(this)return _h("v-layout",[_h("div",{staticClass:"panel panel-primary"},[_m(0)," ",_h("div",{staticClass:"panel-body"},[_h("form",{staticClass:"form-horizontal",on:{submit:function(t){t.preventDefault(),store(t)}}},[_h("div",{staticClass:"form-group"},[_m(1)," ",_h("div",{staticClass:"col-sm-10"},[_h("input",{directives:[{name:"model",value:post.title,expression:"post.title"}],staticClass:"form-control",attrs:{id:"title",placeholder:"Title",type:"text"},domProps:{value:_s(post.title)},on:{input:function(t){t.target.composing||(post.title=t.target.value)}}})])])," ",_h("div",{staticClass:"form-group"},[_m(2)," ",_h("div",{staticClass:"col-sm-10"},[_h("textarea",{directives:[{name:"model",value:post.content,expression:"post.content"}],staticClass:"form-control",attrs:{id:"content",placeholder:"Content"},domProps:{value:_s(post.content)},on:{input:function(t){t.target.composing||(post.content=t.target.value)}}})])])," ",_h("div",{staticClass:"form-group"},[_h("div",{staticClass:"col-sm-offset-2 col-sm-10"},[_m(3)," ",_h("router-link",{staticClass:"btn btn-danger",attrs:{to:{name:"post.index"}}},[_m(4)," Cancel\n            "])])])])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"panel-heading"},[_h("h1",{staticClass:"panel-title"},["\n        Create Post\n      "])])},function(){with(this)return _h("label",{staticClass:"col-sm-2 control-label",attrs:{"for":"title"}},["\n            Title\n          "])},function(){with(this)return _h("label",{staticClass:"col-sm-2 control-label",attrs:{"for":"content"}},["\n            Content\n          "])},function(){with(this)return _h("button",{staticClass:"btn btn-primary"},[_h("span",{staticClass:"glyphicon glyphicon-floppy-save",attrs:{"aria-hidden":"true"}})," Save\n            "])},function(){with(this)return _h("span",{staticClass:"glyphicon glyphicon-remove",attrs:{"aria-hidden":"true"}})}]}},function(module,exports){module.exports={render:function(){with(this)return _h("v-layout",["\n  People viewing: ",users&&_l(users,function(t,e){return _h("span",[ampersandHelper(e)?_h("span",[" & "]):void 0,commaHelper(e)?_h("span",[", "]):void 0,_s(t.name)])})," ",_h("div",{staticClass:"pull-right"},[_h("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"post.create"}}},["\n      Create Post\n    "])])," ",_m(0)," ",_m(1)," ",_h("div",{staticClass:"panel panel-primary"},[_m(2)," ",_h("div",{staticClass:"panel-body"},[_h("table",{staticClass:"table table-striped"},[_m(3)," ",_h("tbody",[0===posts.length?_h("tr",[_m(4)]):void 0," ",posts&&_l(posts,function(t){return _h("tr",[_h("td",["\n            "+_s(t.id)+"\n          "])," ",_h("td",["\n            "+_s(t.title)+"\n          "])," ",_h("td",["\n            "+_s(t.content)+"\n          "])," ",_h("td",[_h("a",{staticClass:"btn btn-danger",on:{click:function(e){e.preventDefault(),destroy(t.id)}}},[_m(5)])])])})])])," ",_h("div",{staticClass:"row"},[_h("div",{staticClass:"col-md-10"},[_h("v-pagination",{attrs:{pagination:$store.state.post.pagination,"switch-function":all}})])," ",_h("div",{staticClass:"col-md-2"},[_h("select",{directives:[{name:"model",value:limit,expression:"limit"}],staticClass:"form-control",on:{change:function(t){limit=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value})[0]}}},[_h("option",{domProps:{value:5}},["5"])," ",_h("option",{domProps:{value:10}},["10"])," ",_h("option",{domProps:{value:15}},["15"])])])])])])])},staticRenderFns:[function(){with(this)return _h("div",{staticClass:"clearfix"})},function(){with(this)return _h("br")},function(){with(this)return _h("div",{staticClass:"panel-heading"},[_h("h1",{staticClass:"panel-title"},["\n        Posts\n      "])])},function(){with(this)return _h("thead",[_h("tr",[_h("th",["\n            Id\n          "])," ",_h("th",["\n            Title\n          "])," ",_h("th",["\n            Content\n          "])," ",_h("th",["\n            Actions\n          "])])])},function(){with(this)return _h("td",{attrs:{colspan:"4"}},["No posts"])},function(){with(this)return _h("i",{staticClass:"glyphicon glyphicon-trash"})}]}},,,,,function(t,e,n){function a(t){return n(o(t))}function o(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./alert/alert.vue":60,"./pagination/pagination.vue":61};a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id=178},function(t,e,n){function a(t){return n(o(t))}function o(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./default/default.vue":62,"./minimal/minimal.vue":63};a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id=179},function(t,e,n){function a(t){return n(o(t))}function o(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./account/show/show.vue":64,"./login/index/index.vue":65,"./post/create/create.vue":66,"./post/index/index.vue":67};a.keys=function(){return Object.keys(i)},a.resolve=o,t.exports=a,a.id=180},function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}var i=n(0),s=o(i),u=n(70),r=a(u);new s["default"](r).$mount("#app")}],[181]);