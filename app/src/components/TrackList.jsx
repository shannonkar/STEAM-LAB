import React from 'react';
import Track from './Track';

const TrackList = ({CourseInformation}) => {
	return(
	<div style = {{display: 'flex', justifyContent: 'space-between'}}>
	{CourseInformation.map((course, i) =>{
		return(
			<Track 
				key = {i}
				id = {i}
				title = {CourseInformation[i].title}
				shortDescription = {CourseInformation[i].shortDescription}
				longDescription = {CourseInformation[i].longDescription}
				/>
			)

		})
	}
	</div>
	)
}
export default TrackList;