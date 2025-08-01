export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      opacity: 0,

      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const fadItemVarian = {
  hidden: { opacity: 0, y: -30 },

  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: { delay: index * 0.1, duration: 0.3 }
  })
}
