import React from 'react';
import './App.css';
import { Box, Toolbar } from '@mui/material';
import ImgList, { Item } from './components/ImgList';
import HeaderBar from './components/HeaderBar';

const App = (props: { storedItems: Item[] }) => {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <HeaderBar/>
        <Toolbar />
        <ImgList storedItems={props.storedItems}/>
      </Box>
    </div>
  );
}

export default App;
