import React from 'react';
import {Button, Container, Header, Segment, } from 'semantic-ui-react';

class StudyCards extends React.Component {
	state = {
		showAnswer: false,
	}

	render() {
		let cardNum = 0;
		const cards = this.props.cards;

		const answer = (
				<Segment tertiary textAlign='center'>
					<Header as='h1'>{ cards[cardNum].back }</Header>
				</Segment>
			)

		return (
			<Container textAlign='center'>
				<Header as='h1'>{ cards[cardNum].front }</Header>
				<hr />

				{ this.state.showAnswer ? answer : null }
				<Button onClick={this.toggleAnswer} size='tiny'>Show Answer</Button>

				<br />
				<br />
					<Container textAlign='center'>
						<Button onClick={this.props.mode}>Edit Cards</Button>
					</Container>
				</Container>
		)
	}

	toggleAnswer = () => this.setState({ showAnswer: !this.state.showAnswer, })
}

export default StudyCards;
