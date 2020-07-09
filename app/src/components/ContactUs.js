import React from 'react'
import {Cell} from 'react-mdl';

function ContactUs(){
  return(
    <div>
      <p style={{fontSize: '44px', fontWeight: '400'}}>Contact Us</p>
      <Cell col={6}>
            <hr/>

            <div className="about-paragraph">
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
             <br></br></p>  
            </div>
      </Cell>

    
      <br />
      <p> <b>Send us a message or fill below form to join a STEAM-Lab Track, and share your knowledge in one of the key areas.
      Tutoring with STEAM-LAB provides an opportunity to extend the gift of education to other 
      curious minds. </b> </p>
      <p></p>


      <section id="contact" class="grid"> 
      <div >
          <div className = "content-wrap">
           <h1 id="title-name"> STEAM LAB </h1>
          </div>
       </div>
      </section>

   
    </div > 
  );
}

export default ContactUs;
