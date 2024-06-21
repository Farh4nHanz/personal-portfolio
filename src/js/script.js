document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("a.nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});

window.addEventListener("scroll", reveal);

function reveal() {
  const items = document.querySelectorAll(
    ".project-item, .project-title, .explore, .photo, .personal-title, .personal-text, .collab-text"
  );

  for (let i = 0; i < items.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = items[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      items[i].classList.add("active");
    } else {
      items[i].classList.remove("active");
    }
  }
}

AOS.init({
  duration: 1200,
});

let name = "I'm Syaiful Farhan Hanif,";
let words = name.split(" ");
let role = "Back-End Developer";
let [prefix, suffix] = role.split(" ");

let html = `
${words
  .map((word, index) => {
    return `<span class="rellax name" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="${
      index * 300
    }" data-aos-anchor="#name__role">${word}</span> `;
  })
  .join("")}
  <br>
  <span class="rellax role" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1200" data-aos-anchor="#name__role">${prefix}</span> <span class="rellax end" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="1500" data-aos-anchor="#name__role">${suffix}</span>
`;

$("#name__role").html(html);

// Initialize Rellax library
let rellax = new Rellax(".rellax", {
  center: true,
  breakpoint: 500,
});
