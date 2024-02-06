import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './pages/index/Home.jsx'
import SignUp from './pages/signup/SignUp.jsx'
import SignIn from './pages/signin/SignIn.jsx'
import CheckOut from './pages/checkout/CheckOut.jsx'
import Packages from './pages/packages/Packages.jsx'
import Error from './pages/404/404.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'
import Help from './pages/help/Help.jsx'
import UserDetail from './components/form/UserDetail.jsx'

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
        element:<Help />
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