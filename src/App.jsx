/* eslint-disable no-unused-vars */
import { Element } from 'react-scroll';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import useLocalStorage from 'use-local-storage';
import Navbar from './components/Navbar';

function App() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    return (
        <div className="app bg-[#F6F0F0] min-h-screen" data-theme={theme}>
          <Navbar />    
          <main className=''>
            <Element name="home"><Home /></Element>
            <Element name="skills"><Skills /></Element>
            <Element name="experience"><Experience /></Element>
            <Element name="projects"><Projects /></Element>
            <Element name="contact"><Contact /></Element>
          </main>
          <footer className="text-center py-4 text-gray-600">
            © 2025 All rights reserved.
          </footer>
        </div>
    );
}

export default App;
