import React from 'react';
import './Input.module.scss';

export const Input = ({
  name, onChange, type, placeholder, value, checked, inputRef,
}) => (
  <input
    ref={inputRef}
    checked={checked}
    value={value}
    placeholder={placeholder}
    type={type}
    name={name}
    onChange={onChange}
  />
);
