(this.webpackJsonpdiagnal=this.webpackJsonpdiagnal||[]).push([[0],{34:function(e,t,n){e.exports=n(46)},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),i=n(17),s=n(10),l=n(7),u=n(3),m=n(15),d=n(16),p=n(18),v=n(19),h=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.c,{to:"/movies"},"Go to movie list"))}}]),n}(a.Component),E=n(28),f=n(29),O=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"h-40 w-full"},c.a.createElement("div",{className:"h-full w-full bg-no-repeat",style:{backgroundImage:"url(slices/".concat(e.movie["poster-image"],")")}}),c.a.createElement("div",{className:"py-1 text-sm text-gray-500"},e.movie.name)))},b={endPonits:{moviesList:"api/CONTENTLISTINGPAGE-PAGE1.json"}},g="ADD_MOVIES_LIST",j="REMOVE_MOVIES_LIST";function w(){var e=Object(E.a)(["\n  background-color: black;\n  padding: 3px;\n  header {\n    width: 100px;\n    height: 50px;\n    color: red;\n  }\n"]);return w=function(){return e},e}var _=f.a.div(w()),y=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.getData()},a.getData=function(){new Promise((function(e,t){fetch(b.endPonits.moviesList).then((function(t){e(t.json())})).then((function(e){t(e)}))})).then((function(e){a.props.dispatch({type:g,payload:e.page["content-items"].content})})).catch((function(e){a.props.dispatch({type:g,payload:[]})}))},a.state={MovieList:[]},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.movies.moviesList;return c.a.createElement(_,null,c.a.createElement("div",{className:"header"}),c.a.createElement("div",{className:"grid  grid-cols-3 gap-12 p-3"},e.map((function(e,t){return c.a.createElement(O,{key:t,movie:e})}))))}}]),n}(a.Component),L=Object(i.b)((function(e){return{movies:e.movies}}))(y),D=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{exact:!0,path:"/movies",component:L}))},N=Object(u.a)(),T=function(){return c.a.createElement(s.b,{basename:"/"},c.a.createElement(s.a,{history:N},c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:h}),c.a.createElement(D,null))))},k=n(11),x=n(12),I=n(13),S=Object(k.b)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{moviesList:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(I.a)({},e,{moviesList:[].concat(Object(x.a)(e.moviesList),Object(x.a)(t.payload))});case j:return Object(I.a)({},e,{moviesList:[]});default:return e}},music:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{musicList:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(x.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?Object(I.a)({},e,{completed:!e.completed}):e}));default:return e}}}),G=Object(k.c)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(45);r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i.a,{store:G},c.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.de72029a.chunk.js.map