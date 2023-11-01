import React, { Component } from 'react';
const Input = ({name,label,type,value,onChange,error}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name} className='form-label'>{label}</label>
            <input value={value} name={name} onChange={onChange} id={name} className="form-control" type={type}   />
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>
      );
}
 
export default Input;