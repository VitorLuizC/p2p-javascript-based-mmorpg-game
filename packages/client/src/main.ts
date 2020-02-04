import { updateCanvasSize } from './canvas';
import { getWindowSize } from './size';
import { createAnimation } from './animation';

const renderer = document.getElementById('renderer');

if (!(renderer instanceof HTMLCanvasElement)) {
  throw new Error('Renderer is not a `<canvas />`.');
}

const context = renderer.getContext('2d');

if (!context) {
  throw new Error('Couldn\'t get a context from renderer.');
}

updateCanvasSize(renderer, getWindowSize());

window.addEventListener('resize', (): void => {
  updateCanvasSize(renderer, getWindowSize());
});

let state = {
  x: 0,
  y: 0
};

const animation = createAnimation((): void => {
  context.clearRect(0, 0, renderer.width, renderer.height);

  state.x = state.x >= renderer.width ? 0 : state.x + 1;
  state.y = state.y >= renderer.height ? 0 : state.y + 1;

  context.fillText('Katon, carai!', state.x, state.y);
});

animation.start();
