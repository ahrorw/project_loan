export default class Slider {
	constructor({
		container = null, 
		btns = null, 
		prev = null, 
		next = null,
		activeClass = '',
		animate,
		autoplay } = {}) {
		this.container = document.querySelector(container);
		try {this.slides = this.container.children;} catch(e){}
		this.btns = document.querySelectorAll(btns);
		this.prev = document.querySelectorAll(prev);
		this.next = document.querySelectorAll(next);
		this.activeClass = activeClass;
		this.animate = animate;
		this.autoplay = autoplay;
		this.slideIndex = 1;
	}
}