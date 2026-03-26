/* ================================
   ZINAÏA Skincare - Main JavaScript
   ================================ */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all components
  initCart();
  initSlideCart();
  initSlideMenu();
  initSearchModal();
  initQuantityControls();
  initTestimonialsSlider();
  initRoutineTabs();
  initAccordions();
  initSmoothScroll();
  initHeaderScroll();
  initHeroSlider();
});

/* ================================
   Hero Slider
   ================================ */

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const texts = document.querySelectorAll('.hero-text');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.querySelector('.hero-arrow-prev');
  const nextBtn = document.querySelector('.hero-arrow-next');
  const counterCurrent = document.querySelector('.hero-counter-current');
  
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  let autoplayTimer = null;
  let isAnimating = false;
  const autoplayDelay = 6000;
  
  function goToSlide(index) {
    if (isAnimating || index === currentSlide) return;
    isAnimating = true;
    
    // Update slides
    slides[currentSlide].classList.remove('active');
    slides[index].classList.add('active');
    
    // Update text
    texts[currentSlide].classList.remove('active');
    texts[index].classList.add('active');
    
    // Update dots
    dots[currentSlide].classList.remove('active');
    dots[index].classList.add('active');
    
    // Update counter
    if (counterCurrent) {
      counterCurrent.textContent = String(index + 1).padStart(2, '0');
    }
    
    currentSlide = index;
    
    // Reset autoplay
    resetAutoplay();
    
    // Allow next animation after transition
    setTimeout(() => {
      isAnimating = false;
    }, 900);
  }
  
  function nextSlide() {
    const next = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    goToSlide(next);
  }
  
  function prevSlide() {
    const prev = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(prev);
  }
  
  function resetAutoplay() {
    if (autoplayTimer) clearTimeout(autoplayTimer);
    autoplayTimer = setTimeout(nextSlide, autoplayDelay);
  }
  
  // Event listeners
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);
  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
  });
  
  // Start autoplay
  resetAutoplay();
  
  // Pause on hover (optional)
  const heroSection = document.querySelector('.hero-fullbleed');
  if (heroSection) {
    heroSection.addEventListener('mouseenter', () => {
      if (autoplayTimer) clearTimeout(autoplayTimer);
    });
    heroSection.addEventListener('mouseleave', resetAutoplay);
  }
}

/* ================================
   Cart Functionality
   ================================ */

// Cart state
let cart = JSON.parse(localStorage.getItem('zinaia_cart')) || [];

function initCart() {
  updateCartCount();
  renderCartItems();
}

function addToCart(product) {
  const existingItem = cart.find(item => item.id === product.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }
  
  saveCart();
  updateCartCount();
  renderCartItems();
  openSlideCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCount();
  renderCartItems();
}

function updateQuantity(productId, change) {
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    item.quantity += change;
    
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
      updateCartCount();
      renderCartItems();
    }
  }
}

function saveCart() {
  localStorage.setItem('zinaia_cart', JSON.stringify(cart));
}

function updateCartCount() {
  const countElements = document.querySelectorAll('.cart-count');
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  countElements.forEach(el => {
    el.textContent = totalItems;
    el.style.display = totalItems > 0 ? 'flex' : 'none';
  });
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function renderCartItems() {
  // Slide cart items
  const slideCartItems = document.querySelector('.slide-cart-items');
  if (slideCartItems) {
    if (cart.length === 0) {
      slideCartItems.innerHTML = `
        <div class="slide-cart-empty">
          <div class="slide-cart-empty-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <p class="heading-small">Your cart is empty</p>
          <p class="text-muted" style="margin-top: 0.5rem;">Add some products to get started</p>
        </div>
      `;
    } else {
      slideCartItems.innerHTML = cart.map(item => `
        <div class="slide-cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="slide-cart-item-image">
          <div class="slide-cart-item-info">
            <p class="slide-cart-item-name">${item.name}</p>
            <p class="slide-cart-item-price">${item.price} DHS</p>
            <div class="slide-cart-item-qty">
              <button class="slide-cart-qty-btn" onclick="updateQuantity(${item.id}, -1)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                </svg>
              </button>
              <span>${item.quantity}</span>
              <button class="slide-cart-qty-btn" onclick="updateQuantity(${item.id}, 1)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
          <button class="slide-cart-item-remove" onclick="removeFromCart(${item.id})">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      `).join('');
    }
  }
  
  // Update subtotal
  const subtotalElements = document.querySelectorAll('.slide-cart-subtotal-value, .cart-total-value');
  subtotalElements.forEach(el => {
    el.textContent = `${getCartTotal()} DHS`;
  });
  
  // Update shipping progress
  updateShippingProgress();
  
  // Cart page items
  const cartPageItems = document.querySelector('.cart-items');
  if (cartPageItems) {
    if (cart.length === 0) {
      cartPageItems.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <p class="heading-medium">Your cart is empty</p>
          <p class="text-muted" style="margin-top: 0.5rem; margin-bottom: 1.5rem;">Looks like you haven't added anything yet</p>
          <a href="shop.html" class="btn btn-primary">Start Shopping</a>
        </div>
      `;
    } else {
      cartPageItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-info">
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-price">${item.price} DHS</p>
            <div class="cart-item-qty">
              <button class="cart-item-qty-btn" onclick="updateQuantity(${item.id}, -1)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                </svg>
              </button>
              <span>${item.quantity}</span>
              <button class="cart-item-qty-btn" onclick="updateQuantity(${item.id}, 1)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
          <div class="cart-item-actions">
            <span class="cart-item-total">${item.price * item.quantity} DHS</span>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      `).join('');
    }
  }
}

function updateShippingProgress() {
  const freeShippingThreshold = 499;
  const total = getCartTotal();
  const progress = Math.min((total / freeShippingThreshold) * 100, 100);
  const remaining = freeShippingThreshold - total;
  
  const progressBars = document.querySelectorAll('.slide-cart-shipping-progress, .cart-shipping-bar-fill');
  progressBars.forEach(bar => {
    bar.style.width = `${progress}%`;
  });
  
  const shippingTexts = document.querySelectorAll('.slide-cart-shipping-text, .cart-shipping-text');
  shippingTexts.forEach(text => {
    if (remaining > 0) {
      text.innerHTML = `Add <strong>${remaining} DHS</strong> more for <strong>FREE shipping</strong>`;
    } else {
      text.innerHTML = `<strong>Congratulations!</strong> You get FREE shipping`;
    }
  });
}

/* ================================
   Slide Cart
   ================================ */

function initSlideCart() {
  const cartBtn = document.querySelector('.cart-btn');
  const slideCartOverlay = document.querySelector('.slide-cart-overlay');
  const slideCartClose = document.querySelector('.slide-cart-close');
  const continueShoppingBtn = document.querySelector('.slide-cart-continue');
  
  if (cartBtn) {
    cartBtn.addEventListener('click', openSlideCart);
  }
  
  if (slideCartOverlay) {
    slideCartOverlay.addEventListener('click', closeSlideCart);
  }
  
  if (slideCartClose) {
    slideCartClose.addEventListener('click', closeSlideCart);
  }
  
  if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener('click', closeSlideCart);
  }
}

function openSlideCart() {
  const slideCart = document.querySelector('.slide-cart');
  const slideCartOverlay = document.querySelector('.slide-cart-overlay');
  
  if (slideCart && slideCartOverlay) {
    slideCart.classList.add('open');
    slideCartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeSlideCart() {
  const slideCart = document.querySelector('.slide-cart');
  const slideCartOverlay = document.querySelector('.slide-cart-overlay');
  
  if (slideCart && slideCartOverlay) {
    slideCart.classList.remove('open');
    slideCartOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ================================
   Slide Menu
   ================================ */

function initSlideMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const slideMenuOverlay = document.querySelector('.slide-menu-overlay');
  const slideMenuClose = document.querySelector('.slide-menu-close');
  
  if (menuBtn) {
    menuBtn.addEventListener('click', openSlideMenu);
  }
  
  if (slideMenuOverlay) {
    slideMenuOverlay.addEventListener('click', closeSlideMenu);
  }
  
  if (slideMenuClose) {
    slideMenuClose.addEventListener('click', closeSlideMenu);
  }
}

function openSlideMenu() {
  const slideMenu = document.querySelector('.slide-menu');
  const slideMenuOverlay = document.querySelector('.slide-menu-overlay');
  
  if (slideMenu && slideMenuOverlay) {
    slideMenu.classList.add('open');
    slideMenuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeSlideMenu() {
  const slideMenu = document.querySelector('.slide-menu');
  const slideMenuOverlay = document.querySelector('.slide-menu-overlay');
  
  if (slideMenu && slideMenuOverlay) {
    slideMenu.classList.remove('open');
    slideMenuOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

/* ================================
   Search Modal
   ================================ */

function initSearchModal() {
  const searchBtn = document.querySelector('.search-btn');
  const searchModalClose = document.querySelector('.search-modal-close');
  const searchInput = document.querySelector('.search-modal-input');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', openSearchModal);
  }
  
  if (searchModalClose) {
    searchModalClose.addEventListener('click', closeSearchModal);
  }
  
  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSearchModal();
    }
  });
  
  // Handle search input
  if (searchInput) {
    searchInput.addEventListener('input', handleSearch);
  }
}

function openSearchModal() {
  const searchModal = document.querySelector('.search-modal');
  const searchModalOverlay = document.querySelector('.search-modal-overlay');
  const searchInput = document.querySelector('.search-modal-input');
  
  if (searchModal && searchModalOverlay) {
    searchModal.classList.add('open');
    searchModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    
    if (searchInput) {
      setTimeout(() => searchInput.focus(), 100);
    }
  }
}

function closeSearchModal() {
  const searchModal = document.querySelector('.search-modal');
  const searchModalOverlay = document.querySelector('.search-modal-overlay');
  
  if (searchModal && searchModalOverlay) {
    searchModal.classList.remove('open');
    searchModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  const resultsContainer = document.querySelector('.search-modal-results');
  
  if (!resultsContainer) return;
  
  // Sample products for search (replace with your actual products)
  const products = [
    { id: 1, name: 'Hydrating Serum', price: 349, image: 'images/product-1.jpg', category: 'Serums' },
    { id: 2, name: 'Glow Moisturizer', price: 289, image: 'images/product-2.jpg', category: 'Moisturizers' },
    { id: 3, name: 'Vitamin C Boost', price: 399, image: 'images/product-3.jpg', category: 'Serums' },
    { id: 4, name: 'Night Repair Cream', price: 449, image: 'images/product-4.jpg', category: 'Treatments' },
    { id: 5, name: 'Gentle Cleanser', price: 199, image: 'images/product-5.jpg', category: 'Cleansers' },
    { id: 6, name: 'Eye Contour', price: 329, image: 'images/product-6.jpg', category: 'Eye Care' },
  ];
  
  if (query.length < 2) {
    resultsContainer.innerHTML = '';
    return;
  }
  
  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query)
  );
  
  if (filtered.length === 0) {
    resultsContainer.innerHTML = '<p class="text-muted text-center" style="grid-column: 1/-1; padding: 2rem;">No products found</p>';
    return;
  }
  
  resultsContainer.innerHTML = filtered.map(product => `
    <a href="product.html?id=${product.id}" class="search-result-item">
      <img src="${product.image}" alt="${product.name}" class="search-result-image">
      <div class="search-result-info">
        <p class="search-result-name">${product.name}</p>
        <p class="search-result-price">${product.price} DHS</p>
      </div>
    </a>
  `).join('');
}

/* ================================
   Product Page Quantity
   ================================ */

function initQuantityControls() {
  const minusBtn = document.querySelector('.qty-minus');
  const plusBtn = document.querySelector('.qty-plus');
  const qtyDisplay = document.querySelector('.qty-value');
  
  if (minusBtn && plusBtn && qtyDisplay) {
    let quantity = 1;
    
    minusBtn.addEventListener('click', function() {
      if (quantity > 1) {
        quantity--;
        qtyDisplay.textContent = quantity;
      }
    });
    
    plusBtn.addEventListener('click', function() {
      quantity++;
      qtyDisplay.textContent = quantity;
    });
  }
}

/* ================================
   Testimonials Slider
   ================================ */

function initTestimonialsSlider() {
  const track = document.querySelector('.testimonials-track');
  const prevBtn = document.querySelector('.testimonials-prev');
  const nextBtn = document.querySelector('.testimonials-next');
  
  if (!track) return;
  
  let currentSlide = 0;
  const slides = track.querySelectorAll('.testimonial-card');
  
  function updateSlider() {
    const slideWidth = slides[0].offsetWidth + 32; // Including gap
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
      }
    });
  }
}

/* ================================
   Routine Tabs
   ================================ */

function initRoutineTabs() {
  const tabs = document.querySelectorAll('.routine-tab');
  const contents = document.querySelectorAll('.routine-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const target = this.dataset.target;
      
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      
      contents.forEach(content => {
        if (content.dataset.routine === target) {
          content.style.display = 'grid';
        } else {
          content.style.display = 'none';
        }
      });
    });
  });
}

/* ================================
   Accordions
   ================================ */

function initAccordions() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.accordion-icon');
      const isOpen = content.classList.contains('open');
      
      // Close all accordions
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
      document.querySelectorAll('.accordion-icon').forEach(i => i.classList.remove('rotate'));
      
      // Open clicked if it was closed
      if (!isOpen) {
        content.classList.add('open');
        if (icon) icon.classList.add('rotate');
      }
    });
  });
}

/* ================================
   Smooth Scroll
   ================================ */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* ================================
   Header Scroll Effect
   ================================ */

function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  if (!header) return;
  
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
      header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
  });
}

/* ================================
   Checkout Functions
   ================================ */

function proceedToPayment() {
  const step1 = document.querySelector('.checkout-step-1');
  const step2 = document.querySelector('.checkout-step-2');
  const steps = document.querySelectorAll('.checkout-step');
  
  if (step1 && step2) {
    step1.style.display = 'none';
    step2.style.display = 'block';
    
    steps[0].classList.remove('active');
    steps[0].classList.add('completed');
    steps[1].classList.add('active');
  }
}

function backToInformation() {
  const step1 = document.querySelector('.checkout-step-1');
  const step2 = document.querySelector('.checkout-step-2');
  const steps = document.querySelectorAll('.checkout-step');
  
  if (step1 && step2) {
    step1.style.display = 'block';
    step2.style.display = 'none';
    
    steps[0].classList.add('active');
    steps[0].classList.remove('completed');
    steps[1].classList.remove('active');
  }
}

function selectPaymentMethod(method) {
  const methods = document.querySelectorAll('.checkout-payment-method');
  methods.forEach(m => m.classList.remove('selected'));
  
  const selected = document.querySelector(`[data-method="${method}"]`);
  if (selected) {
    selected.classList.add('selected');
  }
}

function placeOrder() {
  // Clear cart
  cart = [];
  saveCart();
  updateCartCount();
  
  // Redirect to thank you page
  window.location.href = 'thank-you.html';
}

/* ================================
   Quick Add to Cart (for shop page)
   ================================ */

function quickAddToCart(productId, productName, productPrice, productImage) {
  addToCart({
    id: productId,
    name: productName,
    price: productPrice,
    image: productImage
  });
}
