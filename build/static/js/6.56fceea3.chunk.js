(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{37:function(t,e,n){"use strict";n.r(e);var r=n(45),a=n(40),o=n(41),i=n(43),c=n(42),u=n(0),s=n(44),l=n.n(s);function f(t){l.a.defaults.baseURL="https://api.themoviedb.org/3/";var e="trending/movie/day?&page=".concat(t,"&api_key=").concat("f4c67ae87f1aa2e929a998967bea3a43");return l.a.get(e).then((function(t){return t.data})).then((function(t){return t.results})).catch((function(t){return console.log(t)}))}var p=n(72),b=n.n(p),h=n(1),j=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)("button",{className:b.a.Button,type:"button",onClick:this.props.onClick,children:"Next page"})}}]),n}(u.Component),m=n(7),v=n(2),d=Object(v.f)((function(t){var e=t.movies,n=t.location;return Object(h.jsx)("ul",{className:"MovieList",children:e.map((function(t){var e=t.id,r=t.title;return Object(h.jsx)("li",{children:Object(h.jsx)(m.b,{to:{pathname:"/movies/".concat(e),state:{from:n}},children:r})},e)}))})})),g=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(a.a)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={movies:{},page:1,error:!1,isLoading:!1},t.getData=function(){return f(t.state.page).then((function(e){t.setState((function(t){return{movies:Object(r.a)(e),page:t.page+1}}))})).catch((function(e){return t.setState({error:e})})).finally((function(){return t.setState({isLoading:!1})}))},t.nextPageButton=function(){t.getData()},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var t=this.state.movies;return console.dir(t),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("ul",{children:t.length>0&&Object(h.jsx)(d,{movies:t})}),Object(h.jsx)(j,{onClick:this.nextPageButton})]})}}]),n}(u.Component);e.default=g},45:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return a}))},72:function(t,e,n){t.exports={Button:"Button_Button__1p_l0"}}}]);
//# sourceMappingURL=6.56fceea3.chunk.js.map