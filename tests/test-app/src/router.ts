import { initRouter } from './package'
import Home from './views/Home.svelte'
import Profile from './views/Profile.svelte'
import ProfileWelcome from './views/ProfileWelcome.svelte'
import ProfileBio from './views/ProfileBio.svelte'
import Null from './views/Null.svelte'

initRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/profile/:id',
      component: Profile,
      children: [
        {
          path: '/welcome',
          component: ProfileWelcome
        },
        {
          path: '/bio',
          component: ProfileBio
        }
      ]
    },
    {
      path: '/welcome',
      redirect: '/profile/fake/welcome'
    },
    {
      path: '/*',
      component: Null
    }
  ]
})
