// ===== HIEUBIKE LANDING PAGE JAVASCRIPT =====
// Modern, clean interactions for electric scooter rescue service

document.addEventListener("DOMContentLoaded", function () {
  // ===== INITIALIZE AOS ANIMATIONS =====
  AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    offset: 50,
  });

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.querySelector(".navbar");
  let lastScrollTop = 0;

  function handleNavbarScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "none";
    }

    // Hide navbar on scroll down, show on scroll up
    if (scrollTop > lastScrollTop && scrollTop > 200) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    lastScrollTop = scrollTop;
  }

  // Throttle scroll events for better performance
  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        handleNavbarScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // ===== MOBILE MENU TOGGLE =====
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      navToggle.classList.toggle("active");
    });

    // Close menu when clicking on links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
      });
    });
  }

  // ===== SMOOTH SCROLLING FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // ===== HERO TITLE ANIMATION =====
  function animateHeroTitle() {
    const heroTitle = document.querySelector(".hero-title-main");
    if (heroTitle) {
      // Add typewriter effect
      const text = heroTitle.textContent;
      heroTitle.textContent = "";
      heroTitle.style.borderRight = "3px solid white";

      let i = 0;
      function typeWriter() {
        if (i < text.length) {
          heroTitle.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        } else {
          // Remove cursor after typing
          setTimeout(() => {
            heroTitle.style.borderRight = "none";
          }, 1000);
        }
      }

      // Start typing after a delay
      setTimeout(typeWriter, 1000);
    }
  }

  // Start hero animation
  animateHeroTitle();

  // ===== SERVICE CARDS HOVER EFFECT =====
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Add subtle scale and glow effect
      this.style.transform = "translateY(-8px) scale(1.02)";
      this.style.boxShadow = "0 20px 40px rgba(58, 166, 185, 0.15)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
      this.style.boxShadow =
        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    });
  });

  // ===== HIGHLIGHT CARDS STAGGER ANIMATION =====
  function staggerHighlightCards() {
    const cards = document.querySelectorAll(".highlight-card");
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.style.animation = "fadeInUp 0.6s ease-out forwards";
    });
  }

  // Trigger when about section comes into view
  const aboutSection = document.querySelector(".about");
  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          staggerHighlightCards();
          aboutObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (aboutSection) {
    aboutObserver.observe(aboutSection);
  }

  // ===== PHONE NUMBER FORMATTING =====
  function formatPhoneNumber(phone) {
    // Format Vietnamese phone numbers for better readability
    return phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
  }

  // ===== EMERGENCY CALL TRACKING =====
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
    link.addEventListener("click", function () {
      // Track emergency calls (you can integrate with analytics here)
      const phoneNumber = this.getAttribute("href").replace("tel:", "");
      console.log(`Emergency call initiated to: ${phoneNumber}`);

      // Optional: Show confirmation modal
      if (phoneNumber === "0369688969") {
        // Main emergency number
        gtag &&
          gtag("event", "emergency_call", {
            event_category: "contact",
            event_label: "main_hotline",
          });
      }
    });
  });

  // ===== DYNAMIC COPYRIGHT YEAR =====
  const currentYear = new Date().getFullYear();
  const copyrightElements = document.querySelectorAll(".copyright");
  copyrightElements.forEach((element) => {
    element.innerHTML = element.innerHTML.replace("2025", currentYear);
  });

  // ===== LOADING ANIMATION =====
  function showPageLoader() {
    const loader = document.createElement("div");
    loader.id = "page-loader";
    loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-spinner"></div>
                <p>Đang tải...</p>
            </div>
        `;
    loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(58, 166, 185, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            color: white;
            font-family: inherit;
        `;

    const style = document.createElement("style");
    style.textContent = `
            .loader-content {
                text-align: center;
            }
            .loader-spinner {
                width: 40px;
                height: 40px;
                border: 4px solid rgba(255,255,255,0.3);
                border-top: 4px solid white;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 1rem;
            }
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
    document.head.appendChild(style);
    document.body.appendChild(loader);

    // Remove loader after page is ready
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.5s ease";
      setTimeout(() => {
        loader.remove();
        style.remove();
      }, 500);
    }, 1500);
  }

  // ===== PROGRESSIVE IMAGE LOADING =====
  function lazyLoadImages() {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // ===== PERFORMANCE MONITORING =====
  function measurePerformance() {
    if ("performance" in window) {
      window.addEventListener("load", () => {
        const loadTime =
          performance.timing.loadEventEnd - performance.timing.navigationStart;
        console.log(`Page loaded in ${loadTime}ms`);

        // Report to analytics if needed
        gtag &&
          gtag("event", "page_load_time", {
            event_category: "performance",
            value: loadTime,
          });
      });
    }
  }

  // ===== ACCESSIBILITY ENHANCEMENTS =====
  function enhanceAccessibility() {
    // Add keyboard navigation for interactive elements
    document.querySelectorAll(".btn, .nav-link").forEach((element) => {
      element.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.click();
        }
      });
    });

    // Add focus indicators
    const style = document.createElement("style");
    style.textContent = `
            .btn:focus,
            .nav-link:focus,
            a:focus {
                outline: 2px solid var(--primary);
                outline-offset: 2px;
            }
        `;
    document.head.appendChild(style);
  }

  // ===== INITIALIZE ALL FEATURES =====
  // Only show loader on first visit
  if (!sessionStorage.getItem("visited")) {
    showPageLoader();
    sessionStorage.setItem("visited", "true");
  }

  lazyLoadImages();
  measurePerformance();
  enhanceAccessibility();

  // ===== FLOATING CONTACT BUTTONS =====
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  function handleScrollTopButton() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 200) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  }

  // Cuộn lên đầu khi click
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Add scroll handler for floating contact buttons
  window.addEventListener("scroll", handleScrollTopButton);

  // ===== ERROR HANDLING =====
  window.addEventListener("error", function (e) {
    console.error("JavaScript error:", e.error);
    // Optionally report to analytics
  });

  // ===== CONSOLE BRANDING =====
  console.log(
    "%c🏍️ HieuBike Landing Page",
    "color: #3AA6B9; font-size: 16px; font-weight: bold;"
  );
  console.log(
    "%cCứu hộ xe điện 24/7 - Hotline: 0369 688 969",
    "color: #2997AA; font-size: 12px;"
  );
});

// ===== UTILITY FUNCTIONS =====

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Format Vietnamese currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
}

// Validate Vietnamese phone number
function isValidVietnamesePhone(phone) {
  const phoneRegex = /^(84|0)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

// ===== EXPORT FOR EXTERNAL USE =====
window.HieuBike = {
  formatCurrency,
  isValidVietnamesePhone,
  debounce,
  throttle,
};
