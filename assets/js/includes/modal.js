export default function modal() {
    const btn_open = document.querySelector("#dialog");
    const btn_close = document.querySelector("#btn-close");
    const modal_container = document.querySelector("#modal-container");
    const modal_overlay = document.querySelector("#modal-overlay");

    btn_open.addEventListener('click' ,() => {
        modal_container.classList.add("modal-show")
    })

    btn_close.addEventListener('click' ,() => {
        modal_container.classList.remove("modal-show")
    })

    modal_container.addEventListener("click" ,(e) => {
        if (!modal_overlay.contains(e.target)) {
            btn_close.click();
        }
    });
}

modal();