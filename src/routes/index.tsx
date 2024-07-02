import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/layout/index.tsx';
import ErrorPage from '../ErrorPage.tsx';

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  errorElement: <ErrorPage />
}])

export default router
