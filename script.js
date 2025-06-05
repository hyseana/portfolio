document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a');
    // Funzione per chiudere il menu
    function closeMobileMenu() {
        mobileMenu.classList.add('hidden');
    }
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    // Aggiungi un event listener a ciascun link del menu
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    const cards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close-modal');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            modalContent.innerHTML = card.innerHTML;
            modal.classList.remove('hidden');
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.classList.add('hidden');
    });

    // Chiudi il modal cliccando fuori dal contenuto
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});