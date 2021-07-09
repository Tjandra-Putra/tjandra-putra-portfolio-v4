// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
	.timeline({ loop: true })
	.add({
		targets: '.ml7 .letter',
		translateY: [ '1.1em', 0 ],
		translateX: [ '0.55em', 0 ],
		translateZ: 0,
		rotateZ: [ 180, 0 ],
		duration: 750,
		easing: 'easeOutExpo',
		delay: (el, i) => 50 * i
	})
	.add({
		targets: '.ml7',
		opacity: 0,
		duration: 1000,
		easing: 'easeOutExpo',
		delay: 1000
	});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
	.timeline({ loop: true })
	.add({
		targets: '.ml9 .letter',
		scale: [ 0, 1 ],
		duration: 1500,
		elasticity: 600,
		delay: (el, i) => 45 * (i + 1)
	})
	.add({
		targets: '.ml9',
		opacity: 0,
		duration: 1000,
		easing: 'easeOutExpo',
		delay: 1000
	});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
	.timeline({ loop: true })
	.add({
		targets: '.ml12 .letter',
		translateX: [ 40, 0 ],
		translateZ: 0,
		opacity: [ 0, 1 ],
		easing: 'easeOutExpo',
		duration: 1200,
		delay: (el, i) => 500 + 30 * i
	})
	.add({
		targets: '.ml12 .letter',
		translateX: [ 0, -30 ],
		opacity: [ 1, 0 ],
		easing: 'easeInExpo',
		duration: 1100,
		delay: (el, i) => 100 + 30 * i
	});

anime
	.timeline({ loop: true })
	.add({
		targets: '.ml15 .word',
		scale: [ 14, 1 ],
		opacity: [ 0, 1 ],
		easing: 'easeOutCirc',
		duration: 800,
		delay: (el, i) => 800 * i
	})
	.add({
		targets: '.ml15',
		opacity: 0,
		duration: 1000,
		easing: 'easeOutExpo',
		delay: 1000
	});
