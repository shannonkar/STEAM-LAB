import React from 'react';
import {Card, CardTitle, CardActions} from 'react-mdl';


const Track = ({id, title, shortDescription, longDescription}) => {
	return(
		<div>
			<Card shadow={0} style={{width: '256px', height: '256px', background: '#3E4EB8'}}>
   				 <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
      				  <h4 style={{marginTop: '0'}}>
				            {title}<br />
				           {shortDescription}<br />
		              </h4>
    			  </CardTitle>
				</Card>
		</div>
		)
}
export default Track;