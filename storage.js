const KEY="fittrack_v1";let S=null,AD=null,NR=[],tto=0;
try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){}
if(!S||!S.days)S={t:{k:2300,p:130,w:3000,s:7},days:{}};
if(!S.t)S.t={k:2300,p:130,w:3000,s:7};
Object.keys(S.days).forEach(k=>{const d=S.days[k];if(!d||typeof d!=="object"){delete S.days[k];return}
if(!Array.isArray(d.f))d.f=[];if(!Array.isArray(d.wl))d.wl=[];if(!d.d)d.d={};if(!d.n)d.n={};d.w=+d.w||0;d.s=+d.s||0;
d.f=d.f.filter(x=>x&&x.n).map(x=>{if(!x.b||!Array.isArray(x.b.m)){const r=FM[x.n];x.q=1;x.u="serving";x.b={k:+(x.b?x.b.k:x.k)||0,p:+(x.b?x.b.p:x.p)||0,m:r?r.slice(3,13):[]}}
while(x.b.m.length<10)x.b.m.push(0);x.b.k=+x.b.k||0;x.b.p=+x.b.p||0;x.q=+x.q>0?+x.q:1;x.u=x.u||"serving";x.t=x.t||"";return x})});
function sv(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
const gi=i=>document.getElementById(i),r1=v=>Math.round(v*10)/10,ri=Math.round;
const ds=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
function D(k){k=k||ds(new Date());const d=S.days[k]||(S.days[k]={f:[],w:0,s:0,d:{}});if(!d.wl)d.wl=[];if(!d.n)d.n={};return d}
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const tm=()=>{const n=new Date();return String(n.getHours()).padStart(2,"0")+":"+String(n.getMinutes()).padStart(2,"0")};
const pc=(v,t)=>Math.min(100,Math.round(v/t*100));
function tot(f){const a={k:0,p:0,m:new Array(10).fill(0)};f.forEach(x=>{a.k+=x.b.k*x.q;a.p+=x.b.p*x.q;x.b.m.forEach((v,i)=>{a.m[i]+=v*x.q})});return a}
