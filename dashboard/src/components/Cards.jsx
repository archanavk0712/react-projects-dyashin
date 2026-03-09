import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import DescriptionIcon from '@mui/icons-material/Description';

const cards = [
  {
    id: 1,
    obj : <DescriptionIcon color="success" fontSize='90px'/>,
    title: 'total amount to be paid',
    description: '₹10,00,000',
  },
  {
    id: 2,
     obj : <DescriptionIcon color="warning" fontSize='90px'/>,
    title: 'total amount to be paid this month',
    description: '₹1,00,000',
  },
  {
    id: 3,
     obj : <DescriptionIcon color="primary" fontSize='90px'/>,
    title: 'total invoice generated',
    description: '250',
  },
    {
    id: 4,
     obj : <DescriptionIcon color="error" fontSize='90px'/>,
    title: 'number of mandate created',
    description: '250',
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '550px',
        height:'fit-content',
        display: 'd-flex',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 1,
      }}
    >
      {cards.map((card, index) => (
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%', width:'fit-content',display:'inline-flex', alignItems:'center', justifyContent:'center' }}>
              <Typography variant="h5" component="div">
                <div style={{width:'100px',fontSize:'80px'}}>
                    {card.obj}
                </div>
              </Typography>
              <Typography variant="h6" color="text" sx={{paddingTop:'10px'}}>
                {card.title}
                <br />
                <h2>{card.description}</h2>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;
