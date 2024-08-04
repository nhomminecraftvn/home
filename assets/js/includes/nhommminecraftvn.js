/*
*   NhomMinecraftVN, Since 2020 by Hoang Quan
*   https://www.facebook.com/profile.php?id=100081277845945&mibextid=ZbWKwl
*
*/ 

export default class NhomMinecraftVN {
    footerYear() {
        var footerYear = document.getElementById("footer-year");var date = new Date();footerYear.innerHTML = date.getFullYear();
    }

    visitCounter() {
        var count = document.querySelector("#visit-count");visitCount();
        async function visitCount() {let visits;if (!localStorage.getItem("visits"))localStorage.setItem("visits",0);else{visits=+localStorage.getItem("visits");
        const visitMain=visits=0;
        localStorage.setItem("visits",visitMain);}count.innerText = localStorage.getItem("visits");};
    }
}