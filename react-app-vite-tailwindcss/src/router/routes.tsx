import { lazy } from "react";

const Index = lazy(() => import('@/pages/index'));

export const routes = [
    {
        path: '/',
        element: Index,
        layout: 'default'
    }
];