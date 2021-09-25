import React from 'react';
import './MainStyle.css'

const Main = () => {
    return (
        <div>
            <div className="createSection d-flex flex-column m-auto mt-5 p-4 w-50 shadow p-3 mb-5 bg-body rounded">
                <div className="header">
                    <h1 className='fw-bold'>MY TODO APP</h1>
                </div>
                <div className="inputSection d-flex m-auto ">                   
                    <input  className='form-control  mx-3 border border-primary border-2' type="text" placeholder='Enter Task' />
                    <button className='btn btn-primary'>ADD</button>
                </div>               
            </div>
        </div>
    );
}

export default Main;
