(this.webpackJsonpdiploma_project=this.webpackJsonpdiploma_project||[]).push([[0],{26:function(e){e.exports=JSON.parse('[{"gameId":1,"picAddress":"gallery/bu.png","active":false,"opened":false},{"gameId":-1,"picAddress":"gallery/bu.png","active":false,"opened":false},{"gameId":2,"picAddress":"gallery/po.png","active":false,"opened":false},{"gameId":-2,"picAddress":"gallery/po.png","active":false,"opened":false},{"gameId":3,"picAddress":"gallery/hanna.png","active":false,"opened":false},{"gameId":-3,"picAddress":"gallery/hanna.png","active":false,"opened":false},{"gameId":4,"picAddress":"gallery/disgust.png","active":false,"opened":false},{"gameId":-4,"picAddress":"gallery/disgust.png","active":false,"opened":false},{"gameId":5,"picAddress":"gallery/remy.png","active":false,"opened":false},{"gameId":-5,"picAddress":"gallery/remy.png","active":false,"opened":false},{"gameId":6,"picAddress":"gallery/donkey.png","active":false,"opened":false},{"gameId":-6,"picAddress":"gallery/donkey.png","active":false,"opened":false},{"gameId":7,"picAddress":"gallery/pumbaa.png","active":false,"opened":false},{"gameId":-7,"picAddress":"gallery/pumbaa.png","active":false,"opened":false},{"gameId":8,"picAddress":"gallery/pussinbuts.png","active":false,"opened":false},{"gameId":-8,"picAddress":"gallery/pussinbuts.png","active":false,"opened":false},{"gameId":9,"picAddress":"gallery/stitch.png","active":false,"opened":false},{"gameId":-9,"picAddress":"gallery/stitch.png","active":false,"opened":false},{"gameId":10,"picAddress":"gallery/shrek.png","active":false,"opened":false},{"gameId":-10,"picAddress":"gallery/shrek.png","active":false,"opened":false},{"gameId":11,"picAddress":"gallery/timon.png","active":false,"opened":false},{"gameId":-11,"picAddress":"gallery/timon.png","active":false,"opened":false},{"gameId":12,"picAddress":"gallery/anger.png","active":false,"opened":false},{"gameId":-12,"picAddress":"gallery/anger.png","active":false,"opened":false}]')},32:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(19),s=a.n(r),d=(a(32),a(9)),i=a(16),o=a(6),l="CREATE_CARDSET",p="SHUFFLE_CARDS",u="ACTIVATE_CARD",j="DEACTIVATE_CARDS",b="UP_SMALL_COUNTER",m="ZERO_SMALL_COUNTER",f="SET_BIG_COUNTER",O="OPEN_CARDS",g="UP_TIMER",v="START_TIMER",y="STOP_TIMER",h="UP_MOVE_COUNTER",x="TEST_ALL_OPENED",I="CHECK_IF_WIN",A="RESET_ALL",C=a(26),E={cardSet:[],smallCounter:0,bigCounter:0,timeCounter:0,movesCounter:0,isWin:!1},S=function(){return Math.floor(24*Math.random())};var w=a(27),_=a(14),T=a.n(_),R=a(15),k=T.a.mark(P),N=T.a.mark(L),W=T.a.mark(M);function P(){var e;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(R.e)((function(e){return e.playWindowReducer.isWin}));case 2:e=t.sent;case 3:if(e){t.next=10;break}return t.next=6,Object(R.b)(1e3);case 6:return t.next=8,Object(R.c)({type:g});case 8:t.next=3;break;case 10:case"end":return t.stop()}}),k)}function L(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(M(v,P,y),"t0",1);case 1:case"end":return e.stop()}}),N)}function M(e,t,a){return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Object(R.g)(e,T.a.mark((function e(){var c,n,r,s=arguments;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c=s.length,n=new Array(c),r=0;r<c;r++)n[r]=s[r];return e.next=3,Object(R.d)({task:R.a.apply(void 0,[t].concat(n)),cancel:Object(R.f)(a)});case 3:case"end":return e.stop()}}),e)})));case 2:case"end":return c.stop()}}),W)}var D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c,F=Object(w.a)(),U=Object(i.d)(Object(i.b)({playWindowReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var a=C;return Object(o.a)(Object(o.a)({},e),{},{cardSet:a});case p:for(var c=e.cardSet,n=0;n<24;n++){var r=S(),s=[c[r],c[n]];c[n]=s[0],c[r]=s[1]}return Object(o.a)(Object(o.a)({},e),{},{cardSet:c});case u:var d=e.cardSet.map((function(e){return e.gameId===t.cardId?Object(o.a)(Object(o.a)({},e),{},{active:t.active=!0}):e}));return Object(o.a)(Object(o.a)({},e),{},{cardSet:d});case j:var i=e.cardSet.map((function(e){return e.opened?e:Object(o.a)(Object(o.a)({},e),{},{active:t.active=!1})}));return Object(o.a)(Object(o.a)({},e),{},{cardSet:i});case O:var v=e.bigCounter,y=e.cardSet;return v===-t.cardId&&(y=e.cardSet.map((function(e){return e.gameId===v||e.gameId===-v?Object(o.a)(Object(o.a)({},e),{},{opened:t.opened=!0}):e}))),Object(o.a)(Object(o.a)({},e),{},{cardSet:y});case x:var w=e.cardSet.map((function(e){return e?Object(o.a)(Object(o.a)({},e),{},{opened:e.opened=!0}):e}));return Object(o.a)(Object(o.a)({},e),{},{cardSet:w});case b:var _=e.smallCounter+1;return Object(o.a)(Object(o.a)({},e),{},{smallCounter:_});case m:return Object(o.a)(Object(o.a)({},e),{},{smallCounter:0});case f:var T=t.cardId;return Object(o.a)(Object(o.a)({},e),{},{bigCounter:T});case g:var R=e.timeCounter+1;return Object(o.a)(Object(o.a)({},e),{},{timeCounter:R});case h:var k=e.movesCounter+1;return Object(o.a)(Object(o.a)({},e),{},{movesCounter:k});case I:var N=e.cardSet.every((function(e){return e.opened}));return Object(o.a)(Object(o.a)({},e),{},{isWin:N});case A:return E;default:return e}}}),D(Object(i.a)(F)));F.run(L);a(37);var H=a(13),V=a(7),B=(a(38),a(2)),J=function(e){var t=e.onclick,a=e.classname,c=e.text;return Object(B.jsxs)("button",{onClick:t,className:a,children:[" ",c]})},G=(a(40),function(){return Object(B.jsxs)("div",{className:"welcomepage",children:[Object(B.jsx)("h2",{children:"Hello, my friend!"}),Object(B.jsx)("p",{children:"Here is the game to check your memory"}),Object(B.jsx)("p",{children:"Open cards and find the pairs"}),Object(B.jsx)("p",{children:"You win, when all of them are opened"}),Object(B.jsx)("h3",{children:"Do your best!"}),Object(B.jsx)(H.b,{to:"/tms-diploma/game",children:Object(B.jsx)(J,{text:"New Game",classname:"button"})})]})}),X=(a(43),a(44),function(e){e.gameId;var t=e.onclick,a=e.cardIsActive,c=void 0!==a&&a,n=e.cardIsOpened,r=void 0!==n&&n,s=e.backgroundImage;return Object(B.jsx)("div",{className:"playCard",onClick:t,style:{backgroundImage:"url(".concat(c||r?s:"gallery/rik.png",")")}})}),Y=(a(45),function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.playWindowReducer.timeCounter})),a=Object(d.c)((function(e){return e.playWindowReducer.movesCounter}));return Object(B.jsxs)("div",{className:"header",children:[Object(B.jsxs)("div",{className:"counters",children:[Object(B.jsxs)("div",{children:["Time: ",t,"s"]}),Object(B.jsxs)("div",{children:["Moves: ",a]})]}),Object(B.jsxs)("div",{className:"buttons",children:[Object(B.jsx)(J,{classname:"button",onclick:function(){e({type:y}),e({type:A}),e({type:l}),e({type:p}),e({type:v})},text:"Restart"}),Object(B.jsx)(H.b,{to:"/tms-diploma/",children:Object(B.jsx)(J,{classname:"button",onclick:function(){e({type:y}),e({type:A})},text:"To First Page"})})]})]})}),K=function(){var e=Object(d.c)((function(e){return e.playWindowReducer.cardSet})),t=Object(d.c)((function(e){return e.playWindowReducer.smallCounter})),a=Object(d.c)((function(e){return e.playWindowReducer.isWin})),n=Object(d.b)(),r=Object(V.e)();Object(c.useEffect)((function(){n({type:y}),n({type:A}),n({type:l}),n({type:p}),n({type:v})}),[n]),Object(c.useEffect)((function(){2===t&&setTimeout((function(){n({type:m}),n({type:j}),n({type:I})}),700)}),[t,e,n]),Object(c.useEffect)((function(){a&&(n({type:y}),r.push("/tms-diploma/win"))}),[a,n,r]);return Object(B.jsxs)("div",{className:"playWindow",children:[Object(B.jsx)(Y,{}),Object(B.jsx)("div",{className:"cardsPane",children:e.map((function(e){return Object(B.jsx)(X,{gameId:e.gameId,backgroundImage:e.picAddress,cardIsActive:e.active,cardIsOpened:e.opened,onclick:function(){var a,c;a=e.gameId,c=e.active,!e.opened&&!c&&t<2&&(n({type:u,cardId:a}),n({type:b}),0===t&&n({type:f,cardId:a}),1===t&&(n({type:O,cardId:a}),n({type:h})))}},e.gameId)}))})]})},Z=(a(46),function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.playWindowReducer.movesCounter})),a=Object(d.c)((function(e){return e.playWindowReducer.timeCounter}));return Object(B.jsx)("div",{children:Object(B.jsxs)("div",{className:"welcomepage",children:[Object(B.jsx)("h2",{children:"Congrats!"}),Object(B.jsxs)("p",{children:["Time: ",a," seconds"]}),Object(B.jsxs)("p",{children:["Moves: ",t]}),Object(B.jsx)("h3",{children:"Win! Win! Win!"}),Object(B.jsxs)("div",{className:"buttons",children:[Object(B.jsx)(H.b,{to:"/tms-diploma/game",children:Object(B.jsx)(J,{className:"button",onclick:function(){e({type:A}),e({type:l}),e({type:p}),e({type:v})},text:"Play Again",classname:"button"})}),Object(B.jsx)(H.b,{to:"/tms-diploma/",children:Object(B.jsx)(J,{classname:"button",text:"To First Page"})})]})]})})});function q(){return Object(B.jsx)("div",{className:"mainWindow",children:Object(B.jsxs)(H.a,{children:[Object(B.jsx)(V.a,{exact:!0,path:"/tms-diploma/",component:G}),Object(B.jsx)(V.a,{exact:!0,path:"/tms-diploma/game/",component:K}),Object(B.jsx)(V.a,{exact:!0,path:"/tms-diploma/win/",component:Z})]})})}var z=function(){return Object(B.jsx)(d.a,{store:U,children:Object(B.jsx)("div",{className:"App",children:Object(B.jsx)(q,{})})})},Q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,49)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};a(47);s.a.render(Object(B.jsx)(n.a.StrictMode,{children:Object(B.jsx)(z,{})}),document.getElementById("root")),Q()}},[[48,1,2]]]);
//# sourceMappingURL=main.2b8131d8.chunk.js.map