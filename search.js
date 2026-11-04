function Sr(){const q=gi("sq").value.trim().toLowerCase(),o=gi("sr");NR=[];if(!q){o.innerHTML="";return}
const m=[];DB.forEach((r,i)=>{if((r[0]+" "+r[15]).toLowerCase().includes(q))m.push(i)});
o.innerHTML=m.slice(0,6).map(i=>'<div class="li" onclick="PL('+i+')"><span>'+esc(DB[i][0])+' <span class="mu">'+DB[i][14]+'</span></span><span class="mu">'+DB[i][1]+' kcal</span></div>').join("")+(m.length?'':'<div class="mu" style="margin-top:8px">List mein nahi mila.</div>')+'<div class="f"><button style="width:100%" onclick="Net()">Internet se dhoondo</button></div>'}
function PL(i){const r=DB[i],g=r[13];AD={n:r[0],units:[{u:r[14],per:{k:r[1],p:r[2],m:r.slice(3,13)}},{u:"g",per:{k:r[1]/g,p:r[2]/g,m:r.slice(3,13).map(v=>v/g)}}]};AR()}
function PN(j){AD={n:NR[j].n,units:[{u:"g",per:NR[j].per}]};AR()}
function AR(){const e=gi("ad");e.hidden=false;e.innerHTML='<b>'+esc(AD.n)+'</b><div class="f"><input id="aq" type="number" step="any" inputmode="decimal" oninput="AP()"><select id="au" onchange="AU()">'+AD.units.map(u=>'<option>'+esc(u.u)+'</option>').join("")+'</select></div><div class="mu" id="ap" style="margin:8px 0"></div><div class="f"><button class="pri" style="flex:1" onclick="AO()">Add</button><button onclick="AX()">Cancel</button></div>';AU()}
function AU(){const u=AD.units[gi("au").selectedIndex];gi("aq").value=u.u==="g"?100:1;AP()}
function AP(){const u=AD.units[gi("au").selectedIndex],q=+gi("aq").value||0;gi("ap").textContent="Lagbhag "+ri(u.per.k*q)+" kcal, "+r1(u.per.p*q)+" g protein"}
function AX(){AD=null;gi("ad").hidden=true}
function AO(){const u=AD.units[gi("au").selectedIndex],q=+gi("aq").value;if(!(q>0)){toast("Quantity daalo");return}const n=AD.n;D().f.push({n:n,q:q,u:u.u,b:u.per,t:tm()});AX();gi("sq").value="";gi("sr").innerHTML="";fin(n+" add ho gaya")}
async function Net(){const q=gi("sq").value.trim();if(!q){toast("Pehle naam likho");return}
const o=gi("sr");o.innerHTML='<div class="mu" style="margin-top:8px">Dhoondh raha hoon...</div>';
try{const r=await fetch("https://api.nal.usda.gov/fdc/v1/foods/search?query="+encodeURIComponent(q)+"&pageSize=10&dataType=Foundation,SR%20Legacy,Survey%20(FNDDS)&api_key="+encodeURIComponent(S.key||"DEMO_KEY"));
if(!r.ok)throw new Error(r.status);const j=await r.json();
NR=(j.foods||[]).map(f=>{const v={};(f.foodNutrients||[]).forEach(n=>{v[n.nutrientId]=n.value});const g=id=>(v[id]||0)/100;return{n:f.description,per:{k:(v[1008]||v[2047]||v[2048]||0)/100,p:g(1003),m:[g(1005),g(1004),g(1079),g(1087),g(1089),g(1090),g(1095),g(1092),g(1178),g(1162)]}}});
o.innerHTML=NR.length?NR.map((x,i)=>'<div class="li" onclick="PN('+i+')"><span>'+esc(x.n)+'</span><span class="mu">'+ri(x.per.k*100)+' kcal/100g</span></div>').join(""):'<div class="mu" style="margin-top:8px">Kuch nahi mila. Doosra naam try karo (English mein).</div>'
}catch(e){o.innerHTML='<div class="mu" style="margin-top:8px">Internet se nahi aaya (net ya limit ka issue). Thodi der baad try karo, ya apna item khud add karo.</div>'}}
