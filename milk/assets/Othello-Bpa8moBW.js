import{u as Y,r as p,j as t}from"./index-DdEHihTL.js";const L=()=>{const P=Y(),h=8,v=0,c=1,b=2,$=()=>{const e=Array(h).fill(null).map(()=>Array(h).fill(v));return e[3][3]=b,e[3][4]=c,e[4][3]=c,e[4][4]=b,e},[x,y]=p.useState($),[d,M]=p.useState(c),[w,S]=p.useState(!1),[f,C]=p.useState({black:2,white:2}),[u,j]=p.useState(new Set),[K,N]=p.useState(null),D=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]],O=(e,s)=>e>=0&&e<h&&s>=0&&s<h,z=(e,s,n,a,r)=>{const[l,g]=r,i=[];let o=s+l,m=n+g;for(;O(o,m);){const T=e[o][m];if(T===v)return[];if(T===a)return i;i.push([o,m]),o+=l,m+=g}return[]},E=(e,s,n,a)=>{if(e[s][n]!==v)return!1;for(const r of D)if(z(e,s,n,a,r).length>0)return!0;return!1},k=(e,s)=>{const n=[];for(let a=0;a<h;a++)for(let r=0;r<h;r++)E(e,a,r,s)&&n.push([a,r]);return n},A=(e,s,n,a)=>Math.sqrt(Math.pow(n-e,2)+Math.pow(a-s,2)),G=async(e,s)=>{if(w||!E(x,e,s,d)||u.size>0)return;N(`${e}-${s}`);const n=x.map(r=>[...r]);n[e][s]=d;const a=[];for(const r of D){const l=z(x,e,s,d,r);a.push(...l)}a.sort((r,l)=>{const g=A(e,s,r[0],r[1]),i=A(e,s,l[0],l[1]);return g-i}),setTimeout(()=>{N(null),y(n),a.forEach((r,l)=>{setTimeout(()=>{const g=`${r[0]}-${r[1]}`;j(i=>new Set([...i,g])),setTimeout(()=>{y(i=>{const o=i.map(m=>[...m]);return o[r[0]][r[1]]=d,o}),j(i=>{const o=new Set(i);return o.delete(g),o}),l===a.length-1&&setTimeout(()=>{const i=d===c?b:c,o=k(n,i),m=k(n,d);o.length>0?M(i):m.length>0||S(!0)},100)},500)},l*120)})},300)};p.useEffect(()=>{let e=0,s=0;for(let n=0;n<h;n++)for(let a=0;a<h;a++)x[n][a]===c?e++:x[n][a]===b&&s++;C({black:e,white:s})},[x]);const R=()=>{y($()),M(c),S(!1),C({black:2,white:2}),j(new Set),N(null)},V=k(x,d),B=()=>f.black>f.white?"BLACK":f.white>f.black?"WHITE":"TIE";return t.jsxs("div",{className:"flex flex-col items-center p-6 bg-gradient-to-br from-green-100 to-green-200 min-h-screen",children:[t.jsx("style",{jsx:!0,children:`
        @keyframes flipDisc {
          0% { transform: perspective(100px) rotateY(0deg) scale(1); }
          50% { transform: perspective(100px) rotateY(90deg) scale(1.1); }
          100% { transform: perspective(100px) rotateY(180deg) scale(1); }
        }

        @keyframes placeDisc {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }

        @keyframes validMoveGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        .flip-animation {
          animation: flipDisc 0.5s ease-in-out;
        }

        .place-animation {
          animation: placeDisc 0.3s ease-out;
        }

        .valid-move-glow {
          animation: validMoveGlow 2s ease-in-out infinite;
        }

        .disc-shadow {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2);
        }

        .board-cell {
          background: linear-gradient(145deg, #16a34a, #15803d);
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .board-cell:hover {
          background: linear-gradient(145deg, #22c55e, #16a34a);
        }
      `}),t.jsx("h1",{className:"text-4xl font-bold mb-6 text-green-800 drop-shadow-lg",children:"오셀로 (Othello)"}),t.jsxs("div",{className:"flex gap-8 mb-6 text-xl font-semibold",children:[t.jsxs("div",{className:`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${d===c?"bg-gray-800 text-white shadow-lg transform scale-105":"bg-white shadow-md"}`,children:[t.jsx("div",{className:"w-8 h-8 bg-black rounded-full disc-shadow"}),t.jsxs("span",{children:["흑: ",f.black]})]}),t.jsxs("div",{className:`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 ${d===b?"bg-gray-800 text-white shadow-lg transform scale-105":"bg-white shadow-md"}`,children:[t.jsx("div",{className:"w-8 h-8 bg-white border-2 border-gray-400 rounded-full disc-shadow"}),t.jsxs("span",{children:["백: ",f.white]})]})]}),t.jsx("div",{className:"mb-6 text-lg font-medium",children:w?t.jsxs("div",{className:"text-center bg-white rounded-xl p-6 shadow-lg",children:[t.jsx("div",{className:"text-3xl font-bold mb-3 text-green-800",children:"게임 종료!"}),t.jsx("div",{className:"text-xl",children:B()==="TIE"?"🤝 무승부!":B()==="BLACK"?"⚫ 흑돌 승리!":"⚪ 백돌 승리!"})]}):t.jsxs("div",{className:"flex items-center gap-3 bg-white rounded-xl px-6 py-3 shadow-lg",children:[t.jsx("div",{className:`w-6 h-6 rounded-full disc-shadow transition-all duration-300 ${d===c?"bg-black":"bg-white border-2 border-gray-400"}`}),t.jsxs("span",{className:"text-green-800",children:[d===c?"흑돌":"백돌","의 차례",u.size>0&&" (애니메이션 진행 중...)"]})]})}),t.jsx("div",{className:"grid grid-cols-8 gap-2 bg-green-900 p-4 rounded-2xl mb-6 shadow-2xl",children:x.map((e,s)=>e.map((n,a)=>{const r=`${s}-${a}`,l=V.some(([o,m])=>o===s&&m===a),g=u.has(r),i=K===r;return t.jsxs("button",{className:`w-14 h-14 board-cell border border-green-700 rounded-lg flex items-center justify-center transition-all duration-200 ${l&&!w&&u.size===0?"ring-2 ring-yellow-400 ring-opacity-70":""} ${u.size===0?"hover:scale-105":""}`,onClick:()=>G(s,a),disabled:w||u.size>0,children:[n===c&&t.jsx("div",{className:`w-12 h-12 bg-black rounded-full disc-shadow transition-all duration-200 ${g?"flip-animation":""} ${i?"place-animation":""}`}),n===b&&t.jsx("div",{className:`w-12 h-12 bg-white rounded-full disc-shadow border-2 border-gray-300 transition-all duration-200 ${g?"flip-animation":""} ${i?"place-animation":""}`}),n===v&&l&&!w&&u.size===0&&t.jsx("div",{className:"w-4 h-4 bg-yellow-400 rounded-full valid-move-glow shadow-lg"})]},r)}))}),t.jsxs("div",{className:"text-center text-sm text-gray-700 mb-6 max-w-md bg-white bg-opacity-80 rounded-lg p-4 shadow-md",children:[t.jsx("p",{className:"mb-2",children:"⭐ 노란 점이 표시된 위치에 돌을 놓을 수 있습니다."}),t.jsx("p",{children:"🎯 상대방의 돌을 양쪽에서 감싸면 그 돌들이 내 돌로 바뀝니다."})]}),t.jsx("button",{onClick:R,disabled:u.size>0,className:`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform ${u.size>0?"bg-gray-400 text-gray-600 cursor-not-allowed":"bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl"}`,children:"🎮 새 게임"}),t.jsx("button",{onClick:()=>P("/"),disabled:u.size>0,className:`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform ${u.size>0?"bg-gray-400 text-gray-600 cursor-not-allowed":"bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 shadow-lg hover:shadow-xl"}`,children:"홈으로"})]})};export{L as default};
