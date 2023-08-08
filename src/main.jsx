import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorPage from './component/Shared/ErrorPage.jsx'
import Parenting from './component/Pages/Parenting.jsx'
import Review from './component/Pages/Review.jsx'
import Espanol from './component/Pages/Espanol.jsx'
import Login from './component/Pages/Login.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/Parenting',
        element: <Parenting />
      },
      {
        path: '/Write a Review',
        element: <Review />
      },
      {
        path: '/En Español',
        element: <Espanol />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
