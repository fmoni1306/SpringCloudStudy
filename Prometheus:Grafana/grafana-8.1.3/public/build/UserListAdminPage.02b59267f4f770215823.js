(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{KErT:function(e,t,s){"use strict";s.r(t),function(e){var a,c,n,i,l,r,j,d,h,b=s("q1tI"),o=s("vF1F"),m=s("0cfB"),x=s("/MKj"),O=s("kDLi"),g=s("GQ3c"),u=s("ZGyg"),f=s("lzJ5"),p=s("sAJe"),N=s("rCnR"),w=s("HJRA"),v=s("EKT6"),y=s("nKUr");const A=e=>{const t="admin/users/edit/"+e.id;return Object(y.jsxs)("tr",{children:[Object(y.jsx)("td",{className:"width-4 text-center link-td",children:Object(y.jsx)("a",{href:t,children:Object(y.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl})})}),Object(y.jsx)("td",{className:"link-td max-width-10",children:Object(y.jsx)("a",{className:"ellipsis",href:t,title:e.login,children:e.login})}),Object(y.jsx)("td",{className:"link-td max-width-10",children:Object(y.jsx)("a",{className:"ellipsis",href:t,title:e.email,children:e.email})}),Object(y.jsx)("td",{className:"link-td max-width-10",children:Object(y.jsx)("a",{className:"ellipsis",href:t,title:e.name,children:e.name})}),Object(y.jsx)("td",{className:"link-td",children:e.lastSeenAtAge&&Object(y.jsx)("a",{href:t,children:e.lastSeenAtAge})}),Object(y.jsx)("td",{className:"link-td",children:e.isAdmin&&Object(y.jsx)("a",{href:t,children:d||(d=Object(y.jsx)(O.Tooltip,{placement:"top",content:"Grafana Admin",children:Object(y.jsx)(O.Icon,{name:"shield"})}))})}),Object(y.jsx)("td",{className:"text-right",children:Array.isArray(e.authLabels)&&e.authLabels.length>0&&Object(y.jsx)(N.a,{label:e.authLabels[0],removeIcon:!1,count:0})}),Object(y.jsx)("td",{className:"text-right",children:e.isDisabled&&(h||(h=Object(y.jsx)("span",{className:"label label-tag label-tag--gray",children:"Disabled"})))})]},e.id)},P=Object(O.stylesFactory)(()=>({table:o.css`
      margin-top: 28px;
    `})),L={fetchUsers:p.j,changeQuery:p.c,changePage:p.b};t.default=Object(m.hot)(e)(Object(x.connect)(e=>({navModel:Object(f.a)(e.navIndex,"global-users"),users:e.userListAdmin.users,query:e.userListAdmin.query,showPaging:e.userListAdmin.showPaging,totalPages:e.userListAdmin.totalPages,page:e.userListAdmin.page}),L)(e=>{const t=P(),{fetchUsers:s,navModel:d,query:h,changeQuery:m,users:x,showPaging:f,totalPages:p,page:N,changePage:L}=e;return Object(b.useEffect)(()=>{s()},[s]),Object(y.jsx)(u.b,{navModel:d,children:Object(y.jsx)(u.b.Contents,{children:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"page-action-bar",children:[Object(y.jsx)("div",{className:"gf-form gf-form--grow",children:Object(y.jsx)(v.a,{placeholder:"Search user by login, email, or name.",autoFocus:!0,value:h,onChange:e=>m(e)})}),w.b.hasPermission(g.a.UsersCreate)&&(a||(a=Object(y.jsx)(O.LinkButton,{href:"admin/users/create",variant:"primary",children:"New user"})))]}),Object(y.jsx)("div",{className:Object(o.cx)(t.table,"admin-list-table"),children:Object(y.jsxs)("table",{className:"filter-table form-inline filter-table--hover",children:[Object(y.jsx)("thead",{children:Object(y.jsxs)("tr",{children:[c||(c=Object(y.jsx)("th",{})),n||(n=Object(y.jsx)("th",{children:"Login"})),i||(i=Object(y.jsx)("th",{children:"Email"})),l||(l=Object(y.jsx)("th",{children:"Name"})),r||(r=Object(y.jsxs)("th",{children:["Seen ",Object(y.jsx)(O.Tooltip,{placement:"top",content:"Time since user was seen using Grafana",children:Object(y.jsx)(O.Icon,{name:"question-circle"})})]})),j||(j=Object(y.jsx)("th",{})),Object(y.jsx)("th",{style:{width:"1%"}})]})}),Object(y.jsx)("tbody",{children:x.map(A)})]})}),f&&Object(y.jsx)(O.Pagination,{numberOfPages:p,currentPage:N,onNavigate:L})]})})})}))}.call(this,s("3UD+")(e))}}]);
//# sourceMappingURL=UserListAdminPage.02b59267f4f770215823.js.map