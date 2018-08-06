import React from 'react';

const Input = ({ title, state, name }, onChange, index) => {
    return (
        <div key={index} className="input">
            <input placeholder={title} name={name} value={state} onChange={onChange} />
            <label className="input__title">{title}</label>
        </div>
    )
}

export default Input;
/*
    <label className={`input__number ${state == '' ? 'gray' : 'red'}`}>{index + 1}</label> 
    
*/