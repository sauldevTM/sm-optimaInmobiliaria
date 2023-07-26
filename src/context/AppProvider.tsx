import { ReactNode, createContext, useEffect, useState } from "react";

interface AppContextProps {
  isAuth: boolean;
  toggled: boolean;
  theme: string;
  handleAuth: (value: boolean) => void;
  handleToggleSidebar: (value?: boolean) => void;
  handleThemeSwitch: () => void;
}

interface Props {
  children: ReactNode;
}

export const AppContext = createContext({} as AppContextProps);
const { Provider } = AppContext;

function AppProvider({ children }: Props) {
  const [isAuth, setIsAuth] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const handleAuth = (value: boolean) => setIsAuth(value);
  const handleToggleSidebar = (value = false) => setToggled(value);

  return (
    <Provider
      value={{
        isAuth,
        toggled,
        theme,
        handleAuth,
        handleToggleSidebar,
        handleThemeSwitch,
      }}
    >
      {children}
    </Provider>
  );
}

export default AppProvider;
