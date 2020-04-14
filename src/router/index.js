import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/page/HomePage'
import TagPage from '@/components/page/TagPage'
import TagArticlePage from '@/components/page/TagArticlePage'
import PhotoPage from '@/components/page/PhotoPage'
import AboutPage from '@/components/page/AboutPage'
import ArticleInfo from '@/components/page/ArticleInfo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/TagPage',
      name: 'TagPage',
      component: TagPage
    },
    {
      path: '/TagArticlePage/:tagId',
      name: 'TagArticlePage',
      component: TagArticlePage
    },
    {
      path: '/PhotoPage',
      name: 'PhotoPage',
      component: PhotoPage
    },
    {
      path: '/AboutPage',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/ArticleInfo/:id',
      name: 'ArticleInfo',
      component: ArticleInfo
    }
  ],
  linkActiveClass: 'active'
})
