import { lazy } from "react";

const Landing = lazy(() => import("../views/landing/landing"));
const Dashboard = lazy(() => import("../views/dashboard/dashboard"));

const NotFoundPage = () => {
    return <h1>Page not found</h1>;
};

export const routes = [
    {
        path:"/",
        component:Landing
    },
    {
        path:"/dashboard",
        component:Dashboard
    },
    {
        path:"*",
        component: NotFoundPage
    }
]