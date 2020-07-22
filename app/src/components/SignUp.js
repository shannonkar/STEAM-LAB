import React from 'react'


const footerStyle = {
  backgroundColor: "#000000",
  fontSize: "20px",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "10px",
  left: "0",
  bottom: "0",
  height: "430px",
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




function Form() {
  return (
    <div style={footerStyle} >  
    <h5>Sign Up for STEAM-LAB KE sessions</h5>    
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciZmrcLcctBz7mMksMANrxurR9MEoSaZU7VlsYqbjA_wRo9Q/viewform?embedded=true" width="500" height="370" frameborder="0" marginheight="0" marginwidth="0" align="center">Loading…</iframe>
    </div>
  );
}

export default Form;