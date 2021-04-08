(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{36:function(e,t,n){"use strict";n.r(t);var r=n(17),c=n(40),a=n(41),o=n(43),i=n(42),s=n(0),u=n(16),l=n(44),h=n.n(l);function p(e){h.a.defaults.baseURL="https://api.themoviedb.org/3/";var t="movie/".concat(e,"?api_key=").concat("f4c67ae87f1aa2e929a998967bea3a43");return h.a.get(t).then((function(e){return e.data})).catch((function(e){return console.log(e)}))}var j=n(1),v=function(e){var t=e.movie,n=e.genres,r=e.url;return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:r+t.poster_path,alt:t.title}),Object(j.jsx)("h2",{children:t.title}),Object(j.jsx)("h3",{children:"User score: "}),Object(j.jsxs)("p",{children:[10*t.vote_average,"%"]}),Object(j.jsx)("h3",{children:"Genres: "}),Object(j.jsx)("p",{children:n}),Object(j.jsx)("h3",{children:"Overview: "}),Object(j.jsx)("p",{children:t.overview})]},t.id)},m=n(7),b=[{path:"/cast",url:"/cast",name:"Cast",exact:!0,component:Object(s.lazy)((function(){return n.e(1).then(n.bind(null,74))}))},{path:"/reviews",url:"/reviews",name:"Reviews",exact:!0,component:Object(s.lazy)((function(){return n.e(2).then(n.t.bind(null,73,7))}))}];function f(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var d=n(2),O=Object(d.f)((function(e){var t=e.match;f(e,["match"]);return console.log(t),Object(j.jsx)(s.Suspense,{fallback:"Waiting...",children:Object(j.jsx)(d.c,{children:b.map((function(e){var n=e.path,r=e.component,c=e.exact,a=e.url;return Object(j.jsx)(d.a,{path:"".concat(t.path).concat(a),exact:c,component:r},n)}))})})})),g=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={movie:{},genres:"",cast:[],id:"",isLoading:!1,url:"https://image.tmdb.org/t/p/w500"},e.getMovie=function(){return p(e.props.match.params.movieId).then((function(t){console.log(t),e.setState({movie:Object(r.a)(Object(r.a)({},t),{},{id:e.props.match.params.movieId})})})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.getGenres=function(){return p(e.props.match.params.movieId).then((function(e){return e.genres})).then((function(t){var n=t.map((function(e){return e.name=" "+e.name})).join(",  ");return e.setState({genres:[n]})})).catch((function(t){return e.setState({error:t})}))},e.handleGoBack=function(){var t,n=e.props,r=n.location;n.history.push((null===r||void 0===r||null===(t=r.state)||void 0===t?void 0:t.from)||u.a.movies)},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.getMovie(),this.getGenres()}},{key:"render",value:function(){var e=this,t=this.props.match;console.log(t);var n=this.state,r=n.movie,c=n.genres,a=n.url,o=n.id;return Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("button",{type:"button",onClick:this.handleGoBack,children:"Go Back"}),Object(j.jsx)(v,{movie:r,genres:c,url:a}),Object(j.jsx)("ul",{className:"List",children:b.map((function(n){var r=n.exact,c=n.name,a=n.url;return Object(j.jsx)("li",{children:Object(j.jsx)(m.c,{exact:r,to:{pathname:"".concat(t.url).concat(a),state:{from:e.props.location.state.from,id:o}},children:c})})}))}),Object(j.jsx)(O,{})]})}}]),n}(s.Component);t.default=g}}]);
//# sourceMappingURL=7.ab64ffca.chunk.js.map