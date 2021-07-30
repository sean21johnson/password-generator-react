import React from 'react';

function DisplayPassword({ password }) {

    return (
        <div className="password_container">
            <p>{password}</p>
        </div>
    )
}

export default DisplayPassword;