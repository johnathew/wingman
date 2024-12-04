interface ToggleProps {
    toggle: () => void;
    isToggled: boolean
}

const Toggle: React.FC<ToggleProps> = ({ toggle, isToggled }) => {

    const handleDarkMode = () => {
        toggle();
    }

    return (
        <div className="flex items-center space-x-3 p-2">
            <span className="text-gray-600 font-thin dark:text-slate-100">{isToggled ? 'Dark' : 'Light'} mode</span>
            <button
                onClick={handleDarkMode}
                className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isToggled ? 'bg-slate-500' : 'bg-gray-300'
                    }`}
            >
                <div
                    className={`h-4 w-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isToggled ? 'translate-x-4' : ''
                        }`}
                ></div>
            </button>
        </div>

    );
};

export default Toggle;
