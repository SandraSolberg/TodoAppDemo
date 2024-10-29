'use client';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Hero from './components/Hero';
import { Todo } from './types/todo';
import CustomInput from './components/CustomInput';
import TodoItem from './components/TodoItem';

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const totalTodos = todos.length;
  const totalCompletedTodos = todos.filter((t) => t.completed).length;

  const addTodo = (newTodo: string) => {
    if (newTodo.length > 0) {
      const newTodoObj: Todo = {
        id: uuidv4(),
        title: newTodo,
        completed: false,
      };

      setTodos((prev) => [...prev, newTodoObj]);
    }
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEdit = (id: string, text: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title: text } : todo))
    );
  };

  const handleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className='flex justify-center font-[family-name:var(--font-geist-sans)]'>
      <main className='p-8 flex flex-col items-center gap-6'>
        <h1 className='text-center'>TODO APP</h1>
        <Hero completed={totalCompletedTodos} total={totalTodos} />
        <CustomInput addTodo={addTodo} />

        <div className='min-w-80'>
          {todos && todos.length > 0 ? (
            <div>
              {todos.map((todo) => (
                <div key={todo.id}>
                  <TodoItem
                    todo={todo}
                    onDelete={handleDelete}
                    onComplete={handleComplete}
                    onEdit={handleEdit}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className='text-center'>No todos here!</p>
          )}
        </div>
      </main>
    </div>
  );
}
