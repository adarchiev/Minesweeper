(this.webpackJsonpchallenge_4=this.webpackJsonpchallenge_4||[]).push([[0],{35:function(e,t,n){"use strict";n.r(t);var r=n(1),i=(n(0),n(5)),o=n.n(i),s=n(2),A=n(11),a=n(12),c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4gkeDikH+jJ1tgAAAFVJREFUSMftlLENACAMw0DiXK7jI3YWDmjKDSweAn3ASlun9rGzgNOE4t4AwsSWD9wwzRPm1+I3zS1wrgonDLraaKBC7lrwN5R5Qtl/Ke+h7MWHV3oAnahI05QVd5EAAAAASUVORK5CYII=";function u(){var e=Object(A.a)(["\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 10px;\n  text-align: center;\n  background-color:BADA55;\n"]);return u=function(){return e},e}function l(){var e=Object(A.a)(["\n  border: 1px solid black; \n  width:28px;\n  line-height:28px;\n  height:28px;\n"]);return l=function(){return e},e}var d=a.a.td(l()),v=a.a.div(u());var b=function(e){var t=Object(s.b)(),n=Object(s.c)((function(t){return t.board.squares[e.pos[0]][e.pos[1]]})),i=(n.pic,n.isDiscovered),o=n.marked,A=c,a=e.value.value,u="";return i?(console.log("here"),9===a?A="data:image/png;base64,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":a<9&&a>0?(u=a,A=""):0===a&&(A="")):o&&(console.log(444),A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4QkbEhMk2YoCNQAAAN9JREFUWMPtlL0OAUEURs8sEZGsBIVW/IVKLV5At41CZZ5A4VW8wT6ChFqjodMpRFYodIJEIfHTbG2HrAi5J5nu5ubMvfMNCIJgxgg4AJlvCdz90w67cdSwrpuNJ/o73Tutd9sicAWqQA2oAAUgCZyBFTAHxrmBOwtqrAwFOmU75U6bLQ6XyysXTOcG7v5ZgWW6AvXehG9BBda3X7cI/I6AUuojAqb/gNqcj9uYFZkAeT++J2AJDP3cA5SAJtAA6mFOuAMsADxHW56jAxt7jrY9R6vQBSQFIiACfycgCMIDgjMttbCLawIAAAAASUVORK5CYII="),Object(r.jsx)(d,{onClick:function(){return t(function(){return{type:"OPEN_CELL",payload:{discovered:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0]}}}(e.pos))},onContextMenu:function(){t(function(){return{type:"FLAG_BOMB",payload:{discovered:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0]}}}(e.pos))},style:{background:"url(".concat(A,")")},value:a,id:e.pos,children:Object(r.jsx)(v,{children:u})})};var h=function(){var e=Object(s.c)((function(e){return null!==e.board?e.board.squares:[]}));return Object(r.jsx)("table",{border:"0",className:"board",children:Object(r.jsx)("tbody",{children:e.map((function(e,t){return Object(r.jsx)("tr",{children:e.map((function(e,n){return Object(r.jsx)(b,{pos:[t,n],value:e},t+n)}))},t)}))})})};var g=function(){var e=Object(s.b)(),t=5,n=3;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("select",{name:"level",onChange:function(e){t=e.target.value.split(",")[0],n=e.target.value.split(",")[1]},children:[Object(r.jsx)("option",{value:[5,3],children:"easy"}),Object(r.jsx)("option",{value:[10,25],children:"medium"}),Object(r.jsx)("option",{value:[20,150],children:"hard"})]}),Object(r.jsx)("button",{onClick:function(){return e(function(e,t){return{type:"NEW_GAME",payload:{size:e,bombs:t}}}(t,n))},children:"Restart"})]})};var j=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("header",{children:Object(r.jsxs)("div",{style:{margin:"0 auto"},children:[Object(r.jsx)(g,{}),Object(r.jsx)(h,{})]})})})},O=n(6),m=n(3),f=n(7),p=n(8),I=function(){function e(t,n){Object(f.a)(this,e),this.position=[t,n],this.value=0,this.isDiscovered=!1,this.marked=!1,this.pic=c}return Object(p.a)(e,[{key:"getAround",value:function(e,t){for(var n=[],r=this.position[0],i=this.position[1],o=0===r?r:r-1;o<=(r===e-1?r:r+1);o++)for(var s=0===i?i:i-1;s<=(i===t-1?i:i+1);s++)n.push([o,s]);return n}},{key:"discover",value:function(e){if(!this.isDiscovered){if(this.isDiscovered=!0,e.numDiscovered++,0===this.value)this.getAround(e.size,e.size).forEach((function(t){return e.squares[t[0]][t[1]].discover(e)}));if(e.numDiscovered===e.size*e.size-e.numBombs)return!0}return!1}},{key:"toggleMarkFlagOrDoubt",value:function(){this.marked=!this.marked}},{key:"clone",value:function(){return Object.assign(Object.create(Object.getPrototypeOf(this)),this)}}]),e}();function E(e,t){for(var n=[],r=0;r<e;r++){for(var i=[],o=0;o<t;o++)i[o]=new I(r,o);n[r]=i}return n}var w=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;Object(f.a)(this,e),this.size=t,this.numBombs=n,this.squares=r||E(t,t),this.numDiscovered=i}return Object(p.a)(e,[{key:"putBombs",value:function(){for(var e=this,t=[],n=0;n<this.numBombs;n++)for(var r=!1;!r;){var i=parseInt(Math.random()*this.size,10),o=parseInt(Math.random()*this.size,10),s=this.squares[i][o];9!==s.value&&(s.value=9,t.push(s),r=!0)}t.forEach((function(t){for(var n=t.getAround(e.size,e.size),r=0;r<n.length;r++){var i=e.squares[n[r][0]][n[r][1]];9!==i.value&&i.value++}}))}},{key:"openBoard",value:function(){console.log("open");for(var e=0;e<this.size;e++)for(var t=0;t<this.size;t++)this.squares[e][t].isDiscovered=!0}},{key:"clone",value:function(){for(var t=[],n=0;n<this.size;n++){for(var r=[],i=0;i<this.size;i++)r[i]=this.squares[n][i].clone();t[n]=r}return new e(this.size,this.numBombs,t,this.numDiscovered)}},{key:"checkWin",value:function(){console.log("open",this.numBombs,this.numDiscovered),this.size*this.size-this.numDiscovered===this.numBombs&&alert("YOU WIN")}}]),e}(),B={board:null},y=Object(O.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0,n=null,r=null;switch(t.type){case"NEW_GAME":return(n=new w(t.payload.size,t.payload.bombs)).putBombs(),Object(m.a)(Object(m.a)({},e),{},{board:n});case"OPEN_CELL":n=e.board.clone();var i=t.payload.discovered;return 9===(r=n.squares[i[0]][i[1]]).value?(r.isDiscovered=!0,alert("You loose"),n.openBoard(),Object(m.a)(Object(m.a)({},e),{},{board:n})):(r.discover(n),n.checkWin(),Object(m.a)(Object(m.a)({},e),{},{board:n}));case"FLAG_BOMB":return(r=(n=e.board.clone()).squares[t.payload.discovered[0]][t.payload.discovered[1]]).toggleMarkFlagOrDoubt(),n.checkWin(),Object(m.a)(Object(m.a)({},e),{},{board:n});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());o.a.render(Object(r.jsx)(s.a,{store:y,children:Object(r.jsx)(j,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.96d5e6cb.chunk.js.map