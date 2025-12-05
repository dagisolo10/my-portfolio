var typed = new Typed(".multiple-text", {
    strings: ['Frontend Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
});

document.addEventListener('DOMContentLoaded', function () {
    applyStoredTheme();
});

const themeBtn = document.getElementById('themebtn');

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeBtn.style.rotate = isDark ? '0deg' : '-360deg';
}

function applyStoredTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }
}

// Resume tabs
const resumeBtns = document.querySelectorAll('.resume-btn');
resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-datail');
        resumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

// Navigation
const navLinks = document.querySelectorAll('header a.top-bar');
const sideLinks = document.querySelectorAll('header .side-bar a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const header = document.querySelector('header');
const barsBox = document.querySelector('.bars-box');
const sidebar = document.querySelector('header .side-bar');
const overlay = document.querySelector('.overlay');

const activePage = () => {
    navLinks.forEach(link => link.classList.remove('active'));
    sideLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    barsBox.classList.remove('active');
    header.classList.remove('active');

    setTimeout(() => barsBox.classList.add('active'), 1100);
};

// Main nav link clicks (top + sidebar)
navLinks.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // stop default anchor behavior
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            sideLinks[idx].classList.add('active');

            // update hash manually
            const targetId = sections[idx].id;
            history.replaceState(null, '', `#${targetId}`);

            setTimeout(() => {
                sections[idx].classList.add('active');
                header.classList.add('active');
            }, 1100);

            sidebar.style.translate = '0 -100%';
            overlay.style.display = 'none';
        }
    });
});

sideLinks.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // stop default anchor behavior
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            navLinks[idx].classList.add('active');

            const targetId = sections[idx].id;
            history.replaceState(null, '', `#${targetId}`);

            setTimeout(() => {
                sections[idx].classList.add('active');
                header.classList.add('active');
            }, 1100);

            sidebar.style.translate = '0 -100%';
            sidebar.classList.remove('open');
            overlay.style.display = 'none';
        }
    });
});

// Logo redirect — intentionally separate
logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (!sideLinks[0].classList.contains('active')) {
        activePage();
        sideLinks[0].classList.add('active');
        navLinks[0].classList.add('active');
        setTimeout(() => {
            sections[0].classList.add('active');
            header.classList.add('active');
        }, 1100);
        sidebar.style.translate = '0 -100%';
        overlay.style.display = 'none';
    }
});

// Sidebar controls
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuIcon.addEventListener('click', () => {
    sidebar.style.translate = '0 0%';
    sidebar.classList.add('open');
    overlay.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    sidebar.style.translate = '0 -100%';
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    sidebar.style.translate = '0 -100%';
    sidebar.classList.remove('open');
    overlay.style.display = 'none';
});


const cvButton = document.getElementById('download-cv');
cvButton.addEventListener('click', async () => {
    const cvUrl = 'assets/Dagmawi CV.pdf'; // path to your PDF
    const filename = 'Dagmawi_Solomon_Tilahun_CV.pdf';

    try {
        const response = await fetch(cvUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
    } catch (err) {
        console.error('Download failed', err);
        alert('Failed to download CV. Please try again.');
    }
});

const form = document.getElementById('contact-form')
const inputs = document.getElementById('inputs')
form.addEventListener('submit', () => {
    inputs.forEach(input => {
        input.value = ''
    })
})