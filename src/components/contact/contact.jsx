import React, { useState } from "react";
import './contact.css'
import { motion } from 'framer-motion'; 
import {
  Box,
  Typography,
  Grid,
  Button,
  Paper,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery
} from '@mui/material';


function Contact() {
const[form , setForm ]=useState({
  firstName:"",
  lastName:"",
  email:"",
  phone:"",
  companyName:"",
  contactMode:"",
  message:"",
});
const [touched, setTouched]=useState({
  firstName:false,
  lastName:false,
  email:false,
  message:false,
  phone:false,
  companyName:false,
  contactMode:false,
 
});
const handleBlur = (e) =>{
  setTouched({...touched, [e.target.name]:true});
};
const[errors,setErrors]= useState({});
const nomPattern = /^[^\d]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d+$/;

const validation = () =>{
const newErrors = {};
  if (!form.firstName.trim()) {
    newErrors.firstName = "Le nom est requis";
  } else if(!nomPattern.test(form.firstName)){
    newErrors.firstName = "Le nom ne doit pas contenir de chiffre";
  } 
  if (!form.lastName.trim()) {
    newErrors.lastName = "Le prenom est requis";
  } else if(!nomPattern.test(form.lastName)){
    newErrors.lastName = "Le prenom ne doit pas contenir de chiffre";
  } 
   if (!form.companyName.trim()) {
    newErrors.companyName = "Le prenom est requis";
  } else if(!nomPattern.test(form.companyName)){
    newErrors.companyName = "Le prenom ne doit pas contenir de chiffre";
  } 
  if (!form.email.trim()) {
    newErrors.email = "L'email est requis";
  } else if(!emailPattern.test(form.email)){
    newErrors.email = "Adresse email invalide";
  }
    if (!form.phone.trim()) {
    newErrors.phone = "your phone number is required";
  } else if(!phonePattern.test(form.phone)){
    newErrors.phone = " The phone number should not contain letters";
  }
 
 
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
const handleChange = (e) => {
  setForm(prev => {
    const updated = { ...prev, [e.target.name]: e.target.value };
    // Validation à chaque changement
    const newErrors = {};
    if (!updated.firstName.trim()) {
      newErrors.firstName = "Le nom est requis";
    } else if(!nomPattern.test(updated.firstName)){
      newErrors.firstName = "Le nom ne doit pas contenir de chiffre";
    }
    if (!updated.lastName.trim()) {
      newErrors.lastName = "Le prenom est requis";
    } else if(!nomPattern.test(updated.lastName)){
      newErrors.lastName = "Le prenom ne doit pas contenir de chiffre";
    }
    if (!form.companyName.trim()) {
      newErrors.companyName = "Le prenom est requis";
    } else if(!nomPattern.test(form.companyName)){
      newErrors.companyName = "Le prenom ne doit pas contenir de chiffre";
    } 
    if (!updated.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if(!emailPattern.test(updated.email)){
      newErrors.email = "Adresse email invalide";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "your phone number is required";
    } else if(!phonePattern.test(form.phone)){
      newErrors.phone = " The phone number should not contain letters";
    }
    setErrors(newErrors);
    return updated;
  });
};
 const handleSubmit = (e) =>{
  e.preventDefault();
  if(validation()){

      alert("Votre message a été envoyé !");
      setForm({
        firstName:"",
        lastName:"",
        phone:"",
        companyName:"",
        contactMode:"",
        email:"",
        message:"",
      });
    
  }
 };
   
    return(
        
        <Grid sx={{flexDirection: { xs: 'column', md: 'row' }, display:'flex',marginBottom:'auto',paddingBottom:'20%' }} container spacing ={2}className="contact">
          <Grid item xs={12} md={10}>
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="bloc1"
            >
            <h1 style={{color:"blue"}} className=" text-white text-2xl font-bold my-7">Contact Us   </h1>
            <p> Need to get in touch with us? Either fill out the from with your inquiry or <br />find the email you'd like to contact below</p> <br /><br />
            <p><b style={{color:"blue"}}>email : </b>amtsystensengineering@gmail.com</p>
            <p><b style={{color:"blue"}}>Phone number : </b>amtsystensengineering@gmail.com</p>
            <p><b style={{color:"blue"}}>AMT'Office : </b>Douala, Cameroun, at Logpom street.(<a href="" style={{color:"blue", textDecoration:"none"}}>view map</a>)</p><br /><br />
            <h1 style={{color:"blue"}}className=" text-white text-2xl font-bold my-7" >what you get when asking your question:</h1>
            <ul>
                <li>  less than 12-hours response to your question</li>
                <li>  thoroughness and expertise of a Certified Exchange Specialist</li>
                <li>  Plan of action summarized in an email follow up</li>
            </ul>

        </motion.div>
       </Grid> 
       <Grid sx={{marginLeft:'15%', marginBottom:'auto'}} item xs={12} md={10}>
        <Paper altitude ={0} className="bloc2">
            <form action="" onSubmit={handleSubmit}>
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="form"
                >
                  <div className="name">
                      <div className="first">
                        <label htmlFor="" >First name<spam style={{color:"red"}}>*</spam></label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={form.fistName}
                          onChange={handleChange}
                          className=""
                          placeholder=""
                          onBlur={handleBlur}
                          required
                        />
                        {touched.firstName &&errors.firstName && <div className='alert'>
                          <p> <i>{errors.firstName}</i></p></div>
                        }
                    </div>
                    <div className="last">
                        <label htmlFor="" className="">Last name <spam style={{color:"red"}}>*</spam></label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          className=""
                          placeholder=""
                          onBlur={handleBlur}
                          required
                        />
                        {touched.lastName &&errors.lastName && <div className='alert'>
                          <p> <i>{errors.lastName}</i></p></div>
                        }
                    </div>
                  </div>

                    <div className="email">
                        <label htmlFor="" className="">email<spam style={{color:"red"}}>*</spam></label>
                        <input 
                          type="email" 
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className=""
                          placeholder=""
                          onBlur={handleBlur}
                          required
                        />
                        {touched.email &&errors.email && <div className='alert'>
                          <p> <i>{errors.email}</i></p></div>
                        }
                    </div>
                    <div className="email">
                        <label htmlFor="" className=""> Phone <spam style={{color:"red"}}>*</spam></label>
                        <input 
                          type="text" 
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className=""
                          placeholder=""
                          onBlur={handleBlur}
                          required
                        />
                        {touched.phone &&errors.phone && <div className='alert'>
                          <p> <i>{errors.phone}</i></p></div>
                        }
                    </div>
                    <div className="email">
                        <label htmlFor="" className="" style={{fontFamily:'arial'}}>Company name</label>
                        <input 
                          type="text" 
                          name="companyName"
                          value={form.companyName}
                          onChange={handleChange}
                          className=""
                          placeholder=""
                          onBlur={handleBlur}
                          required
                        />
                        {touched.companyName &&errors.companyName && <div className='alert'>
                          <p> <i>{errors.companyName}</i></p></div>
                        }
                    </div>
                      <div className="ema">
                        
                        <InputLabel id="demo-simple-select-label"  sx={{width:'89%', marginLeft:'5%',marginBottom:'-20px',fontFamily:'sans-serif'}}>Contact mode</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={form.contactMode}
                            
                            onChange={handleChange}
                            sx={{width:'89%', marginLeft:'5%',backgroundColor:'rgb(238, 237, 237)' }}
                          >
                            <MenuItem value='email'>email</MenuItem>
                            <MenuItem value='message'>message</MenuItem>
                            <MenuItem value='appel'>appel</MenuItem>
                          </Select>
                         
                    </div>
                    <div className="message">
                        <label htmlFor="" className="msge">what can we help you?</label>
                        <textarea  
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          className=""
                          placeholder=""
                          required
                        />
                    </div>

                      <Button variant="contained" color="primary" type="submit" sx={{ml:"6%"}} >
                          Submit
                      </Button>
                    

                </motion.div>

            </form>
        </Paper>
        </Grid>
        </Grid>

        
        

    );
    
}
export default Contact;