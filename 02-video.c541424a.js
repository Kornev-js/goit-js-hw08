var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,c=f||a||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,p=function(){return c.Date.now()};function y(t,e,n){var i,o,r,u,f,a,c=0,l=!1,y=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=i,r=o;return i=o=void 0,c=e,u=t.apply(r,n)}function h(t){return c=t,f=setTimeout(j,e),l?b(t):u}function T(t){var n=t-a;return void 0===a||n>=e||n<0||y&&t-c>=r}function j(){var t=p();if(T(t))return w(t);f=setTimeout(j,function(t){var n=e-(t-a);return y?d(n,r-(t-c)):n}(t))}function w(t){return f=void 0,g&&i?b(t):(i=o=void 0,u)}function O(){var t=p(),n=T(t);if(i=arguments,o=this,a=t,n){if(void 0===f)return h(a);if(y)return f=setTimeout(j,e),b(a)}return void 0===f&&(f=setTimeout(j,e)),u}return e=m(e)||0,v(n)&&(l=!!n.leading,r=(y="maxWait"in n)?s(m(n.maxWait)||0,e):r,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=a=o=f=void 0},O.flush=function(){return void 0===f?u:w(p())},O}function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var f=o.test(t);return f||r.test(t)?u(t.slice(2),f?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var i=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return v(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(t,e,{leading:i,maxWait:e,trailing:o})};const g=document.querySelector("iframe"),b=new Vimeo.Player(g);b.on("timeupdate",e((function(t){localStorage.setItem("videoplayer-current-time",JSON.stringify(t))}),1e3)),b.getVideoTitle().then((function(t){console.log("title:",t)}));const h=localStorage.getItem("videoplayer-current-time"),T=JSON.parse(h);b.setCurrentTime(T.seconds).then((function(t){})).catch((function(t){t.name}));
//# sourceMappingURL=02-video.c541424a.js.map
