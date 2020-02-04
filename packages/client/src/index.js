import { updateCanvasSize } from './canvas';
import { getWindowSize } from './size';
import createAnimation from './createAnimation';

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

let state = {
  x: 0,
  y: 0
};

const animation = createAnimation(() => {
  context.clearRect(0, 0, renderer.width, renderer.height);

  state.x = state.x >= renderer.width ? 0 : state.x + 1;
  state.y = state.y >= renderer.height ? 0 : state.y + 1;

  context.fillText('Katon, carai!', state.x, state.y);
});

animation.start();
