import React from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import service from '../assets/service.png'; // Assurez-vous que le chemin est correct

const PresentationSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={isMobile ? 'row' : 'row'}
        display="flex"
        justifyContent="space-between"
      >
        {/* Image à gauche */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              component="img"
              src={service} // Remplace par le bon chemin de ton image
              alt="DS Teams"
              sx={{
                width: '100%',
                borderRadius: 2,
              }}
            />
          </motion.div>
        </Grid>

        {/* Texte à droite */}
        <Grid item xs={6} md={4}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Présentation de DS TEAMS
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>DS TEAMS</strong> est une société de services informatiques qui accompagne les entreprises dans leur transformation digitale. 
              Nous combinons expertise technique, agilité et innovation pour concevoir des solutions performantes et évolutives.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Notre mission :</strong> Offrir à nos clients des solutions technologiques <strong>fiables, innovantes et durables</strong>, en construisant une relation de <strong>confiance</strong> solide.
            </Typography>

            <Typography variant="body1">
              <strong>Notre vision :</strong> Devenir un <strong>acteur de référence</strong> dans l’accélération digitale des entreprises, en les propulsant vers de nouveaux sommets grâce à la technologie.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PresentationSection;
