(this.webpackJsonpreact_autocomplete=this.webpackJsonpreact_autocomplete||[]).push([[0],{14:function(e,a,r){},16:function(e,a,r){"use strict";r.r(a);var n=r(4),t=r.n(n),s=(r(11),r(2)),m=r(1),i=r.n(m),o=r(5),l=r(6),d=r.n(l),u=(r(14),r(0)),c=function(e){var a=e.words,r=e.placeholder,n=e.delay,t=e.save,i=Object(m.useState)([]),l=Object(s.a)(i,2),c=l[0],b=l[1],v=Object(m.useState)(!0),h=Object(s.a)(v,2),k=h[0],f=h[1],N=Object(m.useState)(-1),j=Object(s.a)(N,2),x=j[0],g=j[1],H=Object(m.useState)(-1),p=Object(s.a)(H,2),O=p[0],w=p[1],L=Object(m.useState)(0),C=Object(s.a)(L,2),J=C[0],P=C[1],B=Object(m.useRef)(null),E=Object(m.useRef)(null),M=Object(m.useRef)(null),S=function(e){if(B.current&&E.current){var a=36*(e-6.333333333333334);e===c.length-1?P(a>0?36-a:0):P(a>0?-a:0)}};Object(m.useEffect)((function(){function e(e){B.current&&!B.current.contains(e.target)&&f(!0)}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[B]);var y=Object(m.useCallback)(Object(o.debounce)((function(){var e;if(null!==M&&void 0!==M&&null!==(e=M.current)&&void 0!==e&&e.value){var r=M.current.value.toLowerCase();b(a.filter((function(e){return e.toLowerCase().includes(r)})))}else b([]);S(-1),g(-1),f(!1)}),n),[]),D=Object(m.useCallback)((function(){f(!0),y()}),[]),A=Object(m.useCallback)((function(e){var a;switch(e.key){case"ArrowDown":x<c.length-1?(S(x+1),g((function(e){return e+1}))):(S(0),g(0));break;case"ArrowUp":x>0?(S(x-1),g((function(e){return e-1}))):(S(c.length-1),g(c.length-1));break;case"Enter":null!==M&&void 0!==M&&null!==(a=M.current)&&void 0!==a&&a.value&&(-1===x?c.includes(M.current.value)&&(t(M.current.value),M.current.value=""):(M.current.value=c[x],t(c[x]),S(-1),g(-1))),f(!0)}}),[x,g,t,f,M,S]);return Object(u.jsxs)("div",{className:"dropdown is-active",children:[Object(u.jsx)("div",{className:"dropdown-trigger",children:Object(u.jsx)("input",{type:"text",placeholder:r,className:"input",ref:M,onChange:function(){return D()},onKeyDown:A,onClick:function(){return f(!1)}})}),Object(u.jsxs)("div",{className:"dropdown-menu",role:"menu",children:[!k&&!!c.length&&Object(u.jsx)("div",{className:"dropdown-wrapper",children:Object(u.jsx)("div",{className:"dropdown-content",ref:B,style:{maxHeight:"".concat(300,"px")},children:c.map((function(e,a){return Object(u.jsx)("button",{type:"button",ref:x===a?E:null,onMouseOver:function(){w(x),g(a)},onMouseLeave:function(){g(O)},onClick:function(){M.current&&(M.current.value=c[x],t(c[x]),g(-1),f(!0))},onKeyDown:function(){},"aria-label":c[a],onFocus:function(){return g(a)},className:d()("dropdown-item has-text-link",{selected:x===a},{"is-link":x!==a}),style:{top:"".concat(J,"px"),height:"".concat(36,"px")},children:e},e)}))})}),!k&&!c.length&&Object(u.jsx)("div",{className:"dropdown-content",children:Object(u.jsx)("div",{children:Object(u.jsx)("p",{children:"No matching suggestions"})})})]})]})},b=[{name:"Carolus Haverbeke",sex:"m",born:1832,died:1905,fatherName:"Carel Haverbeke",motherName:"Maria van Brussel",slug:"carolus-haverbeke-1832"},{name:"Emma de Milliano",sex:"f",born:1876,died:1956,fatherName:"Petrus de Milliano",motherName:"Sophia van Damme",slug:"emma-de-milliano-1876"},{name:"Maria de Rycke",sex:"f",born:1683,died:1724,fatherName:"Frederik de Rycke",motherName:"Laurentia van Vlaenderen",slug:"maria-de-rycke-1683"},{name:"Jan van Brussel",sex:"m",born:1714,died:1748,fatherName:"Jacobus van Brussel",motherName:"Joanna van Rooten",slug:"jan-van-brussel-1714"},{name:"Philibert Haverbeke",sex:"m",born:1907,died:1997,fatherName:"Emile Haverbeke",motherName:"Emma de Milliano",slug:"philibert-haverbeke-1907"},{name:"Jan Frans van Brussel",sex:"m",born:1761,died:1833,fatherName:"Jacobus Bernardus van Brussel",motherName:null,slug:"jan-frans-van-brussel-1761"},{name:"Pauwels van Haverbeke",sex:"m",born:1535,died:1582,fatherName:"N. van Haverbeke",motherName:null,slug:"pauwels-van-haverbeke-1535"},{name:"Clara Aernoudts",sex:"f",born:1918,died:2012,fatherName:"Henry Aernoudts",motherName:"Sidonie Coene",slug:"clara-aernoudts-1918"},{name:"Emile Haverbeke",sex:"m",born:1877,died:1968,fatherName:"Carolus Haverbeke",motherName:"Maria Sturm",slug:"emile-haverbeke-1877"},{name:"Lieven de Causmaecker",sex:"m",born:1696,died:1724,fatherName:"Carel de Causmaecker",motherName:"Joanna Claes",slug:"lieven-de-causmaecker-1696"},{name:"Pieter Haverbeke",sex:"m",born:1602,died:1642,fatherName:"Lieven van Haverbeke",motherName:null,slug:"pieter-haverbeke-1602"},{name:"Livina Haverbeke",sex:"f",born:1692,died:1743,fatherName:"Daniel Haverbeke",motherName:"Joanna de Pape",slug:"livina-haverbeke-1692"},{name:"Pieter Bernard Haverbeke",sex:"m",born:1695,died:1762,fatherName:"Willem Haverbeke",motherName:"Petronella Wauters",slug:"pieter-bernard-haverbeke-1695"},{name:"Lieven van Haverbeke",sex:"m",born:1570,died:1636,fatherName:"Pauwels van Haverbeke",motherName:"Lievijne Jans",slug:"lieven-van-haverbeke-1570"},{name:"Joanna de Causmaecker",sex:"f",born:1762,died:1807,fatherName:"Bernardus de Causmaecker",motherName:null,slug:"joanna-de-causmaecker-1762"},{name:"Willem Haverbeke",sex:"m",born:1668,died:1731,fatherName:"Lieven Haverbeke",motherName:"Elisabeth Hercke",slug:"willem-haverbeke-1668"},{name:"Pieter Antone Haverbeke",sex:"m",born:1753,died:1798,fatherName:"Jan Francies Haverbeke",motherName:"Petronella de Decker",slug:"pieter-antone-haverbeke-1753"},{name:"Maria van Brussel",sex:"f",born:1801,died:1834,fatherName:"Jan Frans van Brussel",motherName:"Joanna de Causmaecker",slug:"maria-van-brussel-1801"},{name:"Angela Haverbeke",sex:"f",born:1728,died:1734,fatherName:"Pieter Bernard Haverbeke",motherName:"Livina de Vrieze",slug:"angela-haverbeke-1728"},{name:"Elisabeth Haverbeke",sex:"f",born:1711,died:1754,fatherName:"Jan Haverbeke",motherName:"Maria de Rycke",slug:"elisabeth-haverbeke-1711"},{name:"Lievijne Jans",sex:"f",born:1542,died:1582,fatherName:null,motherName:null,slug:"lievijne-jans-1542"},{name:"Bernardus de Causmaecker",sex:"m",born:1721,died:1789,fatherName:"Lieven de Causmaecker",motherName:"Livina Haverbeke",slug:"bernardus-de-causmaecker-1721"},{name:"Jacoba Lammens",sex:"f",born:1699,died:1740,fatherName:"Lieven Lammens",motherName:"Livina de Vrieze",slug:"jacoba-lammens-1699"},{name:"Pieter de Decker",sex:"m",born:1705,died:1780,fatherName:"Joos de Decker",motherName:"Petronella van de Steene",slug:"pieter-de-decker-1705"},{name:"Joanna de Pape",sex:"f",born:1654,died:1723,fatherName:"Vincent de Pape",motherName:"Petronella Wauters",slug:"joanna-de-pape-1654"},{name:"Daniel Haverbeke",sex:"m",born:1652,died:1723,fatherName:"Lieven Haverbeke",motherName:"Elisabeth Hercke",slug:"daniel-haverbeke-1652"},{name:"Lieven Haverbeke",sex:"m",born:1631,died:1676,fatherName:"Pieter Haverbeke",motherName:"Anna van Hecke",slug:"lieven-haverbeke-1631"},{name:"Martina de Pape",sex:"f",born:1666,died:1727,fatherName:"Vincent de Pape",motherName:"Petronella Wauters",slug:"martina-de-pape-1666"},{name:"Jan Francies Haverbeke",sex:"m",born:1725,died:1779,fatherName:"Pieter Bernard Haverbeke",motherName:"Livina de Vrieze",slug:"jan-francies-haverbeke-1725"},{name:"Maria Haverbeke",sex:"m",born:1905,died:1997,fatherName:"Emile Haverbeke",motherName:"Emma de Milliano",slug:"maria-haverbeke-1905"},{name:"Petronella de Decker",sex:"f",born:1731,died:1781,fatherName:"Pieter de Decker",motherName:"Livina Haverbeke",slug:"petronella-de-decker-1731"},{name:"Livina Sierens",sex:"f",born:1761,died:1826,fatherName:"Jan Sierens",motherName:"Maria van Waes",slug:"livina-sierens-1761"},{name:"Laurentia Haverbeke",sex:"f",born:1710,died:1786,fatherName:"Jan Haverbeke",motherName:"Maria de Rycke",slug:"laurentia-haverbeke-1710"},{name:"Carel Haverbeke",sex:"m",born:1796,died:1837,fatherName:"Pieter Antone Haverbeke",motherName:"Livina Sierens",slug:"carel-haverbeke-1796"},{name:"Elisabeth Hercke",sex:"f",born:1632,died:1674,fatherName:"Willem Hercke",motherName:"Margriet de Brabander",slug:"elisabeth-hercke-1632"},{name:"Jan Haverbeke",sex:"m",born:1671,died:1731,fatherName:"Lieven Haverbeke",motherName:"Elisabeth Hercke",slug:"jan-haverbeke-1671"},{name:"Anna van Hecke",sex:"f",born:1607,died:1670,fatherName:"Paschasius van Hecke",motherName:"Martijntken Beelaert",slug:"anna-van-hecke-1607"},{name:"Maria Sturm",sex:"f",born:1835,died:1917,fatherName:"Charles Sturm",motherName:"Seraphina Spelier",slug:"maria-sturm-1835"},{name:"Jacobus Bernardus van Brussel",sex:"m",born:1736,died:1809,fatherName:"Jan van Brussel",motherName:"Elisabeth Haverbeke",slug:"jacobus-bernardus-van-brussel-1736"}],v=function(){var e=Object(m.useState)("Carolus Haverbeke"),a=Object(s.a)(e,2),r=a[0],n=a[1],t=i.a.useState({records:[{words:b.map((function(e){return e.name}))}]}),o=Object(s.a)(t,1)[0].records[0].words,l=b.find((function(e){return e.name===r}));return Object(u.jsxs)("main",{className:"section",children:[Object(u.jsx)("h1",{className:"title",children:"".concat(null===l||void 0===l?void 0:l.name," (").concat(null===l||void 0===l?void 0:l.born," = ").concat(null===l||void 0===l?void 0:l.died,")")}),Object(u.jsx)(c,{words:o,placeholder:"Enter search",delay:400,save:function(e){n(e)}})]})};t.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.5f84d50e.chunk.js.map