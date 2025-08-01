import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import MovieDetail from "../pages/MovieDetail.vue";

const history = createWebHistory();

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/movie/:id",
    component: MovieDetail,
  },
];

export default createRouter({
  history,
  routes,
});
