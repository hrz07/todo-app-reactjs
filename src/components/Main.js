import React,{useState} from 'react';
import './MainStyle.css'
import Todo from './Todo';

const Main = () => {


    const [data,setData] = useState('');
    const [todoList,setTodoList] = useState([]);

    const inputHandler = (e)=>{
        setData(e.target.value);
    }
    const createTodo = ()=>{
        setTodoList([...todoList,data]);
        setData('')
    }
    const deleteTodo = (index)=>{
        let updatedList = [...todoList]
        updatedList.splice(index,1);
        setTodoList(updatedList);
       
    }

    return (
        <div>
            <div className="createSection d-flex flex-column mx-auto p-4 w-50 shadow p-3 mb-5 bg-body rounded">
                <div className="header">
                    <h1 className='fw-bold'>MY TODO APP</h1>
                </div>
                <div className="inputSection d-flex m-auto ">                   
                    <input onChange={inputHandler}  className='form-control  mx-3 border border-primary border-2' type="text" placeholder='Enter Task' value={data} />
                    <button onClick={createTodo} className='btn btn-primary'>ADD</button>
                </div>               
            </div>

            {
                todoList.map((data,index)=>{
                    return <Todo data={data} key={index} index={index} deleteTodo={deleteTodo} />
                })
            }

        </div>
    );
}

export default Main;
