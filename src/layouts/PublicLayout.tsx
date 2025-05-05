import { Outlet } from "react-router";
import PublicNavbar from '../components/navbars/PublicNavbar';

export default function PublicLayout() {
  return (
    <div>
      <PublicNavbar/>
      <Outlet />
    </div>
  );
}
