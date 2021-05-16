(this["webpackJsonp24-redux-thunk"]=this["webpackJsonp24-redux-thunk"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(14),c=n.n(r),s=(n(31),n(32),n(18)),i=n(3),u=n(11),j=n(8),l=n(10),o=n.n(l),d=n(16),b=n(1),O=function(e){var t=e.id,n=e.name,a=e.username,r=e.avatar;return Object(b.jsxs)("div",{className:"user-block flex-center",children:[Object(b.jsx)("img",{className:"user-img",src:r,alt:"avatar"}),Object(b.jsxs)("div",{className:"user-info flex-center",children:[Object(b.jsxs)("div",{children:["Id: ",t]}),Object(b.jsxs)("div",{children:["Name: ",n]}),Object(b.jsxs)("div",{children:["User name: ",a]})]})]})},h=function(){var e=Object(j.c)((function(e){return e.users})),t=Object(j.b)();return Object(a.useEffect)((function(){t(function(){var e=Object(d.a)(o.a.mark((function e(t){var n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://domer.tech:9999/users");case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r=a.data,t({type:"FETCH_USERS",payload:r});case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[t]),Object(b.jsx)("div",{className:"users-wrapper flex-center",children:e.map((function(e){return Object(b.jsx)(O,Object(u.a)({},e))}))})},p=n(19),x=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),s=Object(p.a)(c,2),i=s[0],u=s[1],l=Object(a.useState)(""),O=Object(p.a)(l,2),h=O[0],x=O[1],v=Object(j.b)();return Object(b.jsxs)("div",{className:"form flex-center",children:[Object(b.jsxs)("div",{className:"input-wrapper",children:[Object(b.jsx)("label",{children:"Name:"}),Object(b.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)},type:"text",placeholder:"Enter user name"})]}),Object(b.jsxs)("div",{className:"input-wrapper",children:[Object(b.jsx)("label",{children:"User nickname: "}),Object(b.jsx)("input",{value:i,onChange:function(e){return u(e.target.value)},type:"text",placeholder:"Enter nickname (starts with @)"})]}),Object(b.jsxs)("div",{className:"input-wrapper",children:[Object(b.jsx)("label",{children:"User avatar: "}),Object(b.jsx)("input",{value:h,onChange:function(e){return x(e.target.value)},type:"text",placeholder:"Enter image src"})]}),Object(b.jsx)("button",{onClick:function(){v(function(){var e=Object(d.a)(o.a.mark((function e(t){var a,c,s,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,c=(a={name:n,username:i,avatar:h}).username,!(a.name.length>2&&c.length>2&&c.startsWith("@"))){e.next=17;break}return e.next=6,fetch("http://domer.tech:9999/users",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 6:return s=e.sent,e.next=9,s.json();case 9:j=e.sent,console.log("\u0423\u0441\u043f\u0456\u0445:",JSON.stringify(j)),t({type:"ADD_USER",payload:j}),r(""),u(""),x(""),e.next=18;break;case 17:alert("Enter correct fields");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.error("\u041e\u0448\u0438\u0431\u043a\u0430:",e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}())},className:"add-user-btn",children:"Add user"})]})};var v=function(){return Object(b.jsx)(s.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("nav",{children:[Object(b.jsx)(s.b,{activeClassName:"active-page",className:"nav-link",to:"/users",children:"Users"}),Object(b.jsx)(s.b,{activeClassName:"active-page",className:"nav-link",to:"/add-user",children:"Add User"})]}),Object(b.jsxs)(i.c,{children:[Object(b.jsx)(i.a,{path:"/users",children:Object(b.jsx)(h,{})}),Object(b.jsx)(i.a,{path:"/add-user",children:Object(b.jsx)(x,{})})]})]})})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},m=n(26),g=n(20),N=n(25),E={users:[]},S=Object(g.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USERS":return Object(u.a)(Object(u.a)({},e),{},{users:Object(m.a)(t.payload)});case"ADD_USER":return Object(u.a)({},e);default:return e}}),Object(g.b)(Object(g.a)(N.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(Object(b.jsx)(j.a,{store:S,children:Object(b.jsx)(v,{})}),document.getElementById("root")),f()}},[[40,1,2]]]);
//# sourceMappingURL=main.48f9af22.chunk.js.map