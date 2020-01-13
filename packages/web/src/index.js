import { updateCanvasSize } from './canvas';
import { getWindowSize } from './size';

/**
 * Renderer is just a `<canvas />`.
 * @type {HTMLCanvasElement}
 */
const renderer = document.getElementById('renderer');

const context = renderer.getContext('2d');

updateCanvasSize(renderer, getWindowSize());

window.addEventListener('resize', () => {
  updateCanvasSize(renderer, getWindowSize());
});

context.fillText('Katon, carai!', renderer.width / 2, renderer.height / 2);
