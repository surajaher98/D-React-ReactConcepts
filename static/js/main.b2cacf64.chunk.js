(this.webpackJsonpnitor=this.webpackJsonpnitor||[]).push([[0],{193:function(e,t,a){},194:function(e,t,a){},195:function(e,t,a){},199:function(e,t,a){},203:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),i=a(15),s=a.n(i),o=(a(193),a(7)),l=(a(194),a(20)),d=(a(195),a(85)),u=a(11),j=a(299),h=a(297),b=a(70),p=a(63),m=a(168),O=a(116),f=a(71),g=a(146),v=a(147),x=a.n(v),y=a(107),k=a.n(y),N=a(110),w=a.n(N),C=a(108),S=a.n(C),T=a(109),P=a.n(T),L=a(148),D=a.n(L),B=a(46),M=a(320),U=a(318);function I(e){return Object(n.jsx)(U.a,Object(B.a)({elevation:6,variant:"filled"},e))}var A=Object(d.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),R=Object(r.createContext)(),F=function(e){var t=e.children,a=Object(r.useState)({id:"",firstName:"",lastName:""}),i=Object(o.a)(a,2),s=i[0],l=i[1],d=Object(r.useState)(""),u=Object(o.a)(d,2),j=u[0],h=u[1],b=Object(r.useState)([{id:1,firstName:"Vinay",lastName:"Revar",userName:"vinay@123",password:"123"},{id:2,firstName:"Roshan",lastName:"Shinde",userName:"roshan@123",password:"123"},{id:3,firstName:"Akash",lastName:"Kalewar",userName:"akash@123",password:"123"},{id:4,firstName:"Ajay",lastName:"Shelar",userName:"ajay@123",password:"123"},{id:5,firstName:"Test",lastName:"Test",userName:"abc@",password:"123"}]),p=Object(o.a)(b,2),m=p[0],O=p[1],f=A(),g=c.a.useState(!1),v=Object(o.a)(g,2),x=v[0],y=v[1],k=Object(r.useState)(!1),N=Object(o.a)(k,2),w=N[0],C=N[1],S=function(e,t){"clickaway"!==t&&y(!1)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:f.root,children:Object(n.jsx)(M.a,{open:x,autoHideDuration:2e4,onClose:S,children:Object(n.jsx)(I,{onClose:S,severity:w?"success":"error",children:j})})}),Object(n.jsx)(R.Provider,{value:{loginUserData:s,setloginUserData:l,users:m,addUser:O,handleClick:function(e,t){C(e),h(t),y(!0)},handleClose:S},children:t})]})},V=a(62),_=a(14),z=(a(199),a(167)),E=a(294),q=a(78),J=a(160),W=a(27),H=a(316),Q=a(86),G=a(119),K=a(120);a(200);function X(e){return Object(n.jsx)(U.a,Object(B.a)({elevation:6,variant:"filled"},e))}var Y=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"40ch"}},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),Z=function(){var e=Y(),t=Object(r.useState)({value:"",error:{}}),a=Object(o.a)(t,2),i=a[0],s=a[1],l=Object(r.useState)({value:"",error:{}}),d=Object(o.a)(l,2),u=d[0],j=d[1],h=Object(r.useState)({value:"",error:{}}),b=Object(o.a)(h,2),p=b[0],m=b[1],O=Object(r.useState)({value:"",error:{}}),f=Object(o.a)(O,2),g=f[0],v=f[1],x=Object(r.useState)(!1),y=Object(o.a)(x,2),k=y[0],N=y[1],w=c.a.useState(new Date),C=Object(o.a)(w,2),S=C[0],T=C[1],P=c.a.useState({age:"",name:""}),L=Object(o.a)(P,2),D=L[0],B=L[1],M=Object(r.useState)([{code:"maha",description:"Mahatashtra"},{code:"up",description:"Uttar Predesh"},{code:"mp",description:"Madhya Pradesh"},{code:"kar",description:"Karnataka"},{code:"ban",description:"Banglore"}]),U=Object(o.a)(M,2),I=U[0],A=(U[1],Object(r.useContext)(R)),F=A.users,V=A.addUser,Z=function(){var e={},t={},a=!0;return!i.value.length>0&&(e.require="first name is required",a=!1),i.value.length<2&&(e.len="first name should be greater than 2 characters",a=!1),!u.value.length>0&&(t.require="last name is required",a=!1),u.value.includes(i.value)&&(t.require="last name should not containe first name",a=!1),s({value:i.value,error:e}),j({value:u.value,error:t}),a},$=function(e){var t=e.target,a=t.id,n=t.value;switch(a){case"fname":s({value:n,error:i.error});break;case"lname":j({value:n,error:u.error});break;case"userName":m({value:n,error:p.error});break;case"password":v({value:n,error:g.error})}},ee=function(e){return Object(n.jsx)("div",{children:Object.keys(e).map((function(t){return Object(n.jsx)(X,{severity:"error",children:e[t]},e[t])}))})};return Object(n.jsx)("div",{className:"signupSection",children:Object(n.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)(z.a,{className:"inputField",label:"First Name",id:"fname",value:i.value,onChange:function(e){return $(e)},variant:"outlined"}),ee(i.error),Object(n.jsx)(z.a,{className:"inputField",label:"Last Name",id:"lname",value:u.value,onChange:function(e){return $(e)},variant:"outlined"}),ee(u.error),Object(n.jsx)(z.a,{className:"inputField",label:"User Name",id:"userName",value:p.value,onChange:function(e){return $(e)},variant:"outlined"}),Object(n.jsx)(z.a,{className:"inputField",label:"Password",id:"password",value:g.value,onChange:function(e){return $(e)},variant:"outlined"}),Object(n.jsx)(W.a,{utils:J.a,children:Object(n.jsx)(E.a,{container:!0,justify:"space-around",children:Object(n.jsx)(H.a,{margin:"normal",id:"date-picker-dialog",label:"Select Date of Birth",format:"dd-MM-yyyy",value:S,autoOk:!0,onClick:function(){N(!0)},onKeyDown:function(e){!function(e){e.preventDefault()}(e)},open:k,onChange:function(e){T(e),N(!1)},allowKeyboardControl:!1,KeyboardButtonProps:{"aria-label":"change date"}})})}),Object(n.jsxs)(Q.a,{variant:"outlined",className:e.formControl,children:[Object(n.jsx)(K.a,{htmlFor:"outlined-age-native-simple",children:"State"}),Object(n.jsx)(G.a,{native:!0,value:D.code,onChange:function(e){B({code:e.target.value})},label:"State",inputProps:{name:"State",id:"outlined-age-native-simple"},children:I.map((function(e){return Object(n.jsx)("option",{value:e.code,children:e.description},e.code)}))})]}),Object(n.jsx)(q.a,{variant:"contained",color:"primary",onClick:function(){if(Z()){var e={id:Math.floor(900*Math.random()+100),firstName:i.value,lastName:u.value,userName:p.value,passwor:g.value};V([].concat(Object(_.a)(F),[e]))}},children:"Create"})]})})},$=Object(d.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(u.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(u.c)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(l.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(l.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function ee(e){var t=Object(r.useContext)(R).loginUserData,a=$(),i=c.a.useState(null),s=Object(o.a)(i,2),l=s[0],d=s[1],u=c.a.useState(null),v=Object(o.a)(u,2),y=v[0],N=v[1],C=Boolean(l),T=Boolean(y),L=function(e){d(e.currentTarget)},B=function(){N(null)},M=function(){d(null),B()},U="primary-search-account-menu",I=Object(n.jsxs)(g.a,{anchorEl:l,anchorOrigin:{vertical:"top",horizontal:"right"},id:U,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:C,onClose:M,children:[Object(n.jsx)(f.a,{onClick:M,children:"Profile"}),Object(n.jsx)(f.a,{onClick:M,children:"My account"})]}),A="primary-search-account-menu-mobile",F=Object(n.jsxs)(g.a,{anchorEl:y,anchorOrigin:{vertical:"top",horizontal:"right"},id:A,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:T,onClose:B,children:[Object(n.jsxs)(f.a,{children:[Object(n.jsx)(b.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(n.jsx)(O.a,{badgeContent:4,color:"secondary",children:Object(n.jsx)(S.a,{})})}),Object(n.jsx)("p",{children:"Messages"})]}),Object(n.jsxs)(f.a,{children:[Object(n.jsx)(b.a,{"aria-label":"show 11 new notifications",color:"inherit",children:Object(n.jsx)(O.a,{badgeContent:11,color:"secondary",children:Object(n.jsx)(P.a,{})})}),Object(n.jsx)("p",{children:"Notifications"})]}),Object(n.jsxs)(f.a,{onClick:L,children:[Object(n.jsx)(b.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(n.jsx)(w.a,{})}),Object(n.jsx)("p",{children:"Profile"})]})]});return Object(n.jsx)("div",{className:"headerSection",children:Object(n.jsxs)("div",{className:a.grow,children:[Object(n.jsx)(j.a,{position:"static",children:Object(n.jsxs)(h.a,{children:[Object(n.jsx)(b.a,{edge:"start",className:a.menuButton,color:"inherit","aria-label":"open drawer",children:Object(n.jsx)(x.a,{})}),Object(n.jsx)(p.a,{className:a.title,variant:"h6",noWrap:!0,children:"CRUD"}),Object(n.jsxs)("div",{className:a.search,children:[Object(n.jsx)("div",{className:a.searchIcon,children:Object(n.jsx)(k.a,{})}),Object(n.jsx)(m.a,{placeholder:"Search\u2026",classes:{root:a.inputRoot,input:a.inputInput},value:e.searchValue,inputProps:{"aria-label":"search"},onChange:function(t){return e.searchHandler(t.target.value)}})]}),Object(n.jsx)("div",{className:a.grow}),Object(n.jsx)("div",{children:Object(n.jsxs)(p.a,{className:a.root,children:[Object(n.jsx)(V.b,{to:"/signup",children:"Signup"}),Object(n.jsx)(V.b,{to:"/login",children:"Login"}),Object(n.jsx)(V.b,{to:"/viewUsers",children:"View"}),Object(n.jsx)(V.b,{to:"/sportify",children:"Sportify"})]})}),Object(n.jsxs)("div",{className:a.sectionDesktop,children:[Object(n.jsx)(b.a,{"aria-label":"show 4 new mails",color:"inherit",children:Object(n.jsx)(O.a,{badgeContent:4,color:"secondary",children:Object(n.jsx)(S.a,{})})}),Object(n.jsx)(b.a,{"aria-label":"show 17 new notifications",color:"inherit",children:Object(n.jsx)(O.a,{badgeContent:17,color:"secondary",children:Object(n.jsx)(P.a,{})})}),Object(n.jsxs)("div",{className:"userNameText",children:[t.firstName," ",t.lastName]}),Object(n.jsx)(b.a,{edge:"end","aria-label":"account of current user","aria-controls":U,"aria-haspopup":"true",onClick:L,color:"inherit",children:Object(n.jsx)(w.a,{})})]}),Object(n.jsx)("div",{className:a.sectionMobile,children:Object(n.jsx)(b.a,{"aria-label":"show more","aria-controls":A,"aria-haspopup":"true",onClick:function(e){N(e.currentTarget)},color:"inherit",children:Object(n.jsx)(D.a,{})})})]})}),F,I]})})}a(203);var te=a(38),ae=a.n(te),ne=Object(d.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"40ch"}}}}));var re=function(){var e=ne(),t=Object(r.useState)({UserName:"",Password:""}),a=Object(o.a)(t,2),c=a[0],i=a[1],s=Object(r.useState)({}),l=Object(o.a)(s,2),d=l[0],u=l[1],j=Object(r.useState)({}),h=Object(o.a)(j,2),b=h[0],p=h[1],m=Object(r.useContext)(R),O=(m.loginUserData,m.setloginUserData),f=m.users,g=(m.addUser,m.handleClick),v=(m.handleClose,function(e){"UserName"===e.target.id&&i(Object(B.a)(Object(B.a)({},c),{},{UserName:e.target.value})),"Password"===e.target.id&&i(Object(B.a)(Object(B.a)({},c),{},{Password:e.target.value}))});return Object(n.jsx)("div",{className:"border",children:Object(n.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(n.jsx)(z.a,{id:"UserName",label:"UserName",variant:"outlined",value:c.UserName,onChange:v}),Object.keys(d).map((function(e){return Object(n.jsx)(U.a,{severity:"error",className:"validationError",children:d[e]},d[e])})),Object(n.jsx)("br",{}),Object(n.jsx)(z.a,{id:"Password",label:"Password",variant:"outlined",value:c.Password,onChange:v}),Object.keys(b).map((function(e){return Object(n.jsx)(U.a,{severity:"error",className:"validationError",children:b[e]},b[e])})),Object(n.jsx)("br",{}),Object(n.jsx)(q.a,{variant:"contained",className:"loginbtn",color:"primary",onClick:function(){if(function(){var e={},t={},a=!0;return c.UserName||(e.required="Username is required",a=!1),(c.UserName.trim().length<2||c.UserName.trim().length>5)&&(e.LengthError="Username should be between length 2 and 5 characters",a=!1),c.UserName.trim().includes("@")||(e.atTheRateError="Username should be contain @",a=!1),c.Password||(t.required="Password is required",a=!1),u(e),p(t),a}()){var e=ae.a.find(f,(function(e){if(e.userName==c.UserName&&e.password==c.Password)return!0}));void 0!=e?(O({id:e.id,firstName:e.firstName,lastName:e.lastName}),localStorage.setItem("currentUser",JSON.stringify(e)),g(!0,"Success")):g(!1,"Authentication failed Please try again")}},children:"Login"})]})})},ce=function(e){var t=e.location;return Object(n.jsx)("div",{children:Object(n.jsxs)("h2",{children:["Page not found for ",Object(n.jsx)("code",{children:t.pathname})]})})},ie=a(22),se=a(315),oe=a(55),le=a(69),de=a(76),ue=a(75),je=function(e){Object(de.a)(a,e);var t=Object(ue.a)(a);function a(e){var n;return Object(oe.a)(this,a),(n=t.call(this,e)).state={hasError:!1},n}return Object(le.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(n.jsx)("h1",{children:"Something went wrong."}):this.props.children}}]),a}(c.a.Component),he=a(5),be=a(304),pe=a(305),me=a(302),Oe=a(303),fe=a(300),ge=a(242),ve=a(301),xe=a(322),ye=a(84),ke=a(166),Ne=a(117),we=a(150),Ce=a.n(we);function Se(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function Te(e,t){return"desc"===e?function(e,a){return Se(e,a,t)}:function(e,a){return-Se(e,a,t)}}function Pe(e,t){var a=e.map((function(e,t){return[e,t]}));return a.sort((function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]})),a.map((function(e){return e[0]}))}var Le=[{id:"id",numeric:!0,disablePadding:!0,label:"Id"},{id:"firstName",numeric:!1,disablePadding:!1,label:"First Name"},{id:"lastName",numeric:!1,disablePadding:!1,label:"Last Name"},{id:"userName",numeric:!1,disablePadding:!1,label:"User Name"},{id:"password",numeric:!1,disablePadding:!1,label:"Password"}];function De(e){var t=e.classes,a=e.onSelectAllClick,r=e.order,c=e.orderBy,i=e.numSelected,s=e.rowCount,o=e.onRequestSort;return Object(n.jsx)(fe.a,{children:Object(n.jsxs)(ve.a,{children:[Object(n.jsx)(me.a,{padding:"checkbox",children:Object(n.jsx)(ke.a,{indeterminate:i>0&&i<s,checked:s>0&&i===s,onChange:a,inputProps:{"aria-label":"select all desserts"}})}),Le.map((function(e){return Object(n.jsx)(me.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:c===e.id&&r,children:Object(n.jsxs)(xe.a,{active:c===e.id,direction:c===e.id?r:"asc",onClick:(a=e.id,function(e){o(e,a)}),children:[e.label,c===e.id?Object(n.jsx)("span",{className:t.visuallyHidden,children:"desc"===r?"sorted descending":"sorted ascending"}):null]})},e.id);var a}))]})})}var Be=Object(d.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(u.e)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),Me=function(e){var t=Be(),a=e.numSelected;return Object(n.jsxs)(h.a,{className:Object(he.a)(t.root,Object(l.a)({},t.highlight,a>0)),children:[a>0?Object(n.jsxs)(p.a,{className:t.title,color:"inherit",variant:"subtitle1",component:"div",children:[a," selected"]}):Object(n.jsx)(p.a,{className:t.title,variant:"h6",id:"tableTitle",component:"div",children:"Users"}),a>0&&Object(n.jsx)(Ne.a,{title:"Delete",children:Object(n.jsx)(b.a,{"aria-label":"delete",children:Object(n.jsx)(Ce.a,{})})})]})},Ue=Object(d.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function Ie(e){var t=Object(r.useContext)(R),a=t.users,i=(t.addUser,c.a.useState(a)),s=Object(o.a)(i,2),l=s[0],d=s[1],u=Ue(),j=c.a.useState("asc"),h=Object(o.a)(j,2),b=h[0],p=h[1],m=c.a.useState("calories"),O=Object(o.a)(m,2),f=O[0],g=O[1],v=c.a.useState([]),x=Object(o.a)(v,2),y=x[0],k=x[1],N=c.a.useState(0),w=Object(o.a)(N,2),C=w[0],S=w[1],T=c.a.useState(10),P=Object(o.a)(T,2),L=P[0],D=P[1];c.a.useEffect((function(){e.searchValue?B(e.searchValue):d(a)}));var B=function(t){var a=ae.a.filter(l,(function(t){if(t.firstName.trim().toLowerCase().includes(e.searchValue.trim().toLowerCase())||t.lastName.trim().toLowerCase().includes(e.searchValue.trim().toLowerCase())||t.userName.trim().toLowerCase().includes(e.searchValue.trim().toLowerCase()))return!0}));d(a)},M=L-Math.min(L,l.length-C*L);return Object(n.jsx)("div",{className:u.root,children:Object(n.jsxs)(ye.a,{className:u.paper,children:[Object(n.jsx)(Me,{numSelected:y.length}),Object(n.jsx)(Oe.a,{children:Object(n.jsxs)(be.a,{className:u.table,"aria-labelledby":"tableTitle",size:"medium","aria-label":"enhanced table",children:[Object(n.jsx)(De,{classes:u,numSelected:y.length,order:b,orderBy:f,onSelectAllClick:function(e){if(e.target.checked){var t=l.map((function(e){return e.name}));k(t)}else k([])},onRequestSort:function(e,t){p(f===t&&"asc"===b?"desc":"asc"),g(t)},rowCount:l.length}),Object(n.jsxs)(pe.a,{children:[Pe(l,Te(b,f)).slice(C*L,C*L+L).map((function(e,t){var a,r=(a=e.id,-1!==y.indexOf(a)),c="enhanced-table-checkbox-".concat(t);return Object(n.jsxs)(ve.a,{hover:!0,onClick:function(t){return function(e,t){var a=y.indexOf(t),n=[];-1===a?n=n.concat(y,t):0===a?n=n.concat(y.slice(1)):a===y.length-1?n=n.concat(y.slice(0,-1)):a>0&&(n=n.concat(y.slice(0,a),y.slice(a+1))),k(n)}(0,e.id)},role:"checkbox","aria-checked":r,tabIndex:-1,selected:r,children:[Object(n.jsx)(me.a,{padding:"checkbox",children:Object(n.jsx)(ke.a,{checked:r,inputProps:{"aria-labelledby":c}})}),Object(n.jsx)(me.a,{component:"th",id:c,scope:"row",padding:"none",children:e.id}),Object(n.jsx)(me.a,{align:"right",children:e.firstName}),Object(n.jsx)(me.a,{align:"right",children:e.lastName}),Object(n.jsx)(me.a,{align:"right",children:e.userName}),Object(n.jsx)(me.a,{align:"right",children:e.password})]},e.id)})),M>0&&Object(n.jsx)(ve.a,{style:{height:53*M},children:Object(n.jsx)(me.a,{colSpan:6})})]})]})}),Object(n.jsx)(ge.a,{rowsPerPageOptions:[2,3,5],component:"div",count:l.length,rowsPerPage:L,page:C,onChangePage:function(e,t){S(t)},onChangeRowsPerPage:function(e){D(parseInt(e.target.value,10)),S(0)}})]})})}var Ae=a(48),Re=a.n(Ae),Fe=(a(220),a(223),function e(){Object(oe.a)(this,e),this.BaseUrl="https://api.spotify.com/",this.AuthCodeUrl="authorize?client_id=654c7484fce14022bd0ec15f605a0bd3&response_type=code&redirect_uri=http://localhost:3000/sportify&scope=user-read-private%20user-read-email&state=34fFs29kd09",this.TokenUrl="api/token",this.CategoriesUrl="https://api.spotify.com/v1/browse/categories?country=IN&limit=50",this.Token="BQBv-71Cuni-iWuZ_UMd73jNTdeURuRNeNkyXqQTQVUi2lT9t-L0Qm96BtrPMo5jntRMUO2MUZ-x_COQaEJAXbMgYyjHqwfAhe36uq4_XbP3n9J7_zJ_LleYxl-pV9tIiWNwkxco8yFi5DDyzmI8JYA8SKN8igfjEmqPEhvV7XiXIjb3EEWsuFSKGv9z4acG",this.PlayList="https://api.spotify.com/v1/browse/categories/cattegoryId/playlists?country=IN"}),Ve=(a(319),a(296),a(295),a(308),a(307),a(306),a(6)),_e=a(152),ze=a.n(_e),Ee=a(317),qe=a(113),Je=a.n(qe),We=a(151),He=Re.a.create();He.interceptors.request.use(function(){var e=Object(We.a)(Je.a.mark((function e(t){return Je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.headers={Authorization:"Bearer ".concat(JSON.parse(sessionStorage.getItem("TokenInfo")).token),Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},e.abrupt("return",t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){Promise.reject(e)})),He.interceptors.response.use((function(e){return e}),(function(e){return new Promise((function(t,a){var n=e.config;if(401===e.response.status&&e.config&&!e.config.__isRetryRequest){n.__isRetryRequest=!0;var r=new Headers;r.append("Content-Type","application/x-www-form-urlencoded"),r.append("Cookie","__Host-device_id=AQDC0tJ-A0RMFGOtJ02giNDMfioSXzOLL3JKgbgI74Z9NBpVRlqf0WDC0NoRbmkYiaMjkQK1QQf1D1xXPcvwEiMJStkGkNQiGYc; sp_t=b8d3612b89cb15ca3696bccdf32b651b");var c=new URLSearchParams;c.append("grant_type","refresh_token"),c.append("refresh_token","AQDHIGsyxv5Wp8uKj7rtuBry-wWjXB_a9CnJxG-oolYUm9BSryUw5dUJe4kSzANBVn6aU4yFp3DLF5IFL58p0xg3tZewWxdVttVHBhhtbzW7MkC55s2SIWhNgLSOv4JfX2s"),c.append("client_id","654c7484fce14022bd0ec15f605a0bd3"),c.append("client_secret","80455513ed344fd5b8c96667ae6a6e8c"),t(fetch("https://accounts.spotify.com/api/token",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:r,redirect:"follow",referrer:"no-referrer",body:c}).then((function(e){return e.json()})).then((function(e){return console.log(e),sessionStorage.setItem("TokenInfo",JSON.stringify({token:e.access_token,ref_token_exp_time:new Date(Date.now()).setTime(new Date(Date.now()).getTime()+36e5)})),n.headers.Token=e.access_token,n.headers.Device="device",He(n)})))}return Promise.reject(e)}))})),Date.prototype.addHours=function(e){return this.setTime(this.getTime()+60*e*60*1e3),this};var Qe=Object(d.a)((function(e){return{root:{flexGrow:1},button:{margin:e.spacing(1),background:"black",color:"white",width:"100%","&:hover":{background:"grey"}},specialBtn:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px",width:"100%"}}})),Ge=function(e){var t=Qe(),a=c.a.useState(1),i=Object(o.a)(a,2),s=i[0],d=i[1],u=new Fe,j=Object(r.useState)([]),h=Object(o.a)(j,2),b=h[0],m=h[1],O=Object(r.useState)([]),f=Object(o.a)(O,2),g=f[0],v=f[1];Object(r.useEffect)((function(){x()}),[]);var x=function(){He.get("".concat(u.CategoriesUrl),{headers:{Authorization:"Bearer ".concat(u.Token)}}).then((function(e){m(e.data.categories.items),v(e.data.categories.items)})).catch((function(e){console.log("error "+e)}))};return Object(n.jsx)("div",{className:t.root,children:Object(n.jsxs)(E.a,{container:!0,spacing:2,children:[g.length>0&&g.map((function(a,r){var c;return r<4&&Object(n.jsx)(E.a,{item:!0,xs:3,children:Object(n.jsx)("div",{children:Object(n.jsx)(q.a,(c={className:"cateBtn",variant:"contained",size:"large"},Object(l.a)(c,"className",t.button),Object(l.a)(c,"startIcon",Object(n.jsx)(ze.a,{})),Object(l.a)(c,"onClick",(function(){e.handlePlayListChanges(a.id,a.name)})),Object(l.a)(c,"children",a.name),c))})},a.id)})),Object(n.jsxs)(E.a,{item:!0,xs:12,children:[Object(n.jsxs)(p.a,{children:["Page: ",s]}),Object(n.jsx)(Ee.a,{className:"pagination",page:s,onChange:function(e,t){d(t);var a=4*(t-1),n=4*t<=b.length?4*t:b.length,r=ae.a.slice(b,a,n);v(r)},count:Math.ceil(b.length/4),variant:"outlined",color:"secondary"})]}),Object(n.jsx)(E.a,{item:!0,xs:3,children:Object(n.jsx)(q.a,{className:t.specialBtn,children:"Featured-playlists"})}),Object(n.jsx)(E.a,{item:!0,xs:3,children:Object(n.jsx)(q.a,{className:t.specialBtn,children:"New Release"})}),Object(n.jsx)(E.a,{item:!0,xs:3,children:Object(n.jsx)(q.a,{className:t.specialBtn,children:"New Mashup"})}),Object(n.jsx)(E.a,{item:!0,xs:3,children:Object(n.jsx)(q.a,{className:t.specialBtn,children:"Old Mashup"})})]})})},Ke=(Object(Ve.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:220,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(Ne.a),a(309)),Xe=a(310),Ye=a(312),Ze=a(311),$e=(a(226),a(161)),et=[{width:1,itemsToShow:1,itemsToScroll:1},{width:550,itemsToShow:4,itemsToScroll:2},{width:768,itemsToShow:6,itemsToScroll:2},{width:1200,itemsToShow:8,itemsToScroll:2}],tt=function(e){Object(de.a)(a,e);var t=Object(ue.a)(a);function a(){return Object(oe.a)(this,a),t.call(this)}return Object(le.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsx)(c.a.Fragment,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"playListTitle",children:this.props.title}),Object(n.jsx)($e.a,{breakPoints:et,children:this.props.items.length>0&&this.props.items.map((function(t,a){var r,c,i,s,o,l,d;return Object(n.jsx)(Ke.a,{className:"imgCard",onClick:function(){e.props.handlePlayListChanges(t)},children:Object(n.jsxs)(Xe.a,{children:[Object(n.jsx)(Ze.a,{component:"img",image:(null===(r=t.album)||void 0===r||null===(c=r.images[0])||void 0===c?void 0:c.url)?null===(i=t.album)||void 0===i||null===(s=i.images[0])||void 0===s?void 0:s.url:null===(o=t.images[0])||void 0===o?void 0:o.url,title:"Contemplative Reptile"}),Object(n.jsx)(Ye.a,{children:Object(n.jsxs)(p.a,{variant:"caption",display:"block",gutterBottom:!0,children:[t.name," ",(null===(l=t.tracks)||void 0===l?void 0:l.total)&&(null===(d=t.tracks)||void 0===d?void 0:d.total)]})})]})},t.id)}))})]},this.props.title)},this.props.title)}}]),a}(c.a.Component),at=c.a.memo(tt),nt=(a(227),a(98)),rt=a.n(nt),ct=a(158),it=a.n(ct),st=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,border:"1px solid"},songsPaper:{padding:e.spacing(1),color:e.palette.text.secondary,border:"1px solid"}}})),ot=function(e){var t,a,c,i,s,o,l,d,u=st();new Fe;Object(r.useEffect)((function(){}),[]);var j=function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return t+":"+(a<10?"0":"")+a};return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:u.root,children:[Object(n.jsx)(E.a,{container:!0,spacing:3,children:Object(n.jsxs)(E.a,{item:!0,xs:2,children:[Object(n.jsx)(ye.a,{className:u.paper,children:Object(n.jsx)("img",{src:null===(t=e.currentPlaylistTracks)||void 0===t||null===(a=t.playlistData)||void 0===a?void 0:a.images[0].url,className:"card-img-top",alt:"..."})}),null===(c=e.currentPlaylistTracks)||void 0===c||null===(i=c.playlistData)||void 0===i?void 0:i.name," ",null===(s=e.currentPlaylistTracks)||void 0===s||null===(o=s.playlistData)||void 0===o||null===(l=o.tracks)||void 0===l?void 0:l.total]})}),Object(n.jsxs)(E.a,{container:!0,spacing:1,children:[Object(n.jsx)(E.a,{item:!0,xs:12,children:Object(n.jsxs)(ye.a,{className:u.songsPaper,children:[Object(n.jsx)("span",{className:"trackNo",children:"No"}),Object(n.jsxs)("span",{className:"trackLikes",children:[" ",Object(n.jsx)(rt.a,{})]}),Object(n.jsx)("span",{className:"trackTitle",children:"Title"}),Object(n.jsx)("span",{className:"trackArtist",children:"Artist"}),Object(n.jsx)("span",{className:"trackDuration",children:Object(n.jsx)(it.a,{})})]})}),(null===(d=e.currentPlaylistTracks.tracksData.items)||void 0===d?void 0:d.length)>0&&e.currentPlaylistTracks.tracksData.items.map((function(t,a){var r,c,i,s,o,l;return"playlist"==e.currentPlaylistTracks.playlistData.type?Object(n.jsx)(E.a,{item:!0,xs:12,className:"rowStyle",children:Object(n.jsxs)(ye.a,{className:u.songsPaper,children:[Object(n.jsx)("span",{className:"trackNoValue",children:a+1}),Object(n.jsxs)("span",{className:"trackLikesValue",children:[null===(r=t.track)||void 0===r?void 0:r.popularity,Object(n.jsx)(rt.a,{className:"favorite"})]}),Object(n.jsx)("span",{className:"trackTitleValue",children:null===(c=t.track)||void 0===c?void 0:c.name}),Object(n.jsx)("span",{className:"trackArtistValue",children:(t.track.artists[0].name,null===(i=t.track.artists[1])||void 0===i?void 0:i.name)}),Object(n.jsx)("span",{className:"trackDurationValue",children:j(null===t||void 0===t||null===(s=t.track)||void 0===s?void 0:s.duration_ms)}),Object(n.jsx)(q.a,{onClick:function(){e.onTrackSelect(t.track)},color:"primary",children:"Play"})]})},t.id):Object(n.jsx)(E.a,{item:!0,xs:12,className:"rowStyle",children:Object(n.jsxs)(ye.a,{className:u.songsPaper,children:[Object(n.jsx)("span",{className:"trackNoValue",children:a+1}),Object(n.jsxs)("span",{className:"trackLikesValue",children:[(null===t||void 0===t?void 0:t.popularity)&&(null===t||void 0===t?void 0:t.popularity),Object(n.jsx)(rt.a,{className:"favorite"})]}),Object(n.jsx)("span",{className:"trackTitleValue",children:t.name}),Object(n.jsx)("span",{className:"trackArtistValue",children:(null===(o=t.artists[0])||void 0===o||o.name,null===(l=t.artists[1])||void 0===l?void 0:l.name)}),Object(n.jsx)("span",{className:"trackDurationValue",children:j(null===t||void 0===t?void 0:t.duration_ms)}),Object(n.jsx)(q.a,{onClick:function(){e.onTrackSelect(t)},color:"primary",children:"Play"})]})},t.id)}))]})]})})},lt=(a(228),a(321)),dt=a(298),ut=a(159),jt=a.n(ut),ht=a(234),bt=a(236),pt=a(314),mt=a(313),Ot=a(323),ft=Object(d.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},textField:{width:"25ch"}}})),gt=function(e){var t=ft(),a=Object(r.useState)(""),i=Object(o.a)(a,2),s=i[0],d=i[1],u=Object(r.useState)({}),j=Object(o.a)(u,2),h=j[0],b=j[1],p=new Fe,m=c.a.useState(!1),O=Object(o.a)(m,2),f=O[0],g=O[1];Object(r.useEffect)((function(){}),[]);var v=function(){b({}),Re.a.get("https://api.spotify.com/v1/search?q=".concat(s,"&type=album,artist,track&limit=10"),{headers:{Authorization:"Bearer ".concat(p.Token)}}).then((function(e){var t,a,n,r,c,i;g(!1);var s=ae.a.unionBy(null===(t=e.data)||void 0===t||null===(a=t.albums)||void 0===a?void 0:a.items,null===(n=e.data)||void 0===n||null===(r=n.tracks)||void 0===r?void 0:r.items,null===(c=e.data)||void 0===c||null===(i=c.artists)||void 0===i?void 0:i.items);b(s)})).catch((function(e){g(!1),console.log("error "+e)}))};return Object(n.jsx)(E.a,{container:!0,spacing:3,children:Object(n.jsxs)(E.a,{item:!0,xs:6,children:[Object(n.jsxs)(Q.a,{fullWidth:!0,className:t.margin,variant:"outlined",children:[Object(n.jsx)(K.a,{htmlFor:"outlined-adornment-amount",children:"Search Song, Artist"}),Object(n.jsx)(lt.a,{id:"outlined-adornment-amount",value:s,onChange:function(e){var t;t=e,b({}),d(t.target.value),t.target.value.trim().length>2?(g(!0),v()):(g(!1),b({}))},startAdornment:Object(n.jsx)(dt.a,{position:"start",children:Object(n.jsx)(jt.a,{})}),labelWidth:120,endAdornment:Object(n.jsx)(dt.a,{position:"start",children:f&&Object(n.jsx)("i",{className:"fa fa-spinner fa-spin"})}),onBlur:function(){d("")}})]}),h.length>0&&Object(n.jsx)(ht.a,{dense:!0,className:t.root,children:h.map((function(t,a){var r,c,i,s,o,d;return Object(n.jsxs)(bt.a,{button:!0,onClick:function(){return function(t){e.handlePlayListChanges(t)}(t)},className:"searchResultRow",children:[Object(n.jsx)(mt.a,{children:Object(n.jsx)(Ot.a,Object(l.a)({alt:"Avatar n\xb0".concat(a+1),src:(null===t||void 0===t||null===(r=t.images)||void 0===r?void 0:r.length)>0&&(null===t||void 0===t||null===(c=t.images[2])||void 0===c?void 0:c.url)},"src",(null===t||void 0===t||null===(i=t.album)||void 0===i||null===(s=i.images)||void 0===s?void 0:s.length)>0&&(null===t||void 0===t||null===(o=t.album)||void 0===o||null===(d=o.images[2])||void 0===d?void 0:d.url)))}),Object(n.jsx)(pt.a,{id:t.id,primary:t.name})]},a)}))})]})})},vt=function(){var e,t,a=Object(r.useState)(""),i=Object(o.a)(a,2),s=(i[0],i[1]),l=Object(r.useState)({items:[],cateName:""}),d=Object(o.a)(l,2),u=d[0],j=d[1],h=Object(r.useState)([]),b=Object(o.a)(h,2),p=b[0],m=b[1],O=Object(r.useState)({playlistData:{},tracksData:{}}),f=Object(o.a)(O,2),g=f[0],v=f[1],x=Object(r.useState)([]),y=Object(o.a)(x,2),k=y[0],N=y[1],w=new Fe,C=function(e){if("track"!==e.type){var t="https://api.spotify.com/v1/".concat(e.type,"s/").concat(e.id);t="artist"==e.type?"".concat(t,"/top-tracks?country=IN"):"".concat(t,"/tracks"),He.get("".concat(t),{headers:{Authorization:"Bearer ".concat(w.Token)}}).then((function(t){"artist"==e.type?v({playlistData:e,tracksData:{items:t.data.tracks}}):v({playlistData:e,tracksData:t.data})})).catch((function(e){console.log("error "+e)}))}else A(e)};Object(r.useEffect)((function(){T(),B(),L(),M(),P(),D(),I(),U(),S(),C("https://api.spotify.com/v1/playlists/37i9dQZF1DXdSavJjIP6Fb/tracks")}),[]);var S=function(){He.get("https://api.spotify.com/v1/search?q=reprise&type=track%2Calbum&limit=50",{headers:{Authorization:"Bearer ".concat(w.Token)}}).then((function(e){var t={key:Math.floor(900*Math.random()+100),playListTitle:"Reprise songs",playListItems:e.data.tracks.items};m((function(e){return[].concat(Object(_.a)(e),[t])}))})).catch((function(e){console.log("error "+e)}))},T=function(){He.get("https://api.spotify.com/v1/browse/new-releases?country=IN",{headers:{Authorization:"Bearer ".concat(w.Token)}}).then((function(e){var t={key:Math.floor(900*Math.random()+100),playListTitle:"albums",playListItems:e.data.albums.items};m((function(e){return[].concat(Object(_.a)(e),[t])}))})).catch((function(e){console.log("error "+e)}))},P=function(){He.get("https://api.spotify.com/v1/search?q=year%3A2020&type=track%2Calbum&limit=50",{headers:{Authorization:"Bearer ".concat(w.Token)}}).then((function(e){var t={key:Math.floor(900*Math.random()+100),playListTitle:"2020",playListItems:e.data.albums.items};m((function(e){return[].concat(Object(_.a)(e),[t])}))})).catch((function(e){console.log("error "+e)}))},L=function(){He.get("https://api.spotify.com/v1/me/top/tracks",{headers:{Authorization:"Bearer ".concat(w.Token)}}).then((function(e){var t={key:Math.floor(900*Math.random()+100),playListTitle:"My Top Tracks",playListItems:e.data.items};m((function(e){return[].concat(Object(_.a)(e),[t])}))})).catch((function(e){console.log("error "+e)}))},D=function(){He.get("https://api.spotify.com/v1/search?q=Bollywood%20Heartbreak&type=track%2Calbum&limit=50",{headers:{Authorization:"Bearer ".concat(w.Token)}}).then((function(e){var t={key:Math.floor(900*Math.random()+100),playListTitle:"Heartbreak songs",playListItems:e.data.tracks.items};m((function(e){return[].concat(Object(_.a)(e),[t])}))})).catch((function(e){console.log("error "+e)}))},B=function(){},M=function(){He.get("https://api.spotify.com/v1/search?q=MostView&type=album",{headers:{Authorization:"Bearer ".concat(w.Token)}}).then((function(e){var t={key:Math.floor(900*Math.random()+100),playListTitle:"Most viewed albums",playListItems:e.data.albums.items};m((function(e){return[].concat(Object(_.a)(e),[t])}))})).catch((function(e){console.log("error "+e)}))},U=function(){He.get("https://api.spotify.com/v1/browse/categories/punjabi/playlists?country=IN&limit=50",{headers:{Authorization:"Bearer ".concat(w.Token)}}).then((function(e){var t={key:Math.floor(900*Math.random()+100),playListTitle:"Panjabi",playListItems:e.data.playlists.items};m((function(e){return[].concat(Object(_.a)(e),[t])}))})).catch((function(e){console.log("error "+e)}))},I=function(){He.get("https://api.spotify.com/v1/browse/featured-playlists?country=IN",{headers:{Authorization:"Bearer ".concat(w.Token)}}).then((function(e){var t={key:Math.floor(900*Math.random()+100),playListTitle:"Featured Playlists",playListItems:e.data.playlists.items};m((function(e){return[].concat(Object(_.a)(e),[t])}))})).catch((function(e){console.log("error "+e)}))},A=function(e){N(e)};return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(gt,{handlePlayListChanges:C}),Object(n.jsx)(Ge,{handlePlayListChanges:function(e,t){s(e),He.get("".concat(w.PlayList.replace("cattegoryId",e)),{headers:{Authorization:"Bearer ".concat(w.Token)}}).then((function(e){j({items:e.data.playlists.items,cateName:t})})).catch((function(e){console.log("error "+e)}))}}),u.items.length>0&&Object(n.jsx)(at,{title:u.cateName,items:u.items,handlePlayListChanges:C},u.cateName),Object(n.jsxs)("div",{children:[p.length>0&&p.map((function(e){return Object(n.jsx)(at,{title:e.playListTitle,items:e.playListItems,handlePlayListChanges:C},e.playListTitle)})),(null===(e=g.tracksData)||void 0===e||null===(t=e.items)||void 0===t?void 0:t.length)>0&&Object(n.jsx)(ot,{currentPlaylistTracks:g,onTrackSelect:A},g.playlistData.id),(null===k||void 0===k?void 0:k.id)&&Object(n.jsx)("iframe",{id:"iFrameId",src:"https://open.spotify.com/embed/track/".concat(null===k||void 0===k?void 0:k.id),width:"1200",height:"80",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"})]})]})};var xt=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(V.a,{children:Object(n.jsxs)(F,{children:[Object(n.jsx)(je,{children:Object(n.jsx)(ee,{searchValue:a,searchHandler:function(e){c(e)}})}),Object(n.jsx)(se.a,{maxWidth:"lg",children:Object(n.jsxs)(ie.c,{children:[Object(n.jsx)(ie.a,{path:"/signup",children:Object(n.jsx)(je,{children:Object(n.jsx)(Z,{})})}),Object(n.jsx)(ie.a,{path:"/login",children:Object(n.jsx)(je,{children:Object(n.jsx)(re,{})})}),Object(n.jsx)(ie.a,{exact:!0,path:"/viewUsers",children:Object(n.jsx)(je,{children:Object(n.jsx)(Ie,{searchValue:a})})}),Object(n.jsx)(ie.a,{exact:!0,path:"/sportify",children:Object(n.jsx)(je,{children:Object(n.jsx)(vt,{})})}),Object(n.jsx)(ie.a,{exact:!0,path:"/",children:Object(n.jsx)(je,{children:Object(n.jsx)(re,{})})}),Object(n.jsx)(ie.a,{component:ce})]})})]})})})},yt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,325)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};a(229);s.a.render(Object(n.jsx)(xt,{}),document.getElementById("root")),yt()}},[[230,1,2]]]);
//# sourceMappingURL=main.b2cacf64.chunk.js.map