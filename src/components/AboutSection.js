import React from 'react';
import {
  Box,
  Typography,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import s1 from '../assets/service.png'; 
import Button from '@mui/material/Button';

const ProjectsSection = () => {
  const theme = useTheme();


  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ color: '#0f387cff', mb: 2, textAlign: 'center' }}>
          About Us
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center"  alignItems="center">
          <Grid item xs={12} sm={6} md={4} >
            <img src={s1} alt="Project" style={{ width: '90%', height: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} >
             <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
               AMT Systems Engineering
             </Typography>
              <Typography variant="body2" sx={{ mb: 5, maxWidth: 700, mx: 'auto' }}>
                From brand development, website application development, eCommerce solutions,
                Content Management Systems (CMS), Search Engine Optimization (SEO) and digital marketing.
                Content Management Systems (CMS), Search Engine Optimization (SEO) and digital marketing.
                Optimization (SEO) and digital marketing.
              </Typography>
              <Button variant="contained">Contained</Button>
          </Grid>
       
      </Grid>
    </Box>
  );
};

export default ProjectsSection;
