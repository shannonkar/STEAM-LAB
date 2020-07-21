import React from 'react';



const footerStyle = {
  backgroundColor: "#696969",
  fontSize: "20px",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  left: "0",
  bottom: "0",
  height: "280px",
  width: "100%"
};


const pageMidSecStyle = {
  backgroundColor: "#F8F8FF",
  fontSize: "20px",
  color: "white",
  textAlign: "center",
  padding: "20px",
  left: "0",
  bottom: "0",
  height: "750px",
  width: "100%"
};



function Footer() {
  return (
    <div id = "footerline">
    
      <div style={footerStyle} >      

      
      <div className = "banner-text"> 
              <h1>STEAM LAB KENYA</h1>
              <hr/>
              <p>Mentorship| Tutoring| Career Development</p>
            </div>

            </div> 


    </div>
  );
}

export default Footer;
