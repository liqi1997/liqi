(this["webpackJsonpliqi-website"]=this["webpackJsonpliqi-website"]||[]).push([[6],{118:function(e,t,a){e.exports={item:"Comments_item__3lfxY",avatar:"Comments_avatar__2kpe0"}},120:function(e,t,a){e.exports={category:"Blog_category__3ZhH_",active:"Blog_active__2d77n",header:"Blog_header__3QlSv",item:"Blog_item__3qqrK",title:"Blog_title__1Y9-9",body:"Blog_body__1l07e",user:"Blog_user__1Dccd",avatar:"Blog_avatar__1xt0w",name:"Blog_name__yiIwO",time:"Blog_time__VM5XK",extra:"Blog_extra__3okgt",comments:"Blog_comments__12J3m",icon:"Blog_icon__20X6P"}},144:function(e,t,a){"use strict";a.r(t);var c=a(14),s=a(1),n=a.n(s),r=a(7),i=a(8),l=a(24),o=a(23),j=a(118),u=a.n(j),d=a(119),m=a(0),_=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(r.a)(this,a),(c=t.call(this,e)).renderHtml=function(e){return{__html:c.md.render(e)}},c.state={},c.md=new d.a,c}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.list;return Object(m.jsx)("div",{children:Object(m.jsx)("ul",{children:t.map((function(t){return Object(m.jsxs)("li",{className:u.a.item,children:[Object(m.jsx)("img",{className:u.a.avatar,src:t.user?t.user.avatar_url:"#",alt:"avatar"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:u.a.name,children:t.user?t.user.login:"--"}),Object(m.jsx)("div",{dangerouslySetInnerHTML:e.renderHtml(t.body)})]})]})}))})})}}]),a}(n.a.Component),b=a(120),h=a.n(b);t.default=function(){var e=Object(s.useState)([]),t=Object(c.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){fetch("https://gitee.com/api/v5/repos/ritchieli/liqi/issues?access_token=4572c1ff3f13bc997a39deaeba2f99de&state=open&sort=created&direction=desc&page=1&per_page=20").then((function(e){return e.json()})).then((function(e){console.log("res ",e),Array.isArray(e)&&n(e)}))}),[]);var r=Object(s.useState)([]),i=Object(c.a)(r,2),l=i[0],o=i[1];Object(s.useEffect)((function(){fetch("https://gitee.com/api/v5/repos/ritchieli/liqi/labels").then((function(e){return e.json()})).then((function(e){Array.isArray(e)&&o(e)}))}),[]);var j=Object(s.useState)({}),u=Object(c.a)(j,2),d=u[0],b=u[1],O=Object(s.useState)([]),f=Object(c.a)(O,2),v=f[0],x=f[1];return Object(s.useEffect)((function(){d.comments_url&&fetch(d.comments_url).then((function(e){return e.json()})).then((function(e){console.log("res",e),x(e)}))}),[d]),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:h.a.category,children:l.map((function(e){return Object(m.jsx)("div",{className:h.a.active,children:e.name})}))}),Object(m.jsx)("ul",{children:a.map((function(e){return Object(m.jsxs)("li",{className:h.a.item,children:[Object(m.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("div",{className:h.a.title,children:e.title})}),Object(m.jsx)("div",{className:h.a.body,children:e.body}),Object(m.jsxs)("div",{className:h.a.user,children:[Object(m.jsx)("img",{className:h.a.avatar,src:e.user?e.user.avatar_url:"#",alt:"avatar"}),Object(m.jsx)("div",{className:h.a.name,children:e.user?e.user.login:"--"}),Object(m.jsxs)("div",{className:h.a.time,children:["\u66f4\u65b0\u4e8e ",e.updated_at]}),Object(m.jsxs)("div",{className:h.a.extra,children:[Object(m.jsxs)("div",{className:h.a.comments,children:[Object(m.jsx)("span",{className:"iconfont icon-read ".concat(h.a.icon)}),Object(m.jsx)("span",{children:e.comments})]}),Object(m.jsxs)("div",{className:"button",onClick:function(){!function(e){b(e)}(e)},children:["\u67e5\u770b\u8bc4\u8bba",Object(m.jsx)("span",{className:"iconfont icon-down"})]})]})]}),Object(m.jsx)(_,{list:v})]},e.id)}))})]})}}}]);
//# sourceMappingURL=6.71918355.chunk.js.map