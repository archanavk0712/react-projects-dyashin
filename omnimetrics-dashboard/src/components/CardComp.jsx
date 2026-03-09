import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Avatar } from '@mui/material';
import { green } from '@mui/material/colors';

const cards = [
  {
    id: 1,
    description: 'Total Amount To Be Paid',
    title: '₹10,00,000',
    color: '#C8E6C9',
    iconColor: '#2E7D32',

  },
  {
    id: 2,
    description: 'Total Amount To Be Paid This Month',
    title: '₹1,00,000',
    color: '#FFCCBC',
    iconColor: '#E64A19',

  },
  {
    id: 3,
    description: 'Total Invoice Generated',
    title: '250',
    color: '#BBDEFB',
    iconColor: '#1565C0',

  },
  {
    id: 4,
    description: 'Number Of Mandate Created',
    title: '250',
    color: '#E1BEE7',
    iconColor: '#7B1FA2',

  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
         width: 'auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: 2,
        p: 2,

      }}
    >
      {cards.map((card, index) => (
        <Card sx={{
           height: '95px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: 2,
            p: 2
          }}
>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
               display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 2,
              height: '100%',

              '&[data-active]': {
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              },
            }}

          >
            <Avatar sx=
              {{
                 backgroundColor: card.color,
                color: card.iconColor,
                width: 80,
                height: 80,
                borderRadius: '4px', 

              }}
              variant="rounded">
              <DescriptionOutlinedIcon sx={{
                width: 60, height: 60
              }} />
            </Avatar>

            <CardContent sx={{padding:0, flex:1  }}>
              <Typography sx={{ fontSize: "15px", color: "#555" ,}} variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Typography variant="h4" sx={{
                fontWeight: 700, mt: 1
              }}>
                {card.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;
