window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#000';
    } else {
        nav.style.background = '#1a1a1a';
    }
});

// १. मोबाईल मेनू उघडण्यासाठी
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.onclick = function() {
    navLinks.classList.toggle('active');
};

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.onclick = () => {
        navLinks.classList.remove('active');
    };
});

// २. डार्क मोडसाठी
const themeBtn = document.getElementById('theme-toggle');

themeBtn.onclick = function() {
    document.body.classList.toggle('dark-theme');
    
    // आयकॉन बदलण्यासाठी (चंद्र/सूर्य)
    const icon = themeBtn.querySelector('i');
    if(document.body.classList.contains('dark-theme')){
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
};