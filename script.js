const works = [
  {
    id: 'stat-01',
    title: 'Infografis Satria Data 2024',
    category: 'statistic',
    description: ' ',
    tags: ['infografis', 'satria data', 'artificial Intelligence'],
    accent: 'linear-gradient(140deg, #63f5c3, #3fd8e5)',
    image: 'portofolio/infografis_satria_data_2024.png'
  },
  {
    id: 'stat-02',
    title: 'Infografis SSF UNS 2025',
    category: 'statistic',
    description: '',
    tags: ['infografis', 'ssf uns', 'pendidikan'],
    accent: 'linear-gradient(140deg, #7ef5ff, #8eb1ff)',
    image: 'portofolio/infografis_ssf_uns_2025.jpg'
  },
  {
    id: 'stat-03',
    title: 'Infografis Dokter Data 2025',
    category: 'statistic',
    description: '',
    tags: ['infografis', 'dokter data', 'polusi udara'],
    accent: 'linear-gradient(140deg, #7ef5ff, #8eb1ff)',
    image: 'portofolio/infografis_DD_2025.png'
  },
  {
    id: 'stat-04',
    title: 'Infografis Gammafest IPB 2025',
    category: 'statistic',
    description: '',
    tags: ['infografis', 'gammafest', 'petani'],
    accent: 'linear-gradient(140deg, #7ef5ff, #8eb1ff)',
    image: 'portofolio/infografis_gammafest_2025.png'
  },
  {
    id: 'stat-05',
    title: 'Infografis Nacoesta 2025',
    category: 'statistic',
    description: '',
    tags: ['infografis', 'nacoesta', 'kesehatan'],
    accent: 'linear-gradient(140deg, #7ef5ff, #8eb1ff)',
    image: 'portofolio/infografis_nacoesta_2025.png'
  },
  {
    id: 'logo-01',
    title: 'Logo ORION FEB 2025',
    category: 'logo',
    description: '',
    tags: ['branding', 'packaging', 'logo'],
    accent: 'linear-gradient(160deg, #ffd479, #ff9f4a)',
    image: 'portofolio/logo_orion_feb_2025.png'
  },
  {
    id: 'logo-02',
    title: 'Logo Dokter Data 2024',
    category: 'logo',
    description: '',
    tags: ['logo', 'kepanitiaan', 'dokter data'],
    accent: 'linear-gradient(160deg, #ffd479, #ff9f4a)',
    image: 'portofolio/logo_DD_2024.png'
  },
  {
    id: 'grafis-01',
    title: 'Poster DAC Color Theme',
    category: 'grafis',
    description: '',
    tags: ['poster', 'brand', 'event'],
    accent: 'linear-gradient(150deg, #ffb86f, #ff6fa6)',
    image: 'portofolio/poster_Diponegro_Art_Competition_2025.jpg'
  },
  {
    id: 'grafis-03',
    title: 'Vektor Wajah Gavi',
    category: 'grafis',
    description: '',
    tags: ['vektor', 'digital', 'fc barcelona'],
    accent: 'linear-gradient(150deg, #8eb1ff, #c8a5ff)',
    image: 'portofolio/vektor_gavi_2023.png'
  },
  {
    id: 'grafis-04',
    title: 'Vektor Art 1',
    category: 'grafis',
    description: '',
    tags: ['vektor', 'digital', 'art'],
    accent: 'linear-gradient(150deg, #63f5c3, #ffb86f)',
    image: 'portofolio/vektor_1_2025.png'
  },
  {
    id: 'logo-03',
    title: 'Logo Himasta Undip 2025',
    category: 'logo',
    description: '',
    tags: ['logo', 'kampus', 'himpunan'],
    accent: 'linear-gradient(150deg, #63f5c3, #3fd8e5)',
    image: 'portofolio/logo_Himasta_Undip_2025.png'
  },
  {
    id: 'logo-04',
    title: 'Logo LKMMPD STAT 2024',
    category: 'logo',
    description: '',
    tags: ['logo', 'kampus', 'lkmmpd'],
    accent: 'linear-gradient(160deg, #8eb1ff, #6d8dff)',
    image: 'portofolio/logo_lkmmpd_stat_2024.png'
  },
  {
    id: 'logo-05',
    title: 'Logo PMB STAT 2024',
    category: 'logo',
    description: '',
    tags: ['logo', 'kampus', 'pmb'],
    accent: 'linear-gradient(150deg, #ff6fa6, #ffd479)',
    image: 'portofolio/logo_pmb_stat_2024.png'
  },
  {
    id: 'logo-06',
    title: 'Maskot LKMMPD STAT 2024',
    category: 'logo',
    description: '',
    tags: ['maskot', 'kampus', 'lkmmpd'],
    accent: 'linear-gradient(150deg, #7ef5ff, #8eb1ff)',
    image: 'portofolio/maskot_lkmmpd_stat_2024.png'
  },
  {
    id: 'grafis-06',
    title: 'ID Card BEM 2024',
    category: 'grafis',
    description: '',
    tags: ['id card', 'kampus', 'bem'],
    accent: 'linear-gradient(150deg, #ff6fa6, #8eb1ff)',
    image: 'portofolio/idcard_bem_2024.png'
  },
  {
    id: 'grafis-07',
    title: 'ID Card Imagiri 2024',
    category: 'grafis',
    description: '',
    tags: ['id card', 'kampus', 'imagiri'],
    accent: 'linear-gradient(150deg, #6d8dff, #c8a5ff)',
    image: 'portofolio/idcard_imagiri_2024.png'
  },
  {
    id: 'grafis-08',
    title: 'Poster FC Barcelona 2025',
    category: 'grafis',
    description: '',
    tags: ['poster', 'olahraga', 'barcelona'],
    accent: 'linear-gradient(160deg, #8eb1ff, #6d8dff)',
    image: 'portofolio/poster_fc_barcelona_1_2025.png'
  },
  {
    id: 'illus-01',
    title: 'Illustrasi Luffy',
    category: 'illustrasi',
    description: 'Seri ilustrasi karakter dengan gaya retro futuristik.',
    tags: ['illustrasi', 'retro', 'karakter'],
    accent: 'linear-gradient(150deg, #8eb1ff, #c8a5ff)',
    image: 'portofolio/drawing_luffy_2025.png'
  },
  {
    id: 'illus-02',
    title: 'Illustrasi Sanji',
    category: 'illustrasi',
    description: 'Sketsa digital lanskap kota dengan permainan cahaya neon.',
    tags: ['sketsa', 'malam', 'neon'],
    accent: 'linear-gradient(150deg, #63f5c3, #ffb86f)',
    image: 'portofolio/drawing_sanji_2025.png'
  },
  {
    id: 'illus-03',
    title: 'Illustrasi Zoro',
    category: 'illustrasi',
    description: '',
    tags: ['illustrasi', 'fanart', 'one piece'],
    accent: 'linear-gradient(150deg, #ff9f4a, #41d4da)',
    image: 'portofolio/drawing_zoro_2025.png'
  },
  {
    id: 'illus-04',
    title: 'Illustrasi Ace',
    category: 'illustrasi',
    description: '',
    tags: ['illustrasi', 'fanart', 'one piece'],
    accent: 'linear-gradient(150deg, #ff6fa6, #ffb86f)',
    image: 'portofolio/drawing_Ace.png'
  },
  {
    id: 'illus-05',
    title: 'Drawing Zunesha',
    category: 'illustrasi',
    description: '',
    tags: ['illustrasi', 'fanart', 'one piece'],
    accent: 'linear-gradient(150deg, #8eb1ff, #c8a5ff)',
    image: 'portofolio/drawing_zunesha.jpg'
  },
  {
    id: 'illus-06',
    title: 'Drawing Night Scene',
    category: 'illustrasi',
    description: '',
    tags: ['illustrasi', 'landscape', 'night'],
    accent: 'linear-gradient(150deg, #3b82f6, #1e293b)',
    image: 'portofolio/drawing_night.jpg'
  },
  {
    id: 'illus-07',
    title: 'Drawing ENF 1',
    category: 'illustrasi',
    description: '',
    tags: ['illustrasi', 'fanart'],
    accent: 'linear-gradient(150deg, #60a5fa, #38bdf8)',
    image: 'portofolio/drawing_enf_1.jpg'
  },
  {
    id: 'illus-08',
    title: 'Drawing ENF 2',
    category: 'illustrasi',
    description: '',
    tags: ['illustrasi', 'fanart'],
    accent: 'linear-gradient(150deg, #38bdf8, #0ea5e9)',
    image: 'portofolio/drawing_enf_2.jpg'
  },
  {
    id: 'grafis-09',
    title: 'Vektor Freya',
    category: 'grafis',
    description: '',
    tags: ['vektor', 'digital', 'fanart'],
    accent: 'linear-gradient(150deg, #c8a5ff, #8eb1ff)',
    image: 'portofolio/vektor_freya.png'
  },
  {
    id: 'logo-07',
    title: 'Maskot Dokter Data 2024',
    category: 'logo',
    description: '',
    tags: ['maskot', 'kepanitiaan', 'dokter data'],
    accent: 'linear-gradient(150deg, #ffb86f, #ff9f4a)',
    image: 'portofolio/Maskot_DD_2024.png'
  },
  {
    id: 'logo-08',
    title: 'Maskot Seleksi LKS Jatim',
    category: 'logo',
    description: '',
    tags: ['maskot', 'lomba', 'jawa timur'],
    accent: 'linear-gradient(150deg, #41d4da, #63f5c3)',
    image: 'portofolio/maskot_seleksi_lks_jatim.png'
  },
  {
    id: 'stat-06',
    title: 'Infografis Satria Data 2025',
    category: 'statistic',
    description: '',
    tags: ['infografis', 'satria data'],
    accent: 'linear-gradient(140deg, #63f5c3, #3fd8e5)',
    image: 'portofolio/infografis_satria_data_2025.png'
  },
  {
    id: 'stat-07',
    title: 'Dashboard Gen Z Financial Profile',
    category: 'statistic',
    description: '',
    tags: ['dashboard', 'analysis', 'finance'],
    accent: 'linear-gradient(140deg, #38bdf8, #0ea5e9)',
    image: 'portofolio/dashboard_analysis_gen_z_financial_profile_GelarRasa_UPNV_Jatim.jpeg'
  },
  {
    id: 'grafis-10',
    title: 'Brand Guideline Kopi Brek',
    category: 'grafis',
    description: '',
    tags: ['brand', 'guideline', 'kopi brek'],
    accent: 'linear-gradient(150deg, #3b82f6, #60a5fa)',
    image: 'portofolio/Brand_Guideline kopi_brek.png'
  },
  {
    id: 'grafis-11',
    title: 'Feeds Instagram Kopi Brek',
    category: 'grafis',
    description: '',
    tags: ['feeds', 'instagram', 'kopi brek'],
    accent: 'linear-gradient(150deg, #60a5fa, #38bdf8)',
    image: 'portofolio/feeds_instagram_kopi_brek.jpg'
  },
  {
    id: 'grafis-12',
    title: 'Poster Kopi Brek',
    category: 'grafis',
    description: '',
    tags: ['poster', 'kopi brek'],
    accent: 'linear-gradient(150deg, #0ea5e9, #3b82f6)',
    image: 'portofolio/poster_kopi_brek.png'
  },
  {
    id: 'grafis-13',
    title: 'Poster Brosur Kopi Brek 1',
    category: 'grafis',
    description: '',
    tags: ['poster', 'brosur', 'kopi brek'],
    accent: 'linear-gradient(150deg, #38bdf8, #0ea5e9)',
    image: 'portofolio/poster_brosur_kopi_brek_1.png'
  },
  {
    id: 'grafis-14',
    title: 'Poster Brosur Kopi Brek 2',
    category: 'grafis',
    description: '',
    tags: ['poster', 'brosur', 'kopi brek'],
    accent: 'linear-gradient(150deg, #63f5c3, #3fd8e5)',
    image: 'portofolio/poster_brosur_kopi_brek_2.png'
  },
  {
    id: 'grafis-15',
    title: 'Poster Pedri',
    category: 'grafis',
    description: '',
    tags: ['poster', 'fanart', 'football'],
    accent: 'linear-gradient(150deg, #8eb1ff, #c8a5ff)',
    image: 'portofolio/poster_pedri.png'
  },
  {
    id: 'grafis-16',
    title: 'Poster Web Pertamina',
    category: 'grafis',
    description: '',
    tags: ['poster', 'pertamina'],
    accent: 'linear-gradient(150deg, #ffb86f, #ff6fa6)',
    image: 'portofolio/poster_web_pertamina.png'
  },
  {
    id: 'logo-09',
    title: 'Logo Clean Our Coast',
    category: 'logo',
    description: '',
    tags: ['logo', 'environment'],
    accent: 'linear-gradient(150deg, #63f5c3, #41d4da)',
    image: 'portofolio/logo_clean_our_coast.png'
  },
  {
    id: 'logo-10',
    title: 'Logo Impact 2025',
    category: 'logo',
    description: '',
    tags: ['logo', 'impact'],
    accent: 'linear-gradient(150deg, #8eb1ff, #6d8dff)',
    image: 'portofolio/Logo_Impact_2025.png'
  },
  {
    id: 'logo-11',
    title: 'Logo Kopi Brek Solo',
    category: 'logo',
    description: '',
    tags: ['logo', 'kopi brek'],
    accent: 'linear-gradient(150deg, #ff6fa6, #ffd479)',
    image: 'portofolio/logo_kopi brek_solo.png'
  },
  {
    id: 'grafis-17',
    title: 'Vektor Brother',
    category: 'grafis',
    description: '',
    tags: ['vektor', 'portrait'],
    accent: 'linear-gradient(150deg, #8eb1ff, #c8a5ff)',
    image: 'portofolio/vektor_brother.png'
  },
  {
    id: 'grafis-18',
    title: 'Vektor Dybala',
    category: 'grafis',
    description: '',
    tags: ['vektor', 'football'],
    accent: 'linear-gradient(150deg, #ff9f4a, #41d4da)',
    image: 'portofolio/vektor_dybala.png'
  },
  {
    id: 'grafis-19',
    title: 'Vektor Me',
    category: 'grafis',
    description: '',
    tags: ['vektor', 'self-portrait'],
    accent: 'linear-gradient(150deg, #3b82f6, #60a5fa)',
    image: 'portofolio/vektor_me.png'
  },
  {
    id: 'grafis-20',
    title: 'Vektor Ronaldo',
    category: 'grafis',
    description: '',
    tags: ['vektor', 'football'],
    accent: 'linear-gradient(150deg, #0ea5e9, #38bdf8)',
    image: 'portofolio/vektor_ronaldo.png'
  }
];

const latestIds = ['stat-07', 'grafis-16', 'grafis-10'];

const portfolioGrid = document.getElementById('portfolioGrid');
const latestGrid = document.getElementById('latestGrid');
const tabs = document.querySelectorAll('.tab');

const modal = document.getElementById('modal');
const modalMedia = document.getElementById('modalMedia');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalTags = document.getElementById('modalTags');
const modalCategory = document.getElementById('modalCategory');

// Pagination state
let currentPage = 1;
let itemsPerPage = 10;
let currentFilter = 'all';

function createCard(item) {
  const card = document.createElement('article');
  card.className = 'card';
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `${item.title} (${item.category})`);
  card.dataset.id = item.id;

  let visual;
  if (item.image) {
    visual = document.createElement('img');
    visual.className = 'card__img';
    visual.src = item.image;
    visual.alt = item.title;
    visual.loading = 'lazy';
  } else {
    visual = document.createElement('div');
    visual.className = 'card__img';
    visual.style.background = item.accent;
  }

  const title = document.createElement('h3');
  title.className = 'card__title';
  title.textContent = item.title;

  const meta = document.createElement('p');
  meta.className = 'card__meta';
  meta.textContent = labelForCategory(item.category);

  const tags = document.createElement('div');
  tags.className = 'pill-row';
  item.tags.forEach(t => {
    const tag = document.createElement('span');
    tag.textContent = t;
    tags.appendChild(tag);
  });

  card.append(visual, title, meta, tags);
  card.addEventListener('click', () => openModal(item.id));
  card.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') openModal(item.id);
  });
  return card;
}

function labelForCategory(category) {
  if (category === 'statistic') return 'Statistic · Infografis & dashboard';
  if (category === 'grafis') return 'Desain Grafis · Poster & vektor';
  if (category === 'logo') return 'Desain Logo · Branding & identitas';
  return 'Illustrasi · Sketsa & drawing';
}

function renderPortfolio(filter = 'all') {
  currentFilter = filter;
  currentPage = 1; // Reset ke halaman 1 saat filter berubah
  portfolioGrid.innerHTML = '';
  
  const filtered = filter === 'all' ? works : works.filter(w => w.category === filter);
  const totalItems = filtered.length;
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginated = filtered.slice(startIdx, endIdx);
  
  paginated.forEach(item => {
    portfolioGrid.appendChild(createCard(item));
  });
  
  renderPaginationControls(totalItems);
}

function updatePortfolioPage() {
  portfolioGrid.innerHTML = '';
  
  const filtered = currentFilter === 'all' ? works : works.filter(w => w.category === currentFilter);
  const totalItems = filtered.length;
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginated = filtered.slice(startIdx, endIdx);
  
  paginated.forEach(item => {
    portfolioGrid.appendChild(createCard(item));
  });
  
  renderPaginationControls(totalItems);
  
  // Scroll ke section portfolio
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderPaginationControls(totalItems) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  // Hapus controls lama jika ada
  let controlsContainer = document.getElementById('paginationControls');
  if (controlsContainer) {
    controlsContainer.remove();
  }
  
  // Buat container baru
  controlsContainer = document.createElement('div');
  controlsContainer.id = 'paginationControls';
  controlsContainer.className = 'pagination-controls';
  
  // Items per page selector
  const perPageSelector = document.createElement('div');
  perPageSelector.className = 'per-page-selector';
  perPageSelector.innerHTML = `
    <span>Tampilkan:</span>
    <button class="per-page-btn ${itemsPerPage === 10 ? 'active' : ''}" data-count="10">10</button>
    <button class="per-page-btn ${itemsPerPage === 20 ? 'active' : ''}" data-count="20">20</button>
    <button class="per-page-btn ${itemsPerPage === 50 ? 'active' : ''}" data-count="50">50</button>
  `;
  
  // Pagination buttons
  const paginationButtons = document.createElement('div');
  paginationButtons.className = 'pagination-buttons';
  
  if (totalPages > 1) {
    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.className = 'page-btn';
    prevBtn.textContent = '← Sebelumnya';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        updatePortfolioPage();
      }
    };
    paginationButtons.appendChild(prevBtn);
    
    // Page info
    const pageInfo = document.createElement('span');
    pageInfo.className = 'page-info';
    pageInfo.textContent = `Halaman ${currentPage} dari ${totalPages}`;
    paginationButtons.appendChild(pageInfo);
    
    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'page-btn';
    nextBtn.textContent = 'Berikutnya →';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePortfolioPage();
      }
    };
    paginationButtons.appendChild(nextBtn);
  }
  
  controlsContainer.appendChild(perPageSelector);
  controlsContainer.appendChild(paginationButtons);
  
  // Insert after portfolio grid
  portfolioGrid.parentNode.insertBefore(controlsContainer, portfolioGrid.nextSibling);
  
  // Add event listeners untuk per-page buttons
  controlsContainer.querySelectorAll('.per-page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      itemsPerPage = parseInt(btn.dataset.count);
      currentPage = 1;
      updatePortfolioPage();
    });
  });
}

function renderLatest() {
  latestGrid.innerHTML = '';
  latestIds.map(id => works.find(w => w.id === id)).forEach(item => {
    if (!item) return;
    latestGrid.appendChild(createCard(item));
  });
}

function openModal(id) {
  const item = works.find(w => w.id === id);
  if (!item) return;
  if (item.image) {
    modalMedia.innerHTML = '';
    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;
    modalMedia.appendChild(img);
    modalMedia.style.background = '';
  } else {
    modalMedia.innerHTML = '';
    modalMedia.style.background = item.accent;
  }
  modalTitle.textContent = item.title;
  modalDescription.textContent = item.description;
  modalCategory.textContent = labelForCategory(item.category);
  modalTags.innerHTML = '';
  item.tags.forEach(t => {
    const tag = document.createElement('span');
    tag.textContent = t;
    modalTags.appendChild(tag);
  });
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

tabs.forEach(btn => {
  btn.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
    renderPortfolio(btn.dataset.filter);
  });
});

document.querySelectorAll('[data-modal-close]').forEach(el => {
  el.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

renderPortfolio();
renderLatest();
