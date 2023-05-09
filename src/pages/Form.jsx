import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import AnimatedButton from '../components/AnimatedButton';
import AnimatedText from '../components/AnimatedText';
//MUI
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
//Motion
import { motion } from 'framer-motion'



const Form = () => {
  const [sent, setSent]= useState(false)
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_YOUR_SERVICE_ID,
      import.meta.env.VITE_YOUR_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_YOUR_PUBLIC_KEY
    )
      .then((result) => {
        console.log('sent');
        console.log(result.text);
        setSent(true)
        // Clear form fields after successful submission
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const goToLinkIn = (deployment) => {
    window.open(`https://www.linkedin.com/in/juan-buitrago-047a4a206/`, '_blank')
  }
  const goToGitHub = (deployment) => {
  window.open(`https://github.com/S4NCHOPANZ4`, '_blank')
  }

  const cardVariants = {
    offscreen: {
      opacity: 0,
      scale: .9,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <div className="form_container">
      <div className="form_sub contact">
        <AnimatedText text={`< CONTACT ME />`} clase="title" />
        <AnimatedText text={`Let's Work Together!`} clase="lets" />
        <p className='c_mail'>📧 buitr4go@gmail.com</p>
        <div className='contact_icons upper_icons'>
          <GitHubIcon className='contact_icon' onClick={()=>{goToGitHub()}}/>
          <LinkedInIcon className='contact_icon' onClick={()=>{goToLinkIn()}}/>
        </div>
      </div>
      <>{sent? 
          <motion.div 
          variants={cardVariants}
          initial="offscreen"
          whileInView="onscreen" 
          className="form_sub sent_cont">
            <div className='sent_cont_tnx'>
              <LocalPostOfficeIcon className='sent_tnx_i'/>
              <p className='sent_tnx_t'>Thank you for getting in touch!</p>
              <p className='sent_tnx_p'>Your message means a lot to me, and I'm grateful for the opportunity to connect. I'll respond promptly. Thanks again!</p>
           
            </div>
            
          </motion.div>:
          <form ref={form} onSubmit={sendEmail} className="form_sub form">
          <input
            required 
            name="user_name"
            type="text"
            placeholder="Name"
            className="field"
            value={formData.user_name}
            onChange={handleChange}
          />
          <input
            required 
            name="user_email"
            type="email"
            placeholder="E-mail"
            className="field"
            value={formData.user_email}
            onChange={handleChange}
          />
          <textarea
            required 
            name="message"
            style={{ overflow: 'auto', resize: 'none' }}
            placeholder="Message"
            className="field text"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="button_submit">
            <AnimatedButton text="Submit" type="submit" clase={"submit_button"}/>
          </div>
          <div className='contact_icons lower_icons'>
          <GitHubIcon className='contact_icon' onClick={()=>{goToGitHub()}}/>
          <LinkedInIcon className='contact_icon' onClick={()=>{goToLinkIn()}}/>
         </div>
          </form>
          
      }
        <div className='footer'>
          <p>Crafted with passion by  Juan Buirago!</p>
          </div>
     
      </>
    
    </div>
  );
};

export default Form;