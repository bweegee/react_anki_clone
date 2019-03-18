import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
// import StudyCards from './StudyCards';
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Cards from "./components/Cards";
import NoMatch from "./components/NoMatch";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cards" component={Cards} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>

// class App extends Component {
//   state = {
//     studyMode: false,
//     cards: [
//       {id: 1, front: 'Question', back: 'Answer', learning: false},
//       {id: 2, front: 'let', back: 'let is block scoped.', learning: true},
//       {id: 3, front: 'Arrow function', back: '=>', learning: true},
//     ],
//   };

//   render() {
//     const cards = this.state.cards;
//     const mode = this.state.studyMode;
//     const flip = this.flipMode;
//     const size = this.state.cards.length;

//     if (mode) {
//       return <StudyCards cards={cards} mode={flip} deckSize={size} />;
//     } else {
//       return (
//         <EditCards
//           cards={cards}
//           mode={flip}
//           addCard={this.addCard}
//           deleteCard={this.deleteCard}
//         />
//       );
//     }
//   }

  // flipMode = () => {
  //   this.setState(state => ({
  //     studyMode: !state.studyMode,
  //   }));
  // };

  // addCard = (front, back) => {
  //   this.setState(state => ({
  //     cards: [...state.cards, {front, back}],
  //   }));
  // };

  // deleteCard = index => {
  //   this.setState(state => {
  //     let cards = [...state.cards];
  //     cards.splice(index, 1);
  //     return {cards};
  //   });
  // };

  // editCard = index => {
  //   this.setState(state => ({}));
  // };
// }
)

export default App;
