import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import TeamworkIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import { motion } from "framer-motion";
import CustumTitle from "../CustumTitle";
import TabSocialMedia from "./TabSocialMedia.components"
import img1 from "../../assets/contact_spire.svg";

const AboutUs = () => {
  return (
    <Container sx={{ py: 10, textAlign: "center" }}>
       <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
      
          <CustumTitle text="Restons en contact"/>
  
      </motion.div>

      
      <Grid container spacing={5} alignItems="center">
      
        <Grid item xs={12} md={6} textAlign="left">
        <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
            Rejoiner nous sur
            <TabSocialMedia/>
          </motion.div>
        </Grid>
       
        <Grid item xs={12} md={6} textAlign="center">
          <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                 <img style={{width:'100%' , height:'300px'}} src={img1}/>
               </motion.div>      
        </Grid>   
      </Grid>
      


    </Container>
  );
};

export default AboutUs;
