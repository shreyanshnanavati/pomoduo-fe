import { Outlet } from 'react-router'
import AppNavbar from '../components/navbars/AppNavbar'

export default function MainLayout(){
  return (
    <div>
      <AppNavbar/>
      <Outlet />
    </div>
  )
}