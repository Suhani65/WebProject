// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1); // Remove the "#" from the href
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start"
          });
      }
  });
});

// Back to Top Button Logic
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "↑ Top";
backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "20px";
backToTopBtn.style.right = "20px";
backToTopBtn.style.padding = "10px 15px";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "5px";
backToTopBtn.style.backgroundColor = "#b22222";
backToTopBtn.style.color = "#fff";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.3)";
backToTopBtn.style.display = "none"; // Initially hidden
backToTopBtn.style.zIndex = "1000";
document.body.appendChild(backToTopBtn);

// Show/Hide Back to Top Button
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
  } else {
      backToTopBtn.style.display = "none";
  }
});

// Scroll to Top on Button Click
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});
