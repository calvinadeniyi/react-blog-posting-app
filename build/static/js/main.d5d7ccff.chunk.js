(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{33:function(e,t,n){e.exports=n(72)},39:function(e,t,n){},40:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(31),c=n.n(r),l=(n(39),n(8)),s=n(9),i=n(11),u=n(10),d=n(13),p=n(1),h=(n(40),n(18)),m=n(7),f=n.n(m),v=f.a.create({baseURL:"http://jsonplaceholder.typicode.com"});v.defaults.headers.common.Authorization="AUTH TOKEN FROM INSTANCE";var g=v,E=(n(58),function(e){return o.a.createElement("article",{className:"Post",onClick:e.clicked},o.a.createElement("h1",null,e.title),o.a.createElement("div",{className:"Info"},o.a.createElement("div",{className:"Author"},e.author)))}),b=(n(59),n(60),function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={loadedPost:null},e.deletePostHandler=function(){f.a.delete("/posts/"+e.props.match.params.id).then((function(e){console.log(e)}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){console.log(this.props),this.loadData()}},{key:"componentDidUpdate",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;this.props.match.params.id&&(this.state.loadedPost&&(this.state.loadedPost&&this.state.loadedPost.id)===+this.props.match.params.id||f.a.get("/posts/"+this.props.match.params.id).then((function(t){console.log(t),e.setState({loadedPost:t.data})})))}},{key:"render",value:function(){var e=o.a.createElement("p",{style:{textAlign:"center"}},"Please select a Post!");return this.props.match.params.id&&(e=o.a.createElement("p",{style:{textAlign:"center"}},"Loading...")),this.state.loadedPost&&(e=o.a.createElement("div",{className:"FullPost"},o.a.createElement("h1",null,this.state.loadedPost.title),o.a.createElement("p",null,this.state.loadedPost.body),o.a.createElement("div",{className:"Edit"},o.a.createElement("button",{className:"Delete",onClick:this.deletePostHandler},"Delete")))),e}}]),n}(a.Component)),y=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={posts:[]},e.postedSelectedHandler=function(t){e.props.history.push("/posts/"+t)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props),g.get("/posts ").then((function(t){var n=t.data.slice(0,4).map((function(e){return Object(h.a)(Object(h.a)({},e),{},{author:"Ade"})}));e.setState({posts:n})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=o.a.createElement("p",{style:{testAlign:"center"}}," Something Went Wrong!");return this.state.error||(t=this.state.posts.map((function(t){return o.a.createElement(E,{key:t.id,title:t.title,author:t.author,clicked:function(){return e.postedSelectedHandler(t.id)}})}))),o.a.createElement("div",null,o.a.createElement("section",{className:"Posts"},t),o.a.createElement(p.b,{path:this.props.match.url+"/:id",exact:!0,component:b}))}}]),n}(a.Component),j=function(e){return function(t){Object(i.a)(a,t);var n=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.call.apply(n,[this].concat(o))).state={component:null},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?o.a.createElement(e,this.props):null}}]),a}(a.Component)}((function(){return n.e(3).then(n.bind(null,74))})),w=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={auth:!0},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Blog"},o.a.createElement("header",null,o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(d.b,{to:"/posts/",exact:!0,activeClassName:"my-active",activeStyle:{color:"#fa923f",textDecoration:"underline"}},"Posts")),o.a.createElement("li",null,o.a.createElement(d.b,{to:{pathname:"/new-post",hash:"#submit",search:"?quick-submit=true"}},"New Post"))))),o.a.createElement(p.d,null,this.state.auth?o.a.createElement(p.b,{path:"/new-post",component:j}):null,o.a.createElement(p.b,{path:"/posts",component:y}),o.a.createElement(p.b,{render:function(){return o.a.createElement("h1",null,"Not Found")}})))}}]),n}(a.Component),O=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(w,null)))}}]),n}(a.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function P(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}f.a.defaults.baseURL="http://jsonplaceholder.typicode.com",f.a.defaults.headers.common.Authorization="AUTH TOKEN",f.a.defaults.headers.post["Content-Type"]="application/json",f.a.interceptors.request.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),f.a.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),c.a.render(o.a.createElement(O,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");k?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):P(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):P(e)}))}}()}},[[33,1,2]]]);
//# sourceMappingURL=main.d5d7ccff.chunk.js.map