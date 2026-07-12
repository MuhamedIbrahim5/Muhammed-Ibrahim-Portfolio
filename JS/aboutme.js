 // Create dot matrix background
      function createDotMatrix() {
        const dotMatrix = document.getElementById("dotMatrix");
        const numberOfDots = 50;

        for (let i = 0; i < numberOfDots; i++) {
          const dot = document.createElement("div");
          dot.className = "dot";
          dot.style.left = Math.random() * 100 + "%";
          dot.style.top = Math.random() * 100 + "%";
          dot.style.animationDelay = Math.random() * 3 + "s";
          dotMatrix.appendChild(dot);
        }
      }

      // Smooth scrolling for navigation
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Navbar scroll effect
      window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
          navbar.style.background = "rgba(10, 10, 26, 0.98)";
        } else {
          navbar.style.background = "rgba(10, 10, 26, 0.95)";
        }
      });

      // Button click effects
      document
        .querySelectorAll(".btn-download, .btn-contact, .social-link")
        .forEach((btn) => {
          btn.addEventListener("click", function (e) {
            this.style.transform = "scale(0.95) translateY(-2px)";
            setTimeout(() => {
              this.style.transform = "translateY(-2px)";
            }, 150);
          });
        });

      // Initialize dot matrix on load
      document.addEventListener("DOMContentLoaded", function () {
        createDotMatrix();
      });