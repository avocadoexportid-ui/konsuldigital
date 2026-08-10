// ==================== DATA ARRAYS (Edit di sini) ====================

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Proses', href: '#proses' },
  { label: 'Portofolio', href: '#portfolio' },
  { label: 'Harga', href: '#harga' },
  { label: 'Testimoni', href: '#testimoni' },
  { label: 'FAQ', href: '#faq' },
];

const painPoints = [
  {
    icon: 'package-x',
    title: 'Produk Jadi Tapi Gak Ada Yang Beli',
    desc: 'Udah bikin e-book atau course, tapi cuma dianggurin di gdrive. Karena gak punya tempat jual yang proper.',
  },
  {
    icon: 'timer-off',
    title: 'Website Mahal, Lama, Hasilnya Zonk',
    desc: 'Bayar mahal, nunggu berbulan-bulan, hasilnya gak sesuai ekspektasi. Atau bahkan developer ngilang.',
  },
  {
    icon: 'cable',
    title: 'Bingung Teknis: Hosting, Domain, Payment',
    desc: 'Mau mulai jualan online tapi stuck di teknis. Domain beli dimana? Payment gateway gimana? Pusing.',
  },
];

const services = [
  {
    icon: 'book-open',
    title: 'Produk Digital',
    desc: 'E-book, Template, Course, Notion template. Dari draft sampai siap jual.',
    features: ['E-book & PDF', 'Notion Template', 'Mini Course', 'Digital Download'],
  },
  {
    icon: 'globe',
    title: 'Website Bisnis',
    desc: 'Landing page, company profile, portfolio. Cepat, responsive, converting.',
    features: ['Landing Page', 'Company Profile', 'Portfolio Site', 'Blog'],
  },
  {
    icon: 'shopping-cart',
    title: 'Toko Online',
    desc: 'Shopify, WooCommerce, payment gateway. Siap terima order dari hari pertama.',
    features: ['Shopify Setup', 'WooCommerce', 'Payment Gateway', 'Inventory'],
  },
  {
    icon: 'pen-tool',
    title: 'Branding & Copywriting',
    desc: 'Logo, brand identity, copywriting yang converting. Bukan cuma cantik, tapi laku.',
    features: ['Logo Design', 'Brand Identity', 'Sales Copy', 'Content Strategy'],
  },
];

const processSteps = [
  { step: '01', title: 'Discovery Call', duration: '30 menit', desc: 'Kita bedah bisnis kamu, target market, dan goals yang ingin dicapai.', icon: 'phone-call' },
  { step: '02', title: 'Design & Approval', duration: '3 hari', desc: 'Kita bikin mockup design. Kamu approve sebelum masuk development.', icon: 'palette' },
  { step: '03', title: 'Development', duration: '7 hari', desc: 'Coding, integrasi payment, setup hosting. Semua teknis urusan kami.', icon: 'code-2' },
  { step: '04', title: 'Launch + Training', duration: '1 hari', desc: 'Website live + training cara update konten dan kelola produk.', icon: 'rocket' },
];

const portfolio = [
  { name: 'Sari Bakery', category: 'Toko Online', result: '+150% conversion', image: 'https://picsum.photos/seed/bakery2026/600/400' },
  { name: 'Coach Dito Mindset', category: 'Landing Page', result: 'Launch 10 hari', image: 'https://picsum.photos/seed/coach2026/600/400' },
  { name: 'Nunu Skincare', category: 'Website Bisnis', result: '+200% traffic', image: 'https://picsum.photos/seed/skincare2026/600/400' },
  { name: 'E-book Resep Mama Rina', category: 'Produk Digital', result: '500+ terjual', image: 'https://picsum.photos/seed/ebook2026/600/400' },
  { name: 'Fajar Studio Foto', category: 'Portfolio', result: '+80% inquiry', image: 'https://picsum.photos/seed/studio2026/600/400' },
  { name: 'Notion Template Productivity', category: 'Produk Digital', result: '1.2k downloads', image: 'https://picsum.photos/seed/notion2026/600/400' },
];

const pricing = [
  {
    name: 'Starter Web',
    price: 'Rp 2.5jt',
    popular: false,
    desc: 'Cocok untuk yang baru mulai online presence.',
    features: [
      'Landing page 1 page',
      'Mobile responsive',
      'Hosting 1 tahun',
      'Domain .com 1 tahun',
      'WhatsApp button',
      'Revisi 2x',
    ],
  },
  {
    name: 'Pro Digital',
    price: 'Rp 5.5jt',
    popular: true,
    desc: 'Website + produk digital. Siap jualan dari hari pertama.',
    features: [
      'Semua fitur Starter Web',
      'Website multi-page',
      '1 produk digital (e-book/template)',
      'Email capture form',
      'Payment gateway integration',
      'Revisi 3x',
    ],
  },
  {
    name: 'Scale Up',
    price: 'Rp 12jt',
    popular: false,
    desc: 'Full sistem untuk yang serius scale up bisnis.',
    features: [
      'Semua fitur Pro Digital',
      'Full custom website',
      '3 produk digital',
      'Automation email sequence',
      'SEO dasar optimization',
      'Revisi unlimited (30 hari)',
    ],
  },
];

const testimonials = [
  {
    name: 'Rina Saraswati',
    role: 'Coach Mindset',
    photo: 'https://i.pravatar.cc/100?img=45',
    quote: 'Omzet naik 3x setelah launch website + e-book saya. Tim KonsulDigital ngerti banget kebutuhan coach.',
    rating: 5,
  },
  {
    name: 'Dito Pratama',
    role: 'Owner Sari Bakery',
    photo: 'https://i.pravatar.cc/100?img=12',
    quote: 'Dari ide sampai live cuma 12 hari. Sekarang order online masuk tiap hari. Recommended banget!',
    rating: 5,
  },
  {
    name: 'Mega Lestari',
    role: 'Content Creator',
    photo: 'https://i.pravatar.cc/100?img=32',
    quote: 'Akhirnya punya Notion template yang bisa dijual. Packaging-nya rapi, copywriting-nya nendang. Worth it!',
    rating: 5,
  },
];

const faqs = [
  { q: 'Lama pengerjaan berapa hari?', a: 'Tergantung paket. Starter Web 7-10 hari, Pro Digital 10-14 hari, Scale Up 14-21 hari. Semua dihitung dari design approval.' },
  { q: 'Revisi berapa kali?', a: 'Minimal 2x revisi untuk semua paket. Paket Scale Up dapat unlimited revisi selama 30 hari setelah launch.' },
  { q: 'Bayar gimana? Ada DP?', a: 'Ya, ada DP 50% di awal sebagai down payment. Sisanya 50% setelah website siap launch. Transfer bank atau QRIS.' },
  { q: 'Ada garansi?', a: 'Ada. Garansi revisi 2x + garansi bug fix 30 hari setelah launch. Kalo ada error dari sisi coding, kita benerin gratis.' },
  { q: 'Bisa request fitur custom?', a: 'Bisa banget. Kalo butuh fitur di luar paket (seperti membership, booking system, dll), kita bisa custom quote. Chat dulu aja.' },
];

// ==================== RENDER FUNCTIONS ====================

// Navbar
function renderNav() {
  const navContainer = document.getElementById('nav-links');
  const mobileContainer = document.getElementById('mobile-nav-links');
  const footerContainer = document.getElementById('footer-links');

  navContainer.innerHTML = navLinks.map(link =>
    `<a href="${link.href}" class="text-sm font-medium text-primary/80 hover:text-primary transition relative py-2">${link.label}</a>`
  ).join('');

  mobileContainer.innerHTML = navLinks.map(link =>
    `<a href="${link.href}" class="block px-3 py-2.5 rounded-lg text-primary-dark hover:bg-cream-dark/50 font-medium">${link.label}</a>`
  ).join('');

  footerContainer.innerHTML = navLinks.map(link =>
    `<li><a href="${link.href}" class="hover:text-gold transition">${link.label}</a></li>`
  ).join('');
}

// Pain Points
function renderPainPoints() {
  const container = document.getElementById('pain-cards');
  container.innerHTML = painPoints.map((p, i) => `
    <div class="card fade-in text-center" style="animation-delay: ${i * 0.1}s;">
      <div class="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mx-auto mb-5">
        <i data-lucide="${p.icon}" class="w-7 h-7 text-red-500"></i>
      </div>
      <h3 class="font-bold text-lg text-primary-dark mb-3">${p.title}</h3>
      <p class="text-sm text-primary/60 leading-relaxed">${p.desc}</p>
    </div>
  `).join('');
}

// Services
function renderServices() {
  const container = document.getElementById('service-cards');
  container.innerHTML = services.map((s, i) => `
    <div class="card fade-in group" style="animation-delay: ${i * 0.1}s;">
      <div class="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary group-hover:text-cream flex items-center justify-center mb-5 transition-all duration-300">
        <i data-lucide="${s.icon}" class="w-6 h-6 text-primary group-hover:text-cream transition"></i>
      </div>
      <h3 class="font-bold text-lg text-primary-dark mb-2">${s.title}</h3>
      <p class="text-sm text-primary/60 mb-4 leading-relaxed">${s.desc}</p>
      <ul class="space-y-1.5">
        ${s.features.map(f => `
          <li class="flex items-center gap-2 text-sm text-primary/70">
            <i data-lucide="check" class="w-4 h-4 text-gold flex-shrink-0"></i>
            ${f}
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
}

// Process Timeline
function renderProcess() {
  const container = document.getElementById('process-timeline');
  container.innerHTML = processSteps.map((p, i) => `
    <div class="process-step fade-in text-center md:text-left" style="animation-delay: ${i * 0.15}s;">
      <div class="w-16 h-16 rounded-2xl bg-gold flex items-center justify-center mx-auto md:mx-0 mb-5 shadow-gold relative">
        <i data-lucide="${p.icon}" class="w-7 h-7 text-primary-dark"></i>
        <span class="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cream text-primary text-xs font-bold flex items-center justify-center">${p.step}</span>
      </div>
      <div class="flex items-center gap-2 justify-center md:justify-start mb-2">
        <h3 class="font-bold text-lg text-cream">${p.title}</h3>
        <span class="text-xs px-2 py-0.5 rounded-full bg-cream/10 text-cream/80">${p.duration}</span>
      </div>
      <p class="text-sm text-cream/70 leading-relaxed">${p.desc}</p>
    </div>
  `).join('');
}

// Portfolio
function renderPortfolio() {
  const container = document.getElementById('portfolio-grid');
  container.innerHTML = portfolio.map((p, i) => `
    <div class="portfolio-card card fade-in p-0 overflow-hidden" style="animation-delay: ${i * 0.08}s;">
      <div class="portfolio-img-wrapper aspect-[3/2] bg-cream-dark">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover" loading="lazy" />
      </div>
      <div class="p-5">
        <span class="text-xs font-medium text-gold-dark uppercase tracking-wide">${p.category}</span>
        <h3 class="font-bold text-lg text-primary-dark mt-1.5">${p.name}</h3>
        <div class="mt-3 flex items-center gap-2 text-sm">
          <i data-lucide="trending-up" class="w-4 h-4 text-green-600"></i>
          <span class="font-semibold text-green-700">${p.result}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Pricing
function renderPricing() {
  const container = document.getElementById('pricing-cards');
  container.innerHTML = pricing.map((p, i) => `
    <div class="card fade-in relative ${p.popular ? 'pricing-popular' : ''}" style="animation-delay: ${i * 0.1}s;">
      ${p.popular ? `
        <div class="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span class="bg-gold text-primary-dark text-xs font-bold px-4 py-1.5 rounded-full shadow-gold whitespace-nowrap">
            ⭐ Paling Populer
          </span>
        </div>
      ` : ''}
      <h3 class="font-bold text-xl text-primary-dark">${p.name}</h3>
      <p class="text-sm text-primary/60 mt-1 mb-4 min-h-[40px]">${p.desc}</p>
      <div class="mb-6">
        <span class="text-4xl font-extrabold text-primary">${p.price}</span>
        <span class="text-sm text-primary/50">/project</span>
      </div>
      <ul class="space-y-3 mb-6">
        ${p.features.map(f => `
          <li class="flex items-start gap-2.5 text-sm text-primary/70">
            <i data-lucide="check-circle-2" class="w-5 h-5 text-gold flex-shrink-0 mt-0.5"></i>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
      <a href="#kontak" class="${p.popular ? 'btn-primary' : 'btn-outline'} w-full justify-center">
        Pilih Paket Ini
      </a>
    </div>
  `).join('');
}

// Testimonials
function renderTestimonials() {
  const container = document.getElementById('testimonial-cards');
  container.innerHTML = testimonials.map((t, i) => `
    <div class="card fade-in" style="animation-delay: ${i * 0.1}s;">
      <div class="flex gap-1 mb-4">
        ${Array(t.rating).fill().map(() => `<i data-lucide="star" class="w-4 h-4 fill-gold text-gold"></i>`).join('')}
      </div>
      <p class="text-primary/80 leading-relaxed mb-6 italic">"${t.quote}"</p>
      <div class="flex items-center gap-3 pt-4 border-t border-cream-dark">
        <img src="${t.photo}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover" loading="lazy" />
        <div>
          <p class="font-semibold text-primary-dark">${t.name}</p>
          <p class="text-xs text-primary/60">${t.role}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// FAQ
function renderFAQ() {
  const container = document.getElementById('faq-list');
  container.innerHTML = faqs.map((f, i) => `
    <div class="faq-item card cursor-pointer" data-faq="${i}">
      <div class="flex items-center justify-between gap-4">
        <h3 class="font-semibold text-primary-dark text-base md:text-lg">${f.q}</h3>
        <i data-lucide="plus" class="faq-icon w-5 h-5 text-gold flex-shrink-0"></i>
      </div>
      <div class="faq-answer">
        <p class="text-sm text-primary/70 leading-relaxed">${f.a}</p>
      </div>
    </div>
  `).join('');

  // Add click handlers
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ==================== NAVBAR SCROLL EFFECT ====================
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ==================== MOBILE MENU ====================
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuIcon.setAttribute('data-lucide', menu.classList.contains('hidden') ? 'menu' : 'x');
    lucide.createIcons();
  });

  // Close on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      menuIcon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
}

// ==================== FADE-IN ON SCROLL (Intersection Observer) ====================
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ==================== CONTACT FORM ====================
function initContactForm() {
  const form = document.getElementById('contact-form');
  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
      nama: document.getElementById('nama').value,
      email: document.getElementById('email').value,
      wa: document.getElementById('wa').value,
      pesan: document.getElementById('pesan').value,
    };

    // Simulate submit — ganti dengan API endpoint atau mailto
    console.log('Form Data:', formData);

    // Option 1: Open mailto
    // window.location.href = `mailto:hello@konsuldigital.id?subject=Konsultasi - ${formData.nama}&body=Nama: ${formData.nama}%0AEmail: ${formData.email}%0AWA: ${formData.wa}%0A%0A${formData.pesan}`;

    // Show success
    successMsg.classList.remove('hidden');
    form.reset();

    setTimeout(() => successMsg.classList.add('hidden'), 5000);
  });
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  // Render all dynamic content
  renderNav();
  renderPainPoints();
  renderServices();
  renderProcess();
  renderPortfolio();
  renderPricing();
  renderTestimonials();
  renderFAQ();

  // Init interactions
  initNavbarScroll();
  initMobileMenu();
  initContactForm();

  // Re-create icons after dynamic render
  lucide.createIcons();

  // Init fade-in after content rendered
  setTimeout(() => initFadeIn(), 100);
});
