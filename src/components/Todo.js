import React from 'react';
import './TodoStyle.css'

const Todo = ({data,index,deleteTodo}) => {
    return (
        <div className='todoStyle w-25 bg-primary my-2 mx-auto p-1'>
            <div className='position-relative'>
                <h4 className='text-light d-inline-block mx-5' >{data}</h4>
                <i onClick={()=>deleteTodo(index)} className="fas fa-trash-alt"></i>
            </div>
        </div>
    );
}

export default Todo;
