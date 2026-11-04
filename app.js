function go(v){document.querySelectorAll(".v").forEach(e=>{e.hidden=e.id!=="v-"+v});document.querySelectorAll("nav button").forEach(b=>b.classList.toggle("on",b.dataset.v===v));window.scrollTo(0,0)}
function toast(m){const e=gi("tt");e.textContent="\u2713 "+m;e.classList.add("show");clearTimeout(tto);tto=setTimeout(()=>e.classList.remove("show"),1800);if(navigator.vibrate)navigator.vibrate(25)}
function fin(m){sv();R();toast(m);const e=gi("sum");e.classList.remove("pop");void e.offsetWidth;e.classList.add("pop")}
function SL(){const t=S.t.w;let c=0;return WS.map(s=>{const a=Math.max(50,Math.round(t*s[1]/13/50)*50);c+=a;return{t:s[0],a:a,c:c}})}
function calc(){const d=D(),sl=SL(),nw=tm();let exp=0;sl.forEach(s=>{if(s.t<=nw)exp=s.c});return{d:d,sl:sl,nw:nw,behind:exp-d.w,ni:sl.findIndex(s=>s.c>d.w)}}
function tile(v,t,col,lbl,txt,sub){const dash=Math.min(1,v/t)*163.4;return '<div class="tl"><svg width="58" height="58" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="26" fill="none" stroke="var(--bd)" stroke-width="7"/><circle cx="32" cy="32" r="26" fill="none" stroke="'+col+'" stroke-width="7" stroke-linecap="round" stroke-dasharray="'+dash+' 163.4" transform="rotate(-90 32 32)"/></svg><div><b>'+txt+'</b><span>'+lbl+'</span><small>'+sub+'</small></div></div>'}
function R(){try{R0()}catch(e){showErr(e)}}
function R0(){
const c=calc(),d=c.d,t=S.t,T0=tot(d.f),ns=c.sl[c.ni],na=ns?ns.a:250,ms=T0.m;
gi("dt").textContent=new Date().toLocaleDateString("en-IN",{weekday:"short",day:"numeric",month:"short"});
gi("sum").innerHTML=tile(T0.k,t.k,"var(--ac)","Calories",ri(T0.k),"/ "+t.k+" kcal")+tile(T0.p,t.p,"var(--co)","Protein",ri(T0.p)+" g","/ "+t.p+" g")+tile(d.w,t.w,"var(--wa)","Paani",(d.w/1000).toFixed(2)+" L","/ "+(t.w/1000)+" L")+tile(d.s,t.s,"var(--am)","Neend",d.s+" h","/ "+t.s+" h");
gi("bn").innerHTML=(c.behind>=200&&d.w<t.w)?'<div class="al"><div><b>Paani peene ka time</b><br><span>'+c.behind+' ml peeche ho. Abhi tak '+d.w+' ml.</span></div><button class="pri" onclick="Wa('+na+')">+ '+na+' ml</button></div>':"";
let hb;
if(d.w>=t.w){hb='<div class="sub">Aaj ka target</div><div class="big">Pura ho gaya!</div><div class="sub">Shabaash, ab aaram se.</div>'}
else if(ns){const hm=ns.t.split(":").map(Number),nn=new Date(),mn=hm[0]*60+hm[1]-(nn.getHours()*60+nn.getMinutes());
const wh=mn<=0?"abhi pee lo":(mn<60?mn+" min mein":Math.floor(mn/60)+" ghante "+(mn%60)+" min mein");
hb='<div class="sub">Agla paani</div><div class="big">'+ns.a+' ml</div><div class="sub">'+ns.t+' baje ('+wh+')</div><button onclick="Wa('+ns.a+')">Pi liya, +'+ns.a+' ml</button>'}
else{hb='<div class="sub">Aaj ka baaki paani</div><div class="big">'+(t.w-d.w)+' ml</div><div class="sub">Dheere dheere pee lo</div><button onclick="Wa(250)">Pi liya, +250 ml</button>'}
gi("wn").innerHTML=hb;
gi("nu").innerHTML=NU.map((n,i)=>'<div class="row" style="margin-top:8px"><span>'+n[0]+'</span><span class="mu">'+r1(ms[i])+' / '+n[2]+' '+n[1]+'</span></div><div class="bar"><i style="width:'+pc(ms[i],n[2])+'%"></i></div>').join("");
const lo=[];for(let i=2;i<10;i++){const r=ms[i]/NU[i][2];if(r<1)lo.push([r,i])}
lo.sort((a,b)=>a[0]-b[0]);
gi("np").innerHTML=lo.length?lo.slice(0,3).map(z=>{const i=z[1],n=NU[i];const best=DB.slice(0,QN).sort((a,b)=>b[i+3]-a[i+3]).slice(0,3).map(x=>x[0]+" ("+x[i+3]+" "+n[1]+")").join(", ");return '<div class="li" style="display:block"><b>'+n[0]+'</b> <span class="mu">'+r1(n[2]-ms[i])+' '+n[1]+' baaki</span><div class="mu">Mil sakta hai: '+best+'</div></div>'}).join(""):'<div class="mu">Sab micronutrients ke targets pure ho gaye!</div>';
gi("fd").innerHTML=DB.slice(0,QN).map((x,i)=>'<button onclick="Q('+i+')">'+esc(x[0])+'<span>'+x[1]+' kcal, '+x[2]+' g</span></button>').join("");
gi("wl").innerHTML=d.wl.length?d.wl.map((x,i)=>'<div class="li"><span>'+x.t+'</span><span><input class="qi" type="number" inputmode="numeric" value="'+x.ml+'" onchange="We('+i+',this.value)"> ml <button class="x" onclick="Wx('+i+')" aria-label="Delete">x</button></span></div>').join(""):'<div class="mu" style="margin-top:8px">Abhi paani add nahi kiya.</div>';
gi("lg").innerHTML=d.f.length?d.f.map((x,i)=>'<div class="li"><div style="flex:1;min-width:0">'+esc(x.n)+'<div class="mu">'+x.t+', '+ri(x.b.k*x.q)+' kcal, '+r1(x.b.p*x.q)+' g protein</div></div><input class="qi" type="number" step="any" inputmode="decimal" value="'+r1(x.q)+'" onchange="Fe('+i+',this.value)"><span class="mu">'+esc(x.u)+'</span><button class="x" onclick="Fx('+i+')" aria-label="Delete">x</button></div>').join(""):'<div class="mu" style="margin-top:8px">Abhi kuch add nahi kiya.</div>';
const nx=SCH.findIndex(s=>s[0]>=c.nw&&!d.d[s[0]]);
gi("sc").innerHTML=SCH.map((s,i)=>'<div class="li'+(i===nx?' nx':'')+'" onclick="K(\''+s[0]+'\')"><span class="'+(d.d[s[0]]?'dn':'')+'">'+s[0]+'  '+esc(s[1])+'</span><span>'+(d.d[s[0]]?'done':(i===nx?'next':''))+'</span></div>').join("");
let h='<tr><th>Din</th><th>kcal</th><th>Protein</th><th>Paani</th><th>Neend</th></tr>';
for(let i=0;i<7;i++){const q=new Date();q.setDate(q.getDate()-i);const e=S.days[ds(q)],a=e?tot(e.f):null;
h+='<tr><td>'+q.toLocaleDateString("en-IN",{weekday:"short",day:"numeric"})+'</td><td>'+(e?ri(a.k):"-")+'</td><td>'+(e?ri(a.p):"-")+'</td><td>'+(e?(e.w/1000).toFixed(1)+" L":"-")+'</td><td>'+(e&&e.s?e.s+" h":"-")+'</td></tr>'}
gi("hs").innerHTML=h;
gi("nb").textContent=S.nt?"Notification on (band karne ke liye tap)":"Notification on karo";
if(document.activeElement.tagName!=="INPUT"){gi("tk").value=t.k;gi("tp").value=t.p;gi("tw").value=t.w;gi("ts").value=t.s;gi("sli").value=d.s||"";gi("ky").value=S.key||""}}
function Wa(ml,at){ml=+ml;if(!(ml>0&&ml<=3000)){toast("Sahi ml daalo");return}const d=D();d.wl.push({t:at||tm(),ml:ml});d.wl.sort((a,b)=>a.t<b.t?-1:a.t>b.t?1:0);d.w+=ml;fin(ml+" ml paani add ho gaya")}
function Wc(){const v=gi("wa").value,t=gi("wt").value;Wa(v,t||null);gi("wa").value="";gi("wt").value=""}
function Wx(i){const d=D(),e=d.wl.splice(i,1)[0];d.w=Math.max(0,d.w-e.ml);fin("Delete ho gaya")}
function We(i,v){v=+v;const d=D();if(!(v>0)){R();return}d.w=Math.max(0,d.w+v-d.wl[i].ml);d.wl[i].ml=v;fin("Update ho gaya")}
function Q(i){const r=DB[i];D().f.push({n:r[0],q:1,u:r[14],b:{k:r[1],p:r[2],m:r.slice(3,13)},t:tm()});fin(r[0]+" add ho gaya")}
function Fx(i){D().f.splice(i,1);fin("Delete ho gaya")}
function Fe(i,v){v=+v;if(!(v>0)){R();return}D().f[i].q=v;fin("Update ho gaya")}
function Cc(){const n=gi("cn").value.trim(),k=+gi("ck").value,p=+gi("cp").value||0;if(!n||!k){toast("Naam aur kcal daalo");return}D().f.push({n:n,q:1,u:"serving",b:{k:k,p:p,m:new Array(10).fill(0)},t:tm()});["cn","ck","cp"].forEach(i=>{gi(i).value=""});fin(n+" add ho gaya")}
function Sl(){const v=+gi("sli").value;if(!(v>=0&&v<=24)){toast("Sahi ghante daalo");return}D().s=v;fin("Neend save ho gayi")}
function K(t){const d=D();d.d[t]=!d.d[t];sv();R()}
function T(){const g=i=>+gi(i).value||0;S.t={k:g("tk")||2300,p:g("tp")||130,w:g("tw")||3000,s:g("ts")||7};sv();R()}
async function NT(){if(typeof Notification==="undefined"){toast("Is browser mein notification nahi hai");return}
if(S.nt){S.nt=false}else{let p=Notification.permission;if(p!=="granted"){try{p=await Notification.requestPermission()}catch(e){}}S.nt=p==="granted";if(!S.nt)toast("Notification allow nahi hui")}sv();R()}
function Nt(){if(!S.nt||typeof Notification==="undefined"||Notification.permission!=="granted")return;
const c=calc(),s=c.sl.filter(x=>x.t<=c.nw&&x.c>c.d.w+150&&!c.d.n[x.t]).pop();
if(s){c.d.n[s.t]=1;sv();try{new Notification("Paani peelo",{body:"Ab "+s.a+" ml pi lo. Abhi tak "+c.d.w+" ml.",tag:"water"})}catch(e){}}}
R();Nt();setInterval(function(){if(document.activeElement.tagName!=="INPUT")R();Nt()},60000);
