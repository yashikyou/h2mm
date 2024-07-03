import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/layout/index.tsx';
import ErrorPage from '../ErrorPage.tsx';
import mainScreen from './main-screen.tsx';
import courseList from './course-list.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [mainScreen, courseList],
  },
]);

export default router;
