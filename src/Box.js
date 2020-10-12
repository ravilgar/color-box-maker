import React, { Component } from "react";
import "./Box.css";

export default class Box extends Component {
	constructor(props) {
		super(props);

		this.state = {};
		this.handleRemove = this.handleRemove.bind(this);
	}
	handleRemove(e) {
		this.props.remove(this.props.id);
	}

	render() {
		return (
			<div
				className="Box"
				style={{
					width: `${this.props.width}px`,
					height: `${this.props.height}px`,
				}}
			>
				<div
					className="Box-square"
					style={{
						width: `${this.props.width}px`,
						height: `${this.props.height}px`,
						backgroundColor: this.props.color,
					}}
				></div>
				<button className="Box-button" onClick={this.handleRemove}>
					x
				</button>
			</div>
		);
	}
}
