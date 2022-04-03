import React from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { pink } from '@mui/material/colors';
import Item from './Item.js' 

const list = ({title, items,selectAll,numberOfChecked,handleToggle,checked}) => (
    <Card elevation={10}>
      <CardHeader
        sx={{ px: 4, py: 1 ,borderColor: '#2a5d45'}}
        avatar={
          <Checkbox
            sx={{
                color: pink[800],
                '&.Mui-checked': {
                color: pink[600],
                },
            }}
            size='large'
            onClick={selectAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={
              numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        titleTypographyProps={{
            color: 'green',
            "fontSize": 25
        }}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider/>
      <List
        sx={{

          width: 600,
          height: 630,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {

          return (
              <Item
                value={value}
                checked={checked}
                handleToggle={handleToggle}
                />
          );
        })}
        <ListItem />
      </List>
    </Card>
);

export default list;