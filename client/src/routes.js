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

import Intention from './components/Report/ReportDetail/Intention'
import Lineup from './components/Report/ReportDetail/Lineup'
import MediaVoice from './components/Report/ReportDetail/MediaVoice'
import Odds from './components/Report/ReportDetail/OddsAnalysis'
import Other from './components/Report/ReportDetail/Other'
import RecentMatch from './components/Report/ReportDetail/RecentMatch'
import Style from './components/Report/ReportDetail/Style'

export const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', name: 'homeLink', component: Home},
  {path: '/login', component: Login},
  {path: '/register', component: Register},
  {path: '/timeline', component: TimeLine},
  {path: '/ChineseSuperLeague', component: ChineseSuperLeague},
  {path: '/premierLeague', component: PremierLeague},
  {path: '/temp', component: Temp},
  {path: '/report/add/fundamental', name: 'fundamentalLink', component: FundamentalForm},
  {path: '/report/add/AsiaOdd/:id/', name: 'AsiaOddLink', component: AsiaOddForm},
  {path: '/report/add/EuroOdd/:id/', name: 'EuroOddLink', component: EuroOddForm},
  {path: '/report', component: Report},
  {path: '/report/:id/',
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
    ]}
]
