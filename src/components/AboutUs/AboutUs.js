import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LoopIcon from '@mui/icons-material/Loop';
import BarChartIcon from '@mui/icons-material/BarChart';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { styled } from '@mui/system';
import s1 from '../../assets/service.png'; 
import { motion } from 'framer-motion';
import CustumTitle from '../CustumTitle';
import '../../App.css';
// Values data
const values = [
  {
    icon: <EmojiEmotionsIcon fontSize="large" />,
    title: 'Customer satisfaction',
    description: 'Delivering products is important, but excellence means more than just fulfilling the explicit needs of our customers',
  },
  {
    icon: <LoopIcon fontSize="large" />,
    title: 'Agile',
    description:
      'To achieve this, AMT systems-Engineering SARL remains attentive to the real challenges the customer face in their ecosystem.',
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: 'Innovation',
    description:
      'We are committed to being open and honest with you at all times',
  },
  {
    icon: <CheckCircleOutlineIcon fontSize="large" />,
    title: 'Integrity',
    description:
      'We are dedicated to integrity and practice responsible resource management',
  },
];

const OurValues = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
       <p className='title-text-color'>Our advenatges</p>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="center"  gap={4} p={2}>
        {/* Left Illustration */}
        
        <Box alignContent="center"textAlign="center" sx={{ width: { xs: "5%", md: "50%" }, height: "auto", overflow: "hidden", borderRadius: 2 }}>
          <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
              <h1>Why to choose  AMT Systems –Engineering SARL  as your business partner?</h1>
          </motion.div>
        </Box>

        {/* Right Cards */}
        <Box p={3} width={{ xs: "100%", md: "40%" }} borderRadius={2} bgcolor="transparent">
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 3 }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Box mb={1}>{value.icon}</Box>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                      {value.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default OurValues;
