import React from 'react';

const footerStyle = {
  backgroundColor: "#191970",
  fontSize: "20px",
  color: "white",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  left: "0",
  bottom: "0",
  height: "450px",
  width: "100%"
};

const phantomStyle = {
  display: "block",
  padding: "20px",
  height: "90px",
  width: "100%"
};

function Footer() {
  return (
    <div>
      <div style={phantomStyle} />
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSciZmrcLcctBz7mMksMANrxurR9MEoSaZU7VlsYqbjA_wRo9Q/viewform?embedded=true" width="540" height="570" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      <div style={footerStyle}><h5 id="title-name"> STEAM LAB  2020 </h5>
      </div>

    </div>
  );
}

export default Footer;