webpackJsonp([4],{"6SZ8":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"#about-page[data-v-5357e832]{width:80%;max-width:500px;margin:auto}#about-page p[data-v-5357e832]{white-space:pre-line}",""])},GYrz:function(t,e,a){var n=a("6SZ8");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("rjj0")("c69cda28",n,!1,{sourceMap:!1})},aR4a:function(t,e,a){"use strict";e.a={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/about",{version:"draft"}).then(function(t){return console.log(t.data),{blok:t.data.story.content,title:t.data.story.content.title,content:t.data.story.content.content}})},mounted:function(){this.$storyblok.init(),this.$storyblok.on("change",function(){location.reload(!0)})}}},wz9V:function(t,e,a){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{directives:[{name:"editable",rawName:"v-editable",value:this.blok,expression:"blok"}],attrs:{id:"about-page"}},[e("h1",[this._v(this._s(this.title))]),e("p",[this._v(this._s(this.content))])])};n._withStripped=!0;var o={render:n,staticRenderFns:[]};e.a=o},yPeL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("aR4a"),o=a("wz9V"),i=!1;var s=function(t){i||a("GYrz")},r=a("VU/8")(n.a,o.a,!1,s,"data-v-5357e832",null);r.options.__file="pages/about/index.vue",e.default=r.exports}});