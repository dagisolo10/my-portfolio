document.addEventListener('DOMContentLoaded', function () {
    applyStoredTheme()
})

const themeBtn = document.getElementById('themebtn')

function toggleTheme() {
    const isDark = document.body.classList.toggle('dark')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    isDark ? themeBtn.style.rotate = '0deg' : themeBtn.style.rotate = '-360deg'
}


function applyStoredTheme() {
    if(localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark')
    }
}