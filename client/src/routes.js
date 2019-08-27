import Login from './components/Login/Login'
import Register from './components/Register/Register'
import TimeLine from './components/TimeLine/TimeLine'

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
import Bet from './components/Bet/Bet'
import AddBet from './components/Bet/AddBet'

import Intention from './components/Report/ReportDetail/Intention'
import Lineup from './components/Report/ReportDetail/Lineup'
import MediaVoice from './components/Report/ReportDetail/MediaVoice'
import Odds from './components/Report/ReportDetail/OddsAnalysis'
import Other from './components/Report/ReportDetail/Other'
import RecentMatch from './components/Report/ReportDetail/RecentMatch'
import Style from './components/Report/ReportDetail/Style'

import ChineseSuperLeague from './components/ChineseSuperLeague/ChineseSuperLeague'
import PremierLeague from './components/PremierLeague/PremierLeague'
import PIndex from './components/PremierLeague/PIndex'
import Laliga from './components/Laliga/Laliga'
import LIndex from './components/Laliga/LIndex'
import Bundesliga from './components/Bundesliga/Bundesliga'
import BIndex from './components/Bundesliga/BIndex'
import SerieA from './components/SerieA/SerieA'
import SIndex from './components/SerieA/SIndex'
import Ligue1 from './components/Ligue1/Ligue1'
import Lindex from './components/Ligue1/Lindex'
import Team from './components/common/Team'

export const routes = [
  {path: '/', redirect: '/premierLeague/index/'},
  {path: '/home', redirect: '/premierLeague/index/'},
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
  {path: '/Laliga',
    component: Laliga,
    redirect: '/Laliga/index/',
    children: [
      {path: '/Laliga/index/', component: LIndex},
      {path: '/Laliga/:team/', name: 'Team', component: Team}
    ]},
  {path: '/Bundesliga',
    component: Bundesliga,
    redirect: '/Bundesliga/index/',
    children: [
      {path: '/Bundesliga/index/', component: BIndex},
      {path: '/Bundesliga/:team/', name: 'Team', component: Team}
    ]},
  {path: '/SerieA',
    component: SerieA,
    redirect: '/SerieA/index/',
    children: [
      {path: '/SerieA/index/', component: SIndex},
      {path: '/SerieA/:team/', name: 'Team', component: Team}
    ]},
  {path: '/Ligue1',
    component: Ligue1,
    redirect: '/Ligue1/index/',
    children: [
      {path: '/Ligue1/index/', component: Lindex},
      {path: '/Ligue1/:team/', name: 'Team', component: Team}
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
