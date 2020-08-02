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
		    <CardTitle expand style={{color: '#ffff', background: '#228B22'}}  className={classes.media}>Intro to Web Development</CardTitle>
		   
		    <CardText>
		       We cover HTML and CSS concepts and culminate with a project that puts the lessons into practice. 
  		    </CardText>
    		<CardActions border>
        	<Button colored><a href = "https://forms.gle/4rD53PSFZyWQp3Xp6" style = {{color: "blue"}}>Register Here</a></Button>
    		</CardActions>

		</Card>

			<Card shadow={5} style={{minwidth: '450px', height: '320px', margin: 'auto'}} className={classes.root}>
		    <CardTitle expand style={{color: '#ffff', background: '#4B0082'}}>Intro to Java</CardTitle>
		    <CardText>
		       TBD
  			  </CardText>
    		<CardActions border>
	        	<Button colored><a href = "https://forms.gle/4rD53PSFZyWQp3Xp6" style = {{color: "blue"}}>Register Here</a></Button>
    		</CardActions>

			</Card>
			<Card shadow={5} style={{minwidth: '450px', height: '320px', margin: 'auto'}} className={classes.root}>
		    <CardTitle expand style={{color: '#ffff', background: '#C71585'}}>Intro to Python</CardTitle>
		    <CardText>
		       TBD
  			  </CardText>
    		<CardActions border>
        	<Button colored><a href = "https://forms.gle/4rD53PSFZyWQp3Xp6" style = {{color: "blue"}}>Register Here</a></Button>
    		</CardActions>
			</Card>
		</div>
		)
}
export default Courses;