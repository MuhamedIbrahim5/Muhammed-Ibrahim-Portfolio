document.addEventListener('DOMContentLoaded', function() {
    // وظيفة لإضافة تأثير "fade-in" عند التحميل على عناصر الخبرة
    const elements = document.querySelectorAll('.experience-item, .text-column');

    elements.forEach((el, index) => {
        // تأخير ظهور كل عنصر بشكل متتابع لإضافة تأثير جميل
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 300 + index * 200); // 300ms تأخير أساسي، و 200ms بين كل عنصر
    });
});