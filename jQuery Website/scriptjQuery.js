document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll(".nav-link");

    function showPage(pageId) {
        pages.forEach(page => {
            page.classList.remove("active");
            if (page.id === pageId) {
                page.classList.add("active");
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("data-page") === pageId);
        });
    }

    function handleHashChange() {
        const hash = window.location.hash.substring(1) || "home";
        showPage(hash);
    }

    // Lyssna på hash-ändringar och uppdatera sidan
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Kör en gång vid sidladdning
});

///////------- jQuery Lösning --------\\\\\\\

$(document).ready(function () {
    $('.product-card').hover(
      function () {
        // Mus över: förstora kortet
        $(this).css('transform', 'scale(1.15)');
      });
    });