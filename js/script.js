// set current year in footer
document.getElementById('yr').textContent = new Date().getFullYear();

// simple gallery filter
const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('#gallery .card');

filters.forEach(f => {
  f.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    f.classList.add('active');
    const cat = f.dataset.filter;
    cards.forEach(c => {
      c.style.display = (cat === 'all' || c.dataset.cat === cat) ? 'block' : 'none';
    });
  });
});

// update social links here
document.getElementById('ig').href = 'https://instagram.com/jiggysova';
document.getElementById('tt').href = 'https://tiktok.com/@jiggysovaa';
document.getElementById('fv').href = 'https://www.fiverr.com/jiggysova';
