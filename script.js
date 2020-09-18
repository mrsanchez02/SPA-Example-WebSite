window.sr = ScrollReveal();
sr.reveal(".navbar", {
  origin: "bottom",
  duration: 2000,
  distance: "20px",
});
sr.reveal(".header-content-left", {
  duration: 2000,
  origin: "top",
  distance: "300px",
});
sr.reveal(".header-content-right", {
  duration: 2000,
  origin: "right",
  distance: "100px",
});
sr.reveal(".headder-btn", {
  duration: 2000,
  delay: 500,
  origin: "right",
  distance: "100px",
});
sr.reveal("#testimonial", {
  duration: 2000,
  delay: 1000,
  origin: "left",
  distance: "300px",
  viewFactor: 0.2,
});
sr.reveal(".info-left", {
  duration: 1500,
  delay: 500,
  origin: "left",
  distance: "150px",
});
sr.reveal(".info-right", {
  duration: 1200,
  delay: 250,
  origin: "right",
  distance: "150px",
});
sr.reveal(".info-two-left", {
  duration: 2000,
  delay: 700,
  origin: "left",
  distance: "100px",
  viewFactor: 0.2,
});
sr.reveal(".info-two-right", {
  duration: 2000,
  delay: 500,
  origin: "right",
  distance: "150px",
  viewFactor: 0.2,
});
sr.reveal(".card", {
  duration: 2000,
  delay: 1500,
  origin: "right",
  distance: "70px",
  viewFactor: 0.2,
});

// Smooth Scrooling

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
