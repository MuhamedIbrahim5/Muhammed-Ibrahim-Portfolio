document.addEventListener('DOMContentLoaded', function() {
    // تطبيق تأثير "fade-in" على مجموعات المهارات وعنوان القسم
    const elements = document.querySelectorAll('.skill-category-group, .text-column');

    elements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }, 300 + index * 200); 
    });
});