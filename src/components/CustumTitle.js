import React from "react";
import {Typography } from "@mui/material";


const gradientStyle = {
  background: "linear-gradient(90deg,rgb(102, 188, 70),rgb(65, 66, 141),red)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const CustumTitle = ({text}) =>{
    return(
       <Typography variant="h4" fontWeight="bold" gutterBottom sx={gradientStyle}>
            {text}
       </Typography>
    )
}

export default CustumTitle;