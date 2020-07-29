import React from "react";

const footerStyle = {
  backgroundColor: "#00008B",
  fontSize: "20px",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  left: "0",
  bottom: "0",
  height: "430px",
  width: "100%",
  float:"center",
  color:"white"
};

function CareerDev() {
  return (
    <div style={footerStyle} >  
    <h5>Please sign up for our Bi-Weekly Career Development Sessions</h5>  
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdIbf2A6DyGVmB7-CLGs5MXok4AjLEYCQyHmSko1CVyePwxlw/viewform?embedded=true" width="680" height="975" frameborder="0" marginheight="0" marginwidth="0" align="center">Loading…</iframe>  
    </div>
    );
}
export default CareerDev;