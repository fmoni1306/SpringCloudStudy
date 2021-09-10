(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{gcd9:function(e,t,a){"use strict";a.r(t);var n=a("Obii"),r=a("0/uQ"),s=a("p0ib"),l=a("F/XL"),o=a("67Y/"),i=a("9Z1F"),c=a("t8hP");let u;!function(e){e.RandomWalk="randomWalk",e.LiveMeasurements="measurements",e.Annotations="annotations"}(u||(u={}));const d={refId:"A",queryType:u.RandomWalk};let h;!function(e){e.Dashboard="dashboard",e.Tags="tags"}(h||(h={}));var f=a("q1tI"),p=a("kDLi"),m=a("vF1F"),g=a("Z7m5"),v=a("K4q0"),b=a("nKUr");function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const j=Object(b.jsx)("div",{children:"Specify a list of tags to match. To specify a key and value tag use `key:value` syntax."}),O=[{label:"Dashboard",value:h.Dashboard,description:"Query for events created on this dashboard and show them in the panels where they where created"},{label:"Tags",value:h.Tags,description:"This will fetch any annotation events that match the tags filter"}],x=[10,50,100,200,300,500,1e3,2e3].map(e=>({label:String(e),value:e}));function C({query:e,onChange:t}){const a=e,{limit:n,matchAny:r,tags:s,type:l}=a,o=w();return Object(b.jsxs)(p.FieldSet,{className:o.container,children:[Object(b.jsx)(p.Field,{label:"Filter by",children:Object(b.jsx)(p.Select,{menuShouldPortal:!0,inputId:"grafana-annotations__filter-by",options:O,value:l,onChange:e=>t(y({},a,{type:e.value}))})}),Object(b.jsx)(p.Field,{label:"Max limit",children:Object(b.jsx)(p.Select,{menuShouldPortal:!0,inputId:"grafana-annotations__limit",width:16,options:x,value:n,onChange:e=>t(y({},a,{limit:e.value}))})}),l===h.Tags&&s&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(p.Field,{label:"Match any",description:"Enabling this returns annotations that match any of the tags specified below",children:Object(b.jsx)(p.Switch,{id:"grafana-annotations__match-any",value:r,onChange:e=>t(y({},a,{matchAny:e.target.checked}))})}),Object(b.jsx)(p.Field,{label:"Tags",description:j,children:Object(b.jsx)(g.a,{allowCustomValue:!0,formatCreateLabel:e=>"Use custom value: "+e,inputId:"grafana-annotations__tags",onChange:e=>t(y({},a,{tags:e})),tagOptions:v.b,tags:s})})]})]})}const w=()=>({container:m.css`
      max-width: 600px;
    `});var S=a("p+Sq");function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let T=100;class A extends n.DataSourceApi{constructor(e){super(e),this.annotations={QueryEditor:C,prepareAnnotation(e){var t,a,n,r,s;return e.target=null!==(t=e.target)&&void 0!==t?t:{type:null!==(a=e.type)&&void 0!==a?a:h.Dashboard,limit:null!==(n=e.limit)&&void 0!==n?n:100,tags:null!==(r=e.tags)&&void 0!==r?r:[],matchAny:null!==(s=e.matchAny)&&void 0!==s&&s},e},prepareQuery:e=>F({},e,{refId:e.name,queryType:u.Annotations})}}query(e){const t=[],a=Object(c.getTemplateSrv)();for(const s of e.targets){if(s.queryType===u.Annotations)return Object(r.a)(this.getAnnotations({range:e.range,rangeRaw:e.range.raw,annotation:s,dashboard:Object(S.a)().getCurrent()}));if(!s.hide)if(s.queryType===u.LiveMeasurements){var o,i;let r=a.replace(s.channel,e.scopedVars);const{filter:l}=s;r&&r.startsWith("telegraf/")&&(r="stream/"+r,s.channel=r);const u=Object(n.parseLiveChannelAddress)(r);if(!Object(n.isValidLiveChannelAddress)(u))continue;const d={maxLength:null!==(o=e.maxDataPoints)&&void 0!==o?o:500};s.buffer?(d.maxDelta=s.buffer,d.maxLength=2*d.maxLength):"now"===(null===(i=e.rangeRaw)||void 0===i?void 0:i.to)&&(d.maxDelta=e.range.to.valueOf()-e.range.from.valueOf()),t.push(Object(c.getGrafanaLiveSrv)().getDataStream({key:`${e.requestId}.${T++}`,addr:u,filter:l,buffer:d}))}else t.push(q(e))}return 1===t.length?t[0]:t.length>1?Object(s.a)(...t):Object(l.a)()}metricFindQuery(e){return Promise.resolve([])}async getAnnotations(e){var t;const a=Object(c.getTemplateSrv)(),r=e.annotation,s=r.target,l={from:e.range.from.valueOf(),to:e.range.to.valueOf(),limit:s.limit,tags:s.tags,matchAny:s.matchAny};if(s.type===h.Dashboard){if(!e.dashboard.id)return Promise.resolve({data:[]});l.dashboardId=e.dashboard.id,delete l.tags}else{if(!Array.isArray(s.tags)||0===s.tags.length)return Promise.resolve({data:[]});const e="__delimiter__",t=[];for(const n of l.tags){const r=a.replace(n,{},t=>"string"==typeof t?t:t.join(e));for(const a of r.split(e))t.push(a)}l.tags=t}const o=await Object(c.getBackendSrv)().get("/api/annotations",l,`grafana-data-source-annotations-${r.name}-${null===(t=e.dashboard)||void 0===t?void 0:t.id}`);return{data:[Object(n.toDataFrame)(o)]}}testDatasource(){return Promise.resolve()}}function q(e){const{intervalMs:t,maxDataPoints:a,range:n,requestId:r}=e,s={intervalMs:t,maxDataPoints:a,from:n.from.valueOf(),to:n.to.valueOf()};return Object(c.getBackendSrv)().fetch({url:"/api/tsdb/testdata/random-walk",method:"GET",params:s,requestId:r}).pipe(Object(o.a)(e=>Object(c.toDataQueryResponse)(e)),Object(i.a)(e=>Object(l.a)(Object(c.toDataQueryResponse)(e))))}var k;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function P(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class I extends f.PureComponent{constructor(...e){super(...e),P(this,"state",{channels:[],channelFields:{}}),P(this,"queryTypes",[{label:"Random Walk",value:u.RandomWalk,description:"Random signal within the selected time range"},{label:"Live Measurements",value:u.LiveMeasurements,description:"Stream real-time measurements from Grafana"}]),P(this,"onQueryTypeChange",e=>{const{onChange:t,query:a,onRunQuery:n}=this.props;t(D({},a,{queryType:e.value})),n(),this.loadChannelInfo()}),P(this,"onChannelChange",e=>{const{onChange:t,query:a,onRunQuery:n}=this.props;t(D({},a,{channel:null==e?void 0:e.value})),n()}),P(this,"onFieldNamesChange",e=>{var t,a;const{onChange:n,query:r,onRunQuery:s}=this.props;let l=[];if(Array.isArray(e)?l=e.map(e=>e.value):e.value&&(l=[e.value]),1===l.length&&(null===(t=r.filter)||void 0===t||null===(a=t.fields)||void 0===a||!a.length)&&r.channel){var o;const e=(null!==(o=this.state.channelFields[r.channel])&&void 0!==o?o:[]).find(e=>"time"===e.value||"Time"===e.value);e&&e.value&&e.value!==l[0]&&(l=[e.value,...l])}n(D({},r,{filter:D({},r.filter,{fields:l})})),s()}),P(this,"checkAndUpdateBuffer",e=>{const{onChange:t,query:a,onRunQuery:r}=this.props;let s;if(e)try{s=1e3*n.rangeUtil.intervalToSeconds(e)}catch(e){console.warn("ERROR",e)}t(D({},a,{buffer:s})),r()}),P(this,"handleEnterKey",e=>{"Enter"===e.key&&this.checkAndUpdateBuffer(e.target.value)}),P(this,"handleBlur",e=>{this.checkAndUpdateBuffer(e.target.value)})}loadChannelInfo(){Object(c.getBackendSrv)().fetch({url:"api/live/list"}).subscribe({next:e=>{var t;const a=null===(t=e.data)||void 0===t?void 0:t.channels;if(null!=a&&a.length){const e={},t=a.map(t=>{if(t.data){const a=new Set,r=Object(n.dataFrameFromJSON)(t.data);for(const e of r.fields)a.add(e.name);e[t.channel]=Array.from(a).map(e=>({value:e,label:e}))}return{value:t.channel,label:t.channel+" ["+t.minute_rate+" msg/min]"}});this.setState({channelFields:e,channels:t})}}})}componentDidMount(){this.loadChannelInfo()}renderMeasurementsQuery(){var e;let{channel:t,filter:a,buffer:r}=this.props.query,{channels:s,channelFields:l}=this.state,o=s.find(e=>e.value===t);t&&!o&&(o={value:t,label:t,description:"Connected to "+t},s=[o,...s]);const i=new Set,c=t&&null!==(e=l[t])&&void 0!==e?e:[];if(null!=a&&a.fields)for(const e of a.fields)i.has(e)||(c.push({value:e,label:e+" (not loaded)",description:"Configured, but not found in the query results"}),i.add(e));let u="";return r&&(u=n.rangeUtil.secondsToHms(r/1e3)),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"gf-form",children:Object(b.jsx)(p.InlineField,{label:"Channel",grow:!0,labelWidth:12,children:Object(b.jsx)(p.Select,{menuShouldPortal:!0,options:s,value:o||"",onChange:this.onChannelChange,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"Select measurements channel",isClearable:!0,noOptionsMessage:"Enter channel name",formatCreateLabel:e=>"Connect to: "+e})})}),t&&Object(b.jsxs)("div",{className:"gf-form",children:[Object(b.jsx)(p.InlineField,{label:"Fields",grow:!0,labelWidth:12,children:Object(b.jsx)(p.Select,{menuShouldPortal:!0,options:c,value:(null==a?void 0:a.fields)||[],onChange:this.onFieldNamesChange,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"All fields",isClearable:!0,noOptionsMessage:"Unable to list all fields",formatCreateLabel:e=>"Field: "+e,isSearchable:!0,isMulti:!0})}),Object(b.jsx)(p.InlineField,{label:"Buffer",children:Object(b.jsx)(p.Input,{placeholder:"Auto",width:12,defaultValue:u,onKeyDown:this.handleEnterKey,onBlur:this.handleBlur,spellCheck:!1})})]}),k||(k=Object(b.jsx)(p.Alert,{title:"Grafana Live - Measurements",severity:"info",children:"This supports real-time event streams in Grafana core. This feature is under heavy development. Expect the interfaces and structures to change as this becomes more production ready."}))]})}render(){const e=D({},d,this.props.query);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"gf-form",children:Object(b.jsx)(p.InlineField,{label:"Query type",grow:!0,labelWidth:12,children:Object(b.jsx)(p.Select,{menuShouldPortal:!0,options:this.queryTypes,value:this.queryTypes.find(t=>t.value===e.queryType)||this.queryTypes[0],onChange:this.onQueryTypeChange})})}),e.queryType===u.LiveMeasurements&&this.renderMeasurementsQuery()]})}}a.d(t,"plugin",(function(){return R}));const R=new n.DataSourcePlugin(A).setQueryEditor(I)}}]);
//# sourceMappingURL=grafanaPlugin.02b59267f4f770215823.js.map