'use client';
import React, { useState } from 'react';

const CustomInput = ({ addTodo }: { addTodo: (value: string) => void }) => {
  const [inputValue, setInputValue] = useState('');

  const handleReset = () => setInputValue('');

  const handleClick = () => {
    addTodo(inputValue);
    handleReset();
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTodo(inputValue);
      handleReset();
    }
  };

  return (
    <div className='flex'>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='Write your next task'
      />
      <button
        disabled={inputValue.length === 0}
        onClick={handleClick}
        className='bg-pink-400 hover:bg-pink-500 disabled:bg-gray-300 w-10 h-10 flex items-center justify-center'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='#f472b6'
          stroke='#fff'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='12' y1='5' x2='12' y2='19'></line>
          <line x1='5' y1='12' x2='19' y2='12'></line>
        </svg>
      </button>
    </div>
  );
};

export default CustomInput;
