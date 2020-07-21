import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch"
    }
  }
}));



const footerStyle = {
  backgroundColor: "#686868",
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


function ContactUs() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  let errors = [];
  function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  const formValidation = () => {
    setErrorMessages([]);

    const isNameValid = name !== "";
    const isMessageValid = message !== "";
 

    if (!isNameValid) {
      errors.push("Name is not valid, please try again.");
    }
    if (!ValidateEmail(email)) {
      errors.push("Email is not valid, please try again.");
    }
    if (email === "") {
      errors.push("Email field is empty, please try again.");
    }
    if (!isMessageValid) {
      errors.push("Message is not valid, please try again.");
    }

    if (errors.length > 0) {
      setShowErrors({ showErrors: true });
      setErrorMessages(errors);
    } else {
      setShowErrors({ showErrors: false });
      alert("Email Sent");
    }
  };

  return (
    <div className="container">	
        <div className="innerFormContainer">
        <div style={footerStyle} >
          <h2> Get in touch </h2>
          <form className={classes.root}>
            <TextField
              label="Name"
              placeholder="Jane Doe"
              type="text"
              variant="outlined"
              onChange={e => setName(e.target.value)}
            />
            <TextField
              label="Email"
              placeholder="janedoe@gmail.com"
              type="email"
              variant="outlined"
              onChange={e => setEmail(e.target.value)}
            />

            <TextField
              label="Message"
              placeholder="Joe Doe"
              type="text"
              variant="outlined"
              multiline
              rowsMax="3"
              onChange={e => setMessage(e.target.value)}
            />
            {showErrors
              ? errorMessages.map((item, index) => {
                  return <ul key={index}>{item}</ul>;
                })
              : null}
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={formValidation}
            >
              Submit
            </Button>
          </form>
      </div>
      </div>
    </div>
  );
}
export default ContactUs;