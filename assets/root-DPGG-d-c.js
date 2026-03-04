import{w as r,q as i,p as t,M as c,L as l,S as p,t as h,O as u,i as d}from"./chunk-EPOLDU6W-CBEC0vNl.js";const x=()=>[{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"}];function f({children:e}){return t.jsxs("html",{lang:"en",children:[t.jsxs("head",{children:[t.jsx("meta",{charSet:"utf-8"}),t.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),t.jsx(c,{}),t.jsx(l,{}),t.jsx("script",{dangerouslySetInnerHTML:{__html:`
              (function() {
                var q = window.location.search;
                if (q && q !== '?') {
                  var l = window.location;
                  var pathname = "/" + q.slice(1).replace(/~and~/g, '&');
                  try {
                    window.history.replaceState(null, '', l.pathname + pathname.replace(/\\?/g, '') + l.hash);
                  } catch(e) {}
                }
              })();
            `}})]}),t.jsxs("body",{children:[e,t.jsx(p,{}),t.jsx(h,{})]})]})}const j=r(function(){return t.jsx(u,{})}),w=i(function({error:s}){let a="Oops!",n="An unexpected error occurred.",o;return d(s)&&(a=s.status===404?"404":"Error",n=s.status===404?"The requested page could not be found.":s.statusText||n),t.jsxs("main",{className:"pt-16 p-4 container mx-auto",children:[t.jsx("h1",{children:a}),t.jsx("p",{children:n}),o]})});export{w as ErrorBoundary,f as Layout,j as default,x as links};
