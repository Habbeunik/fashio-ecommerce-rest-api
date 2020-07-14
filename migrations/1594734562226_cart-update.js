/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
	pgm.renameColumn('cart', 'customerId', 'customer_id');
	pgm.renameColumn('cart', 'productid', 'product_id');
	pgm.dropColumn('cart', 'id');
	pgm.addColumns('cart', {
		created_at: {
			type: 'timestamp',
			notNull: true,
			default: pgm.func('current_timestamp')
		}
	});
};

exports.down = (pgm) => {};
