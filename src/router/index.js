//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home.vue')
const Dynamic = () => import('views/dynamic/Dynamic.vue')
const Send = () => import('views/send/Send.vue')
const Message = () => import('views/message/Message.vue')
const Profile = () => import('views/profile/Profile.vue')
const RecommendFeature = () => import('components/common/recommendSlot/RecommendFeature')
const Introduction = () => import('views/home/childComps/navItem/Introduction')
const Doujin = () => import('views/home/childComps/navItem/Doujin')
const Collect = () => import('views/profile/childComps/Collect')
const History = () => import('views/profile/childComps/History')
const Contact = () => import('views/profile/childComps/Contact')
const Setting = () => import('views/profile/childComps/Setting')

// 1.安装插件
Vue.use(Router)
// 2.创建路由实例
const routes = [
  // 路由重定向，默认首页
  { path: '', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/dynamic', component: Dynamic },
  { path: '/send', component: Send },
  { path: '/message', component: Message },
  { path: '/feature/:id', component: RecommendFeature },
  { path: '/introduction', component: Introduction },
  { path: '/doujin', component: Doujin },
  { path: '/profile', component: Profile },
  // menuList
  { path: '/collect', component: Collect },
  { path: '/history', component: History },
  { path: '/contact', component: Contact },
  { path: '/setting', component: Setting }
]

const router = new Router({
  routes,
  mode: 'history'
})
// 3.导出
export default router