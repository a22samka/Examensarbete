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
        $('.product-card, .product-card h2, .product-card p, .product-card .price, .product-card button').css('transition', 'transform 0.3s ease');
        $(this).css('transform', 'scale(1.15)');

        $('.product-card').not(this).css('transform', 'scale(0.97)');

        $(this).find(' p, button').css('transform', 'scale(1.1)');
    },
    function () {
      // Mus lämnar: återställ allt
      $('.product-card').css('transform', 'scale(1)');
      $('.product-card').find('p, button').css('transform', 'scale(1)');
    }
  );
});
    