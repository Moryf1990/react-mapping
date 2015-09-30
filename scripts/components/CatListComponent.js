var React = require('react');
var CatComponent = require('./CatComponent');
var Cats=require('../data/cats');

module.exports = React.createClass({
	render: function() {
		var allCats=Cats.map(function(cat){
			return <CatComponent key={cat.cid} cat={cat}/>
		});
		return (
			<div className="row">
				<h1>Cats</h1>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Picture</th>
						</tr>
					</thead>
					<tbody>
					{allCats}
					</tbody>
				</table>
			</div>
		);
	}
});