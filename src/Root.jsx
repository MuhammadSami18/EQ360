import Navbar from './pages/index/Navbar'
import { Outlet } from 'react-router-dom'
import EQFooter from './components/footer/Footer'

const Root = () => {
  return (
    <>
     <Navbar/>
        <div><Outlet/></div>
     <EQFooter/> 
    </>
  )
}

export default Root
