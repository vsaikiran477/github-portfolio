// script.js
// Optional: Add dark mode functionality
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Change button text/icon
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});


const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    function showSection(id) {
      sections.forEach((section) => {
        if (section.id === id) {
          section.style.display = "block";
        } else {
          section.style.display = "none";
        }
      });
  
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  
    // Show home by default
    showSection("home");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        showSection(targetId);
      });
    });
  
    // Dark Mode toggle (optional)
    const toggleBtn = document.getElementById("toggle-theme");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
  
    function showSection(id) {
      sections.forEach((section) => {
        section.style.display = section.id === id ? "block" : "none";
      });
  
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  
    // Initial display
    showSection("home");
  
    // Nav link click handler
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute("href").substring(1);
        showSection(sectionId);
      });
    });
  
    // Toggle dark mode
    const toggleBtn = document.getElementById("toggle-theme");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
      });
    }
  });

  document.getElementById("contact-Form").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page refresh

    const status = document.getElementById("statusMessage");
    status.textContent = "✅ Message sent successfully!";
    status.style.color = "green";

    // Reset the form fields
    this.reset();

    // Optional: Hide the message after 5 seconds
    setTimeout(() => {
      status.textContent = "";
    }, 5000);
  });

  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("statusMessage");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent page reload

      // Simulate form submission (since backend not present)
      setTimeout(() => {
        statusMessage.textContent = "Message sent successfully!";
        statusMessage.style.color = "green";

        // Optional: clear the form
        form.reset();
      }, 500); // simulate delay
    });
  });
