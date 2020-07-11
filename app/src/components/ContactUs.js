import React from 'react'
import {Cell} from 'react-mdl';

function ContactUs(){
  return(
    <div className = "contactUs">
      <p style={{fontSize: '44px', fontWeight: '400'}}>Contact Us</p>
      <Cell col={6}>
            <hr/>

            <div className="about-paragraph">
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
              eka maneno
             <br></br>
              maneno maneno
               </p>  
            
            </div>
      </Cell>
      <p>Send us a message and join a STEAM-Lab Track or share your knowledge in one of the key areas.
      </p>
      <br />
      <p> <b>Sign Up here</b> </p>
      <p>put the google link here.</p>


      <section id="contact" class="grid"> 
      <div >
          <div className = "content-wrap">
           <h1 id="title-name"> STEAM LAB </h1>
          </div>
       </div>
      </section>

   
    </div> 
  );
}

export default ContactUs;
