/**
 * An object with width and height.
 * @typedef {Object} Size
 * @property {number} width
 * @property {number} height
 */

/**
 * Get window's size.
 * @returns {Size}
 */
export const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});
