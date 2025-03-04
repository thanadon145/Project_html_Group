document.addEventListener("DOMContentLoaded", function() {
    function createShootingStar() {
        const star = document.createElement("div");
        star.classList.add("shooting-star");
        document.body.appendChild(star);

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight / 2;
        const duration = Math.random() * 2 + 1.5;

        star.style.left = `${startX}px`;
        star.style.top = `${startY}px`;
        star.style.animationDuration = `${duration}s`;

        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }

    setInterval(createShootingStar, 1000);
});
