 // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 50;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 8 + 's';
                particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Navigation background on scroll
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(0, 0, 0, 0.8)';
            } else {
                nav.style.background = 'rgba(0, 0, 0, 0.3)';
            }
        });

        // Add mouse movement parallax effect
        document.addEventListener('mousemove', function(e) {
            const shapes = document.querySelectorAll('.shape');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX - 0.5) * speed * 50;
                const y = (mouseY - 0.5) * speed * 50;
                shape.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Initialize particles when page loads
        window.addEventListener('load', createParticles);

        // Add typing animation to the main title
        const title = document.querySelector('.main-title');
        const text = title.textContent;
        title.textContent = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);

        // Add skill icon hover effects
        document.querySelectorAll('.skill-icon').forEach(icon => {
            icon.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.05)';
                this.style.transition = 'all 0.3s ease';
            });
            
            icon.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.transition = 'all 0.3s ease';
            });
                document.querySelector('.fab.fa-linkedin').addEventListener('click', function() {
        console.log("LinkedIn Icon Clicked!");
      });
        });
        