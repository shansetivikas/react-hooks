import { useCallback, useState } from "react";
import Search from "./Search";

const allUsers = [
    'john',
    'alex',
    'george',
    'simon',
    'james'
]

export default function CallBack() {

    const [users, setUsers] = useState(allUsers);

    const handleSearch = useCallback((text) => {
        const filteredUsers = allUsers.filter((user) => 
            user.includes(text),
        );
        setUsers(filteredUsers);
    }, []);

    return (
        <div>
            <button onClick={() => setUsers(allUsers)}>Shuffle</button>
            <Search onChange={handleSearch} />
            <ul>
                {
                    users.map((user) => (
                        <li key={user}>{user}</li>
                    ))
                }
            </ul>
        </div>
    )
}