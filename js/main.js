AOS.init({ duration: 800, once: true });
const darkToggle=document.getElementById('darkModeToggle'),darkCSS=document.getElementById('dark-mode-css'),body=document.body;
function setDark(e){if(e){body.classList.add('dark');darkCSS.disabled=false;darkToggle.innerHTML='<i class="fas fa-sun"></i>';}else{body.classList.remove('dark');darkCSS.disabled=true;darkToggle.innerHTML='<i class="fas fa-moon"></i>';}localStorage.setItem('darkMode',e?'enabled':'disabled');}
darkToggle.addEventListener('click',()=>setDark(!body.classList.contains('dark')));
if(localStorage.getItem('darkMode')==='enabled')setDark(true);

const header=document.getElementById('header'),bottomNav=document.getElementById('bottomNav');let ls=0;
window.addEventListener('scroll',()=>{let s=window.pageYOffset||document.documentElement.scrollTop;if(s>ls&&s>80){header.classList.add('header-hidden');if(bottomNav)bottomNav.classList.add('bottom-nav-hidden');}else{header.classList.remove('header-hidden');if(bottomNav)bottomNav.classList.remove('bottom-nav-hidden');}ls=s;updateActiveNav();});

function updateActiveNav(){const sec=['home','videos','coverage','stats','contact'];let c='home';sec.forEach(id=>{const el=document.getElementById(id);if(el&&el.getBoundingClientRect().top<=150)c=id;});document.querySelectorAll('.nav-list a, .bottom-nav-item').forEach(l=>{l.classList.remove('active');if(l.getAttribute('href')==='#'+c)l.classList.add('active');});}

const counters=document.querySelectorAll('.counter');let animated=false;
function animateCounters(){counters.forEach(c=>{const t=+c.getAttribute('data-target'),inc=t/40;const u=()=>{const cur=+c.innerText;if(cur<t){c.innerText=Math.ceil(cur+inc);setTimeout(u,30);}else c.innerText=t;};u();});}
window.addEventListener('scroll',()=>{const stats=document.querySelector('.hero-stats');if(stats&&!animated&&stats.getBoundingClientRect().top<window.innerHeight-100){animateCounters();animated=true;}});

// Lightbox
const videoData = [
    { icon: 'fas fa-video', title: 'تغطية مؤتمر الكويت التقني', desc: 'تغطية حية لمدة 3 أيام' },
    { icon: 'fas fa-users', title: 'لقاء مع رواد الأعمال', desc: 'مقابلات حصرية مع قادة الأعمال' },
    { icon: 'fas fa-flag', title: 'تغطية اليوم الوطني', desc: 'فعاليات اليوم الوطني الكويتي' },
    { icon: 'fas fa-paint-brush', title: 'حوار مع فنان تشكيلي', desc: 'جلسة حوارية مع فنان تشكيلي' }
];
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightboxContent');
    const item = videoData[index];
    content.innerHTML = `<i class="${item.icon}"></i><h3>${item.title}</h3><p>${item.desc}</p>`;
    lightbox.classList.add('active');
}
function closeLightbox() { document.getElementById('lightbox').classList.remove('active'); }
document.getElementById('lightbox').addEventListener('click', function(e) { if(e.target === this) closeLightbox(); });

function submitContact(){const name=document.getElementById('name')?.value?.trim()||'',email=document.getElementById('email')?.value?.trim()||'',msg=document.getElementById('message')?.value?.trim()||'لا يوجد',fb=document.getElementById('formFeedback');if(!name){fb.textContent='الاسم مطلوب';fb.style.color='red';return;}if(!email||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){fb.textContent='بريد غير صحيح';fb.style.color='red';return;}fb.style.color='';const m=`*رسالة جديدة*\n\nالاسم: ${name}\nالبريد: ${email}\nالرسالة: ${msg}`;window.open(`https://wa.me/966507652943?text=${encodeURIComponent(m)}`,'_blank');fb.textContent='✅ تم!';fb.style.color='green';document.getElementById('name').value='';document.getElementById('email').value='';document.getElementById('message').value='';setTimeout(()=>{fb.textContent='';},5000);}