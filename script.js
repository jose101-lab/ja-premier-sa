/**
 * MAIN SITE JAVASCRIPT
 * Handles: Mobile Navigation, Contact Form, and Smooth Scrolling
 */

// 1. SELECT ELEMENTS
<script>
    const menuToggle = document.getElementById('menuToggle');
    // Change getElementById to querySelector to find the class '.nav-menu'
    const navMenu = document.querySelector('.nav-menu'); 

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
</script>

    // Close menu if user clicks anywhere outside the nav area
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// 3. RESPONSIVE RESET 
// Ensures the menu doesn't stay hidden if you resize the window from mobile to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
        navMenu.style.display = ''; // Resets inline styles to let CSS take over
    }
});

// 4. CONTACT FORM SUBMISSION
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = this.querySelector('#name')?.value;
        const email = this.querySelector('#email')?.value;
        const subject = this.querySelector('#subject')?.value;
        const message = this.querySelector('#message')?.value;
        
        if (name && email && subject && message) {
            alert('Thank you for your message! We will contact you shortly.');
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// 5. SMOOTH SCROLLING FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});
