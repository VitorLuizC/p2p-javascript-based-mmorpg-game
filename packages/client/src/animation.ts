/**
 * Animation has `start` and `stop` functions to manage animations.
 */
type Animation = {
  start: () => void;
  stop: () => void;
};

/**
 * Creates an Animation object using animate (parameter) as animation function.
 */
const createAnimation = (animate: FrameRequestCallback): Animation => {
  let id: null | number = null;

  const callback = (time: number): void => {
    if (id !== null) {
      id = window.requestAnimationFrame(callback);
      animate(time);
    }
  };

  return {
    /**
     * Starts the animation.
     */
    start: (): void => {
      if (id === null) {
        id = window.requestAnimationFrame(callback);
        animate(Date.now());
      }
    },

    /**
     * Stops the animation.
     */
    stop: (): void => {
      if (id !== null) {
        window.cancelAnimationFrame(id);
        id = null;
      }
    }
  };
};

export { Animation, createAnimation };
