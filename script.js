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
window.addEventListener('load', () => {
  setTimeout(() => {
    openContactModal();          // show it the first time, after 5s
    setInterval(openContactModal, 10000); // then show it again every 10s, forever
  }, 10000);
});