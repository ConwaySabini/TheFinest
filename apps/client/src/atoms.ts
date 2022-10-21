import { atomWithStorage } from 'jotai/utils';

export const themeAtom = atomWithStorage('theme', 'dark');

// if (process.env.NODE_ENV !== 'production') {
//   themeAtom.debugLabel = 'theme';
//   // debugLabel is 'count' now
// }
