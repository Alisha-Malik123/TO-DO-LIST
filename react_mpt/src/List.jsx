import { useState } from "react";


const Todolist = () => {
    const [todo, settodo] = useState(['task', 'newtask']);
    const [newtodo, setnewtodo] = useState('');

    const handleSubmit = () => {
        if (!newtodo == '') {
            settodo([...todo, newtodo.trim()]);
            setnewtodo('');
        }

    }

    const deleteHandler = (index) => {
        const deletetodo = todo.filter((ele, i) => i !== index);
        settodo(deletetodo)
    }

    const moveUpHandler = (index) => {
        if (index > 0) {
            const updateTasks = [...todo];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            settodo(updateTasks)

        }
    }
    const downUpHandler = (index) => {
        if (index > 0) {
            const updateTasks = [...todo];
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
            settodo(updateTasks)

        }
    }
    return (
        <div className="">
          <center>
        <div style={{marginBottom:'20px'}}>
        <p>Count:{ todo.length }</p>
            <h1>Todolist</h1>
            <input type="text" value={ newtodo } onChange={ (e) => setnewtodo(e.target.value) } name="" placeholder="Enter the todo" id="" />
            <button onClick={ handleSubmit }>add</button>
        </div>
          </center>
            {
                todo.map((item, index) => (
                   <div className="todolist-main" key={ index }>
                     <div className="todo-list" >
                       <div style={{width:'100px'}}>
                       <p className="item-name">{ item }</p>
                       </div>
                        <div>
                        <button  onClick={ () => deleteHandler(index) } >delete</button>
                        <button  onClick={ () => moveUpHandler(index) }>MoveUp</button>
                        <button  onClick={ () => downUpHandler(index) }>MoveDown</button>
                        </div>
                    </div>
                   </div>
                ))
            }
        </div>
    )
};

export default Todolist;