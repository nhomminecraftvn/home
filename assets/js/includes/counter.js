export default function counter() {
    var nhomminecraftvn_first = 1000;
    var nhomminecraftvn_second = 111;
    var nhomminecraftvn_third = 12;

    function countTo() {
        let from = 0
        let to = nhomminecraftvn_first + nhomminecraftvn_second + nhomminecraftvn_third;
        let step = to > from ? 1 : -1;
        let interval = step;

        if (from == to) {
            document.querySelector(".ctr").textContent = from;
            return;
        }

        let counter = setInterval(function () {
            from += step;
            document.querySelector(".ctr").textContent = from;

            if (from == to) {
                clearInterval(counter);
            }
        }, interval);
    }
    countTo();
}

counter();