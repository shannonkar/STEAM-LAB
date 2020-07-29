import React, { Component } from "react";
 

   
class About extends Component {
  render() {
    return (
      <div>

      <section class ="info">
        <img src="#333 url('/metalthingy.jpg');" alt="poster"/>
      
        <div>
          <h2> Who We Are</h2>
          <p>STEAM-LAB is Science and Technology centered initatieve that aims at increasing the 
            level of technology skills among kids in kenya. We offer offer learning support
            services with a keen focuses in Science, Technology, Engineering, 
             Arts and Mathematics.
          </p>
          <p>Teaching a generation.</p>
         </div>


         <div className = "banner-text"> 
              <h1>STEAM LAB KENYA</h1>
              <hr/>
              <p>STEAM-LAB is a Science, Technology, Engineering, Arts and Math centered program whose mission is to  
              increase the level of technology understanding, manipulation and development among young people in kenya. We foster innovation, growth and the capacity 
              to grow and be more.</p>
            </div>  
      </section>

      </div>
    );
  }
}
 
export default About;