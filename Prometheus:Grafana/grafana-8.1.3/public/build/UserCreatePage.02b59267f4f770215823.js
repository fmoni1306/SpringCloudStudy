(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"w+x2":function(e,t,r){"use strict";r.r(t),function(e){var n,s,a=r("q1tI"),i=r("0cfB"),c=r("/MKj"),l=r("kDLi"),d=r("t8hP"),o=r("lzJ5"),j=r("ZGyg"),b=r("Ty5D"),u=r("nKUr");function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.default=Object(i.hot)(e)(Object(c.connect)(e=>({navModel:Object(o.a)(e.navIndex,"global-users")}))(({navModel:e})=>{const t=Object(b.k)(),r=Object(a.useCallback)(async e=>{await(async e=>Object(d.getBackendSrv)().post("/api/admin/users",e))(e),t.push("/admin/users")},[t]);return Object(u.jsx)(j.b,{navModel:e,children:Object(u.jsxs)(j.b.Contents,{children:[n||(n=Object(u.jsx)("h1",{children:"Add new user"})),Object(u.jsx)(l.Form,{onSubmit:r,validateOn:"onBlur",children:({register:e,errors:t})=>Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(l.Field,{label:"Name",required:!0,invalid:!!t.name,error:t.name?"Name is required":void 0,children:Object(u.jsx)(l.Input,O({},e("name",{required:!0})))}),Object(u.jsx)(l.Field,{label:"Email",children:Object(u.jsx)(l.Input,O({},e("email")))}),Object(u.jsx)(l.Field,{label:"Username",children:Object(u.jsx)(l.Input,O({},e("login")))}),Object(u.jsx)(l.Field,{label:"Password",required:!0,invalid:!!t.password,error:t.password?"Password is required and must contain at least 4 characters":void 0,children:Object(u.jsx)(l.Input,O({},e("password",{validate:e=>""!==e.trim()&&e.length>=4}),{type:"password"}))}),s||(s=Object(u.jsx)(l.Button,{type:"submit",children:"Create user"}))]})})]})})}))}.call(this,r("3UD+")(e))}}]);
//# sourceMappingURL=UserCreatePage.02b59267f4f770215823.js.map