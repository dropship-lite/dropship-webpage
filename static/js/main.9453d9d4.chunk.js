(this["webpackJsonpds-webpage"]=this["webpackJsonpds-webpage"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/dropship-logo.9711bd42.png"},24:function(e,t,a){e.exports=a.p+"static/media/paypal.a92c53be.png"},27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(21),r=a.n(s),o=(a(32),a(13)),h=a(1),d=a(8),l=a(9),c=a(12),u=a(11),f=(a(33),a(22)),p=a.n(f),m=a(23),v=a(24),g=a.n(v),w=a(7),y=function(){function e(t,a){Object(d.a)(this,e),this.seed=Math.random()+.4,this.context=t.canvasContext,this.width=t.width,this.height=t.height,this.x=Math.random()*this.width,this.y=Math.random()*this.height,this.speed=a.speed,this.size=a.differentSize?a.size*this.seed:a.size,this.color=a.color,this.rgbColor=this.hexToRGB(this.color),this.isGradient=a.isGradient,this.fadeSpeedRate=a.fadeSpeedRate,this.randomFadeTime=a.randomFadeTime,this.fadeSpeed=0,this.dx=2*Math.random()*(Math.random()<.5?-1:1),this.dy=2*Math.random()*(Math.random()<.5?-1:1)}return Object(l.a)(e,[{key:"move",value:function(){this.x+=this.speed*Math.sin(this.dx),this.y+=this.speed*Math.sin(this.dy),(this.x>this.width||this.x<0)&&(this.dx*=-1),(this.y>this.height||this.y<0)&&(this.dy*=-1)}},{key:"buildGradientStyle",value:function(e){var t=this.context.createRadialGradient(this.x,this.y,0,this.x,this.y,e*e);return t.addColorStop(0,"rgba(".concat(this.rgbColor,",1)")),t.addColorStop(.1,"rgba(".concat(this.rgbColor,",0.3)")),t.addColorStop(1,"rgba(".concat(this.rgbColor,",0)")),t}},{key:"show",value:function(){var e=this.size*Math.abs(Math.cos(this.fadeSpeed));this.context.beginPath(),this.context.arc(this.x,this.y,e,0,2*Math.PI),this.context.closePath(),this.fadeSpeed+=this.fadeSpeedRate*(this.randomFadeTime?this.seed:1),this.context.fillStyle=this.isGradient?this.buildGradientStyle(e):this.color,this.context.fill()}},{key:"updateCanvasSize",value:function(e,t){this.width=e,this.height=t,this.update()}},{key:"updateSettings",value:function(e){this.speed=e.speed,this.size=e.differentSize?e.size*this.seed:e.size,this.color=e.color,this.rgbColor=this.hexToRGB(this.color),this.isGradient=e.isGradient,this.fadeSpeedRate=e.fadeSpeedRate,e.randomFadeTime||(this.fadeSpeed=0),this.randomFadeTime=e.randomFadeTime,this.update()}},{key:"update",value:function(){this.move(),this.show()}},{key:"hexToRGB",value:function(e){return[(e=parseInt(e.replace("#",""),16))>>16&255,e>>8&255,255&e].join(",")}}]),e}(),b={color:"#df014e",size:30,speed:.65,blur:0,count:25,fadeSpeedRate:.005,differentSize:!0,isGradient:!1,randomFadeTime:!0},x=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(d.a)(this,a),(i=t.call(this,e)).updateFireflies=function(){i.state.firefliesArray.forEach((function(e){e.update()}))},i.draw=function(){var e=i.state.canvasContext,t=i.state.width,a=i.state.height;e.clearRect(0,0,t,a),i.updateFireflies()},i.resizeWindow=function(){var e=window.innerWidth,t=window.innerHeight;i.state.firefliesArray.forEach((function(a){a.updateCanvasSize(e,t)})),i.setState({width:e,height:t})},i.addFireflies=function(e,t){for(var a={canvasContext:i.state.canvasContext,width:i.state.width,height:i.state.height},n=i.state.settings,s=0;s<t;s++)e.push(new y(a,n))},i.removeFireflies=function(e,t){e.splice(e.length-t)},i.paramChangedHandler=function(e){var t=i.state.settings.count-e.count,a=i.state.firefliesArray;t<0&&i.addFireflies(a,Math.abs(t)),t>0&&i.removeFireflies(a,t),a.forEach((function(t){t.updateSettings(e)})),i.setState({firefliesArray:a,settings:e})},i.state={canvas:null,canvasContext:null,firefliesArray:[],settings:Object(w.a)(Object(w.a)({},b),i.props.settings),width:i.props.width,height:i.props.height},i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("fireflies-canvas"),a=t.getContext("2d"),i=this.state.width,n=this.state.height;a.fillStyle="rgba(30,30,30,1)",a.fillRect(0,0,i,n),this.setState({canvas:t,canvasContext:a});for(var s={canvasContext:a,width:i,height:n},r=this.state.settings,o=this.state.firefliesArray,h=0;h<r.count;h++)o.push(new y(s,r));this.setState({firefliesArray:o}),this.timerId=setInterval((function(){return e.draw()}),this.props.updateInterval),window.addEventListener("resize",this.resizeWindow)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("canvas",{id:"fireflies-canvas",width:this.state.width,height:this.state.height,style:{WebkitFilter:"blur(".concat(this.state.settings.blur,"px)")}}))}}]),a}(i.Component);x.defaultProps=Object(w.a)(Object(w.a)({},i.Component.defaultProps),{},{width:window.innerWidth,height:window.innerHeight,updateInterval:15,displayParamsChanger:!0,displayFpsStats:!0});var E=x,S=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={data:""},e}return Object(l.a)(a,[{key:"handle",value:function(e){this.setState({data:e.target.value});var t=e.target.value;return console.log(t),t}},{key:"sendToPaypal",value:function(e){var t=e.target.value;console.log("send "+t),window.location.href="https://www.paypal.com/paypalme/dropshiplite/".concat(t)}},{key:"render",value:function(){return n.a.createElement("div",{className:"Donate"},n.a.createElement("div",{style:{position:"absolute"}},n.a.createElement(E,null)),n.a.createElement("div",{className:"container",style:{position:"absolute"}},n.a.createElement("div",{className:"Paypal"},n.a.createElement("div",{className:"header"},n.a.createElement("img",{src:p.a,width:"200px",height:"200px"})),n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"form"},n.a.createElement("label",null,"RM"),n.a.createElement(m.a,{onChange:this.handle.bind(this),thousandSeparator:!0,isNumericString:!0,allowNegative:!1,placeholder:"0.00"}))),n.a.createElement("div",{className:"footer"},n.a.createElement("button",{onClick:this.sendToPaypal,value:this.state.data,disabled:!this.state.data,id:"link_paypal"},n.a.createElement("div",{className:"button"},n.a.createElement("img",{height:"45px",width:"45px",src:g.a}),n.a.createElement("label",null,"DONATE")))))))}}]),a}(i.Component),C=a(18),z=a(25),k=a.n(z),F=(a(36),a(37),function(){function e(t,a){Object(d.a)(this,e),this.seed=Math.random()+.4,this.context=t.canvasContext,this.width=t.width,this.height=t.height,this.x=Math.random()*this.width,this.y=Math.random()*this.height,this.speed=a.speed,this.size=a.differentSize?a.size*this.seed:a.size,this.color=a.color,this.rgbColor=this.hexToRGB(this.color),this.isGradient=a.isGradient,this.fadeSpeedRate=a.fadeSpeedRate,this.randomFadeTime=a.randomFadeTime,this.fadeSpeed=0,this.dx=2*Math.random()*(Math.random()<.5?-1:1),this.dy=2*Math.random()*(Math.random()<.5?-1:1)}return Object(l.a)(e,[{key:"move",value:function(){this.x+=this.speed*Math.sin(this.dx),this.y+=this.speed*Math.sin(this.dy),(this.x>this.width||this.x<0)&&(this.dx*=-1),(this.y>this.height||this.y<0)&&(this.dy*=-1)}},{key:"buildGradientStyle",value:function(e){var t=this.context.createRadialGradient(this.x,this.y,0,this.x,this.y,e*e);return t.addColorStop(0,"rgba(".concat(this.rgbColor,",1)")),t.addColorStop(.1,"rgba(".concat(this.rgbColor,",0.3)")),t.addColorStop(1,"rgba(".concat(this.rgbColor,",0)")),t}},{key:"show",value:function(){var e=this.size*Math.abs(Math.cos(this.fadeSpeed));this.context.beginPath(),this.context.arc(this.x,this.y,e,0,2*Math.PI),this.context.closePath(),this.fadeSpeed+=this.fadeSpeedRate*(this.randomFadeTime?this.seed:1),this.context.fillStyle=this.isGradient?this.buildGradientStyle(e):this.color,this.context.fill()}},{key:"updateCanvasSize",value:function(e,t){this.width=e,this.height=t,this.update()}},{key:"updateSettings",value:function(e){this.speed=e.speed,this.size=e.differentSize?e.size*this.seed:e.size,this.color=e.color,this.rgbColor=this.hexToRGB(this.color),this.isGradient=e.isGradient,this.fadeSpeedRate=e.fadeSpeedRate,e.randomFadeTime||(this.fadeSpeed=0),this.randomFadeTime=e.randomFadeTime,this.update()}},{key:"update",value:function(){this.move(),this.show()}},{key:"hexToRGB",value:function(e){return[(e=parseInt(e.replace("#",""),16))>>16&255,e>>8&255,255&e].join(",")}}]),e}()),M={color:"#df014e",size:30,speed:.65,blur:0,count:50,fadeSpeedRate:.005,differentSize:!0,isGradient:!1,randomFadeTime:!0},j=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var i;return Object(d.a)(this,a),(i=t.call(this,e)).updateFireflies=function(){i.state.firefliesArray.forEach((function(e){e.update()}))},i.draw=function(){var e=i.state.canvasContext,t=i.state.width,a=i.state.height;e.clearRect(0,0,t,a),i.updateFireflies()},i.resizeWindow=function(){var e=window.innerWidth,t=window.innerHeight;i.state.firefliesArray.forEach((function(a){a.updateCanvasSize(e,t)})),i.setState({width:e,height:t})},i.addFireflies=function(e,t){for(var a={canvasContext:i.state.canvasContext,width:i.state.width,height:i.state.height},n=i.state.settings,s=0;s<t;s++)e.push(new F(a,n))},i.removeFireflies=function(e,t){e.splice(e.length-t)},i.paramChangedHandler=function(e){var t=i.state.settings.count-e.count,a=i.state.firefliesArray;t<0&&i.addFireflies(a,Math.abs(t)),t>0&&i.removeFireflies(a,t),a.forEach((function(t){t.updateSettings(e)})),i.setState({firefliesArray:a,settings:e})},i.state={canvas:null,canvasContext:null,firefliesArray:[],settings:Object(w.a)(Object(w.a)({},M),i.props.settings),width:i.props.width,height:2*i.props.height},i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("fireflies-canvas"),a=t.getContext("2d"),i=this.state.width,n=this.state.height;a.fillStyle="rgba(30,30,30,1)",a.fillRect(0,0,i,n),this.setState({canvas:t,canvasContext:a});for(var s={canvasContext:a,width:i,height:n},r=this.state.settings,o=this.state.firefliesArray,h=0;h<r.count;h++)o.push(new F(s,r));this.setState({firefliesArray:o}),this.timerId=setInterval((function(){return e.draw()}),this.props.updateInterval),window.addEventListener("resize",this.resizeWindow)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("canvas",{id:"fireflies-canvas",width:this.state.width,height:this.state.height,style:{WebkitFilter:"blur(".concat(this.state.settings.blur,"px)")}}))}}]),a}(i.Component);j.defaultProps=Object(w.a)(Object(w.a)({},i.Component.defaultProps),{},{width:window.innerWidth,height:window.innerHeight,updateInterval:15,displayParamsChanger:!0,displayFpsStats:!0});var O=j;var R=function(){return Object(i.useEffect)((function(){k.a.init({duration:2e3})}),[]),n.a.createElement("div",{className:"page-cont"},n.a.createElement("div",{style:{position:"absolute"}},n.a.createElement(O,null)),n.a.createElement("div",{style:{position:"relative"},className:"body"},n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"nav-link"}),n.a.createElement("div",{className:"title"},"DROPSHIP LITE"),n.a.createElement("div",{className:"dld-cont",onClick:function(){window.location.href="https://google.com"}},n.a.createElement("button",{className:"download"},"Download for Android"))),n.a.createElement("div",{className:"content"}),n.a.createElement("div",{className:"footer"})))};var G=function(){return n.a.useEffect((function(){C.a.initialize("UA-180756841-1"),C.a.pageview(window.location.pathname+window.location.search)}),[]),n.a.createElement(o.a,{basename:""},n.a.createElement(h.c,null,n.a.createElement("div",{className:"page-container"},n.a.createElement("div",{className:"page-content"},n.a.createElement("div",{style:{position:"absolute"}},n.a.createElement(h.a,{path:"/donate",exact:!0,render:function(e){return n.a.createElement(S,null)},component:S}),n.a.createElement(h.a,{path:"/",exact:!0,render:function(e){return n.a.createElement(R,null)},component:R}))),n.a.createElement("div",{className:"page-link",style:{position:"absolute"}},n.a.createElement("nav",null,n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(o.b,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/donate"},"Donate"))))))))};r.a.render(n.a.createElement(G,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.9453d9d4.chunk.js.map