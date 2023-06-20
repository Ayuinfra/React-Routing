import { useLocation } from "react-router-dom";
import Fab from "../Fab";
import { Fragment, useEffect, useState } from "react";
import { Container } from "@mui/material";



const TodoList = ()=>{

    const { state } = useLocation();


    const [todoList,setTodoList] = useState([]);

    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
      setTodos([...todos, task]);
    };

    useEffect(()=>{
        if(state)
        setTodoList(state);
    },[state])

    return(
         <Container> <Fragment>
         <h2>TODO LIST</h2>
         {todoList.length > 0 && todoList.map((item,index)=>(
             <h2>{index + 1}. {item}</h2>
         ))}

         <Fab todos={todoList}/>
     </Fragment>
     </Container>
       
    )
}
export default TodoList;