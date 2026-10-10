'use strict';
const checkoutRows=[
 ['百円','hyaku en','เฮียะคุ เอ็น','100 เยน','ひゃくえん'],
 ['二百円','nihyaku en','นิเฮียะคุ เอ็น','200 เยน','にひゃくえん'],
 ['三百円','sanbyaku en','ซัมเบียะคุ เอ็น','300 เยน','さんびゃくえん'],
 ['四百円','yonhyaku en','ยนเฮียะคุ เอ็น','400 เยน','よんひゃくえん'],
 ['五百円','gohyaku en','โกะเฮียะคุ เอ็น','500 เยน','ごひゃくえん'],
 ['六百円','roppyaku en','รปเปียะคุ เอ็น','600 เยน','ろっぴゃくえん'],
 ['七百円','nanahyaku en','นะนะเฮียะคุ เอ็น','700 เยน','ななひゃくえん'],
 ['八百円','happyaku en','ฮัปเปียะคุ เอ็น','800 เยน','はっぴゃくえん'],
 ['九百円','kyuuhyaku en','คิวเฮียะคุ เอ็น','900 เยน','きゅうひゃくえん'],
 ['千円','sen en','เซ็น เอ็น','1,000 เยน','せんえん'],
 ['三百五十円','sanbyaku gojuu en','ซัมเบียะคุ โกะจู เอ็น','350 เยน','さんびゃくごじゅうえん'],
 ['五百八十円','gohyaku hachijuu en','โกะเฮียะคุ ฮะจิจู เอ็น','580 เยน','ごひゃくはちじゅうえん'],
 ['千二百円','sen nihyaku en','เซ็น นิเฮียะคุ เอ็น','1,200 เยน','せんにひゃくえん'],
 ['三千円','sanzen en','ซันเซ็น เอ็น','3,000 เยน','さんぜんえん'],
 ['八千円','hassen en','ฮัสเซ็น เอ็น','8,000 เยน','はっせんえん'],
 ['合計で五百八十円です','Goukei de gohyaku hachijuu en desu','โกเค เดะ โกะเฮียะคุ ฮะจิจู เอ็น เดส','รวมทั้งหมด 580 เยน','ごうけいでごひゃくはちじゅうえんです'],
 ['現金でお願いします','Genkin de onegaishimasu','เก็นคิน เดะ โอะเนะไกชิมัส','ขอจ่ายด้วยเงินสด','げんきんでおねがいします'],
 ['ポイントカードはお持ちですか','Pointo kaado wa omochi desu ka','พอยน์โตะ คาโดะ วะ โอะโมะจิ เดสกะ','มีบัตรสะสมคะแนนไหม','ポイントカードはおもちですか'],
 ['持っていません','Motte imasen','มตเตะ อิมะเซ็น','ไม่มี / ไม่ได้พกมา','もっていません'],
 ['お釣りは四百二十円です','Otsuri wa yonhyaku nijuu en desu','โอะทสึริ วะ ยนเฮียะคุ นิจู เอ็น เดส','เงินทอน 420 เยน','おつりはよんひゃくにじゅうえんです'],
 ['レシートをお願いします','Reshiito o onegaishimasu','เระชีโตะ โอะ โอะเนะไกชิมัส','ขอใบเสร็จด้วย','レシートをおねがいします']
];
function checkoutPhrase(index){return phrases.find(p=>p.jp===checkoutRows[index][0])}
function checkoutCard(index){const p=checkoutPhrase(index);return `<article class="checkout-card"><strong>${p.meaning}</strong><p class="jp" lang="ja">${p.jp}</p><p class="romaji">${p.romaji}</p><p class="reading">${p.reading}</p><button class="listen" data-word="${p.id}">◖)) ฟัง (${p.romaji})</button></article>`}
function checkoutExample(index,art){return `<div class="checkout-example">${wordPicture(art,checkoutRows[index][3])}${checkoutCard(index)}</div>`}
function levelThreeMarkup(){return `<section id="level-three" class="lesson-level" hidden aria-labelledby="level-three-heading"><h2 id="level-three-heading">เลเวล 3 · ราคาและการจ่ายเงิน</h2><p class="lesson-lead">เริ่มจากฟังราคา แล้วฝึกจ่ายเงิน ตอบเรื่องบัตรสะสมคะแนน รับเงินทอน และขอใบเสร็จ</p>
<section class="pointing-box"><h3>1 · รู้จักหลักร้อยและหลักพัน</h3><p class="lesson-lead">円 (en) = เยน · 百 (hyaku) = ร้อย · 千 (sen) = พัน กดฟังแล้วพูดตามทีละราคา</p><div class="checkout-number-grid">${checkoutRows.slice(0,10).map((_,i)=>checkoutCard(i)).join('')}</div><p class="lesson-note">สามเสียงที่เปลี่ยนในหลักร้อย: 300 = さんびゃく (sanbyaku), 600 = ろっぴゃく (roppyaku), 800 = はっぴゃく (happyaku)<br>หลักพันที่ควรจำ: 3,000 = さんぜん (sanzen), 8,000 = はっせん (hassen)</p><div class="checkout-number-grid">${checkoutCard(13)}${checkoutCard(14)}</div></section>
<section class="pointing-box"><h3>2 · ประกอบราคา: ร้อย + สิบ + เยน</h3><div class="checkout-number-grid">${checkoutCard(10)}${checkoutCard(11)}${checkoutCard(12)}</div><p class="lesson-note">350 = 300 + 50 → sanbyaku + gojuu + en<br>580 = 500 + 80 → gohyaku + hachijuu + en<br>1,200 = 1,000 + 200 → sen + nihyaku + en</p><h4>พนักงานบอกยอดรวม</h4>${checkoutExample(15,'total')}<p class="lesson-note">合計 (goukei) = ยอดรวม · …円です (… en desu) = ราคา … เยน<br>ฟังตัวเลขให้จบก่อนเลือกวิธีจ่าย</p></section>
<section class="pointing-box"><h3>3 · เลือกจ่ายเงินสดหรือบัตร</h3><div class="checkout-number-grid">${checkoutExample(16,'cash')}<div class="checkout-example">${wordPicture('credit-card','จ่ายด้วยบัตร')}<article class="checkout-card"><strong>ขอจ่ายด้วยบัตร</strong><p class="jp" lang="ja">${phrases[46].jp}</p><p class="romaji">${phrases[46].romaji}</p><p class="reading">${phrases[46].reading}</p><button class="listen" data-word="46">◖)) ฟัง (${phrases[46].romaji})</button></article></div></div><p class="lesson-note">現金 (genkin) = เงินสด · カード (kaado) = บัตร<br>で (de) บอกวิธีที่ใช้จ่าย · お願いします (onegaishimasu) = รบกวนด้วย<br>ถ้ายังไม่แน่ใจว่ารับบัตรไหม ถาม カードで払えますか (Kaado de haraemasu ka) ได้</p><button class="listen" data-word="24">◖)) ฟังคำถามว่าจ่ายด้วยบัตรได้ไหม</button></section>
<section class="pointing-box"><h3>4 · มีบัตรสะสมคะแนนไหม?</h3>${checkoutExample(17,'loyalty-card')}<p class="lesson-lead">บัตรสะสมคะแนนกับบัตรที่ใช้จ่ายเงินเป็นคนละเรื่อง ถ้าไม่มีบัตรสะสมคะแนน ตอบสั้น ๆ ได้ว่า:</p>${checkoutCard(18)}<p class="lesson-note">持っていません (motte imasen) = ไม่มี / ไม่ได้พกมา ในบริบทนี้หมายถึงบัตรสะสมคะแนนที่พนักงานถาม</p></section>
<section class="pointing-box"><h3>5 · รับเงินทอนและขอใบเสร็จ</h3><div class="checkout-receipt" role="img" aria-label="ตัวอย่างยอดรวม 580 เยน จ่าย 1000 เยน เงินทอน 420 เยน"><span>ยอดรวม <strong>¥580</strong></span><span>จ่ายเงินสด <strong>¥1,000</strong></span><span>เงินทอน <strong>¥420</strong></span></div>${checkoutExample(19,'change')}<p class="lesson-note">お釣り (otsuri) = เงินทอน · は (wa) ยกเงินทอนเป็นหัวข้อ<br>ตัวอย่างนี้: 1,000 − 580 = 420 เยน</p>${checkoutExample(20,'receipt')}<p class="lesson-note">レシート (reshiito) = ใบเสร็จ · を (o) บอกสิ่งที่ขอ<br>จบการซื้อของด้วย ありがとうございます (Arigatou gozaimasu) เพื่อขอบคุณ</p><button class="listen" data-word="1">◖)) ฟังคำขอบคุณ</button></section>
<section class="pointing-box"><h3>แบบฝึกท้ายเลเวล 3 · 5 ข้อ</h3><p class="lesson-lead">ฟังราคา เลือกคำตอบในร้าน และลองคิดเงินทอน ภาพโจทย์ไม่มีตัวเลขหรือเครื่องหมายบอกเฉลย</p><div id="checkout-practice"><button class="primary" data-checkout-action="start">เริ่มแบบฝึกเลเวล 3 →</button></div></section></section>`}
const checkoutQuestions=[
 {audio:10,prompt:'ฟังราคา แล้วเลือกจำนวนเงินที่ได้ยิน',options:['350 เยน','580 เยน','1,200 เยน'],correct:0,explain:'三百 = 300 และ 五十 = 50 รวมเป็น 350 เยน',phrase:10},
 {audio:15,prompt:'ฟังพนักงาน แล้วเลือกยอดรวมที่ต้องจ่าย',options:['500 เยน','580 เยน','800 เยน'],correct:1,explain:'合計 บอกยอดรวม 五百八十円 = 580 เยน',phrase:15},
 {art:'cash',prompt:'คุณต้องการจ่ายด้วยเงินสด ควรพูดประโยคไหน?',options:[{checkout:16},{existing:46},{checkout:20}],correct:0,explain:'現金 คือเงินสด และ で บอกวิธีที่ใช้จ่าย',phrase:16},
 {art:'loyalty-card',prompt:'พนักงานถามว่ามีบัตรสะสมคะแนนไหม คุณไม่มี ควรตอบอย่างไร?',options:[{checkout:16},{checkout:18},{checkout:20}],correct:1,explain:'持っていません ใช้บอกว่าไม่มีหรือไม่ได้พกบัตรมา',phrase:18},
 {prompt:'ยอดรวม 580 เยน จ่ายเงินสด 1,000 เยน ควรได้เงินทอนเท่าไร?',options:['320 เยน','420 เยน','580 เยน'],correct:1,explain:'1,000 − 580 = 420 เยน · お釣り คือเงินทอน',phrase:19}
];
let checkoutPractice=null;
function startCheckoutPractice(){checkoutPractice={index:0,score:0,answered:false,selected:null};renderCheckoutPractice()}
function checkoutOption(option){if(typeof option==='string')return option;const p=option.existing!==undefined?phrases[option.existing]:checkoutPhrase(option.checkout);return `<span lang="ja">${p.jp}</span><br><small>${p.romaji}</small>`}
function renderCheckoutPractice(){const s=checkoutPractice,root=$('#checkout-practice');if(s.index===5){root.innerHTML=`<h4 id="checkout-focus" tabindex="-1">ฝึกครบแล้ว! ถูก ${s.score} / 5 ข้อ</h4><p>${s.score===5?'พร้อมลองจ่ายเงินในร้านแล้ว!':'ฟังราคาหรือทบทวนประโยคที่ยังสับสน แล้วลองใหม่ได้เลย'}</p><button class="primary" data-checkout-action="start">ฝึกอีกครั้ง →</button>`;$('#checkout-focus').focus();return}const q=checkoutQuestions[s.index],p=checkoutPhrase(q.phrase);root.innerHTML=`<p class="lesson-lead">ข้อ ${s.index+1} / 5 · ถูก ${s.score} ข้อ</p><h4 id="checkout-focus" tabindex="-1">${q.prompt}</h4>${q.art?wordPicture(q.art,q.prompt):''}${q.audio!==undefined?`<button class="listen" data-word="${checkoutPhrase(q.audio).id}">◖)) ฟังโจทย์</button>`:''}<div class="answers">${q.options.map((o,i)=>`<button class="answer ${s.answered?(i===q.correct?'correct':i===s.selected?'wrong':''):''}" data-checkout-answer="${i}" ${s.answered?'disabled':''}>${checkoutOption(o)}</button>`).join('')}</div><div role="status" aria-live="polite" aria-atomic="true">${s.answered?`<strong>${s.selected===q.correct?'✓ ถูกต้อง!':'ยังไม่ตรง ลองจำคำตอบนี้ไว้'}</strong><p>${q.explain}</p><p lang="ja">${p.jp}</p><p>${p.romaji}<br>${p.reading}<br>${p.meaning}</p><button class="listen" data-word="${p.id}">◖)) ฟังเฉลยซ้ำ</button>`:''}</div>${s.answered?`<button class="primary" data-checkout-action="next">${s.index===4?'ดูผลคะแนน':'ข้อถัดไป'} →</button>`:''}`;$('#checkout-focus').focus()}
function answerCheckoutPractice(index){const s=checkoutPractice;if(!s||s.answered||s.index>=5||!Number.isInteger(index)||index<0||index>2)return;s.answered=true;s.selected=index;if(index===checkoutQuestions[s.index].correct)s.score++;renderCheckoutPractice()}
function handleCheckoutPractice(e){const answer=e.target.closest('[data-checkout-answer]'),action=e.target.closest('[data-checkout-action]');if(answer)answerCheckoutPractice(Number(answer.dataset.checkoutAnswer));if(action){if(action.dataset.checkoutAction==='start')startCheckoutPractice();else if(checkoutPractice&&checkoutPractice.answered){checkoutPractice.index++;checkoutPractice.answered=false;checkoutPractice.selected=null;renderCheckoutPractice()}}}
