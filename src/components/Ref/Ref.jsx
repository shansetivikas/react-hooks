import { useEffect, useRef, useState } from "react";

export default function Ref() {
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const inputRef = useRef();
    // {current: 0}

    useEffect(() => {
     renderCount.current = renderCount.current + 1;   
    });

    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} ref={inputRef}/>
            <div>My Name is {name}</div>
            <div>I rendered {renderCount.current} times</div>
            <button onClick={focus}>Focus</button>
        </>
    )
}