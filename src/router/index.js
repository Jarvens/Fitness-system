import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Member from '@/views/member/Member.vue'
import Stadium from '@/views/stadium/Stadium.vue'
import StadiumAdd from '@/views/stadium/StadiumAdd.vue'
import Vip from '@/views/vip/Vip.vue'
import Login from '@/components/login/Login.vue'
import PrivateClass from '@/views/privateclass/PrivateClass.vue'
import GroupClass from '@/views/groupclass/GroupClass'
import Coach from '@/views/coach/Coach.vue'
import Activity from '@/views/activity/Activity.vue'
import News from '@/views/news/News.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {
        title: '首页'
      },
      component: Index,
      children: [{
        path: 'member',
        name: 'member',
        meta: {
          title: '会员'
        },
        component: Member
      }, {
        path: 'stadium',
        name: 'stadium',
        meta: {
          title: '场馆'
        },
        component: Stadium
      }, {
        path: 'stadiumAdd',
        name: 'stadiumAdd',
        meta: {
          title: '创建场馆'
        },
        component: StadiumAdd
      }, {
        path: 'vip',
        name: 'vip',
        meta: {
          title: '会员卡'
        },
        component: Vip
      }, {
        path: 'private-class',
        name: 'private-class',
        meta: {
          title: '私教'
        },
        component: PrivateClass
      }, {
        path: 'group-class',
        name: 'group-class',
        meta: {
          title: '团体'
        }, component: GroupClass
      }, {
        path: 'coach',
        name: 'coach',
        meta: {
          title: '教练'
        },
        component: Coach
      },{
        path:'activity',
        name:'activity',
        meta:{
          title:'活动'
        },
        component:Activity
      },{
        path:'news',
        name:'news',
        meta:{
          title:'发言'
        },
        component:News
      }]
    }, {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: Login
    }
  ]
})
