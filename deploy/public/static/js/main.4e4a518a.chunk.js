(this.webpackJsonpaplikasipr=this.webpackJsonpaplikasipr||[]).push([[0],{34:function(e,t,a){e.exports=a(53)},39:function(e,t,a){},40:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),o=(a(39),a(40),a(31)),c=a(55),u=a(56),s=a(57),b=a(61),m=a(58),p=a(59),E=a(60),f=a(11),h=Object(f.b)((function(e){return{bebas:e.bebas,bebas1:e.bebas1}}))((function(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],i=a[1];return r.a.createElement("div",null,r.a.createElement(c.a,{color:"light",light:!0,expand:"md",className:"pr-5"},r.a.createElement(u.a,null,r.a.createElement("h4",null,"APLIKASI PARKIR")),r.a.createElement(s.a,{onClick:function(){return i(!l)}}),r.a.createElement(b.a,{isOpen:l,navbar:!0},r.a.createElement(m.a,{className:"ml-auto",navbar:!0},r.a.createElement(p.a,null,r.a.createElement(E.a,null,e.bebas1," Jam "),r.a.createElement(E.a,null,r.a.createElement("h3",null,"Rp.",e.bebas,",00 ")))))))})),v=a(26),k=a(27),M=a(32),d=a(28),y=a(33),w=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(M.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={showindex:0},a.btnMobil=function(){a.props.tarifMobil(0),a.props.lamaParkir(0),a.setState({showindex:1})},a.btnMotor=function(){a.props.tarifMotor(0),a.props.lamaParkir(0),a.setState({showindex:2})},a.byrMobil=function(){var e=a.refs.inputDurasi.value;a.props.tarifMobil(e),a.props.lamaParkir(e),a.refs.inputDurasi.value=""},a.byrMotor=function(){var e=a.refs.inputDurasi.value;a.props.tarifMotor(e),a.props.lamaParkir(e),a.refs.inputDurasi.value=""},a.showparkir=function(){var e=a.state.showindex;return 1===e?(a.refs.parkirawal.innerHTML=null,r.a.createElement("div",null,r.a.createElement("h3",null,"Aplikasi Parkir Mobil"),r.a.createElement("button",{onClick:a.btnMobil,className:"btn btn-outline-primary mr-3"},"Mobil"),r.a.createElement("button",{onClick:a.btnMotor,className:"btn btn-outline-primary ml-3"},"Motor"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{ref:"inputDurasi",className:"form-control mx-auto",style:{width:"15%"},type:"number"}),r.a.createElement("br",null),r.a.createElement("h6",null,a.props.bebas1," Jam"),r.a.createElement("h4",null,"Total Bayar Rp.",a.props.bebas,",00"),r.a.createElement("br",null),r.a.createElement("button",{onClick:a.byrMobil,className:"btn btn-success"},"Bayar"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,"Catatan = 2.000/Jam"))):2===e?(a.refs.parkirawal.innerHTML=null,r.a.createElement("div",null,r.a.createElement("h3",null,"Aplikasi Parkir Motor"),r.a.createElement("button",{onClick:a.btnMobil,className:"btn btn-outline-primary mr-3"},"Mobil"),r.a.createElement("button",{onClick:a.btnMotor,className:"btn btn-outline-primary ml-3"},"Motor"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("input",{ref:"inputDurasi",className:"form-control mx-auto",style:{width:"15%"},type:"number"}),r.a.createElement("br",null),r.a.createElement("h6",null,a.props.bebas1," Jam"),r.a.createElement("h4",null,"Total Bayar Rp.",a.props.bebas,",00"),r.a.createElement("br",null),r.a.createElement("button",{onClick:a.byrMotor,className:"btn btn-success"},"Bayar"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,"Catatan = 1.000/Jam"))):void 0},a}return Object(y.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{ref:"parkirawal"},r.a.createElement("h3",null,"Aplikasi Parkir "),r.a.createElement("button",{onClick:this.btnMobil,className:"btn btn-outline-primary mr-3"},"Mobil"),r.a.createElement("button",{onClick:this.btnMotor,className:"btn btn-outline-primary ml-3"},"Motor")),r.a.createElement("div",null,this.showparkir()))}}]),t}(n.Component),O=Object(f.b)((function(e){return{bebas:e.bebas,bebas1:e.bebas1}}),{tarifMobil:function(e){return{type:"MOBIL",time:e}},tarifMotor:function(e){return{type:"MOTOR",time:e}},lamaParkir:function(e){return{type:"DURASI",time:e}}})(w);var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(O,null))};a(52),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(9),g=a(30),j=Object(C.b)({bebas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOBIL":return 2e3*t.time;case"MOTOR":return 1e3*t.time;default:return e}},bebas1:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DURASI":return t.time;default:return e}}}),A=Object(C.c)(j);i.a.render(r.a.createElement(f.a,{store:A},r.a.createElement(g.a,null,r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.4e4a518a.chunk.js.map