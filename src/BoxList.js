import React from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { connect } from "react-redux";

function BoxList(props) {
	return (
		<div>
			<NewBoxForm />
			{props.boxes.map((d) => (
				<Box
					id={d.id}
					key={d.id}
					width={d.width}
					height={d.height}
					color={d.color}
				/>
			))}
		</div>
	);
}

const mapStateToProps = (state) => ({ boxes: state.boxes });

export default connect(mapStateToProps)(BoxList);
