var React = require('react');
var ProductComponent = require('./ProductComponent');
var Products=require('../data/products');

module.exports = React.createClass({
	render: function() {
		var allProducts=Products.map(function(product){
			return <ProductComponent key={product.cid} product={product}/>
		});
		return (
			<div className="row">
				<h1>Products</h1>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
					{allProducts}
					</tbody>
				</table>
			</div>
		);
	}
});