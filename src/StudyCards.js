import React from 'react';
import {Button, Container, Header, Segment} from 'semantic-ui-react';

class StudyCards extends React.Component {
  state = {
    showAnswer: false,
    cardNum: 0,
    deckSize: this.props.deckSize,
    learning: 0,
    reviewed: 0,
  };

  render() {
    const cardNum = this.state.cardNum;
    const cards = this.props.cards;
    const deckSize = this.props.deckSize - 1;
    const reviewed = this.state.reviewed;

    const prev = (
      <Button onClick={this.prevCard} size="mini">
        Prev
      </Button>
    );

    const next = (
      <Button onClick={this.nextCard} size="mini">
        Next
      </Button>
    );

    const answer = (
      <Segment tertiary textAlign="center">
        <Header as="h1">{cards[cardNum].back}</Header>
        {cardNum !== 0 ? prev : null}
        {cardNum !== deckSize ? next : null}
      </Segment>
    );

    const cardDisplay = (
      <Container textAlign="center">
        <Header as="h1">{cards[cardNum].front}</Header>
        <hr />

        {this.state.showAnswer ? answer : null}
        <Button onClick={this.toggleAnswer} size="tiny">
          Show Answer
        </Button>

        <br />
        <br />
        <Container textAlign="center">
          <Button onClick={this.props.mode}>Edit Cards</Button>
        </Container>
      </Container>
    );

    return <div>{cardDisplay}</div>;
  }

  toggleAnswer = () => {
    this.setState(state => ({
      showAnswer: !state.showAnswer,
    }));
  };

  nextCard = () => {
    this.setState(state => ({
      cardNum: this.state.cardNum + 1,
      showAnswer: !state.showAnswer,
    }));
  };

  prevCard = () => {
    this.setState(state => ({
      cardNum: this.state.cardNum - 1,
      showAnswer: !state.showAnswer,
    }));
  };
}

export default StudyCards;
