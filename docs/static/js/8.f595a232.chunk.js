(this["webpackJsonpliqi-website"]=this["webpackJsonpliqi-website"]||[]).push([[8],{115:function(e,t,a){e.exports={container:"News_container__1CmzL",list:"News_list__rlV_K",category:"News_category__221fQ",active:"News_active__lOZu9",name:"News_name__1lXox",item:"News_item__3ZyE1",index:"News_index__1er67",first:"News_first__2I1vG",tag:"News_tag__3qRSu",time:"News_time__2xwQC"}},142:function(e,t,a){"use strict";a.r(t);var c=a(26),s=a(14),n=a(1),r=a(97),i=a.n(r).a.create({baseURL:"http://cone.love:8000/api/rest/v1"});i.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)}));var l=i;var u=a(115),o=a.n(u),j=a(0);t.default=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(-1),u=Object(s.a)(i,2),b=u[0],_=u[1],d=Object(n.useState)(""),O=Object(s.a)(d,2),f=O[0],m=O[1],h=Object(n.useState)(""),N=Object(s.a)(h,2),x=N[0],v=N[1],p=Object(n.useState)([]),w=Object(s.a)(p,2),g=w[0],y=w[1],S=Object(n.useState)(""),A=Object(s.a)(S,2),k=A[0],q=A[1];return Object(n.useEffect)((function(){l({url:"/sub/cate"}).then((function(e){if(console.log("res",e),Array.isArray(e)){var t=[];e.forEach((function(e){Array.isArray(e.subs)&&(t=[].concat(Object(c.a)(t),Object(c.a)(e.subs)))})),t.length>0&&(r(t),_(t[0].id))}}))}),[]),Object(n.useEffect)((function(){var e;b>-1&&(e=b,l({url:"/sub/".concat(e,"/data")})).then((function(e){Array.isArray(e.data)&&(m(e.name),v(e.url),y(e.data),q(e.update_time))}))}),[b]),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("ul",{className:o.a.list,children:a.map((function(e){return Object(j.jsx)("li",{className:"".concat(o.a.category," ").concat(b===e.id?o.a.active:""),onClick:function(){_(e.id)},children:e.name})}))})}),Object(j.jsx)("div",{className:o.a.container,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:o.a.name,children:Object(j.jsx)("a",{href:x,target:"_blank",rel:"noreferrer",children:f})}),Object(j.jsx)("ul",{children:g.map((function(e,t){return Object(j.jsxs)("li",{className:o.a.item,children:[Object(j.jsxs)("span",{className:"".concat(o.a.index," ").concat(t<3?o.a.first:""),children:[t+1,"."]}),Object(j.jsx)("a",{className:o.a.title,href:e.url,target:"_blank",rel:"noreferrer",children:e.title}),Object(j.jsx)("span",{className:o.a.tag,children:e.tag})]})}))}),Object(j.jsxs)("div",{className:o.a.time,children:["\u66f4\u65b0\u65f6\u95f4: ",k]})]})})]})}}}]);
//# sourceMappingURL=8.f595a232.chunk.js.map