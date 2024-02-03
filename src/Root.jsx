import Navbar from './Index/Navbar'
import { Outlet } from 'react-router-dom'
import EQFooter from './Footer/Footer'

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
