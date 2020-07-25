import React from 'react';
import {Card, CardTitle, CardText, CardActions, CardMedia, Button,} from 'react-mdl';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const Courses = () =>{
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const handleExpanClick = () =>{
		setExpanded(!expanded);
	};
	return(
		<div className = "courses">
		<Card shadow={5} style={{minwidth: '450px', height: '320px', margin: 'auto'}} className={classes.root}>
		    <CardTitle expand style={{color: '#ffff', background: '#7d5a5a'}}  className={classes.media}>Intro to HTML & CSS</CardTitle>
		    <CardMedia component="img" square src={require('../images/bulbs.jpg')} /> 
		    <CardText>
		       Moodify generates song suggestions based on a user’s mood. The project utilized Spotify API, ReactJS and Node.JS. 
  		    </CardText>
    		<CardActions border>
        	<Button colored><a href = "https://github.com/csc4790-fall2019/Moodify" style = {{color: "blue"}}>Github</a></Button>
        	<Button colored> <a href = "https://www.youtube.com/watch?v=rnjEukvtu-w" style = {{color: "blue"}}>Live Demo </a></Button>
    		</CardActions>

		</Card>

			<Card shadow={5} style={{minwidth: '450px', height: '320px', margin: 'auto'}} className={classes.root}>
		    <CardTitle expand style={{color: '#ffff', background: '#f1d1d1'}}>Intro to Java</CardTitle>
		    <CardText>
		         Face Recognition App recognizes faces using Clarify API. The website was implemented using ReactJS, Node.JS, and PostgreSQL. 
  			  </CardText>
    		<CardActions border>
	        	<Button colored><a href = "https://github.com/shannonkar/FaceRecognitionApp" style = {{color: "blue"}}>Github </a></Button>
	        	<Button colored> <a href = "https://www.youtube.com/watch?v=xtEQ5epL-ZI" style = {{color: "blue"}}>Live Demo</a></Button>
    		</CardActions>

			</Card>
			<Card shadow={5} style={{minwidth: '450px', height: '320px', margin: 'auto'}} className={classes.root}>
		    <CardTitle expand style={{color: '#ffff', background: '#ad6989'}}>Intro to Python</CardTitle>
		    <CardText>
		       Worked in a team of 4 students to design, create and test a 2D platformer game using C#, Unity and Microsoft Visual Studio
  			  </CardText>
    		<CardActions border>
        	<Button colored><a href = "https://github.com/shannonkar/Bruno-2D-Platformer-Game-" style = {{color: "blue"}}>Github </a></Button>
        	<Button colored> <a href = "https://www.youtube.com/watch?v=GJopQrEOTAY" style = {{color: "blue"}}>Live Demo </a></Button>
    		</CardActions>
			</Card>
		</div>
		)

}
export default Courses;