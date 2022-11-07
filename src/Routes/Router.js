import { createBrowserRouter} from 'react-router-dom';
import ErrorPage from '../pages/Shared/ErrorPage/ErrorPage';
import Home from '../pages/Shared/Home/Home';
import Root from '../Root/Root';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
        ]
    }
])