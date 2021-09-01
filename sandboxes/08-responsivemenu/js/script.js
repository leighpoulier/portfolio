document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('hamburger').addEventListener('click', hamburgerToggle);
    document.getElementById('close-button').addEventListener('click', hamburgerToggle);
    document.getElementById('nav-menu-modal-overlay').addEventListener('click', hamburgerToggle);

    function hamburgerToggle(event) {
        nav = document.getElementById('nav-container');
        if (nav.classList.contains("nav-up")) {
            navOpen(nav);
        } else {
            navClose(nav);
        }
    }

    function navOpen(element) {
        // element.style.top = 0;
        // element.style.display = "block";
        element.classList.replace("nav-up", "nav-down");
        element.classList.replace("nav-transparent", "nav-opaque");
    }

    function navClose(element) {
        element.classList.replace("nav-opaque", "nav-transparent");
        setTimeout(function() {
            // element.style.top = "-100%";
            element.classList.replace("nav-down", "nav-up");
            // element.style.display = "none";
        }, 500); // timed to match nav transition duration;

    }

});