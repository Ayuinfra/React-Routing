import React, { useState, useEffect } from 'react';
import { Box, Button, Container } from '@mui/material';

const Mathematicaloperations = () => {
  const [value, setValue] = useState(0);
  const [boxColor, setBoxColor] = useState('grey');

  const Add = () => {
    setValue(value + 1);
  };

  const Subtract = () => {
    setValue(value - 1);
  };

  const isPrime = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const isEven = (num) => {
    return num % 2 === 0;
  };

  const IsPrimeClick = () => {
    if (isPrime(value)) {
      setBoxColor('green');
      setTimeout(() => {
        setBoxColor('grey');
      }, 1000);
    } else {
      setBoxColor('red');
      setTimeout(() => {
        setBoxColor('grey');
      }, 1000);
    }
  };

  const IsEvenClick = () => {
    if (isEven(value)) {
      setBoxColor('green');
      setTimeout(() => {
        setBoxColor('grey');
      }, 1000);
    } else {
      setBoxColor('red');
      setTimeout(() => {
        setBoxColor('grey');
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={200}
        height={200}
        border={1}
        borderRadius={4}
        fontSize={36}
        fontWeight="bold"
        color="white"
        bgcolor={boxColor}
      >
        {value}
      </Box>
      <Box display="flex" justifyContent="center" mt={1}>
        <Button variant="contained" onClick={Add} color="primary" sx={{ margin: 2 }}>
          Add
        </Button>
        <Button variant="contained" onClick={Subtract} color="primary" sx={{ margin: 2 }}>
          Subtract
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" mt={1}>
        <Button
          variant="contained"
          onClick={IsPrimeClick}
          color="primary"
          sx={{ margin: 2 }}
        >
          Is Prime
        </Button>
        <Button
          variant="contained"
          onClick={IsEvenClick}
          color="primary"
          sx={{ margin: 2 }}
        >
          Is Even
        </Button>
      </Box>
    </Container>
  );
};

export default Mathematicaloperations;