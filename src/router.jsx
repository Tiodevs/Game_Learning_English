import { NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import ErrorPage from './error-page';


export default function Router() {

    const Routes = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "about",
            element: <About />,
            errorElement: <ErrorPage />,
        }
    ]);

    return (
        <>
            <RouterProvider router={Routes} />
        </>
    )
}