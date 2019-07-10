import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import TimeLine from './components/TimeLine/TimeLine'
import PremierLeague from './components/PremierLeague/PremierLeague'
import ChineseSuperLeague from './components/ChineseSuperLeague/ChineseSuperLeague'
import News from './components/News/News'
import Report from './components/Report/Report'

export const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/timeline', component: TimeLine},
  {path: '/ChineseSuperLeague', component: ChineseSuperLeague},
  {path: '/premierLeague', component: PremierLeague},
  {path: '/news', component: News},
  {path: '/report', component: Report}
]
