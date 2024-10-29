import React from 'react';

type HeroProps = {
  completed: number;
  total: number;
};

const Hero = ({ completed, total }: HeroProps) => {
  return (
    <section className='border border-pink-300 flex items-center gap-6 p-4 rounded-md'>
      <div>
        <h2>Task Done</h2>
        <p>
          {completed >= 1
            ? total > 0 && completed === total
              ? 'You did it!!'
              : 'Keep it up!'
            : 'You can do it!'}
        </p>
      </div>
      <div className='rounded-full bg-green-400 h-32 w-32 flex items-center justify-center text-3xl '>
        {completed} / {total}
      </div>
    </section>
  );
};

export default Hero;
