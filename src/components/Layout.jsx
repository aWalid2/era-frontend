import { Outlet } from "react-router-dom";
import Sidebar from "./Siderbar";

const Layout = () => {
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="bg-primary/10 h-screen flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
