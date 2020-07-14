/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.alterColumn('cart', 'customer_id', {
		references: 'customers',
		unique: true,
		primaryKey: true
	});

	pgm.alterColumn('cart', 'product_id', {
		references: 'customers',
		unique: true,
		primaryKey: true
	});
};

exports.down = (pgm) => {};
