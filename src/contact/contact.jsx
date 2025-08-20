import React, { useState } from "react";
import './contact.css'


function Contact() {
const[form , setForm ]=useState({
  firstName:"",
  lastName:"",
  email:"",
  message:"",
});
const [touched, setTouched]=useState({
  firstName:false,
  lastName:false,
  email:false,
  message:false,
 
});
const handleBlur = (e) =>{
  setTouched({...touched, [e.target.name]:true});
};
const[errors,setErrors]= useState({});
const nomPattern = /^[^\d]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  if (!form.email.trim()) {
    newErrors.email = "L'email est requis";
  } else if(!emailPattern.test(form.email)){
    newErrors.email = "Adresse email invalide";
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
    if (!updated.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if(!emailPattern.test(updated.email)){
      newErrors.email = "Adresse email invalide";
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
        email:"",
        message:"",
      });
    
  }
 };
    return(
        <>
        <section className="contact">
            <div className="bloc1" >
            <h1 style={{color:"blue"}} className=" text-white text-2xl font-bold my-7">Contact Us</h1>
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

        </div>
        <div className="bloc2">
            <form action="" onSubmit={handleSubmit}>
                <div className="form">
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
                     <button className="bg-white text-blue-800 px-3 py-2 mx-8 my-4 rounded font-bold shadow hover:bg-blue-100 transition"style={{backgroundColor:"blue", color:"white"}}>Submit</button>
                </div>

            </form>
        </div>
        </section>

        
        </>

    );
    
}
export default Contact;