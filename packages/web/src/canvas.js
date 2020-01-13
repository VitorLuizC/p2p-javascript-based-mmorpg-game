/**
 * Update canvas width and height.
 * @param {HTMLCanvasElement} canvas
 * @param {import('./size').Size} size
 */
export const updateCanvasSize = (canvas, size) => {
  canvas.width = size.width;
  canvas.height = size.height;
};
