(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),c=n(17),a=n.n(c),i=(n(28),n(29),n(8)),o=n.n(i),l=n(18),u=n(19),j=n(20),d=n(23),h=n(22),p=n(53),b=n(54),O=n(55),m=n(56),x=n(58),f=n(57),g=n(21),v=n.n(g),y=function(){return v.a.get("https://randomuser.me/api/?results=20&nat=us")},k=n(1),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={person:[],personData:[]},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y();case 2:t=e.sent,n=t.data,this.setState({person:n.results,personData:n.results}),console.log(n);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.person,n=this.state.personData;return Object(k.jsxs)("div",{children:[Object(k.jsx)(p.a,{children:Object(k.jsx)("h1",{children:"Employee Directory"})}),Object(k.jsx)(b.a,{children:Object(k.jsxs)(O.a,{children:[Object(k.jsx)(m.a,{children:Object(k.jsx)(x.a,{onClick:function(){var n=t.filter((function(e){return"male"===e.gender}));e.setState({person:n})},className:"m-1",children:"Filter: Show 'male' only"})}),Object(k.jsx)(m.a,{children:Object(k.jsx)(x.a,{onClick:function(){var n=[].concat(t).sort((function(e,t){return e.registered.age-t.registered.age}));e.setState({person:n})},className:"m-1",children:"Sort: Youngest registration date to oldest"})}),Object(k.jsx)(m.a,{children:Object(k.jsx)(x.a,{onClick:function(){e.setState({person:n})},className:"m-1",children:"Reset"})})]})}),Object(k.jsx)(O.a,{children:this.state.person.map((function(e){return Object(k.jsxs)(f.a,{style:{width:"10rem"},className:"m-4",children:[Object(k.jsx)(f.a.Img,{variant:"top",src:e.picture.large}),Object(k.jsxs)(f.a.Body,{children:[Object(k.jsxs)(f.a.Title,{children:[e.name.first," ",e.name.last]}),Object(k.jsx)(f.a.Text,{children:e.email}),Object(k.jsx)(f.a.Text,{children:e.phone})]})]},e.login.uuid)}))})]})}}]),n}(r.Component);var w=function(){return Object(k.jsx)("div",{children:Object(k.jsx)(S,{})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))};n(50);a.a.render(Object(k.jsx)(s.a.StrictMode,{children:Object(k.jsx)(w,{})}),document.getElementById("root")),C()}},[[51,1,2]]]);
//# sourceMappingURL=main.61ec6ae2.chunk.js.map