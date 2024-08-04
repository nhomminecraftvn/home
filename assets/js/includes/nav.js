export default function navbar() {
    const nav = document.querySelector('nav');
    window.addEventListener("scroll", function () {
        if (document.documentElement.scrollTop > 190) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });
}

navbar();