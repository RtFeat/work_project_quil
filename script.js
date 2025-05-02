document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('burger-checkbox');
    const menuItems = document.querySelectorAll('.close-menu');
    const body = document.body;
    const applyButtons = document.querySelectorAll('.apply-button');

    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const redirectUrl = this.getAttribute('data-redirect');

            if (redirectUrl) {
                window.location.href = redirectUrl;
            }
        });
    });

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            checkbox.checked = false;
            body.classList.remove('menu-open');
        });
    });

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    });

    if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                if(this.classList.contains('close-menu')) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetElement = document.querySelector(targetId);

                    checkbox.checked = false;
                    body.classList.remove('menu-open');

                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                }
            });
        });
    }

    const intro = document.querySelector('.intro');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            intro.classList.remove('header--hidden');
            return;
        }

        if (currentScroll > lastScroll && !intro.classList.contains('header--hidden')) {
            intro.classList.add('header--hidden');
        } else if (currentScroll < lastScroll && intro.classList.contains('header--hidden')) {
            intro.classList.remove('header--hidden');
        }

        lastScroll = currentScroll;
    });
});