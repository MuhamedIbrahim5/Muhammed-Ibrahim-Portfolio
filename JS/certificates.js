let currentZoom = 1;
let isDragging = false;
let startX, startY;
let translateX = 0, translateY = 0;
let currentTranslateX = 0, currentTranslateY = 0;

// Open Certificate Modal
function openCertificateModal(imageSrc) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    currentTranslateX = 0;
    currentTranslateY = 0;
    modalImg.style.transform = `translate(0px, 0px) scale(${currentZoom})`;
    modalImg.classList.remove('zoomed', 'draggable');
    document.body.style.overflow = 'hidden';
}

// Close Certificate Modal
function closeCertificateModal() {
    document.getElementById('certificateModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    currentTranslateX = 0;
    currentTranslateY = 0;
}

// Toggle Zoom (click on image)
function toggleZoom() {
    const modalImg = document.getElementById('modalImage');
    if (currentZoom === 1) {
        currentZoom = 1.8;
        modalImg.classList.add('zoomed', 'draggable');
    } else {
        currentZoom = 1;
        translateX = 0;
        translateY = 0;
        currentTranslateX = 0;
        currentTranslateY = 0;
        modalImg.classList.remove('zoomed', 'draggable');
    }
    updateTransform();
}

// Zoom In
function zoomIn() {
    const modalImg = document.getElementById('modalImage');
    currentZoom += 0.3;
    if (currentZoom > 3) currentZoom = 3;
    if (currentZoom > 1) {
        modalImg.classList.add('draggable');
    }
    updateTransform();
}

// Zoom Out
function zoomOut() {
    const modalImg = document.getElementById('modalImage');
    currentZoom -= 0.3;
    if (currentZoom < 0.5) currentZoom = 0.5;
    if (currentZoom <= 1) {
        currentZoom = 1;
        translateX = 0;
        translateY = 0;
        currentTranslateX = 0;
        currentTranslateY = 0;
        modalImg.classList.remove('zoomed', 'draggable');
    }
    updateTransform();
}

// Reset Zoom
function resetZoom() {
    const modalImg = document.getElementById('modalImage');
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    currentTranslateX = 0;
    currentTranslateY = 0;
    modalImg.classList.remove('zoomed', 'draggable');
    updateTransform();
}

// Update Transform
function updateTransform() {
    const modalImg = document.getElementById('modalImage');
    modalImg.style.transform = `translate(${currentTranslateX}px, ${currentTranslateY}px) scale(${currentZoom})`;
}

// Initialize drag functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const modalImg = document.getElementById('modalImage');

    // Mouse events
    modalImg.addEventListener('mousedown', function(e) {
        if (currentZoom > 1) {
            isDragging = true;
            startX = e.clientX - currentTranslateX;
            startY = e.clientY - currentTranslateY;
            e.preventDefault();
        }
    });

    document.addEventListener('mousemove', function(e) {
        if (isDragging && currentZoom > 1) {
            translateX = e.clientX - startX;
            translateY = e.clientY - startY;
            modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
        }
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            currentTranslateX = translateX;
            currentTranslateY = translateY;
        }
    });

    // Touch events for mobile
    modalImg.addEventListener('touchstart', function(e) {
        if (currentZoom > 1) {
            isDragging = true;
            const touch = e.touches[0];
            startX = touch.clientX - currentTranslateX;
            startY = touch.clientY - currentTranslateY;
            e.preventDefault();
        }
    });

    document.addEventListener('touchmove', function(e) {
        if (isDragging && currentZoom > 1) {
            const touch = e.touches[0];
            translateX = touch.clientX - startX;
            translateY = touch.clientY - startY;
            modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
        }
    });

    document.addEventListener('touchend', function() {
        if (isDragging) {
            isDragging = false;
            currentTranslateX = translateX;
            currentTranslateY = translateY;
        }
    });

    // Close modal when clicking outside the image
    document.getElementById('certificateModal').addEventListener('click', function (event) {
        if (event.target === this) {
            closeCertificateModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeCertificateModal();
        }
    });
});
