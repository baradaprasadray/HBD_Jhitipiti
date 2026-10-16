'use strict';
const $ = s => document.querySelector(s);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Twinkling stars in every .stars layer
document.querySelectorAll('.stars').forEach(el => {
  for (let i = 0; i < 40; i++) {
    const s = document.createElement('i');
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*3}s`;
    el.appendChild(s);
  }
});

// Build a lotus (5 petals + glowing centre) inside an element
function makeLotus(el) {
  [-60, -30, 0, 30, 60].forEach((r, i) => {
    const p = document.createElement('div');
    p.className = 'p'; p.style.cssText = `--r:${r}deg;--d:${i*0.15}s`;
    el.appendChild(p);
  });
  const c = document.createElement('div'); c.className = 'c'; el.appendChild(c);
}
['introLotus','heroLotus','lotusEl','finalLotus'].forEach(id => makeLotus($('#'+id)));

// Floating emoji burst (hearts, confetti, sparkles)
function burst(chars, n = 24) {
  if (reduce) n = 6;
  for (let i = 0; i < n; i++) {
    const s = document.createElement('span');
    s.className = 'fx'; s.textContent = chars[Math.floor(Math.random()*chars.length)];
    s.style.cssText = `left:${Math.random()*100}vw;top:${60+Math.random()*40}vh;font-size:${18+Math.random()*22}px;--x:${(Math.random()-.5)*200}px`;
    document.body.appendChild(s); setTimeout(() => s.remove(), 2500);
  }
}
const HEARTS = ['💗','💖','💝','✨'], CONFETTI = ['🎉','🎊','✨','💙','💗'], PETALS = ['🌸','💮','🌸'];

// Opening surprise
$('#openBtn').onclick = () => {
  $('#gift').classList.add('open'); $('#introLotus').classList.add('open');
  burst(HEARTS, 40); $('#openBtn').disabled = true;
  setTimeout(() => { $('#intro').classList.add('gone'); $('#heroLotus').classList.add('open'); burst(CONFETTI, 30); typeLetter(); }, 1800);
  setTimeout(() => $('#intro').remove(), 3200);
};

// Smooth-scroll buttons and scroll-to-top
document.querySelectorAll('[data-go]').forEach(b => b.onclick = () => $(b.dataset.go).scrollIntoView({behavior: reduce ? 'auto' : 'smooth'}));
$('#top').onclick = () => scrollTo({top: 0, behavior: reduce ? 'auto' : 'smooth'});
addEventListener('scroll', () => $('#top').hidden = scrollY < 400);

// Letter typing animation, replay, copy
const LETTER = `💗🎂 Happy Birthday, My Dear Gulab Jamun! 🌸🥹❤️

Meri pyaari Gulab Jamun, 🫶🏻💖

Aaj ka din mere liye bhi bahut special hai, kyunki aaj ke din meri life ki ek bahut hi pyaari aur special person is duniya mein aayi thi. 🥹❤️ Shayad main apni feelings ko perfect words mein express nahi kar sakta, lekin mere dil mein tumhare liye jo jagah hai, woh mere liye bahut precious hai. 💗✨

Tum sirf meri life ka ek hissa nahi ho, tum meri first love ho, ek aisi feeling ho jise main kabhi words mein poori tarah explain nahi kar sakta. 🥹💞 Kabhi-kabhi koi insaan hamari life mein aata hai aur dheere-dheere hamari smile, hamari khushi aur hamare favourite thoughts ka hissa ban jaata hai. Mere liye woh special person tum ho. ❤️🫶🏻

Meri jaan, tumhare birthday par main bas yahi wish karta hoon ki tumhari life ek khilte hue lotus flower 🌸 ki tarah beautiful ho, raat ki navy blue sky 💙 ki tarah peaceful ho, aur tumhari favourite cheezon ki tarah tumhari life bhi khushiyon se bhari rahe. 🥹💖 Tumhare saare dreams poore hon, tumhe life mein bahut success mile aur tumhari aankhon mein kabhi aansu aayein bhi, toh woh sirf khushi ke hon. 🫂❤️

Main chahta hoon ki tum hamesha khush raho, apne dreams achieve karo aur life mein woh sab kuch pao jiske liye tumhara dil wish karta hai. ✨ Tum hamesha yaad rakhna ki tum bahut special ho aur tum duniya ki saari happiness, respect aur true love deserve karti ho. 🥹💗

Aur meri pyaari Gulab Jamun, apni cute si smile kabhi mat khona. 😊❤️ Tumhari smile mere liye bahut precious hai. Agar main tumhe birthday par duniya ka sabse beautiful gift de sakta, toh main tumhe ek aisi life deta jahan tumhare paas khush rehne ke hazaar reasons hon, tumhare dreams ek-ek karke poore hon aur tumhe kabhi apni worth par doubt na ho. 🎁🌷

Waise ek baat bolun? 😂🐊 Duniya ke saamne main chahe Kumbhira yani crocodile hoon, lekin tumhare saamne mera dil ek chhote se bachche jaisa ho jaata hai. 😂❤️ Tumne mujhe jo naam diya hai, woh bhi mere liye ek cute si memory hai. Aur is Kumbhira ke dil mein uski Gulab Jamun ke liye ek bahut hi special jagah hai. 🍬💞

Kabhi-kabhi main mazaak karta hoon, kabhi tumhe tang karta hoon, aur kabhi shayad apni feelings properly express nahi kar paata. Lekin mere dil mein tumhare liye jo care aur affection hai, woh mere liye bahut real hai. 🥹❤️ Main bas chahta hoon ki tum hamesha khush raho, apni life mein aage badho aur tumhare chehre par woh pyaari si smile bani rahe. 🫶🏻💖

Aaj tumhare birthday par Bhagwan se yahi prayer hai ki woh tumhe achhi health, endless happiness, success aur ek beautiful future de. 🌸🙏 Tumhari life mein itni khushiyan aayein ki tumhare saare worries chhote lagne lagein. Tumhara har naya din ek beautiful beginning ho aur tumhari har wish dheere-dheere reality ban jaaye. ✨💗

Happy Birthday once again, My Dear Gulab Jamun! 🎂🍬❤️

Tum hamesha aise hi cute rehna, smile karti rehna, apne dreams follow karna aur apni life ko beautiful banana. 🥹🌷 Tum meri story ka ek bahut hi special hissa ho, aur meri first love hone ki wajah se tumhari memories mere dil mein hamesha special rahengi. ❤️🫶🏻

Lots of love, care, thodi si pagalpan wali masti aur dil se nikli hui dher saari birthday wishes ke saath… 💌💖

Apka Kumbhira 🐊❤️`;
let typeTimer;
function typeLetter() {
  clearInterval(typeTimer);
  const chars = [...LETTER], out = $('#letterText'); let i = 0; out.textContent = '';
  typeTimer = setInterval(() => {
    out.textContent += chars.slice(i, i + 6).join(''); i += 6;
    if (i >= chars.length) clearInterval(typeTimer);
  }, reduce ? 1 : 35);
}
$('#reread').onclick = typeLetter;
$('#copyLetter').onclick = async () => {
  const note = $('#copyNote');
  try { await navigator.clipboard.writeText(LETTER); note.textContent = 'Letter copy ho gaya ✅'; }
  catch (e) {
    const t = document.createElement('textarea'); t.value = LETTER; document.body.appendChild(t); t.select();
    try { document.execCommand('copy'); note.textContent = 'Letter copy ho gaya ✅'; } catch (e2) { note.textContent = 'Copy nahi ho paya. Please text select karke manually copy karo.'; }
    t.remove();
  }
};

// Interactive lotus (repeatable)
$('#bigLotus').onclick = () => {
  $('#lotusEl').classList.add('open'); burst(HEARTS, 20);
  setTimeout(() => $('#lotusMsg').classList.add('show'), 900);
};
$('#bloomAgain').onclick = () => {
  $('#lotusEl').classList.remove('open'); $('#lotusMsg').classList.remove('show');
  setTimeout(() => $('#bigLotus').click(), 700);
};

// Gifts
document.querySelectorAll('[data-open]').forEach(b => b.onclick = () => { $('#'+b.dataset.open).classList.add('show'); burst(HEARTS, 12); if (b.dataset.open === 'g2') pickWish(); });
$('#collect').onclick = () => burst(PETALS, 30);
const WISHES = ['Aapki muskaan ko hamesha chamakne ki wajah milti rahe.','Aapke sapne aapke darr se hamesha bade rahein.','Kindness aapke saath-saath chalti rahe, zindagi aapko jahan bhi le jaye.','Aap hamesha us insaan par proud feel karo jo aap ban rahi ho.','Yeh saal aapko sundar mauke aur shaant din de.','Aapki chhoti khushiyan badi yaadon mein badal jayein.','Aapke paas hamesha hasne ke liye koi ho aur intezaar karne ke liye kuch khaas.','Har sunrise aapko yaad dilaye ki aap kitna aage aa chuki ho.','Aapka dil halka aur aapki himmat mazboot rahe.','Yeh saal aap par meherbaan ho aur khushiyon se bhara ho.'];
let lastWish = -1;
function pickWish() {
  let i; do { i = Math.floor(Math.random()*WISHES.length); } while (i === lastWish);
  lastWish = i; $('#wishOut').textContent = '✨ ' + WISHES[i]; burst(['✨','💗'], 8);
}
$('#pickWish').onclick = pickWish;
$('#celebrate').onclick = () => { burst(CONFETTI, 50); $('#dreamOut').textContent = 'One dream achieved, so many beautiful dreams still waiting. Keep shining, GulabJamun! 💙'; };
const SMILES = ['Aapki kindness logon ko comfortable feel karati hai. 😊','Aapki muskaan badalon bhare din ko bhi roshan kar sakti hai. ☀️','Aapka dil naram cheezon ka haqdaar hai. 💗','Aap jis tarah aage badhti rehti ho, woh sach mein kabil-e-tareef hai. 🌸','Aap aam pals ko bhi thoda aur khoobsurat bana deti ho. ✨'];
$('#smile').onclick = () => { $('#smileOut').textContent = SMILES[Math.floor(Math.random()*SMILES.length)]; burst(['💖','😊'], 14); };

// Egg jokes
const JOKES = ['Egg ne birthday cake kyun maanga? Kyunki use celebration mein poori tarah beat hona tha! 🥚','Smart egg ko kya kehte hain? Egg-stra ordinary birthday star! 🎉','Egg sharma kyun gaya? Usne birthday cake dekha aur woh thoda scramble ho gaya. 😂'];
$('#joke').onclick = () => { $('#jokeOut').textContent = JOKES[Math.floor(Math.random()*JOKES.length)]; };

// Catch the Hearts game (30s, win at 10 points)
let score = 0, left = 30, tick, spawn, state = 'idle';
const arena = $('#arena');
function gMsg(t) { $('#gMsg').textContent = t; }
function setBtns() { $('#gStart').disabled = state === 'run'; $('#gPause').disabled = state !== 'run'; $('#gFinish').disabled = state === 'idle' || state === 'done'; }
function spawnHeart() {
  const h = document.createElement('button'); h.className = 'h'; h.textContent = '💗'; h.setAttribute('aria-label', 'Catch heart');
  h.style.cssText = `left:${Math.random()*(arena.clientWidth-50)}px;top:${Math.random()*(arena.clientHeight-100)}px`;
  h.onclick = () => { if (state !== 'run') return; score++; $('#score').textContent = score; h.remove(); if (score === 10) gMsg('10 points ho gaye! Zabardast, GulabJamun! 🏆'); };
  arena.appendChild(h); setTimeout(() => h.remove(), 2500);
}
function runGame() {
  state = 'run'; arena.classList.add('run'); setBtns(); gMsg('Pakdo unhe!');
  tick = setInterval(() => { left--; $('#time').textContent = left; if (left <= 0) endGame(); }, 1000);
  spawn = setInterval(spawnHeart, 700);
}
function stopTimers() { clearInterval(tick); clearInterval(spawn); arena.classList.remove('run'); }
function endGame() {
  stopTimers(); state = 'done'; setBtns();
  gMsg((score >= 10 ? 'Aap jeet gayi, ' : 'Time khatam! ') + score + ' hearts mile. Khelne ke liye shukriya, har heart waise bhi aapka hai. 💗');
  burst(HEARTS, 20);
}
function resetGame() { stopTimers(); state = 'idle'; score = 0; left = 30; $('#score').textContent = 0; $('#time').textContent = 30; arena.querySelectorAll('.h').forEach(h => h.remove()); setBtns(); }
$('#gStart').onclick = () => { if (state === 'done') resetGame(); if (state === 'idle' || state === 'pause') runGame(); };
$('#gPause').onclick = () => { stopTimers(); state = 'pause'; setBtns(); $('#gStart').disabled = false; gMsg('Paused hai. Aage badhne ke liye Shuru Karo dabao.'); };
$('#gRestart').onclick = () => { resetGame(); runGame(); };
$('#gFinish').onclick = endGame;
setBtns();

// Cake: age is computed from 20 Jan 2007; default mode has 5 decorative candles
function ageOn(now) {
  const b = new Date(2007, 0, 20); let a = now.getFullYear() - 2007;
  if (now < new Date(now.getFullYear(), 0, 20)) a--; return a;
}
let special = false, lit = false;
function drawCandles() {
  const c = $('#candles'); c.innerHTML = '';
  for (let i = 0; i < (special ? 20 : 5); i++) { const d = document.createElement('div'); d.className = 'cd'; c.appendChild(d); }
  lit = false; $('#blow').disabled = true; $('#cakeMsg').textContent = '';
}
$('#ageNote').textContent = `Abhi aap ${ageOn(new Date())} saal ki ho. 20 candles wala mode 20 January 2027 ko aapke 20th birthday ke liye hai.`;
$('#mode').onclick = () => { special = !special; $('#mode').textContent = special ? 'Wapas Birthday Mode' : 'Special 20th Birthday Mode'; drawCandles(); };
$('#light').onclick = () => {
  document.querySelectorAll('.cd').forEach(d => d.classList.add('lit')); lit = true; $('#blow').disabled = false;
  burst(CONFETTI, 30); $('#cakeMsg').textContent = 'Ek chhoti si wish maango, My Dear GulabJamun. Yeh saal aapko aapke dil ke har khoobsurat sapne ke kareeb le jaye. ✨';
};
$('#blow').onclick = () => {
  if (!lit) return; document.querySelectorAll('.cd').forEach(d => d.classList.remove('lit')); lit = false; $('#blow').disabled = true;
  $('#cakeMsg').textContent = 'Aapki wish ek khoobsurat shuruaat ki haqdaar hai. 💗'; burst(HEARTS, 30);
};
drawCandles();

// Wishes carousel with swipe
const SLIDES = [['🌸','Aapki zindagi us khushi se bhari ho jo celebration ke baad bhi saath rahe.'],['☀️','Har naya din aapko muskurane ki wajah de aur har challenge aapki taaqat dikhaye.'],['✨','Aap ek aise future ki haqdaar ho jo sundar surprises, shaant pal aur sach hote sapno se bhara ho.'],['💙','Apne dil ki khoobsurti aur apne sapno ki taaqat ko kabhi kam mat samajhna.'],['🌈','Duniya aap par kinder ho, aapka safar roshan ho, aur dil mein umeed bani rahe.'],['📖','Aap zindagi ke ek naye chapter mein kadam rakh rahi ho, aur main chahta hoon ki yeh aapka ab tak ka sabse khoobsurat chapter bane.'],['🥚','Aapki favourite chhoti cheezein aapko hamesha sabse badi muskaan deti rahein.'],['🤝','Aapko hamesha aise log milein jo aapke feelings ki value karein, aapki boundaries ki izzat karein, aur aapki khushi celebrate karein.'],['🌙','Aapka lotus khile, sapne ooncha udein, aur navy-blue raatein shaant taaron se bhari rahein.'],['🎂','Happy Birthday, My Dear GulabJamun. Hamesha aisi hi wonderful bani rehna.']];
let si = 0;
function showSlide() {
  const s = $('#slide'); s.style.animation = 'none'; void s.offsetWidth; s.style.animation = '';
  s.innerHTML = ''; const i = document.createElement('span'); i.textContent = SLIDES[si][0]; const p = document.createElement('p'); p.textContent = SLIDES[si][1]; s.append(i, p);
  $('#slideNo').textContent = `Wish ${si+1} of ${SLIDES.length}`;
}
const go = d => { si = (si + d + SLIDES.length) % SLIDES.length; showSlide(); };
$('#prev').onclick = () => go(-1); $('#next').onclick = () => go(1);
let sx = 0; $('#slide').addEventListener('touchstart', e => sx = e.touches[0].clientX, {passive: true});
$('#slide').addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 40) go(d < 0 ? 1 : -1); });
showSlide();


// Final section
$('#reveal').onclick = () => { $('#finalMsg').classList.remove('hidden'); $('#finalLotus').classList.add('open'); burst(HEARTS, 25); };
new IntersectionObserver(es => es.forEach(e => e.isIntersecting && $('#finalLotus').classList.add('open')), {threshold: .4}).observe($('#final'));
$('#last').onclick = () => {
  burst(['🎆','🎇','✨','💗','💖'], 70);
  $('#lastMsg').textContent = 'Aapke dil ki har khoobsurat wish aap tak pahunche. Happy Birthday, My Dear GulabJamun! 💗';
};
