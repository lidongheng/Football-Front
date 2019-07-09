import Main from './components/Main/Main'
import Login from './components/Login/Login'
import Register from './components/Register/Register'

export const routes = [
  {path: '/', redirect: '/main'},
  {path: '/main', component: Main},
  {path: '/login', component: Login},
  {path: '/register', component: Register}
]
