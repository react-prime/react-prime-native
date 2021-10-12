import { useAnimationState } from 'moti';

export const useFadeAnimation = () => useAnimationState({
  from: {
    opacity: 0,
    translateY: -15,
  },
  to: {
    opacity: 1,
    translateY: 0,
  },
});

export const useScaleAnimation = () => useAnimationState({
  from: {
    opacity: 0,
    transform: [{
      translateY: -15,
      scale: 0.5,
    }],
  },
  open: {
    opacity: 1,
    transform: [{
      translateY: 0,
      scale: 1,
    }],
  },
  big: {
    opacity: 1,
    transform: [{
      translateY: 0,
      scale: 1.5,
    }],
  },
});
