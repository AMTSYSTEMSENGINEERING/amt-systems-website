// import React from 'react';
// import {
//   Box,
//   Grid,
//   Typography,
//   Paper,
//   useTheme,
//   useMediaQuery,
// } from '@mui/material';
// import { motion } from 'framer-motion';
// import s1 from '../assets/service.png';
// import CustumTitle from './CustumTitle';

// const highlights = [
//   {
//     title: "Professionals",
//     description: "Our team has more than 4 years of experience in the society. We are engaged in our work.",
//     image: s1,
//   },
//   {
//     title: "We Deliver",
//     description: "We make sure we always deliver on time. We are committed to building a reliable brand.",
//     image: s1,
//   },
//   {
//     title: "Young & Ambitious",
//     description: "The company is managed by young people. We set the tone. You can count on us in a long run.",
//     image: s1,
//   },
//   {
//     title: "Cost-Effective",
//     description: "We are highly affordable, our rates are perfect to fit in any formats, with no hidden costs.",
//     image: s1,
//   },
// ];

// const WhyChooseUs = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Box
//       sx={{
//         py: 8,
//         px: { xs: 2, md: 6 },
//         backgroundColor: '#f0f6fb',
//         textAlign: 'center',
//       }}
//     >
//       <CustumTitle title="Reasons to consider AMT for your solutions services" />
//       {/* <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 6 }}>
//          <strong style={{ color: '#000' }}>AMT</strong> 
//       </Typography> */}

//       <Grid container justifyContent="center" spacing={4}>
//         {highlights.map((item, index) => (
//           <Grid item xs={12} sm={6} md={3} key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Paper
//                 elevation={3}
//                 sx={{
//                   p: 3,
//                   height: '100%',
//                   transition: 'all 0.3s ease',
//                   '&:hover': {
//                     transform: 'translateY(-8px)',
//                     boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
//                     backgroundColor: '#ffffff',
//                   },
//                 }}
//               >
//                 <Box
//                   component="img"
//                   src={item.image}
//                   alt={item.title}
//                   sx={{
//                     width: '100%',
//                     height: 120,
//                     objectFit: 'contain',
//                     mb: 2,
//                   }}
//                 />
//                 <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
//                   {item.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {item.description}
//                 </Typography>
//               </Paper>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default WhyChooseUs;


import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import s1 from "../assets/service.png";
import CustumTitle from "./CustumTitle";

const TopPyramid = () => (
  <Box sx={{ maxWidth: 380, mx: { xs: "auto", md: 0 } }}>
    {/* Pyramide SVG inline pour correspondre au visuel */}
    <svg viewBox="0 0 300 420" width="100%" aria-label="AMT Pyramid">
      {/* base */}
      <polygon points="30,360 270,360 220,260 80,260" fill="#a6c64b" />
      {/* vision */}
      <polygon points="80,260 220,260 190,190 110,190" fill="#9ac043" />
      {/* values */}
      <polygon points="110,190 190,190 170,135 130,135" fill="#8fba3c" />
      {/* motto */}
      <polygon points="130,135 170,135 155,100 145,100" fill="#84b435" />
      {/* labels */}
      <text x="150" y="340" textAnchor="middle" fontFamily="Segoe UI" fontSize="18" fontWeight="700" fill="#0b1e39">Our{" "}Mission</text>
      <text x="150" y="220" textAnchor="middle" fontFamily="Segoe UI" fontSize="18" fontWeight="700" fill="#0b1e39">Our{" "}Vision</text>
      <text x="150" y="165" textAnchor="middle" fontFamily="Segoe UI" fontSize="18" fontWeight="700" fill="#0b1e39">Our{" "}Values</text>
      <text x="150" y="118" textAnchor="middle" fontFamily="Segoe UI" fontSize="18" fontWeight="700" fill="#0b1e39">Our{" "}Motto</text>
    </svg>
  </Box>
);

const businessCards = [
  {
    title: "Our Passion for technologies",
    caption:
      "There is nothing unreachable for our team. We continuously learn and keep updated, leveraging new technologies.",
  },
  {
    title: "Our user-centric approach",
    caption:
      "We understand the customer and place satisfaction as the target of our actions.",
  },
  {
    title: "Our Values",
    caption:
      "We keep our promises, and strive for excellence.",
  },
  {
    title: "Our infrastructures",
    caption:
      "We are able to quick provide prototypes and then systems more fast.",
  },
];

export default function WhyChooseUs() {
  const theme = useTheme();
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ backgroundColor: "#ffffff" }}>
      {/* === Bloc haut : Pyramide + textes === */}
      <Box
        sx={{
          px: { xs: 2, md: 6 },
          pt: { xs: 4, md: 6 },
          pb: { xs: 2, md: 4 },
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={5}>
            <TopPyramid />
          </Grid>

          <Grid item xs={12} md={7}>
            {/* Slogan à droite */}
            <Typography
              variant="subtitle1"
              sx={{ color: "#0b1e39", fontWeight: 700, mb: 2 }}
            >
              We Do it for you and well
            </Typography>

            {/* Values */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ color: "#0b1e39", fontWeight: 800, mb: 1 }}
              >
                Our Values
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • We keep our promises
                </Typography>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • We strive for excellence
                </Typography>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • We improve continuously
                </Typography>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • We respect our customers and the environment
                </Typography>
              </Box>
            </Box>

            {/* Vision */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ color: "#0b1e39", fontWeight: 800, mb: 1 }}
              >
                Our Vision
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • A better economic viability of Africa
                </Typography>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • Successful partnership in the industrial landscape
                </Typography>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • Local solutions for local needs
                </Typography>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • Support for the education and the youth entrepreneurial development
                </Typography>
              </Box>
            </Box>

            {/* Mission */}
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#0b1e39", fontWeight: 800, mb: 1 }}
              >
                Our Mission
              </Typography>
              <Box sx={{ pl: 2 }}>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • We develop local solutions for local needs
                </Typography>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • We connect you into a system with your equipment
                </Typography>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • We advise our customer
                </Typography>
                <Typography variant="body1" sx={{ color: "#1f3b73" }}>
                  • We provide maintenance
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Séparateur visuel */}
      <Divider sx={{ mx: { xs: 2, md: 6 } }} />

      {/* === Bloc bas : Why considering… + 4 cartes === */}
      <Box
        sx={{
          py: 6,
          px: { xs: 2, md: 6 },
          backgroundColor: "#f0f6fb",
        }}
      >
        <CustumTitle title="Why considering AMT Systems-Engineering SARL as your business partner" />

        <Grid
          container
          spacing={4}
          sx={{ mt: 1 }}
          justifyContent="center"
        >
          {businessCards.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={1}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    borderRadius: 2,
                    border: "1px solid #e4ecf6",
                    transition: "all .25s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 10px 24px rgba(15, 40, 90, .08)",
                      backgroundColor: "#fff",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={s1}
                    alt={item.title}
                    sx={{ width: 72, height: 72, objectFit: "contain" }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 700,
                        color: "#0b1e39",
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        color: "#c22f2f", // rouge comme sur la capture
                        mt: 0.5,
                      }}
                    >
                      {item.caption}
                    </Typography>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
