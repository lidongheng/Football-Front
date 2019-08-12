import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import TimeLine from './components/TimeLine/TimeLine'
import PremierLeague from './components/PremierLeague/PremierLeague'
import ChineseSuperLeague from './components/ChineseSuperLeague/ChineseSuperLeague'
import Report from './components/Report/Report'
import Temp from './components/Temp/Temp'
import ReportDetail from './components/Report/ReportDetail/ReportDetail'
import FundamentalForm from './components/Report/addReport/FundamentalForm'
import AsiaOddForm from './components/Report/addReport/AsiaOddForm'
import EuroOddForm from './components/Report/addReport/EuroOddForm'
import EditReport from './components/Report/EditReport'
import Comment from './components/Comment/Comment'
import Article from './components/Article/Article'
import AddArticle from './components/Article/AddArticle'
import EditArticle from './components/Article/EditArticle'
import ArticleDetail from './components/Article/ArticleDetail'
import About from './components/About/About'
import Bet from './components/Bet/Bet'
import AddBet from './components/Bet/AddBet'

import Intention from './components/Report/ReportDetail/Intention'
import Lineup from './components/Report/ReportDetail/Lineup'
import MediaVoice from './components/Report/ReportDetail/MediaVoice'
import Odds from './components/Report/ReportDetail/OddsAnalysis'
import Other from './components/Report/ReportDetail/Other'
import RecentMatch from './components/Report/ReportDetail/RecentMatch'
import Style from './components/Report/ReportDetail/Style'

import PIndex from './components/PremierLeague/PIndex'
import Team from './common/Team'

export const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', name: 'homeLink', component: Home},
  {path: '/about', name: 'About', component: About},
  {path: '/login', name: 'loginLink', component: Login},
  {path: '/register', component: Register},
  {path: '/timeline', component: TimeLine},
  {path: '/ChineseSuperLeague', component: ChineseSuperLeague},
  {path: '/temp', component: Temp},
  {path: '/article', name: 'Article', component: Article},
  {path: '/article/add', name: 'addArticle', component: AddArticle},
  {path: '/article/edit/:id/', name: 'editArticle', component: EditArticle},
  {path: '/article/:id/', name: 'ArticleDetail', component: ArticleDetail},
  {path: '/comment/:pageNow/', component: Comment},
  {path: '/comment', component: Comment},
  {path: '/report/add/fundamental', name: 'fundamentalLink', component: FundamentalForm},
  {path: '/report/add/AsiaOdd/:id/', name: 'AsiaOddLink', component: AsiaOddForm},
  {path: '/report/add/EuroOdd/:id/', name: 'EuroOddLink', component: EuroOddForm},
  {path: '/report/:pageNow/', component: Report},
  {path: '/report', name: 'reportLink', component: Report},
  {path: '/report/edit/:id/', component: EditReport},
  {path: '/bet', name: 'bet', component: Bet},
  {path: '/bet/add', name: 'addBet', component: AddBet},
  {path: '/premierLeague',
    component: PremierLeague,
    redirect: '/premierLeague/index/',
    children: [
      {path: '/premierLeague/index/', component: PIndex},
      {path: '/premierLeague/:team/', name: 'Team', component: Team}
    ]},
  {path: '/reportDetail/:id/',
    name: 'reportDetailLink',
    component: ReportDetail,
    children: [
      {path: '/report/intention/:id/', component: Intention},
      {path: '/report/recentMatch/:id/', component: RecentMatch},
      {path: '/report/oddsAnalysis/:id/', component: Odds},
      {path: '/report/lineup/:id/', component: Lineup},
      {path: '/report/style/:id/', component: Style},
      {path: '/report/mediaVoice/:id/', component: MediaVoice},
      {path: '/report/other/:id/', component: Other}
    ]},
  {path: '*', redirect: '/'}
]
