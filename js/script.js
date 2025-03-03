document.getElementById("goToPage").addEventListener("click", function() {
    window.location.href = "member.html";
});

const btn = document.querySelector('.btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', function() {
    menu.classList.toggle('active');
});