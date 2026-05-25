const translations = {
    ar: {
        page_title: 'سلمان المطيري | صانع محتوى',
        brand_name: 'سلمان المطيري',
        nav_home: 'الرئيسية', nav_videos: 'فيديوهات', nav_coverage: 'تغطيات', nav_stats: 'إحصائيات', nav_contact: 'تواصل',
        hero_badge: 'صانع محتوى إعلامي', hero_hello: 'أنا', hero_name: 'سلمان المطيري',
        hero_desc: 'أقدم تغطيات إعلامية احترافية للأحداث والفعاليات. شغوف بنقل الحقيقة بالصوت والصورة.',
        hero_btn1: 'شاهد أعمالي', hero_btn2: 'تواصل معي',
        stat_videos: 'فيديو', stat_followers: 'متابع', stat_coverage: 'تغطية',
        videos_title: 'معرض الفيديوهات', videos_sub: 'آخر أعمالي المرئية',
        vid1_title: 'تغطية مؤتمر الكويت التقني', vid1_date: '2025 • 15 دقيقة',
        vid2_title: 'لقاء مع رواد الأعمال', vid2_date: '2025 • 22 دقيقة',
        vid3_title: 'تغطية اليوم الوطني', vid3_date: '2025 • 30 دقيقة',
        vid4_title: 'حوار مع فنان تشكيلي', vid4_date: '2024 • 18 دقيقة',
        coverage_title: 'تغطيات إعلامية', coverage_sub: 'أبرز الفعاليات التي قمت بتغطيتها',
        cov1_title: 'مؤتمر الكويت التقني', cov1_desc: 'تغطية حية لمدة 3 أيام',
        cov2_title: 'معرض الكتاب الدولي', cov2_desc: 'لقاءات مع المؤلفين والناشرين',
        cov3_title: 'انتخابات مجلس الأمة', cov3_desc: 'تغطية شاملة للعملية الانتخابية',
        cov_live: 'بث مباشر', cov_interview: 'مقابلات', cov_report: 'تقرير',
        stats_title: 'إحصائيات الحسابات', stats_sub: 'أرقام منصاتي على التواصل الاجتماعي',
        contact_title: 'تواصل معي', contact_sub: 'للتعاون الإعلامي والتغطيات',
        form_name: 'الاسم', form_email: 'البريد الإلكتروني', form_msg: 'الرسالة', form_submit: 'إرسال',
        copyright: '© 2026 سلمان المطيري. قالب من <strong>موقعك</strong> – Mawqeak'
    },
    en: {
        page_title: 'Salman Al-Mutairi | Content Creator',
        brand_name: 'Salman Al-Mutairi',
        nav_home: 'Home', nav_videos: 'Videos', nav_coverage: 'Coverage', nav_stats: 'Stats', nav_contact: 'Contact',
        hero_badge: 'Media Content Creator', hero_hello: 'I am', hero_name: 'Salman Al-Mutairi',
        hero_desc: 'Professional media coverage of events. Passionate about delivering truth through video and sound.',
        hero_btn1: 'View My Work', hero_btn2: 'Contact Me',
        stat_videos: 'Videos', stat_followers: 'Followers', stat_coverage: 'Coverages',
        videos_title: 'Video Showcase', videos_sub: 'My latest visual work',
        vid1_title: 'Kuwait Tech Conference', vid1_date: '2025 • 15 min',
        vid2_title: 'Entrepreneurs Interview', vid2_date: '2025 • 22 min',
        vid3_title: 'National Day Coverage', vid3_date: '2025 • 30 min',
        vid4_title: 'Artist Interview', vid4_date: '2024 • 18 min',
        coverage_title: 'Media Coverage', coverage_sub: 'Major events I have covered',
        cov1_title: 'Kuwait Tech Conference', cov1_desc: '3-day live coverage',
        cov2_title: 'International Book Fair', cov2_desc: 'Interviews with authors',
        cov3_title: 'Parliament Elections', cov3_desc: 'Comprehensive election coverage',
        cov_live: 'Live', cov_interview: 'Interview', cov_report: 'Report',
        stats_title: 'Account Statistics', stats_sub: 'My social media numbers',
        contact_title: 'Contact Me', contact_sub: 'For media collaboration',
        form_name: 'Name', form_email: 'Email', form_msg: 'Message', form_submit: 'Send',
        copyright: '© 2026 Salman Al-Mutairi. Template by <strong>Mawqeak</strong>'
    }
};
let currentLang = 'ar';
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    const btn = document.getElementById('langToggle');
    if (btn) btn.innerHTML = lang === 'ar' ? '<i class="fas fa-globe"></i> English' : '<i class="fas fa-globe"></i> العربية';
    localStorage.setItem('lang', lang);
}
function switchLanguage() { setLanguage(currentLang === 'ar' ? 'en' : 'ar'); }
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(localStorage.getItem('lang') || 'ar');
    document.getElementById('langToggle')?.addEventListener('click', switchLanguage);
});
