const banner = document.querySelector('.banner')
console.log(banner)

window.onload = fixBackground = () => {
    if (navigator.appVersion.indexOf("Mac") != -1) {
        banner.classList.add('mac')
    } else {
        banner.classList.add('winzort')
    }
}
