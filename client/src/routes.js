import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import TimeLine from './components/TimeLine/TimeLine'
import NewsItem from './common/NewsItem'

export const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/timeline', component: TimeLine},
  {path: '/newsItem', component: NewsItem}
]
