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


document.querySelector('.member-card').addEventListener('mouseover', function() {
    this.querySelector('.member-image').src = '2.png';
});

document.querySelector('.member-card').addEventListener('mouseout', function() {
    this.querySelector('.member-image').src = '1.png';
});

function showInfo(cardNumber) {
    const cards = document.querySelectorAll('.member-card');
    cards.forEach((card, index) => {
        if (index + 1 === cardNumber) {
            card.style.width = '60%';
            card.style.opacity = '1';
            card.querySelector('.member-info').style.display = 'block';
        } else {
            card.style.width = '20%';
            card.style.opacity = '0.5';
            card.querySelector('.member-info').style.display = 'none';
        }
    });
}