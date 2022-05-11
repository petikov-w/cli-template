import {createRouter, createWebHistory} from "vue-router";

const routerHistory = createWebHistory();

import AboutPage from "@/pages/AboutPage";
import HomePage from "@/pages/HomePage";
import notFoundPage from "@/pages/NotFoundPage";

const routers = createRouter(
    {
        history: routerHistory,
        routes: [
            {
                path: "/",
                name: "home",
                component: HomePage,
            },
            {
                path: "/about",
                name: "about",
                component: AboutPage,
            },
            {
                path: "/:CatchAll(.*)",
                name: "404",
                component: notFoundPage,
            },
        ]
    }
)

export default routers;