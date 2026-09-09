/* ============================================================
   GSAP + ScrollTrigger — professional animation setup
   ============================================================ */
gsap.registerPlugin(ScrollTrigger);

/* ---------- 1. Hero entrance (plays once on load) ---------- */
gsap.timeline({ defaults: { ease: "power3.out" } })
  .from(".hero-badge", { opacity: 0, y: 24, duration: 0.7 })
  .from(".hero-content h1", { opacity: 0, y: 34, duration: 0.9 }, "-=0.45")
  .from(".hero-content p", { opacity: 0, y: 24, duration: 0.8 }, "-=0.55")
  .from([".hero-arrow-prev", ".hero-arrow-next"], { opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.5")
  .from(".request-price-tab", { opacity: 0, x: 40, duration: 0.7 }, "-=0.6");

/* ---------- 2. Section headings — fade + slight rise ---------- */
gsap.utils.toArray(".heading, .loc-heading, .psl-heading, .hero-feature__title").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
  });
});

gsap.utils.toArray(".eyebrow, .psl-eyebrow, .amenities-pill, .subtext").forEach((el) => {
  gsap.from(el, {
    opacity: 0,
    y: 16,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: el,
      start: "top 90%",
    },
  });
});

/* ---------- 3. Feature cards / about cards / floorplan cards — staggered rise ---------- */
// gsap.utils.toArray(".feature-cards, .about-cards, .floorplans-grid").forEach((group) => {
//   const items = group.children;
//   gsap.from(items, {
//     opacity: 0,
//     y: 40,
//     scale: 0.96,
//     duration: 0.7,
//     ease: "power2.out",
//     stagger: 0.12,
//     scrollTrigger: {
//       trigger: group,
//       start: "top 85%",
//     },
//   });
// });

/* ---------- 4. "Where Play / Every Day" feature list — items slide in from left, image reveals from the right ---------- */
gsap.utils.toArray(".hero-feature").forEach((block) => {
  const items = block.querySelectorAll(".feature-item");
  const image = block.querySelector(".hero-feature__image");

  gsap.from(items, {
    opacity: 0,
    x: -40,
    duration: 0.7,
    ease: "power2.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: block,
      start: "top 80%",
    },
  });

  if (image) {
    gsap.from(image, {
      opacity: 0,
      x: 50,
      scale: 0.96,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: {
        trigger: block,
        start: "top 80%",
      },
    });
  }
});

/* ---------- 5. Stats strip — numbers count up ---------- */
gsap.utils.toArray(".stat__number").forEach((el) => {
  const raw = el.textContent.trim();
  const match = raw.match(/[\d.]+/);
  if (!match) return; // skip things like "Dec 2029" with no clean number to count

  const numberPart = parseFloat(match[0]);
  const prefix = raw.slice(0, match.index);
  const suffix = raw.slice(match.index + match[0].length);
  const decimals = match[0].includes(".") ? match[0].split(".")[1].length : 0;

  const counter = { val: 0 };
  el.textContent = prefix + (0).toFixed(decimals) + suffix;

  ScrollTrigger.create({
    trigger: el,
    start: "top 90%",
    once: true,
    onEnter: () => {
      gsap.to(counter, {
        val: numberPart,
        duration: 1.4,
        ease: "power1.out",
        onUpdate: () => {
          el.textContent = prefix + counter.val.toFixed(decimals) + suffix;
        },
      });
    },
  });
});

gsap.from(".stats-strip .stat", {
  opacity: 0,
  y: 20,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".stats-strip",
    start: "top 88%",
  },
});

/* ---------- 6. Master plan image + legend ---------- */
gsap.from(".masterplan-cta", {
  opacity: 0,
  y: 16,
  duration: 0.6,
  scrollTrigger: { trigger: ".masterplan-cta", start: "top 90%" },
});
gsap.from(".masterplan-inner img", {
  opacity: 0,
  scale: 0.94,
  duration: 0.9,
  ease: "power2.out",
  scrollTrigger: { trigger: ".masterplan-frame", start: "top 82%" },
});
gsap.from(".masterplan-legend li", {
  opacity: 0,
  x: 20,
  duration: 0.4,
  stagger: 0.06,
  ease: "power1.out",
  scrollTrigger: { trigger: ".masterplan-frame", start: "top 78%" },
});

/* ---------- 7. Sliders (amenities + gallery) — cards fan in the first time they're seen ---------- */
// gsap.utils.toArray(".slider-track, .psl-track").forEach((trackEl) => {
//   const cards = trackEl.children;
//   gsap.from(cards, {
//     opacity: 0,
//     y: 30,
//     scale: 0.95,
//     duration: 0.6,
//     ease: "power2.out",
//     stagger: 0.08,
//     scrollTrigger: {
//       trigger: trackEl,
//       start: "top 85%",
//     },
//   });
// });

/* ---------- 8. Location Advantages — map + accordion ---------- */
gsap.from(".loc-map", {
  opacity: 0,
  x: -40,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: { trigger: ".loc-grid", start: "top 82%" },
});
gsap.from(".loc-accordion-item", {
  opacity: 0,
  x: 40,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: { trigger: ".loc-grid", start: "top 82%" },
});

/* ---------- 9. About section copy ---------- */
gsap.from(".about-copy > *", {
  opacity: 0,
  y: 24,
  duration: 0.7,
  stagger: 0.12,
  ease: "power2.out",
  scrollTrigger: { trigger: ".about-copy", start: "top 85%" },
});

/* ---------- 10. Contact section ---------- */
gsap.from(".contact-image", {
  opacity: 0,
  x: -40,
  duration: 0.8,
  ease: "power2.out",
  scrollTrigger: { trigger: ".contact-section", start: "top 85%" },
});
gsap.from(".contact-form-wrap > *", {
  opacity: 0,
  y: 24,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: { trigger: ".contact-section", start: "top 85%" },
});

/* ---------- 11. Footer ---------- */
gsap.from(".footer-col", {
  opacity: 0,
  y: 24,
  duration: 0.6,
  stagger: 0.1,
  ease: "power2.out",
  scrollTrigger: { trigger: ".footer-top", start: "top 92%" },
});

/* ---------- 12. Smooth in-page nav scrolling (native, offset for sticky navbar) ---------- */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector(".navbar")?.offsetHeight || 90;
      const targetY = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  });
});

/* ============================================================
   Existing site functionality (unchanged)
   ============================================================ */
(function () {
  "use strict";

  /* ============ MOBILE HAMBURGER NAVBAR ============ */
  var hamburgerBtn = document.getElementById("hamburgerBtn");
  var navLinks = document.getElementById("navLinks");

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener("click", function () {
      hamburgerBtn.classList.toggle("open");
      navLinks.classList.toggle("open");
    });

    // Close menu when a link is clicked (mobile)
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburgerBtn.classList.remove("open");
        navLinks.classList.remove("open");
      });
    });
  }

  /* ============ HERO SLIDER ============ */
  var heroSlider = document.getElementById("heroSlider");
  var heroPrevBtn = document.getElementById("heroPrev");
  var heroNextBtn = document.getElementById("heroNext");

  if (heroSlider) {
  var heroSlideEls = heroSlider.querySelectorAll(".hero-slide");

  function setHeroSlideImages() {
    var isMobile = window.innerWidth <= 700; // adjust breakpoint if needed
    heroSlideEls.forEach(function (slide) {
      var url = isMobile ? slide.dataset.mobile : slide.dataset.desktop;
      slide.style.backgroundImage = "url('" + url + "')";
    });
  }

  setHeroSlideImages();
  window.addEventListener("resize", setHeroSlideImages);
}

  if (heroSlider) {
    var heroSlides = heroSlider.querySelectorAll(".hero-slide");
    var heroCurrentIndex = 0;
    var heroTotalSlides = heroSlides.length;
    var heroAutoTimer = null;
    var heroAutoDelay = 5000;

    function heroShowSlide(index) {
      heroSlides.forEach(function (slide) {
        slide.classList.remove("active");
      });
      heroCurrentIndex = (index + heroTotalSlides) % heroTotalSlides;
      heroSlides[heroCurrentIndex].classList.add("active");
    }

    function heroNextSlide() {
      heroShowSlide(heroCurrentIndex + 1);
    }

    function heroPrevSlide() {
      heroShowSlide(heroCurrentIndex - 1);
    }

    function heroStartAuto() {
      heroAutoTimer = setInterval(heroNextSlide, heroAutoDelay);
    }

    function heroStopAuto() {
      clearInterval(heroAutoTimer);
    }

    function heroRestartAuto() {
      heroStopAuto();
      heroStartAuto();
    }

    if (heroNextBtn) {
      heroNextBtn.addEventListener("click", function () {
        heroNextSlide();
        heroRestartAuto();
      });
    }

    if (heroPrevBtn) {
      heroPrevBtn.addEventListener("click", function () {
        heroPrevSlide();
        heroRestartAuto();
      });
    }

    if (heroTotalSlides > 1) {
      heroStartAuto();
    }
  }
})();

// Floor plan East/West villa toggle
const toggleBtns = document.querySelectorAll(".toggle-btn");
toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    // Swap grid images here if/when west villa assets are added:
    // const villa = btn.dataset.villa;
    // update #floorplans-grid image sources based on villa
  });
});

// ---- Amenities slider ----
const track = document.getElementById("slider-track");
const prevBtn = document.getElementById("slide-prev");
const nextBtn = document.getElementById("slide-next");

function scrollAmount() {
  const card = track.querySelector(".slide-card");
  return card ? card.getBoundingClientRect().width + 20 : 300;
}

prevBtn.addEventListener("click", () => {
  track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
});

// ---- Location Advantages accordion ----
function toggleLocAccordion(headerEl) {
  const item = headerEl.parentElement;
  const isOpen = item.classList.contains("open");
  // close all
  document
    .querySelectorAll("#loc-accordion .loc-accordion-item")
    .forEach((i) => i.classList.remove("open"));
  // reopen clicked one if it wasn't already open
  if (!isOpen) {
    item.classList.add("open");
  }
}

// ---- Gallery slider (independent, prefixed "photo-gallery" / psl to avoid clashing with other sliders) ----
const photoTrack = document.getElementById("photo-gallery-track");
const photoPrevBtn = document.getElementById("photo-gallery-prev");
const photoNextBtn = document.getElementById("photo-gallery-next");

function photoGalleryScrollAmount() {
  const card = photoTrack.querySelector(".psl-card");
  return card ? card.getBoundingClientRect().width + 20 : 320;
}

photoPrevBtn.addEventListener("click", () => {
  photoTrack.scrollBy({
    left: -photoGalleryScrollAmount(),
    behavior: "smooth",
  });
});
photoNextBtn.addEventListener("click", () => {
  photoTrack.scrollBy({ left: photoGalleryScrollAmount(), behavior: "smooth" });
});

// ---- Get in Touch modal ----
function openContactModal() {
  document.getElementById("contact-modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeContactModal() {
  document.getElementById("contact-modal").classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeContactModal();
});

window.addEventListener("load", () => {
  setTimeout(() => {
    openContactModal(); // show it the first time, after 5s
    setInterval(openContactModal, 150000); // then show it again every 10s, forever
  }, 500000);
});