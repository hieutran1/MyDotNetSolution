import { createBrowserRouter } from "react-router";
import { routes } from "./routes";

const finalRoutes = routes.map((route) => {
    const Component = route.element;
    return {
        ...route,
        element: <Component />
    }
});

const router = createBrowserRouter(finalRoutes);
export default router;