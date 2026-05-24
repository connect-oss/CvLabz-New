const PageContent = require('../models/PageContent');
const path = require('path');

// Default page definitions
const PAGE_LABELS = {
  homepage: 'Homepage',
  about: 'About Us',
  faqs: 'FAQs',
  'cv-builder': 'CV Builder',
  'cv-matching': 'CV Matching',
  'linkedin-analyzer': 'LinkedIn Analyzer',
  'motivation-letter': 'Motivation Letter',
  contact: 'Contact',
  global: 'Global (Header/Footer)',
};

function getDefaultSections(pageKey) {
  switch (pageKey) {
    /* ================================================================
       HOMEPAGE
       ================================================================ */
    case 'homepage':
      return [
        // --- Hero ---
        { sectionKey: 'hero', sectionLabel: 'Hero Section', sectionType: 'hero', fields: [
          { key: 'badge', type: 'text', label: 'Badge Text', value_en: '€0,99 FOR 14 DAYS', value_nl: '€0,99 VOOR 14 DAGEN' },
          { key: 'title', type: 'text', label: 'Title', value_en: 'This resume builder gets you hired faster.', value_nl: 'Deze CV-bouwer helpt je sneller aan een baan.' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'CV Labz builds your CV, scores your LinkedIn, matches you to any vacancy, and writes your cover letter. All in one place.', value_nl: 'CV Labz bouwt je CV, beoordeelt je LinkedIn, matcht je met elke vacature en schrijft je motivatiebrief. Alles op \u00e9\u00e9n plek.' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Start 14 days for €0,99', value_nl: 'Start 14 dagen voor €0,99' },
          { key: 'ctaLink', type: 'url', label: 'CTA Button Link', value_en: '/login', value_nl: '/login' },
          { key: 'secondaryCtaText', type: 'text', label: 'Secondary CTA Text', value_en: 'Upload my resume', value_nl: 'Upload mijn CV' },
          { key: 'priceText', type: 'text', label: 'Price Description', value_en: '€0,99 unlocks everything for 14 days. Cancel in one click.', value_nl: '€0,99 ontgrendelt alles voor 14 dagen. Opzeggen in \u00e9\u00e9n klik.' },
          { key: 'afterPrice', type: 'text', label: 'After Price Text', value_en: 'After that €19,99/month. No emails, no friction.', value_nl: 'Daarna €19,99/maand. Geen e-mails, geen gedoe.' },
          { key: 'avatar1', type: 'image', label: 'Avatar 1', value_en: '/uploads/avatars/avatar-1.jpg', value_nl: '/uploads/avatars/avatar-1.jpg' },
          { key: 'avatar2', type: 'image', label: 'Avatar 2', value_en: '/uploads/avatars/avatar-2.jpg', value_nl: '/uploads/avatars/avatar-2.jpg' },
          { key: 'avatar3', type: 'image', label: 'Avatar 3', value_en: '/uploads/avatars/avatar-3.jpg', value_nl: '/uploads/avatars/avatar-3.jpg' },
          { key: 'avatar4', type: 'image', label: 'Avatar 4', value_en: '/uploads/avatars/avatar-4.jpg', value_nl: '/uploads/avatars/avatar-4.jpg' },
        ]},
        // --- SEO Metrics ---
        { sectionKey: 'seoMetrics', sectionLabel: 'SEO Metrics & Trust', sectionType: 'text', fields: [
          { key: 'counterNumber', type: 'text', label: 'Resumes Counter', value_en: '1,247', value_nl: '1.247' },
          { key: 'counterLabel', type: 'text', label: 'Counter Label', value_en: 'resumes created today', value_nl: "cv's vandaag gemaakt" },
          { key: 'trustText', type: 'text', label: 'Trust Badge', value_en: '4.8/5 from 2,300+ users', value_nl: '4.8/5 van 2.300+ gebruikers' },
        ]},
        // --- Templates ---
        { sectionKey: 'templates', sectionLabel: 'Templates Section', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'ATS-friendly templates that do not look like everyone else\'s.', value_nl: 'ATS-vriendelijke templates die er niet uitzien als die van iedereen.' },
          { key: 'subtitle', type: 'text', label: 'Subtitle', value_en: 'Recruiters see 200 CVs a week. Yours should not blend in.', value_nl: 'Recruiters zien 200 cv\'s per week. Die van jou moet opvallen.' },
        ]},
        // --- Logo Bar ---
        { sectionKey: 'logoBar', sectionLabel: 'Logo Bar (Hired At)', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Our users got hired at:', value_nl: 'Onze gebruikers zijn aangenomen bij:' },
        ], items: [
          'Booking.com', 'Adyen', 'bol.', 'Rabobank', 'kpn',
        ], items_nl: [
          'Booking.com', 'Adyen', 'bol.', 'Rabobank', 'kpn',
        ] },
        // --- Analyzer + Matcher shared heading ---
        { sectionKey: 'analyzerMatcher', sectionLabel: 'Analyzer & Matcher Shared Heading', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Find out why recruiters skip your profile. Free.', value_nl: 'Ontdek waarom recruiters je profiel overslaan. Gratis.' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Two free reports that show you exactly what is holding your LinkedIn and CV back. Get yours in your inbox in 60 seconds.', value_nl: 'Twee gratis rapporten die precies laten zien wat je LinkedIn en CV tegenhouden.' },
        ]},
        // --- LinkedIn Analyzer card ---
        { sectionKey: 'linkedinAnalyzer', sectionLabel: 'LinkedIn Analyzer Card', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Card Heading', value_en: 'Score your LinkedIn in 30 seconds.', value_nl: 'Beoordeel je LinkedIn in 30 seconden.' },
          { key: 'subtitle', type: 'textarea', label: 'Sub-heading', value_en: 'Your LinkedIn is costing you interviews.', value_nl: 'Je LinkedIn kost je sollicitatiegesprekken.' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Analyze', value_nl: 'Analyseren' },
          { key: 'ctaLink', type: 'url', label: 'CTA Button Link', value_en: '/login', value_nl: '/login' },
          { key: 'inputPlaceholder', type: 'text', label: 'Input Placeholder', value_en: 'Paste LinkedIn profile URL', value_nl: 'Plak je LinkedIn profiel-URL' },
        ]},
        // --- CV Matcher card ---
        { sectionKey: 'cvMatcher', sectionLabel: 'CV Matcher Card', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Card Heading', value_en: 'Match your CV to any job in 10 seconds.', value_nl: 'Match je CV met elke vacature in 10 seconden.' },
          { key: 'subtitle', type: 'textarea', label: 'Sub-heading', value_en: 'Your CV does not match the job. Here is the gap.', value_nl: 'Je CV matcht niet met de baan. Dit is het verschil.' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Match my CV', value_nl: 'Match mijn CV' },
          { key: 'ctaLink', type: 'url', label: 'CTA Button Link', value_en: '/login', value_nl: '/login' },
        ]},
        // --- Tools Grid ---
        { sectionKey: 'toolsGrid', sectionLabel: 'Tools Grid Section', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Four tools. One goal. More interviews.', value_nl: 'Vier tools. E\u00e9n doel. Meer gesprekken.' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Analyze your LinkedIn, build your CV, match it to any job, and write the cover letter. All in one place.', value_nl: 'Analyseer je LinkedIn, bouw je CV, match met elke vacature en schrijf de motivatiebrief.' },
        ]},
        // --- Learning Hub ---
        { sectionKey: 'learningHub', sectionLabel: 'Learning Hub Section', sectionType: 'articles', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Learn from real career experts', value_nl: 'Leer van echte carri\u00e8re-experts' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Videos and articles on CV writing, interviews, salary talks, negotiation, and everything in between. Free to read and watch.', value_nl: "Video's en artikelen over CV-schrijven, sollicitatiegesprekken, salaris en meer." },
          { key: 'ctaText', type: 'text', label: 'CTA Text', value_en: 'Meet our experts', value_nl: 'Ontmoet onze experts' },
        ], items: [
          { tag: 'SUPER LESSON', title: 'Why recruiters reject your CV in 7 seconds', author: 'Lotte van Dijk', avatar: '/uploads/avatars/lotte.jpg', readTime: '6 min read', image: '/uploads/articles/recruiter-cv-reject.jpg' },
          { tag: 'ARTICLE', title: '10 CV mistakes that cost you interviews', author: 'Jeroen Timmer', avatar: '/uploads/avatars/jeroen.jpg', readTime: '7 min read', image: '/uploads/articles/cv-mistakes.jpg' },
          { tag: 'SPRING LESSON', title: 'How to answer the "Tell me about yourself"', author: 'Sanne Verhoeven', avatar: '/uploads/avatars/sanne.jpg', readTime: '8 min read', image: '/uploads/articles/tell-me-about-yourself.jpg' },
          { tag: 'LEARNING PATH', title: 'Complete guide to career change', author: 'Mark de Jong', avatar: '/uploads/avatars/mark.jpg', readTime: '5 lessons', image: '/uploads/articles/career-change.jpg' },
          { tag: 'ARTICLE', title: 'LinkedIn profile optimization guide', author: 'Eva de Boer', avatar: '/uploads/avatars/eva.jpg', readTime: '4 min read', image: '/uploads/articles/linkedin-optimization.jpg' },
          { tag: 'SUPER LESSON', title: 'Salary negotiation: get what you deserve', author: 'Daan Meijer', avatar: '/uploads/avatars/daan.jpg', readTime: '6 min read', image: '/uploads/articles/salary-negotiation.jpg' },
        ], items_nl: [
          { tag: 'SUPER LES', title: 'Waarom recruiters je CV in 7 seconden afwijzen', author: 'Lotte van Dijk', avatar: '/uploads/avatars/lotte.jpg', readTime: '6 min leestijd', image: '/uploads/articles/recruiter-cv-reject.jpg' },
          { tag: 'ARTIKEL', title: '10 CV-fouten die je sollicitatiegesprekken kosten', author: 'Jeroen Timmer', avatar: '/uploads/avatars/jeroen.jpg', readTime: '7 min leestijd', image: '/uploads/articles/cv-mistakes.jpg' },
          { tag: 'LENTE LES', title: 'Hoe beantwoord je "Vertel eens over jezelf"', author: 'Sanne Verhoeven', avatar: '/uploads/avatars/sanne.jpg', readTime: '8 min leestijd', image: '/uploads/articles/tell-me-about-yourself.jpg' },
          { tag: 'LEERPAD', title: 'Complete gids voor carri\u00e8reswitch', author: 'Mark de Jong', avatar: '/uploads/avatars/mark.jpg', readTime: '5 lessen', image: '/uploads/articles/career-change.jpg' },
          { tag: 'ARTIKEL', title: 'LinkedIn profiel optimalisatie gids', author: 'Eva de Boer', avatar: '/uploads/avatars/eva.jpg', readTime: '4 min leestijd', image: '/uploads/articles/linkedin-optimization.jpg' },
          { tag: 'SUPER LES', title: 'Salarisonderhandeling: krijg wat je verdient', author: 'Daan Meijer', avatar: '/uploads/avatars/daan.jpg', readTime: '6 min leestijd', image: '/uploads/articles/salary-negotiation.jpg' },
        ] },
        // --- Testimonials ---
        { sectionKey: 'testimonials', sectionLabel: 'Testimonials Section', sectionType: 'testimonials', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Real Results from Real People', value_nl: 'Echte Resultaten van Echte Mensen' },
          { key: 'subtitle', type: 'text', label: 'Subtitle', value_en: 'Authentic user experiences. No actors, just real job seekers who got hired.', value_nl: 'Authentieke ervaringen. Geen acteurs, alleen echte werkzoekenden.' },
          { key: 'verifiedBadge', type: 'text', label: 'Verified Badge Text', value_en: 'Verified testimonials from CV Labz users', value_nl: 'Geverifieerde testimonials van CV Labz-gebruikers' },
        ], items: [
          { name: 'Sarah M.', role: 'Marketing Manager', title: 'From 0 interviews to 4 callbacks', quote: 'How CV Labz helped me land multiple interviews in just 2 weeks', duration: '0:32', thumbnail: '/uploads/testimonials/sarah-m.jpg' },
          { name: 'Marcus T.', role: 'Software Engineer', title: 'How AI helped me prep like a pro', quote: 'The AI coach transformed my interview skills completely', duration: '0:28', thumbnail: '/uploads/testimonials/marcus-t.jpg' },
          { name: 'Elena R.', role: 'Product Designer', title: 'Redesigned my CV in 10 minutes', quote: 'Quick, professional, and it actually got me noticed', duration: '0:25', thumbnail: '/uploads/testimonials/elena-r.jpg' },
        ], items_nl: [
          { name: 'Sarah M.', role: 'Marketingmanager', title: 'Van 0 gesprekken naar 4 callbacks', quote: 'Hoe CV Labz me hielp om meerdere gesprekken te krijgen in slechts 2 weken', duration: '0:32', thumbnail: '/uploads/testimonials/sarah-m.jpg' },
          { name: 'Marcus T.', role: 'Software Engineer', title: 'Hoe AI me hielp als een pro voor te bereiden', quote: 'De AI-coach heeft mijn sollicitatievaardigheden volledig getransformeerd', duration: '0:28', thumbnail: '/uploads/testimonials/marcus-t.jpg' },
          { name: 'Elena R.', role: 'Productontwerper', title: 'CV opnieuw ontworpen in 10 minuten', quote: 'Snel, professioneel en het viel echt op', duration: '0:25', thumbnail: '/uploads/testimonials/elena-r.jpg' },
        ] },
        // --- Pricing ---
        { sectionKey: 'pricing', sectionLabel: 'Pricing Section', sectionType: 'pricing', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'One price. Everything unlocked.', value_nl: 'E\u00e9n prijs. Alles ontgrendeld.' },
          { key: 'subtitle', type: 'text', label: 'Subtitle', value_en: '€0,99 gets you 14 days of everything.', value_nl: '€0,99 geeft je 14 dagen alles.' },
          { key: 'price', type: 'text', label: 'Price', value_en: '€0,99', value_nl: '€0,99' },
          { key: 'period', type: 'text', label: 'Period', value_en: 'for 14 days', value_nl: 'voor 14 dagen' },
          { key: 'afterPrice', type: 'text', label: 'After Trial Price', value_en: 'Then €19,99 / month', value_nl: 'Daarna €19,99 / maand' },
          { key: 'ctaText', type: 'text', label: 'CTA Text', value_en: 'Start your trial', value_nl: 'Start je proefperiode' },
        ], items: [
          'CV Builder', 'CV Matcher', 'Cover Letter', 'LinkedIn Analyzer Premium', 'Cancel anytime with one click',
        ], items_nl: [
          'CV Bouwer', 'CV Matcher', 'Motivatiebrief', 'LinkedIn Analyzer Premium', 'Opzeggen in \u00e9\u00e9n klik',
        ] },
      ];

    /* ================================================================
       CV BUILDER
       ================================================================ */
    case 'cv-builder':
      return [
        // --- Hero ---
        { sectionKey: 'hero', sectionLabel: 'Hero Section', sectionType: 'hero', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Build the CV Recruiters Want to Read', value_nl: 'Maak het CV dat Recruiters Willen Lezen' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Create an ATS-optimized CV that highlights your experience clearly and aligns with modern hiring systems.', value_nl: 'Maak een ATS-geoptimaliseerd CV dat je ervaring duidelijk benadrukt.' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Build Your CV', value_nl: 'Bouw Je CV' },
          { key: 'ctaLink', type: 'url', label: 'CTA Button Link', value_en: '/login', value_nl: '/login' },
          { key: 'videoUrl', type: 'url', label: 'Video URL', value_en: 'https://player.vimeo.com/video/1125654210', value_nl: 'https://player.vimeo.com/video/1125654210' },
          { key: 'videoOverlayTitle', type: 'text', label: 'Video Overlay Title', value_en: 'See How Our Resume Builder Works', value_nl: 'Bekijk Hoe Onze CV Bouwer Werkt' },
          { key: 'videoOverlaySubtitle', type: 'text', label: 'Video Overlay Subtitle', value_en: 'Watch professionals create winning resumes in minutes', value_nl: 'Bekijk hoe professionals winnende cv\'s maken' },
        ]},
        // --- How It Works ---
        { sectionKey: 'howItWorks', sectionLabel: 'How It Works', sectionType: 'steps', fields: [
          { key: 'title', type: 'text', label: 'Section Title', value_en: 'How Our CV Builder Works', value_nl: 'Hoe Onze CV Bouwer Werkt' },
        ], items: [
          { stepNumber: '1', title: 'Choose a Professional Template', description: 'Start with a clean, ATS-optimized template designed to meet modern recruiter and hiring system standards.' },
          { stepNumber: '2', title: 'Add Your Details with Guided Support', description: 'Enter your information with smart prompts, examples, and suggestions that help you write each section clearly and confidently.' },
          { stepNumber: '3', title: 'Customize for the Role You\'re Applying For', description: 'Tailor your CV using role-specific recommendations and keyword alignment to match job descriptions and ATS requirements.' },
          { stepNumber: '4', title: 'Download a Job-Ready CV', description: 'Download your CV as a professionally formatted PDF, ready to upload or share with employers.' },
        ], items_nl: [
          { stepNumber: '1', title: 'Kies een Professioneel Template', description: 'Begin met een strak, ATS-geoptimaliseerd template dat voldoet aan de eisen van moderne recruiters en sollicitatiesystemen.' },
          { stepNumber: '2', title: 'Vul Je Gegevens in met Begeleiding', description: 'Voer je gegevens in met slimme suggesties, voorbeelden en tips die je helpen elke sectie helder en zelfverzekerd te schrijven.' },
          { stepNumber: '3', title: 'Pas Aan voor de Functie Waarop Je Solliciteert', description: 'Stem je CV af met rolspecifieke aanbevelingen en zoekwoorden die aansluiten bij vacatureteksten en ATS-vereisten.' },
          { stepNumber: '4', title: 'Download een Sollicitatieklaar CV', description: 'Download je CV als professioneel opgemaakt PDF-bestand, klaar om te uploaden of te delen met werkgevers.' },
        ] },
        // --- Features ---
        { sectionKey: 'features', sectionLabel: 'What Makes Our CV Builder Different', sectionType: 'features', fields: [
          { key: 'title', type: 'text', label: 'Section Title', value_en: 'What Makes Our CV Builder Different', value_nl: 'Wat Onze CV Bouwer Anders Maakt' },
        ], items: [
          { title: 'ATS-Optimized by Design', description: 'Our CV templates are designed to work smoothly with applicant tracking systems, helping your resume stay readable and properly structured during screening.' },
          { title: 'Easy Editing, No Formatting Stress', description: 'You can edit your CV online and see updates instantly without worrying about spacing, layout, or design issues.' },
          { title: 'Smart Writing Support Along the Way', description: 'Smart suggestions and writing prompts support you as you build your CV, making it easier to describe your experience clearly and professionally.' },
          { title: 'Create Your CV Faster', description: 'The process is simple and focused, allowing you to create a polished, job ready CV quickly, even if you are applying under time pressure.' },
          { title: 'Download Your CV for Free', description: 'Once your CV is ready, you can download it as a clean, well formatted PDF that is suitable for online applications and email submissions.' },
        ], items_nl: [
          { title: 'ATS-Geoptimaliseerd Ontwerp', description: 'Onze CV-templates zijn ontworpen om soepel samen te werken met sollicitatiesystemen, zodat je CV leesbaar en goed gestructureerd blijft tijdens de screening.' },
          { title: 'Makkelijk Bewerken, Geen Opmaakstress', description: 'Bewerk je CV online en zie wijzigingen direct, zonder je zorgen te maken over spati\u00ebring, lay-out of designproblemen.' },
          { title: 'Slimme Schrijfondersteuning Onderweg', description: 'Slimme suggesties en schrijftips begeleiden je bij het opbouwen van je CV, zodat je je ervaring helder en professioneel kunt beschrijven.' },
          { title: 'Maak Je CV Sneller', description: 'Het proces is eenvoudig en doelgericht, waardoor je snel een verzorgd, sollicitatieklaar CV kunt maken, zelfs onder tijdsdruk.' },
          { title: 'Download Je CV Gratis', description: 'Als je CV klaar is, kun je het downloaden als een nette, goed opgemaakte PDF die geschikt is voor online sollicitaties en e-mailbijlagen.' },
        ] },
        // --- Testimonials ---
        { sectionKey: 'testimonials', sectionLabel: 'Testimonials', sectionType: 'testimonials', fields: [
          { key: 'title', type: 'text', label: 'Section Title', value_en: 'Hear from Job Seekers Like You', value_nl: 'Ervaringen van Werkzoekenden Zoals Jij' },
        ], items: [
          { name: 'Sarah Chen', role: 'Product Manager', company: 'Google', quote: 'The LinkedIn analyzer helped me optimize my profile and I got 3x more recruiter messages within a month!', image: '/uploads/testimonials/sarah-chen.jpg', stat: '+180% profile views' },
          { name: 'Marcus Johnson', role: 'Senior Developer', company: 'Microsoft', quote: 'Amazing insights! The keyword optimization suggestions were spot-on and helped me land my dream job.', image: '/uploads/testimonials/marcus-johnson.jpg', stat: '+250% recruiter reach' },
          { name: 'Emily Rodriguez', role: 'Marketing Director', company: 'Spotify', quote: 'The profile photo evaluation and headline suggestions transformed my LinkedIn presence completely.', image: '/uploads/testimonials/emily-rodriguez.jpg', stat: '+320% engagement' },
          { name: 'David Kim', role: 'Data Scientist', company: 'Netflix', quote: 'Free analysis that actually works! Got multiple job offers after implementing the recommendations.', image: '/uploads/testimonials/david-kim.jpg', stat: '+400% job inquiries' },
        ], items_nl: [
          { name: 'Sarah Chen', role: 'Productmanager', company: 'Google', quote: 'De LinkedIn-analyzer hielp me mijn profiel te optimaliseren en ik kreeg 3x meer berichten van recruiters binnen een maand!', image: '/uploads/testimonials/sarah-chen.jpg', stat: '+180% profielweergaven' },
          { name: 'Marcus Johnson', role: 'Senior Developer', company: 'Microsoft', quote: 'Geweldige inzichten! De zoekwoordsuggesties waren raak en hielpen me mijn droombaan te vinden.', image: '/uploads/testimonials/marcus-johnson.jpg', stat: '+250% recruiterbereik' },
          { name: 'Emily Rodriguez', role: 'Marketingdirecteur', company: 'Spotify', quote: 'De profielfoto-evaluatie en kopsuggesties hebben mijn LinkedIn-aanwezigheid compleet getransformeerd.', image: '/uploads/testimonials/emily-rodriguez.jpg', stat: '+320% betrokkenheid' },
          { name: 'David Kim', role: 'Data Scientist', company: 'Netflix', quote: 'Gratis analyse die echt werkt! Meerdere aanbiedingen ontvangen na het implementeren van de aanbevelingen.', image: '/uploads/testimonials/david-kim.jpg', stat: '+400% sollicitatieverzoeken' },
        ] },
        // --- Understanding ---
        { sectionKey: 'understanding', sectionLabel: 'Understanding Section', sectionType: 'articles', fields: [
          { key: 'title', type: 'text', label: 'Section Title', value_en: 'Understanding How Our CV Builder Helps You', value_nl: 'Begrijpen Hoe Onze CV Bouwer Je Helpt' },
        ], items: [
          { title: '1. What Does ATS-Friendly Really Mean', content: 'Many companies use Applicant Tracking Systems to filter CVs before a recruiter ever sees them. An ATS-friendly CV follows the right structure, formatting, and keyword alignment so it can be properly read and evaluated. Our CV builder is designed to support this process, helping your resume stay readable and well-organized throughout screening.' },
          { title: '2. How This CV Builder Helps You Stand Out', content: 'You are not just filling in a template. As you build your CV, the system provides contextual guidance based on roles and industries, helping you describe your experience more clearly and professionally. The goal is to present your strengths in a way that feels natural, relevant, and easy to understand.' },
          { title: '3. How This CV Builder Helps You Write Better Content', content: 'Writing a CV is often harder than formatting it. Our AI resume builder supports you with prompts and examples that help you describe your experience clearly, avoid vague language, and focus on what recruiters actually look for in each section.' },
        ], items_nl: [
          { title: '1. Wat Betekent ATS-Vriendelijk Eigenlijk', content: 'Veel bedrijven gebruiken Applicant Tracking Systems om cv\'s te filteren voordat een recruiter ze ziet. Een ATS-vriendelijk CV volgt de juiste structuur, opmaak en zoekwoordafstemming zodat het goed gelezen en beoordeeld kan worden. Onze CV-bouwer is ontworpen om dit proces te ondersteunen en je CV leesbaar en overzichtelijk te houden.' },
          { title: '2. Hoe Deze CV Bouwer Je Helpt Op te Vallen', content: 'Je vult niet zomaar een template in. Terwijl je je CV opbouwt, geeft het systeem contextgerichte begeleiding op basis van functies en sectoren, zodat je je ervaring helderder en professioneler kunt beschrijven. Het doel is om je sterke punten op een natuurlijke, relevante en begrijpelijke manier te presenteren.' },
          { title: '3. Hoe Deze CV Bouwer Je Helpt Betere Inhoud te Schrijven', content: 'Een CV schrijven is vaak moeilijker dan het opmaken ervan. Onze AI CV-bouwer ondersteunt je met suggesties en voorbeelden die je helpen je ervaring helder te beschrijven, vaag taalgebruik te vermijden en je te richten op wat recruiters daadwerkelijk zoeken in elke sectie.' },
        ] },
        // --- Other Tools ---
        { sectionKey: 'otherTools', sectionLabel: 'Explore Other Career Tools', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Section Title', value_en: 'Explore Other Career Tools', value_nl: 'Ontdek Andere Carri\u00e8re Tools' },
        ]},
        // --- Final CTA ---
        { sectionKey: 'finalCta', sectionLabel: 'Final CTA', sectionType: 'cta', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Build a CV You Can Apply With Confidence', value_nl: 'Bouw een CV Waar Je Met Vertrouwen Mee Kunt Solliciteren' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Start building a clear, professional CV with guided support designed for real job applications.', value_nl: 'Begin met het maken van een duidelijk, professioneel CV met begeleide ondersteuning.' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Build Your CV for Free', value_nl: 'Bouw Gratis Je CV' },
          { key: 'ctaLink', type: 'url', label: 'CTA Button Link', value_en: '/dashboard', value_nl: '/dashboard' },
        ]},
      ];

    /* ================================================================
       CV MATCHING
       ================================================================ */
    case 'cv-matching':
      return [
        // --- Hero ---
        { sectionKey: 'hero', sectionLabel: 'Hero Section', sectionType: 'hero', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Match Your CV to Any Job in Seconds', value_nl: 'Match Je CV met Elke Vacature in Seconden' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Upload your CV and paste a job description to instantly see how well you match. Get keyword analysis, gap identification, and tailored rewrite suggestions.', value_nl: 'Upload je CV en plak een vacaturetekst om direct te zien hoe goed je matcht. Ontvang zoekwoordanalyse, identificatie van hiaten en op maat gemaakte herschrijfsuggesties.' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Match My CV Now', value_nl: 'Match Mijn CV Nu' },
          { key: 'ctaLink', type: 'url', label: 'CTA Button Link', value_en: '/login', value_nl: '/login' },
          { key: 'videoUrl', type: 'url', label: 'Video URL', value_en: 'https://player.vimeo.com/video/1125654210', value_nl: 'https://player.vimeo.com/video/1125654210' },
          { key: 'videoOverlayTitle', type: 'text', label: 'Video Overlay Title', value_en: 'See How CV Matching Works', value_nl: 'Bekijk Hoe CV Matching Werkt' },
          { key: 'videoOverlaySubtitle', type: 'text', label: 'Video Overlay Subtitle', value_en: 'Watch how our AI compares your CV against real job descriptions', value_nl: 'Bekijk hoe onze AI je CV vergelijkt met echte vacatureteksten' },
        ]},
        // --- How It Works ---
        { sectionKey: 'howItWorks', sectionLabel: 'How It Works', sectionType: 'steps', fields: [
          { key: 'title', type: 'text', label: 'Section Title', value_en: 'How Our CV Matcher Works', value_nl: 'Hoe Onze CV Matcher Werkt' },
        ], items: [
          { stepNumber: '1', title: 'Upload Your CV', description: 'Upload your existing CV or paste your text. Our system parses your skills, experience, and qualifications automatically.' },
          { stepNumber: '2', title: 'Paste the Job Description', description: 'Copy and paste any job posting URL or description. The AI extracts key requirements, responsibilities, and must-have skills.' },
          { stepNumber: '3', title: 'Get Your Match Score', description: 'Receive an instant match percentage with a detailed breakdown of keyword alignment, experience fit, and section-by-section analysis.' },
          { stepNumber: '4', title: 'Improve and Reapply', description: 'Follow prioritized suggestions to fill gaps, add missing keywords, and strengthen weak sections before submitting your application.' },
        ], items_nl: [
          { stepNumber: '1', title: 'Upload Je CV', description: 'Upload je bestaande CV of plak je tekst. Ons systeem analyseert automatisch je vaardigheden, ervaring en kwalificaties.' },
          { stepNumber: '2', title: 'Plak de Vacaturetekst', description: 'Kopieer en plak een vacature-URL of beschrijving. De AI haalt de belangrijkste eisen, verantwoordelijkheden en vereiste vaardigheden eruit.' },
          { stepNumber: '3', title: 'Ontvang Je Matchscore', description: 'Ontvang direct een matchpercentage met een gedetailleerde uitsplitsing van zoekwoordafstemming, ervaringsmatch en analyse per sectie.' },
          { stepNumber: '4', title: 'Verbeter en Solliciteer Opnieuw', description: 'Volg geprioriteerde suggesties om hiaten op te vullen, ontbrekende zoekwoorden toe te voegen en zwakke secties te versterken voordat je solliciteert.' },
        ] },
        // --- Features ---
        { sectionKey: 'features', sectionLabel: 'What Makes Our CV Matcher Different', sectionType: 'features', fields: [
          { key: 'title', type: 'text', label: 'Section Title', value_en: 'What Makes Our CV Matcher Different', value_nl: 'Wat Onze CV Matcher Anders Maakt' },
        ], items: [
          { title: 'Instant Match Scoring', description: 'Get a percentage match score within seconds, showing exactly how your CV aligns with the job requirements across all key dimensions.' },
          { title: 'Missing Keyword Detection', description: 'Identify critical keywords and phrases from the job description that are absent from your CV, so you can add them before applying.' },
          { title: 'Section-by-Section Analysis', description: 'See how each CV section (summary, experience, skills, education) individually scores against the job requirements.' },
          { title: 'Smart Rewrite Suggestions', description: 'Receive AI-powered suggestions to rephrase your experience bullets and summary to better match the role without sounding forced.' },
          { title: 'Export Match Report', description: 'Download a detailed PDF report showing your match score, gaps, and improvement priorities to guide your application strategy.' },
        ], items_nl: [
          { title: 'Directe Matchscore', description: 'Ontvang binnen seconden een matchpercentage dat precies laat zien hoe je CV aansluit bij de functie-eisen op alle belangrijke punten.' },
          { title: 'Detectie van Ontbrekende Zoekwoorden', description: 'Identificeer cruciale zoekwoorden en zinnen uit de vacaturetekst die ontbreken in je CV, zodat je ze kunt toevoegen voor je solliciteert.' },
          { title: 'Analyse per Sectie', description: 'Bekijk hoe elke CV-sectie (samenvatting, ervaring, vaardigheden, opleiding) afzonderlijk scoort ten opzichte van de functie-eisen.' },
          { title: 'Slimme Herschrijfsuggesties', description: 'Ontvang AI-gestuurde suggesties om je ervaringspunten en samenvatting te herformuleren zodat ze beter aansluiten bij de functie, zonder geforceerd te klinken.' },
          { title: 'Exporteer Matchrapport', description: 'Download een gedetailleerd PDF-rapport met je matchscore, hiaten en verbeterprioriteiten om je sollicitatiestrategie te sturen.' },
        ] },
        // --- Testimonials ---
        { sectionKey: 'testimonials', sectionLabel: 'Testimonials', sectionType: 'testimonials', fields: [
          { key: 'title', type: 'text', label: 'Section Title', value_en: 'Hear from Job Seekers Like You', value_nl: 'Ervaringen van Werkzoekenden Zoals Jij' },
        ], items: [
          { name: 'Sarah Chen', role: 'Product Manager', company: 'Google', quote: 'The match score showed me exactly which keywords I was missing. Added them and got called back within a week!', image: '/uploads/testimonials/sarah-chen.jpg', stat: '+180% profile views' },
          { name: 'Marcus Johnson', role: 'Senior Developer', company: 'Microsoft', quote: 'I was applying to roles that were only 40% matches. Now I focus on 80%+ matches and my callback rate tripled.', image: '/uploads/testimonials/marcus-johnson.jpg', stat: '+250% recruiter reach' },
          { name: 'Emily Rodriguez', role: 'Marketing Director', company: 'Spotify', quote: 'The section-by-section breakdown made it so clear where my CV was weak. Fixed it in 20 minutes.', image: '/uploads/testimonials/emily-rodriguez.jpg', stat: '+320% engagement' },
          { name: 'David Kim', role: 'Data Scientist', company: 'Netflix', quote: 'Finally stopped guessing if my CV was good enough. The match report gives real, actionable data.', image: '/uploads/testimonials/david-kim.jpg', stat: '+400% job inquiries' },
        ], items_nl: [
          { name: 'Sarah Chen', role: 'Productmanager', company: 'Google', quote: 'De matchscore liet me precies zien welke zoekwoorden ik miste. Toegevoegd en binnen een week teruggebeld!', image: '/uploads/testimonials/sarah-chen.jpg', stat: '+180% profielweergaven' },
          { name: 'Marcus Johnson', role: 'Senior Developer', company: 'Microsoft', quote: 'Ik solliciteerde op functies met slechts 40% match. Nu focus ik op 80%+ matches en mijn terugbelpercentage is verdrievoudigd.', image: '/uploads/testimonials/marcus-johnson.jpg', stat: '+250% recruiterbereik' },
          { name: 'Emily Rodriguez', role: 'Marketingdirecteur', company: 'Spotify', quote: 'De analyse per sectie maakte direct duidelijk waar mijn CV zwak was. In 20 minuten opgelost.', image: '/uploads/testimonials/emily-rodriguez.jpg', stat: '+320% betrokkenheid' },
          { name: 'David Kim', role: 'Data Scientist', company: 'Netflix', quote: 'Eindelijk gestopt met gokken of mijn CV goed genoeg was. Het matchrapport geeft echte, bruikbare data.', image: '/uploads/testimonials/david-kim.jpg', stat: '+400% sollicitatieverzoeken' },
        ] },
        // --- Understanding ---
        { sectionKey: 'understanding', sectionLabel: 'Understanding Section', sectionType: 'articles', fields: [
          { key: 'title', type: 'text', label: 'Section Title', value_en: 'Understanding How CV Matching Improves Your Applications', value_nl: 'Begrijpen Hoe CV Matching Je Sollicitaties Verbetert' },
        ], items: [
          { title: '1. Why Match Scores Matter for Job Applications', content: 'Most recruiters spend less than 10 seconds scanning a CV. A high match score means your CV immediately signals relevance — the right keywords in the right places. Our matcher analyzes alignment across skills, experience, and qualifications so you can see your CV the way an ATS does.' },
          { title: '2. How Keyword Gaps Cost You Interviews', content: 'Job descriptions contain specific terms that ATS systems and recruiters search for. Missing even a few critical keywords can drop your CV to the bottom of the pile. Our tool identifies these gaps so you can address them before hitting submit.' },
          { title: '3. From Match Score to Interview — Closing the Gap', content: 'A match score is only useful if you act on it. Our tool doesn\'t just show the number — it gives you prioritized, section-specific suggestions so you know exactly what to fix, where to fix it, and how to phrase it for maximum impact.' },
        ], items_nl: [
          { title: '1. Waarom Matchscores Belangrijk Zijn voor Sollicitaties', content: 'De meeste recruiters besteden minder dan 10 seconden aan het scannen van een CV. Een hoge matchscore betekent dat je CV direct relevantie uitstraalt \u2014 de juiste zoekwoorden op de juiste plekken. Onze matcher analyseert de afstemming op vaardigheden, ervaring en kwalificaties zodat je je CV kunt zien zoals een ATS dat doet.' },
          { title: '2. Hoe Ontbrekende Zoekwoorden Je Gesprekken Kosten', content: 'Vacatureteksten bevatten specifieke termen waar ATS-systemen en recruiters op zoeken. Het missen van slechts een paar cruciale zoekwoorden kan je CV naar de onderkant van de stapel verplaatsen. Onze tool identificeert deze hiaten zodat je ze kunt aanpakken voordat je op verzenden klikt.' },
          { title: '3. Van Matchscore naar Gesprek \u2014 Het Gat Dichten', content: 'Een matchscore is alleen nuttig als je er actie op onderneemt. Onze tool toont niet alleen het cijfer \u2014 het geeft je geprioriteerde, sectiespecifieke suggesties zodat je precies weet wat je moet aanpassen, waar je het moet aanpassen en hoe je het moet formuleren voor maximaal effect.' },
        ] },
        // --- Other Tools ---
        { sectionKey: 'otherTools', sectionLabel: 'Explore Other Career Tools', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Section Title', value_en: 'Explore Other Career Tools', value_nl: 'Ontdek Andere Carri\u00e8re Tools' },
        ]},
        // --- Final CTA ---
        { sectionKey: 'finalCta', sectionLabel: 'Final CTA', sectionType: 'cta', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Stop Guessing. Start Matching.', value_nl: 'Stop met Gokken. Begin met Matchen.' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Upload your CV and paste any job description to see your match score instantly. No signup required.', value_nl: 'Upload je CV en plak een vacaturetekst om direct je matchscore te zien. Geen registratie nodig.' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Match My CV for Free', value_nl: 'Match Mijn CV Gratis' },
          { key: 'ctaLink', type: 'url', label: 'CTA Button Link', value_en: '/login', value_nl: '/login' },
        ]},
      ];

    /* ================================================================
       LINKEDIN ANALYZER
       ================================================================ */
    case 'linkedin-analyzer':
      return [
        // --- Hero ---
        { sectionKey: 'hero', sectionLabel: 'Hero Section', sectionType: 'hero', fields: [
          { key: 'badge', type: 'text', label: 'Badge Text', value_en: 'LinkedIn Analyzer powered by CV Labz', value_nl: 'LinkedIn Analyzer mogelijk gemaakt door CV Labz' },
          { key: 'title', type: 'text', label: 'Title', value_en: 'Optimize Your LinkedIn Profile for Recruiters & Algorithms', value_nl: 'Optimaliseer Je LinkedIn Profiel voor Recruiters en Algoritmes' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Get AI-powered insights to make your LinkedIn profile irresistible to recruiters. Free analysis in under 2 minutes.', value_nl: 'Ontvang AI-gestuurde inzichten om je LinkedIn-profiel onweerstaanbaar te maken voor recruiters. Gratis analyse in minder dan 2 minuten.' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Analyze My Profile \u2013 It\'s Free', value_nl: 'Analyseer Mijn Profiel \u2013 Het is Gratis' },
          { key: 'ctaLink', type: 'url', label: 'CTA Button Link', value_en: '/login', value_nl: '/login' },
          { key: 'videoUrl', type: 'url', label: 'Video URL', value_en: 'https://player.vimeo.com/video/1125654447', value_nl: 'https://player.vimeo.com/video/1125654447' },
          { key: 'stat1Label', type: 'text', label: 'Stat 1 Label', value_en: 'Profiles Analyzed', value_nl: 'Profielen Geanalyseerd' },
          { key: 'stat1Value', type: 'text', label: 'Stat 1 Value', value_en: '50K+', value_nl: '50K+' },
          { key: 'stat2Label', type: 'text', label: 'Stat 2 Label', value_en: 'User Rating', value_nl: 'Gebruikersbeoordeling' },
          { key: 'stat2Value', type: 'text', label: 'Stat 2 Value', value_en: '4.9/5', value_nl: '4.9/5' },
          { key: 'stat3Label', type: 'text', label: 'Stat 3 Label', value_en: 'Profile Improvement', value_nl: 'Profielverbetering' },
          { key: 'stat3Value', type: 'text', label: 'Stat 3 Value', value_en: '85%', value_nl: '85%' },
        ]},
        // --- Reimagined ---
        { sectionKey: 'reimagined', sectionLabel: 'Your LinkedIn Profile, Reimagined', sectionType: 'analysis', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Your LinkedIn Profile, Reimagined', value_nl: 'Je LinkedIn Profiel, Opnieuw Vormgegeven' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'See exactly how our AI analyzes your profile and provides actionable insights to help you stand out to recruiters and optimize for LinkedIn\'s algorithm', value_nl: 'Bekijk precies hoe onze AI je profiel analyseert en bruikbare inzichten biedt om op te vallen bij recruiters en te optimaliseren voor het LinkedIn-algoritme' },
        ], items: [
          { title: 'Profile Summary', badge: 'Summary', score: '85', bullets: 'Strong headline optimization|Complete profile sections|Professional photo' },
          { title: 'Keyword Analysis', badge: 'Keyword Scan', score: '72', bullets: '15 industry keywords found|Good skill alignment|SEO optimized' },
          { title: 'Improvement Tips', badge: 'Improvement Tips', score: '91', bullets: '12 actionable recommendations|Priority-ranked suggestions|Quick wins identified' },
        ], items_nl: [
          { title: 'Profielsamenvatting', badge: 'Samenvatting', score: '85', bullets: 'Sterke koptekstoptimalisatie|Volledig ingevulde profielsecties|Professionele foto' },
          { title: 'Zoekwoordanalyse', badge: 'Zoekwoordscan', score: '72', bullets: '15 branche-zoekwoorden gevonden|Goede vaardigheidsafstemming|SEO-geoptimaliseerd' },
          { title: 'Verbettertips', badge: 'Verbettertips', score: '91', bullets: '12 bruikbare aanbevelingen|Op prioriteit gerangschikte suggesties|Snelle verbeterpunten ge\u00efdentificeerd' },
        ] },
        // --- Comprehensive ---
        { sectionKey: 'comprehensive', sectionLabel: 'Comprehensive LinkedIn Profile Analysis', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Comprehensive LinkedIn Profile Analysis', value_nl: 'Uitgebreide LinkedIn Profielanalyse' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Our AI-powered analysis examines every aspect of your LinkedIn profile to help you optimize for recruiters and LinkedIn\'s algorithm', value_nl: 'Onze AI-gestuurde analyse onderzoekt elk aspect van je LinkedIn-profiel om je te helpen optimaliseren voor recruiters en het LinkedIn-algoritme' },
        ]},
        // --- Transform ---
        { sectionKey: 'transform', sectionLabel: 'Transform Your Professional Presence', sectionType: 'benefits', fields: [
          { key: 'badge', type: 'text', label: 'Badge Text', value_en: 'Why LinkedIn Optimization Matters', value_nl: 'Waarom LinkedIn Optimalisatie Belangrijk Is' },
          { key: 'title', type: 'text', label: 'Title', value_en: 'Transform Your Professional Presence', value_nl: 'Transformeer Je Professionele Aanwezigheid' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Unlock the full potential of your LinkedIn profile with data-driven optimization that gets you noticed by the right people', value_nl: 'Ontgrendel het volledige potentieel van je LinkedIn-profiel met datagestuurde optimalisatie waardoor je opvalt bij de juiste mensen' },
        ], items: [
          { title: '3x More Profile Views', badge: '+300%', description: 'Optimized profiles receive significantly more visibility from recruiters and industry professionals' },
          { title: 'Higher Search Rankings', badge: 'Top 10%', description: 'Improved keyword optimization helps you appear in more relevant LinkedIn searches' },
          { title: 'Professional Credibility', badge: '95% Trust', description: 'A polished profile builds trust and demonstrates your commitment to professional growth' },
        ], items_nl: [
          { title: '3x Meer Profielweergaven', badge: '+300%', description: 'Geoptimaliseerde profielen krijgen aanzienlijk meer zichtbaarheid bij recruiters en professionals uit de branche' },
          { title: 'Hogere Zoekposities', badge: 'Top 10%', description: 'Verbeterde zoekwoordoptimalisatie helpt je om in meer relevante LinkedIn-zoekopdrachten te verschijnen' },
          { title: 'Professionele Geloofwaardigheid', badge: '95% Vertrouwen', description: 'Een verzorgd profiel wekt vertrouwen en toont je toewijding aan professionele groei' },
        ] },
        // --- Testimonials ---
        { sectionKey: 'testimonials', sectionLabel: 'Testimonials', sectionType: 'testimonials', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Real Results from Real Professionals', value_nl: 'Echte Resultaten van Echte Professionals' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'See how our LinkedIn analyzer helped professionals boost their career visibility', value_nl: 'Bekijk hoe onze LinkedIn-analyzer professionals hielp hun carri\u00e8rezichtbaarheid te vergroten' },
        ], items: [
          { name: 'Sarah M.', role: 'Marketingmanager', title: 'From invisible to shortlisted in 2 weeks', quote: 'The CV builder showed me exactly what recruiters look for. My response rate went from zero to four interviews.', thumbnail: '/uploads/video-thumbnails/sarah-m-video.png', duration: '0:32' },
          { name: 'Emily R.', role: 'Finance Graduate', title: 'Walked into my interview fully prepared', quote: 'The AI interview coach anticipated every question I got asked. I\'ve never felt this confident walking into a final round', thumbnail: '/uploads/video-thumbnails/emily-r-video.png', duration: '0:28' },
          { name: 'Laura P.', role: 'Business Analyst', title: 'Cracked my case interview on the first try', quote: 'The business case simulations are frighteningly realistic. The AI feedback after each case made my structuring sharper every round', thumbnail: '/uploads/video-thumbnails/laura-p-video.png', duration: '0:25' },
        ], items_nl: [
          { name: 'Sarah M.', role: 'Marketingmanager', title: 'Van onzichtbaar naar shortlist in 2 weken', quote: 'De CV-bouwer liet me precies zien waar recruiters op letten. Mijn responspercentage ging van nul naar vier gesprekken.', thumbnail: '/uploads/video-thumbnails/sarah-m-video.png', duration: '0:32' },
          { name: 'Emily R.', role: 'Finance Afgestudeerde', title: 'Volledig voorbereid mijn gesprek in gelopen', quote: 'De AI-interviewcoach voorspelde elke vraag die me gesteld werd. Ik heb me nog nooit zo zelfverzekerd gevoeld bij een eindgesprek.', thumbnail: '/uploads/video-thumbnails/emily-r-video.png', duration: '0:28' },
          { name: 'Laura P.', role: 'Business Analyst', title: 'Mijn casegesprek in \u00e9\u00e9n keer gehaald', quote: 'De business case-simulaties zijn angstaanjagend realistisch. De AI-feedback na elke case maakte mijn structurering elke ronde scherper.', thumbnail: '/uploads/video-thumbnails/laura-p-video.png', duration: '0:25' },
        ] },
        // --- Steps ---
        { sectionKey: 'steps', sectionLabel: 'How to Analyze in 3 Steps', sectionType: 'steps', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'How to Analyze Your LinkedIn in 3 Simple Steps', value_nl: 'Hoe Je LinkedIn Analyseren in 3 Eenvoudige Stappen' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Get professional insights into your LinkedIn profile optimization in minutes', value_nl: 'Ontvang professionele inzichten in je LinkedIn-profieloptimalisatie binnen enkele minuten' },
        ], items: [
          { stepNumber: '01', title: 'Connect Your Profile', description: 'Simply paste your LinkedIn profile URL or connect directly through our secure integration.' },
          { stepNumber: '02', title: 'AI Analysis', description: 'Our advanced AI scans your profile for keywords, engagement potential, and recruiter appeal.' },
          { stepNumber: '03', title: 'Get Your Report', description: 'Receive detailed insights and actionable recommendations to optimize your LinkedIn presence.' },
        ], items_nl: [
          { stepNumber: '01', title: 'Verbind Je Profiel', description: 'Plak eenvoudig je LinkedIn profiel-URL of maak direct verbinding via onze beveiligde integratie.' },
          { stepNumber: '02', title: 'AI-Analyse', description: 'Onze geavanceerde AI scant je profiel op zoekwoorden, betrokkenheidspotentieel en aantrekkingskracht voor recruiters.' },
          { stepNumber: '03', title: 'Ontvang Je Rapport', description: 'Ontvang gedetailleerde inzichten en bruikbare aanbevelingen om je LinkedIn-aanwezigheid te optimaliseren.' },
        ] },
        // --- Other Tools ---
        { sectionKey: 'otherTools', sectionLabel: 'Other Tools', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Other Tools to Supercharge Your Application', value_nl: 'Andere Tools om Je Sollicitatie te Versterken' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Complete your job search toolkit with our comprehensive suite of career tools', value_nl: 'Maak je sollicitatietoolkit compleet met onze uitgebreide reeks carri\u00e8retools' },
        ]},
        // --- FAQ ---
        { sectionKey: 'faq', sectionLabel: 'FAQ', sectionType: 'faq', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Frequently Asked Questions', value_nl: 'Veelgestelde Vragen' },
          { key: 'subtitle', type: 'text', label: 'Subtitle', value_en: 'Everything you need to know about our free LinkedIn profile analysis', value_nl: 'Alles wat je moet weten over onze gratis LinkedIn-profielanalyse' },
        ], items: [
          { q: 'What is the LinkedIn Profile Analyzer?', a: 'The LinkedIn Profile Analyzer is a free AI-powered tool that evaluates your LinkedIn profile across multiple dimensions including headline optimization, keyword density, profile completeness, and recruiter appeal. It provides a detailed score and actionable recommendations to improve your visibility.' },
          { q: 'How does the LinkedIn Profile Analyzer work?', a: 'Simply paste your LinkedIn profile URL and our AI will scan your profile in under 2 minutes. It analyzes your headline, summary, experience sections, skills, and engagement patterns against best practices used by top-performing LinkedIn profiles in your industry.' },
          { q: 'Is my data safe when using the LinkedIn Profile Analyzer?', a: 'Absolutely. We only access publicly available information from your LinkedIn profile. Your data is processed securely, never shared with third parties, and you can request deletion at any time. We are fully GDPR compliant.' },
          { q: 'Do I need a LinkedIn account to use the analyzer?', a: 'Yes, you need an active LinkedIn profile with a public URL. The analyzer works by scanning your public profile information to provide optimization recommendations.' },
          { q: 'How long does it take to get the results?', a: 'Results are generated in under 2 minutes. You\'ll receive a comprehensive report covering your profile score, keyword analysis, headline evaluation, and prioritized improvement recommendations.' },
        ], items_nl: [
          { q: 'Wat is de LinkedIn Profiel Analyzer?', a: 'De LinkedIn Profiel Analyzer is een gratis AI-gestuurd hulpmiddel dat je LinkedIn-profiel beoordeelt op meerdere dimensies, waaronder koptekstoptimalisatie, zoekwoorddichtheid, profielvolledigheid en aantrekkingskracht voor recruiters. Het biedt een gedetailleerde score en bruikbare aanbevelingen om je zichtbaarheid te verbeteren.' },
          { q: 'Hoe werkt de LinkedIn Profiel Analyzer?', a: 'Plak eenvoudig je LinkedIn profiel-URL en onze AI scant je profiel in minder dan 2 minuten. Het analyseert je koptekst, samenvatting, ervaringssecties, vaardigheden en betrokkenheidspatronen aan de hand van best practices van toppresterende LinkedIn-profielen in jouw branche.' },
          { q: 'Zijn mijn gegevens veilig bij het gebruik van de LinkedIn Profiel Analyzer?', a: 'Absoluut. We hebben alleen toegang tot openbaar beschikbare informatie op je LinkedIn-profiel. Je gegevens worden veilig verwerkt, nooit gedeeld met derden, en je kunt op elk moment verwijdering aanvragen. We zijn volledig AVG-conform.' },
          { q: 'Heb ik een LinkedIn-account nodig om de analyzer te gebruiken?', a: 'Ja, je hebt een actief LinkedIn-profiel met een openbare URL nodig. De analyzer werkt door je openbare profielinformatie te scannen om optimalisatieaanbevelingen te bieden.' },
          { q: 'Hoe lang duurt het om de resultaten te ontvangen?', a: 'Resultaten worden gegenereerd in minder dan 2 minuten. Je ontvangt een uitgebreid rapport met je profielscore, zoekwoordanalyse, koptekstevaluatie en geprioriteerde verbeteraanbevelingen.' },
        ] },
        // --- Final CTA ---
        { sectionKey: 'finalCta', sectionLabel: 'Final CTA', sectionType: 'cta', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Ready to Make Your LinkedIn Work for You?', value_nl: 'Klaar om Je LinkedIn voor Je te Laten Werken?' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Join thousands of professionals who\'ve optimized their LinkedIn profiles with our AI-powered analysis', value_nl: 'Sluit je aan bij duizenden professionals die hun LinkedIn-profiel hebben geoptimaliseerd met onze AI-gestuurde analyse' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Start Your Free Analysis', value_nl: 'Start Je Gratis Analyse' },
        ]},
      ];

    /* ================================================================
       MOTIVATION LETTER
       ================================================================ */
    case 'motivation-letter':
      return [
        // --- Hero ---
        { sectionKey: 'hero', sectionLabel: 'Hero Section', sectionType: 'hero', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Craft Cover Letters That Get You Hired', value_nl: 'Schrijf Motivatiebrieven Die Je Aangenomen Krijgen' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Create role specific cover letters that clearly connect your experience to what employers are looking for.', value_nl: 'Maak rolspecifieke motivatiebrieven die je ervaring duidelijk koppelen aan wat werkgevers zoeken.' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Create Your Cover Letter', value_nl: 'Maak Je Motivatiebrief' },
          { key: 'ctaLink', type: 'url', label: 'CTA Button Link', value_en: '/login', value_nl: '/login' },
          { key: 'videoUrl', type: 'url', label: 'Video URL', value_en: 'https://player.vimeo.com/video/1125654292', value_nl: 'https://player.vimeo.com/video/1125654292' },
          { key: 'videoOverlayTitle', type: 'text', label: 'Video Overlay Title', value_en: 'Create Professional Cover Letters in Minutes', value_nl: 'Maak Professionele Motivatiebrieven in Minuten' },
          { key: 'liveLabel', type: 'text', label: 'Live Badge Label', value_en: 'LIVE', value_nl: 'LIVE' },
        ]},
        // --- Why Use ---
        { sectionKey: 'whyUse', sectionLabel: 'Why Use Our Cover Letter Builder', sectionType: 'features', fields: [
          { key: 'badge', type: 'text', label: 'Badge Text', value_en: 'Why Use Our Cover Letter Builder', value_nl: 'Waarom Onze Motivatiebrief Bouwer Gebruiken' },
          { key: 'title', type: 'text', label: 'Title', value_en: 'Why Use Our Motivation Letter Builder?', value_nl: 'Waarom Onze Motivatiebrief Bouwer Gebruiken?' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Our motivation and cover letter builder is designed to help you write clear, role-aligned motivation letters that make a strong impression on hiring managers.', value_nl: 'Onze motivatiebrief-bouwer is ontworpen om je te helpen heldere, rolgerichte motivatiebrieven te schrijven die indruk maken op hiring managers.' },
        ], items: [
          { title: 'Context-Aware Suggestions', description: 'Receive writing guidance that adapts to your role, industry, and experience to help you craft the most relevant and compelling cover letter.' },
          { title: 'Smart Job Matching', description: 'Analyze job descriptions and tailor your cover letter to match key requirements, ensuring your application stands out to hiring managers.' },
          { title: 'Professional Tone Control', description: 'Built-in language checks help maintain a clear, professional tone throughout your letter while keeping your authentic voice.' },
          { title: 'Industry & Role Personalization', description: 'Adjust your cover letter based on industry, job level, and role type to ensure the right emphasis and language for your target position.' },
          { title: 'Instant Export and Formatting', description: 'Download your cover letter in a professionally formatted PDF that is ATS-compliant and ready to submit with your application.' },
          { title: 'Focused Writing Assistance', description: 'Generate structured, original content that highlights your strengths and creates a compelling narrative for your application.' },
        ], items_nl: [
          { title: 'Contextbewuste Suggesties', description: 'Ontvang schrijfbegeleiding die zich aanpast aan je functie, branche en ervaring om je te helpen de meest relevante en overtuigende motivatiebrief te schrijven.' },
          { title: 'Slimme Vacaturematch', description: 'Analyseer vacatureteksten en stem je motivatiebrief af op de belangrijkste eisen, zodat je sollicitatie opvalt bij hiring managers.' },
          { title: 'Professionele Tooncontrole', description: 'Ingebouwde taalcontroles helpen een heldere, professionele toon te behouden in je brief, terwijl je authentieke stem behouden blijft.' },
          { title: 'Branche- en Rolpersonalisatie', description: 'Pas je motivatiebrief aan op basis van branche, functieniveau en type rol voor de juiste nadruk en taal voor je gewenste positie.' },
          { title: 'Direct Exporteren en Opmaken', description: 'Download je motivatiebrief als professioneel opgemaakt PDF-bestand dat ATS-compatibel is en klaar om mee te sturen met je sollicitatie.' },
          { title: 'Gerichte Schrijfondersteuning', description: 'Genereer gestructureerde, originele inhoud die je sterke punten benadrukt en een overtuigend verhaal cre\u00ebert voor je sollicitatie.' },
        ] },
        // --- How It Works ---
        { sectionKey: 'howItWorks', sectionLabel: 'How It Works', sectionType: 'steps', fields: [
          { key: 'badge', type: 'text', label: 'Badge Text', value_en: 'Simple 3-Step Process', value_nl: 'Eenvoudig 3-Stappenproces' },
          { key: 'title', type: 'text', label: 'Title', value_en: 'How It Works', value_nl: 'Hoe Het Werkt' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Create a professional cover letter in a few simple steps with our AI-powered motivation letter builder.', value_nl: 'Maak een professionele motivatiebrief in een paar eenvoudige stappen met onze AI-gestuurde motivatiebrief-bouwer.' },
        ], items: [
          { stepNumber: '01', title: 'Upload Your CV or Create One', description: 'Upload your existing CV or create a new one using the CV builder. The system will parse your experience and skills automatically.' },
          { stepNumber: '02', title: 'Add Job Details or Use Smart Suggestions', description: 'Paste a job description or let the system analyze your background to generate targeted suggestions for your cover letter.' },
          { stepNumber: '03', title: 'Review, Edit, and Download', description: 'Review the generated cover letter, make any personal adjustments, and download it in a professionally formatted PDF.' },
        ], items_nl: [
          { stepNumber: '01', title: 'Upload Je CV of Maak Er Een', description: 'Upload je bestaande CV of maak een nieuw CV met de CV-bouwer. Het systeem analyseert automatisch je ervaring en vaardigheden.' },
          { stepNumber: '02', title: 'Voeg Vacaturedetails Toe of Gebruik Slimme Suggesties', description: 'Plak een vacaturetekst of laat het systeem je achtergrond analyseren om gerichte suggesties voor je motivatiebrief te genereren.' },
          { stepNumber: '03', title: 'Controleer, Bewerk en Download', description: 'Bekijk de gegenereerde motivatiebrief, maak persoonlijke aanpassingen en download het als professioneel opgemaakt PDF-bestand.' },
        ] },
        // --- AI Support ---
        { sectionKey: 'aiSupport', sectionLabel: 'Built on Structured AI Support', sectionType: 'features', fields: [
          { key: 'badge', type: 'text', label: 'Badge Text', value_en: 'Smart Optimization Features', value_nl: 'Slimme Optimalisatiefuncties' },
          { key: 'title', type: 'text', label: 'Title', value_en: 'Built on Structured, Practical AI Support', value_nl: 'Gebouwd op Gestructureerde, Praktische AI-Ondersteuning' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'The platform combines guided AI assistance with proven writing principles to help you create clear, role-aligned cover letters for real job applications.', value_nl: 'Het platform combineert begeleide AI-assistentie met bewezen schrijfprincipes om je te helpen heldere, rolgerichte motivatiebrieven te maken voor echte sollicitaties.' },
        ], items: [
          { title: 'ATS-Optimized Formatting', description: 'Cover letters are formatted clearly and consistently so they remain readable and well-structured when processed by applicant tracking systems.' },
          { title: 'Job Description Keyword Alignment', description: 'Relevant terms and responsibilities from job descriptions are identified and reflected naturally to improve relevance without forcing language.' },
          { title: 'Industry Relevant Templates', description: 'Templates, such as motivation letter templates, are designed around different industries and career levels, helping you present your experience in the right context.' },
        ], items_nl: [
          { title: 'ATS-Geoptimaliseerde Opmaak', description: 'Motivatiebrieven worden helder en consistent opgemaakt zodat ze leesbaar en goed gestructureerd blijven wanneer ze door sollicitatiesystemen worden verwerkt.' },
          { title: 'Zoekwoordafstemming op Vacaturetekst', description: 'Relevante termen en verantwoordelijkheden uit vacatureteksten worden ge\u00efdentificeerd en op natuurlijke wijze verwerkt om de relevantie te verbeteren zonder geforceerd taalgebruik.' },
          { title: 'Brancherelevante Templates', description: 'Templates, zoals motivatiebrief-templates, zijn ontworpen rondom verschillende branches en carri\u00e8reniveaus, zodat je je ervaring in de juiste context kunt presenteren.' },
        ] },
        // --- Samples ---
        { sectionKey: 'samples', sectionLabel: 'Sample Cover Letters', sectionType: 'samples', fields: [
          { key: 'badge', type: 'text', label: 'Badge Text', value_en: 'Real Success Examples', value_nl: 'Echte Succesvoorbeelden' },
          { key: 'title', type: 'text', label: 'Title', value_en: 'Explore Sample Cover Letters', value_nl: 'Bekijk Voorbeeldmotivatiebrieven' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'See examples of role-specific cover letters created for different industries and positions.', value_nl: 'Bekijk voorbeelden van rolspecifieke motivatiebrieven voor verschillende branches en functies.' },
        ], items: [
          { title: 'Software Engineer at Tech Startup', company: 'InnovateTech', tag: 'Technology', rating: '4.9', response: '85% response' },
          { title: 'Marketing Manager at Fortune 500', company: 'GlobalCorp', tag: 'Marketing', rating: '4.8', response: '92% response' },
          { title: 'Data Scientist at Healthcare', company: 'MedAnalytics', tag: 'Healthcare', rating: '4.7', response: '88% response' },
        ], items_nl: [
          { title: 'Software Engineer bij Tech Startup', company: 'InnovateTech', tag: 'Technologie', rating: '4.9', response: '85% respons' },
          { title: 'Marketingmanager bij Fortune 500', company: 'GlobalCorp', tag: 'Marketing', rating: '4.8', response: '92% respons' },
          { title: 'Data Scientist bij Gezondheidszorg', company: 'MedAnalytics', tag: 'Gezondheidszorg', rating: '4.7', response: '88% respons' },
        ] },
        // --- Samples CTA ---
        { sectionKey: 'samplesCta', sectionLabel: 'Samples CTA Block', sectionType: 'cta', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Create Your Own Professional Cover Letter', value_nl: 'Maak Je Eigen Professionele Motivatiebrief' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Build a role-specific cover letter with guided support designed for real job applications.', value_nl: 'Maak een rolspecifieke motivatiebrief met begeleide ondersteuning, ontworpen voor echte sollicitaties.' },
          { key: 'stat1', type: 'text', label: 'Stat 1', value_en: '89% Average response rate', value_nl: '89% Gemiddeld responspercentage' },
          { key: 'stat2', type: 'text', label: 'Stat 2', value_en: '3x More interviews', value_nl: '3x Meer gesprekken' },
          { key: 'stat3', type: 'text', label: 'Stat 3', value_en: '50K+ Letters created', value_nl: '50K+ Brieven gemaakt' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Start Creating Now', value_nl: 'Begin Nu met Maken' },
        ]},
        // --- Testimonials ---
        { sectionKey: 'testimonials', sectionLabel: 'Testimonials', sectionType: 'testimonials', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Feedback from Real Job Seekers', value_nl: 'Feedback van Echte Werkzoekenden' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Learn how clear, role-aligned cover letters helped candidates apply with confidence.', value_nl: 'Ontdek hoe heldere, rolgerichte motivatiebrieven kandidaten hielpen met vertrouwen te solliciteren.' },
        ], items: [
          { name: 'Sarah M.', role: 'Marketingmanager', title: 'From invisible to shortlisted in 2 weeks', quote: 'The CV builder showed me exactly what recruiters look for. My response rate went from zero to four interviews.', thumbnail: '/uploads/video-thumbnails/sarah-m-video.png', duration: '0:32' },
          { name: 'Emily R.', role: 'Finance Graduate', title: 'Walked into my interview fully prepared', quote: 'The AI interview coach anticipated every question I got asked. I\'ve never felt this confident walking into a final round', thumbnail: '/uploads/video-thumbnails/emily-r-video.png', duration: '0:28' },
          { name: 'Laura P.', role: 'Business Analyst', title: 'Cracked my case interview on the first try', quote: 'The business case simulations are frighteningly realistic. The AI feedback after each case made my structuring sharper every round', thumbnail: '/uploads/video-thumbnails/laura-p-video.png', duration: '0:25' },
        ], items_nl: [
          { name: 'Sarah M.', role: 'Marketingmanager', title: 'Van onzichtbaar naar shortlist in 2 weken', quote: 'De CV-bouwer liet me precies zien waar recruiters op letten. Mijn responspercentage ging van nul naar vier gesprekken.', thumbnail: '/uploads/video-thumbnails/sarah-m-video.png', duration: '0:32' },
          { name: 'Emily R.', role: 'Finance Afgestudeerde', title: 'Volledig voorbereid mijn gesprek in gelopen', quote: 'De AI-interviewcoach voorspelde elke vraag die me gesteld werd. Ik heb me nog nooit zo zelfverzekerd gevoeld bij een eindgesprek.', thumbnail: '/uploads/video-thumbnails/emily-r-video.png', duration: '0:28' },
          { name: 'Laura P.', role: 'Business Analyst', title: 'Mijn casegesprek in \u00e9\u00e9n keer gehaald', quote: 'De business case-simulaties zijn angstaanjagend realistisch. De AI-feedback na elke case maakte mijn structurering elke ronde scherper.', thumbnail: '/uploads/video-thumbnails/laura-p-video.png', duration: '0:25' },
        ] },
        // --- Testimonials CTA ---
        { sectionKey: 'testimonialsCta', sectionLabel: 'Testimonials CTA Block', sectionType: 'cta', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Ready to Write Your Perfect Cover Letter?', value_nl: 'Klaar om Je Perfecte Motivatiebrief te Schrijven?' },
          { key: 'subtitle', type: 'textarea', label: 'Subtitle', value_en: 'Join thousands of professionals who landed job interviews through CV Labz.', value_nl: 'Sluit je aan bij duizenden professionals die via CV Labz sollicitatiegesprekken hebben gekregen.' },
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Create My Cover Letter Free', value_nl: 'Maak Mijn Motivatiebrief Gratis' },
        ]},
      ];

    /* ================================================================
       ABOUT
       ================================================================ */
    case 'about':
      return [
        { sectionKey: 'hero', sectionLabel: 'Page Header', sectionType: 'hero', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'About CV Labz', value_nl: 'Over CV Labz' },
          { key: 'subtitle', type: 'text', label: 'Subtitle', value_en: 'Built by Recruiters, For Job Seekers', value_nl: 'Gebouwd door Recruiters, Voor Werkzoekenden' },
        ]},
        { sectionKey: 'intro', sectionLabel: 'Introduction', sectionType: 'text', fields: [
          { key: 'content', type: 'richtext', label: 'Introduction Text', value_en: 'CV Labz was founded and built by experienced recruiters who have seen firsthand what separates successful candidates from the rest. We\'ve been on the other side of the table, reviewing thousands of CVs, conducting countless interviews, and understanding exactly what employers are looking for. This inside knowledge drives everything we do.', value_nl: 'CV Labz is opgericht en gebouwd door ervaren recruiters die uit eerste hand hebben gezien wat succesvolle kandidaten onderscheidt van de rest. Wij hebben aan de andere kant van de tafel gezeten, duizenden cv\'s beoordeeld, talloze gesprekken gevoerd en begrijpen precies waar werkgevers naar zoeken. Deze insidekennis stuurt alles wat we doen.' },
        ]},
        { sectionKey: 'mission', sectionLabel: 'Our Mission', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Our Mission', value_nl: 'Onze Missie' },
          { key: 'content', type: 'richtext', label: 'Content', value_en: 'Empowering every job seeker to unlock their full potential and achieve career success through comprehensive preparation, personalized guidance, and innovative tools. We exist to bridge the gap between talent and opportunity. We believe that with the right preparation, tools, and support, every candidate can present their best self and secure the career they deserve.', value_nl: 'Elke werkzoekende in staat stellen om zijn of haar volledige potentieel te benutten en carri\u00e8resucces te bereiken door uitgebreide voorbereiding, persoonlijke begeleiding en innovatieve tools. Wij bestaan om de kloof tussen talent en kansen te overbruggen. Wij geloven dat met de juiste voorbereiding, tools en ondersteuning elke kandidaat het beste van zichzelf kan laten zien en de carri\u00e8re kan krijgen die hij of zij verdient.' },
        ]},
        { sectionKey: 'vision', sectionLabel: 'Our Vision', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Our Vision', value_nl: 'Onze Visie' },
          { key: 'content', type: 'richtext', label: 'Content', value_en: 'To be the most trusted career partner that transforms how people approach job searching. Turning anxiety into confidence, uncertainty into clarity, and potential into success.', value_nl: 'De meest vertrouwde carri\u00e8repartner zijn die de manier waarop mensen hun baanzoektocht aanpakken transformeert. Angst omzetten in vertrouwen, onzekerheid in helderheid en potentieel in succes.' },
        ]},
        { sectionKey: 'values', sectionLabel: 'Core Values', sectionType: 'values', fields: [], items: [
          { title: 'Genuine Care', description: 'We are genuinely invested in each person\'s success. Every tool we build, every piece of guidance we provide, stems from our sincere commitment to helping people achieve their career goals.' },
          { title: 'Comprehensive Preparation', description: 'We believe thorough preparation is the key to success. Our platform ensures candidates are ready for every aspect of their job search journey. From crafting compelling applications to acing interviews.' },
          { title: 'Accessibility', description: 'Career success shouldn\'t be reserved for those who can afford expensive career coaches. We make professional-grade career tools and guidance accessible to everyone.' },
          { title: 'Continuous Growth', description: 'The job market evolves, and so do we. We continuously enhance our platform to meet the changing needs of job seekers and employers.' },
        ], items_nl: [
          { title: 'Oprechte Betrokkenheid', description: 'We zijn oprecht betrokken bij het succes van ieder persoon. Elke tool die we bouwen, elk advies dat we geven, komt voort uit onze oprechte toewijding om mensen hun carri\u00e8redoelen te helpen bereiken.' },
          { title: 'Uitgebreide Voorbereiding', description: 'Wij geloven dat grondige voorbereiding de sleutel tot succes is. Ons platform zorgt ervoor dat kandidaten klaar zijn voor elk aspect van hun sollicitatietraject. Van het opstellen van overtuigende sollicitaties tot het excelleren in gesprekken.' },
          { title: 'Toegankelijkheid', description: 'Carri\u00e8resucces mag niet voorbehouden zijn aan mensen die dure loopbaancoaches kunnen betalen. Wij maken professionele carri\u00e8retools en begeleiding toegankelijk voor iedereen.' },
          { title: 'Continue Groei', description: 'De arbeidsmarkt ontwikkelt zich en wij ook. We verbeteren ons platform continu om te voldoen aan de veranderende behoeften van werkzoekenden en werkgevers.' },
        ] },
        // --- Promise ---
        { sectionKey: 'promise', sectionLabel: 'Our Promise', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Our Promise', value_nl: 'Onze Belofte' },
          { key: 'intro', type: 'text', label: 'Intro Text', value_en: 'Every candidate who uses CV Labz will:', value_nl: 'Elke kandidaat die CV Labz gebruikt zal:' },
        ], items: [
          'Feel confident and well-prepared for their interviews',
          'Have professional-quality application materials',
          'Understand their market value and negotiation position',
          'Receive personalized guidance that respects their unique career journey',
          'Get the maximum return on their time and effort invested in job searching',
        ], items_nl: [
          'Zich zelfverzekerd en goed voorbereid voelen op gesprekken',
          'Beschikken over sollicitatiemateriaal van professionele kwaliteit',
          'Inzicht hebben in hun marktwaarde en onderhandelingspositie',
          'Persoonlijke begeleiding ontvangen die hun unieke carri\u00e8repad respecteert',
          'Het maximale rendement halen uit de tijd en moeite die ze in hun zoektocht investeren',
        ] },
        // --- What This Means ---
        { sectionKey: 'whatThisMeans', sectionLabel: 'What This Means for You', sectionType: 'text', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'What This Means for You', value_nl: 'Wat Dit voor Jou Betekent' },
        ], items: [
          { label: 'Before Your Interview', content: 'We help you prepare thoroughly by polishing your CV, practicing your pitch, researching salary expectations and building confidence through our business case trainer.' },
          { label: 'During Your Journey', content: 'Our AI career coach provides personalized guidance tailored to your specific situation, industry and goals.' },
          { label: 'Beyond the Hire', content: 'We\'re committed to your long-term career success, not just landing your next job.' },
        ], items_nl: [
          { label: 'Voor Je Gesprek', content: 'We helpen je grondig voor te bereiden door je CV te perfectioneren, je pitch te oefenen, salarisverwachtingen te onderzoeken en vertrouwen op te bouwen via onze business case-trainer.' },
          { label: 'Tijdens Je Traject', content: 'Onze AI-carri\u00e8recoach biedt persoonlijke begeleiding afgestemd op jouw specifieke situatie, branche en doelen.' },
          { label: 'Na de Aanstelling', content: 'We zetten ons in voor je langetermijn carri\u00e8resucces, niet alleen voor het vinden van je volgende baan.' },
        ] },
      ];

    /* ================================================================
       FAQS
       ================================================================ */
    case 'faqs':
      return [
        { sectionKey: 'hero', sectionLabel: 'Page Header', sectionType: 'hero', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Frequently Asked Questions', value_nl: 'Veelgestelde Vragen' },
          { key: 'subtitle', type: 'text', label: 'Subtitle', value_en: 'Everything you want to know about CV Labz', value_nl: 'Alles wat je wilt weten over CV Labz' },
        ]},
        { sectionKey: 'accountLogin', sectionLabel: 'Account & Login', sectionType: 'faq', fields: [], items: [
          { q: 'How do I create an account on CV Labz?', a: '' },
          { q: 'Can I log in with Google or Apple?', a: '' },
          { q: 'What if I don\'t receive a confirmation email?', a: '' },
          { q: 'How do I change my email address or password?', a: '' },
          { q: 'Can I temporarily deactivate my account?', a: '' },
          { q: 'How do I completely delete my account?', a: '' },
          { q: 'Is my data stored securely?', a: '' },
          { q: 'What should I do if I have duplicate accounts?', a: '' },
        ], items_nl: [
          { q: 'Hoe maak ik een account aan op CV Labz?', a: '' },
          { q: 'Kan ik inloggen met Google of Apple?', a: '' },
          { q: 'Wat als ik geen bevestigingsmail ontvang?', a: '' },
          { q: 'Hoe wijzig ik mijn e-mailadres of wachtwoord?', a: '' },
          { q: 'Kan ik mijn account tijdelijk deactiveren?', a: '' },
          { q: 'Hoe verwijder ik mijn account volledig?', a: '' },
          { q: 'Worden mijn gegevens veilig opgeslagen?', a: '' },
          { q: 'Wat moet ik doen als ik dubbele accounts heb?', a: '' },
        ] },
        { sectionKey: 'cvCoverLetter', sectionLabel: 'CV & Cover Letter', sectionType: 'faq', fields: [], items: [
          { q: 'How do I create my CV with CV Labz?', a: '' },
          { q: 'Can I save and manage multiple CVs?', a: '' },
          { q: 'How do I customize the layout or style of my CV?', a: '' },
          { q: 'Can I also create my CV in English?', a: '' },
          { q: 'Can I upload an existing cover letter and improve it?', a: '' },
          { q: 'Does the AI give tips when writing my letter?', a: '' },
          { q: 'Can I download my CV as PDF or Word file?', a: '' },
          { q: 'Can I share my CV with a link or recruiter?', a: '' },
        ], items_nl: [
          { q: 'Hoe maak ik mijn CV met CV Labz?', a: '' },
          { q: 'Kan ik meerdere cv\'s opslaan en beheren?', a: '' },
          { q: 'Hoe pas ik de lay-out of stijl van mijn CV aan?', a: '' },
          { q: 'Kan ik mijn CV ook in het Engels maken?', a: '' },
          { q: 'Kan ik een bestaande motivatiebrief uploaden en verbeteren?', a: '' },
          { q: 'Geeft de AI tips bij het schrijven van mijn brief?', a: '' },
          { q: 'Kan ik mijn CV downloaden als PDF of Word-bestand?', a: '' },
          { q: 'Kan ik mijn CV delen via een link of met een recruiter?', a: '' },
        ] },
        { sectionKey: 'interviewPrep', sectionLabel: 'Interview Preparation', sectionType: 'faq', fields: [], items: [
          { q: 'What does CV Labz offer to prepare for a job interview?', a: '' },
          { q: 'How does the interview simulation work?', a: '' },
          { q: 'Do I get feedback on my answers?', a: '' },
          { q: 'Can I practice for specific positions or companies?', a: '' },
          { q: 'Are STAR questions generated?', a: '' },
          { q: 'Can I export my preparation as a document?', a: '' },
          { q: 'Do I also get tips for online job interviews?', a: '' },
          { q: 'Is it possible to add my own questions to the simulation?', a: '' },
        ], items_nl: [
          { q: 'Wat biedt CV Labz om me voor te bereiden op een sollicitatiegesprek?', a: '' },
          { q: 'Hoe werkt de gesprekssimulatie?', a: '' },
          { q: 'Krijg ik feedback op mijn antwoorden?', a: '' },
          { q: 'Kan ik oefenen voor specifieke functies of bedrijven?', a: '' },
          { q: 'Worden er STAR-vragen gegenereerd?', a: '' },
          { q: 'Kan ik mijn voorbereiding exporteren als document?', a: '' },
          { q: 'Krijg ik ook tips voor online sollicitatiegesprekken?', a: '' },
          { q: 'Is het mogelijk om eigen vragen toe te voegen aan de simulatie?', a: '' },
        ] },
        { sectionKey: 'assessments', sectionLabel: 'Assessments', sectionType: 'faq', fields: [], items: [
          { q: 'What assessments are available on CV Labz?', a: '' },
          { q: 'How long do the assessments take on average?', a: '' },
          { q: 'What exactly do my scores mean?', a: '' },
          { q: 'Can I compare my results with other candidates?', a: '' },
          { q: 'How often can I take or redo an assessment?', a: '' },
          { q: 'Are the assessments scientifically validated?', a: '' },
          { q: 'Are my results shared with recruiters?', a: '' },
          { q: 'Can I download or save my results?', a: '' },
        ], items_nl: [
          { q: 'Welke assessments zijn beschikbaar op CV Labz?', a: '' },
          { q: 'Hoe lang duren de assessments gemiddeld?', a: '' },
          { q: 'Wat betekenen mijn scores precies?', a: '' },
          { q: 'Kan ik mijn resultaten vergelijken met andere kandidaten?', a: '' },
          { q: 'Hoe vaak kan ik een assessment doen of overdoen?', a: '' },
          { q: 'Zijn de assessments wetenschappelijk gevalideerd?', a: '' },
          { q: 'Worden mijn resultaten gedeeld met recruiters?', a: '' },
          { q: 'Kan ik mijn resultaten downloaden of opslaan?', a: '' },
        ] },
        { sectionKey: 'aiCoach', sectionLabel: 'AI Coach & Tools', sectionType: 'faq', fields: [], items: [
          { q: 'What exactly does the AI Coach do?', a: '' },
          { q: 'Can the AI review and improve my CV?', a: '' },
          { q: 'Do I get suggestions for vacancies or sectors?', a: '' },
          { q: 'Is the AI available 24/7?', a: '' },
          { q: 'Does the AI give personalized career advice?', a: '' },
          { q: 'Can I also use the AI for salary negotiations?', a: '' },
          { q: 'How reliable is the AI\'s advice?', a: '' },
          { q: 'Does CV Labz use my data to train the AI?', a: '' },
        ], items_nl: [
          { q: 'Wat doet de AI Coach precies?', a: '' },
          { q: 'Kan de AI mijn CV beoordelen en verbeteren?', a: '' },
          { q: 'Krijg ik suggesties voor vacatures of sectoren?', a: '' },
          { q: 'Is de AI 24/7 beschikbaar?', a: '' },
          { q: 'Geeft de AI persoonlijk loopbaanadvies?', a: '' },
          { q: 'Kan ik de AI ook gebruiken voor salarisonderhandelingen?', a: '' },
          { q: 'Hoe betrouwbaar is het advies van de AI?', a: '' },
          { q: 'Gebruikt CV Labz mijn gegevens om de AI te trainen?', a: '' },
        ] },
      ];

    /* ================================================================
       CONTACT
       ================================================================ */
    case 'contact':
      return [
        { sectionKey: 'hero', sectionLabel: 'Page Header', sectionType: 'hero', fields: [
          { key: 'title', type: 'text', label: 'Title', value_en: 'Get in Touch', value_nl: 'Neem Contact Op' },
          { key: 'subtitle', type: 'text', label: 'Subtitle', value_en: 'Have questions about CV Labz?', value_nl: 'Heb je vragen over CV Labz? Wij helpen je graag.' },
        ]},
        { sectionKey: 'contactInfo', sectionLabel: 'Contact Information', sectionType: 'contact', fields: [
          { key: 'email', type: 'text', label: 'Email', value_en: 'connect@cvlabz.com', value_nl: 'connect@cvlabz.com' },
          { key: 'phone', type: 'text', label: 'Phone', value_en: '+31 (0) 20 123 4567', value_nl: '+31 (0) 20 123 4567' },
          { key: 'address', type: 'text', label: 'Address', value_en: 'Den Haag, Netherlands', value_nl: 'Den Haag, Nederland' },
        ]},
      ];

    /* ================================================================
       GLOBAL (Header / Footer / Shared)
       ================================================================ */
    case 'global':
      return [
        { sectionKey: 'header', sectionLabel: 'Header Navigation', sectionType: 'global', fields: [
          { key: 'ctaText', type: 'text', label: 'CTA Button Text', value_en: 'Create new Resume', value_nl: 'Nieuw CV maken' },
          { key: 'loginText', type: 'text', label: 'Login Text', value_en: 'Login', value_nl: 'Inloggen' },
        ]},
        { sectionKey: 'footer', sectionLabel: 'Footer', sectionType: 'global', fields: [
          { key: 'tagline', type: 'text', label: 'Tagline', value_en: 'The all-in-one platform that gets you noticed and hired.', value_nl: 'Het alles-in-\u00e9\u00e9n platform dat je opvalt en aangenomen wordt.' },
          { key: 'ctaTitle', type: 'text', label: 'Start Today Title', value_en: 'Start Today', value_nl: 'Begin Vandaag' },
          { key: 'ctaDescription', type: 'textarea', label: 'Start Today Description', value_en: 'Try CV Labz risk-free and take your job search experience to the next level.', value_nl: 'Probeer CV Labz risicovrij en til je sollicitatie-ervaring naar een hoger niveau.' },
          { key: 'ctaButtonText', type: 'text', label: 'CTA Button Text', value_en: 'Start for free', value_nl: 'Gratis beginnen' },
          { key: 'newsletterTitle', type: 'text', label: 'Newsletter Title', value_en: 'Subscribe to Newsletter', value_nl: 'Abonneer op nieuwsbrief' },
          { key: 'copyright', type: 'text', label: 'Copyright', value_en: '© 2025 CV Labz. All rights reserved.', value_nl: '\u00a9 2025 CV Labz. Alle rechten voorbehouden.' },
        ]},
        // --- Newsletter ---
        { sectionKey: 'newsletter', sectionLabel: 'Newsletter', sectionType: 'global', fields: [
          { key: 'title', type: 'text', label: 'Newsletter Title', value_en: 'Subscribe to Newsletter', value_nl: 'Abonneer op nieuwsbrief' },
          { key: 'subtitle', type: 'text', label: 'Newsletter Subtitle', value_en: 'Get career tips and updates delivered to your inbox.', value_nl: 'Ontvang carri\u00e8retips en updates in je inbox.' },
          { key: 'placeholder', type: 'text', label: 'Input Placeholder', value_en: 'Enter your email', value_nl: 'Voer je e-mailadres in' },
          { key: 'buttonText', type: 'text', label: 'Button Text', value_en: 'Subscribe', value_nl: 'Abonneren' },
        ]},
        // --- Shared CTA texts ---
        { sectionKey: 'sharedCta', sectionLabel: 'Shared CTA Texts', sectionType: 'global', fields: [
          { key: 'trialCtaText', type: 'text', label: 'Trial CTA Text', value_en: 'Start 14 days for €0,99', value_nl: 'Start 14 dagen voor €0,99' },
          { key: 'uploadCtaText', type: 'text', label: 'Upload CTA Text', value_en: 'Upload my resume', value_nl: 'Upload mijn CV' },
        ]},
      ];

    default:
      return [];
  }
}

// Seed all default pages
async function seedDefaultPages() {
  const pages = [];
  for (const [pageKey, pageLabel] of Object.entries(PAGE_LABELS)) {
    pages.push({
      pageKey,
      pageLabel,
      sections: getDefaultSections(pageKey),
      seo: {
        metaTitle_en: '',
        metaTitle_nl: '',
        metaDescription_en: '',
        metaDescription_nl: '',
      },
    });
  }
  await PageContent.insertMany(pages);
  return PageContent.find({}, 'pageKey pageLabel updatedAt updatedBy').populate('updatedBy', 'name').lean();
}

// GET /api/v1/admin/content
const listPages = async (req, res) => {
  try {
    let pages = await PageContent.find({}, 'pageKey pageLabel updatedAt updatedBy')
      .populate('updatedBy', 'name')
      .lean();

    if (!pages || pages.length === 0) {
      pages = await seedDefaultPages();
    }

    res.json({ success: true, data: pages });
  } catch (err) {
    console.error('listPages error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch pages' });
  }
};

// GET /api/v1/admin/content/:pageKey
const getPage = async (req, res) => {
  try {
    const { pageKey } = req.params;
    let page = await PageContent.findOne({ pageKey }).populate('updatedBy', 'name');

    if (!page) {
      const label = PAGE_LABELS[pageKey];
      if (!label) {
        return res.status(404).json({ success: false, message: 'Unknown page key' });
      }
      page = await PageContent.create({
        pageKey,
        pageLabel: label,
        sections: getDefaultSections(pageKey),
        seo: {
          metaTitle_en: '',
          metaTitle_nl: '',
          metaDescription_en: '',
          metaDescription_nl: '',
        },
      });
    }

    res.json({ success: true, data: page });
  } catch (err) {
    console.error('getPage error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch page' });
  }
};

// PUT /api/v1/admin/content/:pageKey
const updatePage = async (req, res) => {
  try {
    const { pageKey } = req.params;
    const { sections, seo } = req.body;

    const updateData = { updatedBy: req.user._id };
    if (sections !== undefined) updateData.sections = sections;
    if (seo !== undefined) updateData.seo = seo;

    const page = await PageContent.findOneAndUpdate(
      { pageKey },
      {
        $set: updateData,
        $setOnInsert: {
          pageKey,
          pageLabel: PAGE_LABELS[pageKey] || pageKey,
        },
      },
      { new: true, upsert: true, runValidators: true }
    ).populate('updatedBy', 'name');

    res.json({ success: true, data: page });
  } catch (err) {
    console.error('updatePage error:', err);
    res.status(500).json({ success: false, message: 'Failed to update page' });
  }
};

// GET /api/v1/content/:pageKey (PUBLIC)
const getPublicPage = async (req, res) => {
  try {
    const { pageKey } = req.params;
    const page = await PageContent.findOne({ pageKey }).select('-updatedBy -__v').lean();

    if (!page) {
      return res.status(404).json({ success: false, message: 'Page not found' });
    }

    res.json({ success: true, data: page });
  } catch (err) {
    console.error('getPublicPage error:', err);
    res.status(500).json({ success: false, message: 'Failed to fetch page' });
  }
};

// POST /api/v1/admin/content/upload
const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image file provided or invalid file type' });
    }

    const url = '/uploads/' + req.file.filename;
    res.json({ success: true, url });
  } catch (err) {
    console.error('uploadImage error:', err);
    res.status(500).json({ success: false, message: 'Failed to upload image' });
  }
};

module.exports = { listPages, getPage, updatePage, getPublicPage, uploadImage };
