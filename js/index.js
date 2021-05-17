// Type.js
// strings: [ 'Data Analyst.', 'Web Developer.', 'Mobile Developer.', 'RPA Developer.', 'UI/UX Designer.' ]
var typed = new Typed('.type', {
	strings: [ 'Software Engineer.' ],
	typeSpeed: 50,
	backSpeed: 50,
	loop: true
});

if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
	// document.getElementById('navbar').style.background = 'red';
	console.log(document.body.scrollHeight);
} else {
}

window.addEventListener('scroll', (event) => {
	// document.getElementById('navbar').style.background = 'rgb(245, 245, 245)';
	let scroll = this.scrollY;
	if (scroll > 700) {
		document.getElementById('navbar').style.background = 'white';
	} else {
		// document.getElementById('navbar').style.background = 'rgb(245, 245, 245)';
		document.getElementById('navbar').style.background = 'white';
	}
	console.log(scroll);
});

AOS.init({
	once: true
});

// Bg Music

var audio = document.getElementById('myMusic');
// audio.volume = 0.03;
audio.volume = 0.1;

audio.play();

function musicHandler() {
	var audio = document.getElementById('myMusic');

	var iconPause = document.getElementById('pause');
	var iconPlay = document.getElementById('play');
	// iconPlay.style.visibility = 'hidden';

	// iconPause.style.visibility = 'visible';

	// audio.pause();
	audio.play();
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById('navbar').style.top = '0';
	} else {
		document.getElementById('navbar').style.top = '-100px';
	}
	prevScrollpos = currentScrollPos;
};
