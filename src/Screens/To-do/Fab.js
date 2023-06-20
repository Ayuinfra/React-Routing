import AddIcon from '@mui/icons-material/Add';
import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Fab = (props) => {

    console.log(props, "dso")
    const navigate = useNavigate();

    const onAddTodoHandler = ()=>{
        navigate('./add',{
            state : props.todos
        });
    }

    return (
    <Container maxWidth="md" sx={{marginTop:'2rem',display:'flexStart'}}>

             <Button
            color="primary"
            size="large"
            type="submit"
            style={{ marginTop: '2rem' }}
            onClick={onAddTodoHandler}
        >
            <AddIcon />
        </Button>
        </Container>
      
    )
}

export default Fab;