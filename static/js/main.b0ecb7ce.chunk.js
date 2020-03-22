(this["webpackJsonpmy-corona"]=this["webpackJsonpmy-corona"]||[]).push([[0],{105:function(e,t){},107:function(e,t){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(50),c=a.n(o),u=(a(64),a(12)),i=a(11),l=a.n(i),s=(a(68),a(20)),v=a.n(s),d=a(51),f=a.n(d),m=function(e){var t=f()(),a=[];return t.on("readable",(function(){for(var e;e=t.read();)a.push(e)})),t.on("error",(function(e){console.error(e.message)})),t.write(e),a},p=function(e){var t={},a=null;return e.forEach((function(e,n){if(0!==n){var r=e[1],o=e[0];if(r){t[r]=t[r]||{};var c=t[r];o||(o=r),c[o]=c[o]||{latitude:e[2],longitude:e[3],dateData:[]};var u=c[o].dateData;e.forEach((function(e,t){if(!(t<4)){var n=a[t];u.push({date:new Date(n),cases:parseInt(e)})}}))}}else a=e})),t},h=function(e){var t=v.a.create({headers:{"Cache-Control":"no-cache"}});v.a.all([t.get("./data/time_series_19-covid-Confirmed.csv"),t.get("./data/time_series_19-covid-Deaths.csv"),t.get("./data/time_series_19-covid-Recovered.csv")]).then(v.a.spread((function(t,a,n){var r=p(m(t.data)),o=p(m(a.data)),c=p(m(n.data)),u={};Object.entries(r).forEach((function(e){u[e[0]]=Object.keys(e[1])})),e(r,o,c,u)}))).catch((function(e){console.log(e)}))},y=a(55),g=(a(116),function(e){var t=e.queryResult,a={labels:["Qty","More","Sold","Restocking","Misc"],datasets:Object.keys(t).map((function(e){var a=t[e],n=!0,r=!1,o=void 0;try{for(var c,u=a[Symbol.iterator]();!(n=(c=u.next()).done);n=!0){var i=c.value;i.value=i.cases}}catch(l){r=!0,o=l}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}return{label:e,data:a}}))};return r.a.createElement(y.a,{data:a,options:{title:"Line (time series)",axes:{left:{secondary:!0},bottom:{scaleType:"time",primary:!0}},curve:"curveMonotoneX",height:"5in",tooltip:{customHTML:function(e){return"date"in e&&"value"in e?'\n          <div class="datapoint-tooltip">\n            <a style="background-color:#000" class="tooltip-color"></a>\n            <p class="label">'.concat(e.date,'</p>\n            <p class="value">').concat(e.value,"</p>\n          </div>\n          "):null}}}})});function E(e){var t=e.selectedProvinceState,a=e.selectedCountryRegion,n=e.countryRegionsToProvinceStates,o=e.onCountryRegionChange,c=e.onProvinceStateChange,u=Object.keys(n).sort(),i=null==a?[]:n[a].sort();return r.a.createElement("div",null,r.a.createElement("select",{onChange:o,value:a||""},r.a.createElement("option",{key:"",value:""},"- All Regions -"),u.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("select",{onChange:c,value:t||""},r.a.createElement("option",{key:"",value:""},"- All Subregions -"),i.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))))}var b=E;E.defaultProps={selectedProvinceState:null,selectedCountryRegion:null};var R=function(){var e=["confirmed","deaths","recovered"],t=Object(n.useState)(null),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)(null),s=Object(u.a)(i,2),v=s[0],d=s[1],f=Object(n.useState)({}),m=Object(u.a)(f,2),p=m[0],y=m[1],E=Object(n.useState)(!1),R=Object(u.a)(E,2),S=R[0],C=R[1];if(Object(n.useEffect)((function(){h((function(t,a,n,r){var o=function(e){var t=[];return Object.entries(e).forEach((function(e){var a=e[0],n=e[1];Object.entries(n).forEach((function(e){var n=e[0];e[1].dateData.forEach((function(e){t.push({countryRegion:a,provinceState:n,date:new Date(e.date),cases:e.cases})}))}))})),t};e.forEach((function(e){l()("CREATE TABLE ".concat(e," ").concat("(provinceState STRING, countryRegion STRING, date DATE, cases INT)"))})),l.a.tables.confirmed.data=o(t),l.a.tables.deaths.data=o(a),l.a.tables.recovered.data=o(n),y(r),C(!0)}))}),[]),!S)return"Loading...";var O=function(){var t=e.map((function(e){var t="SELECT date, sum(cases) as cases FROM ".concat(e),a=[];return o&&(t+=" WHERE countryRegion = ?",a.push(o),v&&(t+=" AND provinceState = ?",a.push(v))),t+=" GROUP BY date ORDER BY date ASC",l()(t,a)})),a=Object(u.a)(t,3);return{confirmedQueryResult:a[0],deathsQueryResult:a[1],recoveredQueryResult:a[2]}}();return r.a.createElement("div",{className:"App"},r.a.createElement(b,{selectedProvinceState:v,selectedCountryRegion:o,countryRegionsToProvinceStates:p,onCountryRegionChange:function(e){c(""===e.target.value?null:e.target.value),d(null)},onProvinceStateChange:function(e){d(""===e.target.value?null:e.target.value)}}),r.a.createElement("div",{className:"LineChartContainer"},r.a.createElement(g,{queryResult:O})))};c.a.render(r.a.createElement(R,null),document.getElementById("root"))},59:function(e,t,a){e.exports=a(117)},64:function(e,t,a){},68:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.b0ecb7ce.chunk.js.map