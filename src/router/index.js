import Vue from 'vue'
import VueRouter from 'vue-router';
import MainSection from '../components/MainSection';
import FeedDetail from '../components/FeedDetail';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainSection
  },
  {
    path: '/:id',
    component: FeedDetail,
    props: route => ({
        id: Number(route.params.id)
    })
  }
];


export const router = new VueRouter({
    routes
  });
  