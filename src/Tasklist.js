import React from 'react';
import { useState } from 'react';
import { TaskCard } from './TaskCard';
import './Tasklist.css';
import { BoxCard } from './BoxCard';
export const Tasklist = ({tasks,setTasks}) => {
 
  const [show, setShow] = useState(true);
  function handleDel(id){
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <h1>Task List</h1>
      <button className='toggle' onClick={() => setShow(!show)}>Toggle</button>
      {show && (
        <ul>
          {tasks.map((task) => (
            <TaskCard key={task.id} task = {task} handleDel = {handleDel} />
          ))}

        </ul>
      )}
      <BoxCard result = "success">
        <h3 className="title">Lorem ipsum dolor sit amet.</h3>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaeca Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, accusantium?</p>
      </BoxCard>
        
      <BoxCard result = "warning">
        <h3 className="title">Lorem ipsum dolor amet.</h3>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro et minima tenetur! Eveniet odio iste error quo officia doloribus, repellat, vel, mollitia sit sapiente dicta dignissimos laborum veniam ut. Assumenda?</p>
      </BoxCard>

      <BoxCard result = "info">
        <h3 className="title">Lorem ipsum amet.</h3>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda quas repudiandae mollitia, explicabo esse consequatur magni enim libero velit delectus quos necessitatibus rerum, corrupti numquam autem sapiente a beatae.</p>
      </BoxCard>
    </>
  );
};

