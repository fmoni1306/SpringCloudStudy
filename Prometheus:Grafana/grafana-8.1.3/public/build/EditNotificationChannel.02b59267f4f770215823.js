(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"0Tfw":function(e,t,n){"use strict";var r,i=n("q1tI"),s=n("vF1F"),a=n("kDLi"),o=n("nKUr");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const l=({currentFormValues:e,imageRendererAvailable:t,register:n})=>Object(o.jsxs)(a.CollapsableSection,{label:"Notification settings",isOpen:!1,children:[Object(o.jsx)(a.Field,{children:Object(o.jsx)(a.Checkbox,c({},n("isDefault"),{label:"Default",description:"Use this notification for all alerts"}))}),Object(o.jsx)(a.Field,{children:Object(o.jsx)(a.Checkbox,c({},n("settings.uploadImage"),{label:"Include image",description:"Captures an image and include it in the notification"}))}),e.uploadImage&&!t&&(r||(r=Object(o.jsx)(a.InfoBox,{title:"No image renderer available/installed",children:"Grafana cannot find an image renderer to capture an image for the notification. Please make sure the Grafana Image Renderer plugin is installed. Please contact your Grafana administrator to install the plugin."}))),Object(o.jsx)(a.Field,{children:Object(o.jsx)(a.Checkbox,c({},n("disableResolveMessage"),{label:"Disable Resolve Message",description:"Disable the resolve message [OK] that is sent when alerting state returns to false"}))}),Object(o.jsx)(a.Field,{children:Object(o.jsx)(a.Checkbox,c({},n("sendReminder"),{label:"Send reminders",description:"Send additional notifications for triggered alerts"}))}),e.sendReminder&&Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(a.Field,{label:"Send reminder every",description:"Specify how often reminders should be sent, e.g. every 30s, 1m, 10m, 30m', or 1h etc. Alert reminders are sent after rules are evaluated. A reminder can never be sent more frequently than a configured alert rule evaluation interval.",children:Object(o.jsx)(a.Input,c({},n("frequency"),{width:8}))})})]}),u=["ref"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const p=({control:e,option:t,register:n,invalid:r})=>{const i=t.secure?"secureSettings."+t.propertyName:"settings."+t.propertyName;switch(t.element){case"input":return Object(o.jsx)(a.Input,d({},n(""+i,{required:!!t.required&&"Required",validate:e=>""===t.validationRule||f(e,t.validationRule)}),{invalid:r,type:t.inputType,placeholder:t.placeholder}));case"select":return Object(o.jsx)(a.InputControl,{control:e,name:""+i,render:e=>{var n;let{}=e,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e.field,u);return Object(o.jsx)(a.Select,d({menuShouldPortal:!0},i,{options:null!==(n=t.selectOptions)&&void 0!==n?n:void 0,invalid:r}))}});case"textarea":return Object(o.jsx)(a.TextArea,d({invalid:r},n(""+i,{required:!!t.required&&"Required",validate:e=>""===t.validationRule||f(e,t.validationRule)})));default:return console.error("Element not supported",t.element),null}},f=(e,t)=>!!RegExp(t).test(e)||"Invalid format";function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const b=({control:e,currentFormValues:t,errors:n,selectedChannelOptions:r,register:i,onResetSecureField:s,secureFields:c})=>Object(o.jsx)(o.Fragment,{children:r.map((r,l)=>{var u;const d=`${r.label}-${l}`,f=t["settings."+r.showWhen.field]&&t["settings."+r.showWhen.field].value;return r.showWhen.field&&f!==r.showWhen.is?null:"checkbox"===r.element?Object(o.jsx)(a.Field,{children:Object(o.jsx)(a.Checkbox,h({},i(r.secure?"secureSettings."+r.propertyName:"settings."+r.propertyName),{label:r.label,description:r.description}))},d):Object(o.jsx)(a.Field,{label:r.label,description:r.description,invalid:n.settings&&!!n.settings[r.propertyName],error:n.settings&&(null===(u=n.settings[r.propertyName])||void 0===u?void 0:u.message),children:c&&c[r.propertyName]?Object(o.jsx)(a.Input,{readOnly:!0,value:"Configured",suffix:Object(o.jsx)(a.Button,{onClick:()=>s(r.propertyName),fill:"text",type:"button",size:"sm",children:"Clear"})}):Object(o.jsx)(p,{option:r,register:i,control:e})},d)})}),j=["ref"];function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const O=({control:e,currentFormValues:t,errors:n,secureFields:r,selectedChannel:i,channels:s,register:c,resetSecureField:l})=>Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(a.Field,{label:"Name",invalid:!!n.name,error:n.name&&n.name.message,children:Object(o.jsx)(a.Input,g({},c("name",{required:"Name is required"})))}),Object(o.jsx)(a.Field,{label:"Type",children:Object(o.jsx)(a.InputControl,{name:"type",render:e=>{let{}=e,t=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e.field,j);return Object(o.jsx)(a.Select,g({menuShouldPortal:!0},t,{options:s}))},control:e,rules:{required:!0}})}),Object(o.jsx)(b,{selectedChannelOptions:i.options.filter(e=>e.required),currentFormValues:t,secureFields:r,onResetSecureField:l,register:c,errors:n,control:e})]}),v=({control:e,currentFormValues:t,errors:n,selectedChannel:r,secureFields:i,register:s,resetSecureField:c})=>{var l;return Object(o.jsxs)(a.CollapsableSection,{label:"Optional "+r.heading,isOpen:!1,children:[""!==r.info&&Object(o.jsx)(a.Alert,{severity:"info",title:null!==(l=r.info)&&void 0!==l?l:""}),Object(o.jsx)(b,{selectedChannelOptions:r.options.filter(e=>!e.required),currentFormValues:t,register:s,errors:n,control:e,onResetSecureField:c,secureFields:i})]})};var m,y,x,C=n("ZFWI");n.d(t,"a",(function(){return S}));const S=({control:e,errors:t,selectedChannel:n,selectableChannels:r,register:s,watch:c,getValues:u,imageRendererAvailable:d,onTestChannel:p,resetSecureField:f,secureFields:h})=>{const b=F(Object(a.useTheme)());Object(i.useEffect)(()=>{const e=new Set(null==n?void 0:n.options.filter(e=>e.showWhen.field).map(e=>"settings."+e.showWhen.field))||[];c(["type","sendReminder","uploadImage",...e])},[null==n?void 0:n.options,c]);const j=u();return n?Object(o.jsxs)("div",{className:b.formContainer,children:[Object(o.jsx)("div",{className:b.formItem,children:Object(o.jsx)(O,{selectedChannel:n,channels:r,secureFields:h,resetSecureField:f,currentFormValues:j,register:s,errors:t,control:e})}),n.options.filter(e=>!e.required).length>0&&Object(o.jsx)("div",{className:b.formItem,children:Object(o.jsx)(v,{selectedChannel:n,secureFields:h,resetSecureField:f,currentFormValues:j,register:s,errors:t,control:e})}),Object(o.jsx)("div",{className:b.formItem,children:Object(o.jsx)(l,{imageRendererAvailable:d,currentFormValues:j,register:s,errors:t,control:e})}),Object(o.jsx)("div",{className:b.formButtons,children:Object(o.jsxs)(a.HorizontalGroup,{children:[y||(y=Object(o.jsx)(a.Button,{type:"submit",children:"Save"})),Object(o.jsx)(a.Button,{type:"button",variant:"secondary",onClick:()=>p(u()),children:"Test"}),Object(o.jsx)("a",{href:C.b.appSubUrl+"/alerting/notifications",children:x||(x=Object(o.jsx)(a.Button,{type:"button",variant:"secondary",children:"Back"}))})]})})]}):m||(m=Object(o.jsx)(a.Spinner,{}))},F=Object(a.stylesFactory)(e=>({formContainer:s.css``,formItem:s.css`
      flex-grow: 1;
      padding-top: ${e.spacing.md};
    `,formButtons:s.css`
      padding-top: ${e.spacing.xl};
    `}))},"4vLh":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return h}));var r=n("Obii"),i=n("t8hP"),s=n("HJRA"),a=n("qOGI");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e){return async t=>{t(Object(a.b)());const n=await Object(i.getBackendSrv)().get("/api/alerts",e);t(Object(a.c)(n))}}function l(e,t){return async n=>{await Object(i.getBackendSrv)().post(`/api/alerts/${e}/pause`,t);n(c({state:(i.locationService.getSearchObject().state||"all").toString()}))}}function u(e){return async t=>{try{await Object(i.getBackendSrv)().post("/api/alert-notifications",e),s.a.emit(r.AppEvents.alertSuccess,["Notification created"]),i.locationService.push("/alerting/notifications")}catch(e){s.a.emit(r.AppEvents.alertError,[e.data.error])}}}function d(e){return async t=>{try{await Object(i.getBackendSrv)().put("/api/alert-notifications/"+e.id,e),s.a.emit(r.AppEvents.alertSuccess,["Notification updated"])}catch(e){s.a.emit(r.AppEvents.alertError,[e.data.error])}}}function p(e){return async(t,n)=>{const r=n().notificationChannel.notificationChannel;await Object(i.getBackendSrv)().post("/api/alert-notifications/test",o({id:r.id},e))}}function f(){return async e=>{const t=(await Object(i.getBackendSrv)().get("/api/alert-notifiers")).sort((e,t)=>e.name>t.name?1:-1);e(Object(a.f)(t))}}function h(e){return async t=>{await t(f());const n=await Object(i.getBackendSrv)().get("/api/alert-notifications/"+e);t(Object(a.d)(n))}}},R1i3:function(e,t,n){"use strict";n.r(t),n.d(t,"EditNotificationChannelPage",(function(){return O}));var r,i,s=n("q1tI"),a=n("t8hP"),o=n("kDLi"),c=n("ZGyg"),l=n("hBny"),u=n("0Tfw"),d=n("4vLh"),p=n("lzJ5"),f=n("gKHt"),h=n("qOGI"),b=n("nKUr");function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class O extends s.PureComponent{constructor(...e){super(...e),g(this,"onSubmit",e=>{const{notificationChannel:t}=this.props;this.props.updateNotificationChannel(j({},Object(f.c)(j({},t,e,{settings:j({},t.settings,e.settings)})),{id:t.id}))}),g(this,"onTestChannel",e=>{const{notificationChannel:t}=this.props;this.props.testNotificationChannel(Object(f.d)(j({},t,e,{settings:j({},t.settings,e.settings)})))})}componentDidMount(){this.props.loadNotificationChannel(parseInt(this.props.match.params.id,10))}render(){const{navModel:e,notificationChannel:t,notificationChannelTypes:n}=this.props;return Object(b.jsx)(c.b,{navModel:e,children:Object(b.jsxs)(c.b.Contents,{children:[r||(r=Object(b.jsx)("h2",{className:"page-sub-heading",children:"Edit notification channel"})),t&&t.id>0?Object(b.jsx)(o.Form,{maxWidth:600,onSubmit:this.onSubmit,defaultValues:j({},t,{type:n.find(e=>e.value===t.type)}),children:({control:e,errors:r,getValues:i,register:s,watch:o})=>{const c=n.find(e=>e.value===i().type.value);return Object(b.jsx)(u.a,{selectableChannels:Object(f.b)(n,!0),selectedChannel:c,imageRendererAvailable:a.config.rendererAvailable,onTestChannel:this.onTestChannel,register:s,watch:o,errors:r,getValues:i,control:e,resetSecureField:this.props.resetSecureField,secureFields:t.secureFields})}}):i||(i=Object(b.jsxs)("div",{children:["Loading notification channel",Object(b.jsx)(o.Spinner,{})]}))]})})}}const v={loadNotificationChannel:d.c,testNotificationChannel:d.e,updateNotificationChannel:d.g,resetSecureField:h.e};t.default=Object(l.a)(e=>({navModel:Object(p.a)(e.navIndex,"channels"),notificationChannel:e.notificationChannel.notificationChannel,notificationChannelTypes:e.notificationChannel.notificationChannelTypes}),v,e=>e.notificationChannel)(O)},gKHt:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return c}));var r=n("Wwog");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const s={id:-1,name:"",type:{value:"email",label:"Email"},sendReminder:!1,disableResolveMessage:!1,frequency:"15m",settings:{uploadImage:n("t8hP").config.rendererAvailable,autoResolve:!0,httpMethod:"POST",severity:"critical"},secureSettings:{},secureFields:{},isDefault:!1},a=Object(r.default)((e,t)=>e.map(e=>t?{value:e.value,label:e.label,description:e.description}:{value:e.value,label:e.label})),o=e=>{const t=Object.fromEntries(Object.entries(e.settings).map(([e,t])=>[e,t&&t.hasOwnProperty("value")?t.value:t]));return i({},s,e,{frequency:""===e.frequency?s.frequency:e.frequency,type:e.type.value,settings:i({},s.settings,t),secureSettings:i({},e.secureSettings)})},c=e=>{var t;return{name:e.name,type:e.type.value,frequency:null!==(t=e.frequency)&&void 0!==t?t:s.frequency,settings:i({},Object.assign(s.settings,e.settings)),secureSettings:i({},e.secureSettings)}}},hBny:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("/MKj"),i=n("zVNn"),s=n("q1tI"),a=n("2mql"),o=n.n(a),c=n("nKUr");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const u=(e,t,n)=>a=>{const u=Object(r.connect)(e,t)(a),d=e=>{const t=Object(r.useDispatch)();return Object(s.useEffect)(()=>function(){t(Object(i.a)({stateSelector:n}))},[t]),Object(c.jsx)(u,l({},e))};return d.displayName=`ConnectWithCleanUp(${u.displayName})`,o()(d,a),d}}}]);
//# sourceMappingURL=EditNotificationChannel.02b59267f4f770215823.js.map