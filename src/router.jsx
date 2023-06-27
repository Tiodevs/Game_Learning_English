import { NavLink, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home/Home'
import Documentos from './pages/Documentos/Documentos';
import ErrorPage from './error-page';
import Game from './pages/Games/Game';
import Conquistas from './pages/Conquistas/Conquistas';
import GameNamber from './pages/GameNumber';


export default function Router() {

    const Routes = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: "documentos",
            element: <Documentos/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "games",
            element: <Game/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "number",
            element: <GameNamber/>,
            errorElement: <ErrorPage />,
        },
        {
            path: "conquistas",
            element: <Conquistas/>,
            errorElement: <ErrorPage />,
        }
    ]);

    return (
        <>
            <RouterProvider router={Routes} />
        </>
    )
}