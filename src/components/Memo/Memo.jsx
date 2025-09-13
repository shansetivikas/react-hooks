import { useMemo, useState } from "react";

export default function Memo() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]);

    const themeStyles = {
        backgroundColor: dark ?'black' : 'white',
        color: dark ? 'white' : 'black'
    }

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    )
}

function slowFunction(num) {
    console.log("calling slow function");
    for (let i=0; i<10000000000; i++){
        console.log(i)
    }
    return num*2
}