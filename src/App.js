import React, { Component } from 'react';
import './App.css';
import EditCards from './EditCards';
import StudyCards from './StudyCards';

class App extends Component {
	state = {
		cardNum: 0,
		showAnswer: false,
		cards: [
			{id: 1, front: "Question", back: "Answer", learning: false, },
			{id: 2, front: "let", back: "let is block scoped.", learning: true, },
			{id: 3, front: "Arrow function", back: "=> ", learning: true, },
		]
	}

  render() {
		return (
			<div>
				<EditCards 
					// cards={this.state.cards} 
				/>
				<StudyCards
					// cards={this.state.cards}
				/>
			</div>
		)
  }
}

export default App;
