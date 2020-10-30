import { initPathRouter } from '@bjornlu/svelte-router'
import Main from './Main.svelte'
import Overlay from './Overlay.svelte'

// Use `initHashRouter` for hash mode
initPathRouter([
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/overlay',
        component: Overlay,
      }
    ],
  },
]);
