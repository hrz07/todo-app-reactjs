import React from 'react';

const Main = () => {
    return (
        <div>
            <div className="createSection d-flex flex-column m-auto mt-5 p-5 w-50">
                <div className="header">
                    <h1>MY TODO APP</h1>
                </div>
                <div className="inputSection d-flex m-auto ">                   
                    <input  className='form-control w-100 ' type="text" placeholder='Enter Task' />
                    <button className='btn btn-primary'>ADD</button>
                </div>               
            </div>
        </div>
    );
}

export default Main;
