(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n(52)},28:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),o=(n(28),n(4)),l=n(5),u=n(7),s=n(6),d=n(8),p=n(10),m=(n(30),n(22)),f=n(9),h=n(1),b="WRITE_LETTER",v="CHANGE_FOLDER",y="LETTER_FIELD_FILL",w="LETTER_LIST",E="LETTER_SHOWN",j="CURRENT_LETTER",O="TEXT_SHOW",g="SET_UNREAD",k="DRAWER_OPEN",N="SET_DELAY",L="CHECKBOXES_HANDLE",x="SET_SEARCH",C="GROUP_CHECK",S="MENU_TOGGLE",T=function(e,t){return function(n){var a=e.mailList,r=e.active,c=e.checkboxesArray;n({type:E,payload:!1}),n(H(500)),n({type:k,payload:!1});var i=a[r].slice().filter(function(e){return!t.some(function(t){return t.id===e.id})});if("received"===r&&n(F(i)),"deleted"!==r){var o,l=a.deleted.slice();t.forEach(function(e){return e.checked=!1}),l=l.concat(t),n({type:w,payload:Object(h.a)({},a,(o={},Object(f.a)(o,r,i),Object(f.a)(o,"deleted",l),o))}),n({type:O,payload:0})}else n({type:w,payload:Object(h.a)({},a,Object(f.a)({},r,i))}),n({type:O,payload:0});1===t.length&&c[r].some(function(e){return e.id===t[0].id})&&(c[r].splice(c[r].indexOf(t[0]),1),n({type:L,payload:c})),n({type:C,payload:!1})}},R=function(e,t,n,a){return function(r){r({type:y,payload:{to:e,subject:"Re: "+t,id:n,answered:!0}}),r({type:b,payload:a})}},W=function(){return function(e){e({type:b,payload:!1})}},A=function(e,t){return function(n){n({type:y,payload:Object(h.a)({},t,Object(f.a)({},e.target.name,e.target.value))})}},I=function(e,t){return function(n){var a=e.newLetter;if(a.answered){var r=e.mailList.received.map(function(e){return e.id===a.id?e.answered=!0:null});n({type:w,payload:Object(h.a)({},e.mailList,{received:r})})}var c={to:a.to,subject:a.subject,text:a.text},i=Object(h.a)({id:Date.now(),status:!0,checked:!1,from:""},c),o=[].concat(Object(m.a)(e.mailList.sent),[i]),l=Object(h.a)({},e.mailList,{sent:o});n({type:w,payload:Object(h.a)({},e.mailList,{sent:o})}),n(M(e,l,t))}},M=function(e,t,n){return function(a){if(a({type:y,payload:Object(h.a)({},e.newLetter,{to:"",subject:"",id:"",text:""})}),a({type:b,payload:!1}),a({type:E,payload:!1}),!n){var r=e.currentlyShown,c=e.active,i=e.unRead,o=t[c],l=o.findIndex(function(e){return e.id===r.id});l<o.length-1?setTimeout(function(){return a(_(o[l+1],t,i))},500):(a(H(500)),a(D()))}}},_=function(e,t,n){return function(a){var r=e.id,c=t.received.map(function(e){var t=Object(h.a)({},e);return t.id===r&&(t.status=!0),t});a({type:w,payload:Object(h.a)({},t,{received:c})}),a({type:j,payload:e}),a({type:k,payload:!0}),a({type:E,payload:!0}),a({type:y,payload:{to:e.from,subject:"Re: "+e.subject,id:e.id,answered:!0}}),a(H(0)),e.status||a({type:g,payload:n-1})}},D=function(){return function(e){e({type:k,payload:!1})}},F=function(e){return function(t){var n=e.filter(function(e){return!e.status}).length;t({type:g,payload:n})}},H=function(e){return function(t){t({type:N,payload:e})}},J=n(3),X=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.emails,n=t.folders,a=t.active,c=t.unRead,i=n.map(function(t){var n=t.id===a?"active":"regular";return r.a.createElement("li",{key:t.id,onClick:function(){return e.props.changeFolder(t.id)},className:n},r.a.createElement("span",{className:"folder-line"},r.a.createElement("div",{className:"folder-name"},t.name),r.a.createElement("div",{className:"unread-counter"},"received"===t.id&&c>0&&c)))});return r.a.createElement("ul",{className:"folders"},i)}}]),t}(a.Component),U=Object(J.b)(function(e){return{emails:e.mails}},function(e){return{newLetterClose:function(){return e(W())},reverseMessage:function(t,n,a,r){return e(R(t,n,a,r))},changeFolder:function(t){return e((n=t,function(e){e({type:v,payload:n}),e({type:S,payload:!1})}));var n}}})(X),G=(n(36),n(38),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.emails,n=t.newLetter,c=t.mailList,i=t.currentlyShown,o=c.received.some(function(e){return e.id===i.id}),l=""!==i.from?"From":"To",u=null;return"From"===l&&(u=r.a.createElement(a.Fragment,null,r.a.createElement("span",{className:"service-line"},"Answer this letter:"),r.a.createElement("textarea",{name:"text",onChange:function(t){return e.props.fillElement(t,n)},value:n.text,className:"answer-letter"}),r.a.createElement("button",{className:"letter-buttons send-button",onClick:function(){e.props.newLetterSend(e.props.emails,!1)}},"Send"))),r.a.createElement("div",{className:"letter"},r.a.createElement("div",{className:"letter-inner"},r.a.createElement("div",{className:"letter-title"},r.a.createElement("span",{className:"service-line"},l,": "),i.from||i.to,i.answered&&r.a.createElement("div",{className:"back-icon icon-answered"}," ")),r.a.createElement("div",{className:"letter-title"},r.a.createElement("span",{className:"service-line"},"Subject: "),i.subject),r.a.createElement("p",{className:"incoming-letter"},i.text),u,r.a.createElement("button",{className:o?"letter-buttons ignore-button":"letter-buttons ignore-button ignore-only",onClick:function(){e.props.letterScroll(e.props.emails,c,!1)}},"Ignore")))}}]),t}(a.Component)),V=Object(J.b)(function(e){return{emails:e.mails}},function(e){return{fillElement:function(t,n){return e(A(t,n))},newLetterSend:function(t){return e(I(t))},letterScroll:function(t,n,a){return e(M(t,n,a))}}})(G),B=(n(40),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleTouch=function(e,t){t.touches[0].clientX-e>window.innerWidth/3&&n.props.drawerClose()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=window.innerWidth>380?5:0,n=0;return r.a.createElement("div",{className:"drawer-box",onTouchStart:function(e){n=e.touches[0].clientX},onTouchMove:function(t){return e.handleTouch(n,t)}},r.a.createElement("div",{className:"drawer-box-header"},r.a.createElement("div",{onClick:this.props.drawerClose,className:"drawer-box-close"},"\u2716")),r.a.createElement("div",{className:"drawer-area"},r.a.createElement(p.a,{native:!0,items:this.props.emails.letterIsShown,from:{opacity:1,position:"absolute",left:t+"vw",top:"100vh"},enter:{opacity:1,position:"absolute",left:t+"vw",top:"5vh"},leave:{opacity:0,position:"absolute",left:t+"vw",top:"-100vh"},config:{duration:500}},function(e){return e&&function(e){return r.a.createElement(p.b.div,{style:e},r.a.createElement(V,null))}})))}}]),t}(a.Component)),K=Object(J.b)(function(e){return{emails:e.mails}},function(e){return{drawerClose:function(){return e(D())}}})(B),P=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).handleTouch=function(e,t,a,r,c){c.touches[0].clientX-e>window.innerWidth/3&&n.props.deleteLetter(n.props.emails,[t]),e-c.touches[0].clientX>window.innerWidth/3&&n.props.readLetter(t,a,r)},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.setUnRead(this.props.emails.mailList.received)}},{key:"render",value:function(){var e=this,t=this.props.emails,n=t.mailList,c=t.active,i=t.drawerIsOpen,o=t.textShow,l=t.unRead,u=t.checkboxesArray,s=t.search,d=t.groupCheck,m=0,f=null;if(n[c].length>0){var h=new Set(n[c].filter(function(e){return e.from.includes(s)}));n[c].filter(function(e){return e.subject.includes(s)}).forEach(function(e){return h.add(e)}),n[c].filter(function(e){return e.to.includes(s)}).forEach(function(e){return h.add(e)}),f=Array.from(h).map(function(t){var a=t.from||t.to;a=a+" - "+t.subject,window.innerWidth<380&&a.length>33&&(a=a.substring(0,31)+"...");var i=a.indexOf(s);return r.a.createElement("li",{key:t.id},r.a.createElement("div",{className:"letter-wrapper"},window.innerWidth>380&&r.a.createElement("input",{onChange:function(a){return e.props.handleCheckboxes(t,u,n,c,d,a)},checked:t.checked,className:"letter-checkbox",type:"checkbox"}),r.a.createElement("div",{className:"table-line"},r.a.createElement("div",{className:t.status?null:"active-letter"},r.a.createElement("div",{className:"letter-line",onTouchStart:function(e){m=e.touches[0].clientX},onTouchMove:function(a){return e.handleTouch(m,t,n,l,a)},onMouseEnter:window.innerWidth>380?function(){return e.props.letterTextShow(t.id)}:null,onMouseLeave:window.innerWidth>380?function(){return e.props.letterTextShow(0)}:null},window.innerWidth>380&&r.a.createElement("div",{onClick:function(){return e.props.deleteLetter(e.props.emails,[t])},className:"delete-letter-button"}),window.innerWidth>380&&"received"===c&&r.a.createElement("div",{className:t.answered?"back-icon icon-answered":"back-icon"}),r.a.createElement("span",{className:"date"},new Date(t.id).toString().split(" ").splice(1,3).join("-")),window.innerWidth>380?r.a.createElement("span",{onClick:function(){return e.props.readLetter(t,n,l)},className:o===t.id?"letter-name name-blurred":"letter-name"},i>0&&r.a.createElement("span",null,a.substring(0,i)),r.a.createElement("span",{className:"marked"},a.substring(i,i+s.length)),r.a.createElement("span",null,a.substring(i+s.length))):r.a.createElement("span",{onClick:function(){return e.props.readLetter(t,n,l)},className:"letter-name"},a),o===t.id&&r.a.createElement("span",{className:"letter-text"},t.text))))))})}else f=r.a.createElement("li",null,r.a.createElement("div",{className:"no-letters"},"No letters in this folder so far"));var b=window.innerWidth>380?50:0;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"mail-list"},window.innerWidth>380&&n[c].length>0&&r.a.createElement("button",{onClick:function(){return e.props.deleteLetterGroup(e.props.emails,u)},className:u[c].length>0?"delete-chosen chosen-active":"delete-chosen"},"Delete"),window.innerWidth>380&&n[c].length>0&&r.a.createElement("input",{onChange:function(){return e.props.groupCheck(n,c,u,d)},checked:d,className:"letter-checkbox group-checkbox",type:"checkbox"}),r.a.createElement("ul",null,f)),r.a.createElement(p.a,{native:!0,items:i,from:{position:"absolute",left:"100vw",top:"0vh"},enter:{position:"absolute",left:b+"vw",top:"0vh"},leave:{position:"absolute",left:"100vw",top:"0vh"},config:{duration:500,delay:this.props.emails.delay}},function(e){return e&&function(e){return r.a.createElement(p.b.div,{style:e},r.a.createElement(K,null))}}))}}]),t}(a.Component),Y=Object(J.b)(function(e){return{emails:e.mails}},function(e){return{deleteLetter:function(t,n){return e(T(t,n))},reverseMessage:function(t,n,a,r){return e(R(t,n,a,r))},readLetter:function(t,n,a){return e(_(t,n,a))},letterTextShow:function(t){return e(function(e){return function(t){t({type:O,payload:e})}}(t))},setUnRead:function(t){return e(F(t))},handleCheckboxes:function(t,n,a,r,c,i){return e(function(e,t,n,a,r,c){return function(r){var i=e.id,o=n[a].map(function(e){var n=Object(h.a)({},e),r=t[a];return n.id===i&&(n.checked=!e.checked,c.target.checked?r.push(e):r.splice(r.findIndex(function(t){return t.id===e.id}),1)),n});console.log(t[a]),t[a].length<n[a].length&&r({type:C,payload:!1}),r({type:w,payload:Object(h.a)({},n,Object(f.a)({},a,o))}),r({type:L,payload:t})}}(t,n,a,r,0,i))},deleteLetterGroup:function(t,n){return e(function(e){return function(t){var n=e.checkboxesArray,a=e.active;t(T(e,n[a])),t({type:L,payload:Object(h.a)({},n,Object(f.a)({},a,[]))})}}(t))},groupCheck:function(t,n,a,r){return e(function(e,t,n,a){return function(r){var c=e[t].map(function(e){var r=Object(h.a)({},e);return r.checked?r.checked&&a&&(r.checked=!1,n[t].splice(n[t].findIndex(function(t){return t.id===e.id}),1)):(r.checked=!0,n[t].push(e)),r});r({type:w,payload:Object(h.a)({},e,Object(f.a)({},t,c))}),r({type:L,payload:n}),r({type:C,payload:!a})}}(t,n,a,r))}}})(P),q=(n(42),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.emails.newLetter,n=t.subject?t.subject:void 0,a=t.to?t.to:void 0;return r.a.createElement("div",{className:"new-letter"},r.a.createElement("div",{onClick:this.props.newLetterClose,className:"new-letter-header"},r.a.createElement("div",{className:"new-letter-header-message"},"New message"),r.a.createElement("div",{className:"new-letter-close"},"\u2716")),r.a.createElement("div",{className:"new-letter-form"},r.a.createElement("label",null,r.a.createElement("div",{className:"new-letter-form-align"},"Address"),r.a.createElement("input",{onChange:function(n){return e.props.fillElement(n,t)},type:"text",name:"to",defaultValue:a})),r.a.createElement("label",null,r.a.createElement("div",{className:"new-letter-form-align"},"Theme"),r.a.createElement("input",{type:"text",onChange:function(n){return e.props.fillElement(n,t)},name:"subject",defaultValue:n})),r.a.createElement("textarea",{onChange:function(n){return e.props.fillElement(n,t)},name:"text",rows:"20",cols:"50"}),r.a.createElement("button",{onClick:function(){return e.props.newLetterSend(e.props.emails,!0)}},"Send")))}}]),t}(a.Component)),z=Object(J.b)(function(e){return{emails:e.mails}},function(e){return{newLetterClose:function(){return e(W())},fillElement:function(t,n){return e(A(t,n))},newLetterSend:function(t,n){return e(I(t,n))}}})(q),Q=(n(44),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("input",{className:"search-input",onChange:function(t){return e.props.handleSearch(t)},value:this.props.emails.search,placeholder:"Find letter"})}}]),t}(a.Component)),Z=Object(J.b)(function(e){return{emails:e.mails}},function(e){return{handleSearch:function(t){return e(function(e){return function(t){t({type:x,payload:e.target.value})}}(t))}}})(Q),$=(n(46),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={buttonClicked:!1},n.buttonToggle=function(){n.setState({buttonClicked:!0})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t="",n="",a="";return this.state.buttonClicked?this.props.open?(t="hamburger first-in",n="hamburger second-in",a="hamburger third-in"):(t="hamburger first-out",n="hamburger second-out",a="hamburger third-out"):(t="hamburger first-start",n="hamburger",a="hamburger third-start"),r.a.createElement("div",{onClick:function(){e.props.topMenuToggle(e.props.open),e.buttonToggle()},className:"hamburger-button"},r.a.createElement("div",{className:t}),r.a.createElement("div",{className:n}),r.a.createElement("div",{className:a}))}}]),t}(a.Component)),ee=Object(J.b)(function(e){return{open:e.mails.topMenuOpen}},function(e){return{topMenuToggle:function(t){return e(function(e){return function(t){t({type:S,payload:!e})}}(t))}}})($),te=(n(48),n(50),Object(J.b)(function(e){return{open:e.mails.topMenuOpen}},null)(function(e){var t=e.open?"drawer open":"drawer";return r.a.createElement("div",{className:t},r.a.createElement(U,null))})),ne=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.emails.active.substring(0,1).toLocaleUpperCase()+this.props.emails.active.substring(1);return r.a.createElement(a.Fragment,null,window.innerWidth<=380&&r.a.createElement("div",{className:"header"},t),r.a.createElement(ee,null),r.a.createElement(te,null),r.a.createElement("button",{onClick:function(){return e.props.writeLetter(e.props.emails.newLetter,!0)},className:"new-message-button"},window.innerWidth>380?"New letter":"+"),r.a.createElement(p.a,{native:!0,items:this.props.emails.writingLetter,from:{opacity:1,position:"absolute",left:"0vw",top:"0vh"},enter:{opacity:1,position:"absolute",left:"0vw",top:"15vh"},leave:{opacity:0,position:"absolute",left:"0vw",top:"0vh"}},function(e){return e&&function(e){return r.a.createElement(p.b.div,{style:e},r.a.createElement(z,null))}}),r.a.createElement("div",{className:"main-region"},window.innerWidth>380&&r.a.createElement(U,null),r.a.createElement("div",{className:"list-wrapper"},window.innerWidth>380&&r.a.createElement(Z,null),r.a.createElement(Y,null))))}}]),t}(a.Component),ae=Object(J.b)(function(e){return{emails:e.mails}},function(e){return{writeLetter:function(t){return e(function(e){return function(t){t({type:b,payload:!0}),t({type:y,payload:Object(h.a)({},e,{to:"",subject:"",id:"",text:""})})}}(t))}}})(ne),re=n(11),ce={active:"received",mailList:{received:[{id:15133752e5,status:!1,answered:!1,checked:!1,from:"admin@reactjs.org",to:"",subject:"Try React and send us reply!",text:"React - JavaScript-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432.React \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f Facebook, Instagram \u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e\u043c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u0438 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0438\u0439. React \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0445 \u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u0415\u0433\u043e \u0446\u0435\u043b\u044c \u2014 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u044b\u0441\u043e\u043a\u0443\u044e \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c, \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u0443 \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c. \u0412 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432 React\u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430\u043c\u0438, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a Redux."},{id:1521324e6,status:!1,answered:!1,checked:!1,from:"admin@vuejs.org",to:"",subject:"Try Vue!",text:"Vue.js \u2014 JavaScript-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432. \u041b\u0435\u0433\u043a\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u044b \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0434\u0440\u0443\u0433\u0438\u0445 JavaScript-\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a. \u041c\u043e\u0436\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0432\u0435\u0431-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432 \u0440\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u0442\u0438\u043b\u0435."},{id:14699988e5,status:!1,answered:!1,checked:!1,from:"admin@angularjs.org",to:"",subject:"Try Angular!",text:"AngularJS \u2014 JavaScript-\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a \u0441 \u043e\u0442\u043a\u0440\u044b\u0442\u044b\u043c \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c. \u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0434\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u0415\u0433\u043e \u0446\u0435\u043b\u044c \u2014 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 MVC-\u0448\u0430\u0431\u043b\u043e\u043d\u0430 \u0430 \u0442\u0430\u043a\u0436\u0435 \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438. \u0424\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0441 HTML, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u043c \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0430\u043c\u0438, \u0438 \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0432\u043e\u0434 \u0438\u043b\u0438 \u0432\u044b\u0432\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0441 \u043c\u043e\u0434\u0435\u043b\u044c\u044e, \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0435\u0439 \u0441\u043e\u0431\u043e\u0439 \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 JavaScript. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u044e\u0442\u0441\u044f \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0438\u043b\u0438 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u044e\u0442\u0441\u044f \u0438\u0437 \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0438\u043b\u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 JSON-\u0434\u0430\u043d\u043d\u044b\u0445."}],sent:[{id:15408504e5,status:!0,answered:!1,checked:!1,from:"",to:"friend@ukr.net",subject:"Hello my friend",text:"A text (literary theory) is any object that can be read, including: Documents: Religious text, a writing that a religious tradition considers to be sacred; Textbook"},{id:15449112e5,status:!0,answered:!1,checked:!1,from:"",to:"some@bigmir.net",subject:"Work proposition",text:"\u0424\u0443\u043d\u043a\u0446\u0456\u044f TEXT \u0434\u0430\u0454 \u0437\u043c\u043e\u0433\u0443 \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u0441\u043f\u043e\u0441\u0456\u0431 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0447\u0438\u0441\u043b\u0430, \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u0432\u0430\u0432\u0448\u0438 \u0434\u043e \u043d\u044c\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0437 \u043a\u043e\u0434\u0430\u043c\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u0456\u0432. \u0426\u0435 \u043a\u043e\u0440\u0438\u0441\u043d\u043e, \u043a\u043e\u043b\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e "}],deleted:[]},writingLetter:!1,folders:[{name:"Inbox",id:"received"},{name:"Outbox",id:"sent"},{name:"Deleted",id:"deleted"}],newLetter:{to:"",subject:"",text:"",id:"",answered:!1},letterIsShown:!1,drawerIsOpen:!1,currentlyShown:{},textShow:0,unRead:0,delay:0,checkboxesArray:{received:[],sent:[],deleted:[]},search:"",groupCheck:!1,topMenuOpen:!1};var ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(h.a)({},e,{writingLetter:t.payload});case v:return Object(h.a)({},e,{active:t.payload});case y:return Object(h.a)({},e,{newLetter:t.payload});case k:return Object(h.a)({},e,{drawerIsOpen:t.payload});case O:return Object(h.a)({},e,{textShow:t.payload});case g:return Object(h.a)({},e,{unRead:t.payload});case w:return Object(h.a)({},e,{mailList:t.payload});case E:return Object(h.a)({},e,{letterIsShown:t.payload});case j:return Object(h.a)({},e,{currentlyShown:t.payload});case N:return Object(h.a)({},e,{delay:t.payload});case L:return Object(h.a)({},e,{checkboxesArray:t.payload});case x:return Object(h.a)({},e,{search:t.payload});case C:return Object(h.a)({},e,{groupCheck:t.payload});case S:return Object(h.a)({},e,{topMenuOpen:t.payload});default:return Object(h.a)({},e)}},oe=Object(re.c)({mails:ie}),le=[n(21).a],ue=Object(re.e)(oe,Object(re.d)(re.a.apply(void 0,le)));i.a.render(r.a.createElement(J.a,{store:ue},r.a.createElement(ae,null)),document.getElementById("root"))}},[[23,2,1]]]);
//# sourceMappingURL=main.3d462a92.chunk.js.map