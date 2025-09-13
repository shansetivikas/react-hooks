import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Sample() {

    const {darkTheme, setDarkTheme} = useContext(AppContext)

    const changeTheme = () => {
        setDarkTheme(prev => prev === 'blue' ? 'red' : 'blue')
    }

    return (
        <>
            <button onClick={changeTheme}>Change</button>
            <p style={{background: darkTheme}}>Hello</p>
        </>
    )

}