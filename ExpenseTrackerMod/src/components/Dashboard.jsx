import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import { Drawer } from '@mui/material';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
import Tabf from './Tabf';
import Tabsec from './Tabsec';
import Tabt from './Tabt';

const Dashboard = () => {
    const [value, setValue] = useState(0)
    const [onClick, setOnClick] = useState(false)
    const [clickTab, setClickTab] = useState(false)
    const [clickTabt, setClickTabt] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleOpen=()=>{
        setOnClick(true)
    }
    const handleClose=()=>{
        setOnClick(false)
    }

    return (
        <>
        <div className="h-screen bg-gray-800 ">
        <Box className="w-full flex justify-center">
            <Tabs value={value} onChange={handleChange} >
                <Tab label="Click to open" style={{color:'white', fontSize:'18px'}} onClick={()=>{setOnClick(true); setClickTab(false); setClickTabt(false)}}  />
                <Tab label="Item Two" style={{color:'white', fontSize:'18px'}} onClick={()=>{setClickTab(true),setClickTabt(false)}}/>
                <Tab label="Item Three" style={{color:'white', fontSize:'18px'}} onClick={()=>{setClickTabt(true),setClickTab(false)}}/>
            </Tabs>
        </Box>
    <Tabf onClick={onClick} handleClose={handleClose} handleOpen={handleOpen} />

    {clickTab &&(
    <Tabsec clickTab={clickTab} />
    )}
    {clickTabt && (
    <Tabt clickTabt={clickTabt} />
    )}

    </div>


    </>
    )
}

export default Dashboard