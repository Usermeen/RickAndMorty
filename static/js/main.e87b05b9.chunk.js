(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(23),i=a.n(s),r=(a(31),a(8)),o=a(9),l=a(10),d=a(11),j=(a(32),a(33),a(4)),b=a(2),u=(a(34),a(0));function h(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("span",{className:"text-gray",children:[e.title,":"]}),Object(u.jsx)("p",{className:"card-text",children:e.value})]})}var p=function(e){var t=e.items,a=t.image,n=t.name,c=t.status,s=t.species,i=t.location,r=t.gender,o=t.type;return Object(u.jsx)("div",{className:"col mb-4",children:Object(u.jsxs)("div",{className:"card h-100",children:[Object(u.jsx)("img",{className:"card-img-top",src:a,alt:""}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h4",{className:"card-title",children:n}),Object(u.jsxs)("p",{className:c.toLowerCase(),children:[c," - ",s,"."]}),Object(u.jsx)(h,{title:"Last known location",value:i.name}),Object(u.jsx)(h,{title:"Gender",value:r}),""!==o?Object(u.jsx)(h,{title:"Type",value:o}):null]})]})})};var m=function(e){return e.items.length>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Cards"}),Object(u.jsx)("div",{className:"row",children:e.items.map((function(e){return Object(u.jsx)(p,{items:e},e.id)}))})]}):Object(u.jsx)("h3",{children:"Loading Cards..."})},O=a(19),x=a(24),g=function(){function e(){Object(r.a)(this,e)}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(x.a)(Object(O.a)().mark((function e(t){var a,n;return Object(O.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could ont fetch ".concat(t,", recived ").concat(a.status));case 5:return e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCharacters",value:function(e){return this.getResource(e)}},{key:"getLocationById",value:function(e){var t="https://rickandmortyapi.com/api/location/".concat(e);return this.getResource(t)}},{key:"getEpisodeById",value:function(e){var t="https://rickandmortyapi.com/api/episode/".concat(e);return this.getResource(t)}}]),e}(),f=g,v=(a(36),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(r.a)(this,a),(n=t.call(this,e)).state={click:!1,pages:null,pagination:[1,2,3]};var c=n.state.click;return n.getPage=function(e){e.preventDefault(),n.props.selectPage(e.target.innerHTML),n.setState({click:!c})},n.componentDidUpdate=function(e,t){e!==n.props&&(n.setState((function(t,a){return{pagination:t.pagination.map((function(t,a){return e.target>=1&&e.target<=2&&n.props.target!==n.state.pagination.length?t:n.props.target+a-1})),pages:a.pages.totalPages}})),n.props.target===n.state.pages&&n.setState((function(e){return{pagination:e.pagination.map((function(t){return n.props.target>=n.props.target-n.state.pagination.length&&n.props.target<e.pages?t:t-1}))}})))},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.pagination,n=t.pages,c=this.props.target;return Object(u.jsxs)("nav",{className:"nav-container ","aria-label":"Page navigation example",children:[Object(u.jsxs)("ul",{className:"pagination justify-content-center ",children:[Object(u.jsx)("li",{className:1===c?"page-item disabled":"page-item",children:Object(u.jsx)("span",{onClick:this.getPage,className:"page-link",children:"Previous"})}),a.map((function(t,a){return Object(u.jsx)("li",{onClick:e.getPage,className:t===c?"page-item page-link active-page":"page-item page-link",children:t},a)})),Object(u.jsx)("li",{className:c===n?"page-item disabled":"page-item",children:Object(u.jsx)("span",{onClick:this.getPage,className:"page-link",children:"Next"})})]}),Object(u.jsxs)("div",{className:"nav-pages",children:[c,Object(u.jsxs)("span",{children:[" of ",n]})]})]})}}]),a}(c.a.Component));function N(){return Object(u.jsx)("footer",{className:"py-4 bg-dark",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("p",{className:"m-0 text-center text-white",children:"Copyright \xa9 Your Website 2020"})})})}function y(){return Object(u.jsx)("header",{className:" navbar navbar-expand-sm navbar-dark bg-dark",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(j.b,{className:"navbar-brand",to:"/",children:"Rick and Morty"}),Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(u.jsx)("form",{className:"form-inline my-2 my-lg-0",children:Object(u.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(j.b,{className:"nav-link",to:"/episodes",children:"Episodes"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(j.b,{className:"nav-link",to:"/locations",children:"Locations"})})]})})})]})})}function k(e){return e.isDeleteBanner?null:Object(u.jsxs)("div",{className:"jumbotron my-3",children:[Object(u.jsx)("h1",{className:"display-3",children:"Welcome!"}),Object(u.jsx)("p",{className:"lead",children:"Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim."}),Object(u.jsx)("button",{onClick:function(){return e.closeAdBanner()},href:"#",className:"btn btn-primary btn-lg",children:"Click to hide"})]})}a(22);function S(e){var t=document.querySelector("form.input-group"),a=function(a){a.preventDefault();var n=document.querySelector("input#planet").value;e.getLocationByName(n,a.target.innerHTML.toLowerCase()),t.reset()};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("form",{className:"input-group mb-2 needs-validation",children:[Object(u.jsx)("input",{id:"planet",type:"text",className:"form-control",placeholder:"Search",required:!0}),Object(u.jsx)("button",{onClick:a,className:"btn btn-primary",type:"submit",children:"Search"}),Object(u.jsx)("button",{onClick:a,className:"btn btn-primary",type:"submit",children:"Clear"})]})})}var C=a.p+"static/media/error.a73a508c.png";var D=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Something goes wrong"}),Object(u.jsx)("img",{src:C,alt:"ErrorPng"})]})},B="search",w=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={locationData:[],urlByName:"https://rickandmortyapi.com/api/location/?name=",name:"?name=",isClickFound:!1,isErrorSearch:!1},n.location=new f,n.componentDidMount=function(){document.title="Locations",n.location.getResource(n.state.urlByName).then((function(e){n.setState({locationData:e.results})}))},n.getLocationByName=function(e,t){t===B&&e||"clear"===t&&n.state.isClickFound?n.location.getResource(n.state.urlByName+e).then((function(a){n.setState({name:n.state.name+e,locationData:a.results||[],isClickFound:t===B,isErrorSearch:!1})})).catch(n.onError):n.setState({isErrorSearch:!1})},n.onError=function(e){n.setState({isErrorSearch:!0})},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("d",{children:[Object(u.jsx)("h2",{children:"Locations"}),Object(u.jsx)(S,{isClickFound:this.state.isClickFound,getLocationByName:this.getLocationByName,locationData:this.state.locationData}),this.state.isClickFound&&Object(u.jsxs)("p",{children:[" Search found: ",this.state.locationData.length]}),this.state.isErrorSearch?Object(u.jsx)(D,{}):Object(u.jsxs)("table",{className:"table table-responsive-sm",children:[Object(u.jsx)("thead",{className:"thead-dark",children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"col",children:"#"}),Object(u.jsx)("th",{scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Type"}),Object(u.jsx)("th",{scope:"col",children:"Dimension"}),Object(u.jsx)("th",{scope:"col",children:"More info"})]})}),Object(u.jsx)("tbody",{children:this.state.locationData.length>0&&this.state.locationData.map((function(e,t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:e.id}),Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.type}),Object(u.jsx)("td",{children:e.dimension}),Object(u.jsx)("td",{children:Object(u.jsx)(j.b,{to:"/locations/"+e.id,className:"btn btn-primary",children:" More info"})})]},t)}))})]})]})}}]),a}(c.a.Component),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(r.a)(this,a),(n=t.call(this,e)).state={episodesData:[],isClickToSort:!0,totalPages:null};return n.getEpisodes=new f,n.componentDidMount=function(){n.getEpisodes.getResource("https://rickandmortyapi.com/api/episode/").then((function(e){n.setState({episodesData:e.results,totalPages:e.info.pages}),console.log(n.state.episodesData),document.title="Episodes"}))},n.sortByField=function(e){var t=this;this.setState((function(){return{episode:t.state.episodesData.sort((function(a,n){return t.state.isClickToSort?a[e]<n[e]?1:-1:a[e]>n[e]?1:-1}))}}))},n.sort=function(e){switch(n.setState({isClickToSort:!n.state.isClickToSort}),e.target.innerHTML.toLowerCase()){case"name":n.sortByField("name");break;case"date":n.sortByField("air_date");break;case"episode":n.sortByField("episode");break;case"#":n.sortByField("id")}},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Episodes"}),Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{className:"thead-dark",children:Object(u.jsxs)("tr",{onClick:this.sort,children:[Object(u.jsx)("th",{scope:"col",children:"#"}),Object(u.jsx)("th",{scope:"col",children:"Name"}),Object(u.jsx)("th",{scope:"col",children:"Date"}),Object(u.jsx)("th",{scope:"col",children:"Episode"}),Object(u.jsx)("th",{scope:"col",children:"More info"})]})}),Object(u.jsx)("tbody",{children:this.state.episodesData&&this.state.episodesData.map((function(e,t){var a=e.id,n=e.name,c=e.air_date,s=e.episode;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{scope:"row",children:a}),Object(u.jsx)("td",{children:n}),Object(u.jsx)("td",{children:c}),Object(u.jsx)("td",{children:s}),Object(u.jsx)("td",{children:Object(u.jsx)(j.b,{to:"/episode/"+a,className:"btn btn-primary",children:"More info"})})]},t)}))})]})]})}}]),a}(c.a.Component),L=a(13);a(42);function P(e){var t=Object(n.useState)({}),a=Object(L.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)([]),r=Object(L.a)(i,2),o=r[0],l=r[1],d=Object(n.useState)(null),b=Object(L.a)(d,2),h=b[0],p=b[1],m=e.id,O=1===+m?"btn btn-primary disabled":"btn btn-primary",x=+m===h?"btn btn-primary disabled":"btn btn-primary",g="/episode/",v=new f;return Object(n.useEffect)((function(){v.getEpisodeById("").then((function(e){p(e.info.count)}))}),[]),Object(n.useEffect)((function(){v.getEpisodeById(m).then((function(e){s(e),l(e.characters),document.title="Episode ".concat(m)})).catch((function(e){return console.log(e.message)}))}),[m]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Episode detailts"}),Object(u.jsx)("div",{className:"list-group lead",children:Object(u.jsxs)("div",{className:"list-group-item",children:[Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)("h5",{className:"mb-1",children:c.episode}),Object(u.jsx)("small",{children:c.air_date})]}),Object(u.jsxs)("div",{className:"mb-1",children:[Object(u.jsx)("div",{className:"d-inline",children:Object(u.jsx)("span",{className:"text-gray",children:"Name:"})}),Object(u.jsx)("p",{className:"d-inline p-2",children:c.name})]}),Object(u.jsxs)("div",{className:"mb-1",children:[Object(u.jsx)("div",{className:"d-inline",children:Object(u.jsx)("span",{className:"text-gray",children:"\u0421haracters:"})}),Object(u.jsx)("p",{className:"d-inline p-2",children:o.length})]})]})}),Object(u.jsxs)("div",{className:"modal-footer",children:[Object(u.jsx)(j.b,{className:"btn btn-primary",to:"/episodes",children:"Go back"}),Object(u.jsx)(j.b,{to:+m>1?g.concat(+m-1):"/episode/1",className:O,children:"Previous"}),Object(u.jsx)(j.b,{to:+m<h?g.concat(+m+1):g+h,className:x,"data-dismiss":"modal",children:"Next "})]})]})}function F(e){var t=Object(n.useState)({}),a=Object(L.a)(t,2),c=a[0],s=a[1],i=c.name,r=c.type,o=c.dimension,l=new f;return Object(n.useEffect)((function(){l.getLocationById(e.id).then((function(e){s(e)})).catch((function(e){return console.log(e.message)}))})),Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-header",children:i}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:r}),Object(u.jsxs)("p",{className:"card-text",children:["Dimension is ",o]}),Object(u.jsx)(j.b,{className:"btn btn-primary",to:"/locations",children:"Go back"})]})]})}var M="https://rickandmortyapi.com/api/character",R="next",A="previous",T=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(r.a)(this,a),(n=t.call(this,e)).state={info:null,items:[],click:!1,isDeleteBanner:!1,page:"?page=1",target:1,prevOrNext:null,totalPages:null,episodeData:null};var c=n.state,s=c.isDeleteBanner,i=c.page,o=c.totalPages;return n.dataService=new f,n.componentDidMount=function(){n.dataService.getCharacters(M+i).then((function(e){n.setState({items:e.results,info:e.info,totalPages:e.info.pages})}))},n.componentDidUpdate=function(e,t){t.click!==n.state.click&&(n.state.prevOrNext===R&&null!==n.state.info.next?n.dataService.getCharacters(n.state.info.next).then((function(e){n.setState({items:e.results,info:e.info})})):n.state.prevOrNext===A&&null!==n.state.info.prev&&n.dataService.getCharacters(n.state.info.prev).then((function(e){n.setState({items:e.results,info:e.info})}))),t.page!==n.state.page&&n.dataService.getCharacters(M+n.state.page).then((function(e){n.setState({items:e.results,info:e.info})}))},n.selectPage=function(e){e.toLowerCase()===R?n.setState({click:!n.state.click,target:n.state.target===o?o:n.state.target+1,prevOrNext:e.toLowerCase()}):e.toLowerCase()===A?n.setState({click:!n.state.click,target:n.state.target>1?+n.state.target-1:1,prevOrNext:e.toLowerCase()}):n.setState({target:+e.toLowerCase(),page:"?page="+e,click:!n.state.click})},n.closeAdBanner=function(){n.setState({isDeleteBanner:!s})},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.items,n=t.isDeleteBanner,c=t.target;return Object(u.jsx)(j.a,{children:Object(u.jsxs)("div",{className:"main",children:[Object(u.jsx)(y,{isDeleteBanner:n,closeAdBanner:this.closeAdBanner}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(b.a,{exact:!0,path:"/",render:function(){return document.title="Rick and Morty",Object(u.jsx)(k,{isDeleteBanner:n,closeAdBanner:e.closeAdBanner})}}),Object(u.jsx)(b.a,{exact:!0,path:"/locations",component:w}),Object(u.jsx)(b.a,{path:"/locations/:id",render:function(e){var t=e.match.params.id;return Object(u.jsx)(F,{id:t})}}),Object(u.jsx)(b.a,{path:"/",exact:!0,render:function(){return Object(u.jsx)(v,{selectPage:e.selectPage,target:c,pages:e.state})}}),Object(u.jsx)(b.a,{exact:!0,path:"/",component:function(e){return Object(u.jsx)(m,{items:a})}}),Object(u.jsx)(b.a,{path:"/episodes",render:function(){return Object(u.jsx)(E,{getDataOfEpisodes:e.getDataOfEpisodes})}}),Object(u.jsx)(b.a,{path:"/episode/:id",render:function(e){var t=e.match.params.id;return Object(u.jsx)(P,{id:t})}})]}),Object(u.jsx)(N,{})]})})}}]),a}(c.a.Component);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(j.a,{basename:"/RickAndMorty/",children:Object(u.jsx)(T,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.e87b05b9.chunk.js.map