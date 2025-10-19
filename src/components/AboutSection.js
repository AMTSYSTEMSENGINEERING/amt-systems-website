/*
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import s1 from '../assets/service.png';
import Button from '@mui/material/Button';
import '../App.css';
import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 } }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <p className='title-text-color' style={{ marginBottom: 20 }}>
          {t('aboutSection.title')}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <img src={s1} alt="Project" style={{ width: '90%', height: '100%' }} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                AMT Systems Engineering
            </Typography>
            <Typography variant="body2" sx={{ mb: 5, maxWidth: 700, mx: 'auto' }}>
              {t('aboutSection.desc')}
            </Typography>
            <Button variant="contained">{t('aboutSection.cta')}</Button>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default ProjectsSection;
*/
// import React from 'react';
// import { motion } from 'framer-motion';
// import s1 from '../assets/service.png';
// import Button from '@mui/material/Button';
// import '../App.css';

// const AMTSystemsLanding = () => {
//   const services = [
//     { label: 'Web & Mobile App' },
//     { label: 'eCommerce Websites' },
//     { label: 'SEO & Digital Marketing' },
//     { label: 'Graphic Design & Branding' },
//     { label: 'Software Development' },
//     { label: 'System development' }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const floatingVariants = {
//     animate: {
//       y: [-10, 10, -10],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   // Check icon SVG
//   const CheckIcon = () => (
//     <svg 
//       width="20" 
//       height="20" 
//       viewBox="0 0 24 24" 
//       fill="none" 
//       stroke="currentColor" 
//       strokeWidth="2" 
//       strokeLinecap="round" 
//       strokeLinejoin="round"
//       style={{ color: '#4CAF50', minWidth: '20px' }}
//     >
//       <polyline points="20,6 9,17 4,12"></polyline>
//     </svg>
//   );

//   const styles = {
//     container: {
//       minHeight: '100vh',
//       background: 'white',
//       overflow: 'hidden',
//       position: 'relative',
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//     },
//     backgroundElement1: {
//       position: 'absolute',
//       top: '10%',
//       left: '5%',
//       width: '60px',
//       height: '60px',
//       background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
//       borderRadius: '50%',
//       zIndex: 0
//     },
//     backgroundElement2: {
//       position: 'absolute',
//       top: '60%',
//       right: '10%',
//       width: '40px',
//       height: '40px',
//       background: 'linear-gradient(45deg, #45B7D1, #96CEB4)',
//       borderRadius: '50%',
//       zIndex: 0
//     },
//     mainContainer: {
//       maxWidth: '1400px',
//       margin: '0 auto',
//       padding: '2rem',
//       position: 'relative',
//       zIndex: 1
//     },
//     gridContainer: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '4rem',
//       alignItems: 'center',
//       minHeight: '100vh',
//       '@media (max-width: 1024px)': {
//         gridTemplateColumns: '1fr',
//         gap: '2rem'
//       }
//     },
//     illustrationSection: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '500px',
//       position: 'relative',
//       backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 400\'%3E%3Cdefs%3E%3ClinearGradient id=\'grad1\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%23667eea;stop-opacity:1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color:%23764ba2;stop-opacity:1\' /%3E%3C/linearGradient%3E%3ClinearGradient id=\'grad2\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%23ff9a9e;stop-opacity:1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color:%23fecfef;stop-opacity:1\' /%3E%3C/linearGradient%3E%3ClinearGradient id=\'grad3\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%23a8edea;stop-opacity:1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color:%23fed6e3;stop-opacity:1\' /%3E%3C/linearGradient%3E%3ClinearGradient id=\'grad4\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%23ffecd2;stop-opacity:1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color:%23fcb69f;stop-opacity:1\' /%3E%3C/linearGradient%3E%3ClinearGradient id=\'grad5\' x1=\'0%25\' y1=\'0%25\' x2=\'100%25\' y2=\'100%25\'%3E%3Cstop offset=\'0%25\' style=\'stop-color:%23a1c4fd;stop-opacity:1\' /%3E%3Cstop offset=\'100%25\' style=\'stop-color:%23c2e9fb;stop-opacity:1\' /%3E%3C/linearGradient%3E%3C/defs%3E%3C!-- Central platform --%3E%3Crect x=\'100\' y=\'180\' width=\'200\' height=\'40\' rx=\'20\' fill=\'url(%23grad1)\' opacity=\'0.9\'/%3E%3C!-- Isometric elements --%3E%3Cpolygon points=\'80,100 120,80 160,100 120,120\' fill=\'url(%23grad2)\' opacity=\'0.8\'/%3E%3Ccircle cx=\'320\' cy=\'120\' r=\'25\' fill=\'url(%23grad3)\' opacity=\'0.8\'/%3E%3Crect x=\'60\' y=\'280\' width=\'40\' height=\'40\' rx=\'8\' fill=\'url(%23grad4)\' opacity=\'0.8\'/%3E%3Ccircle cx=\'320\' cy=\'300\' r=\'20\' fill=\'url(%23grad5)\' opacity=\'0.8\'/%3E%3C!-- Additional isometric shapes --%3E%3Cpolygon points=\'200,60 240,40 280,60 240,80\' fill=\'url(%23grad2)\' opacity=\'0.6\'/%3E%3Crect x=\'150\' y=\'320\' width=\'30\' height=\'30\' rx=\'6\' fill=\'url(%23grad3)\' opacity=\'0.7\'/%3E%3Cpolygon points=\'280,250 320,230 360,250 320,270\' fill=\'url(%23grad4)\' opacity=\'0.7\'/%3E%3Ccircle cx=\'80\' cy=\'200\' r=\'15\' fill=\'url(%23grad5)\' opacity=\'0.6\'/%3E%3C!-- Small decorative elements --%3E%3Ccircle cx=\'40\' cy=\'60\' r=\'8\' fill=\'%23FF6B6B\' opacity=\'0.5\'/%3E%3Crect x=\'350\' y=\'40\' width=\'12\' height=\'12\' rx=\'2\' fill=\'%2345B7D1\' opacity=\'0.5\'/%3E%3Ccircle cx=\'380\' cy=\'350\' r=\'6\' fill=\'%2396CEB4\' opacity=\'0.5\'/%3E%3Crect x=\'20\' y=\'350\' width=\'10\' height=\'10\' rx=\'2\' fill=\'%234ECDC4\' opacity=\'0.5\'/%3E%3C/svg%3E")',
//       backgroundSize: 'contain',
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       '@media (max-width: 1024px)': {
//         order: 2,
//         height: '300px'
//       },
//       '@media (max-width: 768px)': {
//         height: '250px'
//       }
//     },
//     contentSection: {
//       paddingLeft: '2rem',
//       '@media (max-width: 1024px)': {
//         paddingLeft: 0,
//         order: 1
//       }
//     },
//     aboutTag: {
//       background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
//       color: 'white',
//       padding: '0.5rem 1.5rem',
//       borderRadius: '25px',
//       fontWeight: 'bold',
//       fontSize: '0.875rem',
//       display: 'inline-block',
//       marginBottom: '1.5rem',
//       boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
//       border: 'none',
//       '@media (max-width: 480px)': {
//         fontSize: '0.75rem',
//         padding: '0.4rem 1rem'
//       }
//     },
//     mainTitle: {
//       fontSize: '3.5rem',
//       fontWeight: 800,
//       lineHeight: 1.2,
//       marginBottom: '1.5rem',
//       background: 'linear-gradient(45deg, #2c3e50 30%, #3498db 90%)',
//       WebkitBackgroundClip: 'text',
//       WebkitTextFillColor: 'transparent',
//       backgroundClip: 'text',
//       '@media (max-width: 1024px)': {
//         fontSize: '2.5rem'
//       },
//       '@media (max-width: 768px)': {
//         fontSize: '2rem'
//       },
//       '@media (max-width: 480px)': {
//         fontSize: '1.5rem'
//       }
//     },
//     description: {
//       color: '#5a6c7d',
//       fontSize: '1.1rem',
//       lineHeight: 1.7,
//       marginBottom: '2rem',
//       maxWidth: '600px',
//       '@media (max-width: 768px)': {
//         fontSize: '1rem'
//       }
//     },
//     highlight: {
//       color: '#080808ff',
//       fontWeight: 'bold'
//     },
//     bold: {
//       fontWeight: 'bold'
//     },
//     servicesGrid: {
//       display: 'grid',
//       gridTemplateColumns: '1fr 1fr',
//       gap: '1rem',
//       marginBottom: '2rem',
//       '@media (max-width: 768px)': {
//         gridTemplateColumns: '1fr'
//       }
//     },
//     serviceItem: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '0.75rem',
//       padding: '1rem 1.5rem',
//       border: '2px solid #e1e8ed',
//       borderRadius: '12px',
//       background: 'rgba(255, 255, 255, 0.8)',
//       backdropFilter: 'blur(10px)',
//       color: '#2c3e50',
//       fontWeight: 600,
//       fontSize: '0.95rem',
//       transition: 'all 0.3s ease',
//       cursor: 'pointer',
//       width: '100%',
//       textAlign: 'left',
//       '@media (max-width: 768px)': {
//         padding: '0.75rem 1rem',
//         fontSize: '0.85rem'
//       }
//     },
//     ctaButton: {
//       background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)',
//       color: 'white',
//       border: 'none',
//       borderRadius: '50px',
//       padding: '1rem 2rem',
//       fontSize: '1.1rem',
//       fontWeight: 'bold',
//       cursor: 'pointer',
//       boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
//       transition: 'all 0.3s ease',
//       '@media (max-width: 768px)': {
//         padding: '0.75rem 1.5rem',
//         fontSize: '1rem'
//       }
//     }
//   };

//   // Media query hook simulation
//   const [isMobile, setIsMobile] = React.useState(false);
//   const [isTablet, setIsTablet] = React.useState(false);

//   React.useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth <= 768);
//       setIsTablet(window.innerWidth <= 1024);
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   const getResponsiveStyle = (baseStyle, mobileStyle = {}, tabletStyle = {}) => {
//     if (isMobile) return { ...baseStyle, ...mobileStyle };
//     if (isTablet) return { ...baseStyle, ...tabletStyle };
//     return baseStyle;
//   };

//   return (
//     <div style={styles.container}>

//       <div style={styles.mainContainer}>
//         <div style={getResponsiveStyle(
//           styles.gridContainer,
//           { gridTemplateColumns: '1fr', gap: '2rem' },
//           { gridTemplateColumns: '1fr', gap: '2rem' }
//         )}>
//           {/* Left Side - Illustration as Image */}
//           <img src={s1} alt="Project" style={{ width: '80%', height: '50%' }} />

//           {/* Right Side - Content */}
//           <motion.div
//             style={getResponsiveStyle(
//               styles.contentSection,
//               { paddingLeft: 0, order: 1 },
//               { paddingLeft: 0, order: 1 }
//             )}
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//           >
//             {/* About Us Tag */}
//             <motion.div variants={itemVariants}>
//               <div style={getResponsiveStyle(
//                 styles.aboutTag,
//                 { fontSize: '0.75rem', padding: '0.4rem 1rem' }
//               )}>
//                 ABOUT US
//               </div>
//             </motion.div>

//             {/* Main Title */}
//             <motion.h1
//               style={getResponsiveStyle(
//                 styles.mainTitle,
//                 { fontSize: '1.5rem' },
//                 { fontSize: '2.5rem' }
//               )}
//               variants={itemVariants}
//             >
//               AMT Systems engineering
//             </motion.h1>

//             {/* Description */}
//             <motion.p
//               style={getResponsiveStyle(
//                 styles.description,
//                 { fontSize: '1rem' }
//               )}
//               variants={itemVariants}
//             >
//               We are AMT, a technology company based in Douala, Cameroon, rooted in{' '}
//               <span style={styles.highlight}>innovation</span>,{' '}
//               <span style={styles.highlight}>system integration</span> and{' '}
//               <span style={styles.highlight}>impact</span>. We combine{' '}
//               <span style={styles.bold}>software, hardware, AI</span> and{' '}
//               <span style={styles.bold}>mechanics</span> to create integrated solutions.
//             </motion.p>

//             {/* Services Grid with Check Icons */}
//             <motion.div
//               style={getResponsiveStyle(
//                 styles.servicesGrid,
//                 { gridTemplateColumns: '1fr' }
//               )}
//               variants={itemVariants}
//             >
//               {services.map((service, index) => (
//                 <motion.div
//                   key={service.label}
//                   style={getResponsiveStyle(
//                     styles.serviceItem,
//                     { padding: '0.75rem 1rem', fontSize: '0.85rem' }
//                   )}
//                   whileHover={{ 
//                     scale: 1.02,
//                     borderColor: '#667eea',
//                     background: 'rgba(102, 126, 234, 0.05)',
//                     transform: 'translateY(-2px)',
//                     boxShadow: '0 8px 25px rgba(102, 126, 234, 0.2)'
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <CheckIcon />
//                   <span>{service.label}</span>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* CTA Button */}
//             <motion.button
//               style={getResponsiveStyle(
//                 styles.ctaButton,
//                 { padding: '0.75rem 1.5rem', fontSize: '1rem' }
//               )}
//               whileHover={{ 
//                 scale: 1.05,
//                 background: 'linear-gradient(45deg, #5a67d8 30%, #6b46c1 90%)',
//                 boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)'
//               }}
//               whileTap={{ scale: 0.95 }}
//               variants={itemVariants}
//             >
//               More About Us
//             </motion.button>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AMTSystemsLanding;

import React from "react";
import { motion } from "framer-motion";
import s1 from "../assets/service.png";

const AboutSection = () => {
  const Card = ({ text }) => (
    <div style={styles.card}>
      <span style={styles.checkWrap}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#e6f0ff" />
          <path
            d="M8 12.5l2.5 2.5L16 9.5"
            stroke="#0b63ce"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span style={styles.cardText}>{text}</span>
    </div>
  );

  return (
    <div style={styles.section}>
      <div style={styles.wrapper}>
        {/* LEFT: Illustration */}
        <div style={styles.left}>
          <img src={s1} alt="About AMT" style={styles.image} />
        </div>

        {/* RIGHT: Content */}
        <div style={styles.right}>
          <div style={styles.kicker}>ABOUT US</div>

          <h1 style={styles.title}>
            AMT "African Machinery Technologies" System-Engineering SARL
          </h1>

          <p style={styles.lead}>
            we are a tech company based in Douala, Cameroon.
            <br />
            AMT Systems Engineering SARL is a key player in Cameroon’s industrial landscape. We offer our
            services to local partner in a B2B context.
          </p>

          {/* Vision */}
          <div style={styles.block}>
            <div style={styles.blockTitle}>Our Vision:</div>
            <ul style={styles.list}>
              <li>economic and industrial viability of Africa</li>
              <li>AMT Systems-Engineering as best in class</li>
              <li>Youth entrepreneurship as base for future growth</li>
            </ul>
          </div>

          {/* Mission */}
          <div style={styles.block}>
            <div style={styles.blockTitle}>Mission:</div>
            <ul style={styles.list}>
              <li>We develop local solutions for local needs</li>
              <li>We support our customer in their growth</li>
              <li>We promote youth entrepreneurship</li>
            </ul>
          </div>

          {/* Services line */}
          <p style={styles.servicesIntro}>
            The company offers the following services to its B2B customers:
          </p>

          {/* Cards grid */}
          <div style={styles.cardsGrid}>
            <Card text="Engineering of innovative solutions and prototyping" />
            <Card text="Technical and industrial procurement" />
            <Card text="IT solutions and Services" />
            <Card text="Data engineering and analytics" />
          </div>

          <button style={styles.cta}>More About Us</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  section: {
    background: "#ffffff",
    width: "100%",
  },
  wrapper: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "40px 20px 80px",
    display: "grid",
    gridTemplateColumns: "1.05fr 1fr",
    gap: "48px",
    alignItems: "center",
  },
  left: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "90%",
    height: "auto",
    objectFit: "contain",
    maxWidth: 520,
  },
  right: {
    color: "#0b1e39",
  },
  kicker: {
    fontSize: 14,
    letterSpacing: 1.2,
    fontWeight: 700,
    color: "#193a6a",
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    lineHeight: 1.25,
    fontWeight: 800,
    color: "#1f3b73",
    margin: "0 0 14px",
  },
  lead: {
    color: "#2f4d7a",
    fontSize: 15.5,
    lineHeight: 1.7,
    margin: "0 0 18px",
  },
  block: { marginBottom: 14 },
  blockTitle: {
    fontWeight: 700,
    color: "#1f3b73",
    marginBottom: 4,
  },
  list: {
    margin: "0 0 4px 0",
    paddingLeft: 18,
    color: "#2f4d7a",
    lineHeight: 1.7,
    fontSize: 15,
  },
  servicesIntro: {
    marginTop: 14,
    marginBottom: 14,
    color: "#2f4d7a",
    fontSize: 15,
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 14,
    marginBottom: 20,
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#ffffff",
    border: "1px solid #d9e6ff",
    borderRadius: 10,
    padding: "12px 14px",
    boxShadow: "0 1px 0 rgba(10,30,60,0.03)",
  },
  checkWrap: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 26,
    height: 26,
  },
  cardText: {
    color: "#183b73",
    fontWeight: 600,
    fontSize: 14.5,
  },
  cta: {
    background: "#173a6a",
    color: "#fff",
    border: "none",
    padding: "12px 20px",
    borderRadius: 8,
    fontWeight: 700,
    cursor: "pointer",
  },

  /* Responsive */
  "@media (max-width: 1024px)": {},
};

// Simple responsive fallback using a tiny hook-less CSS rule:
const styleTag = document.createElement("style");
styleTag.innerHTML = `
@media (max-width: 1024px){
  .about-grid{ grid-template-columns: 1fr !important; }
}
`;
document.head.appendChild(styleTag);

export default AboutSection;
