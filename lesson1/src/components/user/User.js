import React from 'react';

const User = ({name, age}) => {
    return (
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
    );
};

export default User;