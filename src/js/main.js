import MainSlider from './modules/slider/sliderMain';
import VideoPlayer from './modules/playVideo';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const slider = new MainSlider({btns: '.next', page: '.page'}),
        player = new VideoPlayer('.showup .play', '.overlay');
        
    slider.render();
    player.init();
});