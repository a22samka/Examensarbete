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

///------------------Anime.js lösning--------------------\\\
console.log("Laddat");
// Hämta alla produktkort

const productCards = document.querySelectorAll('.product-card');

// Loopar igenom varje kort och lägger till hover-animation
productCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    anime({
      targets: card,
      scale: 1.05,
      duration: 300,
      easing: 'easeInOutQuad'
    });
  });
});
