import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

export default class BoxList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			boxes: [],
		};
		this.create = this.create.bind(this);
		this.remove = this.remove.bind(this);
	}
	remove(id) {
		this.setState({
			boxes: this.state.boxes.filter((box) => box.id !== id),
		});
	}
	create(newBox) {
		this.setState({
			boxes: [...this.state.boxes, newBox],
		});
	}
	render() {
		return (
			<div>
				<NewBoxForm create={this.create} />
				{this.state.boxes.map((d) => (
					<Box
						id={d.id}
						key={d.id}
						width={d.width}
						height={d.height}
						color={d.color}
						remove={this.remove}
					/>
				))}
			</div>
		);
	}
}
