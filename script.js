document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const searchInput = document.getElementById('search');
    const accordions = document.querySelectorAll('.accordion-toggle');
    const backToTopButton = document.getElementById('backToTop');
    const readButtons = document.querySelectorAll('.read-btn');
    const modal = document.getElementById('pdfModal');
    const modalContent = document.querySelector('.modal-content');
    const closeModal = document.querySelector('.close');
    const pdfViewer = document.getElementById('pdfViewer');

    // Smooth scrolling for navigation links
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60,
                behavior: 'smooth'
            });
        });
    });

    // Accordion functionality
    accordions.forEach(accordion => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
            const content = accordion.nextElementSibling;
            if (accordion.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = null;
            }
        });
    });

    // Search functionality
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const subjects = document.querySelectorAll('.semester .accordion');

        subjects.forEach(subject => {
            const text = subject.textContent.toLowerCase();
            if (text.includes(query)) {
                subject.style.display = '';
            } else {
                subject.style.display = 'none';
            }
        });
    });

    // Back to top functionality
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Read PDF functionality
    readButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pdfUrl = button.getAttribute('data-pdf');
            pdfViewer.src = pdfUrl;
            modal.style.display = 'block';
        });
    });

    // Close modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        pdfViewer.src = '';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            pdfViewer.src = '';
        }
    });
});
