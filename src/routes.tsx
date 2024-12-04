import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./components/Error";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" >
        <Route index element={<Home />} errorElement={<Error />} />
    </Route>
)
);


function Router() {
    return <RouterProvider router={router} />
}

export default Router;