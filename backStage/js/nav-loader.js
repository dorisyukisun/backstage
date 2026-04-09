async function loadNavigation() {
    try {
        const response = await fetch('./nav.html');
        const html = await response.text();
        const navPlaceholder = document.getElementById('nav-placeholder');
        if (navPlaceholder) {
            navPlaceholder.innerHTML = html;
            
            // Handle active state
            const currentPath = window.location.pathname.split('/').pop();
            const links = document.querySelectorAll('.templatemo-left-nav a');
            links.forEach(link => {
                if (link.getAttribute('href') === './' + currentPath || 
                    (currentPath === '' && link.getAttribute('href') === './index.html')) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    } catch (error) {
        console.error('Error loading navigation:', error);
    }
}
window.addEventListener('DOMContentLoaded', loadNavigation);
