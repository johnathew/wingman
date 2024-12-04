import { useEffect, useState } from "react";
import Toggle from "../../components/Toggle";
import Wingman from "../../components/Wingman";

function Home() {

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    const [isToggled, setIsToggled] = useState('theme' in localStorage ? localStorage.theme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
    }, []);


    const toggleTheme = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            setIsToggled(false);
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            setIsToggled(true);
            localStorage.setItem('theme', 'dark');
        }
    }

    return (
        <div className="dark:bg-slate-800">
            <header className="flex justify-between">
                <h1 className="p-2 text-xl dark:text-slate-100">Wingman Products</h1>
                <Toggle toggle={toggleTheme} isToggled={isToggled} ariaLabel='Toggle theme' />
            </header>
            <main className="p-2">
                <Wingman />
            </main>
        </div>
    )
}

export default Home;