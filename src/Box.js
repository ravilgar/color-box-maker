// import React, { Component } from "react";
// import "./Box.css";

// export default class Box extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {};
// 		this.handleRemove = this.handleRemove.bind(this);
// 	}
// 	handleRemove(e) {
// 		this.props.remove(this.props.id);
// 	}

// 	render() {
// 		return (
// <div
// 	className="Box"
// 	style={{
// 		width: `${this.props.width}px`,
// 		height: `${this.props.height}px`,
// 	}}
// >
// 	<div
// 		className="Box-square"
// 		style={{
// 			width: `${this.props.width}px`,
// 			height: `${this.props.height}px`,
// 			backgroundColor: this.props.color,
// 		}}
// 	></div>
// 	<button className="Box-button" onClick={this.handleRemove}>
// 		x
// 	</button>
// </div>
// 		);
// 	}
// }

import React from "react";
import { connect } from "react-redux";
import { remove } from "./actions";

const Box = (props) => {
	return (
		<div
			className="Box"
			style={{
				width: `${props.width}px`,
				height: `${props.height}px`,
			}}
		>
			<div
				className="Box-square"
				style={{
					width: `${props.width}px`,
					height: `${props.height}px`,
					backgroundColor: props.color,
				}}
			></div>
			<button
				className="Box-button"
				onClick={() => {
					props.remove(props.id);
				}}
			>
				x
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { remove };

export default connect(mapStateToProps, mapDispatchToProps)(Box);
