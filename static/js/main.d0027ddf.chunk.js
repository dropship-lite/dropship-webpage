(this["webpackJsonpds-webpage"]=this["webpackJsonpds-webpage"]||[]).push([[0],Array(23).concat([function(t,e,i){t.exports=i.p+"static/media/logo.cc77168d.gif"},function(t,e,i){t.exports=i.p+"static/media/android.7f20f2f7.png"},,function(t,e,i){t.exports=i.p+"static/media/dropship-logo.9711bd42.png"},,function(t,e,i){t.exports=i.p+"static/media/paypal.a92c53be.png"},function(t,e,i){t.exports=i.p+"static/media/login.41710fdc.png"},function(t,e,i){t.exports=i.p+"static/media/home-new-dark.50adb326.png"},function(t,e,i){t.exports=i.p+"static/media/reg-stockist.bbf1c692.png"},function(t,e,i){t.exports=i.p+"static/media/profile.8da0f218.png"},function(t,e,i){t.exports=i.p+"static/media/home-month.f2df97d7.png"},function(t,e,i){t.exports=i.p+"static/media/home-daily.b3d62069.png"},function(t,e,i){t.exports=i.p+"static/media/agent.fd36c99f.png"},function(t,e,i){t.exports=i.p+"static/media/rq-item.05ea6c16.png"},function(t,e,i){t.exports=i.p+"static/media/chat.ad3b946b.png"},function(t,e,i){t.exports=i(56)},,,,,function(t,e,i){},function(t,e,i){},,,,,,function(t,e,i){},,,function(t,e,i){},function(t,e,i){t.exports=i.p+"static/media/more-arrow.582fa5b2.png"},,function(t,e,i){"use strict";i.r(e);var a=i(0),s=i.n(a),n=i(22),r=i.n(n),o=(i(43),i(15)),h=i(23),d=i.n(h),c=i(24),l=i.n(c),f=(i(44),i(58)),u=i(59),p=i(60);var m=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{className:"container"},s.a.createElement(u.a,{className:"upper-container"},s.a.createElement(p.a,{sm:6,className:"logo-cont"},s.a.createElement(u.a,{className:"row-logo"},s.a.createElement(p.a,{md:3},s.a.createElement("img",{src:d.a,alt:"",className:"logo"})),s.a.createElement(p.a,{md:9},"DROPSHIP LITE"))),s.a.createElement(p.a,{sm:6},s.a.createElement("ul",{className:"nav-cont"},s.a.createElement("li",{className:"nav-items"},s.a.createElement(o.b,{className:"nav-links"},"Home")),s.a.createElement("li",{className:"nav-items"},s.a.createElement(o.b,{className:"nav-links"},"Donate")),s.a.createElement("li",{className:"nav-items"},s.a.createElement("button",{className:"download"},s.a.createElement("img",{src:l.a,height:25,width:25,className:"android",alt:""}),"Download")))))))},g=i(2),v=i(9),w=i(10),y=i(14),x=i(13),b=(i(50),i(26)),S=i.n(b),C=i(27),E=i(28),F=i.n(E),z=i(8),k=function(){function t(e,i){Object(v.a)(this,t),this.seed=Math.random()+.4,this.context=e.canvasContext,this.width=e.width,this.height=e.height,this.x=Math.random()*this.width,this.y=Math.random()*this.height,this.speed=i.speed,this.size=i.differentSize?i.size*this.seed:i.size,this.color=i.color,this.rgbColor=this.hexToRGB(this.color),this.isGradient=i.isGradient,this.fadeSpeedRate=i.fadeSpeedRate,this.randomFadeTime=i.randomFadeTime,this.fadeSpeed=0,this.dx=2*Math.random()*(Math.random()<.5?-1:1),this.dy=2*Math.random()*(Math.random()<.5?-1:1)}return Object(w.a)(t,[{key:"move",value:function(){this.x+=this.speed*Math.sin(this.dx),this.y+=this.speed*Math.sin(this.dy),(this.x>this.width||this.x<0)&&(this.dx*=-1),(this.y>this.height||this.y<0)&&(this.dy*=-1)}},{key:"buildGradientStyle",value:function(t){var e=this.context.createRadialGradient(this.x,this.y,0,this.x,this.y,t*t);return e.addColorStop(0,"rgba(".concat(this.rgbColor,",1)")),e.addColorStop(.1,"rgba(".concat(this.rgbColor,",0.3)")),e.addColorStop(1,"rgba(".concat(this.rgbColor,",0)")),e}},{key:"show",value:function(){var t=this.size*Math.abs(Math.cos(this.fadeSpeed));this.context.beginPath(),this.context.arc(this.x,this.y,t,0,2*Math.PI),this.context.closePath(),this.fadeSpeed+=this.fadeSpeedRate*(this.randomFadeTime?this.seed:1),this.context.fillStyle=this.isGradient?this.buildGradientStyle(t):this.color,this.context.fill()}},{key:"updateCanvasSize",value:function(t,e){this.width=t,this.height=e,this.update()}},{key:"updateSettings",value:function(t){this.speed=t.speed,this.size=t.differentSize?t.size*this.seed:t.size,this.color=t.color,this.rgbColor=this.hexToRGB(this.color),this.isGradient=t.isGradient,this.fadeSpeedRate=t.fadeSpeedRate,t.randomFadeTime||(this.fadeSpeed=0),this.randomFadeTime=t.randomFadeTime,this.update()}},{key:"update",value:function(){this.move(),this.show()}},{key:"hexToRGB",value:function(t){return[(t=parseInt(t.replace("#",""),16))>>16&255,t>>8&255,255&t].join(",")}}]),t}(),M={color:"#df014e",size:30,speed:.65,blur:0,count:25,fadeSpeedRate:.005,differentSize:!0,isGradient:!1,randomFadeTime:!0},R=function(t){Object(y.a)(i,t);var e=Object(x.a)(i);function i(t){var a;return Object(v.a)(this,i),(a=e.call(this,t)).updateFireflies=function(){a.state.firefliesArray.forEach((function(t){t.update()}))},a.draw=function(){var t=a.state.canvasContext,e=a.state.width,i=a.state.height;t.clearRect(0,0,e,i),a.updateFireflies()},a.resizeWindow=function(){var t=window.innerWidth,e=window.innerHeight;a.state.firefliesArray.forEach((function(i){i.updateCanvasSize(t,e)})),a.setState({width:t,height:e})},a.addFireflies=function(t,e){for(var i={canvasContext:a.state.canvasContext,width:a.state.width,height:a.state.height},s=a.state.settings,n=0;n<e;n++)t.push(new k(i,s))},a.removeFireflies=function(t,e){t.splice(t.length-e)},a.paramChangedHandler=function(t){var e=a.state.settings.count-t.count,i=a.state.firefliesArray;e<0&&a.addFireflies(i,Math.abs(e)),e>0&&a.removeFireflies(i,e),i.forEach((function(e){e.updateSettings(t)})),a.setState({firefliesArray:i,settings:t})},a.state={canvas:null,canvasContext:null,firefliesArray:[],settings:Object(z.a)(Object(z.a)({},M),a.props.settings),width:a.props.width,height:a.props.height},a}return Object(w.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=document.getElementById("fireflies-canvas"),i=e.getContext("2d"),a=this.state.width,s=this.state.height;i.fillStyle="rgba(30,30,30,1)",i.fillRect(0,0,a,s),this.setState({canvas:e,canvasContext:i});for(var n={canvasContext:i,width:a,height:s},r=this.state.settings,o=this.state.firefliesArray,h=0;h<r.count;h++)o.push(new k(n,r));this.setState({firefliesArray:o}),this.timerId=setInterval((function(){return t.draw()}),this.props.updateInterval),window.addEventListener("resize",this.resizeWindow)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("canvas",{id:"fireflies-canvas",width:this.state.width,height:this.state.height,style:{WebkitFilter:"blur(".concat(this.state.settings.blur,"px)")}}))}}]),i}(a.Component);R.defaultProps=Object(z.a)(Object(z.a)({},a.Component.defaultProps),{},{width:window.innerWidth,height:window.innerHeight,updateInterval:15,displayParamsChanger:!0,displayFpsStats:!0});var G=R,j=(a.Component,i(55),i(51),i(52),i(53),function(){function t(e,i){Object(v.a)(this,t),this.seed=Math.random()+.4,this.context=e.canvasContext,this.width=e.width,this.height=e.height,this.x=Math.random()*this.width,this.y=Math.random()*this.height,this.speed=i.speed,this.size=i.differentSize?i.size*this.seed:i.size,this.color=i.color,this.rgbColor=this.hexToRGB(this.color),this.isGradient=i.isGradient,this.fadeSpeedRate=i.fadeSpeedRate,this.randomFadeTime=i.randomFadeTime,this.fadeSpeed=0,this.dx=2*Math.random()*(Math.random()<.5?-1:1),this.dy=2*Math.random()*(Math.random()<.5?-1:1)}return Object(w.a)(t,[{key:"move",value:function(){this.x+=this.speed*Math.sin(this.dx),this.y+=this.speed*Math.sin(this.dy),(this.x>this.width||this.x<0)&&(this.dx*=-1),(this.y>this.height||this.y<0)&&(this.dy*=-1)}},{key:"buildGradientStyle",value:function(t){var e=this.context.createRadialGradient(this.x,this.y,0,this.x,this.y,t*t);return e.addColorStop(0,"rgba(".concat(this.rgbColor,",1)")),e.addColorStop(.1,"rgba(".concat(this.rgbColor,",0.3)")),e.addColorStop(1,"rgba(".concat(this.rgbColor,",0)")),e}},{key:"show",value:function(){var t=this.size*Math.abs(Math.cos(this.fadeSpeed));this.context.beginPath(),this.context.arc(this.x,this.y,t,0,2*Math.PI),this.context.closePath(),this.fadeSpeed+=this.fadeSpeedRate*(this.randomFadeTime?this.seed:1),this.context.fillStyle=this.isGradient?this.buildGradientStyle(t):this.color,this.context.fill()}},{key:"updateCanvasSize",value:function(t,e){this.width=t,this.height=e,this.update()}},{key:"updateSettings",value:function(t){this.speed=t.speed,this.size=t.differentSize?t.size*this.seed:t.size,this.color=t.color,this.rgbColor=this.hexToRGB(this.color),this.isGradient=t.isGradient,this.fadeSpeedRate=t.fadeSpeedRate,t.randomFadeTime||(this.fadeSpeed=0),this.randomFadeTime=t.randomFadeTime,this.update()}},{key:"update",value:function(){this.move(),this.show()}},{key:"hexToRGB",value:function(t){return[(t=parseInt(t.replace("#",""),16))>>16&255,t>>8&255,255&t].join(",")}}]),t}()),I={color:"#df014e",size:15,speed:.65,blur:0,count:25,fadeSpeedRate:.005,differentSize:!0,isGradient:!1,randomFadeTime:!0},O=function(t){Object(y.a)(i,t);var e=Object(x.a)(i);function i(t){var a;return Object(v.a)(this,i),(a=e.call(this,t)).updateFireflies=function(){a.state.firefliesArray.forEach((function(t){t.update()}))},a.draw=function(){var t=a.state.canvasContext,e=a.state.width,i=a.state.height;t.clearRect(0,0,e,i),a.updateFireflies()},a.resizeWindow=function(){var t=window.innerWidth,e=window.innerHeight;a.state.firefliesArray.forEach((function(i){i.updateCanvasSize(t,e)})),a.setState({width:t,height:e})},a.addFireflies=function(t,e){for(var i={canvasContext:a.state.canvasContext,width:a.state.width,height:a.state.height},s=a.state.settings,n=0;n<e;n++)t.push(new j(i,s))},a.removeFireflies=function(t,e){t.splice(t.length-e)},a.paramChangedHandler=function(t){var e=a.state.settings.count-t.count,i=a.state.firefliesArray;e<0&&a.addFireflies(i,Math.abs(e)),e>0&&a.removeFireflies(i,e),i.forEach((function(e){e.updateSettings(t)})),a.setState({firefliesArray:i,settings:t})},a.state={canvas:null,canvasContext:null,firefliesArray:[],settings:Object(z.a)(Object(z.a)({},I),a.props.settings),width:a.props.width,height:.9*a.props.height},a}return Object(w.a)(i,[{key:"componentDidMount",value:function(){var t=this,e=document.getElementById("fireflies-canvas"),i=e.getContext("2d"),a=this.state.width,s=this.state.height;i.fillStyle="rgba(30,30,30,1)",i.fillRect(0,0,a,s),this.setState({canvas:e,canvasContext:i});for(var n={canvasContext:i,width:a,height:s},r=this.state.settings,o=this.state.firefliesArray,h=0;h<r.count;h++)o.push(new j(n,r));this.setState({firefliesArray:o}),this.timerId=setInterval((function(){return t.draw()}),this.props.updateInterval),window.addEventListener("resize",this.resizeWindow)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("canvas",{id:"fireflies-canvas",width:this.state.width,height:this.state.height,style:{WebkitFilter:"blur(".concat(this.state.settings.blur,"px)")}}))}}]),i}(a.Component);O.defaultProps=Object(z.a)(Object(z.a)({},a.Component.defaultProps),{},{width:window.innerWidth,height:window.innerHeight,updateInterval:15,displayParamsChanger:!0,displayFpsStats:!0});var T=function(){return s.a.createElement("div",{className:"homepage",style:{color:"white"}},"home")};i(29),i(30),i(31),i(32),i(33),i(34),i(35),i(36),i(37);i(54);var N=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,null,s.a.createElement("div",{className:"header"},s.a.createElement(m,null)),s.a.createElement("div",{className:"sticky-header"},s.a.createElement(m,null)),s.a.createElement("div",{className:"content"},s.a.createElement(g.c,null,s.a.createElement(g.a,{path:"/",exact:!0,component:T}))),s.a.createElement("div",{className:"footer"},"footer")))};r.a.render(s.a.createElement(N,null),document.getElementById("root"))}]),[[38,1,2]]]);
//# sourceMappingURL=main.d0027ddf.chunk.js.map