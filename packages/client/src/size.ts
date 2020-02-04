/**
 * An object with width and height.
 */
type Size = {
  width: number;
  height: number;
};

/**
 * Get window's size.
 */
const getWindowSize = (): Size => ({
  width: window.innerWidth,
  height: window.innerHeight
});

export { getWindowSize, Size };
