import React from 'react';
import SelectionList from './selectionList'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

const set_acc=()=>{
    return (

    <Box padding={10}>
        <Card elevation={8} sx={{padding:3}}>
            <h2 style={{font: 'italic 2.2em "Fira Sans", serif',color:'blue',marginBottom:'0.3cm'}}>Manage your allergy setting</h2>
            <SelectionList />
        </Card>
    </Box>
    );
}
export default set_acc;