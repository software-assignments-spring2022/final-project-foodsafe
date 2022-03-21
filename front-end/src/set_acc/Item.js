import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';




//transfer number of food
const Allergies=['Milk','Egg','Fish','Crustacean shellfish','Tree Nut','Peanut','Wheat','SoyBean'];

const Links={
    Milk:'https://farrp.unl.edu/allergenic-foods-and-their-allergens-links-informall',
    Egg:'https://farrp.unl.edu/informalleggs',
    Fish:'https://farrp.unl.edu/informallfish',
    'Crustacean shellfish':'https://farrp.unl.edu/informallcrushellfish',
    'Tree Nut':'https://farrp.unl.edu/informalltreenuts',
    'Peanut':'https://farrp.unl.edu/informalllegumes',
    Wheat:'https://farrp.unl.edu/informallcerealsgrains',
    'SoyBean':'https://farrp.unl.edu/informalllegumes'
}

const foodList={
    Milk:['Milk, Cow','Milk, Goat','Milk, Sheep'],
    Egg:["Hen's Egg"],
    Fish:["Alaska Pollock",'Carp','Mackerel'],
    'Crustacean shellfish':['Crab','Lobster','Shrimp'],
    'Tree Nut':['Almond','Brazil Nut','Cashew Nut'],
    'Peanut':['Chickpea','Lentil','Lupin'],
    Wheat:['Barley','Corn, Maize','Oat'],
    SoyBean:['Pea','Soy SoyBean']
}

function getText(arr){
 let result='';
 arr.forEach(t=>{
     result+=`      - ${t}\n`
 })
 return result;
}

const Item=({value,checked,handleToggle})=>{
    return(
        <ListItem
            key={value}
            role="listitem"
        >
            <Card sx={{ 
                width:300,
                height:220,
                }}
            >
                <Box sx={{display: 'flex',maxHeight:"10"}}>
                    <Checkbox
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            size='large'
                            onClick={handleToggle(value)}
                    />
                    <h2 margin-left="300">{`${Allergies[value]}`}</h2>
                </Box>
                <pre>{getText(foodList[Allergies[value]])}</pre>
        
                <CardActions>
                    <Button 
                        sx={{
                            position: "absolute",
                            bottom: "10px",
                            '&.Mui-checked': {
                                color: pink[600],
                                },
                             }}
                        size="medium"
                        href={Links[Allergies[value]]}>
                            More info
                    </Button>
                </CardActions>
            </Card>
            <ListItemText primary={``}/>
            <img 
                src={`/img/food/img${value+1}.jpg`}
                width="290"
                height="220"
            />
            <Divider/>
        </ListItem>
        
      )
}
export default Item;