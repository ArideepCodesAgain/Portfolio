// ===== PRELOADER — CINEMATIC BOOT SEQUENCE =====
(function() {
  // Binary rain columns
  const binContainer = document.getElementById('plBinary');
  const cols = Math.floor(window.innerWidth / 20);
  for (let i = 0; i < Math.min(cols, 60); i++) {
    const col = document.createElement('div');
    col.className = 'pl-bin-col';
    col.style.left = (i * (100 / Math.min(cols, 60))) + '%';
    col.style.animationDuration = (Math.random() * 8 + 6) + 's';
    col.style.animationDelay = (Math.random() * 6) + 's';
    col.style.opacity = (Math.random() * 0.03 + 0.01).toString();
    let str = '';
    for (let j = 0; j < 40; j++) str += (Math.random() > 0.5 ? '1' : '0') + '\n';
    col.textContent = str;
    binContainer.appendChild(col);
  }

  // Boot log lines
  const lines = [
    {html: '<span class="tc-p">arideep@chaos-kernel</span><span class="tc-dim">:</span><span class="tc-info">~</span><span class="tc-dim">$ </span><span class="tc-c">sudo ./boot_identity.sh</span>', delay: 300},
    {html: '<span class="tc-dim">[  0.001]</span> <span class="tc-c">Loading personality matrix...</span>', delay: 600},
    {html: '<span class="tc-dim">[  0.084]</span> <span class="tc-c">emotional_stability.dll</span> <span class="tc-fail">NOT FOUND</span>', delay: 850},
    {html: '<span class="tc-dim">[  0.085]</span> <span class="tc-warn">WARN: Proceeding without emotional stability</span>', delay: 1050},
    {html: '<span class="tc-dim">[  0.200]</span> <span class="tc-c">caffeine_driver.ko</span> <span class="tc-ok">loaded ✓</span>', delay: 1250},
    {html: '<span class="tc-dim">[  0.312]</span> <span class="tc-c">ai_systems_daemon</span> <span class="tc-ok">started ✓</span>', delay: 1450},
    {html: '<span class="tc-dim">[  0.490]</span> <span class="tc-c">chaos_engine v3.7</span> <span class="tc-ok">running ✓</span>', delay: 1620},
    {html: '<span class="tc-dim">[  0.711]</span> <span class="tc-pk">pookie_core_init: 91% chaos detected — nominal</span>', delay: 1800},
    {html: '<span class="tc-dim">[  1.000]</span> <span class="tc-ok">✓ Identity kernel ready — Welcome, Arideep.</span>', delay: 2000},
  ];

  const terminal = document.getElementById('plTerminal');
  const fill = document.getElementById('plFill');
  const pct = document.getElementById('plPct');
  const status = document.getElementById('plStatus');

  const statusLabels = ['Initializing','Loading modules','Mounting drives','Starting daemons','Finalizing chaos','Ready'];

  lines.forEach((line, i) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'pl-term-line';
      div.innerHTML = line.html;
      terminal.appendChild(div);
      requestAnimationFrame(() => div.classList.add('show'));
      // scroll terminal to bottom
      terminal.scrollTop = terminal.scrollHeight;
      // update progress
      const progress = Math.round(((i + 1) / lines.length) * 100);
      fill.style.width = progress + '%';
      pct.textContent = progress + '%';
      status.textContent = statusLabels[Math.min(Math.floor(i / 1.5), statusLabels.length - 1)];
    }, line.delay);
  });

  // Hide after sequence
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
    }, 2400);
  });
})();

// ===== DATA =====
const skillsData=[
  {title:'Languages',icon:'fa-solid fa-code',iconClass:'sc-lang',tags:['Python','SQL','C++','JavaScript','LaTeX']},
  {title:'AI / ML',icon:'fa-solid fa-brain',iconClass:'sc-ai',tags:['TensorFlow','PyTorch','Scikit-learn','Keras','NLTK','Hugging Face','OpenCV','CNNs','LSTMs','NLP','Deep Learning']},
  {title:'Web & Cloud',icon:'fa-solid fa-cloud',iconClass:'sc-web',tags:['Streamlit','Django','Flask','AWS EC2','AWS S3','AWS Lambda','GCP','Docker','REST APIs','Firebase','PostgreSQL']},
  {title:'Data & Automation',icon:'fa-solid fa-gears',iconClass:'sc-data',tags:['Pandas','NumPy','Matplotlib','n8n','Git','CI/CD','Jupyter','MLOps','Automation Pipelines']},
  {title:'Cybersecurity',icon:'fa-solid fa-shield-halved',iconClass:'sc-sec',tags:['Penetration Testing','Threat Detection','Network Forensics','OSINT','Incident Response','Vulnerability Assessment','SIEM Concepts']}
];
const specializations=[
  {name:'Machine Learning',color:'var(--pink)'},{name:'Deep Learning',color:'var(--lav)'},
  {name:'NLP',color:'var(--blue)'},{name:'Computer Vision',color:'var(--pink)'},
  {name:'Cybersecurity',color:'var(--lav)'},{name:'IoT',color:'var(--blue)'},
  {name:'Automation Engineering',color:'var(--pink)'},{name:'AI Systems',color:'var(--lav)'}
];
const projectsData=[
  {name:'Situationship-OS',cat:'Pookie-Core',status:'emotionally complex',desc:'An operating system for your situationships. Because regular OS doesn\'t understand emotional complexity.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/Situationship-OS',live:'https://arideepcodes.github.io/Situationship-OS'},
  {name:'PookieJournal',cat:'Pookie-Core',status:'crying in production',desc:'A journal app that gets you. Pookie-core aesthetics meet digital diary.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/PookieJournal',live:'https://arideepcodes.github.io/PookieJournal'},
  {name:'Midnight Workspace',cat:'Productivity',status:'built at 2AM',desc:'Productivity workspace built at midnight. For midnight people.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/Midnight_Workspace',live:'https://arideepcodes.github.io/Midnight_Workspace'},
  {name:'Delulu Bank',cat:'Pookie-Core',status:'delusional but functional',desc:'A banking experience powered by pure delusion. Financial management but make it chaotic.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/Delulu-Bank',live:'https://arideepcodes.github.io/Delulu-Bank'},
  {name:'Emotionally Damaged Compiler',cat:'Pookie-Core',status:'it compiles, it cries',desc:'A compiler that processes your code AND your emotional damage.',tags:['Python'],github:'https://github.com/ArideepCodes/Emotionally-Damaged-Compiler',live:'https://arideepcodes.github.io/Emotionally-Damaged-Compiler'},
  {name:'HIRINGSYNC AI',cat:'AI System',status:'hiring but make it AI',desc:'AI-powered hiring synchronization. Matching talent to opportunities with intelligence.',tags:['Python','AI/ML','Streamlit'],github:'https://github.com/ArideepCodes/HIRINGSYNC-AI',live:'https://arideepcodes.github.io/HIRINGSYNC-AI/'},
  {name:'PookieCalc',cat:'Pookie-Core',status:'math but emotional',desc:'A calculator but it\'s pookie. Math has never been this emotionally available.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/PookieCalc',live:'https://arideepcodes.github.io/PookieCalc/'},
  {name:'StudyFlix',cat:'Productivity',status:'dopamine-driven learning',desc:'Dopamine-driven learning platform. Netflix for studying.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/StudyFlix',live:'https://arideepcodes.github.io/StudyFlix'},
  {name:'TruthLens',cat:'AI System',status:'AI fact-checks your life',desc:'AI-powered fact verification. Because the internet needs it.',tags:['Python','AI','NLP'],github:'https://github.com/ArideepCodes/TruthLens',live:'https://arideepcodes.github.io/TruthLens/'},
  {name:'Finora',cat:'Productivity',status:'app is stable at least',desc:'Financial management that\'s actually stable, unlike your finances.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/Finora',live:'https://arideepcodes.github.io/Finora/'},
  {name:'MyTaskMate',cat:'Productivity',status:'tasks before tears',desc:'Task management before the tears. Organize or perish.',tags:['Python','Tkinter'],github:'https://github.com/ArideepCodes/MyTaskMate',live:null},
  {name:'SmartCoverLetter',cat:'AI System',status:'faking enthusiasm via AI',desc:'AI writes cover letters so you don\'t have to fake enthusiasm.',tags:['Python','AI','NLP'],github:'https://github.com/ArideepCodes/SmartCoverLetter',live:null},
  {name:'My-AI-Resume-Analyzer',cat:'AI System',status:'judging resumes ruthlessly',desc:'AI judges your resume so recruiters don\'t have to.',tags:['Python','NLP','AI'],github:'https://github.com/ArideepCodes/My-AI-Resume-Analyzer',live:null},
  {name:'Image Caption Generator',cat:'AI System',status:'better than "nice pic"',desc:'AI describes images. Better than your friend who says "nice pic".',tags:['Python','Deep Learning','CNN'],github:'https://github.com/ArideepCodes/image-caption-generator',live:null},
  {name:'Arideep Chatbot',cat:'AI System',status:'talking to myself basically',desc:'An AI chatbot. Basically me, but faster and less emotional.',tags:['Python','NLP','Streamlit'],github:'https://github.com/ArideepCodes/arideep-chatbot',live:'https://arideep-chatbot.streamlit.app'},
  {name:'Arideep Weather App',cat:'Utility',status:'should I go outside?',desc:'Know if you should go outside. Spoiler: probably not.',tags:['Python','API','Streamlit'],github:'https://github.com/ArideepCodes/arideep-weather-app',live:'https://arideep-weather-app.streamlit.app'},
  {name:'PDFSense',cat:'AI System',status:'AI reads so you don\'t',desc:'AI reads PDFs so you can keep scrolling TikTok.',tags:['Python','AI','NLP','Streamlit'],github:'https://github.com/ArideepCodes/PDFSense',live:'https://pdfsense-arideep.streamlit.app'},
  {name:'AI-Powered Network Forensics',cat:'Cybersecurity',status:'hacker energy maxed',desc:'Hacker tracking with AI. Digital CSI.',tags:['Python','ML','Cybersecurity'],github:'https://github.com/ArideepCodes/AI-Powered-Network-Forensics',live:'https://ai-powered-network-forensics.streamlit.app/'},
  {name:'IncidentAutopsySystem',cat:'Cybersecurity',status:'CSI but for networks',desc:'Post-incident analysis system. What killed your server?',tags:['Python','Cybersecurity'],github:'https://github.com/ArideepCodes/IncidentAutopsySystem',live:null},
  {name:'CyberWatch',cat:'Cybersecurity',status:'watching the cyber',desc:'Real-time cybersecurity monitoring. Watching the cyber so you don\'t have to.',tags:['Python','Flask','Cybersecurity'],github:'https://github.com/ArideepCodes/CyberWatch',live:'https://cyberwatch-vohd.onrender.com/'},
  {name:'NeuroCV Resume Analyzer',cat:'AI System',status:'neural vibes only',desc:'Neural network-powered resume analysis. Offline and intelligent.',tags:['Python','Deep Learning','OpenCV'],github:'https://github.com/ArideepCodes/neurocv-ai-offline-resume-analyzer',live:'https://arideepcodes.github.io/neurocv-ai-offline-resume-analyzer/'},
  {name:'Blood Bank Management',cat:'System',status:'saving lives with code',desc:'Saving lives through better blood bank management.',tags:['Python','SQL'],github:'https://github.com/ArideepCodes/blood-bank-management-system',live:null},
  {name:'FocusFlow',cat:'Productivity',status:'focus is a myth but we try',desc:'Focus enhancement app. A myth, but we\'re trying.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/FocusFlow',live:'https://arideepcodes.github.io/FocusFlow/'},
  {name:'Custom CNC Engraving System',cat:'Hardware',status:'machines that make art',desc:'Hardware meets software. CNC engraving with full control systems.',tags:['Arduino','C++','Hardware'],github:null,live:null},
  {name:'RedFlag Detector',cat:'Pookie-Core',status:'professionally judging men',desc:'Detecting emotionally dangerous men professionally. Because someone has to do the background check.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/RedFlag-Detector',live:'https://arideepcodes.github.io/RedFlag-Detector'},
  {name:'CryCalendar',cat:'Pookie-Core',status:'scheduled emotional damage',desc:'A calendar that understands your emotional schedule better than you do.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/CryCalendar',live:'https://arideepcodes.github.io/CryCalendar'},
  {name:'CryFinance',cat:'Pookie-Core',status:'financial tears included',desc:'Track your finances and your emotional breakdowns in one convenient place.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/CryFinance',live:'https://arideepcodes.github.io/CryFinance'},
  {name:'Delulu Airlines',cat:'Pookie-Core',status:'departing for delululand',desc:'Premium airline experience powered entirely by delusion and unrealistic expectations.',tags:['HTML','CSS','JavaScript'],github:'https://github.com/ArideepCodes/Delulu_Airlines',live:'https://arideepcodes.github.io/Delulu_Airlines'},
  {name:'More Projects Loading...',cat:'Pookie-Core',status:'sleep sacrificed successfully',desc:'There are way too many projects to keep updating this portfolio manually. New experiments, AI tools, cursed interfaces, productivity apps, and emotionally questionable creations appear on my GitHub almost every week.',tags:['Infinite Side Quests','GitHub Addict','Pookie Engineering','Deploy & Pray'],github:'https://github.com/ArideepCodes',live:'https://github.com/ArideepCodes'}
];
const achievementsData=[
  {icon:'fa-solid fa-trophy',text:'JIS Samman for Innovation and Excellence in Technology'},
  {icon:'fa-brands fa-aws',text:'AWS Academy Cloud Foundations Certified'},
  {icon:'fa-solid fa-wand-magic-sparkles',text:'Generative AI Foundations Certified'},
  {icon:'fa-brands fa-python',text:'Python Pro Bootcamp Certified'},
  {icon:'fa-solid fa-chart-pie',text:'Business Analysis & Process Management Certified'},
  {icon:'fa-solid fa-magnifying-glass-chart',text:'Data Analytics Job Simulation Certified'},
  {icon:'fa-solid fa-shield-halved',text:'Additional AI, Cloud & Security Certifications'},
  {icon:'fa-solid fa-certificate',text:'Multiple Emerging Technology Certifications'}
];

// ===== RENDER SKILLS =====
const skillsContainer=document.getElementById('skillsContainer');
skillsData.forEach((cat,i)=>{
  const d=document.createElement('div');
  d.className=`skill-category reveal ${i>0?'reveal-delay-'+Math.min(i,4):''}`;
  d.innerHTML=`<h3 class="skill-cat-title"><i class="${cat.icon} ${cat.iconClass}"></i> ${cat.title}</h3><div class="skill-tags">${cat.tags.map(t=>`<div class="skill-tag"><span>${t}</span></div>`).join('')}</div>`;
  skillsContainer.appendChild(d);
});

// ===== RENDER SPECIALIZATIONS =====
const specGrid=document.getElementById('specGrid');
specializations.forEach(s=>{specGrid.innerHTML+=`<div class="spec-card"><div class="sc-dot" style="background:${s.color};color:${s.color}"></div><div class="sc-text">${s.name}</div></div>`});

// ===== RENDER PROJECTS =====
const categories=['All',...new Set(projectsData.map(p=>p.cat))];
const filtersEl=document.getElementById('filters');
const projectsGrid=document.getElementById('projectsGrid');
let activeFilter='All';
categories.forEach(cat=>{
  const btn=document.createElement('button');
  btn.className=`filter-btn${cat==='All'?' active':''}`;
  btn.textContent=cat;
  btn.addEventListener('click',()=>{activeFilter=cat;document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderProjects()});
  filtersEl.appendChild(btn);
});
function renderProjects(){
  const filtered=activeFilter==='All'?projectsData:projectsData.filter(p=>p.cat===activeFilter);
  projectsGrid.innerHTML='';
  filtered.forEach((p,i)=>{
    const card=document.createElement('div');
    const isWide=(activeFilter==='All'&&(i===0||i===5))||(activeFilter!=='All'&&i===0);
    card.className='app-window'+(isWide?' bento-wide':'');
    card.dataset.cat=p.cat;
    card.style.opacity='0';card.style.transform='translateY(24px) scale(.97)';
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      card.style.setProperty('--mx',((e.clientX-r.left)/r.width*100)+'%');
      card.style.setProperty('--my',((e.clientY-r.top)/r.height*100)+'%');
      const x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
      card.style.transform=`perspective(800px) rotateY(${x*.015}deg) rotateX(${-y*.015}deg) translateY(-6px) scale(1.01)`;
    });
    card.addEventListener('mouseleave',()=>{card.style.transform=''});
    card.innerHTML=`
      <div class="app-titlebar">
        <div class="app-dots"><span></span><span></span><span></span></div>
        <span class="app-title">${p.name}</span>
        <span class="app-cat-badge">${p.cat}</span>
      </div>
      <div class="app-body">
        <div class="app-status"><span class="as-dot"></span>${p.status}</div>
        <h3 class="app-name">${p.name}</h3>
        <p class="app-desc">${p.desc}</p>
        <div class="app-tags">${p.tags.map(t=>`<span class="app-tag">${t}</span>`).join('')}</div>
        <div class="app-actions">
          ${p.github?`<a href="${p.github}" target="_blank" class="app-btn app-btn-ghost"><i class="fa-brands fa-github"></i> Source</a>`:''}
          ${p.live?`<a href="${p.live}" target="_blank" class="app-btn app-btn-live"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>`:''}
        </div>
      </div>`;
    projectsGrid.appendChild(card);
    setTimeout(()=>{card.style.transition='opacity .5s ease, transform .5s cubic-bezier(.23,1,.32,1)';card.style.opacity='1';card.style.transform='translateY(0) scale(1)'},i*50);
  });
}
renderProjects();

// ===== RENDER ACHIEVEMENTS =====
const achieveGrid=document.getElementById('achieveGrid');
achievementsData.forEach((a,i)=>{achieveGrid.innerHTML+=`<div class="achieve-card reveal ${i>0?'reveal-delay-'+Math.min(i%5,4):''}"><div class="ac-icon"><i class="${a.icon}"></i></div><div class="ac-text">${a.text}</div></div>`});

// ===== CUSTOM CURSOR =====
const outer=document.getElementById('cursorOuter'),inner=document.getElementById('cursorInner');
let mx=0,my=0,ox=0,oy=0,ix=0,iy=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});
function animateCursor(){ox+=(mx-ox)*.12;oy+=(my-oy)*.12;ix+=(mx-ix)*.25;iy+=(my-iy)*.25;outer.style.left=ox+'px';outer.style.top=oy+'px';inner.style.left=ix+'px';inner.style.top=iy+'px';requestAnimationFrame(animateCursor)}
animateCursor();
document.querySelectorAll('a,button,.app-window,.skill-tag,.highlight-card,.os-window,.footer-quote,.spec-card,.achieve-card,.stat-item,.edu-card').forEach(el=>{el.addEventListener('mouseenter',()=>outer.classList.add('hover'));el.addEventListener('mouseleave',()=>outer.classList.remove('hover'))});

// ===== CURSOR SPARKLES =====
const sparkleColors=['255,45,117','180,77,255','0,212,255','0,255,200','255,170,34'];
document.addEventListener('mousemove',e=>{
  if(Math.random()>.88&&window.innerWidth>768){
    const s=document.createElement('div');s.className='cursor-sparkle';
    s.style.left=(e.clientX+Math.random()*16-8)+'px';s.style.top=(e.clientY+Math.random()*16-8)+'px';
    s.style.background=`rgba(${sparkleColors[Math.floor(Math.random()*sparkleColors.length)]},${Math.random()*.5+.3})`;
    s.style.width=s.style.height=(Math.random()*3+2)+'px';
    document.body.appendChild(s);setTimeout(()=>s.remove(),500);
  }
});

// ===== JELLY CLICK =====
document.querySelectorAll('.btn-primary,.btn-ghost,.app-btn,.nav-cta,.filter-btn').forEach(btn=>{
  btn.addEventListener('click',function(){this.classList.remove('jelly-click');void this.offsetWidth;this.classList.add('jelly-click')});
});

// ===== PARTICLES =====
const canvas=document.getElementById('particles'),ctx=canvas.getContext('2d');
let particles=[];const isMobile=window.innerWidth<768;const PC=isMobile?25:60;
function resizeCanvas(){canvas.width=window.innerWidth;canvas.height=window.innerHeight}
resizeCanvas();window.addEventListener('resize',resizeCanvas);
class Particle{constructor(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=(Math.random()-.5)*.35;this.vy=(Math.random()-.5)*.35;this.size=Math.random()*1.5+.4;this.alpha=Math.random()*.35+.08;const c=['180,77,255','255,45,117','0,212,255','0,255,200'];this.color=c[Math.floor(Math.random()*c.length)]}update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>canvas.width)this.vx*=-1;if(this.y<0||this.y>canvas.height)this.vy*=-1}draw(){ctx.beginPath();ctx.arc(this.x,this.y,this.size,0,Math.PI*2);ctx.fillStyle=`rgba(${this.color},${this.alpha})`;ctx.fill()}}
for(let i=0;i<PC;i++)particles.push(new Particle());
function animateParticles(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.update();p.draw()});for(let i=0;i<particles.length;i++){for(let j=i+1;j<particles.length;j++){const dx=particles[i].x-particles[j].x,dy=particles[i].y-particles[j].y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<130){ctx.beginPath();ctx.moveTo(particles[i].x,particles[i].y);ctx.lineTo(particles[j].x,particles[j].y);ctx.strokeStyle=`rgba(180,77,255,${.05*(1-dist/130)})`;ctx.lineWidth=.5;ctx.stroke()}}}requestAnimationFrame(animateParticles)}
animateParticles();

// ===== FLOATING DECORATIONS =====
const decoSymbols=['♡','✦','♥','⋆','✧','❀','♡','✦'];
const decoContainer=document.getElementById('floatingDecos');
function spawnDeco(){
  const d=document.createElement('div');d.className='floating-deco';
  d.textContent=decoSymbols[Math.floor(Math.random()*decoSymbols.length)];
  d.style.left=Math.random()*100+'%';d.style.bottom='-20px';
  d.style.fontSize=(Math.random()*14+8)+'px';
  const op=Math.random()*.12+.04;d.style.setProperty('--do',op);
  const dur=Math.random()*15+12;d.style.animationDuration=dur+'s';d.style.animationDelay=Math.random()*8+'s';
  const colors=['var(--pink)','var(--lav)','var(--blue)','var(--pink2)','var(--lav2)'];
  d.style.color=colors[Math.floor(Math.random()*colors.length)];
  decoContainer.appendChild(d);setTimeout(()=>d.remove(),(dur+8)*1000);
}
for(let i=0;i<12;i++)setTimeout(spawnDeco,i*1200);
setInterval(spawnDeco,2500);

// ===== TYPED.JS =====
new Typed('#typed',{strings:['emotionally attached to side projects','deploy first panic later','AI explorer with delusional optimism','building weird things that somehow work','debugging life in production','romantically committed to dark mode','chaos-driven engineering','turning caffeine into systems','internet-core full-stack experimentation','emotionally supported by Git commits','lowkey building the future at 2AM'],typeSpeed:40,backSpeed:25,backDelay:1800,loop:true,showCursor:true,cursorChar:'|'});

// ===== NAV SCROLL =====
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>50);document.getElementById('backTop').classList.toggle('visible',window.scrollY>600)});

// ===== HAMBURGER =====
const hamburger=document.getElementById('hamburger'),mobileMenu=document.getElementById('mobileMenu');
hamburger.addEventListener('click',()=>{hamburger.classList.toggle('active');mobileMenu.classList.toggle('active');document.body.style.overflow=mobileMenu.classList.contains('active')?'hidden':''});
mobileMenu.querySelectorAll('a').forEach(a=>{a.addEventListener('click',()=>{hamburger.classList.remove('active');mobileMenu.classList.remove('active');document.body.style.overflow=''})});

// ===== BACK TO TOP =====
document.getElementById('backTop').addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'})});

// ===== SCROLL REVEAL =====
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// ===== STATS COUNTER =====
const statsObserver=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const el=e.target,target=parseInt(el.dataset.target);let c=0;const inc=target/40;const t=setInterval(()=>{c+=inc;if(c>=target){el.textContent=target+'+';clearInterval(t)}else el.textContent=Math.floor(c)+'+'},40);statsObserver.unobserve(el)}})},{threshold:.5});
document.querySelectorAll('.stat-num').forEach(el=>statsObserver.observe(el));

// ===== GSAP =====
if(!isMobile){
  document.querySelectorAll('.os-window').forEach((w,i)=>{
    gsap.to(w,{y:`random(-12,12)`,x:`random(-8,8)`,duration:`random(3,5)`,repeat:-1,yoyo:true,ease:'sine.inOut',delay:i*.4});
  });
  gsap.to('.mesh-blob-1',{x:80,y:60,duration:10,repeat:-1,yoyo:true,ease:'sine.inOut'});
  gsap.to('.mesh-blob-2',{x:-60,y:-50,duration:12,repeat:-1,yoyo:true,ease:'sine.inOut'});
  gsap.to('.mesh-blob-3',{x:-100,y:40,duration:9,repeat:-1,yoyo:true,ease:'sine.inOut'});
  gsap.to('.mesh-blob-4',{x:70,y:-30,duration:11,repeat:-1,yoyo:true,ease:'sine.inOut'});
  gsap.to('.glow-orb-1',{x:60,y:40,duration:8,repeat:-1,yoyo:true,ease:'sine.inOut'});
  gsap.to('.glow-orb-2',{x:-50,y:-40,duration:10,repeat:-1,yoyo:true,ease:'sine.inOut'});
}

// ===== GSAP HERO ENTRANCE =====
gsap.from('.hero-badge',{opacity:0,y:20,duration:.7,delay:2.5,ease:'power3.out'});
gsap.from('.hero-name',{opacity:0,y:50,scale:.95,duration:.9,delay:2.65,ease:'power3.out'});
gsap.from('.hero-headline',{opacity:0,y:20,duration:.7,delay:2.9,ease:'power3.out'});
gsap.from('.hero-sub',{opacity:0,y:20,duration:.7,delay:3.05,ease:'power3.out'});
gsap.from('.typed-wrap',{opacity:0,y:20,duration:.7,delay:3.2,ease:'power3.out'});
gsap.from('.status-pill',{opacity:0,y:15,scale:.9,duration:.5,stagger:.08,delay:3.3,ease:'back.out(1.7)'});
gsap.from('.hero-btns',{opacity:0,y:20,duration:.7,delay:3.6,ease:'power3.out'});
gsap.from('.hero-socials a',{opacity:0,y:15,scale:.8,duration:.5,stagger:.06,delay:3.8,ease:'back.out(1.7)'});
if(!isMobile){
  gsap.from('.os-window',{opacity:0,x:50,scale:.9,duration:.6,stagger:.15,delay:3.1,ease:'back.out(1.4)'});
}

// ===== HERO PARALLAX =====
if(!isMobile){
  const heroEl=document.getElementById('hero');
  heroEl.addEventListener('mousemove',e=>{
    const cx=e.clientX/window.innerWidth-.5,cy=e.clientY/window.innerHeight-.5;
    document.querySelectorAll('.os-window').forEach((w,i)=>{
      const f=(i+1)*8;
      w.style.transform=`rotate(${[-2,1.5,-1,2][i]}deg) translate(${cx*f}px,${cy*f}px)`;
    });
  });
  heroEl.addEventListener('mouseleave',()=>{
    document.querySelectorAll('.os-window').forEach((w,i)=>{
      w.style.transform=`rotate(${[-2,1.5,-1,2][i]}deg)`;
    });
  });
}

// ===== ACTIVE NAV LINK =====
const sections=document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
  let current='';
  sections.forEach(s=>{if(window.scrollY>=s.offsetTop-200)current=s.id});
  document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(a=>{
    a.classList.toggle('active-link',a.getAttribute('href')==='#'+current);
  });
});
