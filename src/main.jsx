import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Index/Home.jsx'
import SignUp from './SignUp/SignUp.jsx'
import SignIn from './SignIn/SignIn.jsx'
import Help from './Help/Help.jsx'
import Error from './components/404.jsx'
import Packages from './Packages/Packages.jsx'
import UserDetail from './Form/UserDetail.jsx'
import CheckOut from './Checkout/CheckOut.jsx'
import Dashboard from './Dashboard/Dashboard.jsx'

// const [packData,setPackData] = useState([])
const CLick = (item) => {
  alert('Thanks')
}
const router=createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/signin',
        element:<SignIn/>
      },
      {
        path:'/help',
        element:<Help/>
      },
      {
        path:'/packages/:title/:id',
        element:<Packages/>
      },
      {
        path:'/checkout/:type/:title/:id',
        element:<CheckOut/>
      },
      {
        path:'/userdetails',
        element:<UserDetail/>
      },
      {
        path:'*',
        element:<Error/>
      }
    ],
  },
  {
    path:'/dashboard',
    element:<Dashboard/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>,
)