import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
	const [description, setDescription] = useState(todo.description);

	const updateDescription = async (e) => {
		e.preventDefault();
		try {
			const body = { description };
			await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(body),
			});

			window.location = "/";
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<Fragment>
			<button
				type="button"
				className="btn btn-warning"
				data-bs-toggle="modal"
				data-bs-target={`#id${todo.todo_id}`}
			>
				Edit
			</button>

			<div
				className="modal"
				id={`id${todo.todo_id}`}
				onClick={() => setDescription(todo.description)}
			>
				<div className="modal-dialog ">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Edit Todo</h5>
							<button
								type="button"
								className="close"
								data-bs-dismiss="modal"
								onClick={() => setDescription(todo.description)}
							>
								&times;
							</button>
						</div>

						<div className="modal-body">
							<input
								type="text"
								className="form-control"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>

						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-warning"
								data-bs-dismiss="modal"
								onClick={(e) => updateDescription(e)}
							>
								Edit
							</button>
							<button
								type="button"
								className="btn btn-danger"
								data-bs-dismiss="modal"
								onClick={() => setDescription(todo.description)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default EditTodo;
