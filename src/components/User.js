import { useState } from "react";

const User = (props) => {
    const { name, location, contact } = props;
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <h2>Count2: {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: {contact}</h3>
        </div>
    )
};

export default User;