import { lazy } from "react";

const Landing = lazy(() => import("../views/landing/landing"));
const Products = lazy(() => import("../views/products/products"));

const NotFoundPage = () => {
    return <h1>Page not found</h1>;
};

export const routes = [
    {
        path:"/",
        component:Landing
    },
    {
        path:"/products",
        component:Products
    },
    {
        path:"/products/:action",
        component:Products
    },
    {
        path:"*",
        component: NotFoundPage
    }
]