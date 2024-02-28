import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CategoryView from '../views/category/category.vue';
import ToursView from '../views/tours/ToursView';
import ShowView from '../views/tours/Show';
import AboutView from '../views/about/about_us';
import ContactView from '../views/contact/contact';
import BlogView from '../views/blog/index';
import DetailsBlog from '../views/blog/blog-details';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/category',
    name: 'Category',
    component: CategoryView
  },
  {
    path: '/tours',
    name: 'Tours',
    component: ToursView
  },
  {
    path: '/show',
    name: 'Show',
    component: ShowView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/details_blog',
    name: 'DetailsBlog',
    component: DetailsBlog
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
