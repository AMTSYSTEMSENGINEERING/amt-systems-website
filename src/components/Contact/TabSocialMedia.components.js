import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "",
    description: 'Facebook',
  },
  {
    id: 2,
    title: "",
    description: 'LinkedIn',
  },
  {
    id: 3,
    title: "",
    description: 'GitHub',
  },
  {
    id: 4,
    title: "",
    description: 'WhatsApp',
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(200px, 100%), 1fr))',
        gap: 2,
      }}
    >
      {cards.map((card, index) => (
        <motion.div
                                  initial={{ opacity: 0, x: -100 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.9 }}
                                  viewport={{ once: true }}
                                >
        <Card>
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? '' : undefined}
            sx={{
             textAlign:'center',
              height: '100%',
              '&[data-active]': {
                backgroundColor: 'action.selected',
                '&:hover': {
                  backgroundColor: 'action.selectedHover',
                },
              },
            }}
          >
            <CardContent sx={{ height: '100%' }}>
              <Typography variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </motion.div>
      ))}
    </Box>
  );
}

export default SelectActionCard;
