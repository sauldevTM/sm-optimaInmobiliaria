import { useContext } from "react";
import { Link } from "react-router-dom";
import { Sidebar as SidebarLayout, Menu, MenuItem } from "react-pro-sidebar";
import { AppContext } from "../context/AppProvider";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsPersonFillAdd } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { IoLogOut } from "react-icons/io5";

function Sidebar() {
  const { toggled, theme, handleToggleSidebar, handleAuth } =
    useContext(AppContext);
  return (
    <div className="fixed h-screen">
      <SidebarLayout
        className="h-screen"
        backgroundColor={`${theme === "dark" ? "#111827" : "#f9fafb"}`}
        onBackdropClick={() => handleToggleSidebar()}
        toggled={toggled}
        breakPoint="all"
      >
        <HeaderSidebar />
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#2563eb",
                color: "#b6c8d9",
              },
              "&:hover": {
                backgroundColor: "#2563eb",
              },
            },
          }}
        >
          <MenuItem
            component={<Link to="/register-client" />}
            suffix={<BsPersonFillAdd size={25} />}
          >
            Register Client
          </MenuItem>
          <MenuItem
            component={<Link to="/calendar" />}
            suffix={<AiFillCalendar size={25} />}
          >
            Calendar
          </MenuItem>
          <MenuItem
            component={<Link to="/setting" />}
            suffix={<AiFillSetting size={25} />}
          >
            Setting
          </MenuItem>
          <MenuItem
            onClick={() => handleAuth(false)}
            suffix={<IoLogOut size={25} />}
          >
            Logout
          </MenuItem>
        </Menu>
      </SidebarLayout>
    </div>
  );
}

function HeaderSidebar() {
  const { handleToggleSidebar } = useContext(AppContext);
  return (
    <div className="my-4 flex justify-center items-center space-x-6 text-2xl">
      <h3>Optima</h3>
      <span
        className="cursor-pointer mt-2"
        onClick={() => handleToggleSidebar()}
      >
        <AiFillCloseCircle size={25} />
      </span>
    </div>
  );
}

export default Sidebar;
