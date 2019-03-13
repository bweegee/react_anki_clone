import React from 'react';
import {Button, Table, Form, Container, } from 'semantic-ui-react';

class EditCards extends React.Component {
	state = {
		front: "",
		back: ""
	}


	render() {
		const rows = this.props.cards.map((card, i) => {
			return (
				<tr key={i}>
					<td>{card.front}</td>
					<td>{card.back}</td>
					<td>{card.learning}</td>
					<td><Button
								data-index={i}
								onClick={this.deleteCard}
								color='red'
								size='tiny'
							>
							Delete
						</Button>
					</td>
				</tr>
			)
		})

		return (
			<div>
				<h2>Edit Cards</h2>
				<Table celled >
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Front</Table.HeaderCell>
							<Table.HeaderCell>Back</Table.HeaderCell>
							<Table.HeaderCell>Learning</Table.HeaderCell>
							<Table.HeaderCell>Delete</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{rows}
					</Table.Body>
				</Table>
				<br />

				<Form>
					<Form.Group widths='equal'>
						<Form.Input onChange={this.handleChange} fluid name="front" placeholder="Question" value={this.state.front}/>
						<Form.Input onChange={this.handleChange} fluid name="back" placeholder="Answer" value={this.state.back} />
						<Form.Button onClick={this.addCard}color='green' size='tiny'>Add Card</Form.Button>
					</Form.Group>
				</Form>
				<hr />

				<br />
				<Container textAlign='center'>
				<Button onClick={this.props.mode}>Study Cards</Button>
				</Container>
			</div>
		)
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	addCard = () => {
		this.props.addCard(this.state.front, this.state.back);
		this.setState({
			front: "",
			back: ""
		})
	}

	deleteCard = (e) => {
		this.props.deleteCard(e.target.dataset.index);
	}
}


export default EditCards;
