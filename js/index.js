// Type.js
// strings: [ 'Data Analyst.', 'Web Developer.', 'Mobile Developer.', 'RPA Developer.', 'UI/UX Designer.' ]
var typed = new Typed('.type', {
	strings: [ 'Software Developer' ],
	typeSpeed: 60,
	backSpeed: 60,
	loop: true
});

if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
	document.getElementById('navbar').style.background = 'red';
	console.log(document.body.scrollHeight);
} else {
}

window.addEventListener('scroll', (event) => {
	let scroll = this.scrollY;
	if (scroll > 700) {
		document.getElementById('navbar').style.background = 'white';
	} else {
		document.getElementById('navbar').style.background = 'rgb(245, 245, 245)';
	}
	console.log(scroll);
});

AOS.init({
	once: true
});
