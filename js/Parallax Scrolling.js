document.addEventListener('DOMContentLoaded', () => {
    const tip = document.querySelector('.scroll-tip');

    window.addEventListener('scroll', () => {
        if (!tip) return;
        if (window.scrollY > window.innerHeight * 0.2) {
            tip.style.opacity = '0';
            tip.style.pointerEvents = 'none';
        } else {
            tip.style.opacity = '0.85';
            tip.style.pointerEvents = 'auto';
        }
    });

    // Reveal text on scroll
    function revealTextOnScroll() {
        const textBoxes = document.querySelectorAll('.text-box');
        const triggerBottom = window.innerHeight * 0.85;

        textBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) {
                box.classList.add('visible');
            } else {
                box.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', revealTextOnScroll);
    revealTextOnScroll();
});