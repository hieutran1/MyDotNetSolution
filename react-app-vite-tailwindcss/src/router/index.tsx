import { createBrowserRouter } from "react-router";
import { routes } from "./routes";

const finalRoutes = routes.map((route) => {
    return {
        ...route,
        element: <div>Hello World</div>
    }
});

const router = createBrowserRouter(finalRoutes);
export default router;