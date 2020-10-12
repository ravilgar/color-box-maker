// remove(id) {
//     this.setState({
//         boxes: this.state.boxes.filter((box) => box.id !== id),
//     });
// }
// create(newBox) {
//     this.setState({
//         boxes: [...this.state.boxes, newBox],
//     });
// }

export const remove = (id) => ({
	type: "REMOVE_BOX",
	payload: id,
});

export const create = (payload) => ({
	type: "CREATE_BOX",
	payload,
});
