import React from 'react';

class StudyCards extends React.Component {
	render() {
		return (
			<div>
				<h1>Study Cards</h1>
				<hr />
				<button onClick={this.props.mode}>Edit Cards</button>
		</div>
		)
	}
}


export default StudyCards;
