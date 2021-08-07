// ========================== TYPE.JS ==========================
// strings: [ 'Data Analyst.', 'Web Developer.', 'Mobile Developer.', 'RPA Developer.', 'UI/UX Designer.' ]
var typed = new Typed(".type", {
    strings: ["Software Engineer."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

// ========================== NAVIGATION BAR CUSTOM ==========================
document.getElementById("navbar").style.background = "white";

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 700) {
        document.getElementById("navbar").style.background = "white";
    } else {
        document.getElementById("navbar").style.background = "white";
    }
    console.log(scroll);
});

// Navbar sticky hidden when user scrolls up
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
};

// ========================== ANIMATE ON SCROLL ==========================
AOS.init({
    once: true,
});

// ========================== POINTER.JS CURSON ==========================
init_pointer({
    pointerColor: "#222",
    ringSize: 15,
    ringClickSize: 10,
});

// ========================== CUSTOM MUSIC PLAYER ==========================
// Bg Music
var isPlaying = false;

var audio = document.getElementById("myMusic");
// audio.volume = 0.03;
audio.volume = 0.1;

// audio.play();

function musicHandler() {
    var audio = document.getElementById("myMusic");

    if (isPlaying === false) {
        isPlaying = true;
        audio.play();

        var iconPause = document.getElementById("pause");
        var iconPlay = document.getElementById("play");
        iconPlay.style.visibility = "visible";

        iconPause.style.visibility = "hidden";
    } else if (isPlaying === true) {
        isPlaying = false;
        audio.pause();

        var iconPause = document.getElementById("pause");
        var iconPlay = document.getElementById("play");
        iconPlay.style.visibility = "hidden";

        iconPause.style.visibility = "visible";
    }
}

// ========================== Hamburger Menu Animation ==========================
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
});

// ========================== TOOL TIP ==========================
tippy("#nav-home-tab", {
    content: "Nanyang Polytechnic",
    animation: "scale",
    duration: 500,
});

tippy("#about-smu", {
    content: "Bachelor of Science Information Systems Major",
    animation: "scale",
    duration: 500,
});

tippy("#about-nyp", {
    content: "Diploma in Business Informatics",
    animation: "scale",
    duration: 500,
});

// tippy("#play", {
//     content:
//         "Currently Playing: \n The Power of Balance Rearranged  An Avatar Orchestrations",
//     animation: "scale",
//     duration: 500,
// });

tippy("#pause", {
    content: "Currently Playing: \n Hanezeve Caradhina A Made In Abyss",
    animation: "scale",
    duration: 500,
});
