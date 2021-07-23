import React from 'react';
import './App.css';

function Message (props) {
    
    return (
        <>
            <p className='text'>Text from props: <span className="message">{props.text}</span> </p>
        </>
    
    )};

export default Message;