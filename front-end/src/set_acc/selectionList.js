
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ItemList from './list.js'
import { pink } from '@mui/material/colors';
import D_icon from '@mui/icons-material/Delete';
import A_icon from '@mui/icons-material/Add';


function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
    return [...a, ...not(b, a)];
}

export default function TransferList() {
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const selectAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <ItemList
          title='Allergies left you could selected'
          items={left}
          selectAll={selectAll}
          numberOfChecked={numberOfChecked}
          handleToggle={handleToggle}
          checked={checked}
          />
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ 
              my: 0.5,
           
              borderRadius:2,
              height:50,
              width: 105,
              marginBottom:2
               }}
            variant="contained"
            size="large"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            startIcon={<A_icon />}
          >
            ADD
          </Button>
          <Button
            sx={{ 
              my: 0.5,
              color: pink[800],
              '&.Mui-checked': {
              color: pink[600],
              },
              borderRadius:2,
              height:50,
              width: 105,
              marginTop:5
               }}
            variant="outlined"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            startIcon={<D_icon />}
          >
            REMOVE
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <ItemList
          title='Your selected Allergy'
          items={right}
          selectAll={selectAll}
          numberOfChecked={numberOfChecked}
          handleToggle={handleToggle}
          checked={checked}/>
          </Grid>
    </Grid>
  );
}