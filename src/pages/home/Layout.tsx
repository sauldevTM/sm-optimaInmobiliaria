import { ReactNode } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="relative dark:bg-gray-900 dark:text-white">
      <Sidebar />
      <Navbar />
      <div className="md:container md:mx-auto h-children-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

export default Layout;
