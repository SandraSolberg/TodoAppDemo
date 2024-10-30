'use client';
// HACK use uuid to create unique ids
/* import { v4 as uuidv4 } from 'uuid'; */

import Hero from './components/Hero';
import CustomInput from './components/CustomInput';
/* import TodoItem from './components/TodoItem'; */

export default function Home() {
  // STEP 1 KEEP track of your todos

  // STEP 2 Add a new to do
  /* const handleAddTodo = () => {}; */

  // STEP 3 Delete a todo
  /*  const handleDelete = () => {}; */

  // STEP 4 Mark todo as complete
  /*  const handleComplete = () => {}; */

  // STEP 5 Edit existing todo
  /*  const handleEdit = () => {}; */

  return (
    <div className='flex justify-center font-[family-name:var(--font-geist-sans)]'>
      <main className='p-8 flex flex-col items-center gap-6'>
        <h1 className='text-center'>TODO APP</h1>
        <Hero completed={0} total={0} />
        <CustomInput />

        <div className='min-w-80'>
          {/*  
            TODO Generate list of TodoItems or display <p/> tag under if there are no todos
            <TodoItem/>
 */}
          <p className='text-center'>No todos here!</p>
        </div>
      </main>
    </div>
  );
}
