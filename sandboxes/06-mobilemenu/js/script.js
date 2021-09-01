document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('hamburger').addEventListener('click', hamburgerToggle);

    document.getElementById('close-button').addEventListener('click', hamburgerToggle);

    function hamburgerToggle(event) {
        nav = document.getElementById('nav');
        if (nav.classList.contains("nav-up")) {
            navOpen(nav);
        } else {
            navClose(nav);
        }
    }

    function navOpen(element) {
        element.style.top = 0;
        // element.style.display = "block";
        element.classList.replace("nav-up", "nav-down");
    }

    function navClose(element) {
        element.classList.replace("nav-down", "nav-up");
        setTimeout(function() {
            element.style.top = "-100%";
            // element.style.display = "none";
        }, 500); // timed to match nav transition duration;

    }

});