import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';


const Header=()=>{
    const [value, setValue] = React.useState(0);

    return (
      <Box >
        <Paper>
            <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            >
            <BottomNavigationAction label="Home"icon={<RestoreIcon />} />
            <BottomNavigationAction label="FoodList" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Allergy" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Account/Setting" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </Paper>
      </Box>
    );
}
export default Header