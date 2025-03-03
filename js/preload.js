document.addEventListener("DOMContentLoaded",function(){
    let preloader = document.createElement("div")
    preloader.id = "preloader";
    preloader.innerHTML = '<div class="loader></div>';
    document.body.prepend(preloader)

    window.onload = function(){
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").style.display = "block";
    };
});