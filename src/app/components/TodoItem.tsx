'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../types/todo';

type TodoItemProps = {
  todo: Todo;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
};

const TodoItem = ({ todo, onDelete, onComplete, onEdit }: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    onEdit(todo.id, value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className='border border-pink-300 p-4 '>
      {isEditing ? (
        <input
          ref={inputRef}
          onBlur={handleInputBlur}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          defaultValue={todo.title}
        />
      ) : (
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <input
              checked={todo.completed}
              className='w-6 h-6 accent-green-500 hover:cursor-pointer hover:accent-green-400'
              type='checkbox'
              onChange={() => onComplete(todo.id)}
            />
            <p className={todo.completed ? 'line-through' : ''}>{todo.title}</p>
          </div>
          <div className='flex flex-row gap-2 ml-2'>
            <button
              className='hover:text-pink-400'
              onClick={() => setIsEditing(!isEditing)}
            >
              Edit
            </button>
            <button
              className='hover:text-pink-400'
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
