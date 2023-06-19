import { Button, Typography} from "@mui/material";
import { Fragment } from "react";


const Home = ()=>{

  return(
    <Fragment>

          <Typography varient = "h4">Home</Typography>
          <Button href="/profile" variant="contained" sx={{ mt: 2 }}>
            My Profile
          </Button>


    </Fragment>
   
  )
}
export default Home;

