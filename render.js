window.addEventListener('DOMContentLoaded', async () => {
    document.getElementById('toggle-dark-mode').innerHTML = 'Click To Change'
})

document.getElementById('toggle-dark-mode').addEventListener('click', async () => {
    const isDark = await window.darkMode.toggle()
    document.getElementById('theme-source').innerHTML = isDark ? 'Dark' : "Light"
    document.getElementById('toggle-dark-mode').innerHTML = isDark ? 'Turn To Light' : "Turn To Dark"

})