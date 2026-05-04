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

    if (mobileMenu && mobileMenuButton) {
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
    }

    const cards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeBtn = document.getElementById('close-modal');
    const backToTopBtn = document.getElementById('back-to-top');

    if (modal && modalContent && closeBtn) {
        cards.forEach(card => {
            card.addEventListener('click', function () {
                modalContent.innerHTML = card.innerHTML;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Blocca lo scroll del sito
                if (backToTopBtn) backToTopBtn.classList.add('hidden'); // Nasconde il pulsante "Torna Su"
            });
        });

        closeBtn.addEventListener('click', function () {
            modal.classList.add('hidden');
            document.body.style.overflow = ''; // Sblocca lo scroll del sito
            if (backToTopBtn) backToTopBtn.classList.remove('hidden'); // Ripristina il pulsante "Torna Su"
        });

        // Chiudi il modal cliccando fuori dal contenuto
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
                document.body.style.overflow = ''; // Sblocca lo scroll del sito
                if (backToTopBtn) backToTopBtn.classList.remove('hidden');
            }
        });

        // Chiudi il modal con il tasto Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                modal.classList.add('hidden');
                document.body.style.overflow = ''; // Sblocca lo scroll del sito
                if (backToTopBtn) backToTopBtn.classList.remove('hidden');
            }
        });
    }

    // Gestione del tasto "Torna Su"
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
            }
        });
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});