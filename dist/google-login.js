!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.GoogleLogin=t(require("react")):e.GoogleLogin=t(e.react)}("undefined"!=typeof self?self:this,(function(e){return n={},t.m=o=[function(t){t.exports=e},function(e,t,o){e.exports=o(2)()},function(e,t,o){"use strict";function n(){}function r(){}var i=o(3);r.resetWarningCache=n,e.exports=function(){function e(e,t,o,n,r,a){if(a!==i){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}var o={array:e.isRequired=e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:r,resetWarningCache:n};return o.PropTypes=o}},function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,o){"use strict";function n(e){this.message=e}function r(e){this.message=e}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){null!=t&&t<=e.length||(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){null!=t&&t<=e.length||(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){null!=t&&t<=e.length||(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var o=[],n=!0,r=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(n=(a=c.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(o):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){null!=t&&t<=e.length||(t=e.length);for(var o=0,n=Array(t);o<t;o++)n[o]=e[o];return n}o.r(t),o.d(t,"default",(function(){return O})),o.d(t,"GoogleLogin",(function(){return O})),o.d(t,"GoogleLogout",(function(){return I})),o.d(t,"useGoogleLogin",(function(){return j})),o.d(t,"useGoogleLogout",(function(){return x}));var p=o(0),g=o.n(p);function y(e,t,o,n,r,i,a){var c=e.getElementsByTagName(t)[0],l=c,u=c;if((u=e.createElement(t)).id=o,u.src=n,l&&l.parentNode?l.parentNode.insertBefore(u,l):e.head.appendChild(u),u.onerror=i,u.onload=r,"function"==typeof a&&a())var s=setTimeout((function(){r(),clearTimeout(s)}),1e3)}function m(e,t){var o=e.getElementById(t);o&&o.parentNode.removeChild(o)}function b(e){return g.a.createElement("span",{style:{paddingRight:10,fontWeight:500,paddingLeft:e.icon?0:10,paddingTop:10,paddingBottom:10}},e.children)}function h(e){return g.a.createElement("div",{style:{marginRight:10,background:e.active?"#eee":"#fff",padding:10,borderRadius:2}},g.a.createElement("svg",{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"},g.a.createElement("g",{fill:"#000",fillRule:"evenodd"},g.a.createElement("path",{d:"M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z",fill:"#EA4335"}),g.a.createElement("path",{d:"M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z",fill:"#4285F4"}),g.a.createElement("path",{d:"M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z",fill:"#FBBC05"}),g.a.createElement("path",{d:"M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z",fill:"#34A853"}),g.a.createElement("path",{fill:"none",d:"M0 0h18v18H0z"}))))}function v(e){var t=c(Object(p.useState)(!1),2),o=t[0],n=t[1],r=c(Object(p.useState)(!1),2),i=r[0],a=r[1],l=e.tag,u=e.type,s=e.className,d=e.disabledStyle,f=e.buttonText,y=e.children,m=e.render,v=e.theme,w=e.icon,S=e.disabled,k=j({onSuccess:e.onSuccess,onAutoLoadFinished:e.onAutoLoadFinished,onRequest:e.onRequest,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,autoLoad:e.autoLoad,isSignedIn:e.isSignedIn,fetchBasicProfile:e.fetchBasicProfile,redirectUri:e.redirectUri,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,scope:e.scope,accessType:e.accessType,responseType:e.responseType,jsSrc:e.jsSrc,prompt:e.prompt}),O=k.signIn,x=S||!k.loaded;if(m)return m({onClick:O,disabled:x});var I={backgroundColor:"dark"===v?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},T={cursor:"pointer",backgroundColor:"dark"===v?"#3367D6":"#eee",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",opacity:1},_=x?Object.assign({},I,d):i?Object.assign({},I,T):o?Object.assign({},I,{cursor:"pointer",opacity:.9}):I;return g.a.createElement(l,{onMouseEnter:function(){return n(!0)},onMouseLeave:function(){n(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:O,style:_,type:u,disabled:x,className:s},[w&&g.a.createElement(h,{key:1,active:i}),g.a.createElement(b,{icon:w,key:2},y||f)])}o(1),(n.prototype=Error()).name="InvalidCharacterError";var w="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var t=(e+"").replace(/=+$/,"");if(t.length%4==1)throw new n("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,r,i=0,a=0,c="";r=t[0|a++];~r&&(o=i%4?64*o+r:r,i++%4)&&(c+=String.fromCharCode(255&o>>(-2*i&6))))r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return c},S=function(e,t){if("string"!=typeof e)throw new r("Invalid token specified");var o=!0===(t=t||{}).header?0:1;try{return JSON.parse(function(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw"Illegal base64url string!"}try{return decodeURIComponent(w(t).replace(/(.)/g,(function(e,t){var o=t.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o})))}catch(e){return w(t)}}(e.split(".")[o]))}catch(e){throw new r("Invalid token specified: "+e.message)}},j=function(e){function t(e){var t=e.credential,o=S(t),n={};n.profileObj={googleId:o.sub,imageUrl:o.picture,email:o.email,name:o.name,givenName:o.given_name,familyName:o.family_name},n.tokenObj={id_token:t},a(n)}function o(){if(window.google&&window.google.accounts)window.google.accounts.id.initialize({client_id:s,itp_support:!0,callback:t});else var e=setTimeout((function(){o(),clearTimeout(e)}),1e3)}function n(e){if(e&&e.preventDefault(),v)console.log("signIn -> loaded"),window.google&&window.google.accounts&&window.google.accounts.id.prompt((function(e){console.log("signIn -> prompt",e,e.getNotDisplayedReason(),e.getSkippedReason()),e.isNotDisplayed()&&["opt_out_or_no_session"].includes(e.getNotDisplayedReason())?(console.log("signIn -> opt_out"),(window.google&&window.google.accounts&&window.google.accounts.oauth2.initTokenClient({client_id:s,scope:f,callback:function(){window.google&&window.google.accounts&&window.google.accounts.id.initialize({client_id:s,itp_support:!0,auto_select:!0,callback:t}),window.google&&window.google.accounts&&window.google.accounts.id.prompt()}})).requestAccessToken()):(e.isNotDisplayed()||e.isSkippedMoment()||["user_cancel","issuing_failed"].includes(e.getSkippedReason()))&&(console.log("signIn -> not displayed"),document.cookie="g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT",window.google&&window.google.accounts&&window.google.accounts.id.cancel(),o())}));else var r=setTimeout((function(){console.log("signIn -> not loaded"),n(e),clearTimeout(r)}),1e3)}var r=e.onSuccess,a=void 0===r?function(){}:r,c=e.onFailure,l=void 0===c?function(){}:c,u=e.onScriptLoadFailure,s=e.clientId,d=e.autoLoad,f=e.scope,g=e.jsSrc,b=void 0===g?"https://accounts.google.com/gsi/client":g,h=i(Object(p.useState)(!1),2),v=h[0],w=h[1];return Object(p.useEffect)((function(){console.log("useEffect -> mount");var e=!1,t=!1,n=u||l;return y(document,"script","google-login",b,(function(){e=!0,t&&!v?(console.log("useEffect -> bypassed:loaded"),o(),w(!0)):v?(console.log("useEffect -> loaded"),o()):window.onload=function(){console.log("useEffect -> onload"),o(),w(!0)}}),(function(e){n(e)}),(function(){try{return!v&&!e&&window.google&&window.google.accounts}finally{v||e||(t=!0)}})),function(){document.cookie="g_state=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT",window.google&&window.google.accounts&&window.google.accounts.id.cancel(),console.log("useEffect -> unmount"),m(document,"google-login")}}),[]),Object(p.useEffect)((function(){d&&n()}),[v]),{signIn:n,loaded:v}};function k(e){var t=d(Object(p.useState)(!1),2),o=t[0],n=t[1],r=d(Object(p.useState)(!1),2),i=r[0],a=r[1],c=e.tag,l=e.type,u=e.className,s=e.disabledStyle,f=e.buttonText,y=e.children,m=e.render,v=e.theme,w=e.icon,S=e.disabled,j=x({jsSrc:e.jsSrc,onFailure:e.onFailure,onScriptLoadFailure:e.onScriptLoadFailure,clientId:e.clientId,cookiePolicy:e.cookiePolicy,loginHint:e.loginHint,hostedDomain:e.hostedDomain,fetchBasicProfile:e.fetchBasicProfile,discoveryDocs:e.discoveryDocs,uxMode:e.uxMode,redirectUri:e.redirectUri,scope:e.scope,accessType:e.accessType,onLogoutSuccess:e.onLogoutSuccess}),k=j.signOut,O=S||!j.loaded;if(m)return m({onClick:k,disabled:O});var I={backgroundColor:"dark"===v?"rgb(66, 133, 244)":"#fff",display:"inline-flex",alignItems:"center",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",boxShadow:"0 2px 2px 0 rgba(0, 0, 0, .24), 0 0 1px 0 rgba(0, 0, 0, .24)",padding:0,borderRadius:2,border:"1px solid transparent",fontSize:14,fontWeight:"500",fontFamily:"Roboto, sans-serif"},T={cursor:"pointer",backgroundColor:"dark"===v?"#3367D6":"#eee",color:"dark"===v?"#fff":"rgba(0, 0, 0, .54)",opacity:1},_=O?Object.assign({},I,s):i?Object.assign({},I,T):o?Object.assign({},I,{cursor:"pointer",opacity:.9}):I;return g.a.createElement(c,{onMouseEnter:function(){return n(!0)},onMouseLeave:function(){n(!1),a(!1)},onMouseDown:function(){return a(!0)},onMouseUp:function(){return a(!1)},onClick:k,style:_,type:l,disabled:O,className:u},[w&&g.a.createElement(h,{key:1,active:i}),g.a.createElement(b,{icon:w,key:2},y||f)])}v.defaultProps={type:"button",tag:"button",buttonText:"Sign in with Google",scope:"profile email",accessType:"online",prompt:"",cookiePolicy:"single_host_origin",fetchBasicProfile:!0,isSignedIn:!((r.prototype=Error()).name="InvalidTokenError"),uxMode:"popup",disabledStyle:{opacity:.6},icon:!0,theme:"light",onRequest:function(){}};var O=v,x=function(e){var t=e.jsSrc,o=void 0===t?"https://apis.google.com/js/api.js":t,n=e.onFailure,r=e.onScriptLoadFailure,i=e.clientId,a=e.cookiePolicy,c=e.loginHint,l=e.hostedDomain,s=e.fetchBasicProfile,d=e.discoveryDocs,f=e.uxMode,g=e.redirectUri,b=e.scope,h=e.accessType,v=e.onLogoutSuccess,w=u(Object(p.useState)(!1),2),S=w[0],j=w[1],k=Object(p.useCallback)((function(){if(window.gapi){var e=window.gapi.auth2.getAuthInstance();null!=e&&e.then((function(){e.signOut().then((function(){e.disconnect(),v()}))}),(function(e){return n(e)}))}}),[v]);return Object(p.useEffect)((function(){var e=r||n;return y(document,"script","google-login",o,(function(){var t={client_id:i,cookie_policy:a,login_hint:c,hosted_domain:l,fetch_basic_profile:s,discoveryDocs:d,ux_mode:f,redirect_uri:g,scope:b,access_type:h};window.gapi.load("auth2",(function(){window.gapi.auth2.getAuthInstance()?j(!0):window.gapi.auth2.init(t).then((function(){return j(!0)}),(function(t){return e(t)}))}))}),(function(t){e(t)})),function(){m(document,"google-login")}}),[]),{signOut:k,loaded:S}};k.defaultProps={type:"button",tag:"button",buttonText:"Logout of Google",disabledStyle:{opacity:.6},icon:!0,theme:"light",jsSrc:"https://apis.google.com/js/api.js"};var I=k}],t.c=n,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(t){return e[t]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=4);function t(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return o[e].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o,n}));