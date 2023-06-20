import { Fragment } from "react"
import TodoForm from "./TodoForm"
import { Container } from "@mui/material"
import { useLocation } from "react-router-dom"



const AddTodo = ()=>{

    const { state } = useLocation();
    console.log("state 2",state);

    return(
        <Fragment>
            <Container>
                <h2> Add Todo</h2>
                <TodoForm list={state}/>
            </Container>
         
        </Fragment>
    )
}
export default AddTodo