(this.webpackJsonpfun2build=this.webpackJsonpfun2build||[]).push([[0],{141:function(e,t,n){},152:function(e,t){},154:function(e,t){},190:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(102),o=n.n(i),s=(n(141),n(101)),j=n(4);var u=function(){return Object(j.jsxs)(s.a,{children:[Object(j.jsx)(s.b,{children:"SPACE4FUN"}),Object(j.jsxs)(s.f,{color:"blue.900",children:[Object(j.jsx)(s.e,{children:"\u603b\u89c8"}),Object(j.jsx)(s.c,{}),Object(j.jsx)(s.d,{title:"\u714e\u86cb",children:Object(j.jsx)(s.e,{children:"\u70ed\u8bc4"})})]})]})},a=n(79);var l=function(){return Object(j.jsxs)(a.b,{h:"2rem",w:"100vw",bg:"blue.900",color:"blue.50",flexDir:"row",justify:"space-between",align:"center",children:[Object(j.jsx)(a.b,{flex:1,justify:"left",children:Object(j.jsx)(u,{})}),Object(j.jsx)(a.b,{flex:1,justify:"center",children:Object(j.jsx)("span",{style:{color:"white"},children:"\u4e3b\u9875/\u714e\u86cb/\u4f18\u8bc4"})}),Object(j.jsx)(a.b,{flex:1,justify:"right"})]})},b=n(52),d=n(7),f=n(100),h=n(50),O=n(105),x=n.n(O),m=function(e){return fetch(e).then((function(e){return e.text()})).then((function(e){return(new x.a).parseString(e)})).then((function(e){return e.items}))};var g=function(e){return fetch(e).then((function(e){return e.json()}))};var p=function(e){var t=function(e){var t=Object(h.a)("https://tucao.space4fun.workers.dev".concat(e),g),n=t.data,c=t.error;return{tucao:n,isTucaoLoading:!c&&!n,isTucaoError:c}}(e.id),n=t.tucao,c=t.isTucaoError,r=t.isTucaoLoading;return c&&console.error(c),Object(j.jsx)(a.c,{spacing:4,children:r?Object(j.jsx)(f.a,{mt:"4",noOfLines:4,spacing:"4"}):c||!n?Object(j.jsx)(a.a,{children:" error "}):n.map((function(e){return Object(j.jsxs)(a.d,{children:[Object(j.jsx)(a.e,{color:"blue.400",children:e.comment_author}),Object(j.jsx)(a.e,{color:"blue.900",children:e.comment_content})]},e.comment_ID.toString())}))})};var v=function(){var e=Object(d.a)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(b.a)(i,2),s=o[0],u=o[1],l=Object(c.useState)(""),O=Object(b.a)(l,2),x=O[0],g=O[1],v=Object(c.useRef)(),w=Object(c.useRef)(),y=Object(c.useRef)();Object(d.h)({ref:v,handler:function(){r.off(),u("")}});var k=function(){var e=Object(h.a)("https://spac4fun.herokuapp.com/jandan/top-comments",m),t=e.data,n=e.error;return{comment:t,isCommentLoading:!n&&!t,isCommentError:n}}(),C=k.comment,L=k.isCommentLoading,S=k.isCommentError;return Object(j.jsx)(a.b,{justify:"center",align:"stretch",onWheel:function(e){(n?y.current:w.current).scrollBy(e.deltaX,e.deltaY)},h:"calc(100vh - 2rem)",children:Object(j.jsxs)(a.b,{justify:"center",align:"stretch",ref:v,children:[Object(j.jsx)(a.a,{ref:w,w:"60vw",overflow:n?"hidden":"auto",sx:{"::-webkit-scrollbar":{display:"none"}},children:Object(j.jsx)(a.c,{spacing:4,children:L?Object(j.jsx)(f.a,{mt:"4",noOfLines:4,spacing:"4"}):S||!C?Object(j.jsx)(a.a,{children:" error "}):C.map((function(e){return Object(j.jsxs)(a.d,{onClick:function(){r.on(),u(e.guid),g(e.link.substring(e.link.lastIndexOf("/")))},children:[Object(j.jsx)(a.e,{color:n!==(e.guid===s)?"gray.50":"blue.400",children:e.author}),Object(j.jsx)(a.e,{color:n!==(e.guid===s)?"gray.50":"blue.900",children:e.contentSnippet})]},e.guid)}))})}),Object(j.jsx)(a.a,{ref:y,w:"30vw",display:n?"block":"none",overflow:"auto",sx:{"::-webkit-scrollbar":{display:"none"}},children:Object(j.jsx)(p,{id:x})})]})})};var w=function(){return Object(j.jsxs)(a.b,{flexDir:"column",bg:"gray.50",h:"100vh",children:[Object(j.jsx)(l,{}),Object(j.jsx)(v,{})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),i(e),o(e)}))},k=n(31);o.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(k.a,{children:Object(j.jsx)(w,{})})})),y()}},[[190,1,2]]]);
//# sourceMappingURL=main.b4e707e3.chunk.js.map