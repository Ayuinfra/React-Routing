import React, { Fragment } from 'react';
import RoutesAll from './navigation/RoutesAll';
import Navbar from './Screens/Navbar';
import { Container } from '@mui/material';

const App=()=>{
  return(
    <Fragment>
      <Navbar/>
      <Container maxWidth="md" sx={{marginTop:'2rem'}}>
        <RoutesAll/>
      </Container>
    </Fragment>
  );
};

export default App;





