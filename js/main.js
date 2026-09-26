/**
 * FRIENDS GRAPHICS — INTERACTIVE JAVASCRIPT
 * High performance, zero dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu when clicking outside or clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 2. Header Scroll Effect
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 3. Animated Stats Counter
  const statsElements = document.querySelectorAll('.stat-count');
  let statsCounted = false;

  const countUp = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    let current = 0;
    const duration = 1800; // ms
    const stepTime = 25;
    const steps = duration / stepTime;
    const increment = Math.ceil(target / steps);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = current.toLocaleString('en-IN') + suffix;
    }, stepTime);
  };

  const statsSection = document.getElementById('statsSection');
  if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          statsElements.forEach(el => countUp(el));
        }
      });
    }, { threshold: 0.3 });

    statsObserver.observe(statsSection);
  }

  // 4. Portfolio Filter System
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      portfolioCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 5. Portfolio Lightbox
  const lightbox = document.getElementById('portfolioLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxTag = document.getElementById('lightboxTag');
  const lightboxClose = document.getElementById('lightboxClose');

  portfolioCards.forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      const title = card.querySelector('.portfolio-card-title')?.textContent || 'Printing Work';
      const tag = card.querySelector('.portfolio-tag')?.textContent || 'Friends Graphics';

      if (lightbox && lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxTag) lightboxTag.textContent = tag;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // 6. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle clicked
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 7. Interactive File Upload Simulation
  const fileInput = document.getElementById('designUpload');
  const fileNameDisplay = document.getElementById('uploadedFileName');
  const dropzone = document.getElementById('fileDropzone');

  if (fileInput && fileNameDisplay && dropzone) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        fileNameDisplay.textContent = `Attached: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
        fileNameDisplay.style.display = 'block';
        dropzone.style.borderColor = 'var(--brand-orange)';
      }
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      });
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      });
    });
  }

  // 8. Quote Request Form Submission (Direct WhatsApp & Toast)
  const quoteForm = document.getElementById('quoteForm');
  const toast = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  const showToast = (message) => {
    if (toast && toastMessage) {
      toastMessage.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 4500);
    }
  };

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('quoteName')?.value.trim();
      const phone = document.getElementById('quotePhone')?.value.trim();
      const service = document.getElementById('quoteService')?.value;
      const quantity = document.getElementById('quoteQty')?.value.trim();
      const size = document.getElementById('quoteSize')?.value.trim();
      const message = document.getElementById('quoteMessage')?.value.trim();

      if (!name || !phone) {
        showToast('Please provide your name and phone number.');
        return;
      }

      // Format WhatsApp message to Friends Graphics (+91 7992421080)
      const waText = encodeURIComponent(
        `*New Printing Inquiry — Friends Graphics Patna*\n` +
        `------------------------------------\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `🖨️ *Service:* ${service || 'General Printing'}\n` +
        `📏 *Size:* ${size || 'Standard / Custom'}\n` +
        `🔢 *Quantity:* ${quantity || 'Not specified'}\n` +
        (message ? `📝 *Message:* ${message}\n` : '') +
        `------------------------------------\n` +
        `Sent via friendsgraphicss.com`
      );

      showToast('Thank you! Redirecting you to WhatsApp for immediate quote...');
      
      setTimeout(() => {
        window.open(`https://wa.me/917992421080?text=${waText}`, '_blank');
        quoteForm.reset();
        if (fileNameDisplay) fileNameDisplay.style.display = 'none';
      }, 1200);
    });
  }

  // Quick Service Selector click helper
  window.selectServiceAndScroll = (serviceName) => {
    const serviceSelect = document.getElementById('quoteService');
    const contactSection = document.getElementById('contact');
    if (serviceSelect) {
      serviceSelect.value = serviceName;
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
});
