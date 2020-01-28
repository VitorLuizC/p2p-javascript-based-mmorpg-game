/**
 * Creates an object to provide `start` and `stop` methods to animations.
 * @param {function(number):void} animate
 */
const createAnimation = animate => {
  /**
   * @type {null|number}
   */
  let id = null;

  /**
   * @param {number} time
   */
  const callback = time => {
    if (id !== null) {
      id = requestAnimationFrame(callback);
      animate(time);
    }
  };

  return {
    /**
     * Starts the animation.
     */
    start: () => {
      if (id === null) {
        id = requestAnimationFrame(callback);
        animate(Date.now());
      }
    },

    /**
     * Stops the animation.
     */
    stop: () => {
      if (id !== null) {
        cancelAnimationFrame(id);
        id = null;
      }
    }
  };
};

export default createAnimation;
