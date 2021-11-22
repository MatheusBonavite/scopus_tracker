import React, { useState } from 'react';

const FormBoard = () => {
    const [location, setLocation] = useState('');
    return (
        <form className="form">
            <label htmlFor="location">
                <br />
                <input
                    id="location"
                    type="text"
                    className="input location"
                    placeholder={location}
                    onChange={(event) => setLocation(event.target.value)}
                    onBlur={(event) => setLocation(event.target.value)}
                />
            </label>
        </form>
    );
};

export default FormBoard;
