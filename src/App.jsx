
import { Route, Routes } from 'react-router-dom';
import AppHeader from './components/AppHeader'
import ThemeProvider from './Contexts/ThemeContext'
import Home from './components/Home';
import Options from './components/Options';
import TaskProvider from './Contexts/TaskContext';


const App = () => {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className=" bg-slate-100  dark:bg-slate-800  dark:text-white h-screen overflow-hidden">
          <div className="container  mx-auto border-x-2  dark:border-slate-700 h-full">
            <AppHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="options" element={<Options />} />
            </Routes>
          </div>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App