// eslint-disable-next-line no-multi-assign
const requestAnimationFrame = global.requestAnimationFrame =
  callback => setTimeout(callback, 0)

export default requestAnimationFrame
