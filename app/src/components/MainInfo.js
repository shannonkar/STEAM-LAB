import React from 'react'


const space = {
  backgroundColor: "#101010",
  fontSize: "20px",
  padding: "10px",
  textAlign: "center",
  left: "0",
  bottom: "0",
  width: "100%",
  color: "white",
};


function MainInfo() {
  return (
    <div id = "main">
    <div style={space}> <h2> KEY AREAS</h2></div> 
    <div className= "boxes">
    	<div className= "box">
    		<i className= "fas fa-chart-pie fa-4x"></i>
    		<h2>Tutoring</h2>
    		<p>STEAM-LAB's core area is the passing and exchange of technological knowhow to learners of all levels.We cover STEM and select Arts. We suplement this with the local curriculum where we extensively tutor and keep the 
            learners up-to-date with their material.</p>
            <button>Learn More </button>
    	</div> 

    	<div className= "box">
    		<i className= "fas fa-chart-pie fa-4x"></i>
    		<h2>Mentorship</h2>
    		<p> STEAM-LAB provides a platform for mentorship for the learners. We present our learners with the opportunity to be guided and have 
            a place for support. Our dedicated mentors are extending the gift of innovation and skillset to drive the future & holding the hand of younger innovators!!</p>
             <button>Learn More </button>
    	</div>     


    	<div className= "box">
    		<i className= "fas fa-chart-pie fa-4x"></i>
    		<h2>Networking</h2>
    		<p>Connect with our extensive network of tutors, teachers and technology professionals. It takes a village- we bring the village home! </p>
         <button>Learn More </button>
    	</div>  



    </div>
    </div>
  );
}

export default MainInfo;