(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(48)},27:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),s=(a(27),a(6)),i=a(7),l=a(9),u=a(8),m=a(10),d=function(){return r.a.createElement("h1",{className:"alert-success"},"ONLINE SHOP")},p=a(52),h=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{classNameName:"navbar-brand",href:"#"},r.a.createElement("img",{src:"https://www.svgimages.com/svg-image/s7/amazon-logo-256x256.png",width:"30",height:"30",className:"d-inline-block align-top",alt:"No logo found"}),"Shopping"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(p.a,{className:"nav-link",activeClassName:"active",to:"/"},"Items ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{className:"nav-link",to:"/about"},"About Us.")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a,{className:"nav-link",to:"/contact"},"Contact Us.")))))},v=a(13),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={msg:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"doClear",value:function(){this.refs.uid.value="",this.refs.pwd.value=""}},{key:"add",value:function(){var e=this,t=this.refs.uid.value,a={userid:t,pwd:this.refs.pwd.value};v.database().ref("users/"+t).set(a).then(function(t){e.setState({msg:"User Added...."})}).catch(function(t){e.setState({msg:"Error in User Add...."})})}},{key:"doLogin",value:function(){var e=this,t=this.refs.uid.value,a=this.refs.pwd.value;v.database().ref("users/"+t).on("value",function(n){n.val().pwd==a?(e.setState({msg:"Welcome "+t}),e.props.updateLoginStatus(!0,t)):(e.setState({msg:"Invalid Userid or Password"}),e.props.updateLoginStatus(!1))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",{className:"alert-info"},"Login Page"),r.a.createElement("h3",{className:"alert-success"},this.state.msg),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"UserId:"),r.a.createElement("input",{id:"userid",type:"text",ref:"uid",placeholder:"Type UserName",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:""},"Password:"),r.a.createElement("input",{type:"password",ref:"pwd",placeholder:"Type Password",className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{onClick:this.doLogin.bind(this),className:"btn btn-primary"},"Login"),"\xa0 ",r.a.createElement("button",{className:"btn btn-success",onClick:this.add.bind(this)},"Register"),"\xa0",r.a.createElement("button",{onClick:this.doClear.bind(this),className:"btn btn-danger"},"Clear")))}}]),t}(r.a.Component),b="https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json",g=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card",style:{width:"18rem"}},r.a.createElement("img",{className:"card-img-top",src:e.item.url,alt:"Card image cap"}),">>>>>>>>>>>>>>>>>>>>>>>>>>",r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.item.name),r.a.createElement("p",{className:"card-text"},e.item.price),r.a.createElement("a",{href:"#",className:"btn btn-primary"},"Add to Cart")))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("h2",null,"Product Details")))},E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={items:[],err:{}},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.doAjax()}},{key:"doAjax",value:function(){var e=this;fetch(b).then(function(t){t.json().then(function(t){e.setState({items:t.mobiles}),console.log("Data is ",t.mobiles)}).catch(function(t){e.setState({err:t})})}).catch(function(t){e.setState({err:t})})}},{key:"render",value:function(){return this.state.items.map(function(e){return r.a.createElement(g,{item:e})})}}]),t}(r.a.Component),w=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"About US View...."))},N=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Contact Us View...."))},k=a(53),y=a(49),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={items:[],err:{}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(h,null),r.a.createElement("h3",null,"Welcome ",this.props.userid),r.a.createElement(k.a,null,r.a.createElement(y.a,{path:"/",exact:!0,component:E}),r.a.createElement(y.a,{path:"/about",exact:!0,component:w}),r.a.createElement(y.a,{path:"/contact",exact:!0,component:N})))}}]),t}(r.a.Component),O=(a(46),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={isLogin:!1,userid:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"isAuth",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.setState({isLogin:e,userid:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},this.state.isLogin?r.a.createElement(j,{userid:this.state.userid}):r.a.createElement(f,{updateLoginStatus:this.isAuth.bind(this)}))}}]),t}(r.a.Component)),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var A=a(51);v.initializeApp({apiKey:"AIzaSyDJvjsDnGbo7-zRepZY8BCsydk3BVqeX8c",authDomain:"starkproject-c869a.firebaseapp.com",databaseURL:"https://starkproject-c869a.firebaseio.com",projectId:"starkproject-c869a",storageBucket:"starkproject-c869a.appspot.com",messagingSenderId:"578848420243"}),c.a.render(r.a.createElement(A.a,null,r.a.createElement(O,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Online-Shop",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Online-Shop","/service-worker.js");S?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):C(t,e)})}}()}},[[22,2,1]]]);
//# sourceMappingURL=main.3a162ee4.chunk.js.map