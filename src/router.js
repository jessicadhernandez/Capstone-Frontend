import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Categories from "./views/Categories.vue";
import Goals from "./views/Goals.vue";
import Category from "./views/Category.vue";
import Goal from "./views/Goal.vue";
import CategoriesShow from "./views/CategoriesShow.vue";
import Vue2Filters from "vue2-filters";
import GoalsShow from "./views/GoalsShow.vue";
import Profile from "./views/Profile.vue";

Vue.use(Vue2Filters);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/Categories",
      name: "Categories",
      component: Categories
    },
    {
      path: "/Categories/:id",
      name: "Categories-show",
      component: CategoriesShow
    },
    {
      path: "/Goals",
      name: "Goals",
      component: Goals
    },
    {
      path: "/Goals/:id",
      name: "Goals-show",
      component: GoalsShow
    },
    {
      path: "/Category",
      name: "Category",
      component: Category
    },
    {
      path: "/Goal",
      name: "Goal",
      component: Goal
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
