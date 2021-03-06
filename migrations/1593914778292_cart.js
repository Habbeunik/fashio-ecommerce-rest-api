/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.createTable('cart', {
		id: 'id',
		quantity: { type: 'integer', notNull: true },
		customerId: {
			type: 'integer',
			references: 'customers'
		},
		productid: { type: 'integer', references: 'products' }
	});
};

exports.down = (pgm) => {};
