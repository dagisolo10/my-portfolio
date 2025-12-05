const serviceBoxs = document.querySelectorAll('.services-box')
const serviceBorder = document.querySelector('.service-border')


serviceBoxs.forEach(box => {
    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect()

        box.style.setProperty('--x', `${e.clientX - rect.left}px`)
        box.style.setProperty('--y', `${e.clientY - rect.top}px`)
    })
})

serviceBorder.addEventListener('mousemove', (e) => {
        const rect = serviceBorder.getBoundingClientRect()

        serviceBorder.style.setProperty('--x', `${e.clientX - rect.left}px`)
        serviceBorder.style.setProperty('--y', `${e.clientY - rect.top}px`)
    })