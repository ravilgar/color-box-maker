import React, { Component } from "react";
import "./NewBoxForm.css";
import { v4 as uuidv4 } from "uuid";

export default class NewBoxForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			width: "",
			height: "",
			color: "",
		};
		this.handleOnChange = this.handleOnChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleOnChange(e) {
		this.setState({
			[e.target.name]: e.target.value,
		});
	}
	handleSubmit(e) {
		e.preventDefault();
		const newBox = { ...this.state, id: uuidv4() };
		this.props.create(newBox);
		this.setState({ width: "", height: "", color: "" });
	}

	render() {
		return (
			<div className="NewBoxForm">
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="width">Width in px:</label>
					<input
						className="NewBoxForm-input"
						type="number"
						id="width"
						name="width"
						placeholder="The width is.."
						value={this.state.width}
						onChange={this.handleOnChange}
					/>
					<label htmlFor="height">Height in px:</label>
					<input
						className="NewBoxForm-input"
						type="number"
						id="height"
						name="height"
						placeholder="The height is.."
						value={this.state.height}
						onChange={this.handleOnChange}
					/>
					<label htmlFor="color">Backgroud-color:</label>
					<input
						className="NewBoxForm-input"
						type="text"
						id="color"
						name="color"
						placeholder="The background-color is.."
						value={this.state.color}
						onChange={this.handleOnChange}
					/>
					<button className="NewBoxForm-submit">Create New Box!</button>
				</form>
			</div>
		);
	}
}
