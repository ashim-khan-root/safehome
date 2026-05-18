document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initCart();
  initWishlist();
  initCountdown();
  initQuickView();
  initNewsletter();
  initCookieNotice();
});

function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

function initCart() {
  const cartBtns = document.querySelectorAll('.add-to-cart');
  const cartCount = document.getElementById('cart-count');
  let count = parseInt(localStorage.getItem('cartCount') || '0');
  if (cartCount) cartCount.textContent = count;

  cartBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      count++;
      localStorage.setItem('cartCount', count.toString());
      if (cartCount) {
        cartCount.textContent = count;
        cartCount.classList.remove('scale-100');
        void cartCount.offsetWidth;
        cartCount.classList.add('scale-125');
        setTimeout(() => cartCount.classList.remove('scale-125'), 200);
      }
      const original = this.innerHTML;
      this.innerHTML = '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Added';
      this.classList.remove('bg-accent-blue', 'hover:bg-brand-600');
      this.classList.add('bg-green-500');
      setTimeout(() => {
        this.innerHTML = original;
        this.classList.remove('bg-green-500');
        this.classList.add('bg-accent-blue', 'hover:bg-brand-600');
      }, 2000);
    });
  });
}

function initWishlist() {
  document.querySelectorAll('.wishlist-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('text-red-500');
      this.classList.toggle('text-soft-gray');
      const svg = this.querySelector('svg');
      if (svg) {
        if (this.classList.contains('text-red-500')) {
          svg.setAttribute('fill', 'currentColor');
        } else {
          svg.removeAttribute('fill');
        }
      }
    });
  });
}

function initCountdown() {
  const timer = document.getElementById('deal-countdown');
  if (!timer) return;
  let totalSeconds = parseInt(timer.dataset.hours || '24') * 3600;
  const updateTimer = () => {
    if (totalSeconds <= 0) return;
    totalSeconds--;
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-minutes').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-seconds').textContent = String(s).padStart(2, '0');
  };
  updateTimer();
  setInterval(updateTimer, 1000);
}

function initQuickView() {
  document.querySelectorAll('.quick-view-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const modal = document.getElementById('quick-view-modal');
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  const closeBtn = document.getElementById('qv-close');
  const modal = document.getElementById('quick-view-modal');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', function (e) {
      if (e.target === this) {
        this.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }
}

function initNewsletter() {
  const popup = document.getElementById('newsletter-popup');
  const close = document.getElementById('nl-close');
  if (popup && !localStorage.getItem('nl-dismissed')) {
    setTimeout(() => { popup.classList.remove('hidden'); }, 5000);
  }
  if (close && popup) {
    close.addEventListener('click', () => {
      popup.classList.add('hidden');
      localStorage.setItem('nl-dismissed', 'true');
    });
  }
}

function initCookieNotice() {
  const notice = document.getElementById('cookie-notice');
  const accept = document.getElementById('cookie-accept');
  if (notice && !localStorage.getItem('cookies-accepted')) {
    notice.classList.remove('hidden');
  }
  if (accept && notice) {
    accept.addEventListener('click', () => {
      notice.classList.add('hidden');
      localStorage.setItem('cookies-accepted', 'true');
    });
  }
}
