(this["webpackJsonpgithub-repos-app"]=this["webpackJsonpgithub-repos-app"]||[]).push([[0],{17:function(e,t,r){e.exports={card:"RepositoryCard_card__1gx86",link:"RepositoryCard_link__3iILE",favoriteButton:"RepositoryCard_favoriteButton__2Mx91",description:"RepositoryCard_description__Fsi8H",details:"RepositoryCard_details__2GQk2",languajeColor:"RepositoryCard_languajeColor__iLVy9",stars:"RepositoryCard_stars__3kFo0"}},21:function(e,t,r){e.exports={pageContainer:"Repos_pageContainer__3didE",userLabel:"Repos_userLabel__3X3fB",error:"Repos_error__1jLXg",repositoriesList:"Repos_repositoriesList__KcltG",listTop:"Repos_listTop__3SwMN",filterFavorites:"Repos_filterFavorites__Xj6Eu"}},23:function(e,t,r){e.exports={wrapper:"Login_wrapper__x3ylq",container:"Login_container__2QMaU",loginBox:"Login_loginBox__3bDuH",actions:"Login_actions__1O_EH",error:"Login_error__1Yvx8"}},24:function(e,t,r){e.exports={wrapper:"SignUp_wrapper__gMKSE",container:"SignUp_container__22Ppa",loginBox:"SignUp_loginBox__uJPL9",actions:"SignUp_actions__d4p2i",error:"SignUp_error__1IMGQ"}},37:function(e,t,r){e.exports={tokenForm:"TokenForm_tokenForm__yg9SB",token:"TokenForm_token__2HYSV"}},44:function(e,t,r){},54:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(28),o=r.n(i),c=(r(44),r(25)),s=r(7),l=r(22),u=r(3),d=r(1),j=Object(n.createContext)({isAuthenticated:!0,setUser:function(e){},logout:function(){}}),b=function(){return Object(n.useContext)(j)};function p(e){var t=e.children,r=Object(n.useState)(!0),a=Object(u.a)(r,2),i=a[0],o=a[1],c=Object(n.useState)(),s=Object(u.a)(c,2),l=s[0],b=s[1],p=!!l;Object(n.useEffect)((function(){var e=sessionStorage.getItem("user");console.log({sessionUser:!!e}),e&&b(JSON.parse(e)),o(!1)}),[]);var f=Object(n.useCallback)((function(e){b(e),sessionStorage.setItem("user",JSON.stringify(e))}),[]),O=Object(n.useCallback)((function(){sessionStorage.clear(),b(void 0)}),[]);return i?null:Object(d.jsx)(j.Provider,{value:{user:l,setUser:f,logout:O,isAuthenticated:p},children:t})}var f=r(4),O=r(16);function v(e){var t=e.children,r=e.text,n=e.raised,a=e.className,i=e.type,o=void 0===i?"button":i,c=e.loading,s=void 0!==c&&c,l=Object(O.a)(e,["children","text","raised","className","type","loading"]);return Object(d.jsx)("button",Object(f.a)(Object(f.a)({type:o,className:"\n        ".concat(n?"bg-gray-800 text-white hover:bg-gray-700":"text-gray-800 hover:text-gray-700 hover:bg-gray-700 hover:bg-opacity-5","\n        px-4 py-2\n        w-full\n        rounded\n        uppercase\n        font-bold\n        focus:outline-none\n        ").concat(a,"\n      ")},l),{},{children:s?Object(d.jsxs)("svg",{className:"animate-spin h-6 w-6 mx-auto text-current",fill:"none",viewBox:"0 0 24 24",children:[Object(d.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",fill:"none",strokeWidth:"4"}),Object(d.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):null!==r&&void 0!==r?r:t}))}function g(){var e=b(),t=e.user,r=e.logout;return Object(d.jsxs)("div",{className:"p-8 flex justify-between",children:[Object(d.jsxs)("span",{className:"text-lg",children:["Hi"," ",Object(d.jsxs)("b",{children:[null===t||void 0===t?void 0:t.firstName," ",null===t||void 0===t?void 0:t.lastName]})]}),Object(d.jsx)("div",{children:Object(d.jsx)(v,{text:"logout",onClick:r})})]})}function h(e){var t=e.children,r=Object(O.a)(e,["children"]),n=b().isAuthenticated;return Object(d.jsx)(s.b,Object(f.a)(Object(f.a)({},r),{},{render:function(e){var r=e.location;return n?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{}),t]}):Object(d.jsx)(s.a,{to:{pathname:"/login",state:{from:r}}})}}))}var m=r(5),x=r.n(m),y=r(10),w=r(31),_=a.a.forwardRef((function(e,t){var r=e.className,n=e.invalid,a=e.type,i=void 0===a?"text":a,o=Object(O.a)(e,["className","invalid","type"]);return Object(d.jsx)("input",Object(f.a)({ref:t,type:i,className:"\n        block\n        w-full\n        py-3\n        px-2\n        text-gray-800\n        appearance-none\n        border-2 rounded\n        focus:text-gray-500\n        focus:outline-none\n        ".concat(n?"border-red-400":"border-gray-100 focus:border-gray-200","\n        ").concat(r,"\n      ")},o))})),N=r(23),k=r.n(N);function S(){var e=Object(s.g)(),t=Object(n.useState)(),r=Object(u.a)(t,2),a=r[0],i=r[1],o=function(){var e=b().setUser;return{login:Object(n.useCallback)((function(t){var r=t.email,n=t.password,a=localStorage.getItem("user:".concat(r));if(!a)throw new Error("Wrong username or password");var i=JSON.parse(a);if(i.password!==n)throw new Error("Wrong username or password");e(i)}),[e])}}().login,c=Object(w.a)(),l=c.register,j=c.handleSubmit,p=c.formState,O=p.errors,g=p.isValidating;Object(n.useEffect)((function(){i(void 0)}),[g]);var h=function(){var t=Object(y.a)(x.a.mark((function t(r){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{o(r),e.push("/")}catch(a){i(a.message)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:k.a.wrapper,children:Object(d.jsx)("div",{className:k.a.container,children:Object(d.jsxs)("div",{className:k.a.loginBox,children:[Object(d.jsx)("h2",{children:"Login"}),!!a&&Object(d.jsx)("h4",{className:k.a.error,children:a}),Object(d.jsxs)("form",{onSubmit:j(h),children:[Object(d.jsx)(_,Object(f.a)(Object(f.a)({},l("email",{pattern:/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/,required:!0})),{},{type:"email",placeholder:"email",autoComplete:"email",invalid:!!O.email})),Object(d.jsx)(_,Object(f.a)(Object(f.a)({},l("password",{required:!0})),{},{type:"password",placeholder:"password",autoComplete:"current-password",invalid:!!O.password})),Object(d.jsxs)("div",{className:k.a.actions,children:[Object(d.jsx)(v,{text:"Login",raised:!0,type:"submit"}),Object(d.jsx)(v,{text:"Sign Up",onClick:function(){return e.push("/sign-up")}})]})]})]})})})}var C=r(21),E=r.n(C);function F(){return Object(d.jsxs)("div",{className:"animate-pulse flex flex-col",children:[Object(d.jsx)("div",{className:"h-4 w-1/3 bg-gray-300 rounded mb-4"}),Object(d.jsx)("div",{className:"h-24 w-full bg-gray-300 rounded"})]})}function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var R=n.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),P=n.createElement("path",{d:"M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"});function B(e,t){var r=e.title,a=e.titleId,i=I(e,["title","titleId"]);return n.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":a},i),r?n.createElement("title",{id:a},r):null,R,P)}var U=n.forwardRef(B),z=(r.p,r(37)),M=r.n(z);function H(e){var t=e.token,r=void 0===t?"":t,a=e.setToken,i=e.loading,o=Object(n.useState)(r),c=Object(u.a)(o,2),s=c[0],l=c[1];return Object(d.jsxs)("div",{className:M.a.tokenForm,children:[Object(d.jsx)("h3",{children:"User access token"}),Object(d.jsxs)("div",{className:M.a.token,children:[Object(d.jsx)(_,{value:s,onChange:function(e){return l(e.target.value)}}),Object(d.jsx)(v,{onClick:function(){return a(s)},loading:i,children:Object(d.jsx)(U,{})})]})]})}var T=r(8),q=Object(T.b)({key:"userRepositoriesState",default:[]}),J=Object(T.b)({key:"userFavoriteRepositoriesState",default:[]}),A=Object(T.b)({key:"filterFavoritesState",default:!1}),V=Object(T.c)({key:"repositoriesListState",get:function(e){var t=e.get,r=t(A),n=t(q),a=t(J);return r?n.filter((function(e){return a.includes(e.id)})):n}}),G=Object(T.b)({key:"userTokenState",default:"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"});function Q(){var e=Object(T.d)(G),t=Object(u.a)(e,2),r=t[0],a=t[1],i=Object(T.f)(A);return Object(n.useEffect)((function(){i(!1)}),[r,i]),{token:r,setToken:a}}var W=function(e){if(e.httpError){var t=e.httpError.body;return JSON.parse(t).message}return e.graphQLErrors?"Unexpected error":e.fetchError?e.fetchError.message:void 0};var Y=r(9);function D(){!function(){var e=b().user,t="favoritres:".concat(null===e||void 0===e?void 0:e.email),r=Object(T.d)(J),a=Object(u.a)(r,2),i=a[0],o=a[1],c=Object(T.f)(A);Object(n.useEffect)((function(){var e=localStorage.getItem(t);e&&o(JSON.parse(e))}),[o,t]),Object(n.useEffect)((function(){i.length?localStorage.setItem(t,JSON.stringify(i)):(localStorage.removeItem(t),c(!1))}),[i,c,t])}();var e=Object(T.d)(A),t=Object(u.a)(e,2),r=t[0],a=t[1],i=Object(T.d)(J),o=Object(u.a)(i,2),c=o[0],s=o[1],l=Object(n.useCallback)((function(){a((function(e){return!e}))}),[a]),d=Object(n.useCallback)((function(e){c.includes(e)?s((function(t){return t.filter((function(t){return t!==e}))})):s((function(t){return[].concat(Object(Y.a)(t),[e])}))}),[c,s]);return{filterFavorites:r,toggleFilterFavorites:l,isFavorite:Object(n.useCallback)((function(e){return c.includes(e)}),[c]),toggleFavoriteRepository:d,hasFavorites:!!c.length}}var X=r(17),K=r.n(X);function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var ee=n.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),te=n.createElement("path",{d:"M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"});function re(e,t){var r=e.title,a=e.titleId,i=$(e,["title","titleId"]);return n.createElement("svg",Z({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":a},i),r?n.createElement("title",{id:a},r):null,ee,te)}var ne=n.forwardRef(re);r.p;function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ie(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var oe=n.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),ce=n.createElement("path",{d:"M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"});function se(e,t){var r=e.title,a=e.titleId,i=ie(e,["title","titleId"]);return n.createElement("svg",ae({xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",ref:t,"aria-labelledby":a},i),r?n.createElement("title",{id:a},r):null,oe,ce)}var le=n.forwardRef(se);r.p;function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var je=n.createElement("path",{fillRule:"evenodd",d:"M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"});function be(e,t){var r=e.title,a=e.titleId,i=de(e,["title","titleId"]);return n.createElement("svg",ue({viewBox:"0 0 16 16",width:16,height:16,ref:t,"aria-labelledby":a},i),r?n.createElement("title",{id:a},r):null,je)}var pe=n.forwardRef(be);r.p;function fe(e){var t=e.data,r=e.isFavorite,n=e.onFavoriteClick,a=t.name,i=t.createdAt,o=t.description,c=t.primaryLanguage,s=t.stargazerCount,l=t.url;return Object(d.jsx)("div",{className:K.a.card,children:Object(d.jsxs)("div",{children:[Object(d.jsx)("a",{className:K.a.link,href:l,children:a}),Object(d.jsxs)("button",{className:K.a.favoriteButton,onClick:n,children:[r?Object(d.jsx)(le,{}):Object(d.jsx)(ne,{}),"Favorite"]}),Object(d.jsx)("p",{className:K.a.description,children:null!==o&&void 0!==o?o:Object(d.jsx)("i",{children:Object(d.jsx)("small",{children:"no description"})})}),Object(d.jsxs)("p",{className:K.a.details,children:[Object(d.jsxs)("span",{className:"ml-0",children:[Object(d.jsx)("span",{className:K.a.languajeColor,style:{backgroundColor:c.color}}),Object(d.jsx)("span",{className:K.a.languaje,children:c.name})]}),Object(d.jsxs)("a",{className:K.a.stars,href:"".concat(l,"/stargazers"),children:[Object(d.jsx)(pe,{}),s]}),Object(d.jsx)("span",{className:K.a.date,children:i})]})]})})}function Oe(){var e=Q(),t=e.token,r=e.setToken,a=function(){var e=Q().token,t=Object(T.f)(q),r=Object(T.e)(V),a=Object(l.c)("\nquery repositories { \n  viewer {\n    id\n    login\n    repositories(first: 100) {\n  \t\tnodes {\n        createdAt\n        description\n        id\n        name\n        primaryLanguage {\n          name\n          color\n        }\n        stargazerCount\n        url\n      }\n      pageInfo {\n        endCursor\n        hasNextPage\n      }\n    }\n  }\n}\n"),i=Object(u.a)(a,2),o=i[0],c=i[1],s=c.loading,d=c.error,j=c.data,b=Object(n.useContext)(l.a);return Object(n.useEffect)((function(){var r=function(){var e=Object(y.a)(x.a.mark((function e(){var r,n,a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:n=e.sent,a=n.data,t(null!==(r=null===a||void 0===a?void 0:a.viewer.repositories.nodes)&&void 0!==r?r:[]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();b.setHeader("Authorization","bearer ".concat(e)),r()}),[b,o,t,e]),{user:null===j||void 0===j?void 0:j.viewer.login,repositories:r,error:d?W(d):void 0,loading:s}}(),i=a.repositories,o=a.user,c=a.error,s=a.loading,j=D(),b=j.filterFavorites,p=j.toggleFilterFavorites,f=j.isFavorite,O=j.toggleFavoriteRepository,g=j.hasFavorites;return Object(d.jsxs)("div",{className:E.a.pageContainer,children:[Object(d.jsx)(H,{token:t,setToken:r,loading:s}),s?Object(d.jsx)(F,{}):c?Object(d.jsx)("h2",{className:E.a.error,children:c}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:E.a.listTop,children:[Object(d.jsxs)("h2",{className:E.a.userLabel,children:[o,"'s repositories"]}),g&&Object(d.jsx)(v,{onClick:p,className:E.a.filterFavorites,raised:!0,children:b?"Show all":"Filter favorites"})]}),Object(d.jsx)("div",{className:E.a.repositoriesList,children:i.map((function(e){return Object(d.jsx)(fe,{data:e,isFavorite:f(e.id),onFavoriteClick:function(){return O(e.id)}},e.id)}))})]})]})}var ve=r(24),ge=r.n(ve);function he(){var e=Object(s.g)(),t=Object(n.useState)(),r=Object(u.a)(t,2),a=r[0],i=r[1],o={signUp:Object(n.useCallback)((function(e){if(localStorage.getItem("user:".concat(e.email)))throw new Error("The email is already registered");localStorage.setItem("user:".concat(e.email),JSON.stringify(e))}),[])}.signUp,c=Object(w.a)(),l=c.register,j=c.handleSubmit,b=c.getValues,p=c.formState,O=p.errors,g=p.isValidating;Object(n.useEffect)((function(){i(void 0)}),[g]);var h=function(){var t=Object(y.a)(x.a.mark((function t(r){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{o(r),alert("Successful registration you can now login"),e.push("/login")}catch(a){i(a.message)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsx)("div",{className:ge.a.wrapper,children:Object(d.jsx)("div",{className:ge.a.container,children:Object(d.jsxs)("div",{className:ge.a.loginBox,children:[Object(d.jsx)("h2",{children:"Sing Up"}),!!a&&Object(d.jsx)("h4",{className:ge.a.error,children:a}),Object(d.jsxs)("form",{onSubmit:j(h),children:[Object(d.jsx)(_,Object(f.a)(Object(f.a)({},l("firstName")),{},{invalid:!!O.firstName,placeholder:"first name",required:!0})),Object(d.jsx)(_,Object(f.a)(Object(f.a)({},l("lastName")),{},{invalid:!!O.lastName,placeholder:"last name",required:!0})),Object(d.jsx)(_,Object(f.a)(Object(f.a)({},l("email",{pattern:/\b[\w.-]+@[\w.-]+\.\w{2,4}\b/})),{},{type:"email",placeholder:"email",autoComplete:"email",required:!0,invalid:!!O.email,className:"mt-1"})),Object(d.jsx)(_,Object(f.a)(Object(f.a)({},l("password")),{},{type:"password",placeholder:"password",required:!0,invalid:!!O.password,className:"mt-2"})),Object(d.jsx)(_,Object(f.a)(Object(f.a)({},l("confirmPassword",{validate:function(e){return e===b("password")}})),{},{type:"password",placeholder:"confirm password",invalid:!!O.confirmPassword,required:!0})),Object(d.jsxs)("div",{className:ge.a.actions,children:[Object(d.jsx)(v,{text:"Sign Up",raised:!0,type:"submit"}),Object(d.jsx)(v,{text:"Login",onClick:function(){return e.push("/login")}})]})]})]})})})}var me=new l.b({url:"https://api.github.com/graphql"});var xe=function(){return Object(d.jsx)(c.a,{basename:"/github-repositories",children:Object(d.jsx)(T.a,{children:Object(d.jsx)(l.a.Provider,{value:me,children:Object(d.jsx)(p,{children:Object(d.jsxs)(s.d,{children:[Object(d.jsx)(h,{exact:!0,path:"/",children:Object(d.jsx)(Oe,{})}),Object(d.jsx)(s.b,{path:"/login",component:S}),Object(d.jsx)(s.b,{path:"/sign-up",component:he})]})})})})})},ye=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,57)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(xe,{})}),document.getElementById("root")),ye()}},[[54,1,2]]]);
//# sourceMappingURL=main.2ccb710e.chunk.js.map