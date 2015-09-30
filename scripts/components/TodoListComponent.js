var React = require('react');
var TodoComponent = require('./TodoComponent');
var Todos=require('../data/todos');

module.exports = React.createClass({
	render: function() {
		var allTodos=Todos.map(function(todo){
			return <TodoComponent key={todo.cid} todo={todo}/>
		});
		return (
			<div className="row">
				<h1>Todos</h1>  
				<table className="table">
					<thead>
						<tr>
							<th>Description</th>
							<th>Completed</th>
						</tr>
					</thead>
					<tbody>
					{allTodos}
					</tbody>
				</table>
			</div>

		);
	}
});