import React from 'react';
import { useState } from 'react/cjs/react.development';
import './User.css';

const User = (props) => {
    const {name, email, phone, picture} = props.userInfo
    const fullName = `${name.title} ${name.first} ${name.last}`
    const [mobile, setMobile] = useState('')
    const showNumber = (number) => setMobile(number)
    return (
        <div className='single-user'>
            <div className="u-img">
                <img src={picture.large} alt={fullName} />
            </div>
            <div className="u-details">
                <h3>Name: {fullName}</h3>
                <h4>Email: <span>{email}</span></h4>
                <h4>Phone: <span>{mobile}</span></h4>
                <button onClick={() => showNumber(phone)}>Show Phone Number</button>
                <button onClick={(() => props.tMem(fullName))}>Add team</button>
            </div>
        </div>
    );
};

export default User;