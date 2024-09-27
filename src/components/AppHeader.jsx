import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../Contexts/ThemeContext";
import { NavLink } from "react-router-dom";

const AppHeader = () => {
  const { theme, toggleTheme } = useTheme();
  const logoLink =
    "https://th.bing.com/th/id/OIP.DwtwUF50gl3Ue_YXPHvi7AHaDL?rs=1&pid=ImgDetMain";
  return (
    <div className="flex justify-around items-center h-1/6 border-b-2  border-b-slate-800 dark:border-b-slate-200">
      <div className="logo">
        <img src={logoLink} alt="logo" className="w-full h-24" />
      </div>
      <div className="menu">
        <ul className="flex items-center gap-8">
          <li>
            {" "}
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/options"
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              {" "}
              Options
            </NavLink>{" "}
          </li>
        </ul>
      </div>
      <div className="theme text-3xl">
        <button
          className="px-4 py-2 border-2 dark:border-slate-500 dark:bg-slate-400 rounded-lg mx-2 my-4 bg-slate-500"
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default AppHeader;
