const 	gallery = document.querySelector('.gallery'),
 		overlay = document.querySelector('.overlay'),
 		overlayImage = document.querySelector('img'),
 		overlayClose = document.querySelector('.close'),
 		
 		digits = Array.from({
 				length: 40,
 			}, () => [randomNumber(4), randomNumber(8)].concat(Array(15).fill([1,1]))),
 		html = digits.map(generateHTML).join('');

function generateHTML([h, v]) {
	return `
		<div class="item h${h} v${v}">
			<img src="images/${randomNumber(12)}.jpg">
			<div class="item__overlay">
				<button>View -></button>
			</div>
		</div>
	`;
};

function randomNumber(limit) {
	return Math.floor(Math.random() * limit) + 1;
};

function handleClick(e) {
	const src = e.currentTarget.querySelector('img').src;
	overlayImage.src = src;
	overlay.classList.add('open');
};

function close() {
	overlay.classList.remove('open');
};

gallery.innerHTML = html;
const items = document.querySelectorAll('.item');
items.forEach(item => item.addEventListener('click', handleClick));
overlayClose.addEventListener('click', close);

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        overlay.classList.remove('open');
    }
};