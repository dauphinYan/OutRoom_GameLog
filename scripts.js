document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });

        if (window.innerWidth <= 768) {
            document.querySelector('.sidebar').style.transform = 'translateX(-100%)';
        }
    });
});

document.querySelector('.sidebar-toggle').addEventListener('click', function () {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.transform === 'translateX(0px)') {
        sidebar.style.transform = 'translateX(-100%)';
    } else {
        sidebar.style.transform = 'translateX(0px)';
    }
});
