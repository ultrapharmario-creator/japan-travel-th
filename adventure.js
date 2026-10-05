'use strict';
const missions=[
 {title:'เลือกมื้ออร่อย',goal:'คุณต้องการซื้อข้าวกล่องที่เลือกไว้ บอกพนักงานอย่างไร?',npc:36,answer:42,options:[42,44,47],tip:'この (kono) หมายถึง “นี้” ชี้สินค้าพร้อมพูดได้เลย',item:'🍱'},
 {title:'อุ่นข้าวก่อนกิน',goal:'คุณอยากให้พนักงานอุ่นข้าวกล่องให้ ตอบรับอย่างสุภาพ',npc:37,answer:43,options:[43,44,46],tip:'温める (atatameru) คืออุ่นอาหาร ตอบ はい、お願いします เพื่อขอให้ช่วยอุ่น',item:'♨️'},
 {title:'ใช้ถุงของเราเอง',goal:'คุณพกถุงผ้ามาด้วย ต้องการปฏิเสธถุงจากร้าน',npc:38,answer:44,options:[45,44,42],tip:'いりません (irimasen) หมายถึง “ไม่ต้องการ” ใช้ปฏิเสธถุงอย่างสุภาพ',item:'🛍️'},
 {title:'ขอตะเกียบ',goal:'คุณจะกินคนเดียว ขอตะเกียบหนึ่งคู่',npc:39,answer:45,options:[47,43,45],tip:'一膳 (ichizen) ใช้นับตะเกียบหนึ่งคู่',item:'🥢'},
 {title:'จ่ายเงิน',goal:'คุณต้องการชำระด้วยบัตร บอกวิธีจ่ายเงิน',npc:40,answer:46,options:[46,42,44],tip:'カードで (kaado de) คือ “ด้วยบัตร” ร้านและบัตรแต่ละประเภทอาจรองรับต่างกัน',item:'💳'},
 {title:'รับใบเสร็จแล้วออกเดินทาง',goal:'คุณต้องการเก็บใบเสร็จไว้ ขอใบเสร็จจากพนักงาน',npc:41,answer:47,options:[43,45,47],tip:'レシート (reshiito) คือใบเสร็จ อย่าลืมขอบคุณก่อนออกจากร้าน!',item:'🧾'}
];
let adventure=null;
function gameBest(){const n=read('tabi-konbini-best',0);return typeof n==='number'?n:0}
function initAdventure(){
 $('#adventure').innerHTML=`<div class="game-intro"><div class="eyebrow">JAPAN ADVENTURE · STAGE 01</div><h2>ภารกิจแรก: แวะร้านสะดวกซื้อ</h2><div class="konbini-shop" aria-hidden="true"><div class="shop-sign">TAB I MART <span>24 HOURS</span></div><div class="shop-window">🍱 🥤 🍙<br>🥪 🍵 🍫</div><div class="shop-door">🏪<br>いらっしゃいませ</div></div><p>ซื้อข้าวกล่อง อุ่นอาหาร ขอถุงและตะเกียบ แล้วจ่ายเงิน<br>เลือกคำตอบภาษาญี่ปุ่นให้ตรงกับภารกิจ 6 ด่าน</p><div class="game-rules">✦ ผ่านครั้งแรกได้ 100 คะแนนต่อด่าน<br>💡 ดูคำแปลได้ ลดคะแนนด่านนั้น 20 คะแนน<br>↻ ตอบผิดลองใหม่ได้ ลดคะแนนครั้งละ 20 คะแนน</div><p>สถิติดีที่สุด: ${gameBest()} / 600</p><button class="primary" id="adventure-start">เข้าร้าน เริ่มภารกิจ →</button><button class="answer" id="konbini-learn">ดูประโยคร้านสะดวกซื้อก่อน</button></div>`;
 $('#adventure-start').addEventListener('click',startAdventure);
 $('#konbini-learn').addEventListener('click',()=>{setMode('learn');document.querySelector('[data-category="konbini"]').click();$('#search').value='';render()});
}
function startAdventure(){adventure={step:0,score:0,penalty:0,hint:false,done:false};renderAdventure()}
function renderAdventure(){const m=missions[adventure.step],npc=phrases[m.npc];
 $('#adventure').innerHTML=`<div class="game-board"><div class="quiz-meta"><span>🏪 ร้านสะดวกซื้อ · ด่าน ${adventure.step+1}/6</span><strong>${adventure.score} คะแนน</strong></div><div class="progress"><span style="width:${adventure.step/6*100}%"></span></div><h2>${m.item} ${m.title}</h2><p class="mission-goal">${m.goal}</p><div class="npc-bubble"><span class="badge">พนักงานพูด</span><p class="jp" lang="ja">${npc.jp}</p><p class="romaji">${npc.romaji}</p><p>${npc.reading}</p><p class="game-translation" hidden>${npc.meaning}</p><button class="listen" id="npc-listen">◖)) ฟังพนักงาน</button></div><p>คุณจะตอบว่าอะไร?</p><div class="answers">${shuffle(m.options).map(id=>{const p=phrases[id];return `<button class="answer game-answer" data-response="${id}"><span lang="ja">${p.jp}</span><small>${p.romaji}<br>${p.reading}</small><span class="game-translation" hidden>${p.meaning}</span></button>`}).join('')}</div><button class="hint-button" id="game-hint">💡 ดูคำแปล (−20 คะแนน)</button><div id="game-feedback" role="status" aria-live="polite"></div><button class="primary" id="game-next" hidden>${adventure.step===5?'รับผลภารกิจ':'ไปด่านถัดไป'} →</button><button class="hint-button" id="game-reset">เริ่มภารกิจใหม่</button></div>`;
 $('#npc-listen').addEventListener('click',()=>speak(npc.jp));
 document.querySelectorAll('[data-response]').forEach(b=>b.addEventListener('click',()=>respondAdventure(Number(b.dataset.response))));
 $('#game-hint').addEventListener('click',()=>{if(adventure.hint||adventure.done)return;adventure.hint=true;adventure.penalty+=20;document.querySelectorAll('.game-translation').forEach(x=>x.hidden=false);$('#game-hint').disabled=true;$('#game-hint').textContent='แสดงคำแปลแล้ว'});
 $('#game-next').addEventListener('click',()=>{adventure.step++;adventure.step===missions.length?finishAdventure():(adventure.penalty=0,adventure.hint=false,adventure.done=false,renderAdventure())});
 $('#game-reset').addEventListener('click',initAdventure);
}
function respondAdventure(id){if(adventure.done)return;const m=missions[adventure.step],p=phrases[id],button=document.querySelector(`[data-response="${id}"]`);
 if(id!==m.answer){adventure.penalty+=20;button.disabled=true;button.classList.add('wrong');$('#game-feedback').textContent=`ลองใหม่ได้! ประโยคนี้หมายถึง “${p.meaning}” ยังไม่ตรงกับภารกิจ (−20 คะแนน)`;return}
 adventure.done=true;const points=Math.max(0,100-adventure.penalty);adventure.score+=points;button.classList.add('correct');document.querySelectorAll('[data-response]').forEach(b=>b.disabled=true);$('#game-hint').disabled=true;
 $('#game-feedback').innerHTML=`<p>✓ สำเร็จ! +${points} คะแนน</p><p>${p.jp} • ${p.romaji}<br>${p.reading} • ${p.meaning}</p><p>${m.tip}</p><button class="listen" id="reply-listen">◖)) ฟังคำตอบของคุณ</button>`;
 $('#reply-listen').addEventListener('click',()=>speak(p.jp));$('#game-next').hidden=false;$('#game-next').focus();
}
function finishAdventure(){const best=Math.max(gameBest(),adventure.score);write('tabi-konbini-best',best);$('#adventure').innerHTML=`<div class="game-intro"><div class="eyebrow">STAGE 01 · COMPLETE</div><div class="game-trophy">${adventure.score>=500?'🏆':adventure.score>=300?'🌟':'🌸'}</div><h2>ซื้อของสำเร็จ พร้อมออกเที่ยว!</h2><div class="result-score">${adventure.score}<small> / 600</small></div><p>ผ่านครบ 6 สถานการณ์ร้านสะดวกซื้อแล้ว<br>สถิติดีที่สุด: ${best} / 600</p><p>ขอบคุณพนักงานด้วย ありがとうございます<br>Arigatou gozaimasu • อะริกาโต โกะไซมัส</p><button class="listen" id="thanks-listen">◖)) ฟังคำขอบคุณ</button><p><button class="primary" id="adventure-again">เล่นอีกครั้ง →</button></p><button class="answer" id="game-home">กลับหน้าภารกิจ</button></div>`;$('#adventure-again').addEventListener('click',startAdventure);$('#game-home').addEventListener('click',initAdventure);$('#thanks-listen').addEventListener('click',()=>speak(phrases[1].jp))}
