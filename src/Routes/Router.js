import { createBrowserRouter} from 'react-router-dom';
import AddService from '../pages/AddService/AddService';
import Blog from '../pages/Blog/Blog';
import Login from '../pages/Login/Login';
import MyReviews from '../pages/MyReviews/MyReviews';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/Shared/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Root from '../Root/Root';
import PrivateRoute from './PrivateRoute';
import Services from '../pages/Services/Services';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';


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
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/addservice',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/service/:id',
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`),
                element: <ServiceDetails />
            },
        ]
    }
])