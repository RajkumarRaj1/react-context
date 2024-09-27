import { PropTypes } from 'prop-types';
import { createContext, useContext, useState } from "react";


const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }
    return (
        <ThemeContext.Provider value={{ theme,toggleTheme }}>
            <div className={theme}>
                {children}
                </div>
        </ThemeContext.Provider>
    )
}
ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export  const useTheme = () =>  useContext(ThemeContext)
export default ThemeProvider