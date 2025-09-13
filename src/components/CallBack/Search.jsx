import { memo } from "react";

function Search({onChange}) {
    console.log("hello")
    return (
        <input
            type="text"
            placeholder="Search Users..."
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default memo(Search);