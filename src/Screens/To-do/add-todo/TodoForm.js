import { Fragment, useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const TodoForm = (props )=>{

    const navigate = useNavigate();
    const [task,setTask] = useState('');
    
    const onSubmit = (event)=>{
        event.preventDefault();
        const arr = props.list;
        arr.push(task);
        navigate('/',{
            state : arr
        });
   
    }

    return(
        <Fragment>
            <form onSubmit={onSubmit}>
                <TextField
                   required
                   id="outlined-required"
                   label="Required"
                   defaultValue={task}
                   onBlur={e=>setTask(e.target.value)}
                />
                <Button type="submit">Save</Button>
            </form>
           
        </Fragment>
    )
}
export default TodoForm;