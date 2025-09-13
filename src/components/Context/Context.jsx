import { useMemo, useState } from "react";
import { AppContext } from "./AppContext";
import Sample from "./Sample";

export default function Context() {

    const [darkTheme, setDarkTheme] = useState("red");

    const contextValues = useMemo(() => {
        return {
            darkTheme,
            setDarkTheme
        }
    }, [darkTheme]);

    const toggleTheme = () => {
        setDarkTheme(prev => prev === 'red' ? 'blue' : 'red')
    };

    return (
        <>
            <button onClick={toggleTheme}>Toggle {darkTheme}</button>
            <AppContext.Provider value={contextValues}>
                <Sample />
            </AppContext.Provider>
        </>
    )

}