/**
 * Renderer is just a `<canvas />`.
 * @type {HTMLCanvasElement}
 */
const renderer = document.getElementById('renderer');

const context = renderer.getContext('2d');

context.fillText('Katon, carai!', renderer.width / 2, renderer.height / 2);
