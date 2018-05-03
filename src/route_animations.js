import { TweenLite, TweenMax } from 'gsap'

const handleComplete = target => TweenLite.set(target, {
  clearProps: 'position, width, transform',
})

export const handleEnterAnimation = (node) => {
  if (!node) return

  // Cancel existing animations
  TweenMax.killTweensOf(node)
  const { parentNode } = node
  const targetWidth = parentNode.clientWidth -
      (parseFloat(getComputedStyle(parentNode).paddingLeft) * 2)

  // Set element position
  TweenLite.set(node, {
    position: 'fixed',
    scale: 0,
    x: 0,
    y: 100,
    autoAlpha: 0,
    width: targetWidth,
  })

  // Animate element
  TweenLite.to(node, 0.5, {
    force3D: true,
    scale: 1,
    autoAlpha: 1,
    x: 0,
    y: 0,
    onComplete: handleComplete,
    onCompleteParams: [node],
  })
}

export const handleExitAnimation = (node) => {
  if (!node) return

  // Cancel existing animations
  TweenMax.killTweensOf(node)
  const { parentNode } = node
  const targetWidth = parentNode.clientWidth -
    (parseFloat(getComputedStyle(parentNode).paddingLeft) * 2)

  // Set element position
  TweenLite.set(node, {
    position: 'fixed',
    x: 0,
    width: targetWidth,
  })

  // Animate element
  TweenLite.to(node, 0.5, {
    force3D: true,
    scale: 0,
    position: 'fixed',
    opacity: 0,
    x: -100,
    y: -100,
    onComplete: () => null,
  })
}
