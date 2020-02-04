import { Size } from './size';

/**
 * Update canvas width and height.
 */
const updateCanvasSize = (canvas: HTMLCanvasElement, size: Size): void => {
  canvas.width = size.width;
  canvas.height = size.height;
};

export { updateCanvasSize };
