function setupCarousel(containerId) {
  const container = document.getElementById(containerId);
  const images = container.querySelectorAll("img");
  const desc = container.parentElement.querySelector(".carousel-desc"); // grab the p inside the same section

  let current = 0;
  images[current].classList.add("active");
  desc.textContent = images[current].dataset.desc; // set first description

  setInterval(() => {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
    desc.textContent = images[current].dataset.desc;
  }, 3000); // switch every 3s
}

setupCarousel("customer-carousel");
setupCarousel("admin-carousel");