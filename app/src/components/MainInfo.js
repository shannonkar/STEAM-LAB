import React from 'react'


const space = {
  backgroundColor: "#101010",
  fontSize: "20px",
  padding: "10px",
  textAlign: "center",
  left: "0",
  bottom: "0",
  height: "50px",
  width: "100%",
  color: "white",
};


function MainInfo() {
  return (
    <div>
    <div style={space}> <h2> KEY AREAS</h2></div> 
    <div className= "boxes">
    	<div className= "box">
    		<i className= "fas fa-chart-pie fa-4x"></i>
    		<h2>Tutoring</h2>
    		<p>Our core aread is the delivery of technological knowhow to learners of al levels.We cover Science Technology Engineering Arts and Maths. We suplement this with the local curriculum where we extensively tutor and keep the 
            learners up-to-date with their material</p>
    	</div> 

    	<div className= "box">
    		<i className= "fas fa-chart-pie fa-4x"></i>
    		<h2>Mentorship</h2>
    		<p> We acknowledge the value of mentorship both in younger and older learner population. By providing a platform for mentorship, we present our learners with the opportunity to be guided and have 
            a place for support. For our ,mentors, what better ways than to extend the gift of innovation and skillset to drive the future!!</p>
    	</div>     


    	<div className= "box">
    		<i className= "fas fa-chart-pie fa-4x"></i>
    		<h2>Networking</h2>
    		<p>Connect with our extensive network of tutors, techers and technology professionals. It takes a village- we bring the village home!</p>
    	</div>  



    </div>

    

    </div>
  );
}

export default MainInfo;