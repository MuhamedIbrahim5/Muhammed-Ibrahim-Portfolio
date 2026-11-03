// Engineering Journey JavaScript

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.feature-card, .resource-card, .gallery-item').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});

// Add parallax effect to hero image
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector('.hero-image-container');
  
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Add hover effect animation for feature icons
document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    const icon = this.querySelector('.feature-icon');
    if (icon) {
      icon.style.animation = 'pulse 0.5s ease';
    }
  });
  
  card.addEventListener('mouseleave', function() {
    const icon = this.querySelector('.feature-icon');
    if (icon) {
      icon.style.animation = '';
    }
  });
});

// Pulse animation for icons
const style = document.createElement('style');
style.textContent = `
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;
document.head.appendChild(style);

// Gallery lightbox functionality (simple version)
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', function() {
    // Create lightbox overlay
    const lightbox = document.createElement('div');
    lightbox.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      cursor: pointer;
    `;
    
    const lightboxImg = document.createElement('img');
    lightboxImg.src = this.src;
    lightboxImg.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      border-radius: 10px;
      box-shadow: 0 0 50px rgba(0, 255, 255, 0.5);
    `;
    
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);
    
    // Close lightbox on click
    lightbox.addEventListener('click', function() {
      document.body.removeChild(lightbox);
    });
  });
});

// Add active state to navigation when scrolling
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00ffff, #ff00ff);
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 1000;
  box-shadow: 0 5px 20px rgba(0, 255, 255, 0.3);
`;

document.body.appendChild(scrollBtn);

// Show/hide scroll button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollBtn.style.opacity = '1';
  } else {
    scrollBtn.style.opacity = '0';
  }
});

// Scroll to top on click
scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Hover effect for scroll button
scrollBtn.addEventListener('mouseenter', function() {
  this.style.transform = 'scale(1.1) translateY(-5px)';
});

scrollBtn.addEventListener('mouseleave', function() {
  this.style.transform = 'scale(1) translateY(0)';
});

// Gallery Modal Functions
function openGalleryModal(event) {
  event.preventDefault();
  document.getElementById('galleryModal').style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeGalleryModal() {
  document.getElementById('galleryModal').style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside the content
window.addEventListener('click', function(event) {
  const modal = document.getElementById('galleryModal');
  if (event.target === modal) {
    closeGalleryModal();
  }
});

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeGalleryModal();
    closeLightbox();
  }
});

// Image Lightbox Functions
function openImageLightbox(imageSrc) {
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  lightboxImage.src = imageSrc;
  lightbox.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the image
document.getElementById('imageLightbox')?.addEventListener('click', function(event) {
  if (event.target === this) {
    closeLightbox();
  }
});

console.log('Engineering Journey page loaded successfully! 🎓');
