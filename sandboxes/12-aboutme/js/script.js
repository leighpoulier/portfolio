document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('hamburger').addEventListener('click', hamburgerToggle);
    document.getElementById('close-button').addEventListener('click', hamburgerToggle);
    document.getElementById('nav-menu-modal-overlay').addEventListener('click', hamburgerToggle);

    function hamburgerToggle(event) {
        nav = document.getElementById('nav-container');
        if (nav.classList.contains("nav-up")) {
            nav.classList.replace("nav-up", "nav-down");
            nav.classList.replace("nav-transparent", "nav-opaque");
        } else {
            nav.classList.replace("nav-opaque", "nav-transparent");
            setTimeout(function() {
                nav.classList.replace("nav-down", "nav-up");
            }, 500); // timed to match nav opacity transition duration;
        }


    }

});