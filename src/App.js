import React, { Component } from 'react';
import './App.css';
import EditCards from './EditCards';
import StudyCards from './StudyCards';


class App extends Component {
	state = {
		cardNum: 0,
		studyMode: false,
		cards: [
			{id: 1, front: "Question", back: "Answer", learning: false, },
			{id: 2, front: "let", back: "let is block scoped.", learning: true, },
			{id: 3, front: "Arrow function", back: "=> ", learning: true, },
		]
	}

  render() {
		const cards = this.state.cards
		const mode = this.state.studyMode
		const flip = this.flipMode

		if (mode) {
				return (
					<StudyCards
					cards={cards}
					mode={flip}
					/>
				)
		} else {
				return (
					<EditCards
					cards={cards}
					mode={flip}
					addCard={this.addCard}
					deleteCard={this.deleteCard}
					/>
				)
		}
	}

	flipMode = () => {
		this.setState(state => ({
			studyMode: !state.studyMode
		}))
	}

	addCard = (front, back) => {
		this.setState(state => ({
			cards: [...state.cards, { front, back }]
		}));
	}

	deleteCard = (index) => {
		this.setState(state => {
			let cards = [...state.cards];
			cards.splice(index, 1);
			return { cards }
		})
	}
}

export default App;
